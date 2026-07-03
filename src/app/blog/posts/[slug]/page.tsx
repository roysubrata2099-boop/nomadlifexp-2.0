import { getPostBySlug, getAllPosts } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
    const posts = getAllPosts() || [];
    return posts.map((post) => ({
        slug: typeof post?.slug === 'string' ? post.slug.toLowerCase().trim() : '',
    })).filter(item => item.slug !== '');
}

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const standardSlug = typeof slug === 'string' ? slug.trim() : '';

    // Try finding via clean slug, fallback to lowercase slug match
    let post = getPostBySlug(standardSlug);
    if (!post) {
        post = getPostBySlug(standardSlug.toLowerCase());
    }

    if (!post) {
        notFound();
    }

    // 🛡️ 100% BULLETPROOF STRING DETECTOR MATRIX TO PROTECT ROUTE STATE
    const matchCategoryByTitleAndMetadata = (title: string, rawCat: string): string => {
        const t = title.toLowerCase();

        if (
            t.includes("reclaim your attention") ||
            t.includes("lack discipline") ||
            t.includes("procrastinate") ||
            t.includes("discipline")
        ) {
            return "discipline";
        }

        if (
            t.includes("workout videos") ||
            t.includes("never actually exercise") ||
            t.includes("fitness consistency") ||
            t.includes("not about time") ||
            t.includes("workout mindset") ||
            t.includes("workout habit") ||
            t.includes("outlasts your motivation") ||
            t.includes("fitness") ||
            t.includes("exercise")
        ) {
            return "fitness";
        }

        if (
            t.includes("headstand") ||
            t.includes("forearm stand") ||
            t.includes("forward bending") ||
            t.includes("yoga") ||
            t.includes("inversion")
        ) {
            return "yoga";
        }

        if (
            t.includes("attention span") ||
            t.includes("digital distraction") ||
            t.includes("can’t focus") ||
            t.includes("cant focus") ||
            t.includes("mental clarity") ||
            t.includes("overthinking") ||
            t.includes("stuck in life") ||
            t.includes("mindset")
        ) {
            return "mindset";
        }

        // Secondary structural fallbacks
        const c = rawCat.toLowerCase().trim();
        if (c === "wellness") return "fitness";
        if (c === "self growth" || c === "mental clarity") return "mindset";
        if (c === "uncategorized") return "discipline";

        return c || "discipline";
    };

    const postTitle = typeof post.title === 'string' ? post.title : 'Untitled Operational Node';
    const postRawCategory = typeof post.category === 'string' ? post.category : '';
    const systemCategory = matchCategoryByTitleAndMetadata(postTitle, postRawCategory);

    const displayDate = post.date instanceof Date
        ? post.date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
        : String(post.date || 'PENDING_REGISTRY');

    return (
        <div className="relative min-h-screen bg-[#050914] text-[#EDF6FF] antialiased font-sans selection:bg-cyan-500 selection:text-black overflow-hidden">

            {/* Ambient Lighting Accents */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <main className="max-w-4xl mx-auto px-6 pt-36 pb-32 relative z-10">

                {/* Navigation Breadcrumb Node Block */}
                <nav className="text-xs font-mono tracking-widest text-neutral-500 uppercase mb-12 flex flex-wrap items-center gap-2 border-b border-neutral-900/60 pb-6" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-cyan-400 transition-colors">HOME</Link>
                    <span className="text-neutral-800">/</span>
                    <Link href="/blog" className="hover:text-cyan-400 transition-colors">JOURNAL</Link>
                    <span className="text-neutral-800">/</span>
                    <Link href={`/blog/category/${systemCategory}`} className="text-cyan-400 font-bold hover:text-cyan-300 transition-colors">
                        {systemCategory}
                    </Link>
                    <span className="text-neutral-800 hidden md:inline">/</span>
                    <span className="text-neutral-600 truncate max-w-[200px] md:max-w-xs hidden md:inline">{postTitle}</span>
                </nav>

                {/* Article Header */}
                <article className="space-y-10">
                    <header className="space-y-4 max-w-3xl">
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-mono tracking-widest text-cyan-400 bg-cyan-950/30 px-2 py-0.5 uppercase border border-cyan-900/40">
                                {systemCategory}
                            </span>
                            <span className="text-neutral-700 font-mono text-[10px] select-none">// CORE_PILLAR_NODE</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase leading-none">
                            {postTitle}
                        </h1>
                        <div className="text-[11px] text-neutral-500 font-mono pt-2">
                            <span>TIMESTAMP_RECORD: {displayDate.toUpperCase()}</span>
                        </div>
                    </header>

                    {/* Content Parsing Area */}
                    <div className="prose prose-invert prose-cyan max-w-none text-neutral-300 leading-relaxed space-y-6 prose-headings:uppercase prose-headings:text-white prose-headings:tracking-tight prose-strong:text-white prose-p:text-neutral-300 prose-p:text-sm prose-li:text-sm prose-code:text-cyan-400 prose-code:bg-neutral-950 prose-code:px-1.5 prose-code:py-0.5 prose-code:border prose-code:border-neutral-900">
                        <MDXRemote source={post.content} />
                    </div>
                </article>

                {/* 🔗 COMPLETE MASTER CLOSURE RECURSION VIEW FOOTER */}
                <footer className="mt-20 border border-neutral-900 bg-neutral-950/60 p-8 font-mono text-xs space-y-4">
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs flex items-center gap-1.5">
                            <span>🛡️</span> Deep Infrastructure Framework
                        </h4>
                        <p className="text-neutral-500 text-[10px] uppercase tracking-wider mt-0.5">
                            Ecosystem Control System Parameters
                        </p>
                    </div>

                    <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                        This specific intelligence node is a dedicated component of our unified operational loop. Continue navigating across your internal architecture via the master{' '}
                        <Link href="/blog" className="text-cyan-400 font-bold underline hover:text-cyan-300 transition-colors">
                            Knowledge Index
                        </Link>{' '}
                        or track parallel execution directives within the{' '}
                        <Link href={`/blog?cat=${systemCategory}`} className="text-cyan-400 font-bold underline hover:text-cyan-300 transition-colors uppercase">
                            {systemCategory} Matrix Pipeline
                        </Link>.
                    </p>

                    <div className="pt-4 border-t border-neutral-900 flex flex-wrap items-center justify-between gap-4 text-[10px] text-neutral-600">
                        <div>REF_SLUG // {standardSlug.toUpperCase()}</div>
                        <div>STATUS // OPERATIONAL_VALIDATION_TRUE</div>
                    </div>
                </footer>
            </main>
        </div>
    );
}