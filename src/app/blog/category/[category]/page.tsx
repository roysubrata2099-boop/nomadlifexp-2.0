// src/app/blog/category/[category]/page.tsx

import { permanentRedirect, notFound } from "next/navigation";
import type { Metadata } from "next";

// Force request-time server evaluation to allow clean, runtime SEO 308 redirects
export const dynamic = "force-dynamic";
export const revalidate = 0;

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

// Insulates metadata compilation hooks from breaking before runtime evaluation
export async function generateMetadata(): Promise<Metadata> {
    return {
        robots: {
            index: false,
            follow: true,
        },
    };
}

export default async function CategoryPage({ params }: PageProps) {
    // 1. Safe Parameter Unwrapping
    const resolvedParams = await params;

    if (!resolvedParams || !resolvedParams.category) {
        notFound();
    }

    // 2. Bulletproof String Normalization Guard
    let normalizedCategory = "";
    try {
        normalizedCategory = String(resolvedParams.category).toLowerCase().trim();
    } catch {
        notFound();
    }

    const destination = CATEGORY_REDIRECTS[normalizedCategory];

    // 3. Guard against non-existent categories (safely returns 404)
    if (!destination) {
        notFound();
    }

    // 4. Perform a clean 308 Permanent Redirect for optimal SEO juice
    permanentRedirect(destination);
}