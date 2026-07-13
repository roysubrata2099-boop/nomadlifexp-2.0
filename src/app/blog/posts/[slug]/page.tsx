// src/app/blog/posts/[slug]/page.tsx

import { getPostBySlug, getAllPosts } from "@/lib/markdown";
import { normalizeCategory } from "@/lib/taxonomy";
import RelatedArticles from "@/components/RelatedArticles";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

/**
 * 🛡️ INLINE SLUG CLEANER (Option 2)
 * Strips toxic URL sequences out of raw parameters safely before execution pipelines.
 * Decoupled from lib/markdown exports to guarantee seamless production compilation.
 */
function cleanRouteParam(rawSlug: unknown): string {
    if (!rawSlug || typeof rawSlug !== "string") return "";
    try {
        const decoded = decodeURIComponent(rawSlug);
        return decoded
            .replace(/[\u0000-\u001F\u007F-\u009F]/g, "")
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9-_]/g, "")
            .replace(/-+/g, "-");
    } catch {
        return String(rawSlug)
            .toLowerCase()
            .replace(/[^a-z0-9-_]/g, "")
            .replace(/-+/g, "-")
            .trim();
    }
}

// 🛡️ NATIVE NEXT.JS 15 METADATA TYPING ENGINE
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    try {
        const resolvedParams = await params;
        if (!resolvedParams || !resolvedParams.slug) {
            return { title: "System Fault // NomadLifeXP" };
        }

        const decodedSlug = cleanRouteParam(resolvedParams.slug);
        if (!decodedSlug) {
            return { title: "Node Defect // NomadLifeXP" };
        }

        const post = await getPostBySlug(decodedSlug);
        // FIX: Return a valid Metadata layout shape instead of short-circuiting incorrectly
        if (!post) {
            return { title: "Node Not Found // NomadLifeXP" };
        }

        const titleText = post.title && typeof post.title === "string" ? post.title.trim() : "Operational Node";
        const rawCategory = post.category && typeof post.category === "string" ? post.category : "system";
        const verifiedCategory = normalizeCategory(rawCategory, titleText);
        const displayCategory = verifiedCategory.toUpperCase();

        const pageTitle = `${titleText} [${displayCategory}] | NomadLifeXP System Map`;
        const pageDescription = post.description && typeof post.description === "string" ? post.description : "Secure system node analysis transmission.";
        const pageUrl = `https://nomadlifexp.com/blog/posts/${encodeURIComponent(decodedSlug)}`;

        return {
            title: pageTitle,
            description: pageDescription,
            alternates: { canonical: pageUrl },
            openGraph: {
                title: pageTitle,
                description: pageDescription,
                url: pageUrl,
                type: "article",
                tags: [verifiedCategory, "production-build", "system-design"],
            },
        };
    } catch (error) {
        console.error("CRITICAL_METADATA_FAULT:", error);
        return { title: "System Recovery Matrix // NomadLifeXP" };
    }
}

// 🛡️ NATIVE NEXT.JS 15 STATIC PARAM GENERATION STRUCT
export async function generateStaticParams(): Promise<{ slug: string }[]> {
    try {
        const posts = getAllPosts();
        if (!Array.isArray(posts)) return [];

        return posts
            .filter((post) => post && typeof post.slug === "string" && post.slug.trim().length > 0)
            .map((post) => ({
                slug: String(post.slug).toLowerCase().trim(),
            }));
    } catch (error) {
        console.error("STATIC_PARAM_GENERATION_FAULT:", error);
        return [];
    }
}

// 🛡️ ACCURATE NEXT.JS 15 ASYNC COMPONENT footprint
export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    let resolvedParams: { slug: string };
    try {
        resolvedParams = await params;
    } catch (err) {
        console.error("PARAM_RESOLUTION_FAILURE:", err);
        return notFound();
    }

    if (!resolvedParams || !resolvedParams.slug) {
        return notFound();
    }

    const decodedSlug = cleanRouteParam(resolvedParams.slug);
    if (!decodedSlug) {
        return notFound();
    }

    let post = null;
    try {
        post = await getPostBySlug(decodedSlug);
    } catch (err) {
        console.error(`DATA_RETRIEVAL_FAULT for node [${decodedSlug}]:`, err);
    }

    if (!post) {
        return notFound();
    }

    const titleText = post.title && typeof post.title === "string" ? post.title.trim() : "Untitled Operational Node";
    const rawCategory = post.category && typeof post.category === "string" ? post.category : "system";
    const verifiedCategory = normalizeCategory(rawCategory, titleText);
    const HTMLContent = post.contentHtml && typeof post.contentHtml === "string" ? post.contentHtml : "";

    // Hardened fallback configuration resolving potential frontmatter pipeline mismatch issues
    const relatedSlugsArray = post && "relatedArticles" in post && Array.isArray((post as any).relatedArticles)
        ? (post as any).relatedArticles
        : [];

    return (
        <div className="relative min-h-screen bg-[#050914] text-[#EDF6FF] antialiased font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">

            <style
                dangerouslySetInnerHTML={{
                    __html: `
            @keyframes gridMove {
              0% { transform: translateY(0); }
              100% { transform: translateY(4rem); }
            }
            .animate-grid-matrix {
              animation: gridMove 8s linear infinite;
            }
            ::-webkit-scrollbar {
              width: 6px;
            }
            ::-webkit-scrollbar-track {
              background: #050914;
            }
            ::-webkit-scrollbar-thumb {
              background: #162447;
              border-radius: 3px;
            }
            ::-webkit-scrollbar-thumb:hover {
              background: #06b6d4;
            }
          `,
                }}
            />

            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute inset-0 animate-grid-matrix bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d403_1px,transparent_1px),linear-gradient(to_bottom,#06b6d403_1px,transparent_1px)] bg-[size:1rem_1rem] [mask-image:radial-gradient(ellipse_50%_40%_at_50%_10%,#000_60%,transparent_100%)]" />
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan-500/10 to-transparent rounded-full blur-[120px]" />
                <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[140px]" />
            </div>

            <main className="max-w-4xl mx-auto px-6 pt-36 pb-32 relative z-10">
                <div className="mb-12">
                    <Link
                        href={`/blog?cat=${encodeURIComponent(verifiedCategory)}`}
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                        <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span> Back to {verifiedCategory} Registry
                    </Link>
                </div>

                <header className="mb-16 border-b border-neutral-900 pb-10 space-y-6">
                    <div className="flex flex-wrap items-center gap-4">
                        <span className="text-[10px] font-mono tracking-widest text-cyan-400 bg-cyan-950/30 px-3 py-1 uppercase border border-cyan-900/40">
                            SYSTEM NODE // {verifiedCategory}
                        </span>
                        <span className="text-neutral-600 font-mono text-[10px] uppercase tracking-wider select-none">
                            STATUS: ACTIVE_MANIFEST_VERIFIED
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase leading-tight max-w-3xl">
                        {titleText}
                    </h1>

                    {post.description && typeof post.description === "string" && post.description.trim().length > 0 && (
                        <p className="text-sm md:text-base font-light text-neutral-400 leading-relaxed font-mono border-l-2 border-neutral-800 pl-4 uppercase">
                            <span className="opacity-50">// Overview:</span> {post.description.trim()}
                        </p>
                    )}
                </header>

                {HTMLContent ? (
                    <article
                        className="prose prose-invert max-w-none 
              prose-headings:uppercase prose-headings:font-black prose-headings:tracking-tight prose-headings:text-white
              prose-h2:text-xl prose-h2:border-b prose-h2:border-neutral-900/80 prose-h2:pb-2 prose-h2:mt-12
              prose-h3:text-base prose-h3:mt-8
              prose-p:text-sm prose-p:leading-relaxed prose-p:text-neutral-300 prose-p:font-light
              prose-strong:text-white prose-strong:font-bold
              prose-ul:list-disc prose-ul:pl-5 prose-ul:space-y-2 prose-ul:text-neutral-300 prose-ul:text-sm
              prose-li:marker:text-cyan-500/60
              prose-code:font-mono prose-code:text-xs prose-code:bg-neutral-950 prose-code:px-1.5 prose-code:py-0.5 prose-code:border prose-code:border-neutral-900 prose-code:text-cyan-400 prose-code:before:content-none prose-code:after:content-none
              prose-blockquote:border-l-cyan-500 prose-blockquote:bg-neutral-950/40 prose-blockquote:px-6 prose-blockquote:py-1 prose-blockquote:text-neutral-400 prose-blockquote:font-mono prose-blockquote:text-xs prose-blockquote:uppercase"
                        dangerouslySetInnerHTML={{ __html: HTMLContent }}
                    />
                ) : (
                    <div className="font-mono text-xs text-neutral-600 uppercase tracking-widest p-8 border border-dashed border-neutral-900 bg-neutral-950/20 rounded">
                        // Warning: Analytical manifest stream payload is blank.
                    </div>
                )}

                <RelatedArticles currentSlug={decodedSlug} relatedSlugs={relatedSlugsArray} />

                <footer className="mt-20 border-t border-neutral-900 pt-10 flex justify-between items-center font-mono text-xs">
                    <span className="text-neutral-600 uppercase">End of Analysis Node</span>
                    <Link
                        href="/blog"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-wider font-bold"
                    >
                        Return to Master System Map →
                    </Link>
                </footer>
            </main>
        </div>
    );
}