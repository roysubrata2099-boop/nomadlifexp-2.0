import Link from "next/link";
import { notFound } from "next/navigation";

import {
    getAllPosts,
    getPostBySlug,
    slugify,
} from "@/lib/markdown";

import {
    normalizeCategory,
} from "@/lib/taxonomy";

import RelatedArticles from "@/components/RelatedArticles";



type PageParams = {
    slug: string;
};



interface PageProps {
    params: Promise<PageParams>;
}




export async function generateStaticParams() {

    const posts =
        getAllPosts();


    return posts.map((post) => ({
        slug: slugify(post.slug),
    }));

}





export async function generateMetadata({
    params,
}: PageProps) {


    const { slug } =
        await params;


    const post =
        getPostBySlug(slug);



    if (!post) {

        return {
            title: "Article Not Found",
        };

    }



    return {

        title: post.title,

        description:
            post.description,

    };

}





export default async function BlogPostPage({
    params,
}: PageProps) {


    const { slug } =
        await params;



    if (!slug) {

        notFound();

    }



    const post =
        getPostBySlug(
            slugify(slug)
        );



    if (!post) {

        notFound();

    }



    const category =
        normalizeCategory(
            post.category,
            post.title
        );



    return (

        <article className="max-w-4xl mx-auto px-6 py-12">


            <Link
                href={`/blog/category/${slugify(category)}`}
                className="text-sm text-cyan-600 hover:underline"
            >
                ← Back to {category}
            </Link>



            <header className="mt-6 mb-8 border-b pb-6">


                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    {post.title}
                </h1>


                <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
                    {post.description}
                </p>


            </header>




            <div
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{
                    __html: post.contentHtml,
                }}
            />




            <RelatedArticles
                currentSlug={post.slug}
                relatedSlugs={
                    post.relatedArticles ?? []
                }
            />





            <footer className="mt-12 pt-8 border-t">


                <Link
                    href="/blog"
                    className="text-cyan-600 hover:underline"
                >
                    Return to all blogs →
                </Link>


            </footer>


        </article>

    );

}