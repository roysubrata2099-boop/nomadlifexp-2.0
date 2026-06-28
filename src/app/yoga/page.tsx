import { posts } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface SystemPost {
    slug: string;
    title: string;
    description: string;
    category: string;
}

function normalize(str: string | undefined | null): string {
    if (!str) return "";
    return String(str).toLowerCase().trim();
}

/* ---------------- PRODUCTION STATIC RUNTIME PARSER ---------------- */
export async function generateStaticParams(): Promise<{ slug: string }[]> {
    const rawPosts = (posts || []) as any[];
    return rawPosts
        .filter((p) => typeof p === "object" && p !== null)
        .map((p) => ({
            slug: typeof p.slug === "string" ? p.slug : "",
            category: typeof p.category === "string" ? p.category : ""
        }))
        .filter((p) => normalize(p.category) === "yoga" && p.slug !== "")
        .map((p) => ({
            slug: p.slug,
        }));
}

/* ---------------- PRODUCTION SEO METADATA ---------------- */
export async function generateMetadata(): Promise<Metadata> {
    try {
        return {
            title: "Yoga & Somatic Intelligence | NomadLifeXP",
            description: "Cultivate refined somatic intelligence, attention-control protocols, and neurological stability under operational stress.",
            alternates: {
                canonical: "https://nomadlifexp.com/yoga",
            },
            openGraph: {
                title: "Yoga & Somatic Intelligence | NomadLifeXP",
                description: "Cultivate refined somatic intelligence, attention-control protocols, and neurological stability under operational stress.",
                url: "https://nomadlifexp.com/yoga",
                type: "website",
            },
        };
    } catch {
        return {
            title: "Yoga & Somatic Intelligence",
        };
    }
}

/* ---------------- OPERATIONAL YOGA ENGINE ---------------- */
export default function YogaPage() {
    const rawPosts = (posts || []) as any[];

    // Coerce raw data collection through safe type interface mapping
    const verifiedPosts: SystemPost[] = rawPosts.map((p) => ({
        slug: typeof p?.slug === "string" ? p.slug : "",
        title: typeof p?.title === "string" ? p.title : "Untitled Node",
        description: typeof p?.description === "string" ? p.description : "",
        category: typeof p?.category === "string" ? p.category : ""
    }));

    // Collect active elements utilizing type-safe normalization parameters
    const yogaArticles = verifiedPosts.filter(
        (post) => post && normalize(post.category) === "yoga"
    );

    if (!yogaArticles || yogaArticles.length === 0) {
        notFound();
    }

    const alternativeNodes: string[] = ["discipline", "fitness", "mindset"];

    const alignmentMetrics = [
        {
            title: "Core Definition Framework",
            desc: "A direct body intelligence tool designed to train focus and attention control through the nervous system. It establishes fundamental internal stability and operational body awareness."
        },
        {
            title: "System Alignment Metric",
            desc: "Without calibrated physical and breathing awareness, baseline discipline limits break down under pressure. Somatic alignment strengthens the direct link between intention and action."
        }
    ];

    const systemOutputs = [
        "Refined Focus & Attention Isolation",
        "Nervous System Regulation Under Stress",
        "Enhanced Somatosensory Body Mapping",
        "Heightened Metacognitive Mental Clarity"
    ];

    return (
        <>
            {/* Mainframe Canvas */}
            <div className="relative min-h-screen bg-black text-white antialiased font-sans selection:bg-neutral-800 selection:text-white overflow-hidden">

                {/* Ambient Lighting Accents */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neutral-500/5 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-zinc-500/5 rounded-full blur-[140px] pointer-events-none" />

                {/* Mainframe Technical Matrix Grid Background Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

                {/* Content Area Matrix */}
                <div className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">

                    {/* Navigation Breadcrumb Node Block */}
                    <div className="mb-12 flex flex-wrap items-center gap-6 border-b border-neutral-900 pb-6">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-white transition-colors duration-200 group"
                        >
                            <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">←</span>
                            RETURN_TO_HOME
                        </Link>
                        <span className="text-neutral-800 font-mono text-xs" aria-hidden="true">/</span>
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-white transition-colors duration-200 group"
                        >
                            RETURN_TO_DIRECTORY
                        </Link>
                    </div>

                    {/* Left-Aligned Technical Header Block */}
                    <header className="mb-16 max-w-5xl space-y-5">
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-neutral-400 animate-pulse" />
                            <p className="text-xs uppercase tracking-[0.4em] font-mono text-neutral-400">
                                NomadLifeXP // Somatic Intelligence Layer
                            </p>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
                            The Yoga<br />
                            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                                Operational System
                            </span>
                        </h1>
                        <p className="text-base md:text-lg font-light leading-relaxed max-w-3xl text-neutral-400 font-mono">
                            Yoga is not cosmetic flexibility. It is the practical capacity to isolate, direct, and control conscious attention utilizing targeted breathing patterns and physiological mechanics.
                        </p>
                    </header>

                    {/* Non-Negotiable Parameter Terminal Block Console */}
                    <div className="flex flex-col gap-8 mb-16 bg-black border border-neutral-900 p-6 md:p-8 rounded-none relative">
                        <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
                            <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">// Core Definition Framework Mapping</span>
                            <div className="flex gap-1.5 items-center">
                                <span className="w-1.5 h-1.5 bg-neutral-800" />
                                <span className="w-1.5 h-1.5 bg-neutral-800" />
                                <span className="w-1.5 h-1.5 bg-white animate-pulse" />
                            </div>
                        </div>

                        <div className="space-y-8 divide-y divide-neutral-900 w-full">
                            {alignmentMetrics.map((metric, index) => (
                                <div key={metric.title} className={`flex flex-col md:flex-row md:items-start md:justify-between gap-4 group ${index !== 0 ? 'pt-8' : ''}`}>
                                    <div className="space-y-2 max-w-3xl">
                                        <h3 className="text-white text-sm font-mono font-bold uppercase tracking-wider group-hover:text-neutral-400 transition-colors duration-300">
                                            {index + 1} / {metric.title}
                                        </h3>
                                        <p className="text-sm font-light leading-relaxed text-neutral-400">
                                            {metric.desc}
                                        </p>
                                    </div>
                                    <div className="pt-1 shrink-0">
                                        <span className="text-neutral-700 font-mono text-xs select-none" aria-hidden="true">
                                            [SOMATIC_METRIC_0{index + 1}]
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* TARGET CORE UPGRADES OUTLINE */}
                    <div className="mb-20 bg-neutral-950/40 border border-neutral-900 p-6 md:p-8">
                        <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-mono font-bold mb-6">
                            // System Benefits & Outputs
                        </h2>
                        <div className="grid gap-4 sm:grid-cols-2 text-sm text-neutral-400 font-mono">
                            {systemOutputs.map((output, idx) => (
                                <div key={`output-${idx}`} className="flex items-center space-x-3 group">
                                    <span className="h-1.5 w-1.5 bg-neutral-700 group-hover:bg-white transition-colors" />
                                    <span className="group-hover:text-white transition-colors">{output}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* LIVE KNOWLEDGE NODES GRID */}
                    <section className="mb-16 space-y-6">
                        <div className="border-b border-neutral-900 pb-4">
                            <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-mono font-bold">
                                // Active Database Knowledge Modules
                            </h2>
                        </div>

                        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                            {yogaArticles.map((post, idx) => (
                                <Link
                                    key={post.slug || `yoga-node-${idx}`}
                                    href={`/blog/posts/${post.slug}`}
                                    className="p-8 border border-neutral-900 bg-neutral-950/20 backdrop-blur-sm rounded-none hover:border-neutral-700 transition-all duration-300 group flex flex-col justify-between space-y-8"
                                >
                                    <div className="space-y-3">
                                        <h3 className="text-lg font-bold text-white uppercase tracking-tight group-hover:text-neutral-300 transition-colors line-clamp-2">
                                            {post.title || "Untitled Node"}
                                        </h3>
                                        <p className="text-sm text-neutral-400 font-light line-clamp-2 leading-relaxed">
                                            {post.description || ""}
                                        </p>
                                    </div>
                                    <span className="text-xs font-mono font-bold text-neutral-500 group-hover:text-white transition-colors tracking-wide block">
                                        Open Stream →
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Cross-System Connection Router Node Links */}
                    <footer className="max-w-3xl mx-auto border-t border-neutral-900 pt-16 text-center space-y-6">
                        <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-mono font-bold">
                            // Cross-Connect Alternative Nodes
                        </h4>

                        <div className="flex flex-wrap gap-3 justify-center">
                            {alternativeNodes.map((cat) => (
                                <Link
                                    key={`alt-link-${cat}`}
                                    href={`/blog/category/${cat}`}
                                    className="px-5 py-2.5 text-xs uppercase tracking-wider border border-neutral-900 text-neutral-400 bg-transparent hover:text-white hover:border-neutral-500 transition-colors font-mono"
                                >
                                    {cat}
                                </Link>
                            ))}
                        </div>

                        <p className="pt-12 text-neutral-700 font-mono text-[10px] uppercase tracking-[0.3em] select-none">
                            Discipline / Fitness / Yoga / Mindset
                        </p>
                    </footer>

                </div>
            </div>
        </>
    );
}