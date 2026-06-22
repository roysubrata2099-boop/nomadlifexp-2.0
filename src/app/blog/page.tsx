import { posts } from "@/lib/posts";
import Link from "next/link";

export default function BlogIndexPage() {
    const categories = ["Discipline", "Fitness", "Yoga", "Mindset"];

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased">
            {/* Header / Intro Hero Section */}
            <header className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                    Self Transformation Blog System
                </h1>
                <p className="text-md sm:text-lg text-gray-500 uppercase tracking-widest font-medium mb-6">
                    Discipline • Fitness • Yoga • Mental Clarity
                </p>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-4">
                    The NomadLifeXP Blog is a structured self-improvement system designed to help you build discipline, improve fitness consistency, develop yoga practice, and strengthen mental clarity.
                </p>
                <p className="text-sm font-semibold text-gray-800 bg-white inline-block px-4 py-2 rounded-full border shadow-sm">
                    💡 Systems over motivation.
                </p>
            </header>

            {/* Systems Matrix Grid */}
            <main className="max-w-5xl mx-auto px-6 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((cat) => {
                        // Filter posts belonging strictly to this column system
                        const categoryPosts = posts.filter(
                            (p) => p.category.toLowerCase() === cat.toLowerCase()
                        );

                        return (
                            <section key={cat} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                                <div className="border-b border-gray-100 pb-3 mb-4 flex justify-between items-baseline">
                                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                        {cat === "Mindset" ? "Mental Clarity System" : `${cat} System`}
                                    </h2>
                                    <Link
                                        href={`/blog/category/${cat.toLowerCase()}`}
                                        className="text-xs font-semibold text-blue-600 hover:underline"
                                    >
                                        View All →
                                    </Link>
                                </div>

                                {categoryPosts.length === 0 ? (
                                    <p className="text-sm text-gray-400 italic">Adding modules soon...</p>
                                ) : (
                                    <div className="space-y-5">
                                        {categoryPosts.map((post) => (
                                            <div key={post.slug} className="group">
                                                <Link href={`/blog/posts/${post.slug}`} className="block">
                                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                        {post.title}
                                                    </h3>
                                                </Link>
                                                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                                    {post.description}
                                                </p>
                                                <Link
                                                    href={`/blog/posts/${post.slug}`}
                                                    className="text-xs font-medium text-gray-900 inline-flex items-center mt-2 group-hover:underline"
                                                >
                                                    Read More <span className="ml-0.5 group-hover:translate-x-0.5 transition-transform">→</span>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </section>
                        );
                    })}
                </div>

                {/* Footer Concept Statement */}
                <div className="mt-16 text-center border-t border-gray-200 pt-8 max-w-2xl mx-auto">
                    <p className="italic text-gray-600 font-medium">
                        "Discipline builds consistency, consistency builds identity, and identity builds life outcomes."
                    </p>
                    <div className="mt-6">
                        <Link href="/" className="text-sm text-blue-600 font-semibold hover:underline">
                            ← Return to NomadLifeXP Homepage
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}