import "server-only";

import { getAllPosts } from "@/lib/markdown";
import { normalizeCategory } from "@/lib/taxonomy";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const SITE_URL = "https://www.nomadlifexp.com";
const PAGE_URL = `${SITE_URL}/yoga`;

interface SystemPost {
    slug: string;
    title: string;
    description: string;
}

export const metadata: Metadata = {
    title: "Yoga for Somatic Intelligence, Focus & Nervous System Regulation | NomadLifeXP",
    description:
        "Learn how yoga develops somatic awareness, breath control, mobility, mental stillness, focus, and nervous system regulation through the NomadLifeXP Yoga System.",
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: "Yoga for Somatic Intelligence, Focus & Nervous System Regulation | NomadLifeXP",
        description:
            "Explore the NomadLifeXP Yoga System for somatic awareness, breath control, mobility, mental stillness, focus, and nervous system regulation.",
        url: PAGE_URL,
        siteName: "NomadLifeXP",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Yoga for Somatic Intelligence, Focus & Nervous System Regulation",
        description:
            "Build somatic awareness, breath control, mobility, focus, and mental stillness with the NomadLifeXP Yoga System.",
    },
    robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
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

function getYogaPosts(): SystemPost[] {
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
                        typeof post.category === "string" ? post.category : "";

                    const rawTitle =
                        typeof post.title === "string" ? post.title : "";

                    const category = normalizeCategory(rawCategory, rawTitle);

                    return safeSlug(category) === "yoga";
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

function createYogaStructuredData(yogaArticles: SystemPost[]) {
    const articleItems = yogaArticles.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/blog/posts/${post.slug}`,
        item: {
            "@type": "Article",
            headline: post.title,
            description: post.description,
            url: `${SITE_URL}/blog/posts/${post.slug}`,
            isPartOf: {
                "@id": `${PAGE_URL}#yoga-collection`,
            },
        },
    }));

    return [
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${SITE_URL}#website`,
            url: SITE_URL,
            name: "NomadLifeXP",
            description:
                "NomadLifeXP is a human evolution platform focused on discipline, fitness, mindset, yoga, and practical self-development.",
            inLanguage: "en",
        },
        {
            "@context": "https://schema.org",
            "@type": "Thing",
            "@id": `${PAGE_URL}#topic`,
            name: "Yoga",
            description:
                "Yoga practices focused on somatic awareness, breath control, conscious movement, mobility, focus, mental stillness, and nervous system regulation.",
            url: PAGE_URL,
        },
        {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${PAGE_URL}#yoga-collection`,
            url: PAGE_URL,
            name:
                "Yoga for Somatic Intelligence, Focus & Nervous System Regulation",
            description:
                "The NomadLifeXP Yoga System develops somatic awareness, breath control, mobility, conscious movement, focus, and mental stillness.",
            isPartOf: {
                "@id": `${SITE_URL}#website`,
            },
            about: {
                "@id": `${PAGE_URL}#topic`,
            },
            inLanguage: "en",
            mainEntity: {
                "@type": "ItemList",
                "@id": `${PAGE_URL}#article-list`,
                name: "NomadLifeXP Yoga Knowledge Nodes",
                numberOfItems: yogaArticles.length,
                itemListOrder: "https://schema.org/ItemListOrderAscending",
                itemListElement: articleItems,
            },
        },
        {
            "@context": "https://schema.org",
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
                    name: "Yoga",
                    item: PAGE_URL,
                },
            ],
        },
    ];
}

export default function YogaPage() {
    let yogaArticles: SystemPost[] = [];

    try {
        yogaArticles = getYogaPosts();
    } catch {
        yogaArticles = [];
    }

    const featuredYogaArticles = [
        {
            title: "What Happens When You Try Forearm Stand Yoga for Focus and Confidence",
            description:
                "Understand the real purpose of Yoga beyond stretching. Learn how inversions, posture, balance, and awareness create the foundation for physical and mental control under pressure.",
            slug: "what-happens-when-you-try-forearm-stand-yoga-for-focus-and-confidence",
            step: "STEP 01",
            subtitle: "THE FOUNDATION",
        },
        {
            title: "It’s Never Too Late to Transform Your Body and Mind with Forward Bending Yoga",
            description:
                "Forward bending practices teach surrender, posterior chain mobility, nervous system calming, and the ability to release physical and emotional tension.",
            slug: "its-never-too-late-to-transform-your-body-and-mind-with-forward-bending-yoga",
            step: "STEP 02",
            subtitle: "THE REGULATION SYSTEM",
        },
        {
            title: "What Happens in Your Mind When Everything Becomes Still",
            description:
                "Stillness is the training ground for attention. Learn how meditation, breath awareness, and reduced external stimulation create mental stability.",
            slug: "what-happens-in-your-mind-when-everything-becomes-still",
            step: "STEP 03",
            subtitle: "THE MOBILITY SYSTEM",
        },
    ];

    const validFeaturedYogaArticles = featuredYogaArticles.filter((article) =>
        yogaArticles.some((post) => post.slug === article.slug)
    );

    const structuredData = createYogaStructuredData(yogaArticles);

    return (
        <main className="min-h-screen bg-black text-white antialiased">
            {/* SEO Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />

            <div className="relative mx-auto max-w-7xl px-6 py-24">
                {/* Visual Background Accent */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/3 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]"
                />

                {/* Navigation Layer */}
                <nav
                    aria-label="Breadcrumb"
                    className="relative z-10 mb-16 flex gap-4 border-b border-neutral-900 pb-6 font-mono text-xs uppercase tracking-[0.3em]"
                >
                    <Link
                        href="/blog"
                        className="text-neutral-500 transition-colors hover:text-cyan-400"
                    >
                        &larr; RETURN_TO_BLOG
                    </Link>

                    <span
                        aria-hidden="true"
                        className="text-neutral-800"
                    >
                        /
                    </span>

                    <span
                        aria-current="page"
                        className="text-neutral-400"
                    >
                        yoga
                    </span>
                </nav>

                {/* Page Header */}
                <header className="relative z-10 mb-24">
                    <p className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        NOMADLIFEXP // SOMATIC INTELLIGENCE LAYER
                    </p>

                    <h1 className="text-5xl font-black uppercase leading-none md:text-7xl">
                        Yoga for Somatic Intelligence
                    </h1>

                    <p className="mt-6 text-xl font-medium text-neutral-200">
                        Build Body Awareness, Focus, Mobility & Nervous System Regulation
                    </p>

                    <p className="mt-4 max-w-3xl font-mono leading-relaxed text-neutral-400">
                        Yoga is more than flexibility training. It is a practical
                        system for developing somatic awareness, breath control,
                        nervous system regulation, mobility, conscious movement,
                        attention, and mental stillness.
                    </p>

                    <p className="mt-4 max-w-3xl font-mono leading-relaxed text-neutral-400">
                        While Discipline teaches you to control your actions and
                        Fitness teaches you to develop physical capability, Yoga
                        develops awareness of the internal environment from which
                        those actions emerge.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                        <span className="border border-neutral-800 px-4 py-2">
                            SOMATIC AWARENESS
                        </span>
                        <span className="border border-neutral-800 px-4 py-2">
                            BREATH CONTROL
                        </span>
                        <span className="border border-neutral-800 px-4 py-2">
                            MOBILITY
                        </span>
                        <span className="border border-neutral-800 px-4 py-2">
                            MENTAL STILLNESS
                        </span>
                    </div>
                </header>

                {/* Theoretical Foundations Grid / Evolution Path */}
                <section
                    id="yoga-evolution-path"
                    aria-labelledby="yoga-evolution-heading"
                    className="mb-24"
                >
                    <h2
                        id="yoga-evolution-heading"
                        className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        THE YOGA EVOLUTION PATH
                    </h2>

                    <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                        A framework for building internal awareness,
                        neurological control, and somatic autonomy.
                    </p>

                    <div className="grid gap-6 md:grid-cols-4">
                        {[
                            {
                                id: "01",
                                title: "01 — Awareness",
                                subtext: "Develop Body Intelligence",
                                text: "Learn to recognize breathing patterns, muscular tension, posture, emotions, and unconscious physical habits.",
                            },
                            {
                                id: "02",
                                title: "02 — Regulation",
                                subtext: "Control Your Nervous System",
                                text: "Develop the ability to shift from stress, anxiety, and reaction into calm focus and control.",
                            },
                            {
                                id: "03",
                                title: "03 — Integration",
                                subtext: "Connect Mind and Movement",
                                text: "Every posture, breath, and transition becomes an opportunity to build coordination between intention and physical action.",
                            },
                            {
                                id: "04",
                                title: "04 — Mastery",
                                subtext: "Achieve Somatic Autonomy",
                                text: "Maintain awareness, stability, and control regardless of environment, pressure, or uncertainty.",
                            },
                        ].map((module) => (
                            <div
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
                            </div>
                        ))}
                    </div>
                </section>

                {/* Structured Recommended Path Section */}
                {validFeaturedYogaArticles.length > 0 && (
                    <section
                        id="start-yoga"
                        aria-labelledby="start-yoga-heading"
                        className="mb-24"
                    >
                        <h2
                            id="start-yoga-heading"
                            className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                        >
                            START YOUR YOGA TRANSFORMATION
                        </h2>

                        <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                            New to the somatic system? Begin here. Follow the
                            recommended path:
                        </p>

                        <div className="grid gap-6 md:grid-cols-2">
                            {validFeaturedYogaArticles.map((item) => (
                                <article
                                    key={item.step}
                                    className="flex flex-col justify-between border border-neutral-800 bg-neutral-950 p-8"
                                >
                                    <div>
                                        <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                                            {item.step} // {item.subtitle}
                                        </span>

                                        <h3 className="mt-3 text-xl font-bold uppercase tracking-wide">
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

                {/* The Yoga System Architecture */}
                <section
                    id="yoga-system-architecture"
                    aria-labelledby="yoga-system-architecture-heading"
                    className="mb-24 border border-neutral-900 bg-neutral-950/60 p-8 md:p-12"
                >
                    <h2
                        id="yoga-system-architecture-heading"
                        className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        THE YOGA SYSTEM ARCHITECTURE
                    </h2>

                    <p className="mb-6 text-xl font-bold uppercase tracking-wide">
                        How the Protocols Interact
                    </p>

                    <p className="mb-6 font-mono text-sm leading-relaxed text-neutral-400">
                        The NomadLifeXP Yoga System is built as an interconnected
                        feedback loop. Breath regulation supports somatic awareness,
                        awareness improves movement intelligence, and intentional
                        movement creates conditions for greater stillness and
                        control.
                    </p>

                    <div className="grid gap-4 font-mono text-xs text-cyan-400 sm:grid-cols-4">
                        <div className="border border-neutral-800 bg-black p-4 text-center">
                            BREATH &rarr; AWARENESS
                        </div>

                        <div className="border border-neutral-800 bg-black p-4 text-center">
                            AWARENESS &rarr; MOVEMENT
                        </div>

                        <div className="border border-neutral-800 bg-black p-4 text-center">
                            MOVEMENT &rarr; STILLNESS
                        </div>

                        <div className="border border-neutral-800 bg-black p-4 text-center">
                            STILLNESS &rarr; AUTONOMY
                        </div>
                    </div>
                </section>

                {/* SEO Informational Section */}
                <section
                    id="how-to-practice-yoga"
                    aria-labelledby="how-to-practice-yoga-heading"
                    className="mb-24 border border-neutral-900 bg-neutral-950 p-8 md:p-12"
                >
                    <h2
                        id="how-to-practice-yoga-heading"
                        className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        HOW TO PRACTICE YOGA FOR SOMATIC INTELLIGENCE
                    </h2>

                    <div className="max-w-4xl space-y-5 font-mono text-sm leading-relaxed text-neutral-400">
                        <p>
                            A useful yoga practice does not need to begin with
                            advanced poses. Start by developing awareness of
                            breathing, posture, muscular tension, balance, and
                            movement quality.
                        </p>

                        <p>
                            Build consistency before complexity. Simple
                            movements performed with deliberate attention can
                            develop a stronger mind-body connection than
                            constantly chasing more difficult positions.
                        </p>

                        <p>
                            Use breathing and stillness to observe your internal
                            state, then use controlled movement to develop
                            mobility, coordination, balance, and physical
                            confidence.
                        </p>

                        <p>
                            Over time, the objective is not simply to become
                            more flexible. The objective is to become more
                            aware, more coordinated, more regulated, and more
                            capable of directing attention under changing
                            conditions.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="border border-neutral-800 bg-black p-5">
                            <h3 className="mb-2 font-bold uppercase text-white">
                                01. Breathe
                            </h3>
                            <p className="font-mono text-xs leading-relaxed text-neutral-500">
                                Notice and intentionally work with your breathing
                                patterns.
                            </p>
                        </div>

                        <div className="border border-neutral-800 bg-black p-5">
                            <h3 className="mb-2 font-bold uppercase text-white">
                                02. Observe
                            </h3>
                            <p className="font-mono text-xs leading-relaxed text-neutral-500">
                                Develop awareness of tension, posture, sensation,
                                and attention.
                            </p>
                        </div>

                        <div className="border border-neutral-800 bg-black p-5">
                            <h3 className="mb-2 font-bold uppercase text-white">
                                03. Move
                            </h3>
                            <p className="font-mono text-xs leading-relaxed text-neutral-500">
                                Build controlled mobility, coordination, balance,
                                and movement quality.
                            </p>
                        </div>

                        <div className="border border-neutral-800 bg-black p-5">
                            <h3 className="mb-2 font-bold uppercase text-white">
                                04. Integrate
                            </h3>
                            <p className="font-mono text-xs leading-relaxed text-neutral-500">
                                Carry awareness and control into everyday life.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Active Knowledge Modules Database */}
                <section
                    id="yoga-database"
                    aria-labelledby="yoga-database-heading"
                    className="mb-24"
                >
                    <div className="mb-8 flex items-end justify-between border-b border-neutral-900 pb-4">
                        <div>
                            <h2
                                id="yoga-database-heading"
                                className="mb-1 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                            >
                                YOGA DATABASE
                            </h2>

                            <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                                Explore Somatic Intelligence & Attention Control Systems
                            </p>
                        </div>

                        <span className="font-mono text-xs text-neutral-400">
                            ACTIVE KNOWLEDGE NODES: {yogaArticles.length}
                        </span>
                    </div>

                    {yogaArticles.length > 0 ? (
                        <div className="grid gap-6 md:grid-cols-2">
                            {yogaArticles.map((post) => (
                                <article
                                    key={post.slug}
                                    className="flex flex-col justify-between border border-neutral-800 bg-neutral-950 p-8"
                                >
                                    <div>
                                        <h3 className="text-lg font-bold uppercase tracking-wide">
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
                    ) : (
                        <p className="font-mono text-sm text-neutral-500">
                            No yoga nodes available currently.
                        </p>
                    )}
                </section>

                {/* The NomadLifeXP Yoga Framework Matrix */}
                <section
                    id="yoga-framework"
                    aria-labelledby="yoga-framework-heading"
                    className="mb-24 border border-neutral-900 bg-neutral-950/60 p-8 md:p-12"
                >
                    <h2
                        id="yoga-framework-heading"
                        className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        THE NOMADLIFEXP YOGA FRAMEWORK
                    </h2>

                    <p className="mb-10 text-xl font-bold uppercase tracking-wide">
                        Four Pillars of Somatic Mastery
                    </p>

                    <div className="grid gap-8 font-mono md:grid-cols-2">
                        <div className="border-l border-cyan-500/40 pl-6">
                            <h3 className="mb-2 font-bold uppercase text-white">
                                Breath Regulation
                            </h3>

                            <p className="text-sm leading-relaxed text-neutral-400">
                                Your breath is a direct access point to your
                                internal state. Develop greater awareness of
                                breathing, stress response, recovery, and
                                attention.
                            </p>
                        </div>

                        <div className="border-l border-cyan-500/40 pl-6">
                            <h3 className="mb-2 font-bold uppercase text-white">
                                Somatic Awareness
                            </h3>

                            <p className="text-sm leading-relaxed text-neutral-400">
                                Attention creates information about the body.
                                Learn to observe sensations, thoughts,
                                emotions, posture, and reactions before acting.
                            </p>
                        </div>

                        <div className="border-l border-cyan-500/40 pl-6">
                            <h3 className="mb-2 font-bold uppercase text-white">
                                Movement Intelligence
                            </h3>

                            <p className="text-sm leading-relaxed text-neutral-400">
                                Build usable mobility, coordination, balance,
                                joint control, and lifelong movement capability
                                through deliberate practice.
                            </p>
                        </div>

                        <div className="border-l border-cyan-500/40 pl-6">
                            <h3 className="mb-2 font-bold uppercase text-white">
                                Mental Stillness
                            </h3>

                            <p className="text-sm leading-relaxed text-neutral-400">
                                Train the ability to remain present and focused
                                without immediately reacting to every internal
                                or external stimulus.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why Yoga Matters Matrix */}
                <section
                    id="why-yoga-matters"
                    aria-labelledby="why-yoga-matters-heading"
                    className="mb-24 grid gap-8 md:grid-cols-2"
                >
                    <div className="border border-red-950/50 bg-neutral-950 p-8">
                        <h2
                            id="why-yoga-matters-heading"
                            className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-red-400"
                        >
                            WHY YOGA MATTERS // WITHOUT IT:
                        </h2>

                        <ul className="list-inside list-disc space-y-3 font-mono text-sm text-neutral-400">
                            <li>The body can accumulate unconscious tension.</li>
                            <li>Stress responses may become habitual and reactive.</li>
                            <li>Movement can become less efficient as awareness decreases.</li>
                        </ul>
                    </div>

                    <div className="border border-cyan-950/50 bg-neutral-950 p-8">
                        <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
                            WHY YOGA MATTERS // WITH IT:
                        </h2>

                        <ul className="list-inside list-disc space-y-3 font-mono text-sm text-neutral-400">
                            <li>Breathing becomes more intentional and observable.</li>
                            <li>Movement becomes more controlled and deliberate.</li>
                            <li>Mind-body awareness becomes part of everyday action.</li>
                        </ul>
                    </div>
                </section>

                {/* Nomad Advantage Matrix */}
                <section
                    id="nomad-yoga-advantage"
                    aria-labelledby="nomad-yoga-advantage-heading"
                    className="mb-24 border border-cyan-900/40 bg-neutral-950 p-8 md:p-12"
                >
                    <h2
                        id="nomad-yoga-advantage-heading"
                        className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        THE NOMADLIFEXP SOMATIC ADVANTAGE
                    </h2>

                    <p className="mb-6 text-xl font-bold uppercase tracking-wide">
                        Why Nomads Need Yoga
                    </p>

                    <p className="mb-6 font-mono text-sm text-neutral-400">
                        Travel can create physical and neurological instability:
                    </p>

                    <ul className="mb-6 list-inside list-disc space-y-2 font-mono text-sm text-neutral-400">
                        <li>New environments</li>
                        <li>Irregular sleep</li>
                        <li>Stress accumulation</li>
                        <li>Reduced recovery</li>
                        <li>Limited equipment</li>
                    </ul>

                    <p className="font-mono text-sm font-semibold text-cyan-400">
                        Yoga becomes a portable movement and awareness practice.
                        Your body becomes the training environment.
                    </p>
                </section>

                {/* Call To Action Box */}
                <section
                    id="start-your-evolution"
                    aria-labelledby="start-your-evolution-heading"
                    className="mb-24 border border-cyan-900/40 bg-neutral-950 p-10 text-center"
                >
                    <h2
                        id="start-your-evolution-heading"
                        className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        MASTER YOUR INTERNAL OPERATING SYSTEM
                    </h2>

                    <p className="mb-4 text-2xl font-black uppercase tracking-wide md:text-3xl">
                        Your body is not just a machine. It is an information system.
                    </p>

                    <p className="mx-auto mb-8 max-w-xl font-mono text-sm text-neutral-400">
                        Learn to develop breath awareness, somatic intelligence,
                        mobility, conscious movement, and mental stillness.
                    </p>

                    <Link
                        href="/blog"
                        className="inline-block bg-cyan-500 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.3em] text-black transition-colors hover:bg-cyan-400"
                    >
                        START YOUR EVOLUTION &rarr;
                    </Link>
                </section>

                {/* Cross-Connect Alternative Modules */}
                <footer className="border-t border-neutral-900 pt-10">
                    <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-neutral-500">
                        CONTINUE YOUR HUMAN EVOLUTION
                    </h2>

                    <p className="mb-6 font-mono text-xs uppercase text-neutral-600">
                        Yoga is your somatic foundation. Continue developing the other pillars:
                    </p>

                    <div className="grid gap-6 font-mono text-xs uppercase sm:grid-cols-3">
                        <Link
                            href="/blog/category/discipline"
                            className="block border border-neutral-900 bg-neutral-950 p-6 text-neutral-300 transition-colors hover:border-cyan-500"
                        >
                            <span className="mb-1 block font-bold text-white">
                                Discipline
                            </span>

                            <span className="mb-3 block text-[10px] lowercase text-neutral-500">
                                Master attention, habits, and execution.
                            </span>

                            <span className="text-cyan-400">
                                EXPLORE DISCIPLINE &rarr;
                            </span>
                        </Link>

                        <Link
                            href="/blog/category/fitness"
                            className="block border border-neutral-900 bg-neutral-950 p-6 text-neutral-300 transition-colors hover:border-cyan-500"
                        >
                            <span className="mb-1 block font-bold text-white">
                                Fitness
                            </span>

                            <span className="mb-3 block text-[10px] lowercase text-neutral-500">
                                Build strength, resilience, and physical autonomy.
                            </span>

                            <span className="text-cyan-400">
                                EXPLORE FITNESS &rarr;
                            </span>
                        </Link>

                        <Link
                            href="/blog/category/mindset"
                            className="block border border-neutral-900 bg-neutral-950 p-6 text-neutral-300 transition-colors hover:border-cyan-500"
                        >
                            <span className="mb-1 block font-bold text-white">
                                Mindset
                            </span>

                            <span className="mb-3 block text-[10px] lowercase text-neutral-500">
                                Develop clarity, emotional control, and decision-making.
                            </span>

                            <span className="text-cyan-400">
                                EXPLORE MINDSET &rarr;
                            </span>
                        </Link>
                    </div>
                </footer>
            </div>
        </main>
    );
}
