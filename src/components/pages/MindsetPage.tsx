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

/**
 * SEO TARGETING
 *
 * Primary topic:
 * - mindset
 *
 * Secondary topics:
 * - mental resilience
 * - mental clarity
 * - focus
 * - attention
 * - cognitive resilience
 * - cognitive performance
 * - personal growth
 * - self improvement
 *
 * Search intent:
 * - how to improve mental clarity
 * - how to improve focus
 * - how to stop overthinking
 * - how to rebuild attention span
 * - how to improve concentration
 * - how to overcome digital distraction
 * - how to build mental resilience
 * - why can't I focus
 */

/**
 * Page metadata
 *
 * Note:
 * We intentionally do not use <meta name="keywords">.
 * Google does not use the meta-keywords tag for ranking.
 * Target search phrases are incorporated naturally throughout
 * the title, description, headings, content, and internal links.
 */
export const metadata: Metadata = {
    title: "Mindset & Mental Resilience | Focus, Clarity & Growth | NomadLifeXP",

    description:
        "Build mental clarity, focus, attention, and mental resilience. Learn how to stop overthinking, rebuild your attention span, improve concentration, and develop a stronger mindset with NomadLifeXP.",

    alternates: {
        canonical: "https://www.nomadlifexp.com/mindset",
    },

    robots: {
        index: true,
        follow: true,
    },

    openGraph: {
        type: "website",
        url: "https://www.nomadlifexp.com/mindset",
        title:
            "Mindset & Mental Resilience | Focus, Clarity & Growth | NomadLifeXP",
        description:
            "Build mental clarity, focus, attention, and mental resilience. Learn how to stop overthinking, rebuild your attention span, improve concentration, and develop a stronger mindset with NomadLifeXP.",
        siteName: "NomadLifeXP",
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Mindset & Mental Resilience | Focus, Clarity & Growth | NomadLifeXP",
        description:
            "Build mental clarity, focus, attention, and mental resilience with practical systems for concentration, cognitive resilience, and personal growth.",
    },
};

function safeSlug(value: unknown): string {
    if (typeof value !== "string") {
        return "";
    }

    return value.trim().toLowerCase();
}

function safeText(
    value: unknown,
    fallback: string
): string {
    if (typeof value !== "string") {
        return fallback;
    }

    const trimmed = value.trim();

    return trimmed.length > 0 ? trimmed : fallback;
}

function getMindsetPosts(): SystemPost[] {
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

                    return (
                        safeSlug(category) ===
                        "mindset"
                    );
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
            .filter(
                (post) => post.slug.length > 0
            );
    } catch {
        return [];
    }
}

export default function MindsetPage() {
    let mindsetArticles: SystemPost[] = [];

    try {
        mindsetArticles = getMindsetPosts();
    } catch {
        mindsetArticles = [];
    }

    const featuredMindsetArticles = [
        {
            title:
                "Mental Clarity: How to Stop Overthinking and Improve Focus",

            description:
                "Remove unnecessary mental noise, reduce overthinking, and create a clearer cognitive environment for better focus, decision-making, and personal growth.",

            slug:
                "mental-clarity-how-to-stop-overthinking-and-improve-focus",

            step: "STEP 01",
            subtitle: "INFORMATION CONTROL",
        },

        {
            title:
                "Can You Rebuild Your Attention Span After Years of Digital Distraction?",

            description:
                "Learn how to rebuild your attention span, develop deeper focus, and protect your ability to concentrate in an environment designed to constantly interrupt you.",

            slug:
                "can-you-rebuild-your-attention-span-after-years-of-digital-distraction",

            step: "STEP 02",
            subtitle: "ATTENTION REBUILDING",
        },

        {
            title:
                "The Reason You Can't Focus Even When You Try Hard",

            description:
                "Understand mental overload, attention fragmentation, distraction, and hidden cognitive barriers that can make sustained focus difficult.",

            slug:
                "the-reason-you-cant-focus-even-when-you-try-hard",

            step: "STEP 03",
            subtitle: "COGNITIVE DIAGNOSIS",
        },

        {
            title:
                "You Are Not Stuck Because You Lack Answers",

            description:
                "Discover how repeated thoughts, beliefs, and behavioral patterns shape identity and influence the direction of your personal growth.",

            slug:
                "you-are-not-stuck-because-you-lack-answers",

            step: "STEP 04",
            subtitle: "IDENTITY ARCHITECTURE",
        },
    ];

    const validFeaturedMindsetArticles =
        featuredMindsetArticles.filter(
            (article) =>
                mindsetArticles.some(
                    (post) =>
                        post.slug ===
                        article.slug
                )
        );

    const jsonLdData = {
        "@context": "https://schema.org",

        "@graph": [
            {
                "@type": "CollectionPage",

                "@id":
                    "https://www.nomadlifexp.com/mindset#webpage",

                url:
                    "https://www.nomadlifexp.com/mindset",

                name:
                    "Mindset & Mental Resilience | NomadLifeXP",

                headline:
                    "Mindset & Mental Resilience",

                description:
                    "Build mental clarity, focus, attention, and mental resilience through practical systems for cognitive performance, personal growth, and intentional living.",

                isPartOf: {
                    "@type": "WebSite",

                    "@id":
                        "https://www.nomadlifexp.com/#website",

                    name: "NomadLifeXP",

                    url:
                        "https://www.nomadlifexp.com/",
                },

                about: [
                    {
                        "@type": "Thing",
                        name: "Mindset",
                    },

                    {
                        "@type": "Thing",
                        name: "Mental Resilience",
                    },

                    {
                        "@type": "Thing",
                        name: "Mental Clarity",
                    },

                    {
                        "@type": "Thing",
                        name: "Focus",
                    },

                    {
                        "@type": "Thing",
                        name: "Attention",
                    },

                    {
                        "@type": "Thing",
                        name: "Cognitive Resilience",
                    },

                    {
                        "@type": "Thing",
                        name: "Personal Growth",
                    },
                ],
            },

            {
                "@type": "BreadcrumbList",

                "@id":
                    "https://www.nomadlifexp.com/mindset#breadcrumb",

                itemListElement: [
                    {
                        "@type": "ListItem",

                        position: 1,

                        name: "Home",

                        item:
                            "https://www.nomadlifexp.com/",
                    },

                    {
                        "@type": "ListItem",

                        position: 2,

                        name: "Mindset",

                        item:
                            "https://www.nomadlifexp.com/mindset",
                    },
                ],
            },

            {
                "@type": "Organization",

                "@id":
                    "https://www.nomadlifexp.com/#organization",

                name: "NomadLifeXP",

                url:
                    "https://www.nomadlifexp.com/",

                logo: {
                    "@type": "ImageObject",

                    url:
                        "https://www.nomadlifexp.com/logo.png",
                },
            },
        ],
    };

    return (
        <main className="min-h-screen bg-black text-white antialiased">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html:
                        JSON.stringify(
                            jsonLdData
                        ),
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6 py-24">

                {/* Visual Background Accent */}

                <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

                {/* Navigation */}

                <nav
                    aria-label="Breadcrumb navigation"
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

                    <span className="text-neutral-400">
                        mindset
                    </span>
                </nav>

                {/* Page Header */}

                <header className="relative z-10 mb-24">
                    <p className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        NOMADLIFEXP // COGNITIVE OPERATING LAYER
                    </p>

                    <h1 className="text-5xl md:text-7xl font-black uppercase leading-none">
                        Mindset & Mental Resilience
                    </h1>

                    <p className="mt-6 text-xl font-medium text-neutral-200">
                        Build Mental Clarity, Focus & Cognitive Resilience
                    </p>

                    <p className="mt-4 max-w-3xl text-neutral-400 font-mono leading-relaxed">
                        Your mindset influences how you interpret
                        information, direct attention, respond to
                        challenges, and make decisions. It is not a
                        fixed identity. It is an adaptive system shaped
                        by information, environment, habits, and repeated
                        choices.
                    </p>

                    <p className="mt-4 max-w-3xl text-neutral-400 font-mono leading-relaxed">
                        The NomadLifeXP Mindset System explores mental
                        clarity, focus, attention control, cognitive
                        resilience, emotional awareness, identity,
                        overthinking, digital distraction, and personal
                        growth so you can build a stronger internal
                        foundation for everyday life.
                    </p>
                </header>

                {/* Mindset Evolution Path */}

                <section
                    className="mb-24"
                    aria-labelledby="mindset-evolution-path"
                >
                    <h2
                        id="mindset-evolution-path"
                        className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        THE MINDSET EVOLUTION PATH
                    </h2>

                    <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                        A framework for building mental clarity,
                        cognitive resilience, focus, and intentional
                        identity.
                    </p>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            {
                                id: "01",
                                title: "01 — Awareness",
                                subtext:
                                    "Recognize Unconscious Patterns",
                                text:
                                    "Recognize recurring thought patterns, automatic emotional reactions, limiting beliefs, distractions, and behavioral loops.",
                            },

                            {
                                id: "02",
                                title: "02 — Control",
                                subtext:
                                    "Manage Attention and Reactions",
                                text:
                                    "Develop greater control over attention, emotions, and responses so you can act intentionally instead of reacting automatically.",
                            },

                            {
                                id: "03",
                                title: "03 — Reprogramming",
                                subtext:
                                    "Rebuild Mental Frameworks",
                                text:
                                    "Replace limiting frameworks with useful mental models, constructive beliefs, and cognitive strategies that support personal growth.",
                            },

                            {
                                id: "04",
                                title: "04 — Execution",
                                subtext:
                                    "Convert Clarity Into Action",
                                text:
                                    "Turn mental clarity into consistent action by aligning daily decisions with your values, goals, and long-term direction.",
                            },
                        ].map(
                            (module) => (
                                <div
                                    key={
                                        module.id
                                    }
                                    className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between"
                                >
                                    <div>
                                        <h3 className="mb-3 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                                            {
                                                module.title
                                            }
                                        </h3>

                                        <p className="mb-4 text-sm font-semibold text-white">
                                            {
                                                module.subtext
                                            }
                                        </p>
                                    </div>

                                    <p className="text-xs text-neutral-400 font-mono leading-relaxed">
                                        {
                                            module.text
                                        }
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                </section>

                {/* Recommended Learning Path */}

                {validFeaturedMindsetArticles.length >
                    0 && (
                        <section
                            className="mb-24"
                            aria-labelledby="mindset-transformation"
                        >
                            <h2
                                id="mindset-transformation"
                                className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                            >
                                START YOUR MINDSET TRANSFORMATION
                            </h2>

                            <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                                Learn how to improve mental clarity,
                                rebuild focus, stop overthinking,
                                and develop stronger cognitive resilience.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                {validFeaturedMindsetArticles.map(
                                    (item) => (
                                        <article
                                            key={
                                                item.step
                                            }
                                            className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between"
                                        >
                                            <div>
                                                <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
                                                    {
                                                        item.step
                                                    }{" "}
                                                //{" "}
                                                    {
                                                        item.subtitle
                                                    }
                                                </span>

                                                <h3 className="mt-3 text-xl font-bold uppercase tracking-wide">
                                                    {
                                                        item.title
                                                    }
                                                </h3>

                                                <p className="mt-4 text-sm text-neutral-400 font-mono leading-relaxed">
                                                    {
                                                        item.description
                                                    }
                                                </p>
                                            </div>

                                            <Link
                                                href={`/blog/posts/${item.slug}`}
                                                className="inline-block mt-8 text-cyan-400 text-xs font-mono uppercase tracking-wider hover:text-white transition-colors"
                                            >
                                                OPEN ARTICLE &rarr;
                                            </Link>
                                        </article>
                                    )
                                )}
                            </div>
                        </section>
                    )}

                {/* Mental Clarity & Focus Guide */}

                <section
                    className="mb-24 border border-neutral-900 bg-neutral-950/60 p-8 md:p-12"
                    aria-labelledby="mental-clarity-guide"
                >
                    <h2
                        id="mental-clarity-guide"
                        className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        MENTAL CLARITY & FOCUS GUIDE
                    </h2>

                    <p className="mb-6 text-xl font-bold uppercase tracking-wide">
                        How to Build a Clearer Mind
                    </p>

                    <p className="max-w-3xl text-sm text-neutral-400 font-mono leading-relaxed mb-10">
                        Mental clarity is not simply having fewer
                        thoughts. It is the ability to identify what
                        matters, filter unnecessary information, direct
                        attention toward the right task, and make
                        decisions without being constantly pulled by
                        distraction or mental noise.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                number: "01",
                                title:
                                    "Reduce Cognitive Noise",
                                text:
                                    "Reduce unnecessary inputs, notifications, fragmented tasks, and information overload. A clearer environment makes it easier to identify what deserves attention.",
                            },

                            {
                                number: "02",
                                title:
                                    "Protect Attention",
                                text:
                                    "Focus improves when attention is deliberately directed instead of repeatedly interrupted. Create conditions that make sustained concentration easier.",
                            },

                            {
                                number: "03",
                                title:
                                    "Interrupt Overthinking",
                                text:
                                    "Notice when analysis stops producing useful information and becomes repetitive mental processing. Convert useful thinking into a decision, experiment, or next action.",
                            },

                            {
                                number: "04",
                                title:
                                    "Convert Clarity Into Action",
                                text:
                                    "Mental clarity becomes valuable when it changes behavior. Translate priorities into specific actions and repeat them consistently enough to create momentum.",
                            },
                        ].map(
                            (item) => (
                                <div
                                    key={
                                        item.number
                                    }
                                    className="border-l border-cyan-500/40 pl-6"
                                >
                                    <h3 className="text-white font-bold uppercase mb-3">
                                        {
                                            item.number
                                        }{" "}
                                        //{" "}
                                        {
                                            item.title
                                        }
                                    </h3>

                                    <p className="text-sm text-neutral-400 font-mono leading-relaxed">
                                        {
                                            item.text
                                        }
                                    </p>
                                </div>
                            )
                        )}
                    </div>

                    <p className="mt-10 pt-8 border-t border-neutral-900 text-sm text-neutral-400 font-mono leading-relaxed">
                        If your main challenge is persistent mental noise,
                        start with our{" "}
                        <Link
                            href="/blog/posts/mental-clarity-how-to-stop-overthinking-and-improve-focus"
                            className="text-cyan-400 hover:text-white transition-colors"
                        >
                            guide to mental clarity,
                            overthinking, and focus
                        </Link>
                        .
                    </p>
                </section>

                {/* Mental Resilience */}

                <section
                    className="mb-24"
                    aria-labelledby="mental-resilience"
                >
                    <div className="border border-cyan-900/40 bg-neutral-950 p-8 md:p-12">
                        <h2
                            id="mental-resilience"
                            className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                        >
                            BUILD MENTAL RESILIENCE
                        </h2>

                        <p className="mb-6 text-xl font-bold uppercase tracking-wide">
                            Stay Clear When Conditions Change
                        </p>

                        <p className="max-w-3xl text-sm text-neutral-400 font-mono leading-relaxed mb-10">
                            Mental resilience is the ability to maintain
                            perspective, adapt to changing conditions,
                            recover from setbacks, and continue making
                            intentional decisions when circumstances become
                            uncertain.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    number: "01",
                                    title:
                                        "Adapt to Change",
                                    text:
                                        "Adjust your plans without losing sight of the larger direction.",
                                },

                                {
                                    number: "02",
                                    title:
                                        "Regulate Reactions",
                                    text:
                                        "Create enough space between an event and your response to make a more deliberate decision.",
                                },

                                {
                                    number: "03",
                                    title:
                                        "Recover & Continue",
                                    text:
                                        "Treat setbacks as information and return to useful action instead of allowing one failure to define the entire trajectory.",
                                },
                            ].map(
                                (item) => (
                                    <div
                                        key={
                                            item.number
                                        }
                                        className="border border-neutral-800 bg-black p-6"
                                    >
                                        <span className="font-mono text-xs text-cyan-400">
                                            {
                                                item.number
                                            }{" "}
                                            //{" "}
                                            {item.title.toUpperCase()}
                                        </span>

                                        <h3 className="mt-3 text-white font-bold uppercase">
                                            {
                                                item.title
                                            }
                                        </h3>

                                        <p className="mt-3 text-sm text-neutral-400 font-mono leading-relaxed">
                                            {
                                                item.text
                                            }
                                        </p>
                                    </div>
                                )
                            )}
                        </div>

                        <p className="mt-10 text-xs font-mono uppercase tracking-wider text-neutral-500">
                            Cognitive resilience works best as part of a
                            larger human performance system. Explore{" "}
                            <Link
                                href="/blog/category/discipline"
                                className="text-cyan-400 hover:text-white transition-colors"
                            >
                                Discipline
                            </Link>
                            ,{" "}
                            <Link
                                href="/blog/category/fitness"
                                className="text-cyan-400 hover:text-white transition-colors"
                            >
                                Fitness
                            </Link>
                            , and{" "}
                            <Link
                                href="/blog/category/yoga"
                                className="text-cyan-400 hover:text-white transition-colors"
                            >
                                Yoga
                            </Link>
                            {" "}to strengthen the other layers of the
                            Human Operating System.
                        </p>
                    </div>
                </section>

                {/* Purpose */}

                <section className="mb-24 border border-cyan-900/40 bg-neutral-950 p-8 md:p-12 text-center">
                    <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        THE PURPOSE OF THIS SYSTEM
                    </h2>

                    <p className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-6">
                        Build Mental Clarity in a Distracted World
                    </p>

                    <p className="text-sm text-neutral-400 font-mono max-w-2xl mx-auto leading-relaxed">
                        The Mindset System exists to help you improve
                        mental clarity, protect your attention, understand
                        your thought patterns, overcome unnecessary
                        overthinking, and develop the mental resilience
                        required for meaningful personal growth.
                    </p>
                </section>

                {/* Cognitive Architecture */}

                <section className="mb-24 border border-neutral-900 bg-neutral-950/60 p-8 md:p-12">
                    <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        THE MINDSET SYSTEM ARCHITECTURE
                    </h2>

                    <p className="mb-6 text-xl font-bold uppercase tracking-wide">
                        The Cognitive Processing Pipeline
                    </p>

                    <p className="text-sm text-neutral-400 font-mono leading-relaxed mb-8 max-w-3xl">
                        The NomadLifeXP Mindset System treats attention,
                        information, mental models, decisions, and behavior
                        as connected parts of a practical cognitive process.
                        Understanding this process can help improve focus,
                        decision-making, self-awareness, and cognitive
                        performance.
                    </p>

                    <div className="max-w-md mx-auto flex flex-col items-center font-mono text-xs text-cyan-400 space-y-2">
                        {[
                            "INFORMATION INPUT",
                            "ATTENTION FILTER",
                            "MENTAL MODELS",
                            "DECISION ENGINE",
                            "BEHAVIOR OUTPUT",
                            "IDENTITY UPDATE",
                        ].map(
                            (item, index, array) => (
                                <div
                                    key={
                                        item
                                    }
                                    className="w-full flex flex-col items-center"
                                >
                                    <div className="w-full border border-neutral-800 bg-black p-3 text-center">
                                        {
                                            item
                                        }
                                    </div>

                                    {index <
                                        array.length -
                                        1 && (
                                            <div className="text-neutral-600 py-1">
                                                &darr;
                                            </div>
                                        )}
                                </div>
                            )
                        )}
                    </div>
                </section>

                {/* Target Profiles */}

                <section className="mb-24 border border-neutral-900 bg-neutral-950/60 p-8 md:p-12">
                    <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        SYSTEM TARGET PROFILES
                    </h2>

                    <p className="mb-8 text-xl font-bold uppercase tracking-wide">
                        Who This Mindset System Is For
                    </p>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 font-mono text-sm">
                        {[
                            "Remote workers",
                            "Entrepreneurs",
                            "Digital nomads",
                            "Creators",
                            "People rebuilding focus",
                            "People overcoming overthinking",
                            "People seeking mental clarity",
                            "People improving attention",
                            "Anyone living in uncertainty",
                        ].map(
                            (profile, i) => (
                                <div
                                    key={i}
                                    className="border border-neutral-800 bg-black p-4 flex items-center space-x-3"
                                >
                                    <span className="text-cyan-400">
                                        ✓
                                    </span>

                                    <span className="text-neutral-300">
                                        {
                                            profile
                                        }
                                    </span>
                                </div>
                            )
                        )}
                    </div>
                </section>

                {/* Start Here */}

                <section
                    className="mb-24"
                    aria-labelledby="mindset-start-here"
                >
                    <h2
                        id="mindset-start-here"
                        className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        START HERE
                    </h2>

                    <p className="mb-8 text-xl font-bold uppercase tracking-wide">
                        Choose Your Current Cognitive Challenge
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Link
                            href="/blog/posts/mental-clarity-how-to-stop-overthinking-and-improve-focus"
                            className="border border-neutral-800 bg-neutral-950 p-7 hover:border-cyan-500 transition-colors"
                        >
                            <span className="font-mono text-xs text-cyan-400">
                                IF YOU FEEL OVERLOADED
                            </span>

                            <h3 className="mt-3 text-lg font-bold uppercase">
                                Start With Mental Clarity
                            </h3>

                            <p className="mt-3 text-sm text-neutral-400 font-mono leading-relaxed">
                                Reduce overthinking, clear mental noise,
                                and create better conditions for sustained
                                focus.
                            </p>

                            <span className="inline-block mt-6 text-xs text-cyan-400 font-mono uppercase tracking-wider">
                                START HERE &rarr;
                            </span>
                        </Link>

                        <Link
                            href="/blog/posts/can-you-rebuild-your-attention-span-after-years-of-digital-distraction"
                            className="border border-neutral-800 bg-neutral-950 p-7 hover:border-cyan-500 transition-colors"
                        >
                            <span className="font-mono text-xs text-cyan-400">
                                IF YOU CAN'T FOCUS
                            </span>

                            <h3 className="mt-3 text-lg font-bold uppercase">
                                Rebuild Your Attention
                            </h3>

                            <p className="mt-3 text-sm text-neutral-400 font-mono leading-relaxed">
                                Understand digital distraction and develop
                                stronger concentration in an environment
                                built around interruption.
                            </p>

                            <span className="inline-block mt-6 text-xs text-cyan-400 font-mono uppercase tracking-wider">
                                START HERE &rarr;
                            </span>
                        </Link>

                        <Link
                            href="/blog/posts/the-reason-you-cant-focus-even-when-you-try-hard"
                            className="border border-neutral-800 bg-neutral-950 p-7 hover:border-cyan-500 transition-colors"
                        >
                            <span className="font-mono text-xs text-cyan-400">
                                IF YOU KEEP LOSING MOMENTUM
                            </span>

                            <h3 className="mt-3 text-lg font-bold uppercase">
                                Diagnose the Problem
                            </h3>

                            <p className="mt-3 text-sm text-neutral-400 font-mono leading-relaxed">
                                Explore mental overload, fragmented
                                attention, and hidden barriers that can
                                interfere with sustained focus.
                            </p>

                            <span className="inline-block mt-6 text-xs text-cyan-400 font-mono uppercase tracking-wider">
                                START HERE &rarr;
                            </span>
                        </Link>
                    </div>
                </section>

                {/* Knowledge Database */}

                <section
                    className="mb-24"
                    aria-labelledby="mindset-database"
                >
                    <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 border-b border-neutral-900 pb-4 gap-4">
                        <div>
                            <h2
                                id="mindset-database"
                                className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400 mb-1"
                            >
                                MINDSET DATABASE
                            </h2>

                            <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
                                Explore Mental Clarity, Focus &
                                Cognitive Resilience
                            </p>
                        </div>

                        <span className="font-mono text-xs text-neutral-400">
                            ACTIVE KNOWLEDGE NODES:{" "}
                            {mindsetArticles.length}
                        </span>
                    </div>

                    {mindsetArticles.length > 0 ? (
                        <>
                            <div className="grid md:grid-cols-2 gap-6">
                                {mindsetArticles.map(
                                    (post) => (
                                        <article
                                            key={
                                                post.slug
                                            }
                                            className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between"
                                        >
                                            <div>
                                                <h3 className="text-lg font-bold uppercase tracking-wide">
                                                    {
                                                        post.title
                                                    }
                                                </h3>

                                                <p className="mt-4 text-sm text-neutral-400 font-mono leading-relaxed">
                                                    {
                                                        post.description
                                                    }
                                                </p>
                                            </div>

                                            <Link
                                                href={`/blog/posts/${post.slug}`}
                                                className="inline-block mt-8 text-cyan-400 text-xs font-mono uppercase tracking-wider hover:text-white transition-colors"
                                            >
                                                OPEN ARTICLE &rarr;
                                            </Link>
                                        </article>
                                    )
                                )}
                            </div>

                            <div className="mt-10 text-center">
                                <Link
                                    href="/blog/category/mindset"
                                    className="inline-block border border-neutral-800 px-6 py-3 text-cyan-400 font-mono text-xs uppercase tracking-[0.25em] hover:border-cyan-500 hover:text-white transition-colors"
                                >
                                    VIEW ALL MINDSET ARTICLES &rarr;
                                </Link>
                            </div>
                        </>
                    ) : (
                        <p className="text-neutral-500 font-mono text-sm">
                            No mindset nodes available currently.
                        </p>
                    )}
                </section>

                {/* Mindset Framework */}

                <section className="mb-24 border border-neutral-900 bg-neutral-950/60 p-8 md:p-12">
                    <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        THE NOMADLIFEXP MINDSET FRAMEWORK
                    </h2>

                    <p className="mb-10 text-xl font-bold uppercase tracking-wide">
                        Four Pillars of Cognitive Mastery
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 font-mono">
                        {[
                            {
                                title:
                                    "Information Control",

                                text:
                                    "Protect your mental environment. Control what enters your attention and reduce unnecessary cognitive noise.",
                            },

                            {
                                title:
                                    "Attention Control",

                                text:
                                    "Attention is a limited resource. Train your ability to direct focus intentionally despite digital distraction.",
                            },

                            {
                                title:
                                    "Belief Architecture",

                                text:
                                    "Examine internal assumptions and mental models. Replace outdated thinking with useful frameworks that support growth.",
                            },

                            {
                                title:
                                    "Identity Design",

                                text:
                                    "Build an identity aligned with your values, goals, and desired future. Identity creates consistency and long-term momentum.",
                            },
                        ].map(
                            (pillar) => (
                                <div
                                    key={
                                        pillar.title
                                    }
                                    className="border-l border-cyan-500/40 pl-6"
                                >
                                    <h3 className="text-white font-bold uppercase mb-2">
                                        {
                                            pillar.title
                                        }
                                    </h3>

                                    <p className="text-sm text-neutral-400 leading-relaxed">
                                        {
                                            pillar.text
                                        }
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                </section>

                {/* Why Mindset Matters */}

                <section className="mb-24 grid md:grid-cols-2 gap-8">
                    <div className="border border-red-950/50 bg-neutral-950 p-8">
                        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-red-400 mb-6">
                            WHY MINDSET MATTERS // WITHOUT IT:
                        </h2>

                        <ul className="space-y-3 font-mono text-sm text-neutral-400 list-disc list-inside">
                            <li>
                                External information controls attention.
                            </li>

                            <li>
                                Distraction fragments concentration.
                            </li>

                            <li>
                                Emotions can dictate decisions.
                            </li>

                            <li>
                                Old patterns repeat automatically.
                            </li>
                        </ul>
                    </div>

                    <div className="border border-cyan-950/50 bg-neutral-950 p-8">
                        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400 mb-6">
                            WHY MINDSET MATTERS // WITH IT:
                        </h2>

                        <ul className="space-y-3 font-mono text-sm text-neutral-400 list-disc list-inside">
                            <li>
                                Attention becomes intentional.
                            </li>

                            <li>
                                Focus becomes easier to protect.
                            </li>

                            <li>
                                Decisions become more conscious.
                            </li>

                            <li>
                                Identity becomes intentionally designed.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Nomad Advantage */}

                <section className="mb-24 border border-cyan-900/40 bg-neutral-950 p-8 md:p-12">
                    <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        THE NOMADLIFEXP COGNITIVE ADVANTAGE
                    </h2>

                    <p className="mb-6 text-xl font-bold uppercase tracking-wide">
                        Why Nomads Need Mental Resilience
                    </p>

                    <p className="text-sm text-neutral-400 font-mono mb-6">
                        Nomadic life can involve:
                    </p>

                    <ul className="space-y-2 font-mono text-sm text-neutral-400 list-disc list-inside mb-6">
                        <li>
                            changing environments
                        </li>

                        <li>
                            unpredictable schedules
                        </li>

                        <li>
                            unfamiliar situations
                        </li>

                        <li>
                            constant adaptation
                        </li>

                        <li>
                            digital distractions
                        </li>
                    </ul>

                    <p className="text-sm text-cyan-400 font-mono font-semibold">
                        Mental resilience becomes an internal navigation
                        system. When the external environment changes,
                        stronger attention, clarity, and self-awareness
                        can help you maintain direction.
                    </p>
                </section>

                {/* Upgraded CTA */}

                <section className="mb-24 border border-cyan-500/30 bg-neutral-950 p-10 md:p-14 text-center shadow-[0_0_60px_rgba(6,182,212,0.06)]">
                    <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400 mb-3">
                        BUILD YOUR MENTAL EDGE
                    </h2>

                    <p className="text-2xl md:text-4xl font-black uppercase tracking-wide mb-5">
                        Take Control of Your Attention
                    </p>

                    <p className="text-neutral-400 font-mono text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                        Start with mental clarity. Learn how attention
                        works, understand your cognitive patterns, reduce
                        distraction, and turn greater awareness into
                        consistent action.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/blog"
                            className="inline-block bg-cyan-500 text-black font-mono text-xs uppercase tracking-[0.3em] px-8 py-4 font-bold hover:bg-cyan-400 transition-colors"
                        >
                            EXPLORE MINDSET SYSTEM &rarr;
                        </Link>

                        <Link
                            href="/blog/category/mindset"
                            className="inline-block border border-neutral-700 text-neutral-300 font-mono text-xs uppercase tracking-[0.3em] px-8 py-4 font-bold hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                        >
                            READ THE KNOWLEDGE BASE &rarr;
                        </Link>
                    </div>
                </section>

                {/* Human Operating System Integration */}

                <footer className="border-t border-neutral-900 pt-16">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                            THE HUMAN OPERATING SYSTEM
                        </h2>

                        <p className="text-xl font-bold uppercase tracking-wide mb-8">
                            Unified Architectural Matrix
                        </p>

                        <div className="flex flex-col items-center font-mono text-xs text-cyan-400 space-y-4 mb-10">
                            <div className="border border-cyan-500/50 bg-neutral-950 px-6 py-4 w-64 text-center shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                                <span className="block font-bold text-white text-sm mb-1">
                                    MINDSET
                                </span>

                                <span className="text-[10px] text-neutral-400 lowercase">
                                    (Interpretation System)
                                </span>
                            </div>

                            <div className="text-neutral-600">
                                &darr;
                            </div>

                            <div className="grid grid-cols-3 gap-4 w-full max-w-xl">
                                <Link
                                    href="/blog/category/discipline"
                                    className="border border-neutral-800 bg-neutral-950 p-3 text-center hover:border-cyan-500 transition-colors"
                                >
                                    <span className="block font-bold text-white mb-1">
                                        DISCIPLINE
                                    </span>

                                    <span className="text-[10px] text-neutral-400 lowercase">
                                        (Execution)
                                    </span>
                                </Link>

                                <Link
                                    href="/blog/category/fitness"
                                    className="border border-neutral-800 bg-neutral-950 p-3 text-center hover:border-cyan-500 transition-colors"
                                >
                                    <span className="block font-bold text-white mb-1">
                                        FITNESS
                                    </span>

                                    <span className="text-[10px] text-neutral-400 lowercase">
                                        (Capability)
                                    </span>
                                </Link>

                                <Link
                                    href="/blog/category/yoga"
                                    className="border border-neutral-800 bg-neutral-950 p-3 text-center hover:border-cyan-500 transition-colors"
                                >
                                    <span className="block font-bold text-white mb-1">
                                        YOGA
                                    </span>

                                    <span className="text-[10px] text-neutral-400 lowercase">
                                        (Regulation)
                                    </span>
                                </Link>
                            </div>

                            <div className="text-neutral-600">
                                &darr;
                            </div>

                            <div className="border border-neutral-800 bg-black px-6 py-3 w-64 text-center text-neutral-300">
                                HUMAN PERFORMANCE
                            </div>
                        </div>
                    </div>

                    {/* Architectural Navigation */}

                    <div className="border-t border-neutral-900 pt-10">
                        <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-neutral-500 text-center">
                            NAVIGATE ARCHITECTURAL NODES
                        </h3>

                        <div className="grid sm:grid-cols-3 gap-6 font-mono text-xs uppercase">
                            <Link
                                href="/blog/category/discipline"
                                className="border border-neutral-900 bg-neutral-950 p-6 text-neutral-300 hover:border-cyan-500 transition-colors block"
                            >
                                <span className="block text-white font-bold mb-1">
                                    Discipline
                                </span>

                                <span className="text-neutral-500 text-[10px] lowercase block mb-3">
                                    Controls behavior, habits, and execution.
                                </span>

                                <span className="text-cyan-400">
                                    &rarr; EXPLORE DISCIPLINE
                                </span>
                            </Link>

                            <Link
                                href="/blog/category/fitness"
                                className="border border-neutral-900 bg-neutral-950 p-6 text-neutral-300 hover:border-cyan-500 transition-colors block"
                            >
                                <span className="block text-white font-bold mb-1">
                                    Fitness
                                </span>

                                <span className="text-neutral-500 text-[10px] lowercase block mb-3">
                                    Develop physical strength, mobility,
                                    and resilience.
                                </span>

                                <span className="text-cyan-400">
                                    &rarr; EXPLORE FITNESS
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
                                    Develop balance, mobility, awareness,
                                    and recovery.
                                </span>

                                <span className="text-cyan-400">
                                    &rarr; EXPLORE YOGA
                                </span>
                            </Link>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    );
}
