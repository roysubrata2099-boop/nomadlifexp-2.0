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

type Props = {
    params: Promise<{ category: string }>;
};

export default async function CategoryPillarPage({ params }: Props) {
    const { category } = await params;
    const allPosts = getAllPosts();

    const filteredPosts = allPosts.filter(
        (post) => post.category?.toLowerCase() === category.toLowerCase()
    );

    if (filteredPosts.length === 0) {
        notFound();
    }

    const pillarName = category.charAt(0).toUpperCase() + category.slice(1);

    return (
        <main className="max-w-4xl mx-auto px-4 py-16">
            <nav className="mb-8 text-sm">
                <Link href="/blog" className="text-zinc-400 hover:text-black">← Back to Knowledge Index</Link>
            </nav>

            <header className="border-b border-zinc-200 pb-6 mb-12">
                <h1 className="text-3xl font-black tracking-tight uppercase">Pillar: {pillarName}</h1>
                <p className="text-gray-500 mt-2">Deep dive blueprints and tactical content focused on {pillarName}.</p>
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