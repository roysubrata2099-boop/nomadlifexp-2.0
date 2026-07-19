import { getAllPosts, type PostData } from "@/lib/markdown";
import { normalizeCategory } from "@/lib/taxonomy";
import Link from "next/link";
import type { Metadata } from "next";

// 1. Immutable SEO Matrix (Overwrites global layout title cleanly)
export const metadata: Metadata = {
    title: "Self-Development System Database | NomadLifeXP",
    description: "Explore structured transformation systems covering discipline, fitness, yoga, mindset, and personal evolution.",
    alternates: {
        canonical: "https://nomadlifexp.com/blog",
    },
    openGraph: {
        title: "Self-Development System Database | NomadLifeXP",
        description: "Explore structured transformation systems covering discipline, fitness, yoga, mindset, and personal evolution.",
        url: "https://nomadlifexp.com/blog",
        type: "website",
        siteName: "NomadLifeXP",
    },
    twitter: {
        card: "summary_large_image",
        title: "Self-Development System Database | NomadLifeXP",
        description: "Explore structured transformation systems covering discipline, fitness, yoga, mindset, and personal evolution.",
    },
};

interface SafePost {
    slug: string;
    title: string;
    description: string;
    category: string;
}

// 🛡️ 100% FIXED: Mapped categories strictly to your true /blog/category/* routing matrix
const CATEGORY_ROUTES: Record<string, string> = {
    discipline: "/blog/category/discipline",
    fitness: "/blog/category/fitness",
    yoga: "/blog/category/yoga",
    mindset: "/blog/category/mindset",
};

// Bulletproof URL Safe Normalizer
const slugify = (text: string): string => {
    if (!text) return "";
    return text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
};

export default function BlogPage() {
    // Hardened defensive mapping to eliminate runtime array reference crashes
    const rawPosts = getAllPosts();
    const safeRawPosts = Array.isArray(rawPosts) ? rawPosts : [];

    const posts: SafePost[] = safeRawPosts
        .map((post: PostData) => {
            if (!post) return null;

            // Fallback parameters to prevent undefined string matching crashes
            const fallbackTitle = post.title?.trim() || "Untitled Knowledge Node";
            const fallbackCategory = post.category?.trim() || "Uncategorized";

            const normalizedCategoryName = normalizeCategory(
                fallbackCategory,
                fallbackTitle
            );

            return {
                slug: slugify(post.slug || fallbackTitle),
                title: fallbackTitle,
                description: post.description?.trim() || "System description unavailable.",
                category: slugify(normalizedCategoryName || "general"),
            };
        })
        .filter((post): post is SafePost => post !== null && post.slug.length > 0);

    const archiveGraphSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": "https://nomadlifexp.com/blog#collection",
                "url": "https://nomadlifexp.com/blog",
                "name": "Self-Development System Database | NomadLifeXP",
                "description": "Explore structured transformation systems covering discipline, fitness, yoga, mindset, and personal evolution.",
                "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://nomadlifexp.com/#website",
                    "url": "https://nomadlifexp.com",
                    "name": "NomadLifeXP"
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://nomadlifexp.com/blog#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://nomadlifexp.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "System Directory",
                        "item": "https://nomadlifexp.com/blog"
                    }
                ]
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden antialiased">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(archiveGraphSchema) }}
            />

            {/* Ambient System Glow */}
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            <main className="relative z-10 max-w-7xl mx-auto px-6 py-32">
                {/* Navigation */}
                <nav className="flex gap-5 border-b border-neutral-900 pb-6 mb-16 font-mono text-xs tracking-[0.3em] uppercase">
                    <Link href="/" className="text-neutral-500 hover:text-cyan-400">
                        &larr; RETURN_TO_HOME
                    </Link>
                    <span className="text-neutral-800">/</span>
                    {/* 🛡️ 100% FIXED: Converted static node into an active Link target pointing to /discipline-system */}
                    <Link href="/discipline-system" className="text-neutral-500 hover:text-cyan-400">
                        SYSTEM_DIRECTORY
                    </Link>
                </nav>

                {/* Hero */}
                <header className="max-w-5xl mb-24">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                            NomadLifeXP // Transformation Architecture
                        </p>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight">
                        SELF DEVELOPMENT
                        <br />
                        <span className="bg-gradient-to-r from-white via-neutral-400 to-cyan-400 bg-clip-text text-transparent">
                            SYSTEM DATABASE
                        </span>
                    </h1>

                    <p className="mt-8 max-w-3xl text-neutral-400 font-mono text-sm sm:text-base leading-relaxed">
                        Explore structured transformation systems covering discipline, fitness, yoga, mindset, and personal evolution. Each knowledge module connects directly to its operational pillar.
                    </p>
                </header>

                {/* Blog Database */}
                <section>
                    <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.4em] text-neutral-500">
                        // ACTIVE KNOWLEDGE MODULES
                    </h2>

                    {posts.length === 0 ? (
                        <div className="border border-neutral-800 bg-neutral-950 p-8">
                            <p className="text-neutral-400 font-mono text-sm">
                                [SYSTEM_INFO] No Blog Nodes Available.
                            </p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 gap-6">
                            {posts.map((post) => (
                                <article
                                    key={post.slug}
                                    className="border border-neutral-800 bg-neutral-950/50 p-8 hover:border-cyan-500/40 transition-colors duration-200"
                                >
                                    <h3 className="text-xl font-bold uppercase mb-4 text-white">
                                        {post.title}
                                    </h3>

                                    <p className="text-sm text-neutral-400 leading-relaxed mb-6 font-light">
                                        {post.description}
                                    </p>

                                    <div className="mb-6">
                                        <Link
                                            href={CATEGORY_ROUTES[post.category] || "/blog"}
                                            className="inline-flex rounded-full px-3 py-1 text-xs uppercase font-mono bg-cyan-950 text-cyan-300 hover:bg-cyan-900 transition-colors duration-150"
                                        >
                                            {post.category}
                                        </Link>
                                    </div>

                                    <Link
                                        href={`/blog/posts/${post.slug}`}
                                        className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors duration-150"
                                    >
                                        READ ARTICLE <span>&rarr;</span>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}