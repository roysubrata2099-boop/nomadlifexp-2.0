import "server-only";

import { getAllPosts } from "@/lib/markdown";
import { normalizeCategory } from "@/lib/taxonomy";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface SystemPost {
    slug: string;
    title: string;
    description: string;
}

const SITE_URL = "https://www.nomadlifexp.com";
const PAGE_URL = `${SITE_URL}/fitness`;

export const metadata: Metadata = {
    title: "Fitness: Build Strength, Mobility & Physical Resilience | NomadLifeXP",
    description:
        "Build strength, mobility, conditioning and workout consistency with the NomadLifeXP Fitness System. Create a resilient body built for movement, performance and longevity.",
    keywords: [
        "fitness",
        "physical fitness",
        "strength training",
        "functional fitness",
        "mobility",
        "workout consistency",
        "fitness habits",
        "fitness discipline",
        "physical resilience",
        "physical strength",
        "conditioning",
        "cardiovascular fitness",
        "fitness for longevity",
        "how to build a workout habit",
        "how to stay consistent with exercise",
        "how to build fitness consistency",
        "how to get stronger",
        "how to improve mobility",
        "fitness and discipline",
        "fitness and consistency",
        "fitness for travelers",
        "nomadic fitness",
        "travel fitness",
        "physical autonomy",
    ],
    authors: [{ name: "NomadLifeXP" }],
    creator: "NomadLifeXP",
    publisher: "NomadLifeXP",
    category: "Fitness",
    alternates: {
        canonical: PAGE_URL,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    openGraph: {
        type: "website",
        url: PAGE_URL,
        title: "Fitness: Build Strength, Mobility & Physical Resilience | NomadLifeXP",
        description:
            "Build strength, mobility, conditioning and workout consistency with the NomadLifeXP Fitness System.",
        siteName: "NomadLifeXP",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Fitness: Build Strength, Mobility & Physical Resilience | NomadLifeXP",
        description:
            "Build strength, mobility, conditioning and workout consistency with the NomadLifeXP Fitness System.",
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
                    const rawCategory =
                        typeof post.category === "string"
                            ? post.category
                            : "";

                    const rawTitle =
                        typeof post.title === "string"
                            ? post.title
                            : "";

                    const category = normalizeCategory(
                        rawCategory,
                        rawTitle
                    );

                    return safeSlug(category) === "fitness";
                } catch {
                    return false;
                }
            })
            .map((post) => ({
                slug: safeSlug(post?.slug),
                title: safeText(
                    post?.title,
                    "Untitled Knowledge Node"
                ),
                description: safeText(
                    post?.description,
                    "System description unavailable."
                ),
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
            description:
                "Motivation is a volatile emotional state. If you only exercise when you feel inspired, your fitness journey will remain inconsistent. True behavioral change occurs when training transforms from an emotional decision into an automatic identity choice. By engineering environmental triggers and reducing friction, you can construct a workout habit that executes even on low-energy days.",
            slug: "how-to-build-a-workout-habit",
            step: "STEP 01",
            subtitle: "The core foundation",
        },
        {
            title: "Fitness Consistency: Build Workout Discipline That Lasts",
            description:
                "Workout consistency beats occasional bursts of intensity. A focused training session performed regularly creates the repeated stimulus your body needs to adapt. Sustainable fitness is a system built around training, recovery, and habits that can survive changing schedules and environments.",
            slug: "fitness-consistency-build-workout-discipline",
            step: "STEP 02",
            subtitle: "The growth engine",
        },
        {
            title:
                "Fitness Is Not About Time: Mindset, Discipline, and Consistency over Motivation",
            description:
                "Stop waiting for the perfect, unbusy moment. Discover why long-term health and fitness depend on small, repeatable actions rather than finding hours of free time.",
            slug: "fitness-is-not-about-time",
            step: "STEP 03",
            subtitle: "The recovery protocol",
        },
        {
            title:
                "Why People Watch Workout Videos but Never Actually Exercise",
            description:
                "Discover why consuming fitness content can create a false sense of progress and how to move from passive information consumption toward consistent physical action.",
            slug: "why-people-watch-workout-videos",
            step: "STEP 04",
            subtitle: "The nomadic system",
        },
    ];

    const filteredFeaturedArticles =
        featuredFitnessArticles.filter((article) =>
            fitnessArticles.some(
                (existing) => existing.slug === article.slug
            )
        );

    const filteredDatabaseArticles = fitnessArticles.filter(
        (article) =>
            !featuredFitnessArticles.some(
                (featured) => featured.slug === article.slug
            )
    );

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Fitness: Build Strength, Mobility & Physical Resilience",
        headline: "Fitness: The Physical Architecture of Resilience",
        description:
            "Build strength, mobility, conditioning and workout consistency with the NomadLifeXP Fitness System.",
        url: PAGE_URL,
        isPartOf: {
            "@type": "WebSite",
            name: "NomadLifeXP",
            url: SITE_URL,
        },
        about: [
            {
                "@type": "Thing",
                name: "Physical fitness",
            },
            {
                "@type": "Thing",
                name: "Strength training",
            },
            {
                "@type": "Thing",
                name: "Mobility",
            },
            {
                "@type": "Thing",
                name: "Physical resilience",
            },
            {
                "@type": "Thing",
                name: "Workout consistency",
            },
        ],
        mainEntity: {
            "@type": "ItemList",
            name: "NomadLifeXP Fitness Articles",
            numberOfItems: fitnessArticles.length,
            itemListElement: fitnessArticles.map(
                (post, index) => ({
                    "@type": "ListItem",
                    position: index + 1,
                    name: post.title,
                    url: `${SITE_URL}/blog/posts/${post.slug}`,
                })
            ),
        },
    };

    return (
        <main className="min-h-screen bg-black text-white antialiased">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6 py-24">

                {/* Visual Background Accent */}
                <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

                {/* Navigation Layer */}
                <nav
                    aria-label="Breadcrumb"
                    className="relative z-10 flex gap-4 mb-16 pb-6 border-b border-neutral-900 font-mono text-xs uppercase tracking-[0.3em]"
                >
                    <Link
                        href="/blog"
                        className="text-neutral-500 hover:text-cyan-400 transition-colors"
                    >
                        &larr; RETURN_TO_BLOG
                    </Link>

                    <span className="text-neutral-800">
                        /
                    </span>

                    <span
                        className="text-neutral-400"
                        aria-current="page"
                    >
                        fitness
                    </span>
                </nav>

                {/* Page Header */}
                <header className="relative z-10 mb-24">
                    <p className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        NOMADLIFEXP // HUMAN EVOLUTION SYSTEM
                    </p>

                    <h1 className="text-5xl md:text-7xl font-black uppercase leading-none">
                        Fitness: The Physical Architecture of Resilience
                    </h1>

                    <p className="mt-6 text-xl font-medium text-neutral-200">
                        Build strength, mobility, conditioning, consistency,
                        and physical resilience for a body designed to move.
                    </p>

                    <p className="mt-4 max-w-3xl text-neutral-400 font-mono leading-relaxed">
                        Fitness is not just aesthetics or temporary
                        transformation. It is an engineered system designed
                        to build physical autonomy, strength, and structural
                        resilience so you can move through the world without
                        unnecessary restriction.
                    </p>

                    <p className="mt-4 max-w-3xl text-neutral-400 font-mono leading-relaxed">
                        In a lifestyle defined by travel, mobility, and
                        shifting environments, your physical foundation must
                        remain resilient. The NomadLifeXP Fitness System
                        explores how strength training, functional movement,
                        recovery, conditioning, and daily consistency compound
                        into lifelong physical capability.
                    </p>
                </header>

                {/* Fitness Evolution Path */}
                <section
                    className="mb-24"
                    aria-labelledby="fitness-evolution-path"
                >
                    <h2
                        id="fitness-evolution-path"
                        className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        THE FITNESS EVOLUTION PATH
                    </h2>

                    <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                        A framework for building strength, movement capacity,
                        physical resilience, and long-term fitness.
                    </p>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            {
                                id: "01",
                                title: "01 — Foundation",
                                subtext:
                                    "Establish baseline strength, joint integrity, and movement patterns.",
                                text:
                                    "Before chasing intensity, build a body capable of handling physical demands with control.",
                            },
                            {
                                id: "02",
                                title: "02 — Adaptation",
                                subtext:
                                    "Use progressive overload, resistance training, and functional movement.",
                                text:
                                    "Challenge the body systematically so strength, capacity, and performance can adapt over time.",
                            },
                            {
                                id: "03",
                                title: "03 — Consistency",
                                subtext:
                                    "Build sustainable training systems that travel with you anywhere.",
                                text:
                                    "Fitness is maintained through repeatable habits, not short-term workout programs.",
                            },
                            {
                                id: "04",
                                title: "04 — Autonomy",
                                subtext:
                                    "Build a resilient and capable body ready for changing environments.",
                                text:
                                    "True fitness gives you greater freedom to move, explore, and perform with confidence.",
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

                {/* How To Build Fitness Consistency */}
                <section
                    className="mb-24"
                    aria-labelledby="build-fitness"
                >
                    <h2
                        id="build-fitness"
                        className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        HOW TO BUILD CONSISTENT FITNESS
                    </h2>

                    <p className="mb-8 max-w-3xl font-mono text-sm text-neutral-400 leading-relaxed">
                        Sustainable fitness is built through repeatable
                        systems rather than relying on motivation. Develop
                        training habits that make movement, recovery, and
                        physical progress part of your normal routine.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Build a Workout Habit",
                                text:
                                    "Create a realistic training routine that fits your schedule, environment, and current fitness level.",
                            },
                            {
                                title: "Train for Strength",
                                text:
                                    "Use progressive resistance and controlled movement to develop useful physical strength and capability.",
                            },
                            {
                                title: "Improve Mobility",
                                text:
                                    "Develop usable range of motion and movement quality so strength can be expressed through a capable body.",
                            },
                            {
                                title: "Stay Consistent",
                                text:
                                    "Reduce friction, plan around your environment, and keep training even when motivation fluctuates.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="border border-neutral-800 bg-neutral-950 p-8"
                            >
                                <h3 className="mb-3 text-white font-bold uppercase tracking-wide">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-neutral-400 font-mono leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Structured Recommended Path */}
                {filteredFeaturedArticles.length > 0 && (
                    <section
                        className="mb-24"
                        aria-labelledby="fitness-transformation"
                    >
                        <h2
                            id="fitness-transformation"
                            className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                        >
                            START YOUR FITNESS TRANSFORMATION
                        </h2>

                        <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                            Learn how to build workout habits, fitness
                            consistency, discipline, and sustainable training.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {filteredFeaturedArticles.map((item) => (
                                <article
                                    key={item.step}
                                    className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between"
                                >
                                    <div>
                                        <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
                                            {item.step} // {item.subtitle}
                                        </span>

                                        <h3 className="mt-3 text-xl font-bold uppercase tracking-wide">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 text-sm text-neutral-400 font-mono leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    <Link
                                        href={`/blog/posts/${item.slug}`}
                                        className="inline-block mt-8 text-cyan-400 text-xs font-mono uppercase tracking-wider hover:text-white transition-colors"
                                    >
                                        READ ARTICLE &rarr;
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </section>
                )}

                {/* Active Knowledge Modules Database */}
                <section
                    className="mb-24"
                    aria-labelledby="fitness-database"
                >
                    <div className="flex justify-between items-end mb-8 border-b border-neutral-900 pb-4">
                        <div>
                            <h2
                                id="fitness-database"
                                className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400 mb-1"
                            >
                                FITNESS DATABASE
                            </h2>

                            <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
                                Explore strength training, mobility,
                                conditioning, habits, and physical resilience
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
                        <p className="text-neutral-500 font-mono text-sm">
                            No fitness nodes available currently.
                        </p>
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

                {/* Fitness Framework */}
                <section
                    className="mb-24 border border-neutral-900 bg-neutral-950/60 p-8 md:p-12"
                    aria-labelledby="fitness-framework"
                >
                    <h2
                        id="fitness-framework"
                        className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        THE NOMADLIFEXP FITNESS FRAMEWORK
                    </h2>

                    <p className="mb-10 text-xl font-bold uppercase tracking-wide">
                        Four Pillars of Physical Mastery
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 font-mono">
                        <div className="border-l border-cyan-500/40 pl-6">
                            <h3 className="text-white font-bold uppercase mb-2">
                                Strength
                            </h3>

                            <p className="text-sm text-neutral-400 leading-relaxed">
                                Build useful physical strength and mechanical
                                capacity that supports movement, performance,
                                and resilience.
                            </p>
                        </div>

                        <div className="border-l border-cyan-500/40 pl-6">
                            <h3 className="text-white font-bold uppercase mb-2">
                                Mobility
                            </h3>

                            <p className="text-sm text-neutral-400 leading-relaxed">
                                Develop usable range of motion, movement
                                quality, joint function, and active flexibility
                                across different planes of movement.
                            </p>
                        </div>

                        <div className="border-l border-cyan-500/40 pl-6">
                            <h3 className="text-white font-bold uppercase mb-2">
                                Conditioning
                            </h3>

                            <p className="text-sm text-neutral-400 leading-relaxed">
                                Develop cardiovascular and metabolic capacity
                                so you can sustain physical effort and recover
                                effectively.
                            </p>
                        </div>

                        <div className="border-l border-cyan-500/40 pl-6">
                            <h3 className="text-white font-bold uppercase mb-2">
                                Longevity
                            </h3>

                            <p className="text-sm text-neutral-400 leading-relaxed">
                                Train for long-term physical capability by
                                balancing performance, recovery, movement
                                quality, and sustainable health habits.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why Fitness Matters */}
                <section
                    className="mb-24 grid md:grid-cols-2 gap-8"
                    aria-label="Why fitness matters"
                >
                    <div className="border border-red-950/50 bg-neutral-950 p-8">
                        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-red-400 mb-6">
                            WHY FITNESS MATTERS // WITHOUT IT:
                        </h2>

                        <ul className="space-y-3 font-mono text-sm text-neutral-400 list-disc list-inside">
                            <li>
                                Physical capacity can decline through inactivity.
                            </li>
                            <li>
                                Reduced strength and movement can limit daily capability.
                            </li>
                            <li>
                                Inconsistent training makes long-term progress harder to sustain.
                            </li>
                        </ul>
                    </div>

                    <div className="border border-cyan-950/50 bg-neutral-950 p-8">
                        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400 mb-6">
                            WHY FITNESS MATTERS // WITH IT:
                        </h2>

                        <ul className="space-y-3 font-mono text-sm text-neutral-400 list-disc list-inside">
                            <li>
                                Strength and physical capacity support everyday movement.
                            </li>
                            <li>
                                Consistent activity supports physical and mental resilience.
                            </li>
                            <li>
                                Better mobility and conditioning expand physical capability.
                            </li>
                            <li>
                                A capable body creates greater freedom to move and explore.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Call To Action */}
                <section
                    className="mb-24 border border-cyan-900/40 bg-neutral-950 p-10 text-center"
                    aria-labelledby="forge-your-vessel"
                >
                    <h2
                        id="forge-your-vessel"
                        className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400 mb-3"
                    >
                        FORGE YOUR VESSEL
                    </h2>

                    <p className="text-2xl md:text-3xl font-black uppercase tracking-wide mb-4">
                        Master Your Physical Architecture
                    </p>

                    <p className="text-neutral-400 font-mono text-sm max-w-xl mx-auto mb-8">
                        Build the strength, mobility, conditioning, and
                        consistency required to create a body capable of
                        supporting the life you want to live.
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
                        Fitness is your physical engine. Continue developing
                        the other pillars:
                    </p>

                    <div className="grid sm:grid-cols-3 gap-6 font-mono text-xs uppercase">
                        <Link
                            href="/blog/category/discipline"
                            className="border border-neutral-900 bg-neutral-950 p-6 text-neutral-300 hover:border-cyan-500 transition-colors block"
                        >
                            <span className="block text-white font-bold mb-1">
                                Discipline
                            </span>

                            <span className="text-neutral-500 text-[10px] lowercase block mb-3">
                                Master attention, systems, habits, and execution consistency.
                            </span>

                            <span className="text-cyan-400">
                                EXPLORE DISCIPLINE &rarr;
                            </span>
                        </Link>

                        <Link
                            href="/blog/category/mindset"
                            className="border border-neutral-900 bg-neutral-950 p-6 text-neutral-300 hover:border-cyan-500 transition-colors block"
                        >
                            <span className="block text-white font-bold mb-1">
                                Mindset
                            </span>

                            <span className="text-neutral-500 text-[10px] lowercase block mb-3">
                                Develop mental clarity, resilience, and emotional control.
                            </span>

                            <span className="text-cyan-400">
                                EXPLORE MINDSET &rarr;
                            </span>
                        </Link>

                        <Link
                            href="/blog/category/yoga"
                            className="border border-neutral-900 bg-neutral-950 p-6 text-neutral-300 hover:border-cyan-500 transition-colors block"
                        >
                            <span className="block text-white font-bold mb-1">
                                Yoga
                            </span>

                            <span className="text-neutral-500 text-[10px] lowercase block mb-3">
                                Develop active balance, mobility, recovery, and mind-body connection.
                            </span>

                            <span className="text-cyan-400">
                                EXPLORE YOGA &rarr;
                            </span>
                        </Link>
                    </div>
                </footer>
            </div>
        </main>
    );
}
