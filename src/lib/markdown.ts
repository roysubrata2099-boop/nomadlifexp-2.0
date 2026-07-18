// src/lib/markdown.ts

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface PostData {
    slug: string;
    title: string;
    description: string;
    category: string;
    updatedAt: string;
    date: string;
    author: string;
    contentHtml: string;
    relatedArticles: string[];
    tags: string[];
    displayPillar: string;
    year?: number;
}

const postsDirectory = path.join(process.cwd(), "src/content/posts");

/**
 * Universal slugifier utility used by both the file processor and routing components.
 */
export const slugify = (text: string): string => {
    if (!text) return "";
    return text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
};

function renderMarkdown(content: string): string {
    try {
        if (!content || typeof content !== "string") return "";
        return String(
            remark()
                .use(html, { sanitize: false })
                .processSync(content)
        );
    } catch (error) {
        console.error("Markdown compilation failure:", error);
        return "";
    }
}

function normalizeFrontmatter(data: Record<string, unknown>): Omit<PostData, "slug" | "contentHtml"> {
    const fallbackIsoDate = new Date().toISOString();

    const cleanDate = typeof data.date === "string" ? data.date.trim() : fallbackIsoDate;
    const cleanUpdatedAt = typeof data.updatedAt === "string" ? data.updatedAt.trim() : cleanDate;

    return {
        title: typeof data.title === "string" ? data.title.trim() : "Untitled Post",
        description: typeof data.description === "string" ? data.description.trim() : "",
        category: typeof data.category === "string" ? data.category.trim() : "uncategorized",
        updatedAt: cleanUpdatedAt,
        date: cleanDate,
        author: typeof data.author === "string" ? data.author.trim() : "Anonymous",
        relatedArticles: Array.isArray(data.relatedArticles)
            ? data.relatedArticles
                .filter((item): item is string => typeof item === "string")
                .map((item) => slugify(item))
            : [],
        tags: Array.isArray(data.tags)
            ? data.tags
                .filter((item): item is string => typeof item === "string")
                .map((t) => t.trim())
            : [],
        displayPillar: typeof data.displayPillar === "string" ? data.displayPillar.trim() : "GENERAL",
        year: typeof data.year === "number" && !isNaN(data.year) ? data.year : undefined,
    };
}

export function getAllPosts(): PostData[] {
    try {
        if (!fs.existsSync(postsDirectory)) {
            console.error(`Missing posts directory path fallback: ${postsDirectory}`);
            return [];
        }

        const files = fs.readdirSync(postsDirectory);
        if (!Array.isArray(files)) return [];

        return files
            .filter((file) => typeof file === "string" && file.endsWith(".md"))
            .map((file) => {
                try {
                    const rawSlug = file.replace(/\.md$/, "");
                    const slug = slugify(rawSlug);
                    const fullPath = path.join(postsDirectory, file);
                    const source = fs.readFileSync(fullPath, "utf8");
                    const parsed = matter(source);

                    return {
                        slug,
                        contentHtml: renderMarkdown(parsed.content),
                        ...normalizeFrontmatter(parsed.data)
                    };
                } catch (fileError) {
                    console.error(`Failed parsing node at path: ${file}`, fileError);
                    return null;
                }
            })
            .filter((post): post is PostData => post !== null && post.slug.length > 0);
    } catch (dirError) {
        console.error("Failed to read directories from node filesystem stream:", dirError);
        return [];
    }
}

export function getPostBySlug(slug: string): PostData | null {
    if (!slug || typeof slug !== "string") return null;

    try {
        if (!fs.existsSync(postsDirectory)) return null;

        const target = slugify(slug);
        const files = fs.readdirSync(postsDirectory);
        if (!Array.isArray(files)) return null;

        const file = files.find((name) => {
            if (typeof name !== "string" || !name.endsWith(".md")) return false;
            return slugify(name.replace(/\.md$/, "")) === target;
        });

        if (!file) return null;

        const fullPath = path.join(postsDirectory, file);
        const source = fs.readFileSync(fullPath, "utf8");
        const parsed = matter(source);

        return {
            slug: target,
            contentHtml: renderMarkdown(parsed.content),
            ...normalizeFrontmatter(parsed.data)
        };
    } catch (error) {
        console.error(`Failed loading dynamic data for slug reference: ${slug}`, error);
        return null;
    }
}