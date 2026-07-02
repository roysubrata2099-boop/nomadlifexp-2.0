import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "src/content/posts");
const OUTPUT_FILE = path.join(process.cwd(), "src/data/posts.json");

function getAllMarkdownFiles() {
    if (!fs.existsSync(POSTS_DIR)) return [];
    return fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
}

function buildPosts() {
    const files = getAllMarkdownFiles();

    const posts = files.map((file) => {
        const fullPath = path.join(POSTS_DIR, file);
        const raw = fs.readFileSync(fullPath, "utf-8");
        const { data, content } = matter(raw);

        return {
            slug: file.replace(".md", ""),
            title: data.title || "Untitled",
            description: data.description || content.slice(0, 140),
            category: data.category || "uncategorized",
            pillar: data.pillar || data.category || "general",
            keywords: data.keywords || [],
            content,
        };
    });

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2));

    console.log(`✅ Generated posts: ${posts.length}`);
}

buildPosts();