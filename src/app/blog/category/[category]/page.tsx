// src/app/blog/category/[category]/page.tsx

import { getAllPosts } from '@/lib/markdown';
import { normalizeCategory } from '@/lib/taxonomy';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = {
    params: Promise<{ category: string }>;
};

// 🛡️ Static parameter compiler generation map
export async function generateStaticParams() {
    return [
        { category: 'discipline' },
        { category: 'fitness' },
        { category: 'yoga' },
        { category: 'mindset' }
    ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category } = await params;
    const target = typeof category === 'string' ? category.toLowerCase().trim() : 'Archive';
    return {
        title: `Core Architecture // ${target.toUpperCase()} | NomadLifeXP`,
        description: `System structural directives index tracking node metrics inside the ${target} module.`
    };
}

export default async function CategoryPage({ params }: Props) {
    const { category } = await params;
    const normalizedTarget = typeof category === 'string' ? category.toLowerCase().trim() : '';

    const allPosts = getAllPosts() || [];

    // Filter posts against standardized output formats
    const filteredPosts = allPosts.filter(post => {
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
                        return (
                            <article key={cleanSlug} className="border border-neutral-900 bg-neutral-950/20 p-6 rounded-none">
                                {/* 🛡️ EXPLICIT COMPLIANCE TO DISK LOCATION STRUCTURAL URLS */}
                                <Link href={`/blog/posts/${cleanSlug}`} className="group block space-y-2">
                                    <h2 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-sm text-neutral-400 line-clamp-2">
                                        {post.description}
                                    </p>
                                </Link>
                            </article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}