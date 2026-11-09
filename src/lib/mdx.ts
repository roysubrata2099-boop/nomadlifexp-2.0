import "server-only";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import YouTubeShort from "@/components/YouTubeShort";


const mdxDirectory = path.join(
    process.cwd(),
    "src/content/posts-mdx"
);



export function getAllMDXPosts() {
    const files = fs
        .readdirSync(mdxDirectory)
        .filter((file) => file.endsWith(".mdx"))
        .sort((a, b) => a.localeCompare(b));

    const seenSlugs = new Set<string>();

    return files.flatMap((file) => {
        try {
            const filePath = path.join(mdxDirectory, file);
            const fileContent = fs.readFileSync(filePath, "utf8");
            const { data, content } = matter(fileContent);

            const slug = String(data.slug || "").trim();

            if (!slug) {
                console.warn(`[MDX] Missing slug in ${file}`);
                return [];
            }

            if (seenSlugs.has(slug)) {
                console.error(`[MDX] Duplicate MDX slug "${slug}" in ${file}. Skipping duplicate.`);
                return [];
            }

            seenSlugs.add(slug);

            return [{
                title: String(data.title || ""),
                seoTitle: String(data.seoTitle || ""),
                author: String(data.author || "NomadLifeXP"),
                slug,
                description: String(data.description || ""),
                category: String(data.category || ""),
                image: String(data.image || ""),
                date: String(data.date || ""),
                publishedAt: String(data.publishedAt || data.date || ""),
                updatedAt: String(data.updatedAt || ""),
                relatedArticles: Array.isArray(data.relatedArticles)
                    ? data.relatedArticles
                    : [],
                content,
            }];
        } catch (error) {
            console.error(`[MDX] Failed reading ${file}:`, error);
            return [];
        }
    });
}



export async function getMDXPostBySlug(
    slug: string
) {

    const posts =
        getAllMDXPosts();


    const post =
        posts.find(
            (item) =>
                item.slug === slug
        );


    if (!post) {
        return null;
    }


    const compiled =
        await compileMDX({

            source:
                post.content,

            options: {
                parseFrontmatter: false,

                mdxOptions: {
                    remarkPlugins: [remarkGfm],
                },
            },

            components: {
                YouTubeShort,
            },

        });



    return {

        ...post,

        content:
            compiled.content,

    };

}




