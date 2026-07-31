// src/app/discipline/page.tsx

import { getAllPosts } from "@/lib/markdown";
import { normalizeCategory } from "@/lib/taxonomy";
import type { Metadata } from "next";
import Link from "next/link";

interface SystemPost {
    slug: string;
    title: string;
    description: string;
}

export const metadata: Metadata = {
    title: "Discipline | The Foundation of Personal Evolution | NomadLifeXP",
    description:
        "Discipline is not punishment. It is not restriction. Discover how attention, habits, consistency, and self-control work together to rebuild your life.",
    alternates: {
        canonical: "https://nomadlifexp.com/discipline",
    },
};

function getDisciplinePosts(): SystemPost[] {
    try {
        const posts = getAllPosts();

        if (!Array.isArray(posts)) {
            return [];
        }

        return posts
            .filter((post) => {
                if (!post) {
                    return false;
                }

                const category = normalizeCategory(
                    post.category ?? "",
                    post.title ?? ""
                );

                return category === "discipline";
            })
            .map((post) => ({
                slug: String(post.slug ?? "").trim(),
                title: String(post.title ?? "").trim() || "Untitled Knowledge Node",
                description: String(post.description ?? "").trim() || "System description unavailable.",
            }))
            .filter((post) => post.slug.length > 0);
    } catch {
        return [];
    }
}

export default function DisciplinePage() {
    let disciplineArticles: SystemPost[] = [];
    try {
        disciplineArticles = getDisciplinePosts();
    } catch {
        disciplineArticles = [];
    }

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

                    <span className="text-cyan-400">
                        discipline
                    </span>
                </nav>

                {/* Page Header */}
                <header className="relative z-10 mb-24">
                    <p className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        NOMADLIFEXP // HUMAN EVOLUTION SYSTEM
                    </p>

                    <h1 className="text-5xl md:text-7xl font-black uppercase leading-none">
                        Discipline
                        <br />
                        <span className="text-cyan-400">The Foundation of Personal Evolution</span>
                    </h1>

                    <p className="mt-8 max-w-3xl text-neutral-400 font-mono leading-relaxed">
                        Discipline is not punishment. It is not restriction. It is the ability to direct your attention, control your actions, and consistently move toward the person you choose to become.
                    </p>
                    <p className="mt-4 max-w-3xl text-neutral-400 font-mono leading-relaxed">
                        In a world designed to constantly distract you, discipline becomes the foundation for freedom. The NomadLifeXP Discipline System explores how attention, habits, consistency, and self-control work together to help you rebuild your life from the inside out.
                    </p>
                </header>

                {/* The Discipline Evolution Path */}
                <section className="mb-24">
                    <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-neutral-500">
                        THE DISCIPLINE EVOLUTION PATH
                    </h2>
                    <p className="mb-10 text-sm text-neutral-400 font-mono">
                        A framework for rebuilding control, consistency, and self-mastery.
                    </p>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            {
                                id: "01",
                                title: "01 — Awareness",
                                text: "Understand your patterns, distractions, and behaviors. Before you can change your actions, you must understand what controls them."
                            },
                            {
                                id: "02",
                                title: "02 — Control",
                                text: "Regain control over your attention, impulses, and decisions. Discipline begins when you stop reacting and start choosing."
                            },
                            {
                                id: "03",
                                title: "03 — Consistency",
                                text: "Build systems that continue working even when motivation disappears. Small actions repeated over time create lasting transformation."
                            },
                            {
                                id: "04",
                                title: "04 — Mastery",
                                text: "Become someone who naturally acts according to your values. True discipline is not something you force. It becomes part of who you are."
                            },
                        ].map((module) => (
                            <div
                                key={module.id}
                                className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between"
                            >
                                <div>
                                    <h3 className="mb-4 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                                        {module.title}
                                    </h3>
                                    <p className="text-sm text-neutral-400 leading-relaxed">
                                        {module.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Start Your Discipline Transformation */}
                <section className="mb-24">
                    <div className="mb-8">
                        <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-neutral-500">
                            START YOUR DISCIPLINE TRANSFORMATION
                        </h2>
                        <p className="text-sm text-neutral-400 font-mono mt-2">
                            New to discipline? Begin here. Follow the recommended path:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                step: "STEP 01",
                                title: "Discipline Creates Freedom",
                                subtitle: "The foundation principle",
                                desc: "Discipline is not restriction. It is control over your attention, habits, and decisions. Learn why discipline creates true freedom by helping you master yourself and build a life with clarity, consistency, and purpose.",
                                slug: "discipline-creates-freedom"
                            },
                            {
                                step: "STEP 02",
                                title: "Self Discipline: Why You Lack It and How to Build It for Good",
                                subtitle: "Understand the problem",
                                desc: "Self discipline is the ability to control your actions based on long-term goals instead of short-term feelings. Discover why most people do not lack motivation—they lack systems that protect their attention from constant distraction.",
                                slug: "self-discipline-why-you-lack-it-and-how-to-build-it-for-good"
                            },
                            {
                                step: "STEP 03",
                                title: "Self-Discipline Guide: Reclaim Your Attention, Rebuild Your Life",
                                subtitle: "Build the system",
                                desc: "Most people believe they lack discipline. They call themselves lazy, inconsistent, or unmotivated. But the deeper problem is often attention. Learn how to rebuild focus, strengthen habits, and create a more intentional life.",
                                slug: "self-discipline-guide-reclaim-your-attention-rebuild-your-life"
                            },
                            {
                                step: "STEP 04",
                                title: "Why You Procrastinate and How to Stop It Permanently",
                                subtitle: "Remove the barrier",
                                desc: "Procrastination is not simply a time-management problem. It is often connected to emotions, avoidance, and internal resistance. Understand the psychology behind procrastination and learn how to break the cycle.",
                                slug: "why-you-procrastinate-and-how-to-stop-it-permanently"
                            }
                        ].map((item, idx) => (
                            <article key={idx} className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between">
                                <div>
                                    <span className="text-cyan-400 font-mono text-xs font-bold tracking-widest">{item.step}</span>
                                    <h3 className="text-xl font-bold uppercase mt-2">{item.title}</h3>
                                    <p className="text-xs font-mono text-neutral-500 uppercase mt-1 tracking-wider">{item.subtitle}</p>
                                    <p className="mt-4 text-neutral-400 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                                <Link
                                    href={`/blog/posts/${item.slug}`}
                                    className="inline-block mt-6 text-cyan-400 text-xs font-mono uppercase tracking-wider hover:underline"
                                >
                                    READ ARTICLE &rarr;
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Active Knowledge Modules Database / All Discipline Insights */}
                <section className="mb-24">
                    <div className="mb-8">
                        <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-neutral-500">
                            DISCIPLINE DATABASE
                        </h2>
                        <p className="text-sm text-neutral-400 font-mono mt-2">
                            Explore Discipline Transformation Systems ({disciplineArticles.length} ARTICLES)
                        </p>
                    </div>

                    {disciplineArticles.length === 0 ? (
                        <div className="border border-neutral-800 bg-neutral-950 p-8">
                            <p className="text-neutral-400 font-mono text-sm">
                                [SYSTEM_INFO] No Discipline Nodes Found.
                            </p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 gap-6">
                            {disciplineArticles.map((post) => (
                                <article
                                    key={post.slug}
                                    className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between"
                                >
                                    <div>
                                        <h3 className="text-lg font-bold uppercase">
                                            {post.title}
                                        </h3>
                                        <p className="mt-4 text-neutral-400 text-sm leading-relaxed">
                                            {post.description}
                                        </p>
                                    </div>
                                    <Link
                                        href={`/blog/posts/${post.slug}`}
                                        className="inline-block mt-6 text-cyan-400 text-xs font-mono uppercase tracking-wider hover:underline"
                                    >
                                        READ ARTICLE &rarr;
                                    </Link>
                                </article>
                            ))}
                        </div>
                    )}
                </section>

                {/* The NomadLifeXP Discipline Framework */}
                <section className="mb-24">
                    <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-neutral-500">
                        THE NOMADLIFEXP DISCIPLINE FRAMEWORK
                    </h2>
                    <p className="mb-10 text-sm text-neutral-400 font-mono">
                        Four Elements That Create Self-Mastery
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Attention",
                                text: "Your attention determines your direction. Learn to protect your focus from distraction and reclaim control over your mental energy."
                            },
                            {
                                title: "Habits",
                                text: "Your daily actions shape your future identity. Build systems that make positive behavior easier and more consistent."
                            },
                            {
                                title: "Action",
                                text: "Progress comes from execution. Discipline transforms intentions into repeated action."
                            },
                            {
                                title: "Identity",
                                text: "The highest level of discipline is becoming someone who naturally follows through. Your habits become your character."
                            },
                        ].map((element, idx) => (
                            <div key={idx} className="border border-neutral-800 bg-neutral-950 p-8">
                                <h3 className="text-lg font-bold uppercase text-white mb-4">
                                    {element.title}
                                </h3>
                                <p className="text-sm text-neutral-400 leading-relaxed">
                                    {element.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why Discipline Matters Section */}
                <section className="mb-24 border border-neutral-800 bg-neutral-950 p-8 md:p-12">
                    <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        WHY DISCIPLINE MATTERS
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 font-mono text-sm">
                        <div className="space-y-4">
                            <p className="text-neutral-500 uppercase tracking-wider text-xs font-bold">Without discipline:</p>
                            <ul className="space-y-3 text-neutral-400">
                                <li className="flex items-start gap-3">
                                    <span className="text-neutral-600">—</span> Goals remain unfinished.
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-neutral-600">—</span> Knowledge remains unused.
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-neutral-600">—</span> Potential remains unrealized.
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <p className="text-cyan-400 uppercase tracking-wider text-xs font-bold">With discipline:</p>
                            <ul className="space-y-3 text-neutral-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-cyan-500">+</span> Attention becomes focused.
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-cyan-500">+</span> Actions become intentional.
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-cyan-500">+</span> Progress becomes consistent.
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-cyan-500">+</span> Personal transformation becomes possible.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Continue Your Human Evolution */}
                <section className="mb-24">
                    <div className="mb-8">
                        <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-neutral-500">
                            CONTINUE YOUR HUMAN EVOLUTION
                        </h2>
                        <p className="text-sm text-neutral-400 font-mono mt-2">
                            Discipline is the foundation. Continue developing the other pillars:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Mindset",
                                text: "Develop mental clarity, resilience, and stronger decision-making.",
                                href: "/mindset"
                            },
                            {
                                title: "Fitness",
                                text: "Build physical strength, movement, and consistency.",
                                href: "/fitness"
                            },
                            {
                                title: "Yoga",
                                text: "Develop balance, awareness, recovery, and mind-body connection.",
                                href: "/yoga"
                            }
                        ].map((pillar, idx) => (
                            <div key={idx} className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-bold uppercase text-white mb-2">{pillar.title}</h3>
                                    <p className="text-sm text-neutral-400 leading-relaxed">{pillar.text}</p>
                                </div>
                                <Link
                                    href={pillar.href}
                                    className="inline-block mt-6 text-cyan-400 text-xs font-mono uppercase tracking-wider hover:underline"
                                >
                                    EXPLORE {pillar.title.toUpperCase()} &rarr;
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Start Your Evolution Callout */}
                <section className="border border-cyan-500/20 bg-cyan-950/10 p-8 md:p-12 text-center">
                    <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400 mb-2">
                        START YOUR EVOLUTION
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">
                        Build Your Personal Operating System
                    </h3>
                    <p className="text-neutral-400 max-w-2xl mx-auto font-mono text-sm leading-relaxed mb-8">
                        Discipline is where transformation begins. Create the systems that allow your mind, body, and life to evolve.
                    </p>
                    <Link
                        href="/blog"
                        className="inline-block bg-cyan-500 text-black font-mono text-xs uppercase font-bold tracking-widest px-8 py-4 hover:bg-cyan-400 transition-colors"
                    >
                        START HERE &rarr;
                    </Link>
                </section>

            </div>
        </main>
    );
}