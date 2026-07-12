// src/app/blog/category/[category]/page.tsx

import { getAllPosts } from '@/lib/markdown';
import { normalizeCategory } from '@/lib/taxonomy';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// 🛡️ Next.js 15 Compliant Type Engine Definition
type CategoryPageProps = {
    params: Promise<{ category: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// 🛡️ Static parameter compiler generation map
export async function generateStaticParams(): Promise<{ category: string }[]> {
    return [
        { category: 'discipline' },
        { category: 'fitness' },
        { category: 'yoga' },
        { category: 'mindset' }
    ];
}

export async function generateMetadata(props: CategoryPageProps): Promise<Metadata> {
    const resolvedParams = await props.params;
    const category = resolvedParams?.category;
    const target = typeof category === 'string' ? category.toLowerCase().trim() : 'Archive';
    return {
        title: `Core Architecture // ${target.toUpperCase()} | NomadLifeXP`,
        description: `System structural directives index tracking node metrics inside the ${target} module.`
    };
}

export default async function CategoryPage(props: CategoryPageProps) {
    const resolvedParams = await props.params;
    const category = resolvedParams?.category;
    const normalizedTarget = typeof category === 'string' ? category.toLowerCase().trim() : '';

    const rawPosts = getAllPosts();
    const allPosts = Array.isArray(rawPosts) ? (rawPosts as unknown as Record<string, unknown>[]) : [];

    // Filter posts against standardized output formats
    const filteredPosts = allPosts.filter(post => {
        if (!post) return false;
        const postTitle = typeof post.title === 'string' ? post.title : '';
        const postRawCategory = typeof post.category === 'string' ? post.category : '';
        return normalizeCategory(postRawCategory, postTitle) === normalizedTarget;
    });

    if (filteredPosts.length === 0) notFound();

    return (
        <div className="relative min-h-screen bg-[#050914] text-[#EDF6FF] antialiased font-sans pt-36 pb-32">
            <div className="max-w-4xl mx-auto px-6">
                <nav className="text-xs font-mono tracking-widest text-neutral-500 uppercase mb-8">
                    <Link href="/" className="hover:text-cyan-400">HOME</Link> / <Link href="/blog" className="hover:text-cyan-400">JOURNAL</Link> / <span className="text-cyan-400">{normalizedTarget}</span>
                </nav>

                <h1 className="text-4xl font-black text-white uppercase tracking-tight mb-12 border-b border-neutral-900 pb-4">
                    PILLAR // {normalizedTarget}
                </h1>

                <div className="space-y-8">
                    {filteredPosts.map((post) => {
                        const cleanSlug = typeof post.slug === 'string' ? post.slug.toLowerCase().trim() : '';
                        const titleText = typeof post.title === 'string' ? post.title : 'Untitled Manifest Node';
                        const descriptionText = typeof post.description === 'string' ? post.description : '';

                        if (!cleanSlug) return null;

                        return (
                            <article key={cleanSlug} className="border border-neutral-900 bg-neutral-950/20 p-6 rounded-none">
                                <Link href={`/blog/posts/${cleanSlug}`} className="group block space-y-2">
                                    <h2 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                                        {titleText}
                                    </h2>
                                    {descriptionText && (
                                        <p className="text-sm text-neutral-400 line-clamp-2">
                                            {descriptionText}
                                        </p>
                                    )}
                                </Link>
                            </article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}