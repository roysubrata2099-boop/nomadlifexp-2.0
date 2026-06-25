import { posts } from "@/data/posts";
import Link from "next/link";

export default function BlogPage() {
    return (
        <main className="max-w-5xl mx-auto p-6">

            <h1 className="text-3xl font-bold">All Blogs</h1>

            <div className="grid gap-4 mt-6">

                {posts.map(post => (
                    <Link
                        key={post.slug}
                        href={`/blog/posts/${post.slug}`}
                        className="border p-4 rounded hover:bg-gray-50"
                    >
                        <h2 className="font-semibold">{post.title}</h2>
                        <p className="text-sm text-gray-500">
                            {post.description}
                        </p>
                    </Link>
                ))}

            </div>

        </main>
    );
}