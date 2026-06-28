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
export async function generateStaticParams(): Promise<{ slug: string }[]> {
    const rawPosts = (posts || []) as any[];
    return rawPosts
        .filter((p) => typeof p === "object" && p !== null)
        .map((p) => ({
            slug: typeof p.slug === "string" ? p.slug : "",
            category: typeof p.category === "string" ? p.category : ""
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
                canonical: "https://nomadlifexp.com/blog/category/discipline",
            },
            openGraph: {
                title: "Discipline & Autonomy Architecture | NomadLifeXP",
                description: "Learn how authentic discipline is engineered using deliberate systems, environmental alignment, and identity evolution.",
                url: "https://nomadlifexp.com/blog/category/discipline",
                type: "website",
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
    const rawPosts = (posts || []) as any[];

    // Standardized type-safe verification layer protecting data properties
    const verifiedPosts: PostDataShape[] = rawPosts.map((p) => ({
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

    const coreFoundations = [
        {
            title: "01 / Structural Trajectory Definition",
            text: "Acting strictly based on macro-level system setups instead of navigating via fluctuating, short-term neurological emotion."
        },
        {
            title: "02 / Volatile Variable Mitigation",
            text: "Overcoming transient mental motivation by implementing structural environmental control patterns, friction elimination, and rapid identity evolution."
        },
        {
            title: "03 / Systematic Kinetic Execution",
            text: "Constructing reliable behavioral loops using micro-repetition metrics, spatial structure safety designs, and extreme physical space alignments."
        }
    ];

    const alternativeNodes: string[] = ["fitness", "yoga", "mindset"];

    return (
        <>
            {/* Mainframe Canvas */}
            <div className="relative min-h-screen bg-black text-white antialiased font-sans selection:bg-amber-500 selection:text-black overflow-hidden">

                {/* Ambient Lighting Accents */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neutral-500/5 rounded-full blur-[140px] pointer-events-none" />

                {/* Mainframe Technical Matrix Grid Background Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

                {/* Content Area Matrix */}
                <div className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">

                    {/* Navigation Breadcrumb Node Block with Animated Arrow Safeguard */}
                    <div className="mb-12 flex flex-wrap items-center gap-6 border-b border-neutral-900 pb-6">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-amber-500 transition-colors duration-200 group"
                        >
                            <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">←</span>
                            RETURN_TO_HOME
                        </Link>
                        <span className="text-neutral-800 font-mono text-xs" aria-hidden="true">/</span>
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-amber-500 transition-colors duration-200"
                        >
                            RETURN_TO_DIRECTORY
                        </Link>
                    </div>

                    {/* Left-Aligned Technical Header Block */}
                    <header className="mb-16 max-w-5xl space-y-5">
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                            <p className="text-xs uppercase tracking-[0.4em] font-mono text-amber-500">
                                NomadLifeXP // Operational Execution Layer
                            </p>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
                            The Discipline<br />
                            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                                System Matrix
                            </span>
                        </h1>
                        <p className="text-base md:text-lg font-light leading-relaxed max-w-3xl text-neutral-400 font-mono">
                            Discipline is not an emotional state or a temporary motivational spark. It is a strictly engineered execution architecture explicitly deployed to construct true long-term autonomy.
                        </p>
                    </header>

                    {/* Non-Negotiable Parameter Terminal Block Console */}
                    <div className="flex flex-col gap-8 mb-16 bg-black border border-neutral-900 p-6 md:p-8 rounded-none relative">

                        {/* Status Bar Section Header */}
                        <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
                            <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">// Theoretical Foundations Grid</span>
                            <div className="flex gap-1.5 items-center">
                                <span className="w-1.5 h-1.5 bg-neutral-800" />
                                <span className="w-1.5 h-1.5 bg-neutral-800" />
                                <span className="w-1.5 h-1.5 bg-amber-500 animate-pulse" />
                            </div>
                        </div>

                        {/* Theoretical Foundation Matrix Layout */}
                        <div className="space-y-8 divide-y divide-neutral-900 w-full">
                            {coreFoundations.map((core, index) => (
                                <div key={core.title} className={`flex flex-col md:flex-row md:items-start md:justify-between gap-4 group ${index !== 0 ? 'pt-8' : ''}`}>
                                    <div className="space-y-2 max-w-3xl">
                                        <h3 className="text-white text-sm font-mono font-bold uppercase tracking-wider group-hover:text-amber-500 transition-colors duration-300">
                                            {core.title}
                                        </h3>
                                        <p className="text-sm font-light leading-relaxed text-neutral-400">
                                            {core.text}
                                        </p>
                                    </div>
                                    <div className="pt-1 shrink-0">
                                        <span className="text-neutral-700 font-mono text-xs select-none" aria-hidden="true">
                                            [CORE_THRY_0{index + 1}]
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* LIVE KNOWLEDGE NODES GRID (Standardized to matching 3-column Blog Grid layout parameters) */}
                    <section className="mb-16 space-y-6">
                        <div className="border-b border-neutral-900 pb-4">
                            <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-mono font-bold">
                                // Active Database Knowledge Modules
                            </h2>
                        </div>

                        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                            {disciplineArticles.map((post, idx) => (
                                <Link
                                    key={post.slug || `discipline-node-${idx}`}
                                    href={`/blog/posts/${post.slug || "empty"}`}
                                    className="p-8 border border-neutral-900 bg-neutral-950/20 backdrop-blur-sm rounded-none hover:border-amber-500/30 transition-all duration-300 group flex flex-col justify-between space-y-8"
                                >
                                    <div className="space-y-3">
                                        <h3 className="text-base font-bold text-white uppercase tracking-tight group-hover:text-amber-500 transition-colors line-clamp-2">
                                            {post.title || "Untitled Node"}
                                        </h3>
                                        <p className="text-sm text-neutral-400 font-light line-clamp-3 leading-relaxed">
                                            {post.description || ""}
                                        </p>
                                    </div>
                                    <span className="text-xs font-mono font-bold text-neutral-500 group-hover:text-white transition-colors tracking-wide block">
                                        Read Article →
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
                                    key={`alt-node-${cat}`}
                                    href={`/blog/category/${cat}`}
                                    className="px-5 py-2.5 text-xs uppercase tracking-wider border border-neutral-900 text-neutral-400 bg-transparent hover:text-white hover:border-amber-500 transition-colors font-mono"
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