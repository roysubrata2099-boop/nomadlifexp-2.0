import type { MetadataRoute } from "next";
import { getAllMDXPosts } from "@/lib/mdx";
import { SITE_URL } from "@/lib/site";

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

    return `${SITE_URL}${normalizedPath}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticRoutes: Array<{
        path: string;
        priority: number;
        changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    }> = [
        { path: "/", priority: 1.0, changeFrequency: "weekly" },
        { path: "/about", priority: 0.8, changeFrequency: "monthly" },
        { path: "/start-here", priority: 0.9, changeFrequency: "weekly" },
        { path: "/knowledge-index", priority: 0.9, changeFrequency: "weekly" },
        { path: "/digital-nomads", priority: 0.9, changeFrequency: "weekly" },
        { path: "/discipline-system", priority: 0.9, changeFrequency: "weekly" },
        { path: "/recalibration", priority: 0.9, changeFrequency: "weekly" },
        { path: "/videos/yoga-mind-body-awareness", priority: 0.8, changeFrequency: "monthly" },
        { path: "/blog", priority: 0.9, changeFrequency: "weekly" },
        { path: "/blog/category/discipline", priority: 0.8, changeFrequency: "weekly" },
        { path: "/blog/category/fitness", priority: 0.8, changeFrequency: "weekly" },
        { path: "/yoga", priority: 0.8, changeFrequency: "weekly" },
        { path: "/blog/category/mindset", priority: 0.8, changeFrequency: "weekly" },
        { path: "/connect", priority: 0.7, changeFrequency: "monthly" },
    ];

    const staticNodes: MetadataRoute.Sitemap = staticRoutes.map(
        ({ path, priority, changeFrequency }) => ({
            url: absoluteUrl(path),
            priority,
            changeFrequency,
        })
    );

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

    const seen = new Set<string>();

    return [...staticNodes, ...dynamicNodes].filter((entry) => {
        if (seen.has(entry.url)) {
            return false;
        }

        seen.add(entry.url);
        return true;
    });
}
