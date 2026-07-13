// src/lib/markdown.ts

import fs from "fs";
import path from "path";

export interface PostItem {
    slug: string;
    title: string;
    description: string;
    category: string;
    displayPillar: string;
    contentHtml: string;
    relatedArticles: string[];
    [key: string]: any;
}

// 🛡️ POINTING TO THE GENUINE DATA SOURCE Manifest
const postsDatabasePath = path.join(process.cwd(), "src/data/posts.json");

/**
 * Infer category safely from slug
 */
function inferCategory(slug: string): { category: string; displayPillar: string } {
    const cleanSlug = String(slug || "").toLowerCase();
    if (cleanSlug.includes("fitness")) {
        return { category: "fitness", displayPillar: "FITNESS" };
    }
    if (cleanSlug.includes("yoga")) {
        return { category: "yoga", displayPillar: "YOGA" };
    }
    if (cleanSlug.includes("discipline")) {
        return { category: "discipline", displayPillar: "DISCIPLINE" };
    }
    return { category: "mindset", displayPillar: "MINDSET" };
}

/**
 * Safely reads the database manifest
 */
function readPostsManifest(): any[] {
    try {
        if (!fs.existsSync(postsDatabasePath)) {
            console.warn(`[SYSTEM WARN] Database file missing at: ${postsDatabasePath}`);
            return [];
        }
        const rawData = fs.readFileSync(postsDatabasePath, "utf8");
        const parsed = JSON.parse(rawData);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        console.error("[CRITICAL DATA FAULT] Failed to parse posts.json source:", error);
        return [];
    }
}

/**
 * MAIN: Get all posts safely from manifest database
 */
export function getAllPosts(): PostItem[] {
    try {
        const manifest = readPostsManifest();

        return manifest
            .filter((post) => post && typeof post.slug === "string" && post.slug.trim().length > 0)
            .map((post) => {
                const slug = post.slug.toLowerCase().trim();
                const { category, displayPillar } = inferCategory(slug);

                return {
                    ...post,
                    slug,
                    title: typeof post.title === "string" ? post.title.trim() : "Untitled Node",
                    description: typeof post.description === "string" ? post.description.trim() : "No description available.",
                    category: post.category || category,
                    displayPillar: post.displayPillar || displayPillar,
                    contentHtml: post.contentHtml || post.content || "",
                    relatedArticles: Array.isArray(post.relatedArticles) ? post.relatedArticles : [],
                };
            });
    } catch (error) {
        console.error("[CRITICAL DATA FAULT] Failed compiling manifest list:", error);
        return [];
    }
}

/**
 * Get single post by slug (safe lookup)
 */
export function getPostBySlug(slug: string): PostItem | null {
    try {
        const cleanSlug = slug.replace(/[^a-z0-9-_]/g, "").toLowerCase().trim();
        const posts = getAllPosts();
        return posts.find((p) => p.slug === cleanSlug) || null;
    } catch {
        return null;
    }
}

/**
 * Get posts by category (safe filter)
 */
export function getPostsByCategory(category: string): PostItem[] {
    try {
        const cleanCategory = category.toLowerCase().trim();
        const posts = getAllPosts();
        return posts.filter((p) => p.category === cleanCategory);
    } catch {
        return [];
    }
}