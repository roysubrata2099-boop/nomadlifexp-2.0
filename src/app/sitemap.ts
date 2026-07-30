// src/app/sitemap.ts

import type { MetadataRoute } from "next";
import { getAllMDXPosts } from "@/lib/mdx";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://nomadlifexp.com").replace(/\/+$/, "");

function parseValidDate(dateInput: string | Date | undefined): Date {
    if (!dateInput) return new Date();
    const parsed = new Date(dateInput);
    return isNaN(parsed.getTime()) ? new Date() : parsed;
}

function safeSlug(value: unknown): string {
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

// FIX 1: Explicitly mark sitemap function as ASYNC to support modern Next.js metadata API
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const currentDate = new Date();

    const staticRoutes = [
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
    ];

    // FIX 2: Use MetadataRoute.Sitemap[number] for single-item mapping
    const staticNodes: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
        url: `${SITE_URL}${route}`,
        lastModified: currentDate,
        changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
        priority: route === "" ? 1.0 : 0.8,
    }));

    // Safely await posts whether getAllMDXPosts returns a Promise or an Array
    let rawPosts: unknown = [];

    try {
        rawPosts = await getAllMDXPosts();
    } catch (error) {
        console.error("Sitemap compilation error fetching MDX posts:", error);
        rawPosts = [];
    }

    const posts = Array.isArray(rawPosts) ? rawPosts : [];

    const dynamicNodes: MetadataRoute.Sitemap = posts
        .map((post): MetadataRoute.Sitemap[number] | null => {
            const slug = safeSlug(post?.slug);

            if (!slug) {
                return null;
            }

            const postDate = parseValidDate(post?.updatedAt || post?.date);

            return {
                url: `${SITE_URL}/blog/posts/${slug}`,
                lastModified: postDate,
                changeFrequency: "monthly" as const,
                priority: 0.6,
            };
        })
        .filter((node): node is MetadataRoute.Sitemap[number] => node !== null);

    return [...staticNodes, ...dynamicNodes];
}