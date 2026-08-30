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

        const seen = new Set<string>();

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
            .filter((post) => {
                if (!post.slug) {
                    return false;
                }

                if (seen.has(post.slug)) {
                    return false;
                }

                seen.add(post.slug);

                return true;
            });
    } catch {
        return [];
    }
}

const featuredFitnessArticles = [
    {
        title: "How to Build a Workout Habit That Outlasts Your Motivation",
        description:
            "Motivation is a volatile emotional state. If you only exercise when you feel inspired, your fitness journey will remain inconsistent. Build a workout habit by engineering environmental triggers, reducing friction, and making training easier to execute even on low-energy days.",
        slug: "how-to-build-a-workout-habit",
        step: "STEP 01",
        subtitle: "THE FOUNDATION",
    },
    {
        title: "Fitness Consistency: Build Workout Discipline That Lasts",
        description:
            "Workout consistency beats occasional bursts of intensity. Sustainable fitness is built through repeatable training, recovery, and behavioral systems that continue working across changing schedules and environments.",
        slug: "fitness-consistency-build-workout-discipline",
        step: "STEP 02",
        subtitle: "THE GROWTH ENGINE",
    },
    {
        title:
            "Fitness Is Not About Time: Mindset, Discipline, and Consistency over Motivation",
        description:
            "Stop waiting for the perfect, unbusy moment. Long-term fitness depends on small, repeatable actions rather than finding unlimited free time.",
        slug: "fitness-is-not-about-time",
        step: "STEP 03",
        subtitle: "THE CONSISTENCY PROTOCOL",
    },
    {
        title:
            "Why People Watch Workout Videos but Never Actually Exercise",
        description:
            "Fitness information is not the same as physical progress. Understand why consuming workout content can feel productive and learn how to move from passive information toward consistent physical action.",
        slug: "why-people-watch-workout-videos",
        step: "STEP 04",
        subtitle: "THE EXECUTION SYSTEM",
    },
];

export default function FitnessPage() {
    let fitnessArticles: SystemPost[] = [];

    try {
        fitnessArticles = getFitnessPosts();
    } catch {
        fitnessArticles = [];
    }

    const filteredFeaturedArticles = featuredFitnessArticles.filter(
        (article) =>
            fitnessArticles.some(
                (existing) => existing.slug === article.slug
            )
    );

    const featuredSlugs = new Set(
        filteredFeaturedArticles.map((article) => article.slug)
    );

    const additionalArticles = fitnessArticles.filter(
        (article) => !featuredSlugs.has(article.slug)
    );

    const totalArticles = fitnessArticles.length;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${PAGE_URL}#webpage`,
                name: "Fitness: Build Strength, Mobility & Physical Resilience",
                headline:
                    "Fitness: The Physical Architecture of Resilience",
                description:
                    "Build strength, mobility, conditioning and workout consistency with the NomadLifeXP Fitness System.",
                url: PAGE_URL,
                inLanguage: "en-US",
                isPartOf: {
                    "@type": "WebSite",
                    "@id": `${SITE_URL}#website`,
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
                    "@id": `${PAGE_URL}#fitness-articles`,
                },
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${PAGE_URL}#breadcrumbs`,
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Blog",
                        item: `${SITE_URL}/blog`,
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "Fitness",
                        item: PAGE_URL,
                    },
                ],
            },
            {
                "@type": "ItemList",
                "@id": `${PAGE_URL}#fitness-articles`,
                name: "NomadLifeXP Fitness Articles",
                description:
                    "Fitness articles covering strength, mobility, conditioning, workout habits, consistency, and physical resilience.",
                numberOfItems: totalArticles,
                itemListOrder:
                    "https://schema.org/ItemListOrderAscending",
                itemListElement: fitnessArticles.map(
                    (post, index) => ({
                        "@type": "ListItem",
                        position: index + 1,
                        name: post.title,
                        url: `${SITE_URL}/blog/posts/${post.slug}`,
                    })
                ),
            },
        ],
    };

    return (
        <main className="min-h-screen bg-black text-white antialiased">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />

            <div className="relative mx-auto max-w-7xl px-6 py-24">
                {/* Background atmosphere */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/3 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]"
                />                {/* Navigation */}
                <nav
                    className="mb-12 flex flex-col gap-3 border-b border-neutral-900 pb-6"
                    aria-label="Page navigation"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-white hover:text-cyan-400 transition-colors group"
                    >
                        <span
                            className="transition-transform duration-200 group-hover:-translate-x-1"
                            aria-hidden="true"
                        >
                            ←
                        </span>
                        <span>NOMADLIFEXP</span>
                    </Link>

                    <ol className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em]">
                        <li>
                            <Link
                                href="/"
                                className="text-white hover:text-cyan-400 transition-colors"
                            >
                                Home
                            </Link>
                        </li>

                        <li aria-hidden="true" className="text-neutral-500">
                            /
                        </li>

                        <li>
                            <Link
                                href="/blog"
                                className="text-white hover:text-cyan-400 transition-colors"
                            >
                                Blog
                            </Link>
                        </li>

                        <li aria-hidden="true" className="text-neutral-500">
                            /
                        </li>

                        <li className="text-cyan-400" aria-current="page">
                            Fitness
                        </li>
                    </ol>
                </nav>

                {/* Hero */}
                <header className="relative z-10 mb-24">
                    <p className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        NOMADLIFEXP // HUMAN EVOLUTION SYSTEM
                    </p>

                    <h1 className="max-w-6xl text-5xl font-black uppercase leading-none md:text-7xl">
                        Fitness: The Physical Architecture of Resilience
                    </h1>

                    <p className="mt-6 max-w-4xl text-xl font-medium text-neutral-200">
                        Build strength, mobility, conditioning, consistency,
                        and physical resilience for a body designed to move.
                    </p>

                    <p className="mt-4 max-w-3xl font-mono leading-relaxed text-neutral-400">
                        Fitness is not just aesthetics or temporary
                        transformation. It is a physical system designed to
                        build strength, movement capacity, resilience, and
                        autonomy so you can move through the world with fewer
                        unnecessary limitations.
                    </p>

                    <p className="mt-4 max-w-3xl font-mono leading-relaxed text-neutral-400">
                        In a lifestyle defined by movement, travel, and
                        changing environments, your physical foundation needs
                        to remain adaptable. The NomadLifeXP Fitness System
                        explores how strength training, mobility, conditioning,
                        recovery, and consistency compound into long-term
                        physical capability.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {[
                            "STRENGTH",
                            "MOBILITY",
                            "CONDITIONING",
                            "CONSISTENCY",
                            "LONGEVITY",
                        ].map((tag) => (
                            <span
                                key={tag}
                                className="border border-cyan-900/60 bg-cyan-950/20 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                {/* Evolution path */}
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

                    <p className="mb-8 max-w-3xl font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                        A framework for building strength, movement capacity,
                        physical resilience, and long-term fitness.
                    </p>

                    <div className="grid gap-6 md:grid-cols-4">
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
                                    "Use progressive resistance, movement practice, and conditioning.",
                                text:
                                    "Challenge the body systematically so strength, capacity, and performance can adapt over time.",
                            },
                            {
                                id: "03",
                                title: "03 — Consistency",
                                subtext:
                                    "Build sustainable training systems that survive changing schedules and environments.",
                                text:
                                    "Fitness is maintained through repeatable habits, not short-term bursts of motivation.",
                            },
                            {
                                id: "04",
                                title: "04 — Autonomy",
                                subtext:
                                    "Build a resilient body ready for movement, exploration, and changing demands.",
                                text:
                                    "True fitness creates greater freedom to move, perform, travel, and participate in life.",
                            },
                        ].map((module) => (
                            <article
                                key={module.id}
                                className="flex flex-col justify-between border border-neutral-800 bg-neutral-950 p-8"
                            >
                                <div>
                                    <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-cyan-400">
                                        {module.title}
                                    </h3>

                                    <p className="mb-4 text-sm font-semibold text-white">
                                        {module.subtext}
                                    </p>
                                </div>

                                <p className="font-mono text-xs leading-relaxed text-neutral-400">
                                    {module.text}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Build consistency */}
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

                    <p className="mb-8 max-w-3xl font-mono text-sm leading-relaxed text-neutral-400">
                        Sustainable fitness comes from repeatable systems
                        rather than relying on motivation. Build training,
                        recovery, and movement habits that fit your real life
                        and continue working when your schedule changes.
                    </p>

                    <div className="grid gap-6 md:grid-cols-2">
                        {[
                            {
                                title: "Build a Workout Habit",
                                text:
                                    "Create a realistic training routine that fits your schedule, environment, current ability, and available equipment.",
                            },
                            {
                                title: "Train for Strength",
                                text:
                                    "Use progressive resistance and controlled movement to develop useful strength and physical capability.",
                            },
                            {
                                title: "Improve Mobility",
                                text:
                                    "Develop usable range of motion and movement quality so strength can be expressed through a capable body.",
                            },
                            {
                                title: "Stay Consistent",
                                text:
                                    "Reduce friction, plan around your environment, and keep training even when motivation naturally fluctuates.",
                            },
                        ].map((item) => (
                            <article
                                key={item.title}
                                className="border border-neutral-800 bg-neutral-950 p-8"
                            >
                                <h3 className="mb-3 font-bold uppercase tracking-wide text-white">
                                    {item.title}
                                </h3>

                                <p className="font-mono text-sm leading-relaxed text-neutral-400">
                                    {item.text}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Recommended progression */}
                {filteredFeaturedArticles.length > 0 && (
                    <section
                        id="fitness-transformation"
                        className="mb-24 scroll-mt-24"
                        aria-labelledby="fitness-transformation-heading"
                    >
                        <div className="mb-8 border-b border-neutral-900 pb-4">
                            <h2
                                id="fitness-transformation-heading"
                                className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                            >
                                START YOUR FITNESS TRANSFORMATION
                            </h2>

                            <p className="max-w-3xl font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                                Follow the progression from building the habit
                                to executing a sustainable physical system.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {filteredFeaturedArticles.map((item) => (
                                <article
                                    key={item.step}
                                    className="flex flex-col justify-between border border-neutral-800 bg-neutral-950 p-8 transition-colors hover:border-cyan-900"
                                >
                                    <div>
                                        <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                                            {item.step} // {item.subtitle}
                                        </span>

                                        <h3 className="mt-3 text-xl font-bold uppercase tracking-wide text-white">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 font-mono text-sm leading-relaxed text-neutral-400">
                                            {item.description}
                                        </p>
                                    </div>

                                    <Link
                                        href={`/blog/posts/${item.slug}`}
                                        className="mt-8 inline-block font-mono text-xs uppercase tracking-wider text-cyan-400 transition-colors hover:text-white"
                                    >
                                        READ ARTICLE &rarr;
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </section>
                )}

                {/* Fitness Articles Database */}
                <section
                    id="fitness-database"
                    className="mb-24 scroll-mt-24"
                    aria-labelledby="fitness-database-heading"
                >
                    <div className="mb-8 flex items-end justify-between border-b border-neutral-900 pb-4">
                        <div>
                            <h2
                                id="fitness-database-heading"
                                className="mb-1 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                            >
                                FITNESS DATABASE
                            </h2>

                            <p className="max-w-2xl font-mono text-xs uppercase tracking-wider text-neutral-500">
                                Explore strength training, mobility,
                                conditioning, habits, and physical resilience.
                            </p>
                        </div>

                        <span className="ml-6 whitespace-nowrap font-mono text-xs text-neutral-400">
                            {totalArticles}{" "}
                            {totalArticles === 1 ? "ARTICLE" : "ARTICLES"}
                        </span>
                    </div>

                    {additionalArticles.length > 0 ? (
                        <div className="grid gap-6 md:grid-cols-2">
                            {additionalArticles.map((post) => (
                                <article
                                    key={post.slug}
                                    className="flex flex-col justify-between border border-neutral-800 bg-neutral-950 p-8 transition-colors hover:border-cyan-900"
                                >
                                    <div>
                                        <h3 className="text-lg font-bold uppercase tracking-wide text-white">
                                            {post.title}
                                        </h3>

                                        <p className="mt-4 font-mono text-sm leading-relaxed text-neutral-400">
                                            {post.description}
                                        </p>
                                    </div>

                                    <Link
                                        href={`/blog/posts/${post.slug}`}
                                        className="mt-8 inline-block font-mono text-xs uppercase tracking-wider text-cyan-400 transition-colors hover:text-white"
                                    >
                                        READ ARTICLE &rarr;
                                    </Link>
                                </article>
                            ))}
                        </div>
                    ) : filteredFeaturedArticles.length === 0 ? (
                        <p className="font-mono text-sm text-neutral-500">
                            No fitness nodes available currently.
                        </p>
                    ) : (
                        <div className="border border-neutral-900 bg-neutral-950/50 p-8">
                            <p className="font-mono text-sm leading-relaxed text-neutral-500">
                                The featured fitness path above contains the
                                current knowledge nodes. More fitness articles
                                will appear here as the library expands.
                            </p>
                        </div>
                    )}
                </section>

                {/* Framework */}
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

                    <div className="grid gap-8 font-mono md:grid-cols-2">
                        <article className="border-l border-cyan-500/40 pl-6">
                            <h3 className="mb-2 font-bold uppercase text-white">
                                Strength
                            </h3>

                            <p className="text-sm leading-relaxed text-neutral-400">
                                Build useful physical strength and mechanical
                                capacity that supports movement, performance,
                                independence, and resilience.
                            </p>
                        </article>

                        <article className="border-l border-cyan-500/40 pl-6">
                            <h3 className="mb-2 font-bold uppercase text-white">
                                Mobility
                            </h3>

                            <p className="text-sm leading-relaxed text-neutral-400">
                                Develop usable range of motion, movement
                                quality, joint function, and control across
                                different positions and planes of movement.
                            </p>
                        </article>

                        <article className="border-l border-cyan-500/40 pl-6">
                            <h3 className="mb-2 font-bold uppercase text-white">
                                Conditioning
                            </h3>

                            <p className="text-sm leading-relaxed text-neutral-400">
                                Develop cardiovascular and metabolic capacity
                                so you can sustain physical effort and recover
                                effectively between demanding activities.
                            </p>
                        </article>

                        <article className="border-l border-cyan-500/40 pl-6">
                            <h3 className="mb-2 font-bold uppercase text-white">
                                Longevity
                            </h3>

                            <p className="text-sm leading-relaxed text-neutral-400">
                                Train for long-term physical capability by
                                balancing performance, recovery, movement
                                quality, and sustainable health habits.
                            </p>
                        </article>
                    </div>
                </section>

                {/* Why fitness matters */}
                <section
                    className="mb-24 grid gap-8 md:grid-cols-2"
                    aria-label="Why fitness matters"
                >
                    <article className="border border-red-950/50 bg-neutral-950 p-8">
                        <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-red-400">
                            WHY FITNESS MATTERS // WITHOUT IT:
                        </h2>

                        <ul className="list-inside list-disc space-y-3 font-mono text-sm text-neutral-400">
                            <li>
                                Physical capacity can decline through
                                prolonged inactivity.
                            </li>

                            <li>
                                Reduced strength and movement capacity can
                                limit daily capability.
                            </li>

                            <li>
                                Inconsistent training makes long-term progress
                                harder to sustain.
                            </li>
                        </ul>
                    </article>

                    <article className="border border-cyan-950/50 bg-neutral-950 p-8">
                        <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
                            WHY FITNESS MATTERS // WITH IT:
                        </h2>

                        <ul className="list-inside list-disc space-y-3 font-mono text-sm text-neutral-400">
                            <li>
                                Strength and physical capacity support everyday
                                movement.
                            </li>

                            <li>
                                Consistent activity supports physical and
                                mental resilience.
                            </li>

                            <li>
                                Mobility and conditioning expand physical
                                capability.
                            </li>

                            <li>
                                A capable body creates greater freedom to move
                                and explore.
                            </li>
                        </ul>
                    </article>
                </section>

                {/* Primary CTA */}
                <section
                    className="mb-24 border border-cyan-900/40 bg-neutral-950 p-10 text-center"
                    aria-labelledby="forge-your-vessel"
                >
                    <h2
                        id="forge-your-vessel"
                        className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        FORGE YOUR VESSEL
                    </h2>

                    <p className="mb-4 text-2xl font-black uppercase tracking-wide md:text-3xl">
                        Master Your Physical Architecture
                    </p>

                    <p className="mx-auto mb-8 max-w-xl font-mono text-sm text-neutral-400">
                        Build the strength, mobility, conditioning, and
                        consistency required to create a body capable of
                        supporting the life you want to live.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        {/* START YOUR EVOLUTION */}
                        <Link
                            href="/blog"
                            className="inline-block bg-cyan-500 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.3em] text-black transition-colors hover:bg-cyan-400"
                        >
                            START YOUR EVOLUTION &rarr;
                        </Link>

                        {/* EXPLORE FITNESS ARTICLES
                            IMPORTANT:
                            This stays on the current /fitness page
                            and jumps to START YOUR FITNESS TRANSFORMATION.
                        */}
                        <Link
                            href="#fitness-transformation"
                            className="inline-block border border-cyan-500 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 transition-colors hover:bg-cyan-500 hover:text-black"
                        >
                            EXPLORE FITNESS ARTICLES &rarr;
                        </Link>
                    </div>
                </section>

                {/* Cross-pillar navigation */}
                <footer className="border-t border-neutral-900 pt-10">
                    <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-neutral-500">
                        CONTINUE YOUR HUMAN EVOLUTION
                    </h2>

                    <p className="mb-6 font-mono text-xs uppercase text-neutral-600">
                        Fitness is your physical engine. Continue developing
                        the other pillars:
                    </p>

                    <div className="grid gap-6 font-mono text-xs uppercase sm:grid-cols-2">
                        {/* Discipline */}
                        <Link
                            href="/blog/category/discipline"
                            className="block border border-neutral-900 bg-neutral-950 p-6 text-neutral-300 transition-colors hover:border-cyan-500"
                        >
                            <span className="mb-1 block font-bold text-white">
                                Discipline
                            </span>

                            <span className="mb-3 block text-[10px] lowercase text-neutral-500">
                                Master attention, systems, habits, and
                                execution consistency.
                            </span>

                            <span className="text-cyan-400">
                                EXPLORE DISCIPLINE &rarr;
                            </span>
                        </Link>

                        {/* Knowledge System */}
                        <Link
                            href="/blog"
                            className="block border border-neutral-900 bg-neutral-950 p-6 text-neutral-300 transition-colors hover:border-cyan-500"
                        >
                            <span className="mb-1 block font-bold text-white">
                                Knowledge System
                            </span>

                            <span className="mb-3 block text-[10px] lowercase text-neutral-500">
                                Continue exploring the NomadLifeXP human
                                evolution system.
                            </span>

                            <span className="text-cyan-400">
                                CONTINUE EVOLUTION &rarr;
                            </span>
                        </Link>
                    </div>
                </footer>
            </div>
        </main>
    );
}

