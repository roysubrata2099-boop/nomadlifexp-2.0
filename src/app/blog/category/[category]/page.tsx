// src/app/blog/category/[category]/page.tsx

import { getAllPosts } from "@/lib/markdown";
import { normalizeCategory } from "@/lib/taxonomy";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CategoryPageProps {
    params: Promise<{ category: string }>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}

const VALID_CATEGORIES = ["discipline", "fitness", "yoga", "mindset"];

// 🛡️ DYNAMIC SEO ENGINE FOR DYNAMIC PATH SEGMENTS
export async function generateMetadata(props: CategoryPageProps): Promise<Metadata> {
    try {
        const { category } = await props.params;
        const safeCategory = typeof category === "string" ? category.toLowerCase().trim() : "";

        if (!VALID_CATEGORIES.includes(safeCategory)) {
            return { title: "Category Not Found | NomadLifeXP" };
        }

        const displayCategory = safeCategory.charAt(0).toUpperCase() + safeCategory.slice(1);
        const pageTitle = `${displayCategory} System Node | NomadLifeXP`;
        const pageDescription = `Deep strategies and internal systems relating to ${displayCategory}. Explore execution layouts and performance mindsets.`;
        const pageUrl = `https://nomadlifexp.com/blog/category/${encodeURIComponent(safeCategory)}`;

        return {
            title: pageTitle,
            description: pageDescription,
            alternates: { canonical: pageUrl },
            openGraph: {
                title: pageTitle,
                description: pageDescription,
                url: pageUrl,
                type: "website",
            },
        };
    } catch {
        return { title: "Category Node | NomadLifeXP" };
    }
}

// 🛡️ GENERATE STATIC SEGMENTS FOR OPTIMIZED BUILD COMPILATION
export async function generateStaticParams() {
    return VALID_CATEGORIES.map((cat) => ({
        category: cat,
    }));
}

export default async function CategoryPage(props: CategoryPageProps) {
    // Unwrapping async parameters safely for Next.js 15 routing compliance
    const { category } = await props.params;
    const safeCategoryParam = typeof category === "string" ? category.toLowerCase().trim() : "";

    // Instantly catch bad path modifications or random URLs
    if (!VALID_CATEGORIES.includes(safeCategoryParam)) {
        notFound();
    }

    const rawPosts = getAllPosts();
    const safePosts = Array.isArray(rawPosts) ? rawPosts : [];

    // Filter and normalize nodes based on the target category path
    const categoryFilteredPosts = safePosts
        .filter(p => p && p.slug)
        .map((p) => {
            const titleText = p && typeof p.title === "string" ? p.title.trim() : "";
            const rawCategory = p && typeof p.category === "string" ? p.category : "";

            // Pass properties to central parsing standard
            const verifiedCategory = normalizeCategory(rawCategory, titleText);
            const generatedSlug = typeof p.slug === "string" ? p.slug.toLowerCase().trim() : "";

            return {
                slug: generatedSlug,
                title: titleText || "Untitled Operational Node",
                description: p && typeof p.description === "string" ? p.description.trim() : "",
                category: verifiedCategory,
            };
        })
        .filter((post) => post.category === safeCategoryParam);

    const displayCategoryName = safeCategoryParam.toUpperCase();

    return (
        <div className="relative min-h-screen bg-[#050914] text-[#EDF6FF] antialiased font-sans overflow-hidden">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

            <main className="max-w-5xl mx-auto px-6 pt-36 pb-32 relative z-10">
                <div className="mb-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-cyan-400 transition-colors duration-200"
                    >
                        &larr; Return to System Map Registry
                    </Link>
                </div>

                <header className="mb-16 space-y-4 border-b border-neutral-900 pb-8">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                        <p className="text-xs uppercase tracking-[0.4em] font-mono text-cyan-400">
                            NomadLifeXP // Category Dynamic Index
                        </p>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
                        Category Node: <span className="text-cyan-400">{displayCategoryName}</span>
                    </h1>
                </header>

                <div className="space-y-6">
                    <h2 className="text-xs font-mono tracking-[0.3em] uppercase text-neutral-500">
                        Mapped Module Records ({categoryFilteredPosts.length})
                    </h2>

                    {categoryFilteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {categoryFilteredPosts.map((post, idx) => {
                                const safePostSlug = encodeURIComponent(post.slug);

                                return (
                                    <div
                                        key={post.slug}
                                        className="border border-neutral-900 bg-neutral-950/40 p-6 flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-300"
                                    >
                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between items-center">
                                                <span className="text-[9px] font-mono tracking-widest text-cyan-400 bg-cyan-950/30 px-2 py-0.5 uppercase border border-cyan-900/40">
                                                    {post.category}
                                                </span>
                                                <span className="text-neutral-700 font-mono text-[9px]">
                                                    CAT_NODE_0{idx + 1}
                                                </span>
                                            </div>
                                            <h3 className="text-white text-base font-bold uppercase tracking-tight group-hover:text-cyan-400 transition-colors duration-200 line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-xs font-light text-neutral-400 leading-relaxed line-clamp-2">
                                                {post.description || "No supplemental manifest parameters indexable."}
                                            </p>
                                        </div>

                                        <Link
                                            href={`/blog/posts/${safePostSlug}`}
                                            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                                        >
                                            Access Analysis &rarr;
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="border border-dashed border-neutral-900 p-12 text-center">
                            <p className="font-mono text-xs text-neutral-600 uppercase tracking-widest">
                                // No localized documents mapped to this dynamic index node.
                            </p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}