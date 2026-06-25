import { posts } from "@/data/posts";
import Link from "next/link";

export default function DisciplinePage() {
    const disciplineArticles = posts.filter(
        (post) => post.category === "discipline"
    );

    return (
        <main className="max-w-5xl mx-auto px-6 py-20">

            {/* HERO */}
            <section className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Discipline System
                </h1>

                <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                    Discipline is not motivation. It is structure that creates freedom.
                </p>

                <p className="mt-4 text-gray-500 max-w-xl mx-auto">
                    Build control, consistency, and identity.
                </p>
            </section>

            {/* CORE */}
            <section className="mt-20 space-y-4">
                <h2 className="text-2xl font-semibold">What is Discipline?</h2>
                <p className="text-gray-600">
                    Discipline is acting based on long-term direction instead of short-term emotion.
                </p>
            </section>

            <section className="mt-12 space-y-4">
                <h2 className="text-2xl font-semibold">Why Most People Lack Discipline</h2>
                <p className="text-gray-600">
                    Most people rely on motivation instead of systems and structure.
                </p>
            </section>

            <section className="mt-12 space-y-4">
                <h2 className="text-2xl font-semibold">How Discipline is Built</h2>
                <p className="text-gray-600">
                    Discipline is built through repetition, environment, and identity shift.
                </p>
            </section>

            {/* ARTICLES */}
            <section className="mt-20">
                <h2 className="text-2xl font-semibold">Featured Articles</h2>

                <div className="mt-6 grid gap-4">
                    {disciplineArticles.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/posts/${post.slug}`}
                            className="p-5 border rounded-xl hover:bg-gray-50 transition block"
                        >
                            <div className="font-medium text-gray-900 hover:text-blue-600 transition">
                                {post.title}
                            </div>

                            {post.description && (
                                <div className="text-sm text-gray-500 mt-1">
                                    {post.description}
                                </div>
                            )}
                        </Link>
                    ))}
                </div>
            </section>

            {/* RELATED */}
            <section className="mt-20">
                <h2 className="text-2xl font-semibold">Explore More Topics</h2>

                <div className="mt-6 flex flex-wrap gap-3">
                    <Link href="/blog/category/mindset" className="px-4 py-2 border rounded-full">
                        Mindset
                    </Link>

                    <Link href="/blog/category/fitness" className="px-4 py-2 border rounded-full">
                        Fitness
                    </Link>

                    <Link href="/blog/category/yoga" className="px-4 py-2 border rounded-full">
                        Yoga
                    </Link>
                </div>
            </section>

        </main>
    );
}