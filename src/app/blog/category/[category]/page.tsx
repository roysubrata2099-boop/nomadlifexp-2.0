import "server-only";

import FitnessPage from "@/components/pages/FitnessPage";
import DisciplinePage from "@/components/pages/DisciplinePage";
import YogaPage from "@/components/pages/YogaPage";
import MindsetPage from "@/components/pages/MindsetPage";

import { notFound, permanentRedirect } from "next/navigation";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type PageProps = {
    params: Promise<{
        category: string;
    }>;
};


const PILLARS = new Set([
    "fitness",
    "discipline",
    "yoga",
    "mindset",
]);


function normalizeSlug(value: unknown): string {

    if (typeof value !== "string") {
        return "";
    }

    return value
        .trim()
        .toLowerCase();
}



export async function generateMetadata(
    { params }: PageProps
): Promise<Metadata> {
    const { category } = await params;
    const slug = normalizeSlug(category);

    const seo: Record<string, { title: string; description: string }> = {
        yoga: {
            title: "Yoga for Flexibility, Focus & Mind-Body Awareness | NomadLifeXP",
            description: "Explore yoga for flexibility, mobility, breath awareness, mental focus, and mind-body connection with practical guides from NomadLifeXP.",
        },
        fitness: {
            title: "Fitness, Strength & Physical Wellness | NomadLifeXP",
            description: "Explore fitness guides on strength, conditioning, mobility, recovery, and building sustainable physical habits with NomadLifeXP.",
        },
        discipline: {
            title: "Discipline, Consistency & Better Habits | NomadLifeXP",
            description: "Explore practical guides to discipline, consistency, habit formation, and building routines that support long-term personal growth.",
        },
        mindset: {
            title: "Mindset, Mental Clarity & Personal Growth | NomadLifeXP",
            description: "Explore mindset guides on mental clarity, resilience, focus, self-awareness, and practical personal development with NomadLifeXP.",
        },
    };

    const page = seo[slug];

    if (!PILLARS.has(slug) || !page) {
        return {
            title: "Category Not Found | NomadLifeXP",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const url = `https://www.nomadlifexp.com/blog/category/${slug}`;

    return {
        title: page.title,
        description: page.description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: page.title,
            description: page.description,
            url,
            type: "website",
            siteName: "NomadLifeXP",
        },
        twitter: {
            card: "summary",
            title: page.title,
            description: page.description,
        },
    };
}

export default async function CategoryPage(
    { params }: PageProps
) {

    const { category } = await params;

    const slug = normalizeSlug(category);



    if (!PILLARS.has(slug)) {
        notFound();
    }

    if (slug === "yoga") {
        permanentRedirect("/yoga");
    }



    switch (slug) {


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
}
