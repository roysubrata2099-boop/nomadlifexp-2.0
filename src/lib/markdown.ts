// src/lib/markdown.ts

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
    image: string;
    updatedAt: string;
    date: string;
    author: string;
    contentHtml: string;
    relatedArticles: string[];
    tags: string[];
    displayPillar: string;
    year?: number;
}

const postsDirectory = path.join(
    process.cwd(),
    "src/content/posts"
);


/**
 * Safe universal slug generator
 */
export function slugify(value: unknown): string {
    if (typeof value !== "string") {
        return "";
    }

    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}


/**
 * Safe text cleanup
 */
function cleanString(value: unknown, fallback = ""): string {
    return typeof value === "string"
        ? value.trim()
        : fallback;
}


/**
 * Safe markdown renderer
 */
function renderMarkdown(content: unknown): string {
    try {
        if (typeof content !== "string" || !content.trim()) {
            return "";
        }

        return String(
            remark()
                .use(html, {
                    sanitize: false,
                })
                .processSync(content)
        );

    } catch (error) {
        console.error(
            "Markdown rendering failed:",
            error
        );

        return "";
    }
}


/**
 * Normalize frontmatter data
 */
function normalizeFrontmatter(
    data: Record<string, unknown>
): Omit<PostData, "slug" | "contentHtml"> {

    const now = new Date().toISOString();

    const date =
        cleanString(data.date, now);

    const updatedAt =
        cleanString(data.updatedAt, date);


    return {

        title:
            cleanString(
                data.title,
                "Untitled Post"
            ),


        description:
            cleanString(
                data.description,
                ""
            ),


        category:
            cleanString(
                data.category,
                "uncategorized"
            ),


        image:
            cleanString(
                data.image,
                ""
            ),


        updatedAt,

        date,


        author:
            cleanString(
                data.author,
                "NomadLifeXP Editorial Team"
            ),


        relatedArticles:
            Array.isArray(data.relatedArticles)
                ? data.relatedArticles
                    .filter(
                        (item): item is string =>
                            typeof item === "string"
                    )
                    .map(item => slugify(item))
                    .filter(Boolean)
                : [],


        tags:
            Array.isArray(data.tags)
                ? data.tags
                    .filter(
                        (item): item is string =>
                            typeof item === "string"
                    )
                    .map(tag => tag.trim())
                    .filter(Boolean)
                : [],


        displayPillar:
            cleanString(
                data.displayPillar,
                "GENERAL"
            ),


        year:
            typeof data.year === "number" &&
                Number.isFinite(data.year)
                ? data.year
                : undefined,
    };
}


/**
 * Check posts folder safely
 */
function getPostFiles(): string[] {

    try {

        if (!fs.existsSync(postsDirectory)) {
            return [];
        }


        const files =
            fs.readdirSync(postsDirectory);


        return files.filter(
            file =>
                typeof file === "string" &&
                file.endsWith(".md")
        );


    } catch (error) {

        console.error(
            "Unable to read posts directory:",
            error
        );

        return [];
    }
}


/**
 * Load all posts
 */
export function getAllPosts(): PostData[] {

    const files = getPostFiles();


    return files
        .map(file => {

            try {

                const fullPath =
                    path.join(
                        postsDirectory,
                        file
                    );


                const source =
                    fs.readFileSync(
                        fullPath,
                        "utf8"
                    );


                const parsed =
                    matter(source);


                const slug =
                    slugify(
                        file.replace(/\.md$/, "")
                    );


                if (!slug) {
                    return null;
                }


                return {
                    slug,

                    contentHtml:
                        renderMarkdown(
                            parsed.content
                        ),

                    ...normalizeFrontmatter(
                        parsed.data
                    ),
                };


            } catch (error) {

                console.error(
                    `Failed parsing post ${file}:`,
                    error
                );

                return null;
            }

        })
        .filter(
            (post): post is PostData =>
                post !== null
        );

}


/**
 * Load single post by slug
 */
export function getPostBySlug(
    inputSlug: string
): PostData | null {


    const targetSlug =
        slugify(inputSlug);


    if (!targetSlug) {
        return null;
    }


    const files =
        getPostFiles();


    const filename =
        files.find(file => {

            const fileSlug =
                slugify(
                    file.replace(
                        /\.md$/,
                        ""
                    )
                );


            return fileSlug === targetSlug;

        });


    if (!filename) {
        return null;
    }


    try {

        const fullPath =
            path.join(
                postsDirectory,
                filename
            );


        const source =
            fs.readFileSync(
                fullPath,
                "utf8"
            );


        const parsed =
            matter(source);


        return {

            slug: targetSlug,


            contentHtml:
                renderMarkdown(
                    parsed.content
                ),


            ...normalizeFrontmatter(
                parsed.data
            ),
        };


    } catch (error) {

        console.error(
            `Failed loading post ${targetSlug}:`,
            error
        );

        return null;
    }
}