import { getAllPosts } from '@/lib/markdown';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Pre-render BOTH cases so Linux servers never 404 on case mismatch
export async function generateStaticParams() {
    const categories = ['discipline', 'fitness', 'yoga', 'mindset'];
    const params = [];

    for (const cat of categories) {
        params.push({ category: cat });
        params.push({ category: cat.charAt(0).toUpperCase() + cat.slice(1) });
    }
    return params;
}

function getNormalizedPillar(category: string): string {
    const norm = category?.toLowerCase().trim();
    if (norm === 'fitness') return 'fitness';
    if (norm === 'wellness' || norm === 'yoga') return 'yoga';
    if (norm === 'self growth' || norm === 'discipline') return 'discipline';
    if (norm === 'mental clarity' || norm === 'mindset') return 'mindset';
    return 'mindset';
}

type Props = {
    params: Promise<{ category: string }>;
};

export default async function CategoryPillarPage({ params }: Props) {
    const { category } = await params;
    // Handle incoming URL parameter cleanly regardless of casing
    const currentTarget = category.toLowerCase().trim();

    const allPosts = getAllPosts();

    const filteredPosts = allPosts.filter(
        (post) => getNormalizedPillar(post.category) === currentTarget
    );

    if (filteredPosts.length === 0) {
        notFound();
    }

    const pillarName = currentTarget.charAt(0).toUpperCase() + currentTarget.slice(1);

    return (
        <main className="max-w-4xl mx-auto px-4 py-16">
            <nav className="mb-8 text-sm">
                <Link href="/blog" className="text-zinc-400 hover:text-black">← Back to Knowledge Index</Link>
            </nav>

            <header className="border-b border-zinc-200 pb-6 mb-12">
                <h1 className="text-3xl font-black tracking-tight uppercase">Pillar: {pillarName}</h1>
                <p className="text-gray-500 mt-2">Blueprints focused strictly on {pillarName}.</p>
            </header>

            <div className="space-y-10">
                {filteredPosts.map((post) => (
                    <article key={post.slug} className="group border-b border-zinc-100 pb-8">
                        <span className="text-xs font-mono text-zinc-400">
                            {post.date instanceof Date ? post.date.toLocaleDateString() : String(post.date)}
                        </span>
                        <Link href={`/blog/posts/${post.slug}`}>
                            <h2 className="text-xl font-bold mt-1 group-hover:text-amber-600 group-hover:underline transition-colors">
                                {post.title}
                            </h2>
                        </Link>
                        <p className="text-zinc-600 text-sm mt-2 max-w-2xl">{post.description}</p>
                    </article>
                ))}
            </div>
        </main>
    );
}