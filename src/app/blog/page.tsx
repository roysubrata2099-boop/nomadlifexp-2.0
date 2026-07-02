import Link from 'next/link';
import { getAllPosts } from '@/lib/markdown';

export const metadata = {
    title: 'Knowledge Index & Frameworks | NomadLifeXP',
    description: 'Master framework indexing for optimal physical and mental performance.',
};

export default function BlogHubPage() {
    const allPosts = getAllPosts();
    const startHerePosts = allPosts.filter(post => post.isStartHere === true);
    const pillars = ['Discipline', 'Fitness', 'Yoga', 'Mindset'] as const;

    return (
        <main className="max-w-6xl mx-auto px-4 py-16 font-sans">
            <header className="mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">KNOWLEDGE INDEX</h1>
                <p className="text-gray-500 max-w-xl mx-auto text-lg">
                    Our core architecture for structured execution and physical mastery.
                </p>
            </header>

            {/* START HERE SECTION */}
            <section className="mb-16 bg-zinc-50 border border-zinc-200 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6">
                    <span className="bg-amber-500 text-black font-bold text-xs uppercase px-2 py-1 rounded">Crucial</span>
                    <h2 className="text-2xl font-bold tracking-tight">🚀 Start Here</h2>
                </div>
                {startHerePosts.length === 0 ? (
                    <p className="text-sm text-zinc-400 italic">Assign "isStartHere: true" in frontmatter to feature foundational posts.</p>
                ) : (
                    <div className="grid md:grid-cols-2 gap-6">
                        {startHerePosts.map(post => (
                            <Link
                                key={post.slug}
                                href={`/blog/posts/${post.slug}`}
                                className="group block p-5 bg-white border border-zinc-200 rounded-xl hover:border-black transition-all"
                            >
                                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 group-hover:text-black">
                                    {post.category}
                                </span>
                                <h3 className="text-lg font-bold mt-1 group-hover:underline text-zinc-900">{post.title}</h3>
                                <p className="text-sm text-gray-500 mt-2 line-clamp-2">{post.description}</p>
                            </Link>
                        ))}
                    </div>
                )}
            </section>

            {/* PILLAR SILOS */}
            <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {pillars.map(pillar => {
                    const pillarPosts = allPosts.filter(
                        post => post.category?.toLowerCase() === pillar.toLowerCase()
                    );

                    return (
                        <div key={pillar} className="flex flex-col border-t-2 border-black pt-4">
                            {/* This link must cleanly match the file path directory structure */}
                            <Link href={`/blog/category/${pillar.toLowerCase()}`} className="group block mb-4">
                                <div className="flex justify-between items-baseline">
                                    <h2 className="text-xl font-black tracking-tight group-hover:text-amber-600 transition-colors">
                                        {pillar}
                                    </h2>
                                    <span className="text-xs font-mono text-gray-400">[{pillarPosts.length}]</span>
                                </div>
                            </Link>

                            <ul className="space-y-3 flex-1">
                                {pillarPosts.slice(0, 5).map(post => (
                                    <li key={post.slug}>
                                        <Link
                                            href={`/blog/posts/${post.slug}`}
                                            className="text-sm text-zinc-600 hover:text-black hover:underline block leading-snug"
                                        >
                                            • {post.title}
                                        </Link>
                                    </li>
                                ))}
                                {pillarPosts.length === 0 && (
                                    <li className="text-xs text-zinc-400 italic">No posts in this silo yet</li>
                                )}
                            </ul>
                        </div>
                    );
                })}
            </section>
        </main>
    );
}