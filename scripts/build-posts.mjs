import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "src/content/posts");
const OUTPUT_DIR = path.join(process.cwd(), "src/data");

function getFiles() {
    if (!fs.existsSync(POSTS_DIR)) return [];
    return fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
}

function parsePost(file) {
    const fullPath = path.join(POSTS_DIR, file);

    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);

    return {
        slug: file.replace(/\.md$/, "").toLowerCase(),
        title: data.title || "Untitled",
        description: data.description || content.slice(0, 140),
        category: data.category || "uncategorized",
        displayPillar: data.displayPillar || "BLOG",
        content,
    };
}

function build() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const posts = getFiles().map(parsePost);

    fs.writeFileSync(
        path.join(OUTPUT_DIR, "posts.json"),
        JSON.stringify(posts, null, 2)
    );

    console.log(`✅ Generated ${posts.length} posts`);
}

build();