import { redirect, notFound } from "next/navigation";

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

const LEGACY_SLUGS: Record<string, string> = {
    "fitness-consistency-myth-showing-up":
        "consistency-myth-showing-up-beats-perfect",

    "rebuild-attention-span-digital-distraction":
        "rebuild-your-attention-span",

    "stop-procrastination-permanently":
        "why-you-procrastinate-how-to-stop",

    "self-discipline-guide":
        "self-discipline-comprehensive-guide",
};

export default async function InsightsRedirect({
    params,
}: PageProps) {
    const { slug } = await params;

    const normalizedSlug = slug
        .trim()
        .toLowerCase();

    const targetSlug =
        LEGACY_SLUGS[normalizedSlug] ??
        normalizedSlug;

    redirect(`/blog/posts/${targetSlug}`);
}
