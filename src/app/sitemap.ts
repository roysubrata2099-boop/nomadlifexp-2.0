import { MetadataRoute } from 'next';

// 1. Helper function to ensure dates resolve safely to a Unix timestamp
function safeTimestamp(dateInput: string | number | Date | undefined): number {
    if (!dateInput) return 0;
    return new Date(dateInput).getTime();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // TODO: Ensure your actual data fetching/importing logic for 'validPosts' sits here
    // e.g., const validPosts = await getAllPosts(); 
    const validPosts: any[] = [];

    // Problem 1 Fixed: Swapped 'p.updatedAt' to 'p.updatedDate' to match your Post model schema
    const latestDate = validPosts.length > 0
        ? new Date(Math.max(...validPosts.map(p => safeTimestamp(p.updatedDate || p.date))))
        : new Date();

    // Problem 2 Fixed: Explicitly mapping your data array to strictly match 
    // Next.js's native MetadataRoute.Sitemap index access types.
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: 'https://nomadlifexp-2-0.vercel.app',
            lastModified: latestDate,
            changeFrequency: 'daily',
            priority: 1.0,
        }
    ];

    const postRoutes: MetadataRoute.Sitemap = validPosts.map((p) => ({
        url: `https://nomadlifexp-2-0.vercel.app/blog/${p.slug}`,
        lastModified: p.updatedDate ? new Date(p.updatedDate) : new Date(p.date),
        changeFrequency: 'weekly',
        priority: 0.7,
    }));

    return [...staticRoutes, ...postRoutes];
}