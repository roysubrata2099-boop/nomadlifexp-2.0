import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_PATH = path.join(process.cwd(), "src/content/blog");

export type BlogPost = {
    title: string;
    slug: string;
    category: string;
    description?: string;
    content: string;
};

export function getAllPosts(): BlogPost[] {
    const files = fs.readdirSync(BLOG_PATH);

    return files.map((file) => {
        const filePath = path.join(BLOG_PATH, file);
        const raw = fs.readFileSync(filePath, "utf-8");

        const { data, content } = matter(raw);

        return {
            title: data.title,
            slug: data.slug,
            category: data.category,
            description: data.description,
            content,
        };
    });
}

export function getPostBySlug(slug: string): BlogPost | null {
    const posts = getAllPosts();
    return posts.find((p) => p.slug === slug) || null;
}