import { getAllPosts } from "@/lib/markdown";

export function getSafePostUrl(
    slug: string | undefined
): string {

    if (!slug) {
        return "/blog";
    }


    const posts = getAllPosts();


    const exists = posts.some(
        (post) => post.slug === slug
    );


    if (!exists) {
        return "/blog";
    }


    return `/blog/posts/${slug}`;
}