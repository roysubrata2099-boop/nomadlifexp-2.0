import "server-only";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllMDXPosts } from "@/lib/mdx";

interface SystemPost {
    readonly slug: string;
    readonly title: string;
    readonly description: string;
    readonly category: string;
}

interface EvolutionStep {
    readonly number: string;
    readonly title: string;
    readonly description: string;
    readonly detail: string;
}

interface FrameworkElement {
    readonly title: string;
    readonly description: string;
}

interface PathStep {
    readonly stepNumber: string;
    readonly title: string;
    readonly defaultTitle: string;
    readonly defaultDescription: string;
}

interface FaqItem {
    readonly question: string;
    readonly answer: string;
}

interface CrossNode {
    readonly title: string;
    readonly description: string;
    readonly href: string;
}

function safeString(value: unknown): string {
    if (typeof value !== "string") return "";
    return value.trim();
}

function safeSlug(value: unknown): string {
    const text = safeString(value);
    if (!text) return "";
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function safeCategory(value: unknown): string {
    return safeString(value).toLowerCase().trim();
}

export const metadata: Metadata = {
    title: "Fitness Architecture & Evolution Systems | NomadLifeXP",
    description:
        "Build strength, mobility, endurance, and physical capability through structured training systems, sustainable habits, and intentional movement.",
    alternates: {
        canonical: "https://nomadlifexp.com/blog/category/fitness",
    },
};

const EVOLUTION_STEPS: readonly EvolutionStep[] = [
    {
        number: "01",
        title: "Foundation",
        description: "Build the habits, routines, and consistency required for sustainable fitness.",
        detail: "Fitness begins when training becomes part of your identity.",
    },
    {
        number: "02",
        title: "Strength",
        description: "Develop physical capability through progressive training and intentional effort.",
        detail: "Strength creates confidence, resilience, and independence.",
    },
    {
        number: "03",
        title: "Performance",
        description: "Improve mobility, endurance, coordination, and overall physical capacity.",
        detail: "A capable body expands what you can do.",
    },
    {
        number: "04",
        title: "Longevity",
        description: "Create a sustainable fitness system that supports health, movement, and performance throughout life.",
        detail: "The goal is not temporary change. It is lifelong evolution.",
    },
];

const FRAMEWORK_ELEMENTS: readonly FrameworkElement[] = [
    {
        title: "Strength",
        description: "Build physical capability through progressive training and consistent effort.",
    },
    {
        title: "Mobility",
        description: "Develop movement quality, flexibility, and body awareness.",
    },
    {
        title: "Consistency",
        description: "Create routines that continue beyond temporary motivation.",
    },
    {
        title: "Performance",
        description: "Improve your ability to move, train, recover, and perform.",
    },
];

const WITHOUT_IT_POINTS: readonly string[] = [
    "Energy decreases.",
    "Physical capability declines.",
    "Confidence suffers.",
    "Health becomes reactive.",
];

const WITH_IT_POINTS: readonly string[] = [
    "Strength improves.",
    "Movement becomes easier.",
    "Energy increases.",
    "The body becomes a foundation for life.",
];

const FAQ_ITEMS: readonly FaqItem[] = [
    {
        question: "What is the NomadLifeXP Fitness System?",
        answer: "A structured approach to building strength, mobility, consistency, and physical capability through sustainable habits.",
    },
    {
        question: "How do I build workout consistency?",
        answer: "Consistency comes from creating systems that make training repeatable beyond temporary motivation.",
    },
    {
        question: "Is fitness only about muscle growth?",
        answer: "No. Fitness includes strength, mobility, endurance, recovery, health, and everyday performance.",
    },
    {
        question: "Why does physical fitness matter?",
        answer: "A capable body improves confidence, energy, resilience, and quality of life.",
    },
];

const CROSS_NODES: readonly CrossNode[] = [
    {
        title: "Discipline",
        description: "Build consistency, focus, and execution.",
        href: "/blog/category/discipline",
    },
    {
        title: "Yoga",
        description: "Develop mobility, awareness, and recovery.",
        href: "/blog/category/yoga",
    },
    {
        title: "Mindset",
        description: "Develop resilience, clarity, and decision-making.",
        href: "/blog/category/mindset",
    },
];

export default async function FitnessPage() {
    let rawPosts: unknown[] = [];

    try {
        const data = await getAllMDXPosts();
        if (Array.isArray(data)) {
            rawPosts = data;
        }
    } catch {
        rawPosts = [];
    }

    const fitnessArticles: SystemPost[] = rawPosts
        .filter(
            (post): post is Record<string, unknown> =>
                typeof post === "object" && post !== null
        )
        .map((post) => ({
            slug: safeSlug(post.slug),
            title: safeString(post.title) || "Untitled Knowledge Node",
            description: safeString(post.description) || "System description unavailable.",
            category: safeCategory(post.category),
        }))
        .filter((post) => post.category === "fitness" && post.slug.length > 0);

    const pathMappings: readonly PathStep[] = [
        {
            stepNumber: "STEP 01 // BUILD THE FOUNDATION",
            title: fitnessArticles[0]?.title ?? "How to Build a Workout Habit That Outlasts Your Motivation",
            defaultTitle: "How to Build a Workout Habit That Outlasts Your Motivation",
            defaultDescription: fitnessArticles[0]?.description ?? "System description unavailable.",
        },
        {
            stepNumber: "STEP 02 // CREATE CONSISTENCY",
            title: fitnessArticles[1]?.title ?? "Fitness Consistency: Build Workout Discipline That Lasts",
            defaultTitle: "Fitness Consistency: Build Workout Discipline That Lasts",
            defaultDescription: fitnessArticles[1]?.description ?? "System description unavailable.",
        },
        {
            stepNumber: "STEP 03 // DEVELOP THE MINDSET",
            title: fitnessArticles[2]?.title ?? "Fitness Is Not About Time: Mindset, Discipline, and Consistency over Motivation",
            defaultTitle: "Fitness Is Not About Time: Mindset, Discipline, and Consistency over Motivation",
            defaultDescription: fitnessArticles[2]?.description ?? "System description unavailable.",
        },
        {
            stepNumber: "STEP 04 // REMOVE THE BARRIER",
            title: fitnessArticles[3]?.title ?? "Why People Watch Workout Videos but Never Actually Exercise",
            defaultTitle: "Why People Watch Workout Videos but Never Actually Exercise",
            defaultDescription: fitnessArticles[3]?.description ?? "System description unavailable.",
        },
    ];

    let jsonLdString = "[]";
    try {
        jsonLdString = JSON.stringify([
            {
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                "name": "Fitness Architecture & Evolution Systems",
                "description": "Build strength, mobility, endurance, and physical capability through structured training systems.",
                "url": "https://nomadlifexp.com/blog/category/fitness"
            },
            {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Blog",
                        "item": "https://nomadlifexp.com/blog"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Fitness",
                        "item": "https://nomadlifexp.com/blog/category/fitness"
                    }
                ]
            }
        ]);
    } catch {
        jsonLdString = "{}";
    }

    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden antialiased selection:bg-cyan-400 selection:text-black">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLdString }}
            />

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            <main className="relative z-10 max-w-7xl mx-auto px-6 py-32">
                <nav className="mb-14 flex gap-5 font-mono text-xs uppercase tracking-[0.3em]">
                    <Link href="/blog" className="text-neutral-500 hover:text-cyan-400 transition">
                        &larr; RETURN TO BLOG
                    </Link>
                </nav>

                <header className="mb-24 max-w-4xl">
                    <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400 mb-6">
                        NOMADLIFEXP // HUMAN EVOLUTION SYSTEM
                    </p>
                    <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight mb-6">
                        Fitness
                    </h1>
                    <p className="text-xl md:text-2xl font-bold uppercase tracking-wide text-white mb-6">
                        The Foundation of Physical Evolution &amp; Human Performance
                    </p>
                    <p className="text-neutral-400 font-mono leading-relaxed mb-4">
                        Fitness is not only about appearance.
                    </p>
                    <p className="text-neutral-400 font-mono leading-relaxed mb-4">
                        It is the development of strength, mobility, endurance, recovery, and physical capability through structured systems, sustainable habits, and intentional movement.
                    </p>
                    <p className="text-neutral-400 font-mono leading-relaxed">
                        A stronger body creates a stronger foundation for life.
                    </p>
                </header>

                <section className="mb-28">
                    <div className="max-w-3xl mb-12">
                        <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400 mb-2">
                            THE FITNESS EVOLUTION PATH
                        </p>
                        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">
                            A framework for building strength, movement quality, consistency, and lifelong physical capability.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {EVOLUTION_STEPS.map((step) => (
                            <div key={step.number} className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between">
                                <div>
                                    <span className="text-cyan-400 font-mono text-2xl font-bold mb-4 block">
                                        {step.number} • {step.title}
                                    </span>
                                    <p className="text-neutral-300 font-mono text-sm leading-relaxed mb-6">
                                        {step.description}
                                    </p>
                                </div>
                                <p className="text-neutral-500 font-mono text-xs pt-4 border-t border-neutral-900">
                                    {step.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-28">
                    <div className="max-w-3xl mb-12">
                        <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400 mb-2">
                            START YOUR FITNESS TRANSFORMATION PATH
                        </p>
                        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4">
                            Begin with the foundations. Build consistency. Develop physical capability.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {pathMappings.map((item, index) => {
                            const matchedPost = fitnessArticles[index];
                            const slug = matchedPost?.slug || "";
                            const description = matchedPost?.description || item.defaultDescription;

                            return (
                                <article key={item.stepNumber} className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between hover:border-cyan-500/50 transition">
                                    <div>
                                        <p className="text-cyan-400 font-mono text-xs uppercase tracking-[0.3em] mb-3">
                                            {item.stepNumber}
                                        </p>
                                        <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-neutral-400 font-mono text-sm mb-6 leading-relaxed">
                                            {description}
                                        </p>
                                    </div>
                                    {slug ? (
                                        <Link
                                            href={`/blog/posts/${slug}`}
                                            className="text-cyan-400 font-mono text-xs uppercase tracking-widest hover:text-cyan-300 transition"
                                        >
                                            EXPLORE SYSTEM &rarr;
                                        </Link>
                                    ) : (
                                        <span className="text-neutral-600 font-mono text-xs uppercase tracking-widest">
                                            [MODULE_PENDING]
                                        </span>
                                    )}
                                </article>
                            );
                        })}
                    </div>
                </section>

                <section className="mb-28">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-neutral-900 pb-6 gap-4">
                        <div>
                            <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400 mb-2">
                                FITNESS DATABASE
                            </p>
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                                Explore Fitness Transformation Systems
                            </h2>
                        </div>
                        <span className="font-mono text-xs text-neutral-500 uppercase tracking-[0.3em]">
                            {fitnessArticles.length} {fitnessArticles.length === 1 ? "ARTICLE" : "ARTICLES"}
                        </span>
                    </div>

                    {fitnessArticles.length === 0 ? (
                        <div className="border border-neutral-800 bg-neutral-950 p-8 text-neutral-400 font-mono text-sm">
                            [SYSTEM_STATUS] No Fitness Knowledge Nodes Available.
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 gap-6">
                            {fitnessArticles.map((post) => (
                                <article
                                    key={post.slug}
                                    className="border border-neutral-800 bg-neutral-950 p-8 hover:border-cyan-500/50 transition flex flex-col justify-between"
                                >
                                    <div>
                                        <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{post.title}</h3>
                                        <p className="text-neutral-400 font-mono text-sm mb-6 leading-relaxed">{post.description}</p>
                                    </div>
                                    <Link
                                        href={`/blog/posts/${post.slug}`}
                                        className="text-cyan-400 font-mono text-xs uppercase tracking-widest hover:text-cyan-300 transition"
                                    >
                                        READ FITNESS GUIDE &rarr;
                                    </Link>
                                </article>
                            ))}
                        </div>
                    )}
                </section>

                <section className="mb-28">
                    <div className="max-w-3xl mb-12">
                        <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400 mb-2">
                            THE NOMADLIFEXP FITNESS FRAMEWORK
                        </p>
                        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">
                            Four Elements That Create Physical Evolution
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {FRAMEWORK_ELEMENTS.map((el) => (
                            <div key={el.title} className="border border-neutral-800 bg-neutral-950 p-8">
                                <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-cyan-400">
                                    {el.title}
                                </h3>
                                <p className="text-neutral-400 font-mono text-sm leading-relaxed">
                                    {el.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-28">
                    <div className="max-w-3xl mb-12">
                        <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400 mb-2">
                            WHY FITNESS MATTERS
                        </p>
                        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">
                            The Cost of Inaction vs. The Power of Systems
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="border border-red-950/60 bg-neutral-950 p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50" />
                            <p className="text-xs font-mono uppercase tracking-[0.4em] text-red-400 mb-6">
                                WITHOUT IT
                            </p>
                            <ul className="space-y-4 font-mono text-sm text-neutral-300">
                                {WITHOUT_IT_POINTS.map((pt, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="text-red-500 font-bold">&times;</span>
                                        <span>{pt}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="border border-cyan-950/60 bg-neutral-950 p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400" />
                            <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400 mb-6">
                                WITH IT
                            </p>
                            <ul className="space-y-4 font-mono text-sm text-neutral-300">
                                {WITH_IT_POINTS.map((pt, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="text-cyan-400 font-bold">&check;</span>
                                        <span>{pt}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-28">
                    <div className="max-w-3xl mb-12">
                        <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400 mb-2">
                            FITNESS SYSTEM FAQ
                        </p>
                        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">
                            Frequently Asked Questions About the System
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {FAQ_ITEMS.map((faq, i) => (
                            <div key={i} className="border border-neutral-800 bg-neutral-950 p-8">
                                <h3 className="text-lg font-bold uppercase tracking-tight mb-3 text-white">
                                    {faq.question}
                                </h3>
                                <p className="text-neutral-400 font-mono text-sm leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="border border-neutral-800 bg-neutral-950 p-10 md:p-16 text-center max-w-4xl mx-auto mb-28">
                    <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400 mb-4">
                        START YOUR EVOLUTION
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
                        Build Your Physical Operating System
                    </h2>
                    <p className="text-neutral-400 font-mono text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8">
                        Fitness is not a temporary challenge. It is a lifelong operating system for building strength, confidence, resilience, and physical independence.
                    </p>
                    <Link
                        href="/start-here"
                        className="inline-block px-8 py-4 bg-cyan-400 text-black font-mono font-bold uppercase tracking-[0.2em] text-xs hover:bg-cyan-300 transition shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                    >
                        START HERE &rarr;
                    </Link>
                </section>

                <footer className="border-t border-neutral-900 pt-12">
                    <p className="text-xs font-mono uppercase tracking-[0.4em] text-neutral-500 mb-8">
                        CONTINUE YOUR HUMAN EVOLUTION
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {CROSS_NODES.map((node) => (
                            <Link
                                key={node.title}
                                href={node.href}
                                className="border border-neutral-800 bg-neutral-950 p-6 hover:border-cyan-500/50 transition group block"
                            >
                                <h3 className="text-lg font-bold uppercase tracking-tight mb-2 group-hover:text-cyan-400 transition">
                                    {node.title} &rarr;
                                </h3>
                                <p className="text-neutral-400 font-mono text-xs leading-relaxed">
                                    {node.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </footer>
            </main>
        </div>
    );
}