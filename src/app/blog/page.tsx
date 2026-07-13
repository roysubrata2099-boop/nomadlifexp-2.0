import Link from "next/link";

import {
    getAllPosts,
    slugify,
    type PostData,
} from "@/lib/markdown";

import {
    normalizeCategory,
} from "@/lib/taxonomy";



interface SafePost {

    slug: string;

    title: string;

    description: string;

    category: string;

    date?: string;

}




export default function BlogPage() {


    const posts: SafePost[] =

        getAllPosts()

            .map((post: PostData) => {


                const category =

                    normalizeCategory(
                        post.category,
                        post.title
                    );


                return {

                    slug:
                        slugify(post.slug),


                    title:
                        post.title ||
                        "Untitled Post",


                    description:
                        post.description ||
                        "No description available.",


                    category:
                        slugify(category),


                    date:
                        post.date,

                };


            })

            .filter(
                (post, index, array) =>

                    array.findIndex(
                        item =>
                            item.slug === post.slug
                    )
                    === index
            )

            .sort(
                (a, b) =>
                    (b.date ?? "")
                        .localeCompare(
                            a.date ?? ""
                        )
            );





    if (posts.length === 0) {


        return (

            <section className="max-w-7xl mx-auto px-6 py-12 text-center">


                <h1 className="text-3xl font-bold mb-4">
                    All Blog Posts
                </h1>


                <p className="text-gray-500">
                    No blog posts found.
                </p>


            </section>

        );

    }





    return (

        <section className="max-w-7xl mx-auto px-6 py-12">


            <h1 className="text-3xl font-bold mb-8">
                All Blog Posts
            </h1>




            <ul className="space-y-6">


                {posts.map((post) => (


                    <li
                        key={post.slug}
                        className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-zinc-900"
                    >


                        <Link

                            href={`/blog/posts/${post.slug}`}

                            className="text-2xl font-semibold text-blue-600 dark:text-blue-400 hover:underline"

                        >

                            {post.title}

                        </Link>




                        <p className="text-gray-600 dark:text-gray-300 line-clamp-3 my-3">

                            {post.description}

                        </p>




                        <Link

                            href={`/blog/category/${post.category}`}

                            className="inline-flex items-center px-3 py-1 text-xs font-medium text-cyan-600 bg-cyan-50 dark:text-cyan-400 dark:bg-cyan-950/50 rounded-full hover:bg-cyan-100"

                        >

                            Category:
                            {" "}
                            {post.category.replace(
                                /-/g,
                                " "
                            )}

                        </Link>



                    </li>


                ))}


            </ul>


        </section>

    );

}