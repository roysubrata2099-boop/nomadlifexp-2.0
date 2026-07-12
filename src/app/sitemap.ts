// src/app/sitemap.ts

import { getAllPosts } from "@/lib/markdown";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://nomadlifexp.com";

    // 🛡️ Fixed baseline capture date to prevent artificial drift on unchanged static pages
    const deploymentDate = new Date("2026-07-12T00:00:00Z");

    // 1. Structural Static Platform Nodes
    const staticNodes: MetadataRoute.Sitemap = [
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
        lastModified: deploymentDate,
        changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
        priority: route === "" ? 1.0 : 0.8,
    }));

    // 2. Extract and Map Dynamic Markdown Slugs safely bypassing library type collisions
    const rawPosts = getAllPosts();
    const safePosts = Array.isArray(rawPosts) ? (rawPosts as unknown as Record<string, unknown>[]) : [];

    const dynamicNodes: MetadataRoute.Sitemap = safePosts
        .filter((post) => post && typeof post.slug === "string" && post.slug.trim() !== "")
        .map((post) => {
            const rawSlug = post.slug as string;

            // Parse actual post dates if they exist to provide real signals to AI crawlers
            let postDate = deploymentDate;
            if (typeof post.date === "string" || typeof post.date === "number") {
                const parsed = new Date(post.date);
                if (!isNaN(parsed.getTime())) {
                    postDate = parsed;
                }
            }

            return {
                // 🛡️ Enforce .toLowerCase() to perfectly match your routing rules
                url: `${baseUrl}/blog/posts/${rawSlug.trim().toLowerCase()}`,
                lastModified: postDate,
                changeFrequency: "monthly" as const,
                priority: 0.6,
            };
        });

    // 3. Unify Arrays safely using explicit type-matching arrays
    return [...staticNodes, ...dynamicNodes];
}