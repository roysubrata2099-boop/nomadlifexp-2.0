import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

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


const RESERVED_SYSTEM_ROUTES = new Set([
    "admin",
    "api",
    "dashboard",
    "login",
    "signup",
    "account",
    "settings",
    "discipline-system",
    "discipline-system-preview",
]);


function safeText(value: unknown): string {
    return typeof value === "string"
        ? value.trim()
        : "";
}


function safeSlug(value: unknown): string {
    if (typeof value !== "string") {
        return "";
    }

    return slugify(value);
}


function safeImage(value: unknown): string {
    if (typeof value !== "string") {
        return "";
    }

    const image = value.trim();

    if (!image.startsWith("/")) {
        return "";
    }

    return image;
}



export async function generateStaticParams() {

    try {

        const posts = getAllPosts();

        return posts
            .map(post => {

                const slug =
                    safeSlug(post.slug);

                if (
                    !slug ||
                    RESERVED_SYSTEM_ROUTES.has(slug)
                ) {
                    return null;
                }

                return {
                    slug,
                };

            })
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
            getPostBySlug(cleanSlug);


        if (!post) {

            return {
                title:
                    "Article Not Found | NomadLifeXP",
            };

        }


        const title =
            safeText(post.title)
            || "NomadLifeXP Article";


        const description =
            safeText(post.description)
            || "Transformation systems and insights.";


        const image =
            safeImage(post.image);



        return {

            title:
                `${title} | NomadLifeXP`,

            description,


            alternates: {

                canonical:
                    `https://nomadlifexp.com/blog/posts/${cleanSlug}`,

            },


            openGraph: {

                title,

                description,

                url:
                    `https://nomadlifexp.com/blog/posts/${cleanSlug}`,

                type:
                    "article",

                images:
                    image
                        ? [
                            {
                                url:
                                    `https://nomadlifexp.com${image}`,
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
                            `https://nomadlifexp.com${image}`,
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



export default async function BlogPostPage(
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
        getPostBySlug(cleanSlug);



    if (!post) {

        notFound();

    }



    let category =
        "General";


    try {

        category =
            normalizeCategory(
                safeText(post.category),
                safeText(post.title)
            )
            || "General";


    } catch {

        category =
            "General";

    }



    const title =
        safeText(post.title)
        || "Untitled Article";


    const description =
        safeText(post.description);


    const image =
        safeImage(post.image);



    const jsonLd = {

        "@context":
            "https://schema.org",

        "@type":
            "Article",

        headline:
            title,

        description,

        url:
            `https://nomadlifexp.com/blog/posts/${cleanSlug}`,

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


                <Link
                    href={`/blog/category/${slugify(category)}`}
                    className="text-sm text-cyan-600 hover:underline"
                >
                    ← Back to {category}
                </Link>



                <header className="mt-6 mb-8 border-b pb-6">

                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                        {title}
                    </h1>


                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
                        {description}
                    </p>

                </header>



                {image && (

                    <div className="relative w-full mb-8 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">

                        <Image

                            src={image}

                            alt={title}

                            width={1200}

                            height={630}

                            priority

                            sizes="(max-width:896px) 100vw, 840px"

                            className="w-full h-auto object-contain"

                        />

                    </div>

                )}



                <div

                    className="prose dark:prose-invert max-w-none"

                    dangerouslySetInnerHTML={{
                        __html:
                            safeText(post.contentHtml),
                    }}

                />



                <RelatedArticles

                    currentSlug={
                        post.slug
                    }

                    relatedSlugs={
                        Array.isArray(post.relatedArticles)
                            ? post.relatedArticles
                            : []
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

        </>

    );

}