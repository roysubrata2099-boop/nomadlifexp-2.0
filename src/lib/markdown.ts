import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

/**
 * 🛡️ LAYER 1 DEFENSE: Strict Path and Filename Sanitizer
 * Prevents Directory Traversal attacks (e.g., ../../etc/passwd)
 */
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

/**
 * SAFE CORE METHOD: Fetches all posts securely for static generation
 */
export function getAllPosts(): Record<string, unknown>[] {
    try {
        if (!fs.existsSync(postsDirectory)) return [];

        const fileNames = fs.readdirSync(postsDirectory);
        return fileNames
            .filter((fileName) => fileName.endsWith(".md"))
            .map((fileName) => {
                const fullPath = path.join(postsDirectory, fileName);
                const fileContents = fs.readFileSync(fullPath, "utf8");
                const { data } = matter(fileContents);

                return {
                    slug: fileName.replace(/\.md$/, ""),
                    ...data,
                };
            });
    } catch (error) {
        console.error("CRITICAL_MD_READ_ERROR:", error);
        return [];
    }
}

/**
 * 🛡️ LAYER 2 DEFENSE: Case-Insensitive File Resolver
 * Guarantees that lowercase URLs resolve files like "How-To-Build.md" smoothly
 */
export function getPostBySlug(rawSlug: string): Record<string, unknown> | null {
    const sanitizedSlug = cleanSlug(rawSlug);
    if (!sanitizedSlug) return null;

    try {
        if (!fs.existsSync(postsDirectory)) return null;

        const fileNames = fs.readdirSync(postsDirectory);

        // Find match ignoring casing
        const matchedFile = fileNames.find((fileName) => {
            const currentName = fileName.replace(/\.md$/, "").toLowerCase();
            return currentName === sanitizedSlug;
        });

        if (!matchedFile) return null;

        const fullPath = path.join(postsDirectory, matchedFile);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            slug: matchedFile.replace(/\.md$/, ""),
            contentHtml: content, // Passes markdown content cleanly
            ...data,
        };
    } catch (error) {
        console.error(`FAILED_TO_RESOLVE_SLUG: ${rawSlug}`, error);
        return null;
    }
}