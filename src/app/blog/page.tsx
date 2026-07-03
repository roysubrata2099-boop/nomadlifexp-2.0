import { getAllPosts } from "@/lib/markdown";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "The Nomad Journal | NomadLifeXP",
    description: "Deep strategies for lifestyle design, mindset cultivation, and physical performance optimization.",
    alternates: {
        canonical: "https://nomadlifexp.com/blog",
    },
    openGraph: {
        title: "The Nomad Journal | NomadLifeXP",
        description: "Deep strategies for lifestyle design, mindset cultivation, and physical performance optimization.",
        url: "https://nomadlifexp.com/blog",
        type: "website",
    },
};

interface PageProps {
    params: Promise<Record<string, string | string[] | undefined>>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function BlogPage(props: PageProps) {
    // Safely unpack Next.js 15 search parameters
    const searchParams = await props.searchParams;
    const queryParam = typeof searchParams.q === "string" ? searchParams.q.toLowerCase().trim() : "";
    const categoryParam = typeof searchParams.cat === "string" ? searchParams.cat.toLowerCase().trim() : "all";

    const rawPosts = getAllPosts();
    const safePosts = Array.isArray(rawPosts) ? rawPosts : [];

    // 🛡️ Immutable Category Normalization Matrix
    const categoryMap: Record<string, string> = {
        "discipline": "discipline",
        "fitness": "fitness",
        "yoga": "yoga",
        "mindset": "mindset",
        // Legacy fallbacks gracefully handled
        "wellness": "fitness",
        "self growth": "mindset",
        "mental clarity": "mindset",
        "uncategorized": "discipline"
    };

    // Sanitize and normalize all 14 contents into rigid primitives
    const processedPosts = safePosts.map((p) => {
        const rawCat = p && typeof p.category === "string" ? p.category.toLowerCase().trim() : "";
        const mappedCategory = categoryMap[rawCat] || "discipline";

        return {
            slug: p && typeof p.slug === "string" ? p.slug : "",
            title: p && typeof p.title === "string" ? p.title : "Untitled Matrix Node",
            description: p && typeof p.description === "string" ? p.description : "",
            category: mappedCategory,
        };
    });

    const navigationCategories = ["all", "discipline", "fitness", "yoga", "mindset"];

    // Filter engine execution
    const filteredPosts = processedPosts.filter((post) => {
        const matchesCategory = categoryParam === "all" || post.category === categoryParam;
        const matchesSearch =
            post.title.toLowerCase().includes(queryParam) ||
            post.description.toLowerCase().includes(queryParam);
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="relative min-h-screen bg-[#050914] text-[#EDF6FF] antialiased font-sans selection:bg-cyan-500 selection:text-black overflow-hidden">
            {/* Background Layering */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <main className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">

                {/* Header Layout */}
                <header className="mb-12 max-w-4xl space-y-4">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <p className="text-xs uppercase tracking-[0.4em] font-mono text-cyan-400">
                            NomadLifeXP // Self-Development System Map
                        </p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
                        The Nomad Journal<br />
                        <span className="bg-gradient-to-r from-white via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
                            Operational Ecosystem
                        </span>
                    </h1>
                </header>

                {/* Filter Engine Layout */}
                <div className="mb-12 space-y-6">
                    <form method="GET" action="/blog" className="relative">
                        <input
                            type="text"
                            name="q"
                            defaultValue={queryParam.toUpperCase()}
                            placeholder="QUERY SYSTEM MATRIX... (PRESS ENTER)"
                            className="w-full bg-neutral-950/60 border border-neutral-900 px-6 py-4 font-mono text-sm uppercase tracking-wider text-white placeholder-neutral-700 focus:outline-none focus:border-cyan-500/50 rounded-none transition-colors duration-200"
                        />
                        <input type="hidden" name="cat" value={categoryParam} />
                    </form>

                    {/* Navigation Category Nodes */}
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
                                            ? "bg-cyan-500 text-black border-cyan-500 font-bold"
                                            : "bg-transparent border-neutral-900 text-neutral-500 hover:text-white hover:border-neutral-700"
                                        }`}
                                >
                                    {cat}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* 🗺️ INTEGRATED SYSTEM ENVIRONMENT ARCHITECTURE */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                    {/* Left/Middle Column: Filtered Blog Posts Output */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-xs font-mono tracking-[0.3em] uppercase text-neutral-500 mb-4">
                            Indexed Manifest Records ({filteredPosts.length})
                        </h2>
                        {filteredPosts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                                {filteredPosts.map((post, idx) => (
                                    <div
                                        key={post.slug || `post-${idx}`}
                                        className="border border-neutral-900/80 bg-neutral-950/30 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group hover:border-cyan-500/20 transition-all duration-300 rounded-none"
                                    >
                                        <div className="space-y-2 max-w-xl">
                                            <div className="flex items-center gap-3">
                                                <span className="text-[9px] font-mono tracking-widest text-cyan-400 bg-cyan-950/20 px-2 py-0.5 uppercase border border-cyan-900/30">
                                                    {post.category}
                                                </span>
                                                <span className="text-neutral-700 font-mono text-[9px] select-none">
                                                    NODE_0{idx + 1}
                                                </span>
                                            </div>
                                            <h3 className="text-white text-md font-bold uppercase tracking-tight group-hover:text-cyan-400 transition-colors duration-200">
                                                {post.title}
                                            </h3>
                                            <p className="text-xs font-light text-neutral-400 leading-relaxed line-clamp-1">
                                                {post.description || "No supplemental manifest parameters indexable."}
                                            </p>
                                        </div>
                                        <Link
                                            href={`/blog/posts/${post.slug}`}
                                            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-cyan-400 hover:text-cyan-300 transition-colors group/link whitespace-nowrap pt-2 sm:pt-0"
                                        >
                                            Connect &rarr;
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="border border-dashed border-neutral-900 p-12 text-center">
                                <p className="font-mono text-xs text-neutral-600 uppercase tracking-widest">
                                    // zero records found matching parameters.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Dynamic System Map Context Panel */}
                    <div className="lg:col-span-1 border border-neutral-900 bg-neutral-950/50 p-6 space-y-6 font-mono text-xs">
                        <div>
                            <h3 className="text-cyan-400 font-bold uppercase tracking-widest mb-2 text-sm border-b border-neutral-900 pb-2">
                                System Context Map
                            </h3>
                            <p className="text-neutral-500 text-[11px] leading-relaxed">
                                System operational dependencies configured dynamically below.
                            </p>
                        </div>

                        {/* Conditionals lock views based on selected parameters */}
                        {(categoryParam === "all" || categoryParam === "mindset") && (
                            <div className={`p-4 border ${categoryParam === "mindset" ? "border-cyan-500/40 bg-cyan-950/10" : "border-neutral-900"}`}>
                                <h4 className="text-white font-bold uppercase mb-1">1. MINDSET (Identity + Attention)</h4>
                                <p className="text-neutral-400 leading-relaxed mb-2 text-[11px]">Attention Control, Focus Recovery, Mental Clarity, Overthinking, Identity Shifts.</p>
                                <div className="text-amber-400 text-[10px] font-bold uppercase">➡️ Core Idea: Identity + attention control determines all behavior.</div>
                            </div>
                        )}

                        {(categoryParam === "all" || categoryParam === "discipline") && (
                            <div className={`p-4 border ${categoryParam === "discipline" ? "border-cyan-500/40 bg-cyan-950/10" : "border-neutral-900"}`}>
                                <h4 className="text-white font-bold uppercase mb-1">2. DISCIPLINE (Execution System)</h4>
                                <p className="text-neutral-400 leading-relaxed mb-2 text-[11px]">Execution Engines, Habit Controls, Procrastination Overrides.</p>
                                <div className="text-amber-400 text-[10px] font-bold uppercase">➡️ Core Idea: Discipline = system of execution, not motivation.</div>
                            </div>
                        )}

                        {(categoryParam === "all" || categoryParam === "fitness") && (
                            <div className={`p-4 border ${categoryParam === "fitness" ? "border-cyan-500/40 bg-cyan-950/10" : "border-neutral-900"}`}>
                                <h4 className="text-white font-bold uppercase mb-1">3. FITNESS (Physical Identity)</h4>
                                <p className="text-neutral-400 leading-relaxed mb-2 text-[11px]">Passive Consumption Overrides, Consistency Adapters, Mindset Resets.</p>
                                <div className="text-amber-400 text-[10px] font-bold uppercase">➡️ Core Idea: Fitness = identity built through repetition.</div>
                            </div>
                        )}

                        {(categoryParam === "all" || categoryParam === "yoga") && (
                            <div className={`p-4 border ${categoryParam === "yoga" ? "border-cyan-500/40 bg-cyan-950/10" : "border-neutral-900"}`}>
                                <h4 className="text-white font-bold uppercase mb-1">4. YOGA (Nervous System Control)</h4>
                                <p className="text-neutral-400 leading-relaxed mb-2 text-[11px]">Inversion Awareness, Stress Reductions, Cognitive Baseline Resets.</p>
                                <div className="text-amber-400 text-[10px] font-bold uppercase">➡️ Core Idea: Yoga = nervous system regulation → sharp focus.</div>
                            </div>
                        )}

                        {/* Master Flow Inter-linkage State Loop */}
                        <div className="p-4 border border-dashed border-neutral-800 bg-neutral-950 text-neutral-400 space-y-2 text-[11px]">
                            <h4 className="text-white font-bold uppercase tracking-wider text-xs">🔗 MASTER FLOW LOOP</h4>
                            <p className="font-mono text-neutral-500 text-[10px]">MINDSET → DISCIPLINE → FITNESS → YOGA → RECALIBRATE</p>
                            <ul className="space-y-1 list-none p-0 text-neutral-400">
                                <li>• Mindset decides who you are</li>
                                <li>• Discipline decides what you do</li>
                                <li>• Fitness builds proof of identity</li>
                                <li>• Yoga stabilizes internal systems</li>
                            </ul>
                            <div className="text-cyan-400 text-[10px] font-mono pt-1">Status: Operational loop active.</div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}