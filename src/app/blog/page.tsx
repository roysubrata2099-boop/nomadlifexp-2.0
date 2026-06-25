import { posts } from "@/lib/posts";
import Link from "next/link";

function getExcerpt(content: string) {
    return content
        .replace(/[#*`]/g, "")
        .replace(/\n+/g, " ")
        .trim()
        .slice(0, 140) + "...";
}

export default function BlogPage() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-10 text-white">
                All Articles
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <article
                        key={post.slug}
                        className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-yellow-500 transition"
                    >
                        <img
                            src={post.image}
                            className="h-48 w-full object-cover"
                            alt={post.title}
                        />

                        <div className="p-5">
                            <span className="text-xs text-yellow-400 uppercase">
                                {post.category}
                            </span>

                            <h2 className="text-lg font-bold mt-2 text-white">
                                <Link href={`/blog/posts/${post.slug}`}>
                                    {post.title}
                                </Link>
                            </h2>

                            <p className="text-sm text-zinc-400 mt-2">
                                {getExcerpt(post.content)}
                            </p>

                            <div className="text-xs text-zinc-500 mt-4">
                                {post.date} • {post.author}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
}