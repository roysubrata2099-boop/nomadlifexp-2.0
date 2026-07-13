import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts } from "@/lib/markdown";
import { normalizeCategory } from "@/lib/taxonomy";

const slugify = (text: string): string =>
    text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

type CategoryParams = {
    category: string;
};

interface PageProps {
    params: Promise<CategoryParams>;
}


export async function generateStaticParams() {
    const posts = getAllPosts();

    const categories = Array.from(
        new Set(
            posts.map((post) =>
                slugify(
                    normalizeCategory(
                        post.category ?? "uncategorized",
                        post.title ?? ""
                    )
                )
            )
        )
    );

    return categories.map((category) => ({
        category,
    }));
}


export default async function CategoryPage({
    params,
}: PageProps) {

    const { category } = await params;

    const categorySlug = slugify(category);

    const posts = getAllPosts();


    const filteredPosts = posts.filter((post) => {
        const postCategory = slugify(
            normalizeCategory(
                post.category ?? "uncategorized",
                post.title ?? ""
            )
        );

        return postCategory === categorySlug;
    });


    if (!filteredPosts.length) {
        notFound();
    }


    const categoryTitle = normalizeCategory(
        filteredPosts[0]?.category ?? "uncategorized",
        filteredPosts[0]?.title ?? ""
    );


    return (
        <main className="max-w-6xl mx-auto px-6 py-12">


            <Link
                href="/blog"
                className="
                    text-sm
                    text-cyan-400
                    hover:underline
                "
            >
                ← Back to all blogs
            </Link>



            <header className="mt-8 mb-10">

                <h1 className="text-4xl font-bold text-white">
                    {categoryTitle}
                </h1>


                <p className="mt-3 text-zinc-400">
                    Articles from this category.
                </p>

            </header>



            <section className="space-y-6">


                {filteredPosts.map((post) => (

                    <article
                        key={post.slug}
                        className="
                            rounded-2xl
                            border
                            border-zinc-800
                            bg-zinc-950
                            p-6
                            hover:border-cyan-500/60
                            transition-all
                        "
                    >

                        <Link
                            href={`/blog/posts/${post.slug}`}
                            className="
                                text-2xl
                                font-bold
                                text-white
                                hover:text-cyan-400
                                transition-colors
                            "
                        >
                            {post.title}
                        </Link>



                        <p
                            className="
                                mt-3
                                text-zinc-300
                                leading-relaxed
                            "
                        >
                            {post.description}
                        </p>



                        <Link
                            href={`/blog/posts/${post.slug}`}
                            className="
                                inline-block
                                mt-5
                                text-sm
                                font-semibold
                                text-cyan-400
                                hover:underline
                            "
                        >
                            Read full article →
                        </Link>


                    </article>

                ))}


            </section>


        </main>
    );
}