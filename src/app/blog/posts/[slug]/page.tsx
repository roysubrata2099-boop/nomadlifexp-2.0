import { posts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) return {};

    return {
        title: `${post.title} - Nomad Life XP`,
        description: post.description,
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;

    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = posts.filter((p) => post.relatedSlugs.includes(p.slug));

    return (
        <main className="max-w-3xl mx-auto px-4 py-12">
            <header className="mb-8">
                <div className="text-sm text-slate-400 mb-2">
                    <Link href={`/blog/category/${post.category}`} className="hover:underline text-yellow-400 capitalize font-medium">
                        {post.category}
                    </Link>
                    <span> • {post.date}</span>
                </div>
                <h1 className="text-4xl font-extrabold text-slate-100 mb-6 tracking-tight">{post.title}</h1>

                {post.image && (
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 md:h-96 object-cover rounded-xl mb-6 shadow-sm"
                    />
                )}
            </header>

            {/* Injects typography rules explicitly built out via globally applied CSS variables */}
            <div
                className="prose max-w-none border-b border-slate-800 pb-8 text-slate-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Related Reading Navigation Block */}
            {relatedPosts.length > 0 && (
                <section className="mt-12">
                    <h3 className="text-2xl font-bold mb-6 text-slate-100">Related Articles</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {relatedPosts.map((relPost) => (
                            <Link
                                key={relPost.slug}
                                href={`/blog/posts/${relPost.slug}`}
                                className="p-4 border border-slate-800 bg-slate-900/30 rounded-lg block hover:bg-slate-900/80 hover:border-slate-700 transition"
                            >
                                <span className="text-xs text-yellow-400 uppercase font-semibold tracking-wider">{relPost.category}</span>
                                <h4 className="font-semibold text-slate-200 mt-1">→ {relPost.title}</h4>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}