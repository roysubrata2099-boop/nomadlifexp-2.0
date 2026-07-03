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

    // 🛡️ Immutable Frontmatter Normalization Matrix
    const categoryMap: Record<string, string> = {
        "discipline": "discipline",
        "fitness": "fitness",
        "yoga": "yoga",
        "mindset": "mindset",
        // Legacies mapped safely to the 4 pillars
        "wellness": "fitness",
        "self growth": "mindset",
        "mental clarity": "mindset",
        "uncategorized": "discipline"
    };

    // Process all 14 articles into rigid primitives
    const processedPosts = safePosts.map((p) => {
        const rawCat = p && typeof p.category === "string" ? p.category.toLowerCase().trim() : "";
        const mappedCategory = categoryMap[rawCat] || "discipline"; // Fallback protector

        return {
            slug: p && typeof p.slug === "string" ? p.slug : "",
            title: p && typeof p.title === "string" ? p.title : "Untitled Matrix Node",
            description: p && typeof p.description === "string" ? p.description : "",
            category: mappedCategory,
        };
    });

    // Hardcoded 5 Navigation Targets
    const navigationCategories = ["all", "discipline", "fitness", "yoga", "mindset"];

    // Filter engine executed server-side
    const filteredPosts = processedPosts.filter((post) => {
        const matchesCategory = categoryParam === "all" || post.category === categoryParam;
        const matchesSearch =
            post.title.toLowerCase().includes(queryParam) ||
            post.description.toLowerCase().includes(queryParam);
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="relative min-h-screen bg-black text-white antialiased font-sans selection:bg-cyan-500 selection:text-black overflow-hidden">
            {/* Background Layering */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <main className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">
                <header className="mb-16 max-w-4xl space-y-4">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <p className="text-xs uppercase tracking-[0.4em] font-mono text-cyan-400">
                            NomadLifeXP // Journal Log Registry
                        </p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
                        The Nomad Journal<br />
                        <span className="bg-gradient-to-r from-white via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
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
                            placeholder="QUERY STRATEGIES... (E.G. ATTENTION, RECOVERY)"
                            className="w-full bg-neutral-950 border border-neutral-900 px-6 py-4 font-mono text-sm uppercase tracking-wider text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500/50 rounded-none transition-colors duration-200"
                        />
                        <input type="hidden" name="cat" value={categoryParam} />
                    </form>

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

                {/* Grid Output */}
                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredPosts.map((post, idx) => (
                            <div
                                key={post.slug || `post-${idx}`}
                                className="border border-neutral-900 bg-neutral-950/40 p-8 flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-300 rounded-none"
                            >
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-start gap-4">
                                        <span className="text-[10px] font-mono tracking-widest text-cyan-400 bg-cyan-950/30 px-2 py-0.5 uppercase border border-cyan-900/40">
                                            {post.category}
                                        </span>
                                        <span className="text-neutral-700 font-mono text-[10px] select-none">
                                            LOG_0{idx + 1}
                                        </span>
                                    </div>
                                    <h2 className="text-white text-lg font-bold uppercase tracking-tight group-hover:text-cyan-400 transition-colors duration-200 line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-sm font-light text-neutral-400 leading-relaxed line-clamp-2">
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
                    <div className="border border-dashed border-neutral-900 p-12 text-center max-w-xl mx-auto mt-12">
                        <p className="font-mono text-xs text-neutral-600 uppercase tracking-widest">
                            // zero records found matching parameters.
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
}