import Link from "next/link";
import { notFound } from "next/navigation";

import {
    getAllPosts,
    slugify,
} from "@/lib/markdown";

import {
    VALID_CATEGORIES,
    normalizeCategory,
} from "@/lib/taxonomy";


type CategoryParams = {
    category: string;
};


interface PageProps {
    params: Promise<CategoryParams>;
}



export async function generateStaticParams() {

    return VALID_CATEGORIES.map(
        (category) => ({
            category,
        })
    );

}



export default async function CategoryPage({
    params,
}: PageProps) {


    const { category } = await params;


    const categorySlug =
        slugify(category);



    if (
        !VALID_CATEGORIES.includes(
            categorySlug as typeof VALID_CATEGORIES[number]
        )
    ) {
        notFound();
    }



    const posts =
        getAllPosts();



    const filteredPosts =
        posts.filter((post) => {


            const postCategory =
                normalizeCategory(
                    post.category,
                    post.title
                );


            return (
                slugify(postCategory)
                === categorySlug
            );


        });



    if (
        filteredPosts.length === 0
    ) {
        notFound();
    }



    const displayTitle =
        categorySlug
            .charAt(0)
            .toUpperCase()
        +
        categorySlug.slice(1);



    return (

        <main className="max-w-5xl mx-auto px-6 py-12">


            <Link
                href="/blog"
                className="text-sm text-cyan-600 hover:underline"
            >
                ← Back to all blogs
            </Link>



            <header className="mt-8 mb-10">


                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    {displayTitle}
                </h1>


                <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Articles from the {displayTitle} pillar.
                </p>


            </header>




            <section className="space-y-6">


                {filteredPosts.map((post) => (

                    <article
                        key={post.slug}
                        className="rounded-xl border p-6 bg-white dark:bg-zinc-900"
                    >


                        <Link
                            href={`/blog/posts/${slugify(post.slug)}`}
                            className="text-2xl font-semibold text-cyan-600 hover:underline"
                        >
                            {post.title}
                        </Link>



                        <p className="mt-3 text-gray-600 dark:text-gray-300">
                            {post.description}
                        </p>



                        <Link
                            href={`/blog/posts/${slugify(post.slug)}`}
                            className="inline-block mt-4 text-sm text-cyan-600 hover:underline"
                        >
                            Read full article →
                        </Link>


                    </article>

                ))}


            </section>


        </main>

    );

}