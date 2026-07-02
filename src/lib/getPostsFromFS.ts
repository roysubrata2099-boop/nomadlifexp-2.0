import fs from "fs";
import path from "path";

/**
 * Post shape used across the app
 */
export interface PostItem {
    slug: string;
    title: string;
    description: string;
    category: string;
    displayPillar: string;
}

const POSTS_DIR = path.join(process.cwd(), "src/content/posts");

/**
 * Safely reads directory
 */
function safeReadDir(dir: string): string[] {
    try {
        if (!fs.existsSync(dir)) return [];
        return fs.readdirSync(dir);
    } catch {
        return [];
    }
}

/**
 * Safely reads file
 */
function safeReadFile(filePath: string): string {
    try {
        if (!fs.existsSync(filePath)) return "";
        return fs.readFileSync(filePath, "utf8") || "";
    } catch {
        return "";
    }
}

/**
 * Extract title + description from markdown safely
 */
function parseMarkdown(content: string) {
    const lines = content.split("\n");

    const h1 = lines.find(l => l.trim().startsWith("# "));
    const title = h1 ? h1.replace("# ", "").trim() : "Untitled Post";

    const cleaned = lines
        .map(l => l.trim())
        .filter(
            l =>
                l.length > 0 &&
                !l.startsWith("#") &&
                !l.startsWith("---")
        );

    const description =
        cleaned.find(l => l.length > 40) ||
        cleaned[0] ||
        "No description available.";

    return { title, description };
}

/**
 * Infer category safely from slug
 * (you can improve later with frontmatter if needed)
 */
function inferCategory(slug: string): {
    category: string;
    displayPillar: string;
} {
    if (slug.includes("fitness")) {
        return { category: "fitness", displayPillar: "FITNESS" };
    }

    if (slug.includes("yoga")) {
        return { category: "yoga", displayPillar: "YOGA" };
    }

    if (slug.includes("discipline")) {
        return { category: "discipline", displayPillar: "DISCIPLINE" };
    }

    return { category: "mindset", displayPillar: "MINDSET" };
}

/**
 * Normalize slug safety
 */
function normalizeSlug(file: string): string {
    return file.replace(/\.md$/, "").toLowerCase();
}

/**
 * MAIN: Get all posts safely
 */
export function getAllPosts(): PostItem[] {
    const files = safeReadDir(POSTS_DIR);

    if (!files.length) return [];

    const posts: PostItem[] = [];

    for (const file of files) {
        if (!file.endsWith(".md")) continue;

        const slug = normalizeSlug(file);
        const filePath = path.join(POSTS_DIR, file);

        const raw = safeReadFile(filePath);
        if (!raw) continue;

        const { title, description } = parseMarkdown(raw);
        const { category, displayPillar } = inferCategory(slug);

        posts.push({
            slug,
            title,
            description,
            category,
            displayPillar,
        });
    }

    return posts;
}

/**
 * Get single post by slug (safe lookup)
 */
export function getPostBySlug(slug: string): PostItem | null {
    try {
        const posts = getAllPosts();
        return posts.find(p => p.slug === slug) || null;
    } catch {
        return null;
    }
}

/**
 * Get posts by category (safe filter)
 */
export function getPostsByCategory(category: string): PostItem[] {
    try {
        const posts = getAllPosts();
        return posts.filter(p => p.category === category);
    } catch {
        return [];
    }
}