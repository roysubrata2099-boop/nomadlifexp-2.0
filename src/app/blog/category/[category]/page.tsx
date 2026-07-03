import { getAllPosts } from "@/lib/markdown";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface SystemPost {
    slug: string;
    title: string;
    description: string;
    category: string;
}

interface PageProps {
    params: Promise<{ category: string }>;
}

function normalize(str: string | undefined | null): string {
    if (!str) return "";
    return String(str).toLowerCase().trim();
}

// Map to supply UI layout engines with textual nodes per domain
const frameworkConfig: Record<string, { title: string; desc: string }> = {
    discipline: {
        title: "Discipline & Autonomy Architecture",
        desc: "Discipline is not an emotional state or a temporary motivational spark. It is a strictly engineered execution architecture explicitly deployed to construct true long-term autonomy."
    },
    fitness: {
        title: "Kinetic Performance & Fitness Engine",
        desc: "Optimizing the human hardware layer. Turn physical output into a predictable, engineered variable for sustained high-performance execution."
    },
    yoga: {
        title: "Somatic Alignment & Flow Systems",
        desc: "Biomechanical precision meets conscious regulation. Systematically clearing internal bandwidth and enhancing neural operational flexibility."
    },
    mindset: {
        title: "Cognitive Architecture & Mindset Calibration",
        desc: "Deconstructing emotional variance. Engineering a resilient conscious layer optimized to maintain high-velocity execution profiles under pressure."
    }
};

/* ---------------- PRODUCTION STATIC RUNTIME PARSER ---------------- */
export async function generateStaticParams() {
    return [
        { category: "discipline" },
        { category: "fitness" },
        { category: "yoga" },
        { category: "mindset" }
    ];
}

/* ---------------- PRODUCTION SEO METADATA ---------------- */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { category } = await params;
    const targetCategory = normalize(category);
    const seoConfig = frameworkConfig[targetCategory] || {
        title: `${category.toUpperCase()} Matrix Blueprint`,
        desc: `NomadLifeXP operational dynamic execution pipeline matrix for ${category}.`
    };

    return {
        title: `${seoConfig.title} | NomadLifeXP`,
        description: seoConfig.desc,
        alternates: {
            canonical: `https://nomadlifexp.com/blog/category/${targetCategory}`,
        },
        openGraph: {
            title: `${seoConfig.title} | NomadLifeXP`,
            description: seoConfig.desc,
            url: `https://nomadlifexp.com/blog/category/${targetCategory}`,
            type: "website",
        },
    };
}

/* ---------------- OPERATIONAL CATEGORY ROUTE ENGINE ---------------- */
export default async function CategoryPage({ params }: PageProps) {
    const { category } = await params;
    const targetCategory = normalize(category);

    const recognizedCategories = ["discipline", "fitness", "yoga", "mindset"];
    if (!recognizedCategories.includes(targetCategory)) {
        notFound();
    }

    const rawPosts = getAllPosts() || [];

    // 🛡️ 100% BULLETPROOF STRING DETECTOR MATRIX MATCHED TO THE SYSTEM WORKFLOW
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

    // Sanitize and dynamic rewrite variables using the protection system
    const verifiedPosts: SystemPost[] = rawPosts.map((p) => {
        const titleText = typeof p?.title === "string" ? p.title : "";
        const rawCat = typeof p?.category === "string" ? p.category : "";
        const systemCategory = matchCategoryByTitleAndMetadata(titleText, rawCat);

        return {
            slug: typeof p?.slug === "string" ? p.slug : "",
            title: titleText || "Untitled Node",
            description: typeof p?.description === "string" ? p.description : "",
            category: systemCategory
        };
    });

    const filteredArticles = verifiedPosts.filter(
        (post) => post && normalize(post.category) === targetCategory
    );

    const activeLayout = frameworkConfig[targetCategory];

    return (
        <div className="relative min-h-screen bg-[#050914] text-[#EDF6FF] antialiased font-sans selection:bg-cyan-500 selection:text-black overflow-hidden">

            {/* Ambient Lighting Accents */}
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neutral-800/10 rounded-full blur-[140px] pointer-events-none" />

            {/* Technical Matrix Grid Background Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Content Area Matrix */}
            <main className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">

                {/* Navigation Breadcrumb Node Block */}
                <nav className="mb-12 flex flex-wrap items-center gap-6 border-b border-neutral-900/60 pb-6" aria-label="Breadcrumb">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                        <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">&larr;</span>
                        RETURN_TO_HOME
                    </Link>
                    <span className="text-neutral-800 font-mono text-xs" aria-hidden="true">/</span>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-cyan-400 transition-colors duration-200"
                    >
                        RETURN_TO_DIRECTORY
                    </Link>
                </nav>

                {/* Left-Aligned Dynamic Category Header Block */}
                <header className="mb-20 max-w-5xl space-y-5">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <p className="text-xs uppercase tracking-[0.4em] font-mono text-cyan-400">
                            NomadLifeXP // Operational Execution Layer
                        </p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
                        The {targetCategory}<br />
                        <span className="bg-gradient-to-r from-white via-neutral-300 to-cyan-400 bg-clip-text text-transparent">
                            System Matrix
                        </span>
                    </h1>
                    <p className="text-base md:text-md font-light leading-relaxed max-w-3xl text-neutral-400 font-mono first-letter:uppercase">
                        {activeLayout?.desc}
                    </p>
                </header>

                {/* Theoretical Foundations Custom Grid Layout */}
                <section className="space-y-6 mb-24" aria-label="Theoretical Foundations Grid">
                    <h2 className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-4">// Theoretical Foundations Grid</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="border border-neutral-900 bg-neutral-950/40 p-8 flex flex-col justify-between hover:border-cyan-500/20 transition-colors duration-300">
                            <div className="space-y-4">
                                <div className="font-mono text-xs text-cyan-400 tracking-wider">01 // Structural Trajectory Definition</div>
                                <p className="text-xs font-light leading-relaxed text-neutral-400">
                                    Acting strictly based on macro-level system setups instead of navigating via fluctuating, short-term neurological emotion.
                                </p>
                            </div>
                        </div>

                        <div className="border border-neutral-900 bg-neutral-950/40 p-8 flex flex-col justify-between hover:border-cyan-500/20 transition-colors duration-300">
                            <div className="space-y-4">
                                <div className="font-mono text-xs text-cyan-400 tracking-wider">02 // Volatile Variable Mitigation</div>
                                <p className="text-xs font-light leading-relaxed text-neutral-400">
                                    Overcoming transient mental motivation by implementing structural environmental control patterns, friction elimination, and rapid identity evolution.
                                </p>
                            </div>
                        </div>

                        <div className="border border-neutral-900 bg-neutral-950/40 p-8 flex flex-col justify-between hover:border-cyan-500/20 transition-colors duration-300">
                            <div className="space-y-4">
                                <div className="font-mono text-xs text-cyan-400 tracking-wider">03 // Systematic Kinetic Execution</div>
                                <p className="text-xs font-light leading-relaxed text-neutral-400">
                                    Constructing reliable behavioral loops using micro-repetition metrics, spatial structure safety designs, and extreme physical space alignments.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dynamic Database Knowledge Modules */}
                <section className="space-y-6 mb-24" aria-label="Knowledge Modules">
                    <h2 className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">// Active Database Knowledge Modules ({filteredArticles.length})</h2>

                    {filteredArticles.length === 0 ? (
                        <div className="border border-neutral-900 bg-neutral-950/40 p-8 text-center">
                            <p className="text-xs font-mono text-neutral-500 uppercase">
                                No active posts found inside the {targetCategory} node pipeline.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {filteredArticles.map((post, idx) => (
                                <div key={post.slug || `${targetCategory}-node-${idx}`} className="border border-neutral-900 bg-neutral-950/40 p-6 flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-300">
                                    <div className="space-y-3 mb-6">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[9px] font-mono tracking-widest text-cyan-400 uppercase">
                                                {post.category}
                                            </span>
                                            <span className="text-neutral-700 font-mono text-[9px] select-none">
                                                SYS_NODE_0{idx + 1}
                                            </span>
                                        </div>
                                        <h3 className="text-white text-base font-bold uppercase tracking-tight group-hover:text-cyan-400 transition-colors duration-200 line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-xs font-light text-neutral-400 leading-relaxed line-clamp-2">
                                            {post.description || "System data node processing description pending framework deployment."}
                                        </p>
                                    </div>
                                    <Link href={`/blog/posts/${post.slug}`} className="inline-flex items-center gap-2 text-xs font-mono uppercase text-cyan-400 hover:text-cyan-300 transition-colors group/link">
                                        Read Analysis <span className="transition-transform duration-200 group-hover/link:translate-x-1" aria-hidden="true">&rarr;</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* Cross-Connect Clean UI Links */}
                <footer className="pt-8 border-t border-neutral-900/60">
                    <h2 className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-6">// Cross-Connect Alternative Nodes</h2>

                    <div className="flex flex-wrap items-center gap-y-4 gap-x-8 text-xs font-mono uppercase tracking-widest">
                        {recognizedCategories
                            .filter((cat) => cat !== targetCategory)
                            .map((cat) => (
                                <Link key={cat} href={`/blog?cat=${cat}`} className="text-neutral-400 hover:text-cyan-400 flex items-center gap-2 transition-colors">
                                    {cat} <span className="text-neutral-700" aria-hidden="true">&rarr;</span>
                                </Link>
                            ))}
                    </div>
                </footer>

            </main>
        </div>
    );
}