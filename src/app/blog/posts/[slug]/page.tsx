import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// ✅ SEO PER POST (VERY IMPORTANT)
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) {
        return { title: "Not Found" };
    }

    return {
        title: `${post.title} | Nomad Life XP`,
        description: post.description,
        keywords: post.keywords,
        openGraph: {
            title: post.title,
            description: post.description,
            images: [post.image],
        },
    };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) return notFound();

    return (
        <main className="min-h-screen bg-black text-white py-12">
            <article className="max-w-3xl mx-auto px-6">

                <div className="mb-8 border-b border-zinc-800 pb-6">
                    <p className="text-sm text-yellow-400 uppercase">
                        {post.category} • {post.date}
                    </p>

                    <h1 className="text-4xl font-bold mt-2">
                        {post.title}
                    </h1>

                    <p className="text-zinc-400 mt-3">
                        {post.description}
                    </p>
                </div>

                <div className="prose prose-invert max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {post.content}
                    </ReactMarkdown>
                </div>

            </article>
        </main>
    );
}