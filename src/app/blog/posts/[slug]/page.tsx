import { getPostBySlug, getAllPosts } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="max-w-3xl mx-auto px-4 py-16">
            {/* Strict Silo Architecture Navigation Links */}
            <nav className="text-xs font-mono tracking-wider text-zinc-400 uppercase mb-12 flex items-center gap-2">
                <Link href="/blog" className="hover:text-black underline">Index</Link>
                <span>/</span>
                <Link href={`/blog/category/${post.category?.toLowerCase()}`} className="hover:text-black underline">
                    {post.category}
                </Link>
                <span>/</span>
                <span className="text-zinc-500 truncate max-w-[200px] md:max-w-none">{post.title}</span>
            </nav>

            <article>
                <header className="mb-10">
                    <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-zinc-900 leading-tight">
                        {post.title}
                    </h1>
                    <div className="text-xs text-zinc-400 font-mono">
                        <span>Published: {post.date instanceof Date ? post.date.toLocaleDateString() : String(post.date)}</span>
                    </div>
                </header>

                {/* Safe HTML MDX Content Wrapper */}
                <div className="prose prose-zinc max-w-none dark:prose-invert text-zinc-800 leading-relaxed space-y-4">
                    <MDXRemote source={post.content} />
                </div>
            </article>

            {/* Circular Silo Framework - Loops bots back to top level maps */}
            <footer className="mt-16 pt-8 border-t border-zinc-200 bg-zinc-50 p-6 rounded-xl">
                <h4 className="text-sm font-bold uppercase tracking-wider mb-2">Deep Infrastructure Framework</h4>
                <p className="text-sm text-zinc-600 leading-relaxed">
                    This article is part of our integrated ecosystem. Continue navigating via the master{' '}
                    <Link href="/blog" className="text-black font-bold underline hover:text-amber-600">
                        Knowledge Index
                    </Link>{' '}
                    or view identical strategies in our{' '}
                    <Link href={`/blog/category/${post.category?.toLowerCase()}`} className="text-black font-bold underline hover:text-amber-600">
                        {post.category} Core Pillar
                    </Link>.
                </p>
            </footer>
        </main>
    );
}