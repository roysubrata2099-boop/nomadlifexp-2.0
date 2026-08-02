import "server-only";

import { getAllPosts } from "@/lib/markdown";
import { normalizeCategory } from "@/lib/taxonomy";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface SystemPost {
    slug: string;
    title: string;
    description: string;
}

export const metadata: Metadata = {
    title: "Fitness Systems: Strength, Mobility & Physical Autonomy | NomadLifeXP",
    description:
        "Fitness is the physical architecture of resilience. Build physical autonomy, strength, and structural durability anywhere in the world.",
    alternates: {
        canonical: "https://www.nomadlifexp.com/fitness",
    },
};

function safeSlug(value: unknown): string {
    if (typeof value !== "string") {
        return "";
    }
    return value.trim().toLowerCase();
}

function safeText(value: unknown, fallback: string): string {
    if (typeof value !== "string") {
        return fallback;
    }
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : fallback;
}

function getFitnessPosts(): SystemPost[] {
    try {
        const posts = getAllPosts();

        if (!Array.isArray(posts)) {
            return [];
        }

        return posts
            .filter((post) => {
                if (!post || typeof post !== "object") {
                    return false;
                }

                try {
                    const rawCategory = typeof post.category === "string" ? post.category : "";
                    const rawTitle = typeof post.title === "string" ? post.title : "";

                    const category = normalizeCategory(rawCategory, rawTitle);
                    return safeSlug(category) === "fitness";
                } catch {
                    return false;
                }
            })
            .map((post) => ({
                slug: safeSlug(post?.slug),
                title: safeText(post?.title, "Untitled Knowledge Node"),
                description: safeText(post?.description, "System description unavailable."),
            }))
            .filter((post) => post.slug.length > 0);
    } catch {
        return [];
    }
}

export default function FitnessPage() {
    let fitnessArticles: SystemPost[] = [];

    try {
        fitnessArticles = getFitnessPosts();
    } catch {
        fitnessArticles = [];
    }

    const featuredFitnessArticles = [
        {
            title: "How to Build a Workout Habit That Outlasts Your Motivation",
            description: "Motivation is a volatile emotional state. If you only exercise when you feel inspired, your fitness journey will remain completely inconsistent. True behavioral change occurs when training transforms from an emotional decision into an automatic identity choice. By engineering environmental triggers and scaling down friction points, you can construct a workout habit that executes seamlessly, even on your lowest energy days.",
            slug: "how-to-build-a-workout-habit",
            step: "STEP 01",
            subtitle: "The core foundation"
        },
        {
            title: "Fitness Consistency: Build Workout Discipline That Lasts",
            description: "Absolute workout consistency beats high physical intensity every single time. A brutal 2-hour workout once every two weeks does practically nothing for your body compared to a focused 30-minute session executed four times a week. Transformation is a game of systemic adaptation, and your body will only adapt to what it experiences regularly.",
            slug: "fitness-consistency-build-workout-discipline",
            step: "STEP 02",
            subtitle: "The growth engine"
        },
        {
            title: "Fitness Is Not About Time: Mindset, Discipline, and Consistency over Motivation",
            description: "Stop waiting for the perfect, unbusy moment. Discover why long-term health and fitness depend on small daily actions rather than finding hours of free time.",
            slug: "fitness-is-not-about-time",
            step: "STEP 03",
            subtitle: "The recovery protocol"
        },
        {
            title: "Why People Watch Workout Videos but Never Actually Exercise",
            description: "Discover why watching fitness content gives your brain a false sense of achievement and how to break free from passive consumption to build actual physical habits.",
            slug: "why-people-watch-workout-videos",
            step: "STEP 04",
            subtitle: "The nomadic system"
        }
    ];

    const filteredFeaturedArticles = featuredFitnessArticles.filter(article =>
        fitnessArticles.some(
            existing => existing.slug === article.slug
        )
    );

    const filteredDatabaseArticles = fitnessArticles.filter(
        article => !featuredFitnessArticles.some(featured => featured.slug === article.slug)
    );

    return (
        <main className="min-h-screen bg-black text-white antialiased">
            <div className="relative max-w-7xl mx-auto px-6 py-24">

                {/* Visual Background Accent */}
                <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

                {/* Navigation Layer */}
                <nav className="relative z-10 flex gap-4 mb-16 pb-6 border-b border-neutral-900 font-mono text-xs uppercase tracking-[0.3em]">
                    <Link
                        href="/blog"
                        className="text-neutral-500 hover:text-cyan-400 transition-colors"
                    >
                        &larr; RETURN_TO_BLOG
                    </Link>

                    <span className="text-neutral-800">/</span>

                    <span className="text-neutral-400">fitness</span>
                </nav>

                {/* Page Header */}
                <header className="relative z-10 mb-24">
                    <p className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        NOMADLIFEXP // HUMAN EVOLUTION SYSTEM
                    </p>

                    <h1 className="text-5xl md:text-7xl font-black uppercase leading-none">
                        Fitness
                    </h1>

                    <p className="mt-6 text-xl font-medium text-neutral-200">
                        The Physical Architecture of Resilience
                    </p>

                    <p className="mt-4 max-w-3xl text-neutral-400 font-mono leading-relaxed">
                        Fitness is not just aesthetics or temporary transformation. It is an engineered execution system designed to build physical autonomy, strength, and structural resilience so you can move through the world without restriction.
                    </p>

                    <p className="mt-4 max-w-3xl text-neutral-400 font-mono leading-relaxed">
                        In a lifestyle defined by travel, mobility, and shifting environments, your physical foundation must remain unshakeable. The NomadLifeXP Fitness System explores how strength training, functional movement, recovery, and daily consistency compound into lifelong vitality.
                    </p>
                </header>

                {/* Theoretical Foundations Grid / Evolution Path */}
                <section className="mb-24">
                    <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        THE FITNESS EVOLUTION PATH
                    </h2>
                    <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                        A framework for building structural strength, movement capacity, and physical durability.
                    </p>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            {
                                id: "01",
                                title: "01 — Foundation",
                                subtext: "Establish baseline strength, joint integrity, and movement patterns.",
                                text: "Before chasing intensity, build a body that can handle mechanical load safely."
                            },
                            {
                                id: "02",
                                title: "02 — Adaptation",
                                subtext: "Progressive overload, resistance training, and functional capacity.",
                                text: "Force the body to adapt by systematically increasing physical demands over time."
                            },
                            {
                                id: "03",
                                title: "03 — Consistency",
                                subtext: "Build sustainable training systems that travel with you anywhere.",
                                text: "Fitness is maintained through lifelong habits, not short-term bootcamps."
                            },
                            {
                                id: "04",
                                title: "04 — Autonomy",
                                subtext: "A resilient, capable physical vessel ready for any challenge.",
                                text: "True fitness gives you the freedom to move, explore, and perform without physical limits."
                            },
                        ].map((module) => (
                            <div
                                key={module.id}
                                className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between"
                            >
                                <div>
                                    <h3 className="mb-3 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                                        {module.title}
                                    </h3>
                                    <p className="mb-4 text-sm font-semibold text-white">
                                        {module.subtext}
                                    </p>
                                </div>
                                <p className="text-xs text-neutral-400 font-mono leading-relaxed">
                                    {module.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Structured Recommended Path Section */}
                {filteredFeaturedArticles.length > 0 && (
                    <section className="mb-24">
                        <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                            START YOUR PHYSICAL TRANSFORMATION
                        </h2>
                        <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                            New to the fitness system? Begin here. Follow the recommended path:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {filteredFeaturedArticles.map((item) => (
                                <div key={item.step} className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between">
                                    <div>
                                        <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">{item.step} // {item.subtitle}</span>
                                        <h3 className="mt-3 text-xl font-bold uppercase tracking-wide">{item.title}</h3>
                                        <p className="mt-4 text-sm text-neutral-400 font-mono leading-relaxed">{item.description}</p>
                                    </div>
                                    <Link
                                        href={`/blog/posts/${item.slug}`}
                                        className="inline-block mt-8 text-cyan-400 text-xs font-mono uppercase tracking-wider hover:text-white transition-colors"
                                    >
                                        READ ARTICLE &rarr;
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Active Knowledge Modules Database */}
                <section className="mb-24">
                    <div className="flex justify-between items-end mb-8 border-b border-neutral-900 pb-4">
                        <div>
                            <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400 mb-1">
                                FITNESS DATABASE
                            </h2>
                            <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
                                Explore Physical Training & Resilience Systems
                            </p>
                        </div>
                        <span className="font-mono text-xs text-neutral-400">
                            {fitnessArticles.length} ARTICLES
                        </span>
                    </div>

                    {fitnessArticles.length > 0 ? (
                        <div className="grid md:grid-cols-2 gap-6">
                            {fitnessArticles.map((post) => (
                                <article
                                    key={post.slug}
                                    className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between"
                                >
                                    <div>
                                        <h3 className="text-lg font-bold uppercase tracking-wide">
                                            {post.title}
                                        </h3>
                                        <p className="mt-4 text-sm text-neutral-400 font-mono leading-relaxed">
                                            {post.description}
                                        </p>
                                    </div>
                                    <Link
                                        href={`/blog/posts/${post.slug}`}
                                        className="inline-block mt-8 text-cyan-400 text-xs font-mono uppercase tracking-wider hover:text-white transition-colors"
                                    >
                                        READ ARTICLE &rarr;
                                    </Link>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <p className="text-neutral-500 font-mono text-sm">No fitness nodes available currently.</p>
                    )}

                    {filteredDatabaseArticles.length > 0 && (
                        <div className="mt-12">
                            <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
                                ADDITIONAL KNOWLEDGE NODES
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {filteredDatabaseArticles.map((post) => (
                                    <article
                                        key={post.slug}
                                        className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between"
                                    >
                                        <div>
                                            <h3 className="text-lg font-bold uppercase tracking-wide">
                                                {post.title}
                                            </h3>
                                            <p className="mt-4 text-sm text-neutral-400 font-mono leading-relaxed">
                                                {post.description}
                                            </p>
                                        </div>
                                        <Link
                                            href={`/blog/posts/${post.slug}`}
                                            className="inline-block mt-8 text-cyan-400 text-xs font-mono uppercase tracking-wider hover:text-white transition-colors"
                                        >
                                            READ ARTICLE &rarr;
                                        </Link>
                                    </article>
                                ))}
                            </div>
                        </div>
                    )}
                </section>

                {/* The NomadLifeXP Fitness Framework Matrix */}
                <section className="mb-24 border border-neutral-900 bg-neutral-950/60 p-8 md:p-12">
                    <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        THE NOMADLIFEXP FITNESS FRAMEWORK
                    </h2>
                    <p className="mb-10 text-xl font-bold uppercase tracking-wide">
                        Four Pillars of Physical Mastery
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 font-mono">
                        <div className="border-l border-cyan-500/40 pl-6">
                            <h3 className="text-white font-bold uppercase mb-2">Strength</h3>
                            <p className="text-sm text-neutral-400 leading-relaxed">Absolute and relative strength acts as your physical armor. Build mechanical power that protects joints and ensures capability.</p>
                        </div>
                        <div className="border-l border-cyan-500/40 pl-6">
                            <h3 className="text-white font-bold uppercase mb-2">Mobility</h3>
                            <p className="text-sm text-neutral-400 leading-relaxed">Strength without range of motion is fragile. Maintain joint health, fluid movement, and active flexibility across all planes.</p>
                        </div>
                        <div className="border-l border-cyan-500/40 pl-6">
                            <h3 className="text-white font-bold uppercase mb-2">Conditioning</h3>
                            <p className="text-sm text-neutral-400 leading-relaxed">Build metabolic engine efficiency and cardiovascular resilience to sustain prolonged physical output under stress.</p>
                        </div>
                        <div className="border-l border-cyan-500/40 pl-6">
                            <h3 className="text-white font-bold uppercase mb-2">Longevity</h3>
                            <p className="text-sm text-neutral-400 leading-relaxed">Train with an eye on tomorrow. Design workouts that enhance health span, structural integrity, and long-term vitality.</p>
                        </div>
                    </div>
                </section>

                {/* Why Fitness Matters Matrix */}
                <section className="mb-24 grid md:grid-cols-2 gap-8">
                    <div className="border border-red-950/50 bg-neutral-950 p-8">
                        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-red-400 mb-6">WHY FITNESS MATTERS // WITHOUT IT:</h2>
                        <ul className="space-y-3 font-mono text-sm text-neutral-400 list-disc list-inside">
                            <li>Physical vitality declines prematurely.</li>
                            <li>Energy levels drop, creating chronic mental fatigue.</li>
                            <li>The body becomes fragile, prone to injury and postural decay.</li>
                        </ul>
                    </div>
                    <div className="border border-cyan-950/50 bg-neutral-950 p-8">
                        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400 mb-6">WHY FITNESS MATTERS // WITH IT:</h2>
                        <ul className="space-y-3 font-mono text-sm text-neutral-400 list-disc list-inside">
                            <li>Energy and metabolic health operate at maximum efficiency.</li>
                            <li>Mental clarity and stress resilience dramatically improve.</li>
                            <li>You command complete physical autonomy anywhere in the world.</li>
                        </ul>
                    </div>
                </section>

                {/* Call To Action Box */}
                <section className="mb-24 border border-cyan-900/40 bg-neutral-950 p-10 text-center">
                    <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400 mb-3">
                        FORGE YOUR VESSEL
                    </h2>
                    <p className="text-2xl md:text-3xl font-black uppercase tracking-wide mb-4">
                        Master Your Physical Architecture
                    </p>
                    <p className="text-neutral-400 font-mono text-sm max-w-xl mx-auto mb-8">
                        Your body is the vehicle for your human experience. Build the strength, mobility, and discipline required to run it at elite levels.
                    </p>
                    <Link
                        href="/blog"
                        className="inline-block bg-cyan-500 text-black font-mono text-xs uppercase tracking-[0.3em] px-8 py-4 font-bold hover:bg-cyan-400 transition-colors"
                    >
                        START HERE &rarr;
                    </Link>
                </section>

                {/* Cross-Connect Alternative Modules */}
                <footer className="border-t border-neutral-900 pt-10">
                    <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-neutral-500">
                        CONTINUE YOUR HUMAN EVOLUTION
                    </h2>
                    <p className="mb-6 font-mono text-xs text-neutral-600 uppercase">
                        Fitness is your physical engine. Continue developing the other pillars:
                    </p>

                    <div className="grid sm:grid-cols-3 gap-6 font-mono text-xs uppercase">
                        <Link
                            href="/blog/category/discipline"
                            className="border border-neutral-900 bg-neutral-950 p-6 text-neutral-300 hover:border-cyan-500 transition-colors block"
                        >
                            <span className="block text-white font-bold mb-1">Discipline</span>
                            <span className="text-neutral-500 text-[10px] lowercase block mb-3">Master attention, systems, habits, and execution consistency.</span>
                            <span className="text-cyan-400">EXPLORE DISCIPLINE &rarr;</span>
                        </Link>

                        <Link
                            href="/blog/category/mindset"
                            className="border border-neutral-900 bg-neutral-950 p-6 text-neutral-300 hover:border-cyan-500 transition-colors block"
                        >
                            <span className="block text-white font-bold mb-1">Mindset</span>
                            <span className="text-neutral-500 text-[10px] lowercase block mb-3">Develop mental clarity, resilience, and emotional control.</span>
                            <span className="text-cyan-400">EXPLORE MINDSET &rarr;</span>
                        </Link>

                        <Link
                            href="/blog/category/yoga"
                            className="border border-neutral-900 bg-neutral-950 p-6 text-neutral-300 hover:border-cyan-500 transition-colors block"
                        >
                            <span className="block text-white font-bold mb-1">Yoga</span>
                            <span className="text-neutral-500 text-[10px] lowercase block mb-3">Develop active balance, deep mobility, and nervous system recovery.</span>
                            <span className="text-cyan-400">EXPLORE YOGA &rarr;</span>
                        </Link>
                    </div>
                </footer>

            </div>
        </main>
    );
}