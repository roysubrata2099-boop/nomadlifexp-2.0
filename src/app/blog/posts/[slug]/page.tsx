import fs from "fs";
import path from "path";
import React from "react";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

function getActualFilenameFromSlug(urlSlug: string): string {
    const s = String(urlSlug || "").toLowerCase().trim();

    // 🧠 Mindset
    if (s === "rebuild-your-attention-span") return "rebuild-your-attention-span.md";
    if (s === "why-you-cant-focus-even-when-you-try-hard") return "why-you-cant-focus-even-when-you-try-hard.md";
    if (s === "mental-clarity-stop-overthinking-and-regain-focus") return "mental-clarity-stop-overthinking-and-regain-focus.md";
    if (s === "you-are-not-stuck-in-life") return "you-are-not-stuck-in-life.md";

    // 🎯 Discipline
    if (s === "self-discipline-guide-reclaim-your-attention-rebuild-your-life") return "self-discipline-guide-reclaim-your-attention-rebuild-your-life.md";
    if (s === "why-you-procrastinate-and-how-to-stop-it") return "why-you-procrastinate-and-how-to-stop-it.md";
    if (s === "the-power-of-daily-habits-over-motivation") return "the-power-of-daily-habits-over-motivation.md";

    // 💪 Fitness
    if (s === "why-people-watch-workout-videos-but-never-actually-exercise") return "why-people-watch-workout-videos-but-never-actually-exercise.md";
    if (s === "fitness-consistency-build-workout-discipline-that-lasts") return "fitness-consistency-build-workout-discipline-that-lasts.md";
    if (s === "fitness-is-not-about-time") return "fitness-is-not-about-time.md";
    if (s === "build-workout-habit-outlast-motivation") {
        return "how-to-build-a-workout-habit-that-outlasts-your-motivation.md";
    }

    // 🧘 Yoga
    if (s === "headstand-benefits-for-body-and-mind") return "headstand-benefits-for-body-and-mind.md";
    if (s === "forearm-stand-yoga-for-focus-and-confidence") return "forearm-stand-yoga-for-focus-and-confidence.md";
    if (s === "forward-bending-yoga-for-stress-relief") return "forward-bending-yoga-for-stress-relief.md";

    return `${urlSlug}.md`;
}

export async function generateStaticParams() {
    return [
        { slug: "rebuild-your-attention-span" },
        { slug: "why-you-cant-focus-even-when-you-try-hard" },
        { slug: "mental-clarity-stop-overthinking-and-regain-focus" },
        { slug: "you-are-not-stuck-in-life" },
        { slug: "self-discipline-guide-reclaim-your-attention-rebuild-your-life" },
        { slug: "why-you-procrastinate-and-how-to-stop-it" },
        { slug: "the-power-of-daily-habits-over-motivation" },
        { slug: "why-people-watch-workout-videos-but-never-actually-exercise" },
        { slug: "fitness-consistency-build-workout-discipline-that-lasts" },
        { slug: "fitness-is-not-about-time" },
        { slug: "build-workout-habit-outlast-motivation" },
        { slug: "headstand-benefits-for-body-and-mind" },
        { slug: "forearm-stand-yoga-for-focus-and-confidence" },
        { slug: "forward-bending-yoga-for-stress-relief" }
    ];
}

export default async function BlogPostPage({ params }: PageProps) {
    const resolvedParams = await params.catch(() => null);
    const slug = String(resolvedParams?.slug || "").trim();

    if (!slug) notFound();

    const targetFilename = getActualFilenameFromSlug(slug);
    const targetPath = path.join(process.cwd(), "src", "content", "posts", targetFilename);

    if (!fs.existsSync(targetPath)) {
        console.error(`Protected Node Failure: File not found at path ${targetPath}`);
        notFound();
    }

    let rawContent = "";
    try {
        rawContent = fs.readFileSync(targetPath, "utf8") || "";
    } catch (readError) {
        notFound();
    }

    const lines = rawContent.split("\n");
    const cleanContentLines = lines.filter(line => !line.trim().startsWith("# "));

    return (
        <div className="min-h-screen bg-black text-white font-sans antialiased relative pt-36 pb-32">
            <article className="max-w-3xl mx-auto px-6 prose prose-invert">
                <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">// PROTOCOL_LOG_ENGAGED</span>
                <div className="mt-8 space-y-6 font-light leading-relaxed text-neutral-300 whitespace-pre-line">
                    {cleanContentLines.join("\n").trim()}
                </div>
            </article>
        </div>
    );
}