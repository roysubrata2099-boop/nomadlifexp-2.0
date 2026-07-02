import React from "react";
import Link from "next/link";

interface PostItem {
    slug: string;
    title: string;
    description: string;
    category: string;
    displayPillar: string;
}

// Explicit array typing ensures the filter methods execute flawlessly
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

interface CategoryProps {
    params: Promise<{ category: string }>;
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function BlogCategoryPage({ params }: CategoryProps) {
    const { category } = await params;

    // Fallback safe assignment handles casing variations smoothly
    const normalizedCategory = (category || "").toLowerCase();
    const filteredPosts = IMMUTABLE_POSTS.filter(p => p.category === normalizedCategory);

    const categoriesList = [
        { name: "all", path: "/blog" },
        { name: "mindset", path: "/blog/category/mindset" },
        { name: "discipline", path: "/blog/category/discipline" },
        { name: "fitness", path: "/blog/category/fitness" },
        { name: "yoga", path: "/blog/category/yoga" }
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans antialiased relative overflow-hidden">
            <main className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">
                <header className="mb-16 border-b border-neutral-900 pb-8 space-y-2">
                    <p className="text-xs uppercase tracking-[0.4em] font-mono text-neutral-500">
                        NomadLifeXP // Partition: {normalizedCategory}
                    </p>
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">
                        Segment: {normalizedCategory}
                    </h1>
                </header>

                <section className="space-y-4 mb-12">
                    <h3 className="text-xs font-mono uppercase text-neutral-500">System Directories</h3>
                    <div className="flex flex-wrap gap-3 font-mono text-xs uppercase">
                        {categoriesList.map((cat) => {
                            const isActive = cat.name === normalizedCategory;
                            return (
                                <Link
                                    key={`cat-route-${cat.name}`}
                                    href={cat.path}
                                    className={`border px-4 py-2.5 transition-all ${isActive
                                            ? "border-cyan-500 text-cyan-400 bg-neutral-950"
                                            : "border-neutral-900 bg-neutral-950/40 hover:border-cyan-500 hover:text-cyan-400"
                                        }`}
                                >
                                    {cat.name}
                                </Link>
                            );
                        })}
                    </div>
                </section>

                <section className="grid gap-6 md:grid-cols-2">
                    {filteredPosts.map((post, idx) => (
                        <div
                            key={`cat-post-${post.slug}-${idx}`}
                            className="border border-neutral-900 bg-neutral-950/20 p-8 flex flex-col justify-between transition-all hover:border-neutral-700 group"
                        >
                            <div className="space-y-4">
                                <div className="flex justify-between font-mono text-xs">
                                    <span className="text-cyan-400">{post.displayPillar}</span>
                                    <span className="text-neutral-600">ID: {String(idx + 1).padStart(2, "0")}</span>
                                </div>
                                <h2 className="text-xl font-bold uppercase tracking-wide group-hover:text-cyan-400 transition-colors line-clamp-2">
                                    <Link href={`/blog/posts/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <p className="text-sm font-light text-neutral-400 line-clamp-3">{post.description}</p>
                            </div>
                            <div className="pt-6 mt-6 border-t border-neutral-900/60">
                                <Link
                                    href={`/blog/posts/${post.slug}`}
                                    className="text-xs font-mono text-neutral-500 hover:text-white transition-colors"
                                >
                                    Read Full Post &rarr;
                                </Link>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
}