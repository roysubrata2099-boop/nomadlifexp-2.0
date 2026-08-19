// src/app/sitemap.ts

import type { MetadataRoute } from "next";
import { getAllMDXPosts } from "@/lib/mdx";

const SITE_URL = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://nomadlifexp.com"
).replace(/\/+$/, "");

function parseValidDate(dateInput: unknown): Date | undefined {
    if (!dateInput) {
        return undefined;
    }

    const parsed = new Date(String(dateInput));

    return Number.isNaN(parsed.getTime()) ? undefined : parsed;
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
        .replace(/^-+|-+$/g, "");
}

function absoluteUrl(path: string): string {
    if (path === "/") {
        return SITE_URL;
    }

    return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    /*
     * IMPORTANT:
     * These are only routes that currently exist in the application.
     * Do not add speculative URLs here because sitemap URLs should resolve
     * to real canonical pages.
     */
    const staticRoutes: Array<{
        path: string;
        priority: number;
        changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    }> = [
            {
                path: "/",
                priority: 1.0,
                changeFrequency: "weekly",
            },

            // Core pages
            {
                path: "/about",
                priority: 0.8,
                changeFrequency: "monthly",
            },
            {
                path: "/start-here",
                priority: 0.9,
                changeFrequency: "weekly",
            },
            {
                path: "/knowledge-index",
                priority: 0.9,
                changeFrequency: "weekly",
            },

            // Core systems
            {
                path: "/discipline",
                priority: 0.9,
                changeFrequency: "weekly",
            },
            {
                path: "/discipline-system",
                priority: 0.9,
                changeFrequency: "weekly",
            },
            {
                path: "/fitness",
                priority: 0.9,
                changeFrequency: "weekly",
            },
            {
                path: "/mindset",
                priority: 0.9,
                changeFrequency: "weekly",
            },
            {
                path: "/yoga",
                priority: 0.9,
                changeFrequency: "weekly",
            },
            {
                path: "/recalibration",
                priority: 0.9,
                changeFrequency: "weekly",
            },

            // Blog hub
            {
                path: "/blog",
                priority: 0.9,
                changeFrequency: "weekly",
            },

            // Blog categories
            {
                path: "/blog/category/discipline",
                priority: 0.8,
                changeFrequency: "weekly",
            },
            {
                path: "/blog/category/fitness",
                priority: 0.8,
                changeFrequency: "weekly",
            },
            {
                path: "/blog/category/yoga",
                priority: 0.8,
                changeFrequency: "weekly",
            },
            {
                path: "/blog/category/mindset",
                priority: 0.8,
                changeFrequency: "weekly",
            },

            // Official resources / external identity hub
            {
                path: "/connect",
                priority: 0.7,
                changeFrequency: "monthly",
            },
        ];

    const staticNodes: MetadataRoute.Sitemap = staticRoutes.map(
        ({ path, priority, changeFrequency }) => ({
            url: absoluteUrl(path),
            priority,
            changeFrequency,
        })
    );

    /*
     * Load all real MDX articles.
     *
     * If the content system fails, the sitemap still returns all static
     * routes instead of taking down the sitemap endpoint.
     */
    let rawPosts: unknown = [];

    try {
        rawPosts = await getAllMDXPosts();
    } catch (error) {
        console.error(
            "Sitemap: failed to load MDX posts. Returning static routes only.",
            error
        );
    }

    const posts = Array.isArray(rawPosts) ? rawPosts : [];

    const dynamicNodes: MetadataRoute.Sitemap = posts
        .map((post): MetadataRoute.Sitemap[number] | null => {
            if (!post || typeof post !== "object") {
                return null;
            }

            const postRecord = post as Record<string, unknown>;

            const slug = safeSlug(postRecord.slug);

            if (!slug) {
                return null;
            }

            /*
             * Prefer updatedAt, then date.
             * If neither is valid, omit lastModified rather than falsely
             * claiming that the article changed today.
             */
            const lastModified =
                parseValidDate(postRecord.updatedAt) ??
                parseValidDate(postRecord.date);

            return {
                url: absoluteUrl(`/blog/posts/${slug}`),
                ...(lastModified ? { lastModified } : {}),
                changeFrequency: "monthly",
                priority: 0.7,
            };
        })
        .filter(
            (node): node is MetadataRoute.Sitemap[number] => node !== null
        );

    /*
     * Prevent duplicate URLs if a future content change accidentally
     * produces the same URL more than once.
     */
    const seen = new Set<string>();

    return [...staticNodes, ...dynamicNodes].filter((entry) => {
        if (seen.has(entry.url)) {
            return false;
        }

        seen.add(entry.url);
        return true;
    });
}
