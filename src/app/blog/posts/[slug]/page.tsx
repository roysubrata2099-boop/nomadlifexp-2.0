import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

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

    return (
        <main className="min-h-screen bg-black text-white py-12">
            <article className="max-w-3xl mx-auto px-6">

                {/* HEADER */}
                <header className="mb-10 border-b border-zinc-800 pb-6">
                    <p className="text-sm text-yellow-400 uppercase tracking-wide">
                        {post.category} • {post.date}
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

            </article>
        </main>
    );
}