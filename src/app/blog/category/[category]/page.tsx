import { posts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

// Next.js 15 standard: params must be a Promise
interface PageProps {
    params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
    // Safely unwrap and decode params
    const { category: rawCategory } = await params;
    const category = decodeURIComponent(rawCategory || "").toLowerCase().trim();

    // Guard against empty category strings early
    if (!category) {
        notFound();
    }

    const filtered = posts.filter(
        (p) => p.category?.toLowerCase() === category
    );

    if (!filtered.length) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-neutral-200 px-6 py-20">
            {/* HEADER */}
            <header className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-500">
                    Archive / {category}
                </span>
                <h1 className="text-4xl md:text-6xl font-black text-white capitalize tracking-tighter">
                    {category}
                </h1>
                <p className="text-neutral-500 text-sm">
                    {filtered.length} {filtered.length === 1 ? "Protocol" : "Protocols"} in this category
                </p>
            </header>

            {/* GRID */}
            <section className="max-w-6xl mx-auto">
                <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
                    {filtered.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/posts/${post.slug}`}
                            className="group border border-neutral-900 bg-neutral-950/40 rounded-none p-6 hover:border-neutral-700 transition-all flex flex-col justify-between"
                        >
                            <div className="space-y-4">
                                {/* Thumbnail-like visual anchor (Fixed potential crash here) */}
                                <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center text-[10px] text-neutral-500 font-mono uppercase">
                                    {category[0] || "?"}
                                </div>
                                <h2 className="text-lg font-bold text-white group-hover:text-neutral-300 transition leading-snug">
                                    {post.title}
                                </h2>
                                <p className="text-sm text-neutral-400 leading-relaxed line-clamp-3">
                                    {post.description}
                                </p>
                            </div>

                            <div className="pt-8">
                                <span className="text-xs font-mono text-neutral-600 group-hover:text-white transition uppercase tracking-widest flex items-center">
                                    Access Log →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}