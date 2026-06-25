import { posts } from "@/lib/posts";
import Link from "next/link";

export const metadata = {
    title: "Blog - Nomad Life XP",
    description: "Explore articles on Mindset, Discipline, Fitness, and Yoga.",
};

export default function BlogPage() {
    return (
        <main className="max-w-5xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center text-slate-100">All Articles</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <article
                        key={post.slug}
                        className="border border-slate-800 bg-slate-900/50 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-slate-700 transition flex flex-col h-full"
                    >
                        {post.image && (
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <div className="p-5 flex flex-col flex-grow">
                            <div>
                                <span className="text-xs font-semibold uppercase tracking-wider text-yellow-400 bg-yellow-400/10 px-2.5 py-1 rounded">
                                    {post.category}
                                </span>
                            </div>

                            <h2 className="text-xl font-bold mt-4 mb-2 line-clamp-2 text-slate-100">
                                <Link href={`/blog/posts/${post.slug}`} className="hover:text-yellow-400 transition">
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="text-slate-400 text-sm line-clamp-2 mb-4 flex-grow">{post.description}</p>
                            <div className="text-xs text-slate-500 pt-2 border-t border-slate-800/50">
                                {post.date} • By {post.author}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
}