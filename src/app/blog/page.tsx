import Link from 'next/link';
import { getAllPosts } from '@/lib/markdown';

export const metadata = {
    title: 'Knowledge Index & Frameworks | NomadLifeXP',
    description: 'Master framework indexing for optimal physical and mental performance.',
};

function getNormalizedPillar(category: string): 'Discipline' | 'Fitness' | 'Yoga' | 'Mindset' {
    const norm = category?.toLowerCase().trim();
    if (norm === 'fitness') return 'Fitness';
    if (norm === 'wellness' || norm === 'yoga') return 'Yoga';
    if (norm === 'self growth' || norm === 'discipline') return 'Discipline';
    return 'Mindset'; // Catch-all for mental clarity, uncategorized, etc.
}

export default function BlogHubPage() {
    const allPosts = getAllPosts() || [];
    const pillars = ['Discipline', 'Fitness', 'Yoga', 'Mindset'] as const;

    const mappedPosts = allPosts.map(post => ({
        ...post,
        assignedPillar: getNormalizedPillar(post.category)
    }));

    // Select 4 foundational cards
    const startHerePosts = mappedPosts.filter(
        post => post.isStartHere === true ||
            post.slug === 'why-you-procrastinate-how-to-stop' ||
            post.slug === 'fitness-is-not-about-time'
    ).slice(0, 4);

    return (
        <main className="max-w-6xl mx-auto px-4 py-16 font-sans text-black bg-white">
            <header className="mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">KNOWLEDGE INDEX</h1>
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
                <div className="grid md:grid-cols-2 gap-6">
                    {startHerePosts.map(post => (
                        <Link
                            key={post.slug}
                            href={`/blog/posts/${post.slug.toLowerCase().trim()}`}
                            className="group block p-5 bg-white border border-zinc-200 rounded-xl hover:border-black transition-all"
                        >
                            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 group-hover:text-black">
                                {post.assignedPillar}
                            </span>
                            <h3 className="text-lg font-bold mt-1 group-hover:underline text-zinc-900">{post.title}</h3>
                            <p className="text-sm text-gray-500 mt-2 line-clamp-2">{post.description}</p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* PILLAR SILOS */}
            <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {pillars.map(pillar => {
                    const pillarPosts = mappedPosts.filter(post => post.assignedPillar === pillar);

                    return (
                        <div key={pillar} className="flex flex-col border-t-2 border-black pt-4">
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
                                            href={`/blog/posts/${post.slug.toLowerCase().trim()}`}
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