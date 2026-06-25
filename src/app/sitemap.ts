import { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

const SITE_URL = "https://nomadlifexp.com";

const safeTimestamp = (d?: string | Date): number => (d ? new Date(d).getTime() : Date.now());

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const validPosts = Array.isArray(posts) ? posts : [];

    const latestDate = validPosts.length > 0
        ? new Date(Math.max(...validPosts.map(p => safeTimestamp(p.updatedAt || p.date))))
        : new Date();

    // Fix 1: Type individual array items strictly as Sitemap fields using index access types
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: SITE_URL,
            lastModified: latestDate,
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: latestDate,
            changeFrequency: "daily",
            priority: 0.9,
        },
    ];

    // Fix 2: Explicitly type the mapped object return shape to match Next.js expectations
    const dynamicRoutes: MetadataRoute.Sitemap = validPosts.map((p) => {
        const postDate = new Date(safeTimestamp(p.updatedAt || p.date));

        return {
            url: `${SITE_URL}/blog/posts/${p.slug}`,
            lastModified: postDate,
            changeFrequency: "weekly",
            priority: 0.7,
        };
    });

    return [...staticRoutes, ...dynamicRoutes];
}