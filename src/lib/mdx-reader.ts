import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface MDXPost {
    title: string;
    seoTitle: string;
    author: string;
    slug: string;
    description: string;
    category: string;
    image: string;
    date: string;
    publishedAt: string;
    updatedAt: string;
    relatedArticles: string[];
    tags: string[];
    displayPillar: string;
    year?: number;
    content: string;
}

const mdxDirectory = path.join(
    process.cwd(),
    "src/content/posts-mdx"
);

function cleanString(
    value: unknown,
    fallback = ""
): string {
    return typeof value === "string"
        ? value.trim()
        : fallback;
}

function cleanDate(value: unknown): string {
    let date = "";

    if (value instanceof Date) {
        if (Number.isNaN(value.getTime())) {
            return "";
        }

        date = value.toISOString().slice(0, 10);
    } else if (typeof value === "string") {
        date = value.trim();
    } else {
        return "";
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        return "";
    }

    const parsed = new Date(`${date}T00:00:00.000Z`);

    if (
        Number.isNaN(parsed.getTime()) ||
        parsed.toISOString().slice(0, 10) !== date
    ) {
        return "";
    }

    return date;
}

function normalizeSlug(value: unknown): string {
    if (typeof value !== "string") {
        return "";
    }

    return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
}

function normalizePost(
    data: Record<string, unknown>,
    content: string,
    filename: string
): MDXPost | null {
    const slug = normalizeSlug(data.slug);

    if (!slug) {
        console.warn(`[MDX] Missing slug in ${filename}`);
        return null;
    }

    const date = cleanDate(data.date);

    const publishedAt =
        cleanDate(data.publishedAt) || date;

    const updatedAt =
        cleanDate(data.updatedAt) || publishedAt;

    const category = cleanString(
        data.category,
        "uncategorized"
    );

    return {
        title: cleanString(data.title, "Untitled Post"),
        seoTitle: cleanString(data.seoTitle),
        author: cleanString(
            data.author,
            "NomadLifeXP Editorial Team"
        ),
        slug,
        description: cleanString(data.description),
        category,
        image: cleanString(data.image),
        date,
        publishedAt,
        updatedAt,

        relatedArticles: Array.isArray(data.relatedArticles)
            ? data.relatedArticles
                .filter(
                    (item): item is string =>
                        typeof item === "string"
                )
                .map(normalizeSlug)
                .filter(Boolean)
            : [],

        tags: Array.isArray(data.tags)
            ? data.tags
                .filter(
                    (item): item is string =>
                        typeof item === "string"
                )
                .map((tag) => tag.trim())
                .filter(Boolean)
            : [],

        displayPillar: cleanString(
            data.displayPillar,
            category.toUpperCase()
        ),

        year:
            typeof data.year === "number" &&
            Number.isFinite(data.year)
                ? data.year
                : undefined,

        content,
    };
}

export function getAllMDXPosts(): MDXPost[] {
    try {
        if (!fs.existsSync(mdxDirectory)) {
            console.error("[MDX] Content directory not found");
            return [];
        }

        const files = fs
            .readdirSync(mdxDirectory)
            .filter((file) => file.endsWith(".mdx"))
            .sort((a, b) => a.localeCompare(b));

        const seenSlugs = new Set<string>();

        return files.flatMap((file) => {
            try {
                const filePath = path.join(mdxDirectory, file);
                const fileContent = fs.readFileSync(
                    filePath,
                    "utf8"
                );

                const { data, content } = matter(fileContent);

                const post = normalizePost(
                    data,
                    content,
                    file
                );

                if (!post) {
                    return [];
                }

                if (seenSlugs.has(post.slug)) {
                    console.error(
                        `[MDX] Duplicate slug "${post.slug}" in ${file}`
                    );

                    return [];
                }

                seenSlugs.add(post.slug);

                return [post];
            } catch (error) {
                console.error(
                    `[MDX] Failed reading ${file}:`,
                    error
                );

                return [];
            }
        });
    } catch (error) {
        console.error(
            "[MDX] Unable to read content directory:",
            error
        );

        return [];
    }
}
