import { posts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

/* ----------------- CLEAN SMART PARSER ----------------- */
function parseMarkdownToHtml(markdownString: string): string {
    if (!markdownString) return "";

    const lines = markdownString.split("\n");
    const htmlElements: string[] = [];
    let paragraphBuffer: string[] = [];

    const flushParagraph = () => {
        if (paragraphBuffer.length > 0) {
            const textContent = paragraphBuffer.join(" ");
            htmlElements.push(`<p class="font-light leading-relaxed text-base sm:text-lg my-6" style="color: var(--text-muted, #94a3b8);">${textContent}</p>`);
            paragraphBuffer = [];
        }
    };

    for (let line of lines) {
        const trimmed = line.trim();

        if (trimmed.startsWith("# ")) {
            flushParagraph();
            htmlElements.push(`<h1 class="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mt-10 mb-4 border-b border-white/5 pb-2">${trimmed.slice(2)}</h1>`);
        } else if (trimmed.startsWith("## ")) {
            flushParagraph();
            htmlElements.push(`<h2 class="text-xl sm:text-2xl font-bold uppercase text-neutral-100 mt-8 mb-3">${trimmed.slice(3)}</h2>`);
        } else if (trimmed.startsWith("- ")) {
            flushParagraph();
            htmlElements.push(`<li class="ml-5 list-disc font-light my-2" style="color: var(--text-muted, #94a3b8);">${trimmed.slice(2)}</li>`);
        } else if (trimmed === "") {
            flushParagraph();
        } else {
            paragraphBuffer.push(trimmed);
        }
    }

    flushParagraph();
    return htmlElements.join("");
}

/* ----------------- DYNAMIC SEO METADATA ----------------- */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const post = posts.find((p) => p.slug.toLowerCase() === decodedSlug.toLowerCase());

    if (!post) {
        return { title: "Post Not Found" };
    }

    return {
        title: `${post.title} | NomadLifeXP`,
        description: post.description,
        keywords: post.keywords,
    };
}

/* ----------------- STATIC GENERATION ROUTER ----------------- */
export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

/* ----------------- MAIN BLOG POST PAGE ----------------- */
export default async function BlogPostPage({ params }: PageProps) {
    const { slug: rawSlug } = await params;
    const slug = decodeURIComponent(rawSlug);

    const post = posts.find((p) => p.slug.toLowerCase() === slug.toLowerCase());

    if (!post) notFound();

    const related = posts
        .filter((p) => {
            if (p.slug === post.slug) return false;
            const catMatch = p.category && post.category && p.category.toLowerCase() === post.category.toLowerCase();
            const slugMatch = post.relatedSlugs && post.relatedSlugs.includes(p.slug);
            return !!(catMatch || slugMatch);
        })
        .slice(0, 3);

    return (
        <main className="min-h-screen bg-[#060b18] text-white px-6 pt-32 pb-24 antialiased">

            {/* NAVIGATION BAR */}
            <div className="max-w-3xl mx-auto mb-8">
                <Link
                    href="/blog"
                    className="text-xs font-mono tracking-widest hover:text-white uppercase transition-colors"
                    style={{ color: 'var(--text-muted, #94a3b8)' }}
                >
                    ← Back to Articles
                </Link>
            </div>

            {/* HEADER */}
            <header className="max-w-3xl mx-auto mb-12 space-y-4">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase font-bold block" style={{ color: 'var(--glow-amber, #f59e0b)' }}>
          // {post.category}
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
                    {post.title}
                </h1>
                <div className="text-[11px] font-mono uppercase tracking-wider pt-4 border-t border-white/5 flex justify-between items-center" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                    <span>Published: {post.date}</span>
                    <span>Written by: {post.author}</span>
                </div>
            </header>

            {/* COVER IMAGE */}
            {post.image && (
                <div className="max-w-3xl mx-auto mb-12 h-64 sm:h-96 w-full bg-[#0b132b]/20 border border-white/5 overflow-hidden relative rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover opacity-80 relative z-10"
                    />
                </div>
            )}

            {/* ARTICLE CONTENT */}
            <article className="max-w-3xl mx-auto">
                <div
                    className="block prose-neutral prose-invert"
                    dangerouslySetInnerHTML={{ __html: parseMarkdownToHtml(post.content || "") }}
                />
            </article>

            {/* RECOMMENDED READING */}
            <section className="max-w-3xl mx-auto mt-24 border-t border-white/5 pt-12">
                <h2 className="text-xs font-mono uppercase tracking-[0.2em] mb-6" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                    Recommended Reading
                </h2>

                {related.length === 0 ? (
                    <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                        No related articles found.
                    </p>
                ) : (
                    <div className="grid gap-4 sm:grid-cols-3">
                        {related.map((r) => (
                            <Link
                                key={r.slug}
                                href={`/blog/posts/${r.slug}`}
                                className="p-5 border border-white/5 bg-[#0b132b]/40 rounded-xl hover:border-cyan-500/20 shadow-[0_4px_25px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all flex flex-col justify-between space-y-4 group"
                            >
                                <div className="space-y-2 block">
                                    <span className="text-[9px] font-mono uppercase tracking-widest block" style={{ color: 'var(--glow-amber, #f59e0b)' }}>
                    // {r.category}
                                    </span>
                                    <h3 className="font-bold text-sm text-neutral-200 group-hover:text-cyan-400 transition-colors line-clamp-2 overflow-hidden">
                                        {r.title}
                                    </h3>
                                </div>
                                <span className="text-[10px] font-mono tracking-widest transition-colors uppercase block pt-2 group-hover:text-white" style={{ color: 'var(--glow-cyan, #06b6d4)' }}>
                                    Read Article →
                                </span>
                            </Link>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}