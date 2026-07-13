import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface PostData {
    slug: string;
    title?: string;
    description?: string;
    category?: string;
    updatedAt?: string;
    date?: string;
    author?: string;
    contentHtml: string;
    relatedArticles?: string[];
    tags?: string[];
    displayPillar?: string;
    year?: number;
}

const postsDirectory = path.join(process.cwd(), "src/content/blog");

/**
 * Normalize frontmatter safely
 */
function normalizeFrontmatter(data: Record<string, any>): Partial<PostData> {
    return {
        title: typeof data.title === "string" ? data.title : undefined,
        description: typeof data.description === "string" ? data.description : undefined,
        category: typeof data.category === "string" ? data.category : undefined,
        updatedAt: typeof data.updatedAt === "string" ? data.updatedAt : (typeof data.date === "string" ? data.date : undefined),
        date: typeof data.date === "string" ? data.date : undefined,
        author: typeof data.author === "string" ? data.author : undefined,
        relatedArticles: Array.isArray(data.relatedArticles) ? data.relatedArticles : undefined,
        tags: Array.isArray(data.tags) ? data.tags : undefined,
        displayPillar: typeof data.displayPillar === "string" ? data.displayPillar : undefined,
        year: typeof data.year === "number" ? data.year : undefined,
    };
}

/**
 * Get all posts
 */
export function getAllPosts(): PostData[] {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, "");
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");

            const matterResult = matter(fileContents);
            const processedContent = remark().use(html).processSync(matterResult.content);
            const contentHtml = processedContent.toString();

            const frontmatter = normalizeFrontmatter(matterResult.data);

            return {
                slug,
                contentHtml,
                ...frontmatter,
            };
        });
}

/**
 * Get single post by slug
 */
export function getPostBySlug(slug: string): PostData | null {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const processedContent = remark().use(html).processSync(matterResult.content);
    const contentHtml = processedContent.toString();

    const frontmatter = normalizeFrontmatter(matterResult.data);

    return {
        slug,
        contentHtml,
        ...frontmatter,
    };
}
