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
const PAGE_URL = `${SITE_URL}/discipline`;

export const metadata: Metadata = {
    title: "Self-Discipline: Build Habits, Consistency & Self-Control | NomadLifeXP",
    description:
        "Learn how to build self-discipline, stronger habits, consistency, focus, and self-control. Explore practical discipline systems for personal growth, better habits, and lasting self-mastery.",
    keywords: [
        "self-discipline",
        "discipline",
        "self discipline",
        "self-control",
        "self control",
        "personal discipline",
        "how to build self-discipline",
        "how to develop self-discipline",
        "how to become more disciplined",
        "how to stay disciplined",
        "how to practice discipline",
        "discipline habits",
        "daily discipline",
        "discipline and consistency",
        "habit building",
        "how to build better habits",
        "habit formation",
        "consistency",
        "focus",
        "attention control",
        "procrastination",
        "how to stop procrastinating",
        "motivation vs discipline",
        "personal growth",
        "personal development",
        "self-mastery",
        "mental discipline",
        "behavior change",
        "productive habits",
        "discipline mindset",
    ],
    authors: [{ name: "NomadLifeXP" }],
    creator: "NomadLifeXP",
    publisher: "NomadLifeXP",
    category: "Personal Development",
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
        title: "Self-Discipline: Build Habits, Consistency & Self-Control | NomadLifeXP",
        description:
            "Learn how to build self-discipline, stronger habits, consistency, focus, and self-control with the NomadLifeXP Discipline System.",
        siteName: "NomadLifeXP",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Self-Discipline: Build Habits, Consistency & Self-Control | NomadLifeXP",
        description:
            "Learn how to build self-discipline, stronger habits, consistency, focus, and self-control with the NomadLifeXP Discipline System.",
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

function getDisciplinePosts(): SystemPost[] {
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

                    return safeSlug(category) === "discipline";
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

function createStructuredData(
    disciplineArticles: SystemPost[]
) {
    const websiteId = `${SITE_URL}#website`;
    const pageId = `${PAGE_URL}#discipline-collection`;
    const topicId = `${PAGE_URL}#discipline-topic`;
    const listId = `${PAGE_URL}#discipline-articles`;
    const breadcrumbId = `${PAGE_URL}#breadcrumbs`;

    const articleItems = disciplineArticles.map(
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
                    "@id": pageId,
                },
                about: {
                    "@id": topicId,
                },
            },
        })
    );

    return [
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": websiteId,
            url: SITE_URL,
            name: "NomadLifeXP",
            description:
                "NomadLifeXP is a human evolution platform focused on discipline, fitness, mindset, yoga, and practical self-development.",
            inLanguage: "en",
        },

        {
            "@context": "https://schema.org",
            "@type": "Thing",
            "@id": topicId,
            name: "Self-Discipline",
            alternateName: [
                "Discipline",
                "Self Discipline",
                "Personal Discipline",
                "Self-Control",
            ],
            description:
                "Self-discipline is the ability to direct attention, control actions, build consistent habits, and follow through on meaningful goals.",
            url: PAGE_URL,
        },

        {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": pageId,
            url: PAGE_URL,
            name:
                "Self-Discipline: Build Habits, Consistency & Self-Control",
            headline:
                "Discipline: The Foundation of Personal Evolution",
            description:
                "Learn how to build self-discipline, stronger habits, consistency, focus, and self-control through the NomadLifeXP Discipline System.",
            isPartOf: {
                "@id": websiteId,
            },
            about: {
                "@id": topicId,
            },
            mainEntity: {
                "@id": listId,
            },
            breadcrumb: {
                "@id": breadcrumbId,
            },
            inLanguage: "en",
        },

        {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": listId,
            name: "NomadLifeXP Discipline Articles",
            description:
                "Articles about self-discipline, habits, consistency, focus, self-control, procrastination, and personal growth.",
            numberOfItems: disciplineArticles.length,
            itemListOrder:
                "https://schema.org/ItemListOrderAscending",
            itemListElement: articleItems,
        },

        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": breadcrumbId,
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
                    name: "Discipline",
                    item: PAGE_URL,
                },
            ],
        },
    ];
}

export default function DisciplinePage() {
    let disciplineArticles: SystemPost[] = [];

    try {
        disciplineArticles = getDisciplinePosts();
    } catch {
        disciplineArticles = [];
    }

    const structuredData =
        createStructuredData(disciplineArticles);

    const featuredArticle =
        disciplineArticles[0] ?? null;

    return (
        <main className="min-h-screen bg-black text-white antialiased">
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />

            <div className="relative mx-auto max-w-7xl px-6 py-24">
                {/* Background Accent */}
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
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-white hover:text-amber-400 transition-colors group"
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
                                className="text-white hover:text-amber-400 transition-colors"
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
                                className="text-white hover:text-amber-400 transition-colors"
                            >
                                Blog
                            </Link>
                        </li>

                        <li aria-hidden="true" className="text-neutral-500">
                            /
                        </li>

                        <li className="text-amber-400" aria-current="page">
                            Discipline
                        </li>
                    </ol>
                </nav>

                {/* Hero */}
                <header className="relative z-10 mb-24">
                    <p className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        NOMADLIFEXP // HUMAN EVOLUTION SYSTEM
                    </p>

                    <h1 className="text-5xl font-black uppercase leading-none md:text-7xl">
                        Discipline: The Foundation of Personal Evolution
                    </h1>

                    <p className="mt-6 text-xl font-medium text-neutral-200">
                        Self-discipline is the foundation for building stronger
                        habits, consistency, focus, self-control, and lasting
                        personal growth.
                    </p>

                    <p className="mt-4 max-w-3xl font-mono leading-relaxed text-neutral-400">
                        Discipline is not punishment. It is not restriction.
                        It is the ability to direct your attention, control
                        your actions, and consistently move toward the person
                        you choose to become.
                    </p>

                    <p className="mt-4 max-w-3xl font-mono leading-relaxed text-neutral-400">
                        In a world designed to constantly distract you,
                        discipline becomes the foundation for freedom. The
                        NomadLifeXP Discipline System explores how attention,
                        habits, consistency, and self-control work together to
                        help you rebuild your life from the inside out.
                    </p>

                    {/* Search Intent Signals */}
                    <div className="mt-8 flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                        <span className="border border-neutral-800 px-4 py-2">
                            SELF-DISCIPLINE
                        </span>

                        <span className="border border-neutral-800 px-4 py-2">
                            HABIT BUILDING
                        </span>

                        <span className="border border-neutral-800 px-4 py-2">
                            CONSISTENCY
                        </span>

                        <span className="border border-neutral-800 px-4 py-2">
                            SELF-CONTROL
                        </span>

                        <span className="border border-neutral-800 px-4 py-2">
                            FOCUS
                        </span>
                    </div>
                </header>

                {/* What You'll Learn */}
                <section
                    id="what-you-will-learn"
                    aria-labelledby="what-you-will-learn-heading"
                    className="mb-24 border border-neutral-900 bg-neutral-950/70 p-8 md:p-12"
                >
                    <h2
                        id="what-you-will-learn-heading"
                        className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        WHAT YOU WILL LEARN
                    </h2>

                    <p className="mb-8 max-w-3xl font-mono text-sm leading-relaxed text-neutral-400">
                        Use this Discipline System to understand how attention,
                        habits, action, consistency, and identity work together
                        to create reliable self-control.
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                number: "01",
                                title: "Build Self-Discipline",
                                text: "Learn how to act consistently without depending entirely on motivation.",
                            },
                            {
                                number: "02",
                                title: "Build Better Habits",
                                text: "Create repeatable behaviors that make disciplined action easier.",
                            },
                            {
                                number: "03",
                                title: "Improve Focus",
                                text: "Protect attention from distraction and direct it toward meaningful goals.",
                            },
                            {
                                number: "04",
                                title: "Create Consistency",
                                text: "Turn repeated actions into systems that support long-term personal growth.",
                            },
                        ].map((item) => (
                            <div
                                key={item.number}
                                className="border border-neutral-800 bg-black p-6"
                            >
                                <span className="font-mono text-xs text-cyan-400">
                                    {item.number}
                                </span>

                                <h3 className="mt-3 mb-3 text-sm font-bold uppercase tracking-wide">
                                    {item.title}
                                </h3>

                                <p className="font-mono text-xs leading-relaxed text-neutral-500">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Evolution Path */}
                <section
                    id="discipline-evolution-path"
                    aria-labelledby="discipline-path-heading"
                    className="mb-24"
                >
                    <h2
                        id="discipline-path-heading"
                        className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        THE DISCIPLINE EVOLUTION PATH
                    </h2>

                    <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                        A framework for rebuilding self-control, consistency,
                        focus, and self-mastery.
                    </p>

                    <div className="grid gap-6 md:grid-cols-4">
                        {[
                            {
                                id: "01",
                                title: "01 — Awareness",
                                subtext:
                                    "Understand your patterns, distractions, and behaviors.",
                                text:
                                    "Before you can change your actions, you must understand what controls them.",
                            },
                            {
                                id: "02",
                                title: "02 — Control",
                                subtext:
                                    "Regain control over your attention, impulses, and decisions.",
                                text:
                                    "Discipline begins when you stop reacting and start choosing.",
                            },
                            {
                                id: "03",
                                title: "03 — Consistency",
                                subtext:
                                    "Build systems that continue working even when motivation disappears.",
                                text:
                                    "Small actions repeated over time create lasting transformation.",
                            },
                            {
                                id: "04",
                                title: "04 — Mastery",
                                subtext:
                                    "Become someone who naturally acts according to your values.",
                                text:
                                    "True discipline is not something you force. It becomes part of who you are.",
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

                {/* How To Build Discipline */}
                <section
                    id="how-to-build-self-discipline"
                    aria-labelledby="build-self-discipline-heading"
                    className="mb-24"
                >
                    <h2
                        id="build-self-discipline-heading"
                        className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        HOW TO BUILD SELF-DISCIPLINE
                    </h2>

                    <p className="mb-8 max-w-3xl font-mono text-sm leading-relaxed text-neutral-400">
                        Building self-discipline is not about relying on
                        motivation. It is about protecting your attention,
                        creating repeatable habits, taking consistent action,
                        and developing an identity that supports the life you
                        want to build.
                    </p>

                    <div className="grid gap-6 md:grid-cols-2">
                        {[
                            {
                                number: "01",
                                title: "Protect Your Attention",
                                text:
                                    "Reduce unnecessary distractions and deliberately choose where your attention goes.",
                            },
                            {
                                number: "02",
                                title: "Build Better Habits",
                                text:
                                    "Create small, repeatable behaviors that make disciplined action easier to maintain.",
                            },
                            {
                                number: "03",
                                title: "Act Without Waiting for Motivation",
                                text:
                                    "Use systems and routines to keep moving forward when motivation disappears.",
                            },
                            {
                                number: "04",
                                title: "Become Consistent",
                                text:
                                    "Repeat meaningful actions over time until discipline becomes part of your identity.",
                            },
                        ].map((item) => (
                            <div
                                key={item.number}
                                className="border border-neutral-800 bg-neutral-950 p-8"
                            >
                                <span className="font-mono text-xs text-cyan-400">
                                    {item.number}
                                </span>

                                <h3 className="mt-3 mb-3 font-bold uppercase tracking-wide text-white">
                                    {item.title}
                                </h3>

                                <p className="font-mono text-sm leading-relaxed text-neutral-400">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contextual CTA */}
                <section
                    aria-label="Begin discipline training"
                    className="mb-24 border border-cyan-900/40 bg-neutral-950 p-8 md:p-10"
                >
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="max-w-3xl">
                            <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
                                READY TO BEGIN?
                            </p>

                            <h2 className="mb-3 text-xl font-black uppercase tracking-wide md:text-2xl">
                                Start With One Disciplined Action
                            </h2>

                            <p className="font-mono text-sm leading-relaxed text-neutral-400">
                                You do not need perfect motivation to begin.
                                Choose one meaningful action, repeat it, and
                                use the system to build momentum.
                            </p>
                        </div>

                        <Link
                            href={
                                featuredArticle
                                    ? `/blog/posts/${featuredArticle.slug}`
                                    : "#discipline-articles"
                            }
                            className="shrink-0 border border-cyan-500 px-7 py-4 text-center font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 transition-colors hover:bg-cyan-500 hover:text-black"
                        >
                            START WITH AN ARTICLE &rarr;
                        </Link>
                    </div>
                </section>

                {/* Article Database */}
                <section
                    id="discipline-articles"
                    aria-labelledby="discipline-articles-heading"
                    className="mb-24"
                >
                    <div className="mb-8 flex flex-col gap-4 border-b border-neutral-900 pb-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <h2
                                id="discipline-articles-heading"
                                className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                            >
                                DISCIPLINE KNOWLEDGE DATABASE
                            </h2>

                            <p className="max-w-2xl font-mono text-xs uppercase tracking-[0.15em] text-neutral-500">
                                Explore self-discipline, habit building,
                                consistency, focus, procrastination, and
                                self-control.
                            </p>
                        </div>

                        <span className="font-mono text-xs text-neutral-400">
                            {disciplineArticles.length} ARTICLES
                        </span>
                    </div>

                    {disciplineArticles.length > 0 ? (
                        <div className="grid gap-6 md:grid-cols-2">
                            {disciplineArticles.map(
                                (post, index) => (
                                    <article
                                        key={post.slug}
                                        className="flex flex-col justify-between border border-neutral-800 bg-neutral-950 p-8 transition-colors hover:border-cyan-900"
                                    >
                                        <div>
                                            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-500">
                                                KNOWLEDGE NODE{" "}
                                                {String(
                                                    index + 1
                                                ).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>

                                            <h3 className="mt-3 text-lg font-bold uppercase tracking-wide">
                                                {post.title}
                                            </h3>

                                            <p className="mt-4 font-mono text-sm leading-relaxed text-neutral-400">
                                                {
                                                    post.description
                                                }
                                            </p>
                                        </div>

                                        <Link
                                            href={`/blog/posts/${post.slug}`}
                                            className="mt-8 inline-block font-mono text-xs uppercase tracking-wider text-cyan-400 transition-colors hover:text-white"
                                        >
                                            READ ARTICLE &rarr;
                                        </Link>
                                    </article>
                                )
                            )}
                        </div>
                    ) : (
                        <div className="border border-neutral-900 bg-neutral-950 p-8">
                            <p className="font-mono text-sm text-neutral-500">
                                No discipline knowledge nodes are available
                                currently.
                            </p>
                        </div>
                    )}
                </section>

                {/* Framework */}
                <section
                    id="discipline-framework"
                    aria-labelledby="discipline-framework-heading"
                    className="mb-24 border border-neutral-900 bg-neutral-950/60 p-8 md:p-12"
                >
                    <h2
                        id="discipline-framework-heading"
                        className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        THE NOMADLIFEXP DISCIPLINE FRAMEWORK
                    </h2>

                    <p className="mb-10 text-xl font-bold uppercase tracking-wide">
                        Four Elements That Create Self-Mastery
                    </p>

                    <div className="grid gap-8 font-mono md:grid-cols-2">
                        {[
                            {
                                title: "Attention",
                                text:
                                    "Your attention determines your direction. Learn to protect your focus from distraction and reclaim control over your mental energy.",
                                href: "#how-to-build-self-discipline",
                                label: "LEARN ATTENTION CONTROL",
                            },
                            {
                                title: "Habits",
                                text:
                                    "Your daily actions shape your future identity. Build systems that make positive behavior easier and more consistent.",
                                href: "#discipline-articles",
                                label: "EXPLORE HABIT ARTICLES",
                            },
                            {
                                title: "Action",
                                text:
                                    "Progress comes from execution. Discipline transforms intentions into repeated action.",
                                href: "#discipline-evolution-path",
                                label: "FOLLOW THE EVOLUTION PATH",
                            },
                            {
                                title: "Identity",
                                text:
                                    "The highest level of discipline is becoming someone who naturally follows through. Your habits become your character.",
                                href: "#what-you-will-learn",
                                label: "BUILD YOUR FOUNDATION",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="border-l border-cyan-500/40 pl-6"
                            >
                                <h3 className="mb-2 font-bold uppercase text-white">
                                    {item.title}
                                </h3>

                                <p className="mb-4 text-sm leading-relaxed text-neutral-400">
                                    {item.text}
                                </p>

                                <Link
                                    href={item.href}
                                    className="text-[10px] uppercase tracking-wider text-cyan-400 transition-colors hover:text-white"
                                >
                                    {item.label} &rarr;
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Practical Questions */}
                <section
                    id="discipline-questions"
                    aria-labelledby="discipline-questions-heading"
                    className="mb-24 border border-neutral-900 bg-neutral-950 p-8 md:p-12"
                >
                    <h2
                        id="discipline-questions-heading"
                        className="mb-8 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
                    >
                        SELF-DISCIPLINE QUESTIONS
                    </h2>

                    <div className="grid gap-8 md:grid-cols-2">
                        <div>
                            <h3 className="mb-3 text-lg font-bold uppercase">
                                How do you build self-discipline?
                            </h3>

                            <p className="font-mono text-sm leading-relaxed text-neutral-400">
                                Build self-discipline by reducing unnecessary
                                distractions, choosing specific behaviors,
                                creating repeatable routines, and practicing
                                consistent action even when motivation changes.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-3 text-lg font-bold uppercase">
                                How do you stay disciplined?
                            </h3>

                            <p className="font-mono text-sm leading-relaxed text-neutral-400">
                                Make disciplined behavior easier to repeat.
                                Define clear actions, reduce friction, protect
                                your attention, track consistency, and build
                                routines that support your goals.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-3 text-lg font-bold uppercase">
                                What is the difference between motivation and
                                discipline?
                            </h3>

                            <p className="font-mono text-sm leading-relaxed text-neutral-400">
                                Motivation can fluctuate with mood,
                                circumstances, and immediate rewards.
                                Discipline focuses on continuing meaningful
                                action through a repeatable system.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-3 text-lg font-bold uppercase">
                                How does discipline help personal growth?
                            </h3>

                            <p className="font-mono text-sm leading-relaxed text-neutral-400">
                                Discipline turns intentions into repeated
                                behavior. Repeated behavior creates consistency,
                                and consistency gives long-term goals a practical
                                path toward completion.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Without / With */}
                <section
                    className="mb-24 grid gap-8 md:grid-cols-2"
                    aria-label="Why discipline matters"
                >
                    <div className="border border-red-950/50 bg-neutral-950 p-8">
                        <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-red-400">
                            WHY DISCIPLINE MATTERS // WITHOUT IT:
                        </h2>

                        <ul className="list-inside list-disc space-y-3 font-mono text-sm text-neutral-400">
                            <li>Goals remain unfinished.</li>
                            <li>Knowledge remains unused.</li>
                            <li>Potential remains unrealized.</li>
                            <li>Attention becomes easier to hijack.</li>
                        </ul>
                    </div>

                    <div className="border border-cyan-950/50 bg-neutral-950 p-8">
                        <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
                            WHY DISCIPLINE MATTERS // WITH IT:
                        </h2>

                        <ul className="list-inside list-disc space-y-3 font-mono text-sm text-neutral-400">
                            <li>Attention becomes focused.</li>
                            <li>Actions become intentional.</li>
                            <li>Progress becomes consistent.</li>
                            <li>Personal transformation becomes possible.</li>
                        </ul>
                    </div>
                </section>

                {/* Final CTA */}
                <section
                    id="start-your-evolution"
                    aria-labelledby="start-evolution-heading"
                    className="mb-24 border border-cyan-900/40 bg-neutral-950 p-10 text-center"
                >
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        START YOUR EVOLUTION
                    </p>

                    <h2
                        id="start-evolution-heading"
                        className="mb-4 text-2xl font-black uppercase tracking-wide md:text-3xl"
                    >
                        Build Your Personal Operating System
                    </h2>

                    <p className="mx-auto mb-8 max-w-2xl font-mono text-sm leading-relaxed text-neutral-400">
                        Discipline is where transformation begins. Protect
                        your attention, build better habits, act consistently,
                        and create systems that allow your mind, body, and life
                        to evolve.
                    </p>

                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            href="#discipline-articles"
                            className="inline-block bg-cyan-500 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.3em] text-black transition-colors hover:bg-cyan-400"
                        >
                            EXPLORE DISCIPLINE &rarr;
                        </Link>

                        <Link
                            href="/blog"
                            className="inline-block border border-neutral-700 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.3em] text-neutral-300 transition-colors hover:border-cyan-500 hover:text-cyan-400"
                        >
                            EXPLORE ALL KNOWLEDGE &rarr;
                        </Link>
                    </div>
                </section>

                {/* Cross-Pillar Internal Linking */}
                <footer className="border-t border-neutral-900 pt-10">
                    <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-neutral-500">
                        CONTINUE YOUR HUMAN EVOLUTION
                    </h2>

                    <p className="mb-6 font-mono text-xs uppercase text-neutral-600">
                        Discipline is the foundation. Continue developing the
                        other pillars of the NomadLifeXP system:
                    </p>

                    <div className="grid gap-6 font-mono text-xs uppercase sm:grid-cols-3">
                        <Link
                            href="/blog/category/mindset"
                            className="block border border-neutral-900 bg-neutral-950 p-6 text-neutral-300 transition-colors hover:border-cyan-500"
                        >
                            <span className="mb-1 block font-bold text-white">
                                Mindset
                            </span>

                            <span className="mb-3 block text-[10px] lowercase text-neutral-500">
                                Develop mental clarity, resilience, emotional
                                control, and stronger decision-making.
                            </span>

                            <span className="text-cyan-400">
                                EXPLORE MINDSET &rarr;
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
                                Build physical strength, movement, resilience,
                                and consistency.
                            </span>

                            <span className="text-cyan-400">
                                EXPLORE FITNESS &rarr;
                            </span>
                        </Link>

                        <Link
                            href="/blog/category/yoga"
                            className="block border border-neutral-900 bg-neutral-950 p-6 text-neutral-300 transition-colors hover:border-cyan-500"
                        >
                            <span className="mb-1 block font-bold text-white">
                                Yoga
                            </span>

                            <span className="mb-3 block text-[10px] lowercase text-neutral-500">
                                Develop awareness, mobility, recovery, and
                                mind-body connection.
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

