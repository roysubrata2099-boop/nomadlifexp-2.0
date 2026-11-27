import "server-only";

import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import YouTubeShort from "@/components/YouTubeShort";

import { getAllMDXPosts } from "./mdx-reader";

export { getAllMDXPosts } from "./mdx-reader";

export async function getMDXPostBySlug(slug: string) {
    const posts = getAllMDXPosts();

    const post = posts.find(
        (item) => item.slug === slug
    );

    if (!post) {
        return null;
    }

    const compiled = await compileMDX({
        source: post.content,
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
        content: compiled.content,
    };
}
