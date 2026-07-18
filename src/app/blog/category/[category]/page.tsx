// src/app/blog/category/[category]/page.tsx
import { permanentRedirect, notFound } from "next/navigation";

type CategoryParams = {
    category: string;
};

interface PageProps {
    params: Promise<CategoryParams>;
}

// Map the old sub-paths to their clean, permanent root paths
const CATEGORY_REDIRECTS: Record<string, string> = {
    discipline: "/discipline",
    fitness: "/fitness",
    yoga: "/yoga",
    mindset: "/mindset",
};

// Generates static paths at build time for optimal Next.js performance
export async function generateStaticParams() {
    return Object.keys(CATEGORY_REDIRECTS).map((category) => ({
        category,
    }));
}

export default async function CategoryPage({ params }: PageProps) {
    // Await the params safely as required by Next.js 15+
    const { category } = await params;

    // Normalize input to prevent case-sensitivity bugs (e.g., /Fitness vs /fitness)
    const normalizedCategory = category.toLowerCase();

    const destination = CATEGORY_REDIRECTS[normalizedCategory];

    // 1. Guard against non-existent categories (safely returns 404)
    if (!destination) {
        notFound();
    }

    // 2. Perform a clean 308 Permanent Redirect for optimal SEO juice
    permanentRedirect(destination);
}