import Link from "next/link";

export default function BlogPage() {
    return (
        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 20px" }}>

            <h1>Blog</h1>

            <p style={{ color: "#94a3b8", marginTop: "10px" }}>
                Structured articles on discipline, fitness, yoga, and mental clarity.
            </p>

            <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "16px" }}>

                {/* BLOG POSTS (REAL ARTICLES) */}
                <Link href="/blog/posts/discipline-system">
                    Discipline System
                </Link>

                <Link href="/blog/posts/fitness-basics">
                    Fitness Basics
                </Link>

                <Link href="/blog/posts/yoga-awareness">
                    Yoga Awareness
                </Link>

                <Link href="/blog/posts/mental-clarity-focus">
                    Mental Clarity Focus
                </Link>

            </div>

        </main>
    );
}