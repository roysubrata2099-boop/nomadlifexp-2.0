import fs from "fs";
import path from "path";
import Link from "next/link";
import React from "react";

interface PostItem {
    slug: string;
    title: string;
    description: string;
    category: string;
    displayPillar: string;
}

// 1. Re-use the exact same immutable data structure for 100% fallback safety
const IMMUTABLE_POSTS: PostItem[] = [
    { slug: "rebuild-your-attention-span", title: "Rebuild Your Attention Span", description: "Reclaim your mental baseline and stop dopamine overstimulation.", category: "mindset", displayPillar: "MINDSET" },
    { slug: "why-you-cant-focus-even-when-you-try-hard", title: "Why You Can't Focus Even When You Try Hard", description: "The underlying mechanics of cognitive friction and focus optimization.", category: "mindset", displayPillar: "MINDSET" },
    { slug: "mental-clarity-stop-overthinking-and-regain-focus", title: "Mental Clarity: Stop Overthinking and Regain Focus", description: "Practical mental frameworks to eliminate internal noise.", category: "mindset", displayPillar: "MINDSET" },
    { slug: "you-are-not-stuck-in-life", title: "You Are Not Stuck in Life", description: "Breaking down false glass ceilings and rewiring momentum patterns.", category: "mindset", displayPillar: "MINDSET" },
    { slug: "self-discipline-guide-reclaim-your-attention-rebuild-your-life", title: "Self Discipline Guide: Reclaim Your Attention, Rebuild Your Life", description: "The definitive operational blueprint to building sovereign self-control.", category: "discipline", displayPillar: "DISCIPLINE" },
    { slug: "why-you-procrastinate-and-how-to-stop-it", title: "Why You Procrastinate and How to Stop It", description: "Moving past emotional resistance frameworks into raw, consistent action.", category: "discipline", displayPillar: "DISCIPLINE" },
    { slug: "the-power-of-daily-habits-over-motivation", title: "The Power of Daily Habits Over Motivation", description: "Why system-driven behavior scaling beats erratic motivation bursts every time.", category: "discipline", displayPillar: "DISCIPLINE" },
    { slug: "why-people-watch-workout-videos-but-never-actually-exercise", title: "Why People Watch Workout Videos but Never Actually Exercise", description: "Overcoming passive consumption loops to manifest real physical habits.", category: "fitness", displayPillar: "FITNESS" },
    { slug: "fitness-consistency-build-workout-discipline-that-lasts", title: "Fitness Consistency: Build Workout Discipline That Lasts", description: "Structuring automated body transformations without friction dependencies.", category: "fitness", displayPillar: "FITNESS" },
    { slug: "fitness-is-not-about-time", title: "Fitness Is Not About Time", description: "Demolishing time-scarcity myths around athletic cultivation layouts.", category: "fitness", displayPillar: "FITNESS" },
    { slug: "build-workout-habit-outlast-motivation", title: "How to Build a Workout Habit That Outlasts Your Motivation", description: "The structural architecture required to anchor an unshakeable fitness identity.", category: "fitness", displayPillar: "FITNESS" },
    { slug: "headstand-benefits-for-body-and-mind", title: "Headstand Benefits for Body and Mind", description: "Inversion mechanics for neural performance and vascular wellness.", category: "yoga", displayPillar: "YOGA" },
    { slug: "forearm-stand-yoga-for-focus-and-confidence", title: "Forearm Stand Yoga for Focus and Confidence", description: "Calibrating geometric precision balance to anchor situational awareness.", category: "yoga", displayPillar: "YOGA" },
    { slug: "forward-bending-yoga-for-stress-relief", title: "Forward Bending Yoga for Stress Relief", description: "Triggering parasympathetic nervous response states through structured release.", category: "yoga", displayPillar: "YOGA" }
];

interface PageProps {
    params: Promise<{ slug: string }>;
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;

    // Find static fallback configuration immediately
    const staticPost = IMMUTABLE_POSTS.find(p => p.slug === slug);

    if (!staticPost) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center font-mono p-6">
                <p className="text-red-500 mb-4">// ERROR: INVALID_MATRIX_SLUG</p>
                <Link href="/blog" className="border border-neutral-800 px-4 py-2 hover:border-cyan-500 transition-colors">
                    &larr; Return to Terminal Index
                </Link>
            </div>
        );
    }

    let finalTitle = staticPost.title;
    let htmlContent = `<p class="text-neutral-400 italic">${staticPost.description}</p><p class="text-neutral-500 mt-4">[System Note: Live markdown ledger file missing or unreadable. Displaying protected cache snapshot.]</p>`;

    // Safe File System Read Operation
    try {
        // Enforce absolute directory mapping to prevent silent environmental bugs
        const targetDir = path.resolve(process.cwd(), "src/content/posts");
        let filename = `${slug}.md`;

        // Flawless edge-case override handler
        if (slug === "build-workout-habit-outlast-motivation") {
            filename = "how-to-build-a-workout-habit-that-outlasts-your-motivation.md";
        }

        const filePath = path.join(targetDir, filename);

        if (fs.existsSync(filePath)) {
            const rawContent = fs.readFileSync(filePath, "utf8") || "";
            const lines = rawContent.split("\n");

            // Extract title cleanly if it exists
            const h1Line = lines.find(l => l.trim().startsWith("# "));
            if (h1Line) {
                finalTitle = h1Line.replace("# ", "").trim();
            }

            // Convert paragraphs directly to markup without external parser breaking vectors
            const coreBody = lines
                .filter(l => !l.trim().startsWith("# ") && !l.trim().startsWith("---"))
                .join("\n")
                .trim();

            if (coreBody.length > 0) {
                htmlContent = coreBody
                    .split("\n\n")
                    .map(para => `<p class="mb-6 leading-relaxed text-neutral-300 font-light">${para.replace(/\n/g, "<br/>")}</p>`)
                    .join("");
            }
        }
    } catch {
        // Absolute isolated silence fallback
    }

    return (
        <div className="min-h-screen bg-black text-white font-sans antialiased relative overflow-hidden">
            <main className="max-w-3xl mx-auto px-6 pt-36 pb-32 relative z-10">
                <div className="mb-8 font-mono text-xs flex justify-between items-center text-neutral-500">
                    <Link href="/blog" className="hover:text-cyan-400 transition-colors">&larr; BACK_TO_INDEX</Link>
                    <span className="text-cyan-400 uppercase tracking-widest">{staticPost.displayPillar}</span>
                </div>

                <article className="space-y-8">
                    <header className="space-y-4 border-b border-neutral-900 pb-8">
                        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
                            {finalTitle}
                        </h1>
                    </header>

                    <div
                        className="prose prose-invert max-w-none text-base"
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                </article>
            </main>
        </div>
    );
}