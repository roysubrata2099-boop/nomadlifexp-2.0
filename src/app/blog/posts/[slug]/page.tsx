import fs from "fs";
import path from "path";
import React from "react";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

function getActualFilenameFromSlug(urlSlug: string): string {
    const s = String(urlSlug || "").toLowerCase().trim();
    if (s === "build-workout-habit-outlast-motivation") {
        return "how-to-build-a-workout-habit-that-outlasts-your-motivation.md";
    }
    return `${s}.md`;
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
    const resolved = await params.catch(() => null);
    const slug = String(resolved?.slug || "").trim();

    if (!slug) notFound();

    const targetFilename = getActualFilenameFromSlug(slug);
    const targetPath = path.join(process.cwd(), "src", "content", "posts", targetFilename);

    let finalContent = "Dynamic server content currently being updated. Check back shortly.";

    // Protected reading engine layer
    if (fs.existsSync(targetPath)) {
        try {
            const rawContent = fs.readFileSync(targetPath, "utf8") || "";
            const lines = rawContent.split("\n");
            finalContent = lines.filter(line => !line.trim().startsWith("# ")).join("\n").trim();
        } catch (readError) {
            // Fails gracefully into default notification instead of a full app 500 error
        }
    }

    return (
        <div className="min-h-screen bg-black text-white font-sans antialiased relative pt-36 pb-32">
            <article className="max-w-3xl mx-auto px-6 prose prose-invert">
                <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">// PROTOCOL_LOG_ENGAGED // {slug.toUpperCase()}</span>
                <div className="mt-8 space-y-6 font-light leading-relaxed text-neutral-300 whitespace-pre-line">
                    {finalContent}
                </div>
            </article>
        </div>
    );
}