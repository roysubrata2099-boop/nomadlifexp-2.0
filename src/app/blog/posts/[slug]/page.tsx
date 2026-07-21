import "server-only";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
    getAllMDXPosts,
    getMDXPostBySlug,
} from "@/lib/mdx";

import MDXRelatedArticles from "@/components/MDXRelatedArticles";



type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};



const SITE_URL =
    "https://nomadlifexp.com";



const RESERVED_SYSTEM_ROUTES =
    new Set([
        "admin",
        "api",
        "dashboard",
        "login",
        "signup",
        "account",
        "settings",
        "blog",
    ]);



function safeText(
    value: unknown
): string {

    return typeof value === "string"
        ? value.trim()
        : "";

}



function safeSlug(
    value: unknown
): string {

    if (
        typeof value !== "string"
    ) {
        return "";
    }


    return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");

}



function safeImage(
    value: unknown
): string {

    if (
        typeof value !== "string"
    ) {
        return "";
    }


    const image =
        value.trim();



    if (
        !image.startsWith("/")
    ) {
        return "";
    }


    return image;

}





export async function generateStaticParams() {

    try {

        const posts =
            getAllMDXPosts();



        return posts
            .map(
                (post) => {

                    const slug =
                        safeSlug(
                            post.slug
                        );


                    if (
                        !slug ||
                        RESERVED_SYSTEM_ROUTES.has(slug)
                    ) {
                        return null;
                    }


                    return {
                        slug,
                    };

                }
            )
            .filter(
                (
                    item
                ): item is { slug: string } =>
                    item !== null
            );


    } catch {

        return [];

    }

}






export async function generateMetadata(
    {
        params,
    }: PageProps
): Promise<Metadata> {


    try {

        const {
            slug,
        } = await params;



        const cleanSlug =
            safeSlug(slug);



        if (
            !cleanSlug ||
            RESERVED_SYSTEM_ROUTES.has(cleanSlug)
        ) {
            return {};
        }



        const post =
            await getMDXPostBySlug(
                cleanSlug
            );



        if (!post) {

            return {
                title:
                    "Article Not Found | NomadLifeXP",
            };

        }



        const title =
            safeText(post.title)
            ||
            "NomadLifeXP Article";



        const description =
            safeText(post.description)
            ||
            "Transformation systems and insights.";



        const image =
            safeImage(post.image);



        return {

            title:
                `${title} | NomadLifeXP`,


            description,



            alternates: {

                canonical:
                    `${SITE_URL}/blog/posts/${cleanSlug}`,

            },



            openGraph: {

                title,

                description,


                url:
                    `${SITE_URL}/blog/posts/${cleanSlug}`,


                type:
                    "article",



                images:
                    image
                        ? [
                            {
                                url:
                                    `${SITE_URL}${image}`,
                            },
                        ]
                        : [],

            },



            twitter: {

                card:
                    "summary_large_image",


                title,

                description,


                images:
                    image
                        ? [
                            `${SITE_URL}${image}`,
                        ]
                        : [],

            },

        };


    } catch {

        return {
            title:
                "Article | NomadLifeXP",
        };

    }

}







export default async function MDXPostPage(
    {
        params,
    }: PageProps
) {


    const {
        slug,
    } = await params;



    const cleanSlug =
        safeSlug(slug);



    if (
        !cleanSlug ||
        RESERVED_SYSTEM_ROUTES.has(cleanSlug)
    ) {

        notFound();

    }




    const post =
        await getMDXPostBySlug(
            cleanSlug
        );



    if (!post) {

        notFound();

    }





    const title =
        safeText(post.title)
        ||
        "Untitled Article";



    const description =
        safeText(post.description);



    const category =
        safeSlug(post.category);



    const image =
        safeImage(post.image);



    const relatedArticles =
        Array.isArray(post.relatedArticles)
            ? post.relatedArticles.filter(
                (item): item is string =>
                    typeof item === "string"
            )
            : [];





    const jsonLd = {

        "@context":
            "https://schema.org",


        "@type":
            "Article",


        headline:
            title,


        description,


        image:
            image
                ? `${SITE_URL}${image}`
                : undefined,


        url:
            `${SITE_URL}/blog/posts/${cleanSlug}`,


        author: {

            "@type":
                "Organization",


            name:
                "NomadLifeXP",

        },


        publisher: {

            "@type":
                "Organization",


            name:
                "NomadLifeXP",

        },

    };






    return (

        <>

            <script

                type="application/ld+json"

                dangerouslySetInnerHTML={{

                    __html:
                        JSON.stringify(jsonLd),

                }}

            />



            <article className="max-w-4xl mx-auto px-6 py-12">



                <div className="mb-6">


                    {category && (

                        <Link

                            href={`/blog/category/${category}`}

                            className="text-sm text-cyan-600 hover:underline"

                        >

                            ← Back to {post.category}

                        </Link>

                    )}


                </div>





                <header className="mb-10 border-b pb-6">


                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">

                        {title}

                    </h1>



                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">

                        {description}

                    </p>





                    {image && (

                        <div className="relative mt-8 overflow-hidden rounded-xl">


                            <Image

                                src={image}

                                alt={title}

                                width={1200}

                                height={630}

                                priority

                                sizes="(max-width:896px) 100vw, 896px"

                                className="h-auto w-full object-cover"

                            />


                        </div>

                    )}



                </header>





                <div className="prose dark:prose-invert max-w-none">

                    {post.content}

                </div>





                <MDXRelatedArticles

                    currentSlug={
                        post.slug
                    }

                    relatedSlugs={
                        relatedArticles
                    }

                />





            </article>


        </>

    );

}