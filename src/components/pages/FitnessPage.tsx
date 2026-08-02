import "server-only";

import Link from "next/link";
import { getAllPosts } from "@/lib/markdown";

interface SystemPost {
    slug: string;
    title: string;
    description: string;
    category?: string;
}

function safeSlug(value: unknown): string {
    if (typeof value !== "string") {
        return "";
    }
    return value.trim().toLowerCase();
}

function safeText(value: unknown, fallback: string): string {
    if (typeof value !== "string") {
        return fallback;
    }
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : fallback;
}

function getDisciplinePosts(): SystemPost[] {
    try {
        const allPosts = getAllPosts();

        if (!Array.isArray(allPosts)) {
            return [];
        }

        return allPosts
            .filter((post) => post !== null)
            .map((post) => ({
                slug: safeSlug(post.slug),
                title: safeText(post.title, "Untitled Knowledge Node"),
                description: safeText(post.description, "System description unavailable."),
                category: safeSlug(post.category),
            }))
            .filter((post) => post.category === "discipline" && post.slug.length > 0);
    } catch {
        return [];
    }
}

export default async function DisciplinePage() {
    let disciplineArticles: SystemPost[] = [];

    try {
        disciplineArticles = getDisciplinePosts();
    } catch {
        disciplineArticles = [];
    }

    const accentColor = "text-cyan-400 bg-cyan-500/10 border-cyan-500/20";
    const displayArticles = disciplineArticles.length > 0 ? disciplineArticles : [
        {
            title: "The Architecture of Self-Control",
            description: "Build robust execution loops and minimize friction in your daily habits.",
            slug: "architecture-of-self-control"
        }
    ];

    return (
        <main className="min-h-screen bg-black text-white antialiased">
            <div className="relative max-w-6xl mx-auto px-6 py-12">
                <header className="mb-12">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 border ${accentColor}`}>
                        Category Archive
                    </span>
                    <h1 className="text-4xl font-extrabold tracking-tight text-white mb-4">
                        Discipline
                    </h1>
                    <p className="text-zinc-400 max-w-2xl text-lg">
                        Mastering discipline as a location-independent professional. Practical systems, frameworks, and deep dives.
                    </p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayArticles.map((post, index) => (
                        <article
                            key={post.slug || `fallback-${index}`}
                            className="border border-neutral-800 bg-neutral-950 p-6 flex flex-col justify-between rounded-xl"
                        >
                            <div>
                                <h3 className="text-lg font-bold uppercase tracking-wide text-white">
                                    {post.title}
                                </h3>
                                <p className="mt-3 text-sm text-neutral-400 font-mono leading-relaxed">
                                    {post.description}
                                </p>
                            </div>
                            <Link
                                href={`/blog/posts/${post.slug}`}
                                className="inline-block mt-6 text-cyan-400 text-xs font-mono uppercase tracking-wider hover:text-white transition-colors"
                            >
                                READ ARTICLE &rarr;
                            </Link>
                        </article>
                    ))}
                </section>
            </div>
        </main>
    );
}