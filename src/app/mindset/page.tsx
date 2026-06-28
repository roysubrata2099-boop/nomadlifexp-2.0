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
        .filter((p) => normalize(p.category) === "mindset" && p.slug !== "")
        .map((p) => ({
            slug: p.slug,
        }));
}

/* ---------------- PRODUCTION SEO METADATA ---------------- */
export async function generateMetadata(): Promise<Metadata> {
    try {
        return {
            title: "Isolating Cognitive Focus Controls | Mindset Architecture | NomadLifeXP",
            description: "Deconstruct subconscious programming, build robust psychological frameworks, and re-engineer cognitive biases.",
            alternates: {
                canonical: "https://nomadlifexp.com/mindset",
            },
            openGraph: {
                title: "Isolating Cognitive Focus Controls | Mindset Architecture",
                description: "Deconstruct subconscious programming, build robust psychological frameworks, and re-engineer cognitive biases.",
                url: "https://nomadlifexp.com/mindset",
                type: "website",
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
    const rawPosts = (posts || []) as any[];

    // Coerce raw data collection through safe type interface mapping
    const typedPosts: PostDataShape[] = rawPosts.map((p) => ({
        slug: typeof p?.slug === "string" ? p.slug : "",
        title: typeof p?.title === "string" ? p.title : "Untitled Node",
        description: typeof p?.description === "string" ? p.description : "",
        category: typeof p?.category === "string" ? p.category : ""
    }));

    // Collect active elements utilizing type-safe normalization parameters
    const mindsetPosts = typedPosts.filter(
        (post) => post && normalize(post.category) === "mindset"
    );

    if (!mindsetPosts || mindsetPosts.length === 0) {
        notFound();
    }

    const focusProtocols = [
        {
            rule: "01 / Radical Information Elimination",
            desc: "Treat daily attention as a strictly limited computational resource. Mitigate external attention hijacking by aggressively pruning digital incoming feeds before deep engineering cycles.",
        },
        {
            rule: "02 / Systematic Bias Disruption",
            desc: "Regularly audit core mental frameworks against choice validation biases. Replace emotional operational adjustments with rigid, pre-constructed feedback architecture.",
        },
        {
            rule: "03 / Attention Chamber Integrity",
            desc: "Enforce complete situational isolation. High-leverage cognitive focus executes inside locked, uninterrupted time blocks to maintain baseline execution momentum.",
        }
    ];

    // Automatically map peripheral vectors for clean modular connecting links
    const alternativeNodes: string[] = ["discipline", "fitness", "yoga"];

    return (
        <>
            {/* Mainframe Canvas */}
            <div className="relative min-h-screen bg-black text-white antialiased font-sans selection:bg-cyan-500 selection:text-black overflow-hidden">

                {/* Ambient Lighting Accents */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

                {/* Mainframe Technical Matrix Grid Background Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

                {/* Content Area Matrix */}
                <div className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">

                    {/* Navigation Breadcrumb Node Block */}
                    <div className="mb-12 flex flex-wrap items-center gap-6 border-b border-neutral-900 pb-6">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-cyan-400 transition-colors duration-200 group"
                        >
                            <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">←</span>
                            RETURN_TO_HOME
                        </Link>
                        <span className="text-neutral-800 font-mono text-xs" aria-hidden="true">/</span>
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-cyan-400 transition-colors duration-200 group"
                        >
                            RETURN_TO_DIRECTORY
                        </Link>
                    </div>

                    {/* Left-Aligned Technical Header Block */}
                    <header className="mb-16 max-w-5xl space-y-5">
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                            <p className="text-xs uppercase tracking-[0.4em] font-mono text-cyan-400">
                                NomadLifeXP // Cognitive Operating Layer
                            </p>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
                            The Mindset<br />
                            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                                System Matrix
                            </span>
                        </h1>
                        <p className="text-base md:text-lg font-light leading-relaxed max-w-3xl text-neutral-400 font-mono">
                            Perception is an adjustable framework. True psychological resilience is built through intentional identity architecture, cognitive parsing optimization, and systematic removal of mental variables.
                        </p>
                    </header>

                    {/* Non-Negotiable Parameter Terminal Block Console */}
                    <div className="flex flex-col gap-8 mb-16 bg-black border border-neutral-900 p-6 md:p-8 rounded-none relative">
                        <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
                            <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">// Core Mindset Optimization Parameters</span>
                            <div className="flex gap-1.5 items-center">
                                <span className="w-1.5 h-1.5 bg-neutral-800" />
                                <span className="w-1.5 h-1.5 bg-neutral-800" />
                                <span className="w-1.5 h-1.5 bg-cyan-500 animate-pulse" />
                            </div>
                        </div>

                        <div className="space-y-8 divide-y divide-neutral-900 w-full">
                            {focusProtocols.map((protocol, index) => (
                                <div key={protocol.rule} className={`flex flex-col md:flex-row md:items-start md:justify-between gap-4 group ${index !== 0 ? 'pt-8' : ''}`}>
                                    <div className="space-y-2 max-w-3xl">
                                        <h3 className="text-white text-sm font-mono font-bold uppercase tracking-wider group-hover:text-cyan-400 transition-colors duration-300">
                                            {protocol.rule}
                                        </h3>
                                        <p className="text-sm font-light leading-relaxed text-neutral-400">
                                            {protocol.desc}
                                        </p>
                                    </div>
                                    <div className="pt-1 shrink-0">
                                        <span className="text-neutral-700 font-mono text-xs select-none" aria-hidden="true">
                                            [SYS_CTRL_0{index + 1}]
                                        </span>
                                    </div>
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
                            {mindsetPosts.map((post) => (
                                <Link
                                    key={post.slug || post.title}
                                    href={`/blog/posts/${post.slug || ""}`}
                                    className="p-8 border border-neutral-900 bg-neutral-950/20 backdrop-blur-sm rounded-none hover:border-cyan-500/30 transition-all duration-300 group flex flex-col justify-between space-y-8"
                                >
                                    <div className="space-y-3">
                                        <h3 className="text-lg font-bold text-white uppercase tracking-tight group-hover:text-cyan-400 transition-colors line-clamp-2">
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
                                    key={`alt-node-${cat}`}
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