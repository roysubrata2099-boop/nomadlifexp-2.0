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
export async function generateStaticParams() {
    const rawPosts = (posts || []) as any[];
    return rawPosts
        .filter((p) => normalize(p?.category) === "yoga")
        .map((p) => ({
            slug: p.slug || "",
        }));
}

/* ---------------- PRODUCTION SEO METADATA ---------------- */
export async function generateMetadata(): Promise<Metadata> {
    try {
        return {
            title: "Yoga & Somatic Intelligence | NomadLifeXP",
            description: "Cultivate refined somatic intelligence, attention-control protocols, and neurological stability under operational stress.",
            alternates: {
                canonical: "/yoga",
            },
        };
    } catch (e) {
        return {
            title: "Yoga & Somatic Intelligence",
        };
    }
}

/* ---------------- OPERATIONAL YOGA ENGINE ---------------- */
export default function YogaPage() {
    const rawPosts = (posts || []) as unknown[];

    const verifiedPosts: SystemPost[] = rawPosts.map((p: any) => ({
        slug: typeof p?.slug === "string" ? p.slug : "",
        title: typeof p?.title === "string" ? p.title : "Untitled Node",
        description: typeof p?.description === "string" ? p.description : "",
        category: typeof p?.category === "string" ? p.category : ""
    }));

    const yogaArticles = verifiedPosts.filter(
        (post) => normalize(post.category) === "yoga"
    );

    if (!yogaArticles || yogaArticles.length === 0) {
        notFound();
    }

    const alternativeNodes: string[] = ["discipline", "fitness", "mindset"];

    return (
        <main className="min-h-screen bg-black text-neutral-200 px-6 py-24 selection:bg-neutral-800 selection:text-white antialiased">

            {/* HERO SEGMENT */}
            <header className="max-w-3xl mx-auto text-center space-y-6 mb-24">
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium">
                    Somatic Intelligence
                </span>
                <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight">
                    The Yoga System
                </h1>
                <p className="text-neutral-400 font-light max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
                    Yoga is not cosmetic flexibility. It is the practical capacity to isolate, direct, and control conscious attention utilizing targeted breathing patterns and physiological mechanics.
                </p>
            </header>

            {/* CORE ESSAYS & VALUES */}
            <section className="max-w-3xl mx-auto space-y-12 mb-28">
                <div className="space-y-3">
                    <h2 className="text-lg font-medium text-white tracking-tight">
                        Core Definition Framework
                    </h2>
                    <p className="text-base text-neutral-400 font-light leading-relaxed">
                        A direct body intelligence tool designed to train focus and attention control through the nervous system. It establishes fundamental internal stability and operational body awareness.
                    </p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-lg font-medium text-white tracking-tight">
                        System Alignment Metric
                    </h2>
                    <p className="text-base text-neutral-400 font-light leading-relaxed">
                        Without calibrated physical and breathing awareness, baseline discipline limits break down under pressure. Somatic alignment strengthens the direct link between intention and action.
                    </p>
                </div>

                {/* VISUAL DIVIDER */}
                <hr className="border-neutral-900 my-12" />

                {/* TARGET CORE UPGRADES */}
                <div className="space-y-6">
                    <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium">
                        System Benefits & Outputs
                    </h2>

                    <ul className="grid gap-4 sm:grid-cols-2 text-sm text-neutral-400 font-light">
                        <li className="flex items-start space-x-3">
                            <span className="text-neutral-600 mt-0.5">•</span>
                            <span>Refined Focus & Attention Isolation</span>
                        </li>
                        <li className="flex items-start space-x-3">
                            <span className="text-neutral-600 mt-0.5">•</span>
                            <span>Nervous System Regulation Under Stress</span>
                        </li>
                        <li className="flex items-start space-x-3">
                            <span className="text-neutral-600 mt-0.5">•</span>
                            <span>Enhanced Somatosensory Body Mapping</span>
                        </li>
                        <li className="flex items-start space-x-3">
                            <span className="text-neutral-600 mt-0.5">•</span>
                            <span>Heightened Metacognitive Mental Clarity</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* ARTICLES & MODULES GRID */}
            <section className="max-w-5xl mx-auto mb-28 space-y-8">
                <div className="border-b border-neutral-900 pb-4">
                    <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium">
                        Knowledge Database
                    </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    {yogaArticles.map((post, idx) => (
                        <Link
                            key={post.slug || `yoga-node-${idx}`}
                            href={`/blog/posts/${post.slug}`}
                            rel="noopener noreferrer"
                            className="p-8 border border-neutral-950 bg-neutral-900/20 rounded-none hover:border-neutral-800 hover:bg-neutral-900/30 transition-all duration-300 group flex flex-col justify-between space-y-8"
                        >
                            <div className="space-y-3">
                                <h3 className="text-lg font-medium text-white group-hover:text-neutral-300 transition-colors tracking-tight line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-neutral-400 font-light line-clamp-2 leading-relaxed">
                                    {post.description}
                                </p>
                            </div>
                            <span className="text-xs font-medium text-neutral-500 group-hover:text-white transition-colors tracking-wide block">
                                Read Article →
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* CATEGORY EXPLORATION SYSTEM */}
            <footer className="max-w-3xl mx-auto border-t border-neutral-900 pt-16 text-center space-y-6">
                <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium">
                    Explore Other Categories
                </h4>

                <div className="flex flex-wrap gap-3 justify-center">
                    {alternativeNodes.map((cat) => (
                        <Link
                            key={`alt-link-${cat}`}
                            href={`/blog/category/${cat}`}
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 text-xs uppercase tracking-wider border border-neutral-900 text-neutral-400 bg-transparent hover:text-white hover:border-neutral-600 transition-colors"
                        >
                            {cat}
                        </Link>
                    ))}
                </div>

                <p className="pt-12 text-neutral-600 text-[10px] uppercase tracking-[0.3em]">
                    Discipline / Fitness / Yoga / Mindset
                </p>
            </footer>

        </main>
    );
}