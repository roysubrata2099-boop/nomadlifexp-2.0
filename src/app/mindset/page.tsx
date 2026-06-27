import { posts } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Enforce an explicit shape for incoming mock data elements
interface PostDataShape {
    slug: string;
    title: string;
    description: string;
    category: string;
}

function normalize(str: string = ""): string {
    return str.toLowerCase().trim();
}

/* ---------------- PRODUCTION STATIC RUNTIME PARSER ---------------- */
export async function generateStaticParams() {
    const rawPosts = (posts || []) as any[];
    return rawPosts
        .filter((p) => normalize(p?.category) === "mindset")
        .map((p) => ({
            slug: p.slug || "",
        }));
}

/* ---------------- PRODUCTION SEO METADATA ---------------- */
export async function generateMetadata(): Promise<Metadata> {
    try {
        return {
            title: "Mindset Architecture | NomadLifeXP",
            description: "Deconstruct subconscious programming, build robust psychological frameworks, and re-engineer cognitive biases.",
            alternates: {
                canonical: "/mindset",
            },
        };
    } catch (e) {
        return {
            title: "Mindset Architecture Matrix",
        };
    }
}

/* ---------------- OPERATIONAL MINDSET ENGINE ---------------- */
export default function MindsetPage() {
    // Coerce raw data collection through safe type interface mapping
    const typedPosts = (posts || []) as PostDataShape[];

    // Collect active elements utilizing type-safe normalization parameters
    const mindsetPosts = typedPosts.filter(
        (post) => post && normalize(post.category) === "mindset"
    );

    if (!mindsetPosts || mindsetPosts.length === 0) {
        notFound();
    }

    // Automatically map peripheral vectors for clean modular connecting links
    const alternativeNodes: string[] = ["discipline", "fitness", "yoga"];

    return (
        <main className="min-h-screen bg-black text-neutral-200 px-6 py-24 selection:bg-neutral-800 selection:text-white antialiased">

            {/* HERO MODULE */}
            <header className="max-w-3xl mx-auto text-center space-y-6 mb-24">
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium">
                    Cognitive Operating Layer
                </span>
                <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight">
                    The Mindset System
                </h1>
                <p className="text-neutral-400 font-light max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
                    Perception is an adjustable framework. True psychological resilience is built through intentional identity architecture, cognitive parsing optimization, and systematic removal of mental variables.
                </p>
            </header>

            {/* LIVE KNOWLEDGE NODES GRID */}
            <section className="max-w-5xl mx-auto mb-28 space-y-8">
                <div className="border-b border-neutral-900 pb-4">
                    <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium">
                        Active Database Knowledge Modules
                    </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    {mindsetPosts.map((post) => (
                        <Link
                            key={post.slug || post.title}
                            href={`/blog/posts/${post.slug || ""}`}
                            rel="noopener noreferrer"
                            className="p-8 border border-neutral-950 bg-neutral-900/20 rounded-none hover:border-neutral-800 hover:bg-neutral-900/30 transition-all duration-300 group flex flex-col justify-between space-y-8"
                        >
                            <div className="space-y-3">
                                <h3 className="text-lg font-medium text-white group-hover:text-neutral-300 transition-colors tracking-tight line-clamp-2">
                                    {post.title || "Untitled Node"}
                                </h3>
                                <p className="text-sm text-neutral-400 font-light line-clamp-2 leading-relaxed">
                                    {post.description || ""}
                                </p>
                            </div>
                            <span className="text-xs font-medium text-neutral-500 group-hover:text-white transition-colors tracking-wide block">
                                Open Stream →
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
                            key={cat}
                            href={`/blog/category/${cat}`}
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 text-xs uppercase tracking-wider border border-neutral-900 text-neutral-400 bg-transparent hover:text-white hover:border-neutral-600 transition-colors"
                        >
                            {cat}
                        </Link>
                    ))}
                </div>

                {/* FOOTER METRICS IDENTITY */}
                <p className="pt-12 text-neutral-600 font-mono text-[10px] uppercase tracking-[0.3em]">
                    Discipline / Fitness / Yoga / Mindset
                </p>
            </footer>

        </main>
    );
}