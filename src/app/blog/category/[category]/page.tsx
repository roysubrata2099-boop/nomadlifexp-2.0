import "server-only";

import FitnessPage from "@/components/pages/FitnessPage";
import DisciplinePage from "@/components/pages/DisciplinePage";
import YogaPage from "@/components/pages/YogaPage";
import MindsetPage from "@/components/pages/MindsetPage";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface PageProps {
    params: Promise<{
        category: string;
    }>;
}

const VALID_CATEGORIES = new Set([
    "discipline",
    "fitness",
    "yoga",
    "mindset",
]);

function safeSlug(value: unknown): string {
    if (typeof value !== "string") {
        return "";
    }
    return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
    try {
        const params = await props.params;
        const rawCategory = safeSlug(params?.category);

        if (!VALID_CATEGORIES.has(rawCategory)) {
            return {
                title: "Category Not Found | NomadLifeXP",
                robots: {
                    index: false,
                    follow: false,
                },
            };
        }

        const categoryName = rawCategory.charAt(0).toUpperCase() + rawCategory.slice(1);

        return {
            title: `${categoryName} Architecture & Systems | NomadLifeXP`,
            description: `Explore engineered execution systems, articles, and knowledge nodes under the ${categoryName} category on NomadLifeXP.`,
            alternates: {
                canonical: `https://www.nomadlifexp.com/blog/category/${rawCategory}`,
            },
        };
    } catch {
        return {
            title: "Category Not Found | NomadLifeXP",
            robots: {
                index: false,
                follow: false,
            },
        };
    }
}

export default async function CategoryPage(props: PageProps) {
    try {
        const resolvedParams = await props.params;
        const categorySlug = safeSlug(resolvedParams?.category);

        if (!VALID_CATEGORIES.has(categorySlug)) {
            notFound();
        }

        switch (categorySlug) {
            case "fitness":
                return <FitnessPage />;

            case "discipline":
                return <DisciplinePage />;

            case "yoga":
                return <YogaPage />;

            case "mindset":
                return <MindsetPage />;

            default:
                notFound();
        }
    } catch {
        notFound();
    }
}