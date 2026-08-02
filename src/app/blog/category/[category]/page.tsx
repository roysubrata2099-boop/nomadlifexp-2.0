import "server-only";

import FitnessPage from "@/components/pages/FitnessPage";
import DisciplinePage from "@/components/pages/DisciplinePage";
import YogaPage from "@/components/pages/YogaPage";
import MindsetPage from "@/components/pages/MindsetPage";

import { notFound } from "next/navigation";
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


    if (!PILLARS.has(slug)) {

        return {
            title: "Category Not Found | NomadLifeXP",
            robots: {
                index: false,
                follow: false,
            },
        };
    }


    const title =
        slug.charAt(0).toUpperCase() +
        slug.slice(1);


    return {

        title: `${title} Architecture & Systems | NomadLifeXP`,

        description:
            `Explore the NomadLifeXP ${title} evolution system.`,

        alternates: {
            canonical:
                `https://www.nomadlifexp.com/blog/category/${slug}`,
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