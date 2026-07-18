import { getAllPosts } from "@/lib/markdown";
import type { Metadata } from "next";
import Link from "next/link";

interface SystemPost {
    slug: string;
    title: string;
    description: string;
}

function safeString(value: unknown): string {
    if (typeof value !== "string") {
        return "";
    }
    return value.trim();
}

function safeSlug(value: unknown): string {
    return safeString(value)
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "")
        .trim();
}

export const metadata: Metadata = {
    title: "Yoga &amp; Somatic Intelligence | NomadLifeXP",
    description: "Cultivate somatic intelligence, attention control protocols, and neurological stability.",
    alternates: {
        canonical: "https://nomadlifexp.com/yoga",
    },
};

export default function YogaPage() {
    const rawPosts = getAllPosts() ?? [];

    const yogaArticles: SystemPost[] = rawPosts
        .filter((post) => safeString(post?.category).toLowerCase() === "yoga")
        .map((post) => ({
            slug: safeSlug(post.slug),
            title: safeString(post.title) || "Untitled Knowledge Node",
            description: safeString(post.description) || "System description unavailable."
        }))
        .filter((post) => post.slug.length > 0);

    const alignmentMetrics = [
        {
            title: "Core Definition Framework",
            desc: "A body intelligence system designed to improve attention control through breathing mechanics, awareness, and nervous system regulation."
        },
        {
            title: "System Alignment Metric",
            desc: "Somatic alignment strengthens the connection between intention, movement, and conscious execution."
        }
    ];

    const systemOutputs = [
        "Refined Focus & Attention Isolation",
        "Nervous System Regulation Under Stress",
        "Enhanced Somatosensory Awareness",
        "Improved Cognitive Stability"
    ];

    const crossLinks = [
        { name: "discipline", href: "/discipline" },
        { name: "fitness", href: "/fitness" },
        { name: "mindset", href: "/mindset" }
    ];

    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            <main className="relative z-10 max-w-7xl mx-auto px-6 py-32">
                <nav className="flex gap-5 border-b border-neutral-900 pb-6 mb-16 font-mono text-xs uppercase tracking-[0.3em]">
                    <Link href="/" className="text-neutral-500 hover:text-white">
                        &larr; RETURN_TO_HOME
                    </Link>
                    <span className="text-neutral-800">/</span>
                    <Link href="/blog" className="text-neutral-500 hover:text-white">
                        RETURN_TO_DIRECTORY
                    </Link>
                </nav>

                <header className="mb-20 max-w-5xl">
                    <p className="mb-6 text-xs font-mono uppercase tracking-[0.4em] text-neutral-400">
                        NomadLifeXP // Somatic Intelligence Layer
                    </p>
                    <h1 className="text-5xl md:text-7xl font-black uppercase leading-none">
                        THE YOGA
                        <br />
                        <span className="text-neutral-400">OPERATIONAL SYSTEM</span>
                    </h1>
                    <p className="mt-8 max-w-3xl font-mono text-neutral-400 leading-relaxed">
                        Yoga is not cosmetic flexibility. It is a practical system for controlling attention, breathing mechanics, and physiological awareness.
                    </p>
                </header>

                <section className="mb-20">
                    <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.4em] text-neutral-500">
                        // CORE DEFINITION FRAMEWORK
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {alignmentMetrics.map((item) => (
                            <div key={item.title} className="border border-neutral-800 bg-neutral-950 p-8">
                                <h3 className="text-white font-mono uppercase text-sm mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-20 border border-neutral-900 p-8">
                    <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
                        // SYSTEM BENEFITS &amp; OUTPUTS
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {systemOutputs.map((item) => (
                            <div key={item} className="text-sm text-neutral-400 font-mono">
                                &bull; {item}
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.4em] text-neutral-500">
                        // ACTIVE DATABASE KNOWLEDGE MODULES
                    </h2>

                    {yogaArticles.length === 0 ? (
                        <div className="border border-neutral-800 p-8 font-mono text-neutral-500">
                            [SYSTEM] NO YOGA NODES FOUND.
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 gap-6">
                            {yogaArticles.map((post) => (
                                <article key={post.slug} className="border border-neutral-800 bg-neutral-950 p-8">
                                    <h3 className="font-bold uppercase mb-4">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-neutral-400 mb-6">
                                        {post.description}
                                    </p>
                                    <Link
                                        href={`/blog/posts/${post.slug}`}
                                        className="text-xs font-mono uppercase text-cyan-400"
                                    >
                                        OPEN ARTICLE &rarr;
                                    </Link>
                                </article>
                            ))}
                        </div>
                    )}
                </section>

                <footer className="mt-24 border-t border-neutral-900 pt-10">
                    <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-neutral-500">
                        // CROSS-CONNECT ALTERNATIVE NODES
                    </h2>
                    <div className="flex gap-8 font-mono text-xs uppercase">
                        {crossLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-neutral-400 hover:text-white"
                            >
                                {item.name} &rarr;
                            </Link>
                        ))}
                    </div>
                </footer>
            </main>
        </div>
    );
}