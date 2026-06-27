import { posts } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PostDataShape {
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
    const rawPosts = (posts || []) as unknown[];
    return rawPosts
        .map((p: any) => ({
            slug: typeof p?.slug === "string" ? p.slug : "",
            category: typeof p?.category === "string" ? p.category : ""
        }))
        .filter((p) => normalize(p.category) === "fitness" && p.slug !== "")
        .map((p) => ({
            slug: p.slug,
        }));
}

/* ---------------- PRODUCTION SEO METADATA ---------------- */
export async function generateMetadata(): Promise<Metadata> {
    try {
        return {
            title: "Fitness & Physical Capacity | NomadLifeXP",
            description: "Engineered frameworks designed to cultivate elite functional capacity, core physical output strength, and long-term longevity.",
            alternates: {
                canonical: "/fitness",
            },
        };
    } catch {
        return {
            title: "Fitness System Architecture",
        };
    }
}

/* ---------------- OPERATIONAL FITNESS ENGINE ---------------- */
export default function FitnessPage() {
    const rawPosts = (posts || []) as unknown[];

    // Standardized type-safe verification layer protecting data properties
    const verifiedPosts: PostDataShape[] = rawPosts.map((p: any) => ({
        slug: typeof p?.slug === "string" ? p.slug : "",
        title: typeof p?.title === "string" ? p.title : "Untitled Node",
        description: typeof p?.description === "string" ? p.description : "",
        category: typeof p?.category === "string" ? p.category : ""
    }));

    // Collect active metrics specifically cataloged within the fitness sector
    const fitnessArticles = verifiedPosts.filter(
        (post) => normalize(post.category) === "fitness"
    );

    if (!fitnessArticles || fitnessArticles.length === 0) {
        notFound();
    }

    // Static extraction for cross-connection nodes to ensure zero hydration mismatch
    const alternativeNodes: string[] = ["discipline", "yoga", "mindset"];

    return (
        <main className="min-h-screen bg-black text-neutral-200 px-6 py-24 selection:bg-neutral-800 selection:text-white antialiased">

            {/* HEADER PANEL */}
            <header className="max-w-3xl mx-auto text-center space-y-6 mb-24">
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium">
                    Physical Output Optimization
                </span>
                <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight">
                    The Fitness System
                </h1>
                <p className="text-neutral-400 font-light max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
                    Physical capacity is an engineering baseline. True progression relies heavily on structural, rhythmic execution consistency—never short-term sporadic intensity.
                </p>
            </header>

            {/* CORE CONCEPTS GRID */}
            <section className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2 mb-28">
                {[
                    {
                        title: "The Intensity Delusion",
                        text: "Relying on rare, destructive workout sessions creates physical regression. Sustainable, calculated micro-stress variables yield long-term muscle adaptations."
                    },
                    {
                        title: "Environment Optimization",
                        text: "Your workout schedule must be anchored directly into physical room space or micro-structures that limit execution friction variables."
                    }
                ].map((concept, idx) => (
                    <div
                        key={`concept-${idx}`}
                        className="border border-neutral-950 bg-neutral-900/10 rounded-none p-8 space-y-3 hover:border-neutral-800 transition-colors"
                    >
                        <h2 className="text-lg font-medium text-white tracking-tight">
                            {concept.title}
                        </h2>
                        <p className="text-sm text-neutral-400 font-light leading-relaxed">
                            {concept.text}
                        </p>
                    </div>
                ))}
            </section>

            {/* SYSTEM KNOWLEDGE PIPELINE */}
            <section className="max-w-5xl mx-auto mb-28 space-y-8">
                <div className="border-b border-neutral-900 pb-4">
                    <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium">
                        Active Database Knowledge Modules
                    </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-3">
                    {fitnessArticles.map((post, idx) => (
                        <Link
                            key={post.slug || `fitness-node-${idx}`}
                            href={`/blog/posts/${post.slug || "empty"}`}
                            className="p-8 border border-neutral-950 bg-neutral-900/20 rounded-none hover:border-neutral-800 hover:bg-neutral-900/30 transition-all duration-300 group flex flex-col justify-between space-y-8 h-full"
                        >
                            <div className="space-y-3 flex-grow">
                                <h3 className="text-base font-medium text-white group-hover:text-neutral-300 transition-colors tracking-tight line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-neutral-400 font-light line-clamp-3 leading-relaxed">
                                    {post.description}
                                </p>
                            </div>
                            <span className="text-xs font-medium text-neutral-500 group-hover:text-white transition-colors tracking-wide block pt-4">
                                Read Article →
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ROUTE MANAGEMENT LINK SYSTEM */}
            <footer className="max-w-3xl mx-auto border-t border-neutral-900 pt-16 text-center space-y-6">
                <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium">
                    Cross-Connect Alternative Nodes
                </h4>

                <div className="flex flex-wrap gap-3 justify-center">
                    {alternativeNodes.map((cat) => (
                        <Link
                            key={`alt-node-${cat}`}
                            href={`/blog/category/${cat}`}
                            className="px-5 py-2.5 text-xs uppercase tracking-wider border border-neutral-900 text-neutral-400 bg-transparent hover:text-white hover:border-neutral-600 transition-colors"
                        >
                            {cat}
                        </Link>
                    ))}
                </div>

                <p className="pt-12 text-neutral-600 font-mono text-[10px] uppercase tracking-[0.3em]">
                    Discipline / Fitness / Yoga / Mindset
                </p>
            </footer>

        </main>
    );
}