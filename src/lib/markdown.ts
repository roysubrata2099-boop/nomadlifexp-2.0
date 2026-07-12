// src/lib/markdown.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

// Define a strict post interface for reliable compiler performance
export interface PostData extends Record<string, unknown> {
    slug: string;
    title: string;
    description: string;
    category: string;
    date: string;
    contentHtml: string;
}

// 🛡️ Auto-detect real content disk configurations safely
function getPostsDirectory(): string {
    const targets = [
        path.join(process.cwd(), "content/posts"),
        path.join(process.cwd(), "src/content/posts"),
        path.join(process.cwd(), "posts"),
    ];
    for (const target of targets) {
        if (fs.existsSync(target)) return target;
    }
    return targets[0];
}

const postsDirectory = getPostsDirectory();

function cleanSlug(slug: unknown): string {
    if (typeof slug !== "string") return "";
    try {
        return decodeURIComponent(slug)
            .replace(/\.\.+\//g, "")
            .replace(/[/\\]/g, "")
            .toLowerCase()
            .trim();
    } catch {
        return "";
    }
}

export function getAllPosts(): PostData[] {
    try {
        if (!fs.existsSync(postsDirectory)) return [];
        const fileNames = fs.readdirSync(postsDirectory);

        return fileNames
            .filter((fileName) => fileName.endsWith(".md"))
            .map((fileName) => {
                const fullPath = path.join(postsDirectory, fileName);
                const fileContents = fs.readFileSync(fullPath, "utf8");
                const { data, content } = matter(fileContents);

                // Ensure full text conversion is accessible on aggregate list lookups
                const parsedHtml = marked.parse(content, { async: false }) as string;

                // 🛡️ UNIFY SLUG PATH GENERATION TO LOWERCASE
                // This guarantees that generateStaticParams and links share the exact same URL structure
                const uniformSlug = fileName.replace(/\.md$/, "").toLowerCase().trim();

                return {
                    slug: uniformSlug,
                    title: data.title || fileName.replace(/\.md$/, "").replace(/-/g, " "),
                    description: data.description || "",
                    category: data.category || "discipline",
                    date: data.date || "",
                    contentHtml: parsedHtml,
                    ...data,
                };
            });
    } catch (error) {
        console.error("CRITICAL_MD_READ_ERROR:", error);
        return [];
    }
}

export function getPostBySlug(rawSlug: string): PostData | null {
    const sanitizedSlug = cleanSlug(rawSlug);
    if (!sanitizedSlug) return null;

    try {
        if (!fs.existsSync(postsDirectory)) return null;
        const fileNames = fs.readdirSync(postsDirectory);

        const matchedFile = fileNames.find((fileName) => {
            return fileName.replace(/\.md$/, "").toLowerCase().trim() === sanitizedSlug;
        });

        if (!matchedFile) return null;

        const fullPath = path.join(postsDirectory, matchedFile);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        // Render full document body structure cleanly
        const parsedHtml = marked.parse(content, { async: false }) as string;

        return {
            slug: sanitizedSlug,
            title: data.title || matchedFile.replace(/\.md$/, "").replace(/-/g, " "),
            description: data.description || "",
            category: data.category || "discipline",
            date: data.date || "",
            contentHtml: parsedHtml,
            ...data,
        };
    } catch (error) {
        console.error(`FAILED_TO_RESOLVE_SLUG: ${rawSlug}`, error);
        return null;
    }
}