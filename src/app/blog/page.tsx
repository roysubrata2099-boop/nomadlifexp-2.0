import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export default function BlogPage() {
    const posts = getAllPosts();

    if (!Array.isArray(posts) || posts.length === 0) {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Blog</h1>
                <p>No posts found.</p>
            </div>
        );
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>Blog</h1>

            <div style={{ display: "grid", gap: "12px", marginTop: "20px" }}>
                {posts.map((post) => {
                    if (!post?.slug) return null;

                    return (
                        <Link key={post.slug} href={`/blog/posts/${post.slug}`}>
                            <article
                                style={{
                                    padding: "12px",
                                    border: "1px solid #ddd",
                                    borderRadius: "8px",
                                }}
                            >
                                <h2>{post.title || "Untitled"}</h2>
                                <p>{post.description || ""}</p>
                                <small>{post.category || "uncategorized"}</small>
                            </article>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}