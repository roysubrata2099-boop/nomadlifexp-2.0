import { posts } from "@/lib/posts";
import Link from "next/link";

interface PageProps {
    params: Promise<{
        category: string;
    }>;
}

export default async function CategoryPage({
    params,
}: PageProps) {
    const { category } = await params;

    const filteredPosts = posts.filter(
        (post) =>
            post.category.toLowerCase() === category.toLowerCase()
    );

    return (
        <main
            style={{
                maxWidth: "900px",
                margin: "0 auto",
                padding: "40px 20px",
                backgroundColor: "#0b0b0b", // Matches your original body background
                color: "#fff",
            }}
        >
            <h1
                style={{
                    textTransform: "capitalize",
                    color: "#facc15", // Original gold header accent
                    fontSize: "32px",
                    marginBottom: "30px"
                }}
            >
                {category} Articles
            </h1>

            {filteredPosts.length === 0 ? (
                <p style={{ color: "#a1a1aa" }}>No posts found in this category.</p>
            ) : (
                filteredPosts.map((post) => (
                    <article
                        key={post.slug}
                        style={{
                            marginBottom: "30px",
                            borderBottom: "1px solid #222",
                            paddingBottom: "20px",
                        }}
                    >
                        <Link
                            href={`/blog/posts/${post.slug}`}
                            style={{
                                textDecoration: "none",
                            }}
                        >
                            <h2
                                style={{
                                    color: "#38bdf8", // Links stand out beautifully in blue
                                    margin: "0 0 10px 0",
                                    fontSize: "24px",
                                }}
                                className="category-post-title"
                            >
                                {post.title}
                            </h2>
                        </Link>

                        <p style={{ opacity: 0.9, fontSize: "17px", margin: 0 }}>
                            {post.description}
                        </p>
                    </article>
                ))
            )}
        </main>
    );
}