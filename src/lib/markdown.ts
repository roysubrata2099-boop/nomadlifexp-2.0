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

export const slugify = (text: string): string =>
    text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

function renderMarkdown(content: string): string {
    return String(
        remark()
            .use(html, { sanitize: false })
            .processSync(content)
    );
}

function normalizeFrontmatter(data: any) {
    return {
        title:
            typeof data.title === "string"
                ? data.title
                : "Untitled Post",

        description:
            typeof data.description === "string"
                ? data.description
                : "",

        category:
            typeof data.category === "string"
                ? data.category
                : "uncategorized",

        updatedAt:
            typeof data.updatedAt === "string"
                ? data.updatedAt
                : data.date || new Date().toISOString(),

        date:
            typeof data.date === "string"
                ? data.date
                : new Date().toISOString(),

        author:
            typeof data.author === "string"
                ? data.author
                : "Anonymous",

        relatedArticles:
            Array.isArray(data.relatedArticles)
                ? data.relatedArticles.map(slugify)
                : [],

        tags:
            Array.isArray(data.tags)
                ? data.tags
                : [],

        displayPillar:
            typeof data.displayPillar === "string"
                ? data.displayPillar
                : "GENERAL",

        year:
            typeof data.year === "number"
                ? data.year
                : undefined,
    };
}


export function getAllPosts(): PostData[] {

    if (!fs.existsSync(postsDirectory)) {
        console.error(
            `Missing posts directory: ${postsDirectory}`
        );
        return [];
    }


    return fs.readdirSync(postsDirectory)
        .filter(file => file.endsWith(".md"))
        .map(file => {

            const rawSlug = file.replace(".md", "");

            const slug = slugify(rawSlug);

            const fullPath =
                path.join(postsDirectory, file);


            const source =
                fs.readFileSync(
                    fullPath,
                    "utf8"
                );


            const parsed =
                matter(source);


            return {
                slug,
                contentHtml:
                    renderMarkdown(parsed.content),

                ...normalizeFrontmatter(
                    parsed.data
                )
            };

        });
}



export function getPostBySlug(
    slug: string
): PostData | null {


    if (!fs.existsSync(postsDirectory)) {
        return null;
    }


    const target =
        slugify(slug);


    const file =
        fs.readdirSync(postsDirectory)
            .find(name =>
                name.endsWith(".md") &&
                slugify(
                    name.replace(".md", "")
                ) === target
            );


    if (!file) {
        return null;
    }


    const source =
        fs.readFileSync(
            path.join(postsDirectory, file),
            "utf8"
        );


    const parsed =
        matter(source);



    return {
        slug: target,

        contentHtml:
            renderMarkdown(
                parsed.content
            ),

        ...normalizeFrontmatter(
            parsed.data
        )
    };

}