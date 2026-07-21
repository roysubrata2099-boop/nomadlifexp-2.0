import "server-only";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";


const mdxDirectory = path.join(
    process.cwd(),
    "src/content/posts-mdx"
);



export function getAllMDXPosts() {

    const files = fs
        .readdirSync(mdxDirectory)
        .filter((file) =>
            file.endsWith(".mdx")
        );


    return files.map((file) => {

        const filePath = path.join(
            mdxDirectory,
            file
        );


        const fileContent =
            fs.readFileSync(
                filePath,
                "utf8"
            );


        const { data, content } =
            matter(fileContent);


        return {

            title:
                String(data.title || ""),

            slug:
                String(data.slug || ""),

            description:
                String(data.description || ""),

            category:
                String(data.category || ""),

            image:
                String(data.image || ""),


            relatedArticles:
                Array.isArray(data.relatedArticles)
                    ? data.relatedArticles
                    : [],


            content,

        };

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

                parseFrontmatter:
                    false,

            },

        });



    return {

        ...post,

        content:
            compiled.content,

    };

}