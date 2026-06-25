import { posts } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
    params: {
        category: string;
    };
}

/* ---------------- SEO ---------------- */
export async function generateMetadata({ params }: Props) {
    const decodedCategory = decodeURIComponent(params.category).toLowerCase();

    const title =
        decodedCategory.charAt(0).toUpperCase() + decodedCategory.slice(1);

    return {
        title: `${title} Blogs - Nomad Life XP`,
        description: `Explore all ${title} related articles on Nomad Life XP.`,
    };
}

/* ---------------- PAGE ---------------- */
export default function CategoryPage({ params }: Props) {
    const targetCategory = decodeURIComponent(params.category).toLowerCase();

    const filteredPosts = posts.filter(
        (post) => post.category.toLowerCase() === targetCategory
    );

    if (!filteredPosts.length) {
        notFound();
    }

    /* ---------------- CATEGORY RELATED CONNECTION ---------------- */
    const otherCategories = Array.from(
        new Set(posts.map((p) => p.category.toLowerCase()))
    ).filter((c) => c !== targetCategory);

    return (
        <main className="max-w-6xl mx-auto px-4 py-12">

            {/* HEADER */}
            <header className="mb-10 border-b border-slate-800 pb-6">
                <h1 className="text-4xl font-bold capitalize text-slate-100">
                    {targetCategory}
                </h1>

                <p className="text-slate-400 mt-2">
                    {filteredPosts.length} articles in this category
                </p>
            </header>

            {/* POSTS GRID */}
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

            {/* CATEGORY CROSS-LINKING (🔥 IMPORTANT FOR CONNECTION) */}
            <section className="mt-16 border-t border-slate-800 pt-8">
                <h2 className="text-xl font-semibold text-slate-200 mb-4">
                    Explore Other Categories
                </h2>

                <div className="flex flex-wrap gap-3">
                    {otherCategories.map((cat) => (
                        <Link
                            key={cat}
                            href={`/blog/category/${cat}`}
                            className="px-4 py-2 text-sm rounded-full border border-slate-700 text-slate-300 hover:text-yellow-400 hover:border-yellow-400 transition"
                        >
                            {cat}
                        </Link>
                    ))}
                </div>
            </section>

        </main>
    );
}

/* ---------------- STATIC PARAMS ---------------- */
export async function generateStaticParams() {
    const uniqueCategories = Array.from(
        new Set(posts.map((post) => post.category.toLowerCase()))
    );

    return uniqueCategories.map((category) => ({
        category,
    }));
}