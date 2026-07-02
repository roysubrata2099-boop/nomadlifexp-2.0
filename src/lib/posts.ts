import "server-only";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content");

export function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.md`);

  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title,
    category: data.category,
    content,
  };
}