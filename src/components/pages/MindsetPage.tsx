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
    title: "Mindset Systems: Cognitive Architecture & Mental Resilience | NomadLifeXP",
    description:
        "Deconstruct subconscious programming, build psychological systems, and engineer cognitive resilience through the NomadLifeXP Mindset System.",
    alternates: {
        canonical: "https://www.nomadlifexp.com/mindset",
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
                    const rawCategory = typeof post.category === "string" ? post.category : "";
                    const rawTitle = typeof post.title === "string" ? post.title : "";

                    const category = normalizeCategory(rawCategory, rawTitle);
                    return safeSlug(category) === "mindset";
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

export default function MindsetPage() {
    let mindsetArticles: SystemPost[] = [];

    try {
        mindsetArticles = getMindsetPosts();
    } catch {
        mindsetArticles = [];
    }

    const featuredMindsetArticles = [
        {
            title: "Mental Clarity: How to Stop Overthinking and Improve Focus",
            description: "Remove unnecessary mental noise and create a cleaner cognitive environment.",
            slug: "mental-clarity-how-to-stop-overthinking-and-improve-focus",
            step: "STEP 01",
            subtitle: "INFORMATION CONTROL"
        },
        {
            title: "Can You Rebuild Your Attention Span After Years of Digital Distraction?",
            description: "Train your ability to enter deep focus and protect your attention from modern distractions.",
            slug: "can-you-rebuild-your-attention-span-after-years-of-digital-distraction",
            step: "STEP 02",
            subtitle: "ATTENTION REBUILDING"
        },
        {
            title: "The Reason You Can't Focus Even When You Try Hard",
            description: "Understand mental overload, attention fragmentation, and hidden barriers affecting execution.",
            slug: "the-reason-you-cant-focus-even-when-you-try-hard",
            step: "STEP 03",
            subtitle: "COGNITIVE DIAGNOSIS"
        },
        {
            title: "You Are Not Stuck Because You Lack Answers",
            description: "Discover how repeated thoughts and patterns shape your current identity.",
            slug: "you-are-not-stuck-because-you-lack-answers",
            step: "STEP 04",
            subtitle: "IDENTITY ARCHITECTURE"
        }
    ];

    const validFeaturedMindsetArticles = featuredMindsetArticles.filter(article =>
        mindsetArticles.some(post => post.slug === article.slug)
    );

    const jsonLdData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": "https://www.nomadlifexp.com/mindset#webpage",
                "url": "https://www.nomadlifexp.com/mindset",
                "name": "NomadLifeXP Mindset System",
                "description": "Cognitive architecture and psychological engineering systems for mental resilience.",
                "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://www.nomadlifexp.com/#website",
                    "name": "NomadLifeXP",
                    "url": "https://www.nomadlifexp.com/"
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.nomadlifexp.com/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Mindset",
                        "item": "https://www.nomadlifexp.com/mindset"
                    }
                ]
            },
            {
                "@type": "Organization",
                "@id": "https://www.nomadlifexp.com/#organization",
                "name": "NomadLifeXP",
                "url": "https://www.nomadlifexp.com/",
                "logo": "https://www.nomadlifexp.com/logo.png"
            }
        ]
    };

    return (
        <main className="min-h-screen bg-black text-white antialiased">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
            />

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

                    <span className="text-neutral-400">mindset</span>
                </nav>

                {/* Page Header */}
                <header className="relative z-10 mb-24">
                    <p className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        NOMADLIFEXP // COGNITIVE OPERATING LAYER
                    </p>

                    <h1 className="text-5xl md:text-7xl font-black uppercase leading-none">
                        The Mindset
                    </h1>

                    <p className="mt-6 text-xl font-medium text-neutral-200">
                        The Cognitive Operating System
                    </p>

                    <p className="mt-4 max-w-3xl text-neutral-400 font-mono leading-relaxed">
                        Your mind is not a fixed identity. It is an adaptive system shaped by information, attention, environment, and repeated decisions.
                    </p>

                    <p className="mt-4 max-w-3xl text-neutral-400 font-mono leading-relaxed">
                        While Discipline controls what you do, Fitness controls what your body can do, and Yoga controls your internal state, Mindset controls the interpretation system behind every action.
                    </p>
                </header>

                {/* Theoretical Foundations Grid / Evolution Path */}
                <section className="mb-24">
                    <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        THE MINDSET EVOLUTION PATH
                    </h2>
                    <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                        A framework for building cognitive mastery, mental resilience, and intentional identity architecture.
                    </p>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            {
                                id: "01",
                                title: "01 — Awareness",
                                subtext: "Recognize Unconscious Patterns",
                                text: "Recognize unconscious thought patterns, automatic emotional reactions, limiting beliefs, and recurring loops."
                            },
                            {
                                id: "02",
                                title: "02 — Control",
                                subtext: "Manage Attention and Reactions",
                                text: "Manage attention, emotions, and responses. Transition from external reactivity to internal sovereignty."
                            },
                            {
                                id: "03",
                                title: "03 — Reprogramming",
                                subtext: "Rebuild Mental Frameworks",
                                text: "Replace limiting frameworks with intentional beliefs, constructive mental models, and robust cognitive architecture."
                            },
                            {
                                id: "04",
                                title: "04 — Execution",
                                subtext: "Convert Clarity Into Action",
                                text: "Convert clarity into consistent, high-leverage execution. Align daily decisions with your long-term vision."
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
                {validFeaturedMindsetArticles.length > 0 && (
                    <section className="mb-24">
                        <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                            START YOUR MINDSET TRANSFORMATION
                        </h2>
                        <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                            New to the cognitive system? Begin here. Follow the recommended path:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {validFeaturedMindsetArticles.map((item) => (
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
                                        OPEN ARTICLE &rarr;
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Mission Statement Section */}
                <section className="mb-24 border border-cyan-900/40 bg-neutral-950 p-8 md:p-12 text-center">
                    <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        THE PURPOSE OF THIS SYSTEM
                    </h2>
                    <p className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-6">
                        The modern world competes for your attention.
                    </p>
                    <p className="text-sm text-neutral-400 font-mono max-w-2xl mx-auto leading-relaxed">
                        The Mindset System exists to help you regain control over perception, attention, and identity.
                    </p>
                </section>

                {/* The Mindset System Architecture Diagram Section */}
                <section className="mb-24 border border-neutral-900 bg-neutral-950/60 p-8 md:p-12">
                    <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        THE MINDSET SYSTEM ARCHITECTURE
                    </h2>
                    <p className="mb-6 text-xl font-bold uppercase tracking-wide">
                        The Cognitive Processing Pipeline
                    </p>
                    <p className="text-sm text-neutral-400 font-mono leading-relaxed mb-8">
                        The NomadLifeXP Mindset System operates as a deterministic feedback loop. Raw inputs pass through systematic filters to construct conscious actions and update identity models.
                    </p>

                    <div className="max-w-md mx-auto flex flex-col items-center font-mono text-xs text-cyan-400 space-y-2">
                        <div className="w-full border border-neutral-800 bg-black p-3 text-center">INFORMATION INPUT</div>
                        <div className="text-neutral-600">&darr;</div>
                        <div className="w-full border border-neutral-800 bg-black p-3 text-center">ATTENTION FILTER</div>
                        <div className="text-neutral-600">&darr;</div>
                        <div className="w-full border border-neutral-800 bg-black p-3 text-center">MENTAL MODELS</div>
                        <div className="text-neutral-600">&darr;</div>
                        <div className="w-full border border-neutral-800 bg-black p-3 text-center">DECISION ENGINE</div>
                        <div className="text-neutral-600">&darr;</div>
                        <div className="w-full border border-neutral-800 bg-black p-3 text-center">BEHAVIOR OUTPUT</div>
                        <div className="text-neutral-600">&darr;</div>
                        <div className="w-full border border-neutral-800 bg-black p-3 text-center">IDENTITY UPDATE</div>
                    </div>
                </section>

                {/* Who This System Is For Section */}
                <section className="mb-24 border border-neutral-900 bg-neutral-950/60 p-8 md:p-12">
                    <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        SYSTEM TARGET PROFILES
                    </h2>
                    <p className="mb-8 text-xl font-bold uppercase tracking-wide">
                        Who This System Is For
                    </p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 font-mono text-sm">
                        {[
                            "Remote workers",
                            "Entrepreneurs",
                            "Digital nomads",
                            "Creators",
                            "People rebuilding focus",
                            "Anyone living in uncertainty"
                        ].map((profile, i) => (
                            <div key={i} className="border border-neutral-800 bg-black p-4 flex items-center space-x-3">
                                <span className="text-cyan-400">✓</span>
                                <span className="text-neutral-300">{profile}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Active Knowledge Modules Database */}
                <section className="mb-24">
                    <div className="flex justify-between items-end mb-8 border-b border-neutral-900 pb-4">
                        <div>
                            <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400 mb-1">
                                MINDSET DATABASE
                            </h2>
                            <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
                                Explore Cognitive Optimization & Mental Resilience Protocols
                            </p>
                        </div>
                        <span className="font-mono text-xs text-neutral-400">
                            ACTIVE KNOWLEDGE NODES: {mindsetArticles.length}
                        </span>
                    </div>

                    {mindsetArticles.length > 0 ? (
                        <div className="grid md:grid-cols-2 gap-6">
                            {mindsetArticles.map((post) => (
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
                                        OPEN ARTICLE &rarr;
                                    </Link>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <p className="text-neutral-500 font-mono text-sm">No mindset nodes available currently.</p>
                    )}
                </section>

                {/* The NomadLifeXP Mindset Framework Matrix */}
                <section className="mb-24 border border-neutral-900 bg-neutral-950/60 p-8 md:p-12">
                    <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        THE NOMADLIFEXP MINDSET FRAMEWORK
                    </h2>
                    <p className="mb-10 text-xl font-bold uppercase tracking-wide">
                        Four Pillars of Cognitive Mastery
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 font-mono">
                        <div className="border-l border-cyan-500/40 pl-6">
                            <h3 className="text-white font-bold uppercase mb-2">Information Control</h3>
                            <p className="text-sm text-neutral-400 leading-relaxed">Protect your mental environment. Control what enters your attention and eliminate cognitive pollution.</p>
                        </div>
                        <div className="border-l border-cyan-500/40 pl-6">
                            <h3 className="text-white font-bold uppercase mb-2">Attention Control</h3>
                            <p className="text-sm text-neutral-400 leading-relaxed">Attention is your highest-value resource. Train the ability to direct focus intentionally amidst digital noise.</p>
                        </div>
                        <div className="border-l border-cyan-500/40 pl-6">
                            <h3 className="text-white font-bold uppercase mb-2">Belief Architecture</h3>
                            <p className="text-sm text-neutral-400 leading-relaxed">Audit your internal models. Replace outdated assumptions with useful frameworks that drive performance.</p>
                        </div>
                        <div className="border-l border-cyan-500/40 pl-6">
                            <h3 className="text-white font-bold uppercase mb-2">Identity Design</h3>
                            <p className="text-sm text-neutral-400 leading-relaxed">Build the person capable of creating your desired future. Identity creates consistency and long-term momentum.</p>
                        </div>
                    </div>
                </section>

                {/* Why Mindset Matters Matrix */}
                <section className="mb-24 grid md:grid-cols-2 gap-8">
                    <div className="border border-red-950/50 bg-neutral-950 p-8">
                        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-red-400 mb-6">WHY MINDSET MATTERS // WITHOUT IT:</h2>
                        <ul className="space-y-3 font-mono text-sm text-neutral-400 list-disc list-inside">
                            <li>External information controls attention.</li>
                            <li>Emotions dictate decisions.</li>
                            <li>Old patterns repeat automatically.</li>
                        </ul>
                    </div>
                    <div className="border border-cyan-950/50 bg-neutral-950 p-8">
                        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400 mb-6">WHY MINDSET MATTERS // WITH IT:</h2>
                        <ul className="space-y-3 font-mono text-sm text-neutral-400 list-disc list-inside">
                            <li>Attention becomes intentional.</li>
                            <li>Decisions become conscious.</li>
                            <li>Identity becomes intentionally designed.</li>
                        </ul>
                    </div>
                </section>

                {/* Nomad Advantage Matrix */}
                <section className="mb-24 border border-cyan-900/40 bg-neutral-950 p-8 md:p-12">
                    <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        THE NOMADLIFEXP COGNITIVE ADVANTAGE
                    </h2>
                    <p className="mb-6 text-xl font-bold uppercase tracking-wide">
                        Why Nomads Need Mindset
                    </p>
                    <p className="text-sm text-neutral-400 font-mono mb-6">
                        Nomadic life creates uncertainty:
                    </p>
                    <ul className="space-y-2 font-mono text-sm text-neutral-400 list-disc list-inside mb-6">
                        <li>changing environments</li>
                        <li>unpredictable schedules</li>
                        <li>unfamiliar situations</li>
                        <li>constant adaptation</li>
                    </ul>
                    <p className="text-sm text-cyan-400 font-mono font-semibold">
                        Mindset becomes the internal navigation system. When the external world changes, your internal operating system remains stable.
                    </p>
                </section>

                {/* Call To Action Box */}
                <section className="mb-24 border border-cyan-900/40 bg-neutral-950 p-10 text-center">
                    <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400 mb-3">
                        MASTER YOUR COGNITIVE OPERATING SYSTEM
                    </h2>
                    <p className="text-2xl md:text-3xl font-black uppercase tracking-wide mb-4">
                        Your thoughts influence decisions. Your decisions influence actions. Your actions influence identity.
                    </p>
                    <p className="text-neutral-400 font-mono text-sm max-w-xl mx-auto mb-8">
                        Build the system behind everything you become.
                    </p>
                    <Link
                        href="/blog"
                        className="inline-block bg-cyan-500 text-black font-mono text-xs uppercase tracking-[0.3em] px-8 py-4 font-bold hover:bg-cyan-400 transition-colors"
                    >
                        START YOUR EVOLUTION &rarr;
                    </Link>
                </section>

                {/* The Human Operating System Integration Footer */}
                <footer className="border-t border-neutral-900 pt-16">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                            THE HUMAN OPERATING SYSTEM
                        </h2>
                        <p className="text-xl font-bold uppercase tracking-wide mb-8">
                            Unified Architectural Matrix
                        </p>

                        {/* Hierarchical Diagram */}
                        <div className="flex flex-col items-center font-mono text-xs text-cyan-400 space-y-4 mb-10">
                            <div className="border border-cyan-500/50 bg-neutral-950 px-6 py-4 w-64 text-center shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                                <span className="block font-bold text-white text-sm mb-1">MINDSET</span>
                                <span className="text-[10px] text-neutral-400 lowercase">(Interpretation System)</span>
                            </div>

                            <div className="text-neutral-600">&darr;</div>

                            <div className="grid grid-cols-3 gap-4 w-full max-w-xl">
                                <div className="border border-neutral-800 bg-neutral-950 p-3 text-center">
                                    <span className="block font-bold text-white mb-1">DISCIPLINE</span>
                                    <span className="text-[10px] text-neutral-400 lowercase">(Execution)</span>
                                </div>
                                <div className="border border-neutral-800 bg-neutral-950 p-3 text-center">
                                    <span className="block font-bold text-white mb-1">FITNESS</span>
                                    <span className="text-[10px] text-neutral-400 lowercase">(Capability)</span>
                                </div>
                                <div className="border border-neutral-800 bg-neutral-950 p-3 text-center">
                                    <span className="block font-bold text-white mb-1">YOGA</span>
                                    <span className="text-[10px] text-neutral-400 lowercase">(Regulation)</span>
                                </div>
                            </div>

                            <div className="text-neutral-600">&darr;</div>

                            <div className="border border-neutral-800 bg-black px-6 py-3 w-64 text-center text-neutral-300">
                                HUMAN PERFORMANCE
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-neutral-900 pt-10">
                        <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-neutral-500 text-center">
                            NAVIGATE ARCHITECTURAL NODES
                        </h3>

                        <div className="grid sm:grid-cols-3 gap-6 font-mono text-xs uppercase">
                            <Link
                                href="/blog/category/discipline"
                                className="border border-neutral-900 bg-neutral-950 p-6 text-neutral-300 hover:border-cyan-500 transition-colors block"
                            >
                                <span className="block text-white font-bold mb-1">Discipline</span>
                                <span className="text-neutral-500 text-[10px] lowercase block mb-3">Controls behavior and execution.</span>
                                <span className="text-cyan-400">&rarr; EXPLORE DISCIPLINE</span>
                            </Link>

                            <Link
                                href="/blog/category/fitness"
                                className="border border-neutral-900 bg-neutral-950 p-6 text-neutral-300 hover:border-cyan-500 transition-colors block"
                            >
                                <span className="block text-white font-bold mb-1">Fitness</span>
                                <span className="text-neutral-500 text-[10px] lowercase block mb-3">Controls physical capability.</span>
                                <span className="text-cyan-400">&rarr; EXPLORE FITNESS</span>
                            </Link>

                            <Link
                                href="/blog/category/yoga"
                                className="border border-neutral-900 bg-neutral-950 p-6 text-neutral-300 hover:border-cyan-500 transition-colors block"
                            >
                                <span className="block text-white font-bold mb-1">Yoga</span>
                                <span className="text-neutral-500 text-[10px] lowercase block mb-3">Controls internal regulation.</span>
                                <span className="text-cyan-400">&rarr; EXPLORE YOGA</span>
                            </Link>
                        </div>
                    </div>
                </footer>

            </div>
        </main>
    );
}