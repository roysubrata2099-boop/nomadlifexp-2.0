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
    title: "Yoga Systems: Somatic Intelligence & Attention Control | NomadLifeXP",
    description:
        "Cultivate somatic intelligence, attention control protocols, and neurological stability through the NomadLifeXP Yoga System.",
    alternates: {
        canonical: "https://www.nomadlifexp.com/yoga",
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
                    const rawCategory = typeof post.category === "string" ? post.category : "";
                    const rawTitle = typeof post.title === "string" ? post.title : "";

                    const category = normalizeCategory(rawCategory, rawTitle);
                    return safeSlug(category) === "yoga";
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
            description: "Understand the real purpose of Yoga beyond stretching. Learn how inversions, posture, balance, and awareness create the foundation for physical and mental control under pressure.",
            slug: "what-happens-when-you-try-forearm-stand-yoga-for-focus-and-confidence",
            step: "STEP 01",
            subtitle: "THE FOUNDATION"
        },
        {
            title: "It’s Never Too Late to Transform Your Body and Mind with Forward Bending Yoga",
            description: "Forward bending practices teach surrender, posterior chain mobility, nervous system calming, and the ability to release physical and emotional tension.",
            slug: "its-never-too-late-to-transform-your-body-and-mind-with-forward-bending-yoga",
            step: "STEP 02",
            subtitle: "THE REGULATION SYSTEM"
        },
        {
            title: "What Happens in Your Mind When Everything Becomes Still",
            description: "Stillness is the training ground for attention. Learn how meditation, breath awareness, and reduced external stimulation create mental stability.",
            slug: "what-happens-in-your-mind-when-everything-becomes-still",
            step: "STEP 03",
            subtitle: "THE MOBILITY SYSTEM"
        }
    ];

    const validFeaturedYogaArticles = featuredYogaArticles.filter(article =>
        yogaArticles.some(post => post.slug === article.slug)
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

                    <span className="text-neutral-400">yoga</span>
                </nav>

                {/* Page Header */}
                <header className="relative z-10 mb-24">
                    <p className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        NOMADLIFEXP // SOMATIC INTELLIGENCE LAYER
                    </p>

                    <h1 className="text-5xl md:text-7xl font-black uppercase leading-none">
                        Yoga
                    </h1>

                    <p className="mt-6 text-xl font-medium text-neutral-200">
                        The Somatic Intelligence Architecture
                    </p>

                    <p className="mt-4 max-w-3xl text-neutral-400 font-mono leading-relaxed">
                        Yoga is not flexibility training. It is a system for developing internal awareness, breath control, nervous system regulation, mobility, and conscious movement.
                    </p>

                    <p className="mt-4 max-w-3xl text-neutral-400 font-mono leading-relaxed">
                        While Discipline teaches you to control your actions and Fitness teaches you to control your physical capabilities, Yoga teaches you to control the internal environment from which all action emerges.
                    </p>
                </header>

                {/* Theoretical Foundations Grid / Evolution Path */}
                <section className="mb-24">
                    <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        THE YOGA EVOLUTION PATH
                    </h2>
                    <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                        A framework for building internal awareness, neurological control, and somatic autonomy.
                    </p>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            {
                                id: "01",
                                title: "01 — Awareness",
                                subtext: "Develop Body Intelligence",
                                text: "Learn to recognize breathing patterns, muscular tension, posture, emotions, and unconscious physical habits."
                            },
                            {
                                id: "02",
                                title: "02 — Regulation",
                                subtext: "Control Your Nervous System",
                                text: "Develop the ability to shift from stress, anxiety, and reaction into calm focus and control."
                            },
                            {
                                id: "03",
                                title: "03 — Integration",
                                subtext: "Connect Mind and Movement",
                                text: "Every posture, breath, and transition becomes an opportunity to build coordination between intention and physical action."
                            },
                            {
                                id: "04",
                                title: "04 — Mastery",
                                subtext: "Achieve Somatic Autonomy",
                                text: "Maintain awareness, stability, and control regardless of environment, pressure, or uncertainty."
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

                {/* Structured Recommended Path Section (Validated) */}
                {validFeaturedYogaArticles.length > 0 && (
                    <section className="mb-24">
                        <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                            START YOUR YOGA TRANSFORMATION
                        </h2>
                        <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                            New to the somatic system? Begin here. Follow the recommended path:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {validFeaturedYogaArticles.map((item) => (
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

                {/* The Yoga System Architecture Section */}
                <section className="mb-24 border border-neutral-900 bg-neutral-950/60 p-8 md:p-12">
                    <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        THE YOGA SYSTEM ARCHITECTURE
                    </h2>
                    <p className="mb-6 text-xl font-bold uppercase tracking-wide">
                        How the Protocols Interact
                    </p>
                    <p className="text-sm text-neutral-400 font-mono leading-relaxed mb-6">
                        The NomadLifeXP Yoga System is built as an interconnected feedback loop. Breath regulation feeds somatic awareness, which unlocks precision in movement intelligence, ultimately culminating in complete mental stillness.
                    </p>
                    <div className="grid sm:grid-cols-4 gap-4 font-mono text-xs text-cyan-400">
                        <div className="border border-neutral-800 bg-black p-4 text-center">BREATH &rarr; AWARENESS</div>
                        <div className="border border-neutral-800 bg-black p-4 text-center">AWARENESS &rarr; MOVEMENT</div>
                        <div className="border border-neutral-800 bg-black p-4 text-center">MOVEMENT &rarr; STILLNESS</div>
                        <div className="border border-neutral-800 bg-black p-4 text-center">STILLNESS &rarr; AUTONOMY</div>
                    </div>
                </section>

                {/* Active Knowledge Modules Database */}
                <section className="mb-24">
                    <div className="flex justify-between items-end mb-8 border-b border-neutral-900 pb-4">
                        <div>
                            <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400 mb-1">
                                YOGA DATABASE
                            </h2>
                            <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
                                Explore Somatic Intelligence & Attention Control Systems
                            </p>
                        </div>
                        <span className="font-mono text-xs text-neutral-400">
                            ACTIVE KNOWLEDGE NODES: {yogaArticles.length}
                        </span>
                    </div>

                    {yogaArticles.length > 0 ? (
                        <div className="grid md:grid-cols-2 gap-6">
                            {yogaArticles.map((post) => (
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
                        <p className="text-neutral-500 font-mono text-sm">No yoga nodes available currently.</p>
                    )}
                </section>

                {/* The NomadLifeXP Yoga Framework Matrix */}
                <section className="mb-24 border border-neutral-900 bg-neutral-950/60 p-8 md:p-12">
                    <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        THE NOMADLIFEXP YOGA FRAMEWORK
                    </h2>
                    <p className="mb-10 text-xl font-bold uppercase tracking-wide">
                        Four Pillars of Somatic Mastery
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 font-mono">
                        <div className="border-l border-cyan-500/40 pl-6">
                            <h3 className="text-white font-bold uppercase mb-2">Breath Regulation</h3>
                            <p className="text-sm text-neutral-400 leading-relaxed">Your breath is the fastest access point to your internal state. Develop control over stress response, focus, recovery, and emotional regulation.</p>
                        </div>
                        <div className="border-l border-cyan-500/40 pl-6">
                            <h3 className="text-white font-bold uppercase mb-2">Somatic Awareness</h3>
                            <p className="text-sm text-neutral-400 leading-relaxed">Attention creates intelligence. Learn to observe your body, thoughts, emotions, and reactions before acting.</p>
                        </div>
                        <div className="border-l border-cyan-500/40 pl-6">
                            <h3 className="text-white font-bold uppercase mb-2">Movement Intelligence</h3>
                            <p className="text-sm text-neutral-400 leading-relaxed">Movement freedom creates physical independence. Build usable range of motion, joint health, and lifelong movement capability.</p>
                        </div>
                        <div className="border-l border-cyan-500/40 pl-6">
                            <h3 className="text-white font-bold uppercase mb-2">Mental Stillness</h3>
                            <p className="text-sm text-neutral-400 leading-relaxed">Stillness creates control. Train the ability to remain calm and focused in chaotic environments.</p>
                        </div>
                    </div>
                </section>

                {/* Why Yoga Matters Matrix */}
                <section className="mb-24 grid md:grid-cols-2 gap-8">
                    <div className="border border-red-950/50 bg-neutral-950 p-8">
                        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-red-400 mb-6">WHY YOGA MATTERS // WITHOUT IT:</h2>
                        <ul className="space-y-3 font-mono text-sm text-neutral-400 list-disc list-inside">
                            <li>The body accumulates unconscious tension.</li>
                            <li>Stress responses remain uncontrolled.</li>
                            <li>Movement becomes inefficient and awareness decreases.</li>
                        </ul>
                    </div>
                    <div className="border border-cyan-950/50 bg-neutral-950 p-8">
                        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400 mb-6">WHY YOGA MATTERS // WITH IT:</h2>
                        <ul className="space-y-3 font-mono text-sm text-neutral-400 list-disc list-inside">
                            <li>Breathing becomes intentional and the nervous system adapts.</li>
                            <li>Movement becomes efficient and focus improves.</li>
                            <li>Mind and body operate as one unified system.</li>
                        </ul>
                    </div>
                </section>

                {/* Nomad Advantage Matrix */}
                <section className="mb-24 border border-cyan-900/40 bg-neutral-950 p-8 md:p-12">
                    <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        THE NOMADLIFEXP SOMATIC ADVANTAGE
                    </h2>
                    <p className="mb-6 text-xl font-bold uppercase tracking-wide">
                        Why Nomads Need Yoga
                    </p>
                    <p className="text-sm text-neutral-400 font-mono mb-6">
                        Travel creates physical and neurological instability:
                    </p>
                    <ul className="space-y-2 font-mono text-sm text-neutral-400 list-disc list-inside mb-6">
                        <li>New environments</li>
                        <li>Irregular sleep</li>
                        <li>Stress accumulation</li>
                        <li>Reduced recovery</li>
                        <li>Limited equipment</li>
                    </ul>
                    <p className="text-sm text-cyan-400 font-mono font-semibold">
                        Yoga becomes the portable regulation system. Your body becomes your training environment.
                    </p>
                </section>

                {/* Call To Action Box */}
                <section className="mb-24 border border-cyan-900/40 bg-neutral-950 p-10 text-center">
                    <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400 mb-3">
                        MASTER YOUR INTERNAL OPERATING SYSTEM
                    </h2>
                    <p className="text-2xl md:text-3xl font-black uppercase tracking-wide mb-4">
                        Your body is not just a machine. It is an information system.
                    </p>
                    <p className="text-neutral-400 font-mono text-sm max-w-xl mx-auto mb-8">
                        Learn to regulate your breath, control your nervous system, and move with conscious intention.
                    </p>
                    <Link
                        href="/blog"
                        className="inline-block bg-cyan-500 text-black font-mono text-xs uppercase tracking-[0.3em] px-8 py-4 font-bold hover:bg-cyan-400 transition-colors"
                    >
                        START YOUR EVOLUTION &rarr;
                    </Link>
                </section>

                {/* Cross-Connect Alternative Modules */}
                <footer className="border-t border-neutral-900 pt-10">
                    <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-neutral-500">
                        CONTINUE YOUR HUMAN EVOLUTION
                    </h2>
                    <p className="mb-6 font-mono text-xs text-neutral-600 uppercase">
                        Yoga is your somatic foundation. Continue developing the other pillars:
                    </p>

                    <div className="grid sm:grid-cols-3 gap-6 font-mono text-xs uppercase">
                        <Link
                            href="/blog/category/discipline"
                            className="border border-neutral-900 bg-neutral-950 p-6 text-neutral-300 hover:border-cyan-500 transition-colors block"
                        >
                            <span className="block text-white font-bold mb-1">Discipline</span>
                            <span className="text-neutral-500 text-[10px] lowercase block mb-3">Master attention, habits, and execution.</span>
                            <span className="text-cyan-400">EXPLORE DISCIPLINE &rarr;</span>
                        </Link>

                        <Link
                            href="/blog/category/fitness"
                            className="border border-neutral-900 bg-neutral-950 p-6 text-neutral-300 hover:border-cyan-500 transition-colors block"
                        >
                            <span className="block text-white font-bold mb-1">Fitness</span>
                            <span className="text-neutral-500 text-[10px] lowercase block mb-3">Build strength, resilience, and physical autonomy.</span>
                            <span className="text-cyan-400">EXPLORE FITNESS &rarr;</span>
                        </Link>

                        <Link
                            href="/blog/category/mindset"
                            className="border border-neutral-900 bg-neutral-950 p-6 text-neutral-300 hover:border-cyan-500 transition-colors block"
                        >
                            <span className="block text-white font-bold mb-1">Mindset</span>
                            <span className="text-neutral-500 text-[10px] lowercase block mb-3">Develop clarity, emotional control, and decision-making.</span>
                            <span className="text-cyan-400">EXPLORE MINDSET &rarr;</span>
                        </Link>
                    </div>
                </footer>

            </div>
        </main>
    );
}