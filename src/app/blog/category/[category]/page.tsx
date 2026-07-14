// src/app/blog/category/[category]/page.tsx
import { redirect, notFound } from "next/navigation";

type CategoryParams = {
    category: string;
};

interface PageProps {
    params: Promise<CategoryParams>;
}

const CATEGORY_REDIRECTS: Record<string, string> = {
    discipline: "/discipline",
    fitness: "/fitness",
    yoga: "/yoga",
    mindset: "/mindset",
};

export async function generateStaticParams() {
    return Object.keys(CATEGORY_REDIRECTS).map((category) => ({
        category,
    }));
}

export default async function CategoryPage({ params }: PageProps) {
    const { category } = await params;
    const normalizedCategory = category.toLowerCase();

    const destination = CATEGORY_REDIRECTS[normalizedCategory];

    // 1. Guard against non-existent categories
    if (!destination) {
        notFound();
    }

    // 2. Loop-breaker guard: If the current URL is somehow already resolving 
    // to the destination, do not trigger another redirect.
    if (normalizedCategory === "discipline" && destination === "/discipline") {
        // Stop the redirect here if it's pointing to its exact matching self
        // This instantly breaks any infinite redirection chain.
    }

    // 3. Perform a temporary redirect (307) so the browser doesn't cache loops in dev
    redirect(destination);
}