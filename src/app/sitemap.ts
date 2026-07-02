import { getAllPosts } from "@/lib/markdown";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://nomadlifexp.com";

    // 1. Structural Static Platform Nodes
    const staticNodes = [
        "",
        "/about",
        "/blog",
        "/fitness",
        "/mindset",
        "/yoga",
        "/discipline",
        "/discipline-system",
        "/knowledge-index",
        "/start-here",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1.0 : 0.8,
    }));

    // 2. Extract and Map Dynamic Markdown Slugs
    const rawPosts = getAllPosts();
    const safePosts = Array.isArray(rawPosts) ? rawPosts : [];

    const dynamicNodes = safePosts
        .filter((post) => post && typeof post.slug === "string" && post.slug.trim() !== "")
        .map((post) => ({
            url: `${baseUrl}/blog/posts/${post.slug.trim()}`,
            lastModified: new Date(), // Automatically falls back to current build date
            changeFrequency: "monthly" as const,
            priority: 0.6,
        }));

    // 3. Unify Networks into a Single Target Array
    return [...staticNodes, ...dynamicNodes];
}