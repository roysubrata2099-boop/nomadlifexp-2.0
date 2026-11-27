import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const mdxDirectory = path.join(
    process.cwd(),
    "src/content/posts-mdx"
);

export interface MDXArticleMetadata {
    slug: string;
    title: string;
}

export function getMDXArticleMetadata(): MDXArticleMetadata[] {
    const files = fs
        .readdirSync(mdxDirectory)
        .filter(file => file.endsWith(".mdx"))
        .sort((a, b) => a.localeCompare(b));

    const seenSlugs = new Set<string>();
    const posts: MDXArticleMetadata[] = [];

    for (const file of files) {
        const filePath = path.join(mdxDirectory, file);
        const source = fs.readFileSync(filePath, "utf8");
        const { data } = matter(source);

        const slug = String(data.slug || "").trim();

        if (!slug) {
            throw new Error(`[MDX] Missing slug in ${file}`);
        }

        if (seenSlugs.has(slug)) {
            throw new Error(`[MDX] Duplicate slug "${slug}" in ${file}`);
        }

        seenSlugs.add(slug);

        posts.push({
            slug,
            title: String(data.title || ""),
        });
    }

    return posts;
}
