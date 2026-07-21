import "server-only";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getAllMDXPosts } from "@/lib/mdx";

const SITE_URL = "https://nomadlifexp.com";

type PageProps = {
    params: Promise<{
        category: string;
    }>;
};

type SafePost = {
    slug: string;
    title: string;
    description: string;
    category: string;
    image: string;
};

const ALLOWED_CATEGORIES = new Set([
    "discipline",
    "fitness",
    "yoga",
    "mindset",
]);

function safeSlug(value: unknown): string {
    if (typeof value !== "string") {
        return "";
    }

    return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function safeText(value: unknown): string {
    if (typeof value !== "string") {
        return "";
    }

    return value.trim();
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

export async function generateStaticParams() {
    try {
        const categories = getAllMDXPosts()
            .map((post) => safeSlug(post.category))
            .filter((category) => ALLOWED_CATEGORIES.has(category));

        return [...new Set(categories)].map((category) => ({
            category,
        }));
    } catch {
        return [];
    }
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { category } = await params;
    const cleanCategory = safeSlug(category);

    if (!ALLOWED_CATEGORIES.has(cleanCategory)) {
        return {
            title: "Category Not Found | NomadLifeXP",
        };
    }

    const formattedCategory =
        cleanCategory.charAt(0).toUpperCase() + cleanCategory.slice(1);

    return {
        title: `${formattedCategory} Articles | NomadLifeXP`,
        description: `Explore ${cleanCategory} transformation systems and insights from NomadLifeXP.`,
        alternates: {
            canonical: `${SITE_URL}/blog/category/${cleanCategory}`,
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function MDXCategoryPage({ params }: PageProps) {
    const { category } = await params;
    const cleanCategory = safeSlug(category);

    if (!ALLOWED_CATEGORIES.has(cleanCategory)) {
        notFound();
    }

    let posts: SafePost[] = [];

    try {
        posts = getAllMDXPosts()
            .map((post) => ({
                slug: safeSlug(post.slug),
                title: safeText(post.title) || "Untitled Article",
                description: safeText(post.description) || "No description available.",
                category: safeSlug(post.category),
                image: safeImage(post.image),
            }))
            .filter((post) => post.category === cleanCategory);
    } catch {
        posts = [];
    }

    if (posts.length === 0) {
        notFound();
    }

    const formattedCategory =
        cleanCategory.charAt(0).toUpperCase() + cleanCategory.slice(1);

    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden antialiased">
            {/* Background Accent Grids */}
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            <main className="relative z-10 max-w-7xl mx-auto px-6 py-32">
                {/* Navigation */}
                <nav className="flex gap-5 border-b border-neutral-900 pb-6 mb-16 font-mono text-xs tracking-[0.3em] uppercase">
                    <Link
                        href="/blog"
                        className="text-neutral-500 hover:text-cyan-400 transition"
                    >
                        ← RETURN_TO_BLOG
                    </Link>
                    <span className="text-neutral-800">/</span>
                    <span className="text-cyan-400">{cleanCategory}</span>
                </nav>

                {/* Category Header */}
                <header className="max-w-5xl mb-24">
                    <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        NomadLifeXP // MDX Category Architecture
                    </p>
                    <h1 className="mt-6 text-5xl md:text-7xl font-black uppercase leading-none">
                        {formattedCategory}
                        <br />
                        <span className="bg-gradient-to-r from-white via-neutral-400 to-cyan-400 bg-clip-text text-transparent">
                            DATABASE
                        </span>
                    </h1>
                    <p className="mt-8 max-w-3xl text-neutral-400 font-mono">
                        Explore {cleanCategory} transformation systems, strategies, and insights from NomadLifeXP.
                    </p>
                </header>

                {/* Posts Grid */}
                <section>
                    <div className="grid md:grid-cols-2 gap-8">
                        {posts.map((post) => (
                            <article
                                key={post.slug}
                                className="flex flex-col border border-neutral-800 bg-neutral-950/50 p-8 rounded-2xl hover:border-cyan-500/40 transition"
                            >
                                {/* Full Uncropped Image Container (Exact Match to Blog Page) */}
                                {post.image && (
                                    <div className="relative w-full h-72 mb-6 rounded-xl overflow-hidden bg-neutral-900">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            priority={false}
                                            sizes="(max-width:768px) 100vw, 50vw"
                                            className="object-contain object-center transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                )}

                                {/* Content Details */}
                                <div className="flex flex-col flex-1 justify-between">
                                    <div>
                                        <h2 className="text-xl font-bold uppercase">
                                            <Link
                                                href={`/blog/posts/${post.slug}`}
                                                className="hover:text-cyan-400 transition"
                                            >
                                                {post.title}
                                            </Link>
                                        </h2>
                                        <p className="mt-4 text-sm text-neutral-400 line-clamp-3">
                                            {post.description}
                                        </p>
                                    </div>

                                    <div className="mt-6 flex flex-col items-start gap-4">
                                        <span className="rounded-full px-3 py-1 text-xs uppercase font-mono bg-cyan-950 text-cyan-300">
                                            {post.category}
                                        </span>

                                        <Link
                                            href={`/blog/posts/${post.slug}`}
                                            className="inline-flex text-xs font-mono uppercase text-cyan-400 hover:text-cyan-300 transition"
                                        >
                                            READ ARTICLE →
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}