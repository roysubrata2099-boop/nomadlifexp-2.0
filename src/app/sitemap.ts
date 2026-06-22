import { posts } from "@/lib/posts";

export default function sitemap() {
    const blogUrls = posts.map((post) => ({
        url: `https://yourdomain.com/blog/posts/${post.slug}`,
        lastModified: new Date(),
    }));

    return [
        {
            url: "https://yourdomain.com",
            lastModified: new Date(),
        },
        {
            url: "https://yourdomain.com/blog",
            lastModified: new Date(),
        },
        ...blogUrls,
    ];
}