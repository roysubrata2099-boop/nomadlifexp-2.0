import { getAllPosts } from "@/lib/markdown";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Central Knowledge Index | NomadLifeXP",
    description: "Access the unified database matrix. Query technical system nodes across mindset architectures, somatic mechanics, and execution protocols.",
    alternates: {
        canonical: "https://nomadlifexp.com/knowledge-index",
    },
    openGraph: {
        title: "Central Knowledge Index | NomadLifeXP",
        description: "Access the unified database matrix. Query technical system nodes across mindset architectures, somatic mechanics, and execution protocols.",
        url: "https://nomadlifexp.com/knowledge-index",
        type: "website",
        siteName: "NomadLifeXP",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

interface PageProps {
    params: Promise<Record<string, any>>;
    searchParams: Promise<Record<string, any>>;
}

export default async function KnowledgeIndexPage({ searchParams }: PageProps) {
    // Resolve the asynchronous search parameters natively
    const resolvedSearchParams = await searchParams;

    // Fallback assignment strings bypassing strict indexing rules
    const queryParam = typeof resolvedSearchParams?.q === "string" ? resolvedSearchParams.q.toLowerCase().trim() : "";
    const categoryParam = typeof resolvedSearchParams?.cat === "string" ? resolvedSearchParams.cat.toLowerCase().trim() : "all";

    // Safe casting bypass for custom markdown configurations
    const rawPosts = getAllPosts() as any[];
    const safePosts = Array.isArray(rawPosts) ? rawPosts : [];

    // Map out objects safely into explicit primitives
    const processedPosts = safePosts.map((p: any) => ({
        slug: p && typeof p.slug === "string" ? p.slug : "",
        title: p && typeof p.title === "string" ? p.title : "Untitled Node",
        description: p && typeof p.description === "string" ? p.description : "",
        category: p && typeof p.category === "string" ? p.category.toLowerCase().trim() : "uncategorized",
        date: p && typeof p.date === "string" ? p.date : "2026-01-01",
        readingTime: p && typeof p.readingTime === "string" ? p.readingTime : "5 min",
    }));

    const totalNodesCount = processedPosts.length;
    const uniqueCategories = Array.from(new Set(processedPosts.map((p) => p.category).filter(Boolean)));
    const navigationCategories = ["all", ...uniqueCategories];

    const categoryCounts = processedPosts.reduce((acc, curr) => {
        acc[curr.category] = (acc[curr.category] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const filteredPosts = processedPosts.filter((post) => {
        const matchesCategory = categoryParam === "all" || post.category === categoryParam;
        const matchesSearch =
            post.title.toLowerCase().includes(queryParam) ||
            post.description.toLowerCase().includes(queryParam) ||
            post.category.toLowerCase().includes(queryParam);
        return matchesCategory && matchesSearch;
    });

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "DataCatalog",
        "@id": "https://nomadlifexp.com/knowledge-index#catalog",
        "name": "NomadLifeXP Central Knowledge Index",
        "description": "Unified database matrix index covering behavioral discipline, cellular optimization, somatic loops, and clarity execution strategies.",
        "url": "https://nomadlifexp.com/knowledge-index",
        "creator": {
            "@type": "Organization",
            "name": "NomadLifeXP",
            "url": "https://nomadlifexp.com"
        }
    };

    return (
        <div className="relative min-h-screen bg-[#03060f] text-[#E2E8F0] antialiased font-sans selection:bg-cyan-500 selection:text-black overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-cyan-500/[0.03] rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none" />

            <main className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">
                <nav className="mb-12 flex items-center border-b border-neutral-900/60 pb-6" aria-label="Breadcrumb">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-cyan-400 transition-colors duration-200"
                    >
                        &larr; SYSTEM_CORE_HOME
                    </Link>
                </nav>

                <header className="mb-16 grid md:grid-cols-3 gap-8 items-end border-b border-neutral-900/40 pb-12">
                    <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            <p className="text-xs uppercase tracking-[0.4em] font-mono text-cyan-400/80">
                                NomadLifeXP // Automated Technical Directory
                            </p>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
                            Central Knowledge<br />
                            <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">
                                Index Matrix
                            </span>
                        </h1>
                    </div>

                    <div className="bg-neutral-950 border border-neutral-900 p-4 font-mono text-[11px] text-neutral-500 space-y-1 rounded-none">
                        <div className="flex justify-between">
                            <span>INDEX_STATUS:</span>
                            <span className="text-emerald-400 font-bold">ONLINE</span>
                        </div>
                        <div className="flex justify-between">
                            <span>TOTAL_ALLOCATED_NODES:</span>
                            <span className="text-white font-bold">{totalNodesCount} REGISTERED</span>
                        </div>
                        <div className="flex justify-between">
                            <span>ACTIVE_SELECTION:</span>
                            <span className="text-cyan-400 font-bold">{filteredPosts.length} MATCHED</span>
                        </div>
                    </div>
                </header>

                <div className="mb-12 space-y-6">
                    <form method="GET" action="/knowledge-index" className="relative">
                        <input
                            type="text"
                            name="q"
                            defaultValue={queryParam}
                            placeholder="INITIALIZE MATRIX QUERY... (E.G. HABIT, ATTENTION, FORWARD)"
                            className="w-full bg-neutral-950 border border-neutral-900 px-6 py-4 font-mono text-xs md:text-sm uppercase tracking-wider text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500/40 rounded-none transition-colors duration-200"
                        />
                        <input type="hidden" name="cat" value={categoryParam} />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-700 font-mono text-[10px] select-none hidden md:inline">
                            [EXECUTE_INDEX_SCAN]
                        </span>
                    </form>

                    <div className="flex flex-wrap gap-2">
                        {navigationCategories.map((cat) => {
                            const isActive = categoryParam === cat;
                            const targetHref = queryParam
                                ? `/knowledge-index?cat=${cat}&q=${encodeURIComponent(queryParam)}`
                                : `/knowledge-index?cat=${cat}`;

                            const countDisplay = cat === "all" ? totalNodesCount : (categoryCounts[cat] || 0);

                            return (
                                <Link
                                    key={cat}
                                    href={targetHref}
                                    className={`px-4 py-2 font-mono text-[11px] uppercase tracking-widest border transition-all duration-200 flex items-center gap-2 ${isActive
                                        ? "bg-cyan-500 text-black border-cyan-500 font-bold"
                                        : "bg-neutral-950/40 border-neutral-900 text-neutral-500 hover:text-white hover:border-neutral-700"
                                        }`}
                                >
                                    <span>{cat}</span>
                                    <span className={`text-[9px] font-sans px-1.5 py-0.5 rounded-none ${isActive ? "bg-black text-cyan-400" : "bg-neutral-900 text-neutral-600"}`}>
                                        {countDisplay}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {filteredPosts.length > 0 ? (
                    <div className="border border-neutral-900 bg-neutral-950/20 divide-y divide-neutral-900">
                        <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 font-mono text-[10px] uppercase tracking-wider text-neutral-500 bg-neutral-950">
                            <div className="col-span-2">System Category</div>
                            <div className="col-span-6">Resource Allocation Node Title</div>
                            <div className="col-span-2">Registration Date</div>
                            <div className="col-span-2 text-right">System Action Link</div>
                        </div>

                        {filteredPosts.map((post, idx) => (
                            <div
                                key={post.slug || `matrix-node-${idx}`}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center px-6 py-5 hover:bg-neutral-950/60 transition-colors duration-150 group"
                            >
                                <div className="col-span-1 lg:col-span-2 flex items-center lg:block">
                                    <span className="text-[10px] font-mono tracking-widest text-cyan-400 bg-cyan-950/20 border border-cyan-900/30 px-2 py-0.5 uppercase">
                                        {post.category}
                                    </span>
                                </div>

                                <div className="col-span-1 lg:col-span-6 space-y-1">
                                    <h2 className="text-white text-base font-bold uppercase tracking-tight group-hover:text-cyan-400 transition-colors duration-200">
                                        {post.title}
                                    </h2>
                                    <p className="text-xs font-light text-neutral-400 leading-relaxed line-clamp-2 lg:line-clamp-1 max-w-2xl">
                                        {post.description || "No supplemental manifest parameters indexable for selected target resource node."}
                                    </p>
                                </div>

                                <div className="col-span-1 lg:col-span-2 font-mono text-[11px] text-neutral-500 flex lg:block items-center gap-2">
                                    <span className="lg:hidden text-[10px] uppercase tracking-wider text-neutral-600 font-mono">Registered:</span>
                                    {post.date}
                                </div>

                                <div className="col-span-1 lg:col-span-2 text-left lg:text-right pt-2 lg:pt-0">
                                    <Link
                                        href={`/blog/posts/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-xs font-mono uppercase text-neutral-400 group-hover:text-cyan-400 transition-colors duration-200"
                                    >
                                        <span className="lg:hidden">ESTABLISH_CONNECTION</span>
                                        <span className="hidden lg:inline">OPEN_NODE</span> &rarr;
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="border border-dashed border-neutral-900 p-16 text-center max-w-xl mx-auto mt-12">
                        <p className="font-mono text-xs text-neutral-600 uppercase tracking-widest leading-relaxed">
                            // ZERO INDEX ALLOCATIONS MATCHED REQUESTED INPUT.<br />
                            SYSTEM WAITING FOR CLEAN SELECTION RE-INITIALIZATION.
                        </p>
                        <Link href="/knowledge-index" className="mt-4 inline-block text-xs font-mono text-cyan-400 underline hover:text-cyan-300">
                            RESET_INDEX_FILTERS
                        </Link>
                    </div>
                )}
            </main>
        </div>
    );
}