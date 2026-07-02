import { getAllPosts } from "@/lib/markdown";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Central Knowledge Index | NomadLifeXP",
    description: "Access the unified database matrix. Query across mindset architectures, somatic mechanics, and execution protocols.",
    alternates: {
        canonical: "https://nomadlifexp.com/knowledge-index",
    },
    openGraph: {
        title: "Central Knowledge Index | NomadLifeXP",
        description: "Access the unified database matrix. Query across mindset architectures, somatic mechanics, and execution protocols.",
        url: "https://nomadlifexp.com/knowledge-index",
        type: "website",
    },
};

interface PageProps {
    params: Promise<Record<string, string | string[] | undefined>>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function KnowledgeIndexPage(props: PageProps) {
    // Await search parameters per Next.js 15 standards
    const searchParams = await props.searchParams;
    const queryParam = typeof searchParams.q === "string" ? searchParams.q.toLowerCase().trim() : "";
    const categoryParam = typeof searchParams.cat === "string" ? searchParams.cat.toLowerCase().trim() : "all";

    const rawPosts = getAllPosts();
    const safePosts = Array.isArray(rawPosts) ? rawPosts : [];

    // Sanitize frontmatter fields safely into absolute structural primitives
    const processedPosts = safePosts.map((p) => ({
        slug: p && typeof p.slug === "string" ? p.slug : "",
        title: p && typeof p.title === "string" ? p.title : "Untitled Node",
        description: p && typeof p.description === "string" ? p.description : "",
        category: p && typeof p.category === "string" ? p.category.toLowerCase().trim() : "uncategorized",
    }));

    // Extract dynamic unique categories for the layout filter tabs
    const uniqueCategories = Array.from(new Set(processedPosts.map((p) => p.category).filter(Boolean)));
    const navigationCategories = ["all", ...uniqueCategories];

    // Server-side filtering logic matching active navigation inputs
    const filteredPosts = processedPosts.filter((post) => {
        const matchesCategory = categoryParam === "all" || post.category === categoryParam;
        const matchesSearch =
            post.title.toLowerCase().includes(queryParam) ||
            post.description.toLowerCase().includes(queryParam);
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="relative min-h-screen bg-black text-white antialiased font-sans selection:bg-cyan-500 selection:text-black overflow-hidden">
            {/* Ambient Matrix Background Elements */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <main className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">
                {/* Navigation Breadcrumb */}
                <nav className="mb-12 flex items-center border-b border-neutral-900 pb-6" aria-label="Breadcrumb">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-cyan-400 transition-colors duration-200"
                    >
                        &larr; RETURN_TO_HOME
                    </Link>
                </nav>

                {/* Dashboard Title Layout */}
                <header className="mb-16 max-w-4xl space-y-4">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <p className="text-xs uppercase tracking-[0.4em] font-mono text-cyan-400">
                            NomadLifeXP // Server-Side Unified Registry
                        </p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
                        Knowledge Repository<br />
                        <span className="bg-gradient-to-r from-white via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
                            System Registry
                        </span>
                    </h1>
                </header>

                {/* Search Architecture Box */}
                <div className="mb-12 space-y-6">
                    <form method="GET" action="/knowledge-index" className="relative">
                        <input
                            type="text"
                            name="q"
                            defaultValue={queryParam.toUpperCase()}
                            placeholder="INPUT FILTERS AND PRESS ENTER... (E.G. ATTENTION, STRAIN)"
                            className="w-full bg-neutral-950 border border-neutral-900 px-6 py-4 font-mono text-sm uppercase tracking-wider text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500/50 rounded-none transition-colors duration-200"
                        />
                        <input type="hidden" name="cat" value={categoryParam} />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-700 font-mono text-xs select-none hidden md:inline">
                            [PRESS_ENTER_TO_QUERY]
                        </span>
                    </form>

                    {/* Dynamic Filtering Category Tabs */}
                    <div className="flex flex-wrap gap-2 border-b border-neutral-900/60 pb-6">
                        {navigationCategories.map((cat) => {
                            const isActive = categoryParam === cat;
                            const targetHref = queryParam
                                ? `/knowledge-index?cat=${cat}&q=${encodeURIComponent(queryParam)}`
                                : `/knowledge-index?cat=${cat}`;

                            return (
                                <Link
                                    key={cat}
                                    href={targetHref}
                                    className={`px-4 py-2 font-mono text-xs uppercase tracking-widest border transition-all duration-200 rounded-none ${isActive
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

                {/* Database Search Matrix Output Grid */}
                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredPosts.map((post, idx) => (
                            <div
                                key={post.slug || `node-${idx}`}
                                className="border border-neutral-900 bg-neutral-950/40 p-8 flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-300 rounded-none"
                            >
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-start gap-4">
                                        <span className="text-[10px] font-mono tracking-widest text-cyan-400 bg-cyan-950/30 px-2 py-0.5 uppercase border border-cyan-900/40">
                                            {post.category}
                                        </span>
                                        <span className="text-neutral-700 font-mono text-[10px] select-none" aria-hidden="true">
                                            REF_0{idx + 1}
                                        </span>
                                    </div>
                                    <h2 className="text-white text-lg font-bold uppercase tracking-tight group-hover:text-cyan-400 transition-colors duration-200 line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-sm font-light text-neutral-400 leading-relaxed line-clamp-2">
                                        {post.description || "No supplemental manifest parameters indexable for selected target resource node."}
                                    </p>
                                </div>
                                <Link
                                    href={`/blog/posts/${post.slug}`}
                                    className="inline-flex items-center gap-2 text-xs font-mono uppercase text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                                >
                                    Establish Link connection <span className="transition-transform duration-200 group-hover/link:translate-x-1" aria-hidden="true">&rarr;</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="border border-dashed border-neutral-900 p-12 text-center max-w-xl mx-auto mt-12">
                        <p className="font-mono text-xs text-neutral-600 uppercase tracking-widest">
                            // zero indices matched requested query parameters. system waiting for clean command input.
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
}