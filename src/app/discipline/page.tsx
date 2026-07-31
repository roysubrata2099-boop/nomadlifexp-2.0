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
    title: "Discipline & Autonomy Architecture | NomadLifeXP",
    description:
        "Discipline is an engineered execution system designed to create long-term autonomy.",
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
    const disciplineArticles = getDisciplinePosts();

    return (
        <main className="min-h-screen bg-black text-white antialiased">
            <div className="relative max-w-7xl mx-auto px-6 py-24">

                {/* Visual Background Accent */}
                <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

                {/* Navigation Layer */}
                <nav className="relative z-10 flex gap-4 mb-16 pb-6 border-b border-neutral-900 font-mono text-xs uppercase tracking-[0.3em]">
                    <Link
                        href="/"
                        className="text-neutral-500 hover:text-cyan-400 transition-colors"
                    >
                        &larr; RETURN_TO_HOME
                    </Link>

                    <span className="text-neutral-800">/</span>

                    <Link
                        href="/blog"
                        className="text-neutral-500 hover:text-cyan-400 transition-colors"
                    >
                        RETURN_TO_DIRECTORY
                    </Link>
                </nav>

                {/* Page Header */}
                <header className="relative z-10 mb-24">
                    <p className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        NomadLifeXP // Human Evolution System
                    </p>

                    <h1 className="text-5xl md:text-7xl font-black uppercase leading-none">
                        THE DISCIPLINE
                        <br />
                        <span className="text-cyan-400">SYSTEM MATRIX</span>
                    </h1>

                    <p className="mt-8 max-w-3xl text-neutral-400 font-mono leading-relaxed">
                        Discipline is not punishment. It is not restriction. It is the ability to direct your attention, control your actions, and consistently move toward the person you choose to become.
                    </p>
                </header>

                {/* The Discipline Evolution Path */}
                <section className="mb-24">
                    <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-neutral-500">
                        // THE DISCIPLINE EVOLUTION PATH
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

                {/* Theoretical Foundations Grid */}
                <section className="mb-24">
                    <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-neutral-500">
                        // THEORETICAL FOUNDATIONS GRID
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                id: "01",
                                title: "01 // STRUCTURE",
                                text: "Build systems that remove dependence on motivation."
                            },
                            {
                                id: "02",
                                title: "02 // VARIABLE CONTROL",
                                text: "Reduce friction and protect attention from distraction."
                            },
                            {
                                id: "03",
                                title: "03 // EXECUTION LOOP",
                                text: "Create repeatable behavioural systems."
                            },
                        ].map((module) => (
                            <div
                                key={module.id}
                                className="border border-neutral-800 bg-neutral-950 p-8"
                            >
                                <h3 className="mb-4 text-cyan-400 font-mono text-xs">
                                    {module.title}
                                </h3>
                                <p className="text-sm text-neutral-400">
                                    {module.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* The NomadLifeXP Discipline Framework */}
                <section className="mb-24">
                    <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-neutral-500">
                        // THE NOMADLIFEXP DISCIPLINE FRAMEWORK
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

                {/* Active Knowledge Modules Database */}
                <section className="mb-24">
                    <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.4em] text-neutral-500">
                        // ACTIVE DATABASE KNOWLEDGE MODULES
                    </h2>

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

                {/* Why Discipline Matters Section */}
                <section className="mb-24 border border-neutral-800 bg-neutral-950 p-8 md:p-12">
                    <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        // WHY DISCIPLINE MATTERS
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

                {/* Cross-Connect Alternative Modules */}
                <footer className="mt-24 border-t border-neutral-900 pt-10">
                    <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-neutral-500">
                        // CROSS-CONNECT ALTERNATIVE NODES
                    </h2>

                    <div className="flex flex-wrap gap-8 font-mono text-xs uppercase">
                        <Link
                            href="/fitness"
                            className="text-neutral-400 hover:text-white transition-colors"
                        >
                            fitness &rarr;
                        </Link>

                        <Link
                            href="/yoga"
                            className="text-neutral-400 hover:text-white transition-colors"
                        >
                            yoga &rarr;
                        </Link>

                        <Link
                            href="/mindset"
                            className="text-neutral-400 hover:text-white transition-colors"
                        >
                            mindset &rarr;
                        </Link>
                    </div>
                </footer>

            </div>
        </main>
    );
}