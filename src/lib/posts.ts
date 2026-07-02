import fs from "fs";
import path from "path";
import * as matterImport from "gray-matter";

/**
 * FIX: Next.js safe gray-matter import
 */
const matter = (matterImport as any).default || matterImport;

export interface Post {
  slug: string;
  title: string;
  description: string;
  category: string;
  displayPillar: string;
  content: string;
}

/**
 * ✅ Safe absolute path (works in Next.js App Router)
 */
const POSTS_DIR = path.join(process.cwd(), "src/content/posts");

/**
 * 🔒 SAFE: Check if directory exists
 */
function getFiles(): string[] {
  try {
    if (!fs.existsSync(POSTS_DIR)) return [];

    return fs.readdirSync(POSTS_DIR).filter((file) => {
      return typeof file === "string" && file.endsWith(".md");
    });
  } catch {
    return [];
  }
}

/**
 * 🔒 SAFE: Parse markdown file into Post object
 */
function parsePost(file: string): Post | null {
  try {
    if (!file || typeof file !== "string") return null;

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

/**
 * ✅ 1. GET ALL POSTS (SAFE)
 */
export function getAllPosts(): Post[] {
  try {
    const files = getFiles();

    if (!files.length) return [];

    const posts = files
      .map(parsePost)
      .filter((post): post is Post => post !== null);

    return posts;
  } catch {
    return [];
  }
}

/**
 * ✅ 2. GET SINGLE POST BY SLUG (SAFE)
 */
export function getPostBySlug(slug: string): Post | null {
  try {
    if (!slug || typeof slug !== "string") return null;

    const safeSlug = slug.toLowerCase().trim();

    const posts = getAllPosts();

    return posts.find((post) => post.slug === safeSlug) || null;
  } catch {
    return null;
  }
}

/**
 * ✅ 3. GET POSTS BY CATEGORY (SAFE)
 */
export function getPostsByCategory(category: string): Post[] {
  try {
    if (!category || typeof category !== "string") return [];

    const safeCategory = category.toLowerCase().trim();

    const posts = getAllPosts();

    return posts.filter((post) => post.category === safeCategory);
  } catch {
    return [];
  }
}