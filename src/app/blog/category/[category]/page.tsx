import { posts } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
    params: {
        category: string;
    };
}

export async function generateMetadata({ params }: Props) {
    const decodedCategory = decodeURIComponent(params.category);

    const title =
        decodedCategory.charAt(0).toUpperCase() + decodedCategory.slice(1);

    return {
        title: `${title} Blogs - Nomad Life XP`,
        description: `Articles listed under the ${decodedCategory} category.`,
    };
}

export default function CategoryPage({ params }: Props) {
    const targetCategory = decodeURIComponent(params.category).toLowerCase();

    const filteredPosts = posts.filter(
        (post) => post.category.toLowerCase() === targetCategory
    );

    if (!filteredPosts.length) {
        notFound();
    }

    return (
        <main className="max-w-5xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 capitalize border-b border-slate-800 pb-4 text-slate-100">
                Category: {targetCategory}
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
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
                            <h2 className="text-xl font-bold mb-2 line-clamp-2 text-slate-100">
                                <Link
                                    href={`/blog/posts/${post.slug}`}
                                    className="hover:text-yellow-400 transition"
                                >
                                    {post.title}
                                </Link>
                            </h2>

                            <p className="text-slate-400 text-sm line-clamp-2 mb-4 flex-grow">
                                {post.description}
                            </p>

                            <div className="text-xs text-slate-500 pt-2 border-t border-slate-800/50">
                                {post.date}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
}

export async function generateStaticParams() {
    const uniqueCategories = Array.from(
        new Set(posts.map((post) => post.category.toLowerCase()))
    );

    return uniqueCategories.map((category) => ({
        category,
    }));
}