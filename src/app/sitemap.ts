import type { MetadataRoute } from "next";
import { getAllMDXPosts } from "@/lib/mdx";

/*
 * Canonical production origin.
 *
 * IMPORTANT:
 * The website's canonical domain is:
 * https://www.nomadlifexp.com
 *
 * Keep sitemap URLs on the canonical HTTPS + www origin.
 */
const CANONICAL_SITE_URL = "https://www.nomadlifexp.com";

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
    const normalizedPath =
        path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;

    return `${CANONICAL_SITE_URL}${normalizedPath}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    /*
     * IMPORTANT:
     * Only include URLs that currently exist as canonical application routes.
     *
     * Do NOT include:
     * - /index.html
     * - /blog.html
     * - old .html URLs
     * - non-www URLs
     * - HTTP URLs
     * - redirect destinations that themselves redirect
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
                path: "/discipline-system",
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
     * If the content system fails, return static routes only.
     * This prevents the sitemap endpoint from failing completely.
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
             *
             * Do not generate a fake lastModified date when metadata
             * is missing or invalid.
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
     * Prevent duplicate canonical URLs.
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
