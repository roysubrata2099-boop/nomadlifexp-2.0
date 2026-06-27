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
        .filter((p) => normalize(p.category) === "discipline" && p.slug !== "")
        .map((p) => ({
            slug: p.slug,
        }));
}

/* ---------------- PRODUCTION SEO METADATA ---------------- */
export async function generateMetadata(): Promise<Metadata> {
    try {
        return {
            title: "Discipline & Autonomy Architecture | NomadLifeXP",
            description: "Learn how authentic discipline is engineered using deliberate systems, environmental alignment, and identity evolution.",
            alternates: {
                canonical: "/discipline-system",
            },
        };
    } catch {
        return {
            title: "Discipline System Architecture",
        };
    }
}

/* ---------------- OPERATIONAL LAYER RUNTIME ---------------- */
export default function DisciplinePage() {
    const rawPosts = (posts || []) as unknown[];

    // Standardized type-safe verification layer protecting data properties
    const verifiedPosts: PostDataShape[] = rawPosts.map((p: any) => ({
        slug: typeof p?.slug === "string" ? p.slug : "",
        title: typeof p?.title === "string" ? p.title : "Untitled Node",
        description: typeof p?.description === "string" ? p.description : "",
        category: typeof p?.category === "string" ? p.category : ""
    }));

    // Queries database cleanly via verified category references
    const disciplineArticles = verifiedPosts.filter(
        (post) => normalize(post.category) === "discipline"
    );

    if (!disciplineArticles || disciplineArticles.length === 0) {
        notFound();
    }

    // Static definition of peripheral connection pathways to prevent client hydration mismatch
    const alternativeNodes: string[] = ["fitness", "yoga", "mindset"];

    return (
        <main className="min-h-screen bg-black text-neutral-200 px-6 py-24 selection:bg-neutral-800 selection:text-white antialiased">

            {/* HERO MODULE */}
            <header className="max-w-3xl mx-auto text-center space-y-6 mb-24">
                <span className="text-xs uppercase tracking-[0.2em] text-amber-500 font-medium">
                    System Core Alignment
                </span>
                <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight">
                    The Discipline System
                </h1>
                <p className="text-neutral-400 font-light max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
                    Discipline is not an emotional state or a motivation spark. It is execution architecture designed to construct long-term autonomy.
                </p>
            </header>

            {/* THEORETICAL FOUNDATION MATRIX */}
            <section className="max-w-3xl mx-auto space-y-8 mb-28">
                {[
                    {
                        title: "What is Discipline?",
                        text: "Acting strictly based on macro-level system trajectory instead of fluctuating, short-term neurological emotion."
                    },
                    {
                        title: "Why Most Systems Fail",
                        text: "Relying on transient mental motivation instead of localized environmental control patterns, friction elimination, and identity evolution."
                    },
                    {
                        title: "The Engineering Framework",
                        text: "Constructed intentionally using micro-repetition metrics, spatial structure safety layouts, and environment alignment."
                    }
                ].map((core, idx) => (
                    <div
                        key={`foundation-${idx}`}
                        className="space-y-3"
                    >
                        <h2 className="text-lg font-medium text-white tracking-tight">
                            {core.title}
                        </h2>
                        <p className="text-base text-neutral-400 font-light leading-relaxed">
                            {core.text}
                        </p>
                    </div>
                ))}
            </section>

            {/* LIVE KNOWLEDGE NODES GRID */}
            <section className="max-w-5xl mx-auto mb-28 space-y-8">
                <div className="border-b border-neutral-900 pb-4">
                    <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium">
                        Active Database Knowledge Modules
                    </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    {disciplineArticles.map((post, idx) => (
                        <Link
                            key={post.slug || `discipline-node-${idx}`}
                            href={`/blog/posts/${post.slug || "empty"}`}
                            className="p-8 border border-neutral-950 bg-neutral-900/20 rounded-none hover:border-neutral-800 hover:bg-neutral-900/30 transition-all duration-300 group flex flex-col justify-between space-y-8 h-full"
                        >
                            <div className="space-y-3 flex-grow">
                                <h3 className="text-lg font-medium text-white group-hover:text-neutral-300 transition-colors tracking-tight line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-neutral-400 font-light line-clamp-2 leading-relaxed">
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

            {/* ROUTE MANAGEMENT FOOTER */}
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