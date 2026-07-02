import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  slug: string;
  title: string;
  description: string;
  category: string;
  displayPillar: string;
  content: string;
}

const POSTS_DIR = path.join(process.cwd(), "src/content/posts");

function getFiles(): string[] {
  try {
    if (!fs.existsSync(POSTS_DIR)) return [];
    return fs.readdirSync(POSTS_DIR).filter((file) => file.endsWith(".md"));
  } catch {
    return [];
  }
}

function parsePost(file: string): Post | null {
  try {
    const fullPath = path.join(POSTS_DIR, file);
    if (!fs.existsSync(fullPath)) return null;

    const raw = fs.readFileSync(fullPath, "utf8");
    if (!raw) return null;

    const { data, content } = matter(raw);

    const slug = file.replace(/\.md$/, "").toLowerCase().trim();

    return {
      slug,
      title: typeof data?.title === "string" ? data.title : "Untitled",
      description:
        typeof data?.description === "string"
          ? data.description
          : content?.slice(0, 140).trim() || "No description available",
      category:
        typeof data?.category === "string"
          ? data.category.toLowerCase()
          : "uncategorized",
      displayPillar:
        typeof data?.displayPillar === "string"
          ? data.displayPillar
          : "BLOG",
      content: content || "",
    };
  } catch {
    return null;
  }
}

export function getAllPosts(): Post[] {
  try {
    const files = getFiles();
    return files.map(parsePost).filter((p): p is Post => p !== null);
  } catch {
    return [];
  }
}

export function getPostBySlug(slug: string): Post | null {
  try {
    if (!slug) return null;

    const safeSlug = slug.toLowerCase().trim();
    return getAllPosts().find((p) => p.slug === safeSlug) || null;
  } catch {
    return null;
  }
}

export function getPostsByCategory(category: string): Post[] {
  try {
    if (!category) return [];

    const safeCategory = category.toLowerCase().trim();
    return getAllPosts().filter((p) => p.category === safeCategory);
  } catch {
    return [];
  }
}