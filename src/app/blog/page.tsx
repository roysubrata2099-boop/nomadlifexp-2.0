import "server-only";

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { getAllMDXPosts } from "@/lib/mdx";

const SITE_URL = "https://nomadlifexp.com";

export const metadata: Metadata = {
    title: "Human Evolution Insights | NomadLifeXP",
    description:
        "Thoughtful articles exploring discipline, mindset, fitness, yoga, attention, habits, and long-term personal transformation.",
    alternates: {
        canonical: `${SITE_URL}/blog`,
    },
    openGraph: {
        title: "Human Evolution Insights | NomadLifeXP",
        description:
            "Thoughtful articles exploring discipline, mindset, fitness, yoga, attention, habits, and long-term personal transformation.",
        url: `${SITE_URL}/blog`,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Human Evolution Insights | NomadLifeXP",
        description:
            "Thoughtful articles exploring discipline, mindset, fitness, yoga, attention, habits, and long-term personal transformation.",
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
    const clean = value.replace(/[\u200B-\u200D\uFEFF]/g, "").trim();
    return clean || fallback;
}

function slugify(value: unknown): string {
    if (typeof value !== "string") return "";
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
    if (!image.startsWith("/") || image.startsWith("//")) {
        return "";
    }
    return image;
}

function safeCategoryRoute(category: unknown): string {
    const sanitized = slugify(category);
    return sanitized ? `/blog/category/${encodeURIComponent(sanitized)}` : "/blog";
}

function safePostRoute(slug: unknown): string {
    const sanitized = slugify(slug);
    return sanitized ? `/blog/posts/${encodeURIComponent(sanitized)}` : "/blog";
}

function normalizePosts(): SafePost[] {
    try {
        const raw = getAllMDXPosts();

        if (!Array.isArray(raw) || raw.length === 0) {
            return [];
        }

        const seen = new Set<string>();

        return raw
            .map((post): SafePost | null => {
                if (!post || typeof post !== "object") return null;

                const record = post as Record<string, unknown>;

                const title = safeText(record.title, "Untitled Knowledge Node");
                const rawSlug = safeText(record.slug, title);
                const slug = slugify(rawSlug);

                if (!slug || seen.has(slug)) {
                    return null;
                }

                seen.add(slug);

                const categoryRaw = safeText(record.category, "general");

                return {
                    slug,
                    title,
                    description: safeText(
                        record.description,
                        "System description unavailable."
                    ),
                    category: slugify(categoryRaw) || "general",
                    image: safeImage(record.image),
                };
            })
            .filter((post): post is SafePost => post !== null)
            .sort((a, b) => a.title.localeCompare(b.title));
    } catch (err) {
        console.error("[POST_NORMALIZATION_ERROR]:", err);
        return [];
    }
}

export default function BlogV2Page() {
    const posts = normalizePosts();

    const findPostByKeywords = (keywords: string[]) => {
        return posts.find((p) => {
            const lowerTitle = (p?.title || "").toLowerCase();
            return keywords.every((kw) => lowerTitle.includes(kw.toLowerCase()));
        });
    };

    const featuredTitles = [
        ["self-discipline", "why you lack"],
        ["mental clarity", "overthinking"],
        ["fitness consistency", "workout discipline"],
        ["forward bending yoga"],
    ];

    const featuredPosts = featuredTitles
        .map((keywords) => findPostByKeywords(keywords))
        .filter((p): p is SafePost => p !== undefined);

    const finalFeaturedPosts = featuredPosts.length > 0 ? featuredPosts : posts.slice(0, 4);

    const topics = [
        {
            name: "Discipline",
            slug: "discipline",
            description: "Build consistency, self-control, habits, and lasting discipline.",
            count: posts.filter((p) => (p?.category || "").includes("discipline")).length || 4,
        },
        {
            name: "Mindset",
            slug: "mindset",
            description: "Improve focus, attention, resilience, and better decision-making.",
            count: posts.filter((p) => (p?.category || "").includes("mindset")).length || 4,
        },
        {
            name: "Fitness",
            slug: "fitness",
            description: "Develop strength, consistency, movement, and physical capability.",
            count: posts.filter((p) => (p?.category || "").includes("fitness")).length || 4,
        },
        {
            name: "Yoga",
            slug: "yoga",
            description: "Cultivate mobility, balance, breathing, recovery, and mind-body connection.",
            count: posts.filter((p) => (p?.category || "").includes("yoga")).length || 3,
        },
    ];

    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden antialiased">
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            <main className="relative z-10 max-w-7xl mx-auto px-6 py-28">
                <nav className="flex items-center gap-3 border-b border-neutral-900 pb-6 mb-16 font-mono text-xs tracking-[0.3em] uppercase">
                    <Link
                        href="/"
                        className="text-neutral-500 hover:text-cyan-400 transition-colors"
                    >
                        ← HOME
                    </Link>
                </nav>

                <header className="max-w-5xl mb-20">
                    <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight">
                        HUMAN EVOLUTION <br />
                        <span className="bg-gradient-to-r from-white via-neutral-400 to-cyan-400 bg-clip-text text-transparent">
                            INSIGHTS
                        </span>
                    </h1>

                    <p className="mt-8 max-w-3xl text-neutral-400 font-mono text-sm leading-relaxed">
                        Thoughtful articles exploring discipline, mindset, fitness, yoga, attention, habits, and long-term personal transformation.
                    </p>
                </header>

                <section className="mb-24">
                    <div className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-2">
                            Featured Insights
                        </h2>
                        <p className="text-neutral-400 font-mono text-xs tracking-wider uppercase">
                            Start with the foundational articles that introduce the core principles of the NomadLifeXP Human Evolution Framework.
                        </p>
                    </div>

                    {finalFeaturedPosts.length === 0 ? (
                        <div className="p-12 border border-neutral-900 bg-neutral-950/40 rounded-2xl text-center">
                            <p className="text-neutral-500 font-mono text-sm">
                                No featured insights available at the moment.
                            </p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 gap-8">
                            {finalFeaturedPosts.map((post) => (
                                <article
                                    key={`featured-${post.slug}`}
                                    className="group flex flex-col justify-between border border-neutral-800 bg-neutral-950/50 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300"
                                >
                                    <div>
                                        {post.image ? (
                                            <div className="relative w-full aspect-[16/9] bg-neutral-900 overflow-hidden">
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        ) : null}

                                        <div className="p-8 pb-4">
                                            <div className="mb-4">
                                                <Link
                                                    href={safeCategoryRoute(post.category)}
                                                    className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-wider font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/40 hover:bg-cyan-900 transition-colors"
                                                >
                                                    {post.category}
                                                </Link>
                                            </div>

                                            <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-cyan-300 transition-colors">
                                                {post.title}
                                            </h3>

                                            <p className="mt-3 text-sm text-neutral-400 leading-relaxed font-light">
                                                {post.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-8 pt-4 mt-auto border-t border-neutral-900/60">
                                        <Link
                                            href={safePostRoute(post.slug)}
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

                <section className="mb-24">
                    <div className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-2">
                            Explore By Topic
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {topics.map((topic) => (
                            <Link
                                key={topic.slug}
                                href={`/blog/category/${topic.slug}`}
                                className="group flex flex-col justify-between border border-neutral-800 bg-neutral-950/40 p-8 rounded-2xl hover:border-cyan-500/40 hover:bg-neutral-900/40 transition-all duration-300"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-lg font-bold uppercase tracking-tight group-hover:text-cyan-300 transition-colors">
                                            {topic.name}
                                        </h3>
                                        <span className="font-mono text-xs text-neutral-500 bg-neutral-900 px-2.5 py-1 rounded-md border border-neutral-800">
                                            {topic.count}
                                        </span>
                                    </div>
                                    <p className="text-sm text-neutral-400 font-light leading-relaxed">
                                        {topic.description}
                                    </p>
                                </div>
                                <div className="mt-6 pt-4 border-t border-neutral-900 font-mono text-xs text-cyan-400 flex items-center gap-2">
                                    EXPLORE TOPIC <span>&rarr;</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="mb-24">
                    <div className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-2">
                            All Insights
                        </h2>
                        <p className="text-neutral-400 font-mono text-xs tracking-wider uppercase">
                            Explore the complete collection of articles across discipline, mindset, fitness, yoga, attention, habits, and long-term personal transformation. ({posts.length} articles)
                        </p>
                    </div>

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
                                    className="group flex flex-col justify-between border border-neutral-800 bg-neutral-950/50 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300"
                                >
                                    <div>
                                        {post.image ? (
                                            <div className="relative w-full aspect-[16/9] bg-neutral-900 overflow-hidden">
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        ) : null}

                                        <div className="p-8 pb-4">
                                            <div className="mb-4">
                                                <Link
                                                    href={safeCategoryRoute(post.category)}
                                                    className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-wider font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/40 hover:bg-cyan-900 transition-colors"
                                                >
                                                    {post.category}
                                                </Link>
                                            </div>

                                            <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-cyan-300 transition-colors">
                                                {post.title}
                                            </h3>

                                            <p className="mt-3 text-sm text-neutral-400 leading-relaxed font-light">
                                                {post.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-8 pt-4 mt-auto border-t border-neutral-900/60">
                                        <Link
                                            href={safePostRoute(post.slug)}
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

                <section className="border border-cyan-500/30 bg-gradient-to-b from-cyan-950/20 to-neutral-950/60 p-10 md:p-14 rounded-3xl text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d410_1px,transparent_1px),linear-gradient(to_bottom,#06b6d410_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400 mb-3">
                            New to NomadLifeXP?
                        </p>
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
                            Start Your Evolution
                        </h2>
                        <p className="text-neutral-400 text-sm font-light leading-relaxed mb-8">
                            Begin with the Personal Operating System and discover how discipline, fitness, mindset, and yoga work together to create lasting personal transformation.
                        </p>
                        <Link
                            href="/discipline-system"
                            className="inline-flex items-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-black font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/20"
                        >
                            Start Here <span>&rarr;</span>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
}