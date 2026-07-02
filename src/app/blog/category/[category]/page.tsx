import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamicParams = true;

interface PageProps {
    params: Promise<{ category: string }>;
}

const IMMUTABLE_POSTS = [
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

export async function generateStaticParams() {
    return [{ category: "all" }, { category: "mindset" }, { category: "discipline" }, { category: "fitness" }, { category: "yoga" }];
}

export default async function CategoryPage({ params }: PageProps) {
    let category = "";

    // 100% safe unwrapping of Next.js 15 async params
    try {
        const resolved = params ? await params : null;
        category = String(resolved?.category || "").toLowerCase().trim();
    } catch {
        category = "";
    }

    const validCategories = ["all", "mindset", "discipline", "fitness", "yoga"];

    if (!category || !validCategories.includes(category)) {
        notFound();
    }

    const posts = category === "all" ? IMMUTABLE_POSTS : IMMUTABLE_POSTS.filter(p => p.category === category);

    return (
        <div className="min-h-screen bg-black text-white font-sans antialiased relative pt-36 pb-32">
            <main className="max-w-7xl mx-auto px-6 z-10 relative">
                <div className="mb-12">
                    <Link href="/blog" className="text-xs font-mono text-neutral-500 hover:text-cyan-400">&larr; BACK_TO_MATRIX_INDEX</Link>
                </div>
                <header className="mb-16 border-b border-neutral-900 pb-8">
                    <h1 className="text-4xl md:text-6xl font-black uppercase">Pillar: <span className="text-cyan-400">{category}</span></h1>
                    <p className="font-mono text-xs text-neutral-400 uppercase mt-2">{posts.length} Protocols Dynamic Filter Online</p>
                </header>
                <section className="grid gap-6 md:grid-cols-2">
                    {posts.map((post, idx) => (
                        <div key={`cat-${post.slug}-${idx}`} className="border border-neutral-900 bg-neutral-950/20 p-8 flex flex-col justify-between group hover:border-neutral-700 transition-all">
                            <div className="space-y-4">
                                <div className="flex justify-between font-mono text-xs">
                                    <span className="text-cyan-400">{post.displayPillar}</span>
                                    <span className="text-neutral-600">
                                        LOG_{String(idx + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <h2 className="text-xl font-bold uppercase tracking-wide group-hover:text-cyan-400 transition-colors">
                                    <Link href={`/blog/posts/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <p className="text-sm font-light text-neutral-400 line-clamp-3">{post.description}</p>
                            </div>
                            <div className="pt-6 mt-6 border-t border-neutral-900/60">
                                <Link href={`/blog/posts/${post.slug}`} className="text-xs font-mono text-neutral-500 hover:text-white transition-colors">Launch Study Protocol &rarr;</Link>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
}