import { getAllPosts } from "@/lib/markdown";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "The Nomad Journal | NomadLifeXP",
    description: "Self-Development System Map: Deep strategies for lifestyle design, mindset cultivation, and physical performance optimization.",
    alternates: {
        canonical: "https://nomadlifexp.com/blog",
    },
    openGraph: {
        title: "The Nomad Journal | NomadLifeXP",
        description: "Self-Development System Map: Deep strategies for lifestyle design, mindset cultivation, and physical performance optimization.",
        url: "https://nomadlifexp.com/blog",
        type: "website",
    },
};

interface PageProps {
    params: Promise<Record<string, string | string[] | undefined>>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function BlogPage(props: PageProps) {
    // Safely unpack parameters for Next.js 15 routing compliance
    const searchParams = await props.searchParams;
    const queryParam = typeof searchParams.q === "string" ? searchParams.q.toLowerCase().trim() : "";
    const categoryParam = typeof searchParams.cat === "string" ? searchParams.cat.toLowerCase().trim() : "all";

    const rawPosts = getAllPosts();
    const safePosts = Array.isArray(rawPosts) ? rawPosts : [];

    // 🛡️ 100% BULLETPROOF STRING DETECTOR MATRIX
    const matchCategoryByTitleAndMetadata = (title: string, rawCat: string): string => {
        const t = title.toLowerCase();

        if (
            t.includes("reclaim your attention") ||
            t.includes("lack discipline") ||
            t.includes("procrastinate") ||
            t.includes("discipline")
        ) {
            return "discipline";
        }

        if (
            t.includes("workout videos") ||
            t.includes("never actually exercise") ||
            t.includes("fitness consistency") ||
            t.includes("not about time") ||
            t.includes("workout mindset") ||
            t.includes("workout habit") ||
            t.includes("outlasts your motivation") ||
            t.includes("fitness") ||
            t.includes("exercise")
        ) {
            return "fitness";
        }

        if (
            t.includes("headstand") ||
            t.includes("forearm stand") ||
            t.includes("forward bending") ||
            t.includes("yoga") ||
            t.includes("inversion")
        ) {
            return "yoga";
        }

        if (
            t.includes("attention span") ||
            t.includes("digital distraction") ||
            t.includes("can’t focus") ||
            t.includes("cant focus") ||
            t.includes("mental clarity") ||
            t.includes("overthinking") ||
            t.includes("stuck in life") ||
            t.includes("mindset")
        ) {
            return "mindset";
        }

        // Secondary structural fallbacks
        const c = rawCat.toLowerCase().trim();
        if (c === "wellness") return "fitness";
        if (c === "self growth" || c === "mental clarity") return "mindset";
        if (c === "uncategorized") return "discipline";

        return c || "discipline";
    };

    // Restructure post objects with sanitized primitives
    const processedPosts = safePosts.map((p) => {
        const titleText = p && typeof p.title === "string" ? p.title : "";
        const rawCategory = p && typeof p.category === "string" ? p.category : "";
        const verifiedCategory = matchCategoryByTitleAndMetadata(titleText, rawCategory);

        return {
            slug: p && typeof p.slug === "string" ? p.slug : "",
            title: titleText || "Untitled Operational Node",
            description: p && typeof p.description === "string" ? p.description : "",
            category: verifiedCategory,
        };
    });

    const navigationCategories = ["all", "discipline", "fitness", "yoga", "mindset"];

    // Filter Engine
    const filteredPosts = processedPosts.filter((post) => {
        const matchesCategory = categoryParam === "all" || post.category === categoryParam;
        const matchesSearch =
            post.title.toLowerCase().includes(queryParam) ||
            post.description.toLowerCase().includes(queryParam);
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="relative min-h-screen bg-[#050914] text-[#EDF6FF] antialiased font-sans selection:bg-cyan-500 selection:text-black overflow-hidden">
            {/* Dynamic Grid Background Overlay */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <main className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">

                {/* 🛡️ RETURN TO MASTER NODE ARROW */}
                <div className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                        <span className="transition-transform duration-200 group-hover:-translate-x-1">&larr;</span> Return Home Node
                    </Link>
                </div>

                {/* Blog System Header */}
                <header className="mb-12 max-w-4xl space-y-4">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <p className="text-xs uppercase tracking-[0.4em] font-mono text-cyan-400">
                            NomadLifeXP // System Log Registry
                        </p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
                        The Nomad Journal<br />
                        <span className="bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
                            Operational Intel
                        </span>
                    </h1>
                </header>

                {/* Filter Controls */}
                <div className="mb-12 space-y-6">
                    <form method="GET" action="/blog" className="relative">
                        <input
                            type="text"
                            name="q"
                            defaultValue={queryParam.toUpperCase()}
                            placeholder="QUERY STRATEGIES... (PRESS ENTER)"
                            className="w-full bg-neutral-950/60 border border-neutral-900 px-6 py-4 font-mono text-sm uppercase tracking-wider text-white placeholder-neutral-700 focus:outline-none focus:border-cyan-500/50 rounded-none transition-colors duration-200"
                        />
                        <input type="hidden" name="cat" value={categoryParam} />
                    </form>

                    {/* Navigation Category Filters */}
                    <div className="flex flex-wrap gap-2 border-b border-neutral-900/60 pb-6">
                        {navigationCategories.map((cat) => {
                            const isActive = categoryParam === cat;
                            const targetHref = queryParam
                                ? `/blog?cat=${cat}&q=${encodeURIComponent(queryParam)}`
                                : `/blog?cat=${cat}`;

                            return (
                                <Link
                                    key={cat}
                                    href={targetHref}
                                    className={`px-5 py-2 font-mono text-xs uppercase tracking-widest border transition-all duration-200 rounded-none ${isActive
                                            ? "bg-cyan-400 text-black border-cyan-400 font-bold"
                                            : "bg-transparent border-neutral-900 text-neutral-500 hover:text-white hover:border-neutral-700"
                                        }`}
                                >
                                    {cat}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* ECOSYSTEM TWO-COLUMN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                    {/* COLUMN 1 & 2: Blog Feed Grid */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-xs font-mono tracking-[0.3em] uppercase text-neutral-500 mb-4">
                            Active Manifest Indexes ({filteredPosts.length})
                        </h2>

                        {filteredPosts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {filteredPosts.map((post, idx) => (
                                    <div
                                        key={post.slug || `post-${idx}`}
                                        className="border border-neutral-900 bg-neutral-950/40 p-6 flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-300 rounded-none"
                                    >
                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between items-center">
                                                <span className="text-[9px] font-mono tracking-widest text-cyan-400 bg-cyan-950/30 px-2 py-0.5 uppercase border border-cyan-900/40">
                                                    {post.category}
                                                </span>
                                                <span className="text-neutral-700 font-mono text-[9px] select-none">
                                                    LOG_0{idx + 1}
                                                </span>
                                            </div>
                                            <h3 className="text-white text-base font-bold uppercase tracking-tight group-hover:text-cyan-400 transition-colors duration-200 line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-xs font-light text-neutral-400 leading-relaxed line-clamp-2">
                                                {post.description || "No supplemental manifest parameters indexable."}
                                            </p>
                                        </div>
                                        <Link
                                            href={`/blog/posts/${post.slug}`}
                                            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                                        >
                                            Read Analysis <span className="transition-transform duration-200 group-hover/link:translate-x-1">&rarr;</span>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="border border-dashed border-neutral-900 p-12 text-center">
                                <p className="font-mono text-xs text-neutral-600 uppercase tracking-widest">
                  // Zero index records matched filter parameters.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* COLUMN 3: SELF-DEVELOPMENT SYSTEM MAP BLUEPRINT VIEW */}
                    <div className="lg:col-span-1 border border-neutral-900 bg-neutral-950/80 p-6 space-y-6 font-mono text-xs">
                        <div>
                            <h2 className="text-cyan-400 font-bold uppercase tracking-widest mb-1 text-sm border-b border-neutral-900/80 pb-2">
                                Self-Development System Map
                            </h2>
                            <p className="text-neutral-500 text-[10px] uppercase tracking-wider">
                                Ecosystem Architecture Parameters
                            </p>
                        </div>

                        {/* 1. DISCIPLINE PILLAR COMPONENT */}
                        {(categoryParam === "all" || categoryParam === "discipline") && (
                            <div className={`p-4 border transition-all duration-300 ${categoryParam === "discipline" ? "border-cyan-400 bg-cyan-950/20" : "border-neutral-900/60"}`}>
                                <div className="text-cyan-400 text-[10px] mb-1 font-bold">01 // EXECUTION ENGINE</div>
                                <h4 className="text-white font-bold uppercase text-xs mb-1">1. DISCIPLINE</h4>
                                <p className="text-neutral-500 text-[10px] uppercase mb-2">(Execution Systems + Habit Control)</p>
                                <ul className="text-neutral-400 space-y-1 list-none p-0 pl-1 mb-3 text-[11px]">
                                    <li>• Reclaim Your Attention, Rebuild Your Life</li>
                                    <li>• Why You Lack Discipline & How to Build It</li>
                                    <li>• Why You Procrastinate & How to Stop It</li>
                                </ul>
                                <div className="text-amber-400 text-[10px] font-bold uppercase leading-relaxed border-t border-neutral-900/80 pt-2">
                                    ➡️ Core Idea:<br />Discipline = system of execution, not motivation.
                                </div>
                            </div>
                        )}

                        {/* 2. FITNESS PILLAR COMPONENT */}
                        {(categoryParam === "all" || categoryParam === "fitness") && (
                            <div className={`p-4 border transition-all duration-300 ${categoryParam === "fitness" ? "border-cyan-400 bg-cyan-950/20" : "border-neutral-900/60"}`}>
                                <div className="text-cyan-400 text-[10px] mb-1 font-bold">02 // KINETIC OUTPUT</div>
                                <h4 className="text-white font-bold uppercase text-xs mb-1">2. FITNESS</h4>
                                <p className="text-neutral-500 text-[10px] uppercase mb-2">(Action + Consistency + Identity)</p>
                                <ul className="text-neutral-400 space-y-1 list-none p-0 pl-1 mb-3 text-[11px]">
                                    <li>• Passive Consumption vs Action</li>
                                    <li>• Fitness Consistency Strategy</li>
                                    <li>• Time Excuse / Mindset Reset</li>
                                    <li>• Motivation-Independent Habits</li>
                                </ul>
                                <div className="text-amber-400 text-[10px] font-bold uppercase leading-relaxed border-t border-neutral-900/80 pt-2">
                                    ➡️ Core Idea:<br />Fitness = identity built through repetition, not spikes.
                                </div>
                            </div>
                        )}

                        {/* 3. YOGA PILLAR COMPONENT */}
                        {(categoryParam === "all" || categoryParam === "yoga") && (
                            <div className={`p-4 border transition-all duration-300 ${categoryParam === "yoga" ? "border-cyan-400 bg-cyan-950/20" : "border-neutral-900/60"}`}>
                                <div className="text-cyan-400 text-[10px] mb-1 font-bold">03 // NERVOUS SYSTEM TUNING</div>
                                <h4 className="text-white font-bold uppercase text-xs mb-1">3. YOGA</h4>
                                <p className="text-neutral-500 text-[10px] uppercase mb-2">(Nervous System + Focus + Calm)</p>
                                <ul className="text-neutral-400 space-y-1 list-none p-0 pl-1 mb-3 text-[11px]">
                                    <li>• Headstand Awareness Reset</li>
                                    <li>• Forearm Stand Stress Focus</li>
                                    <li>• Forward Bending Stress Relief</li>
                                </ul>
                                <div className="text-amber-400 text-[10px] font-bold uppercase leading-relaxed border-t border-neutral-900/80 pt-2">
                                    ➡️ Core Idea:<br />Yoga = nervous system regulation → attention control.
                                </div>
                            </div>
                        )}

                        {/* 4. MINDSET PILLAR COMPONENT */}
                        {(categoryParam === "all" || categoryParam === "mindset") && (
                            <div className={`p-4 border transition-all duration-300 ${categoryParam === "mindset" ? "border-cyan-400 bg-cyan-950/20" : "border-neutral-900/60"}`}>
                                <div className="text-cyan-400 text-[10px] mb-1 font-bold">04 // COGNITIVE CORE</div>
                                <h4 className="text-white font-bold uppercase text-xs mb-1">4. MINDSET</h4>
                                <p className="text-neutral-500 text-[10px] uppercase mb-2">(Attention + Mental Clarity)</p>
                                <ul className="text-neutral-400 space-y-1 list-none p-0 pl-1 mb-3 text-[11px]">
                                    <li>• Attention Recovery Protocol</li>
                                    <li>• Attention Failure Diagnostics</li>
                                    <li>• Dissolving Overthinking Loop</li>
                                    <li>• Life Direction Identity Shifts</li>
                                </ul>
                                <div className="text-amber-400 text-[10px] font-bold uppercase leading-relaxed border-t border-neutral-900/80 pt-2">
                                    ➡️ Core Idea:<br />Mindset = identity + attention control determines behavior.
                                </div>
                            </div>
                        )}

                        {/* 🔗 COMPLETE MASTER CLOSURE RECURSION VIEW */}
                        <div className="p-4 border border-dashed border-neutral-800 bg-black/60 space-y-2 text-[11px]">
                            <h4 className="text-white font-bold uppercase tracking-wider text-xs flex items-center gap-1.5">
                                <span>🔗</span> MASTER SYSTEM FLOW LOOP
                            </h4>
                            <p className="font-mono text-neutral-600 text-[9px] uppercase tracking-tighter">
                                MINDSET → DISCIPLINE → FITNESS → YOGA → RECALIBRATE
                            </p>
                            <ul className="space-y-1 list-none p-0 text-neutral-400 text-[11px]">
                                <li>• <b className="text-white">Mindset</b> decides who you are</li>
                                <li>• <b className="text-white">Discipline</b> decides what you do</li>
                                <li>• <b className="text-white">Fitness</b> builds proof of identity</li>
                                <li>• <b className="text-white">Yoga</b> stabilizes your internal system</li>
                            </ul>
                            <div className="text-cyan-400 text-[10px] font-mono pt-1 uppercase border-t border-neutral-900 mt-2">
                                🔁 Repeated Loop → Stronger Identity + Control over Life
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}