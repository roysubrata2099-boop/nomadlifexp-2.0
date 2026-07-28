import "server-only";

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { getAllMDXPosts } from "@/lib/mdx";

const SITE_URL = "https://nomadlifexp.com";

export const metadata: Metadata = {
    title: "Self-Development System Database | NomadLifeXP",
    description:
        "Explore structured transformation systems covering discipline, fitness, yoga, mindset, and personal evolution.",
    alternates: {
        canonical: `${SITE_URL}/blog`,
    },
    openGraph: {
        title: "Self-Development System Database | NomadLifeXP",
        description:
            "Explore structured transformation systems covering discipline, fitness, yoga, mindset, and personal evolution.",
        url: `${SITE_URL}/blog`,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Self-Development System Database | NomadLifeXP",
        description:
            "Explore structured transformation systems covering discipline, fitness, yoga, mindset, and personal evolution.",
    },
};

type SafePost = {
    slug: string;
    title: string;
    description: string;
    category: string;
    image: string;
};

function safeText(value: unknown, fallback: string): string {
    if (typeof value !== "string") {
        return fallback;
    }
    const clean = value.trim();
    return clean || fallback;
}

function slugify(value: string): string {
    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function safeImage(value: unknown): string {
    if (typeof value !== "string") {
        return "";
    }
    const image = value.trim();
    if (!image.startsWith("/")) {
        return "";
    }
    return image;
}

function normalizePosts(): SafePost[] {
    try {
        const raw = getAllMDXPosts();

        if (!Array.isArray(raw)) {
            return [];
        }

        const seen = new Set<string>();

        return raw
            .map((post): SafePost | null => {
                if (!post || typeof post !== "object") return null;

                const title = safeText(
                    (post as Record<string, unknown>).title,
                    "Untitled Knowledge Node"
                );

                const slug = slugify(
                    safeText((post as Record<string, unknown>).slug, title)
                );

                if (!slug || seen.has(slug)) {
                    return null;
                }

                seen.add(slug);

                const categoryRaw = safeText(
                    (post as Record<string, unknown>).category,
                    "general"
                );

                return {
                    slug,
                    title,
                    description: safeText(
                        (post as Record<string, unknown>).description,
                        "System description unavailable."
                    ),
                    category: slugify(categoryRaw) || "general",
                    image: safeImage((post as Record<string, unknown>).image),
                };
            })
            .filter((post): post is SafePost => post !== null)
            .sort((a, b) => a.title.localeCompare(b.title));
    } catch {
        return [];
    }
}

export default function BlogV2Page() {
    const posts = normalizePosts();

    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden antialiased">
            {/* Background glow effects */}
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            <main className="relative z-10 max-w-7xl mx-auto px-6 py-28">
                {/* Navigation Breadcrumb */}
                <nav className="flex items-center gap-3 border-b border-neutral-900 pb-6 mb-16 font-mono text-xs tracking-[0.3em] uppercase">
                    <Link
                        href="/"
                        className="text-neutral-500 hover:text-cyan-400 transition-colors"
                    >
                        ← RETURN_TO_HOME
                    </Link>
                    <span className="text-neutral-800">/</span>
                    <Link
                        href="/blog"
                        className="text-cyan-400 font-bold hover:text-cyan-300 transition-colors"
                    >
                        SYSTEM_DATABASE
                    </Link>
                </nav>

                <header className="max-w-5xl mb-20">
                    <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400 mb-4">
                        NomadLifeXP // Transformation Architecture
                    </p>

                    <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight">
                        SELF DEVELOPMENT <br />
                        <span className="bg-gradient-to-r from-white via-neutral-400 to-cyan-400 bg-clip-text text-transparent">
                            SYSTEM DATABASE
                        </span>
                    </h1>

                    <p className="mt-8 max-w-3xl text-neutral-400 font-mono text-sm leading-relaxed">
                        Explore structured transformation systems covering discipline, fitness, yoga, mindset, and personal evolution.
                    </p>
                </header>

                <section>
                    {posts.length === 0 ? (
                        <div className="p-12 border border-neutral-900 bg-neutral-950/40 rounded-2xl text-center">
                            <p className="text-neutral-500 font-mono text-sm">
                                No active knowledge nodes found in database.
                            </p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 gap-8">
                            {posts.map((post) => (
                                <article
                                    key={post.slug}
                                    className="group flex flex-col justify-between border border-neutral-800 bg-neutral-950/50 p-8 rounded-2xl hover:border-cyan-500/40 transition-all duration-300"
                                >
                                    <div>
                                        {post.image && (
                                            <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800/80">
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    fill
                                                    priority={false}
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        )}

                                        <div className="mb-4">
                                            <Link
                                                href={`/blog/category/${encodeURIComponent(post.category)}`}
                                                className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-wider font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/40 hover:bg-cyan-900 transition-colors"
                                            >
                                                {post.category}
                                            </Link>
                                        </div>

                                        <h2 className="text-xl font-bold uppercase tracking-tight group-hover:text-cyan-300 transition-colors">
                                            {post.title}
                                        </h2>

                                        <p className="mt-3 text-sm text-neutral-400 leading-relaxed font-light">
                                            {post.description}
                                        </p>
                                    </div>

                                    <div className="mt-8 pt-4 border-t border-neutral-900">
                                        <Link
                                            href={`/blog/posts/${encodeURIComponent(post.slug)}`}
                                            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-cyan-400 hover:text-cyan-300 font-bold transition-colors"
                                        >
                                            READ ARTICLE <span>&rarr;</span>
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}