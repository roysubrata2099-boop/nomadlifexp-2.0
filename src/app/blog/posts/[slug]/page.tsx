import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import Link from "next/link";

type Params = {
    slug: string;
};

/* ---------------- SEO ---------------- */
export async function generateMetadata({ params }: { params: Params }) {
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) {
        return {
            title: "Post Not Found | Nomad Life XP",
            description: "This blog post does not exist.",
        };
    }

    return {
        title: `${post.title} | Nomad Life XP`,
        description: post.description,
        keywords: post.keywords,
        openGraph: {
            title: post.title,
            description: post.description,
            images: [
                {
                    url: post.image,
                    alt: post.title,
                },
            ],
        },
    };
}

/* ---------------- STATIC PARAMS ---------------- */
export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

/* ---------------- PAGE ---------------- */
export default function BlogPostPage({ params }: { params: Params }) {
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) return notFound();

    /* ---------------- RELATED POSTS ENGINE ---------------- */
    const relatedPosts = posts
        .filter((p) => {
            if (p.slug === post.slug) return false;

            const sameCategory = p.category === post.category;

            const sharedKeywords =
                p.keywords?.some((k) => post.keywords?.includes(k));

            return sameCategory || sharedKeywords;
        })
        .slice(0, 3);

    return (
        <main className="min-h-screen bg-black text-white py-12">
            <article className="max-w-3xl mx-auto px-6">

                {/* HEADER */}
                <header className="mb-10 border-b border-zinc-800 pb-6">
                    <p className="text-sm text-yellow-400 uppercase tracking-wide">
                        <Link href={`/blog/category/${post.category}`}>
                            {post.category}
                        </Link>{" "}
                        • {post.date}
                    </p>

                    <h1 className="text-4xl font-bold mt-2 leading-tight">
                        {post.title}
                    </h1>

                    <p className="text-zinc-400 mt-4">
                        {post.description}
                    </p>
                </header>

                {/* CONTENT */}
                <section className="prose prose-invert max-w-none prose-p:leading-relaxed prose-headings:text-white prose-a:text-yellow-400">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            img: ({ src, alt }) => {
                                if (!src || typeof src !== "string") return null;

                                return (
                                    <Image
                                        src={src}
                                        alt={alt || "Blog image"}
                                        width={800}
                                        height={450}
                                        className="rounded-lg object-cover my-6"
                                    />
                                );
                            },
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </section>

                {/* RELATED POSTS (🔥 CORE CONNECTION SYSTEM) */}
                <section className="mt-14 border-t border-zinc-800 pt-8">
                    <h2 className="text-xl font-semibold mb-4">
                        Related Articles
                    </h2>

                    <div className="space-y-3">
                        {relatedPosts.map((p) => (
                            <Link
                                key={p.slug}
                                href={`/blog/posts/${p.slug}`}
                                className="block text-yellow-400 hover:underline"
                            >
                                {p.title}
                            </Link>
                        ))}
                    </div>
                </section>

                {/* CATEGORY NAVIGATION */}
                <section className="mt-10 text-sm text-zinc-400">
                    <Link
                        href={`/blog/category/${post.category}`}
                        className="text-yellow-400 hover:underline"
                    >
                        More in {post.category}
                    </Link>
                </section>

            </article>
        </main>
    );
}