import "server-only";
import { getAllPosts } from "@/lib/markdown";
import { normalizeCategory } from "@/lib/taxonomy";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
    title: "Discipline & Autonomy Architecture | NomadLifeXP",
    description:
        "Discipline is the foundation of personal evolution. Build attention control, habits, consistency, and self-mastery.",
    alternates: {
        canonical:
            "https://www.nomadlifexp.com/blog/category/discipline",
    },
};

interface SystemPost {
    slug: string;
    title: string;
    description: string;
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
        const posts = getAllPosts();

        if (!Array.isArray(posts)) {
            return [];
        }

        return posts
            .filter((post) => {
                if (!post || typeof post !== "object") {
                    return false;
                }

                try {
                    const rawCategory = typeof post.category === "string" ? post.category : "";
                    const rawTitle = typeof post.title === "string" ? post.title : "";

                    const category = normalizeCategory(rawCategory, rawTitle);
                    return safeSlug(category) === "discipline";
                } catch {
                    return false;
                }
            })
            .map((post) => ({
                slug: safeSlug(post?.slug),
                title: safeText(post?.title, "Untitled Knowledge Node"),
                description: safeText(post?.description, "System description unavailable."),
            }))
            .filter((post) => post.slug.length > 0);
    } catch {
        return [];
    }
}

export default function DisciplinePage() {
    let disciplineArticles: SystemPost[] = [];

    try {
        disciplineArticles = getDisciplinePosts();
    } catch {
        disciplineArticles = [];
    }

    const accentColor = "text-cyan-400 bg-cyan-500/10 border-cyan-500/20";

    const modules = [
        {
            title: "Awareness",
            description: "Audit your friction points, distractions, and unconscious energetic leaks.",
        },
        {
            title: "Control",
            description: "Engineer environmental boundaries and strict execution protocols.",
        },
        {
            title: "Consistency",
            description: "Automate daily habits to remove emotion and friction from execution.",
        },
        {
            title: "Mastery",
            description: "Transform ironclad discipline into effortless sovereign autonomy.",
        },
    ];

    return (
        <main className="min-h-screen bg-black text-white antialiased">
            <div className="relative max-w-6xl mx-auto px-6 py-12">
                <header className="mb-12">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 border ${accentColor}`}>
                        Pillar Architecture
                    </span>
                    <h1 className="text-4xl font-extrabold tracking-tight text-white mb-4">
                        Discipline & Autonomy
                    </h1>
                    <p className="text-zinc-400 max-w-2xl text-lg">
                        Discipline is the foundation of personal evolution. Build attention control, habits, consistency, and self-mastery.
                    </p>
                </header>

                <section className="mb-16">
                    <h2 className="text-xl font-bold uppercase tracking-wider text-white mb-6">
                        THE DISCIPLINE EVOLUTION PATH
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {modules.map((mod, index) => (
                            <div key={index} className="border border-neutral-800 bg-neutral-950 p-6 rounded-xl">
                                <span className="text-xs font-mono text-cyan-400 mb-2 block">MODULE 0{index + 1}</span>
                                <h3 className="text-lg font-bold text-white mb-2">{mod.title}</h3>
                                <p className="text-sm text-neutral-400 font-mono leading-relaxed">{mod.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold uppercase tracking-wider text-white mb-6">
                        Engineered Knowledge Nodes
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(disciplineArticles.length > 0 ? disciplineArticles : [
                            {
                                title: "The Architecture of Self-Control",
                                description: "Build robust execution loops and minimize friction in your daily habits.",
                                slug: "architecture-of-self-control"
                            }
                        ]).map((post) => (
                            <article
                                key={post.slug || Math.random().toString()}
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
                    </div>
                </section>
            </div>
        </main>
    );
}