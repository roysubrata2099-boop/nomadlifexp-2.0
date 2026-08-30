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

/**
 * SEO:
 * Primary topic:
 * - Yoga
 *
 * Secondary topics:
 * - yoga for beginners
 * - yoga for flexibility
 * - yoga for mobility
 * - yoga for focus
 * - yoga for mental clarity
 * - yoga for stress regulation
 * - breath awareness
 * - somatic awareness
 * - mind-body connection
 * - movement intelligence
 * - mental stillness
 * - nervous system regulation
 * - yoga for travelers
 *
 * Search intent:
 * - what is yoga
 * - how to start yoga
 * - benefits of yoga
 * - yoga for focus and mental clarity
 * - yoga for mobility and flexibility
 * - yoga for stress and relaxation
 * - yoga without equipment
 * - yoga for travelers and digital nomads
 */
export const metadata: Metadata = {
    title: "Yoga for Flexibility, Focus & Mind-Body Awareness | NomadLifeXP",
    description:
        "Explore yoga for beginners, flexibility, mobility, focus, mental clarity, breath awareness, stress regulation, and mind-body connection with the NomadLifeXP Yoga System.",
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: "Yoga for Flexibility, Focus & Mind-Body Awareness | NomadLifeXP",
        description:
            "Explore yoga for beginners, flexibility, mobility, focus, mental clarity, breath awareness, stress regulation, and mind-body connection with the NomadLifeXP Yoga System.",
        url: PAGE_URL,
        siteName: "NomadLifeXP",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Yoga for Flexibility, Focus & Mind-Body Awareness",
        description:
            "Build mobility, body awareness, breath control, focus, mental stillness, and a stronger mind-body connection with the NomadLifeXP Yoga System.",
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

function createYogaStructuredData(
    yogaArticles: SystemPost[]
) {
    const articleItems = yogaArticles.map(
        (post, index) => ({
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
        })
    );

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
            "@type": "Organization",
            "@id": `${SITE_URL}#organization`,
            name: "NomadLifeXP",
            url: SITE_URL,
            logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/logo.png`,
            },
        },
        {
            "@context": "https://schema.org",
            "@type": "Thing",
            "@id": `${PAGE_URL}#topic`,
            name: "Yoga",
            description:
                "Yoga practices focused on somatic awareness, breath control, conscious movement, mobility, flexibility, focus, mental stillness, and mind-body awareness.",
            url: PAGE_URL,
        },
        {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${PAGE_URL}#yoga-collection`,
            url: PAGE_URL,
            name:
                "Yoga for Flexibility, Focus & Mind-Body Awareness",
            description:
                "The NomadLifeXP Yoga System explores yoga for beginners, mobility, flexibility, breath awareness, focus, mental clarity, stress regulation, conscious movement, and mind-body connection.",
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
                itemListOrder:
                    "https://schema.org/ItemListOrderAscending",
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
            title:
                "What Happens When You Try Forearm Stand Yoga for Focus and Confidence",
            description:
                "Explore how balance, posture, inversion practice, body awareness, and controlled attention can make challenging yoga practices useful for developing physical and mental control.",
            slug:
                "forearm-stand-yoga-focus-confidence",
            step: "STEP 01",
            subtitle: "THE FOUNDATION",
        },
        {
            title:
                "It's Never Too Late to Transform Your Body and Mind with Forward Bending Yoga",
            description:
                "Explore forward bending yoga for mobility, flexibility, body awareness, controlled breathing, and a more deliberate relationship with physical tension and movement.",
            slug:
                "forward-bending-yoga-stress-relief",
            step: "STEP 02",
            subtitle: "THE REGULATION SYSTEM",
        },
        {
            title:
                "What Happens in Your Mind When Everything Becomes Still",
            description:
                "Explore stillness, meditation, breath awareness, reduced stimulation, and focused attention as practical ways to develop greater mental clarity and presence.",
            slug:
                "headstand-benefits-body-mind-safety",
            step: "STEP 03",
            subtitle: "THE STILLNESS SYSTEM",
        },
    ];

    const validFeaturedYogaArticles =
        featuredYogaArticles.filter((article) =>
            yogaArticles.some(
                (post) => post.slug === article.slug
            )
        );

    const structuredData =
        createYogaStructuredData(yogaArticles);

    return (
        <main className="min-h-screen bg-black text-white antialiased">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        structuredData
                    ),
                }}
            />

            <div className="relative mx-auto max-w-7xl px-6 py-24">
                {/* Visual Background Accent */}
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
                            &larr;
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
                            Yoga
                        </li>
                    </ol>
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
                        Build Flexibility, Mobility, Focus, Body Awareness & Mental Stillness
                    </p>

                    <p className="mt-4 max-w-3xl font-mono leading-relaxed text-neutral-400">
                        Yoga is more than flexibility training. It can
                        be practiced as a system for developing body
                        awareness, breathing awareness, mobility,
                        conscious movement, balance, attention, and
                        mental stillness.
                    </p>

                    <p className="mt-4 max-w-3xl font-mono leading-relaxed text-neutral-400">
                        The NomadLifeXP Yoga System connects physical
                        practice with mental awareness. Instead of
                        treating yoga as a collection of poses, this
                        framework focuses on what you can learn from
                        breathing, movement, stillness, balance, and
                        sustained attention.
                    </p>

                    <p className="mt-4 max-w-3xl font-mono leading-relaxed text-neutral-400">
                        Whether you are starting yoga as a beginner,
                        rebuilding mobility, improving flexibility,
                        looking for a practice that supports focus, or
                        trying to create a portable movement routine,
                        the objective is the same: become more aware of
                        how your body and attention work together.
                    </p>
                    <p className="mt-4 max-w-3xl font-mono leading-relaxed text-neutral-400">
                        When your body and attention need a short reset between periods of
                        practice or focused work, explore{" "}
                        <Link
                            href="/recalibration"
                            className="text-cyan-400 underline decoration-cyan-400/30 underline-offset-4 transition-colors hover:text-white"
                        >
                            the Recalibration System
                        </Link>{" "}
                        for practical breath, movement, visual-rest, and awareness protocols.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                        <span className="border border-neutral-800 px-4 py-2">
                            SOMATIC AWARENESS
                        </span>

                        <span className="border border-neutral-800 px-4 py-2">
                            BREATH AWARENESS
                        </span>

                        <span className="border border-neutral-800 px-4 py-2">
                            FLEXIBILITY
                        </span>

                        <span className="border border-neutral-800 px-4 py-2">
                            MOBILITY
                        </span>

                        <span className="border border-neutral-800 px-4 py-2">
                            FOCUS
                        </span>

                        <span className="border border-neutral-800 px-4 py-2">
                            MENTAL STILLNESS
                        </span>
                    </div>
                </header>

                {/* Yoga Evolution Path */}
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
                        A practical progression from body awareness
                        to controlled movement and mental stillness.
                    </p>

                    <div className="grid gap-6 md:grid-cols-4">
                        {[
                            {
                                id: "01",
                                title: "01 &mdash; Awareness",
                                subtext:
                                    "Develop Body Intelligence",
                                text:
                                    "Notice breathing patterns, muscular tension, posture, balance, physical sensations, emotions, and unconscious movement habits.",
                            },
                            {
                                id: "02",
                                title: "02 &mdash; Regulation",
                                subtext:
                                    "Create More Control",
                                text:
                                    "Use breathing, slower movement, pauses, and attention to become more deliberate in how you respond to physical and mental stress.",
                            },
                            {
                                id: "03",
                                title: "03 &mdash; Integration",
                                subtext:
                                    "Connect Mind and Movement",
                                text:
                                    "Coordinate attention, breathing, posture, balance, mobility, and movement so physical practice becomes more intentional.",
                            },
                            {
                                id: "04",
                                title: "04 &mdash; Mastery",
                                subtext:
                                    "Build Somatic Autonomy",
                                text:
                                    "Carry awareness and movement control into everyday life, unfamiliar environments, travel, work, and changing routines.",
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

                {/* Search Intent / What Yoga Can Develop */}
                <section
                    id="yoga-benefits"
                    aria-labelledby="yoga-benefits-heading"
                    className="mb-24 border border-neutral-900 bg-neutral-950/60 p-8 md:p-12"
                >
                    <h2
                        id="yoga-benefits-heading"
                        className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        WHAT CAN YOGA HELP YOU DEVELOP?
                    </h2>

                    <p className="mb-10 text-xl font-bold uppercase tracking-wide">
                        A Broader Approach to Yoga Practice
                    </p>

                    <div className="grid gap-8 md:grid-cols-2">
                        <div>
                            <h3 className="mb-3 font-bold uppercase text-white">
                                Flexibility & Mobility
                            </h3>

                            <p className="font-mono text-sm leading-relaxed text-neutral-400">
                                A consistent yoga practice can give you
                                opportunities to explore range of motion,
                                controlled positions, balance, posture, and
                                movement quality. The goal is not to force
                                flexibility, but to develop useful movement
                                capacity with awareness.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-3 font-bold uppercase text-white">
                                Focus & Mental Clarity
                            </h3>

                            <p className="font-mono text-sm leading-relaxed text-neutral-400">
                                Yoga asks you to repeatedly return attention
                                to breathing, sensation, alignment, balance,
                                and movement. That makes the practice useful
                                for exploring how attention behaves when
                                distractions appear.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-3 font-bold uppercase text-white">
                                Breath Awareness
                            </h3>

                            <p className="font-mono text-sm leading-relaxed text-neutral-400">
                                Breathing gives the practice an internal
                                reference point. Observing the breath can
                                help you notice changes in tension, effort,
                                pace, and attention while moving or resting.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-3 font-bold uppercase text-white">
                                Mind-Body Connection
                            </h3>

                            <p className="font-mono text-sm leading-relaxed text-neutral-400">
                                Yoga creates repeated opportunities to notice
                                how thoughts, emotions, breathing, posture,
                                sensation, and movement interact during
                                deliberate practice.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Recommended Learning Path */}
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

                        <p className="mb-8 max-w-3xl font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                            Follow the Yoga knowledge path from
                            movement foundations to stillness,
                            attention, and deeper body awareness.
                        </p>

                        <div className="grid gap-6 md:grid-cols-2">
                            {validFeaturedYogaArticles.map(
                                (item) => (
                                    <article
                                        key={item.step}
                                        className="flex flex-col justify-between border border-neutral-800 bg-neutral-950 p-8"
                                    >
                                        <div>
                                            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                                                {item.step} //{" "}
                                                {item.subtitle}
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
                                            READ THIS YOGA ARTICLE &rarr;
                                        </Link>
                                    </article>
                                )
                            )}
                        </div>
                    </section>
                )}

                {/* Yoga System Architecture */}
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
                        How Breath, Awareness & Movement Interact
                    </p>

                    <p className="mb-8 font-mono text-sm leading-relaxed text-neutral-400">
                        The NomadLifeXP Yoga System is designed as an
                        interconnected practice rather than a collection
                        of isolated techniques. Breath can provide an
                        anchor for attention. Awareness helps you observe
                        physical sensations and movement. Controlled
                        movement develops coordination and mobility.
                        Stillness creates space to observe the result.
                    </p>

                    <div className="grid gap-4 font-mono text-xs text-cyan-400 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="border border-neutral-800 bg-black p-4 text-center">
                            BREATH
                            <br />
                            <span className="text-neutral-600">
                                &uarr;
                            </span>
                            <br />
                            AWARENESS
                        </div>

                        <div className="border border-neutral-800 bg-black p-4 text-center">
                            AWARENESS
                            <br />
                            <span className="text-neutral-600">
                                &uarr;
                            </span>
                            <br />
                            MOVEMENT
                        </div>

                        <div className="border border-neutral-800 bg-black p-4 text-center">
                            MOVEMENT
                            <br />
                            <span className="text-neutral-600">
                                &uarr;
                            </span>
                            <br />
                            STILLNESS
                        </div>

                        <div className="border border-neutral-800 bg-black p-4 text-center">
                            STILLNESS
                            <br />
                            <span className="text-neutral-600">
                                &uarr;
                            </span>
                            <br />
                            AWARENESS
                        </div>
                    </div>
                </section>

                {/* Beginner Section */}
                <section
                    id="yoga-for-beginners"
                    aria-labelledby="yoga-for-beginners-heading"
                    className="mb-24 border border-neutral-900 bg-neutral-950 p-8 md:p-12"
                >
                    <h2
                        id="yoga-for-beginners-heading"
                        className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        YOGA FOR BEGINNERS
                    </h2>

                    <p className="mb-6 text-xl font-bold uppercase tracking-wide">
                        How to Start a Yoga Practice
                    </p>

                    <div className="max-w-4xl space-y-5 font-mono text-sm leading-relaxed text-neutral-400">
                        <p>
                            If you are new to yoga, start with simple
                            movements and enough time to understand what
                            your body is experiencing. You do not need
                            advanced flexibility, difficult poses, or a
                            perfect routine to begin developing body
                            awareness.
                        </p>

                        <p>
                            A beginner yoga practice can focus on breathing,
                            basic mobility, comfortable ranges of motion,
                            balance, posture, controlled transitions, and
                            short periods of stillness.
                        </p>

                        <p>
                            Consistency is more useful than constantly
                            increasing difficulty. A short practice that
                            you can repeat regularly gives you more
                            opportunities to observe how your attention,
                            movement, and body awareness change over time.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                title: "01. BREATHE",
                                text:
                                    "Begin by noticing your natural breathing pattern without forcing it.",
                            },
                            {
                                title: "02. OBSERVE",
                                text:
                                    "Notice posture, tension, balance, sensation, and where attention moves.",
                            },
                            {
                                title: "03. MOVE",
                                text:
                                    "Use controlled movements that match your current ability and comfort.",
                            },
                            {
                                title: "04. REST",
                                text:
                                    "Finish with stillness so you can observe the effects of practice.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="border border-neutral-800 bg-black p-5"
                            >
                                <h3 className="mb-2 font-bold text-white">
                                    {item.title}
                                </h3>

                                <p className="font-mono text-xs leading-relaxed text-neutral-500">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Yoga for Focus */}
                <section
                    id="yoga-for-focus"
                    aria-labelledby="yoga-for-focus-heading"
                    className="mb-24 border border-cyan-900/30 bg-neutral-950/70 p-8 md:p-12"
                >
                    <h2
                        id="yoga-for-focus-heading"
                        className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        YOGA FOR FOCUS & MENTAL CLARITY
                    </h2>

                    <p className="mb-6 text-xl font-bold uppercase tracking-wide">
                        Train Attention Through Deliberate Practice
                    </p>

                    <div className="max-w-4xl space-y-5 font-mono text-sm leading-relaxed text-neutral-400">
                        <p>
                            Focus is not only about sitting still and
                            forcing concentration. During yoga, attention
                            can repeatedly return to breathing, alignment,
                            balance, physical sensation, and movement.
                        </p>

                        <p>
                            This creates a practical environment for
                            noticing distraction. Instead of treating every
                            wandering thought as failure, you can recognize
                            that attention moved and deliberately return it
                            to the practice.
                        </p>

                        <p>
                            Over time, this approach can make the practice
                            of attention itself more visible. Yoga therefore
                            becomes more than physical movement: it becomes
                            an opportunity to study how attention responds
                            to effort, discomfort, boredom, balance, and
                            stillness.
                        </p>
                    </div>
                </section>

                {/* Yoga for Mobility and Flexibility */}
                <section
                    id="yoga-flexibility-mobility"
                    aria-labelledby="yoga-flexibility-mobility-heading"
                    className="mb-24 border border-neutral-900 bg-neutral-950 p-8 md:p-12"
                >
                    <h2
                        id="yoga-flexibility-mobility-heading"
                        className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        YOGA FOR FLEXIBILITY & MOBILITY
                    </h2>

                    <p className="mb-6 text-xl font-bold uppercase tracking-wide">
                        Build Useful Movement Capacity
                    </p>

                    <div className="grid gap-8 md:grid-cols-2">
                        <div>
                            <h3 className="mb-3 font-bold uppercase text-white">
                                Flexibility
                            </h3>

                            <p className="font-mono text-sm leading-relaxed text-neutral-400">
                                Flexibility describes how much movement is
                                available at a joint or across a movement.
                                Yoga can provide a structured way to explore
                                that range gradually while paying attention
                                to sensation and control.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-3 font-bold uppercase text-white">
                                Mobility
                            </h3>

                            <p className="font-mono text-sm leading-relaxed text-neutral-400">
                                Mobility is not simply being able to move
                                farther. It also involves control, coordination,
                                stability, and the ability to use available
                                movement effectively.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-3 font-bold uppercase text-white">
                                Balance
                            </h3>

                            <p className="font-mono text-sm leading-relaxed text-neutral-400">
                                Balance practices create opportunities to
                                coordinate vision, posture, breathing,
                                muscular effort, and attention.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-3 font-bold uppercase text-white">
                                Movement Quality
                            </h3>

                            <p className="font-mono text-sm leading-relaxed text-neutral-400">
                                The objective is not to make every movement
                                look impressive. It is to understand how
                                deliberately and efficiently you can move
                                within your current ability.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stress / Regulation Section */}
                <section
                    id="yoga-stress-regulation"
                    aria-labelledby="yoga-stress-regulation-heading"
                    className="mb-24 border border-neutral-900 bg-neutral-950/60 p-8 md:p-12"
                >
                    <h2
                        id="yoga-stress-regulation-heading"
                        className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        YOGA, BREATH & STRESS REGULATION
                    </h2>

                    <p className="mb-6 text-xl font-bold uppercase tracking-wide">
                        Create Space Between Stimulus and Response
                    </p>

                    <div className="max-w-4xl space-y-5 font-mono text-sm leading-relaxed text-neutral-400">
                        <p>
                            Stress can influence breathing, posture, muscle
                            tension, attention, and movement. A slower and
                            more deliberate yoga practice can create an
                            opportunity to observe these changes rather than
                            immediately reacting to them.
                        </p>

                        <p>
                            Breath awareness is particularly useful because
                            it provides an internal reference point throughout
                            the practice. You can notice whether breathing
                            becomes rushed, shallow, irregular, or easier as
                            your attention changes.
                        </p>

                        <p>
                            Yoga should not be treated as a replacement for
                            professional medical or mental-health care.
                            Instead, this system approaches yoga as a
                            practical movement and awareness practice that
                            can complement a broader approach to wellbeing.
                        </p>
                    </div>
                </section>

                {/* How To Practice */}
                <section
                    id="how-to-practice-yoga"
                    aria-labelledby="how-to-practice-yoga-heading"
                    className="mb-24 border border-neutral-900 bg-neutral-950 p-8 md:p-12"
                >
                    <h2
                        id="how-to-practice-yoga-heading"
                        className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        HOW TO PRACTICE YOGA WITH INTENTION
                    </h2>

                    <div className="max-w-4xl space-y-5 font-mono text-sm leading-relaxed text-neutral-400">
                        <p>
                            Begin with an intention that is specific enough
                            to guide your practice. You might be exploring
                            mobility, flexibility, body awareness, focus,
                            breathing, balance, or simply creating a period
                            of reduced stimulation.
                        </p>

                        <p>
                            Choose movements appropriate for your current
                            ability. You do not need to chase advanced poses
                            to receive value from a yoga practice. Controlled,
                            comfortable movement with deliberate attention
                            can be highly useful.
                        </p>

                        <p>
                            During the practice, periodically return your
                            attention to breathing and physical sensation.
                            Notice when attention wanders, then return to
                            the current movement without unnecessary judgment.
                        </p>

                        <p>
                            Finish with a short period of stillness. Observe
                            breathing, physical sensation, energy, and mental
                            activity. The transition from movement to stillness
                            is part of the practice rather than an afterthought.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                title: "01. INTENTION",
                                text:
                                    "Choose what you want to explore during the practice.",
                            },
                            {
                                title: "02. AWARENESS",
                                text:
                                    "Observe breathing, sensation, posture, tension, and attention.",
                            },
                            {
                                title: "03. MOVEMENT",
                                text:
                                    "Move deliberately within an appropriate and controlled range.",
                            },
                            {
                                title: "04. STILLNESS",
                                text:
                                    "Pause and notice what changed before returning to daily activity.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="border border-neutral-800 bg-black p-5"
                            >
                                <h3 className="mb-2 font-bold uppercase text-white">
                                    {item.title}
                                </h3>

                                <p className="font-mono text-xs leading-relaxed text-neutral-500">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Nomad Yoga */}
                <section
                    id="yoga-for-travelers"
                    aria-labelledby="yoga-for-travelers-heading"
                    className="mb-24 border border-cyan-900/40 bg-neutral-950 p-8 md:p-12"
                >
                    <h2
                        id="yoga-for-travelers-heading"
                        className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        YOGA FOR TRAVELERS & DIGITAL NOMADS
                    </h2>

                    <p className="mb-6 text-xl font-bold uppercase tracking-wide">
                        Build a Portable Movement Practice
                    </p>

                    <p className="mb-6 font-mono text-sm leading-relaxed text-neutral-400">
                        Travel can change your environment, schedule,
                        sleep routine, workspace, recovery habits, and
                        access to equipment. A bodyweight-based Yoga
                        practice can provide a consistent movement and
                        awareness ritual even when everything around you
                        changes.
                    </p>

                    <ul className="mb-8 list-inside list-disc space-y-3 font-mono text-sm text-neutral-400">
                        <li>
                            Practice without requiring a traditional gym.
                        </li>

                        <li>
                            Use short sessions when your schedule changes.
                        </li>

                        <li>
                            Explore mobility after long periods of sitting or travel.
                        </li>

                        <li>
                            Use breathing and stillness to create a transition
                            between work and recovery.
                        </li>

                        <li>
                            Carry the same awareness principles into unfamiliar
                            environments.
                        </li>
                    </ul>

                    <p className="font-mono text-sm font-semibold text-cyan-400">
                        Your environment can change without requiring your
                        entire practice to disappear.
                    </p>
                </section>

                {/* Knowledge Database */}
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
                                Explore Yoga, Somatic Awareness,
                                Mobility & Mental Stillness
                            </p>
                        </div>

                        <span className="font-mono text-xs text-neutral-400">
                            ACTIVE KNOWLEDGE NODES:{" "}
                            {yogaArticles.length}
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
                                        READ YOGA ARTICLE &rarr;
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

                {/* Framework */}
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
                                Breath Awareness
                            </h3>

                            <p className="text-sm leading-relaxed text-neutral-400">
                                Use breathing as an internal reference point
                                for observing effort, attention, tension,
                                pace, and transitions between movement and
                                stillness.
                            </p>
                        </div>

                        <div className="border-l border-cyan-500/40 pl-6">
                            <h3 className="mb-2 font-bold uppercase text-white">
                                Somatic Awareness
                            </h3>

                            <p className="text-sm leading-relaxed text-neutral-400">
                                Learn to notice physical sensations, posture,
                                muscular tension, balance, thoughts, emotions,
                                and reactions before automatically responding.
                            </p>
                        </div>

                        <div className="border-l border-cyan-500/40 pl-6">
                            <h3 className="mb-2 font-bold uppercase text-white">
                                Movement Intelligence
                            </h3>

                            <p className="text-sm leading-relaxed text-neutral-400">
                                Develop coordination, balance, mobility,
                                controlled range of motion, and deliberate
                                movement through progressive practice.
                            </p>
                        </div>

                        <div className="border-l border-cyan-500/40 pl-6">
                            <h3 className="mb-2 font-bold uppercase text-white">
                                Mental Stillness
                            </h3>

                            <p className="text-sm leading-relaxed text-neutral-400">
                                Practice remaining present with breathing,
                                sensation, and the current moment without
                                immediately following every distraction.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why Yoga Matters */}
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
                            WHY YOGA MATTERS // WITHOUT AWARENESS:
                        </h2>

                        <ul className="list-inside list-disc space-y-3 font-mono text-sm text-neutral-400">
                            <li>
                                Physical tension can go unnoticed.
                            </li>

                            <li>
                                Breathing patterns may become automatic.
                            </li>

                            <li>
                                Movement can become disconnected from attention.
                            </li>

                            <li>
                                Distraction can interrupt deliberate practice.
                            </li>
                        </ul>
                    </div>

                    <div className="border border-cyan-950/50 bg-neutral-950 p-8">
                        <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
                            WHY YOGA MATTERS // WITH AWARENESS:
                        </h2>

                        <ul className="list-inside list-disc space-y-3 font-mono text-sm text-neutral-400">
                            <li>
                                Breathing becomes observable.
                            </li>

                            <li>
                                Movement becomes more deliberate.
                            </li>

                            <li>
                                Attention can be repeatedly redirected.
                            </li>

                            <li>
                                Mind-body awareness becomes part of practice.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* FAQ / Search Intent */}
                <section
                    id="yoga-faq"
                    aria-labelledby="yoga-faq-heading"
                    className="mb-24 border border-neutral-900 bg-neutral-950 p-8 md:p-12"
                >
                    <h2
                        id="yoga-faq-heading"
                        className="mb-10 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        YOGA QUESTIONS & PRACTICAL ANSWERS
                    </h2>

                    <div className="space-y-8">
                        <div>
                            <h3 className="mb-3 text-lg font-bold uppercase text-white">
                                What is yoga useful for?
                            </h3>

                            <p className="font-mono text-sm leading-relaxed text-neutral-400">
                                Yoga can be used as a movement and awareness
                                practice involving breathing, mobility,
                                balance, flexibility, body awareness, focused
                                attention, and periods of stillness. The exact
                                experience depends on the style, intensity,
                                consistency, and individual practice.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-3 text-lg font-bold uppercase text-white">
                                Can beginners start yoga?
                            </h3>

                            <p className="font-mono text-sm leading-relaxed text-neutral-400">
                                Yes. Beginners can start with simple,
                                controlled movements and gradually build
                                familiarity with breathing, posture, balance,
                                mobility, and stillness. Advanced poses are
                                not required to begin learning the fundamentals.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-3 text-lg font-bold uppercase text-white">
                                Can yoga help improve flexibility and mobility?
                            </h3>

                            <p className="font-mono text-sm leading-relaxed text-neutral-400">
                                Yoga provides repeated opportunities to explore
                                controlled ranges of movement. Flexibility and
                                mobility are different qualities, so useful
                                practice should include both available range
                                and the ability to control movement.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-3 text-lg font-bold uppercase text-white">
                                Can yoga be used to practice focus?
                            </h3>

                            <p className="font-mono text-sm leading-relaxed text-neutral-400">
                                Yoga can create a structured environment for
                                practicing attention. Returning attention to
                                breathing, sensation, alignment, balance, and
                                movement gives you repeated opportunities to
                                notice distraction and redirect focus.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-3 text-lg font-bold uppercase text-white">
                                Do you need equipment to practice yoga?
                            </h3>

                            <p className="font-mono text-sm leading-relaxed text-neutral-400">
                                Many basic yoga practices can be performed with
                                little or no specialized equipment. A mat,
                                comfortable clothing, and enough safe space can
                                be useful, but the specific requirements depend
                                on the practice.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-3 text-lg font-bold uppercase text-white">
                                Is yoga useful for travelers?
                            </h3>

                            <p className="font-mono text-sm leading-relaxed text-neutral-400">
                                Yoga can be adapted to changing environments
                                and limited equipment, making it practical for
                                travelers and digital nomads who want a
                                consistent movement and awareness practice
                                while their schedule and surroundings change.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Nomad Advantage */}
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
                        Why Nomads Need a Portable Yoga Practice
                    </p>

                    <p className="mb-6 font-mono text-sm text-neutral-400">
                        Nomadic life can involve:
                    </p>

                    <ul className="mb-6 list-inside list-disc space-y-2 font-mono text-sm text-neutral-400">
                        <li>
                            Changing environments
                        </li>

                        <li>
                            Irregular schedules
                        </li>

                        <li>
                            Long periods of sitting
                        </li>

                        <li>
                            Travel-related fatigue
                        </li>

                        <li>
                            Limited equipment
                        </li>

                        <li>
                            Constant adaptation
                        </li>
                    </ul>

                    <p className="font-mono text-sm font-semibold text-cyan-400">
                        A portable yoga practice gives you a repeatable
                        movement and awareness framework even when the
                        environment around you changes.
                    </p>
                </section>

                {/* CTA */}
                <section
                    id="start-your-evolution"
                    aria-labelledby="start-your-evolution-heading"
                    className="mb-24 border border-cyan-900/40 bg-neutral-950 p-10 text-center"
                >
                    <h2
                        id="start-your-evolution-heading"
                        className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        BUILD YOUR SOMATIC FOUNDATION
                    </h2>

                    <p className="mb-4 text-2xl font-black uppercase tracking-wide md:text-3xl">
                        Train Awareness Through Movement
                    </p>

                    <p className="mx-auto mb-8 max-w-xl font-mono text-sm leading-relaxed text-neutral-400">
                        Explore Yoga articles covering mobility,
                        flexibility, breath awareness, balance,
                        stillness, focus, and the mind-body connection.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="#yoga-database"
                            className="inline-block bg-cyan-500 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.3em] text-black transition-colors hover:bg-cyan-400"
                        >
                            EXPLORE YOGA ARTICLES &rarr;
                        </Link>

                        <Link
                            href="/blog"
                            className="inline-block border border-neutral-700 bg-black px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.3em] text-neutral-300 transition-colors hover:border-cyan-500 hover:text-cyan-400"
                        >
                            EXPLORE ALL SYSTEMS &rarr;
                        </Link>
                    </div>
                </section>

                {/* Human Evolution Architecture */}
                <footer className="border-t border-neutral-900 pt-16">
                    <div className="mx-auto mb-16 max-w-3xl text-center">
                        <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                            THE HUMAN OPERATING SYSTEM
                        </h2>

                        <p className="mb-8 text-xl font-bold uppercase tracking-wide">
                            Unified Architectural Matrix
                        </p>

                        <div className="mb-10 flex flex-col items-center space-y-4 font-mono text-xs text-cyan-400">
                            <div className="w-64 border border-cyan-500/50 bg-neutral-950 px-6 py-4 text-center shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                                <span className="mb-1 block text-sm font-bold text-white">
                                    YOGA
                                </span>

                                <span className="text-[10px] lowercase text-neutral-400">
                                    (Somatic Regulation)
                                </span>
                            </div>

                            <div className="text-neutral-600">
                                &darr;
                            </div>

                            <div className="grid w-full max-w-xl grid-cols-3 gap-4">
                                <div className="border border-neutral-800 bg-neutral-950 p-3 text-center">
                                    <span className="mb-1 block font-bold text-white">
                                        DISCIPLINE
                                    </span>

                                    <span className="text-[10px] lowercase text-neutral-400">
                                        (Execution)
                                    </span>
                                </div>

                                <div className="border border-neutral-800 bg-neutral-950 p-3 text-center">
                                    <span className="mb-1 block font-bold text-white">
                                        FITNESS
                                    </span>

                                    <span className="text-[10px] lowercase text-neutral-400">
                                        (Capability)
                                    </span>
                                </div>

                                <div className="border border-neutral-800 bg-neutral-950 p-3 text-center">
                                    <span className="mb-1 block font-bold text-white">
                                        MINDSET
                                    </span>

                                    <span className="text-[10px] lowercase text-neutral-400">
                                        (Interpretation)
                                    </span>
                                </div>
                            </div>

                            <div className="text-neutral-600">
                                &darr;
                            </div>

                            <div className="w-64 border border-neutral-800 bg-black px-6 py-3 text-center text-neutral-300">
                                HUMAN PERFORMANCE
                            </div>
                        </div>
                    </div>

                    {/* Cross-Connect */}
                    <div className="border-t border-neutral-900 pt-10">
                        <h3 className="mb-2 text-center font-mono text-xs uppercase tracking-[0.4em] text-neutral-500">
                            CONTINUE YOUR HUMAN EVOLUTION
                        </h3>

                        <p className="mb-8 text-center font-mono text-xs uppercase text-neutral-600">
                            Yoga develops awareness. Build the other
                            pillars to create a more complete system.
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
                                    Develop habits, execution,
                                    consistency, and behavioral control.
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
                                    Build strength, physical capacity,
                                    mobility, and resilience.
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
                                    Develop clarity, attention,
                                    self-awareness, and decision-making.
                                </span>

                                <span className="text-cyan-400">
                                    EXPLORE MINDSET &rarr;
                                </span>
                            </Link>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    );
}


