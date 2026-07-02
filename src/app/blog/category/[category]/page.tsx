import { getAllPosts } from '@/lib/markdown';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return [
        { category: 'discipline' },
        { category: 'fitness' },
        { category: 'yoga' },
        { category: 'mindset' }
    ];
}

function getNormalizedPillar(category: string): string {
    const norm = category?.toLowerCase().trim();
    if (norm === 'fitness') return 'fitness';
    if (norm === 'wellness' || norm === 'yoga') return 'yoga';
    if (norm === 'self growth' || norm === 'discipline') return 'discipline';
    return 'mindset';
}

interface PageProps {
    params: Promise<{ category: string }>;
}

export default async function CategoryPillarPage({ params }: PageProps) {
    const resolvedParams = await params;
    const currentTarget = resolvedParams.category.toLowerCase().trim();

    const allPosts = getAllPosts() || [];

    const filteredPosts = allPosts.filter(
        (post) => getNormalizedPillar(post.category) === currentTarget
    );

    if (filteredPosts.length === 0) {
        notFound();
    }

    const pillarName = currentTarget.charAt(0).toUpperCase() + currentTarget.slice(1);

    return (
        <main className="max-w-4xl mx-auto px-4 py-16 text-black bg-white">
            <nav className="mb-8 text-sm">
                <Link href="/blog" className="text-zinc-400 hover:text-black">← Back to Knowledge Index</Link>
            </nav>
            <header className="border-b border-zinc-200 pb-6 mb-12">
                <h1 className="text-3xl font-black tracking-tight uppercase">Pillar: {pillarName}</h1>
            </header>
            <div className="space-y-10">
                {filteredPosts.map((post) => (
                    <article key={post.slug} className="group border-b border-zinc-100 pb-8">
                        <Link href={`/blog/posts/${post.slug.toLowerCase().trim()}`}>
                            <h2 className="text-xl font-bold group-hover:text-amber-600 transition-colors">{post.title}</h2>
                        </Link>
                        <p className="text-zinc-600 text-sm mt-2">{post.description}</p>
                    </article>
                ))}
            </div>
        </main>
    );
}