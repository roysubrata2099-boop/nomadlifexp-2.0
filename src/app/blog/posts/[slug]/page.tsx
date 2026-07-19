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
            .filter(post => {

                const slug =
                    safeSlug(post.slug);

                return (
                    slug.length > 0 &&
                    !RESERVED_SYSTEM_ROUTES.has(slug)
                );

            })
            .map(post => ({
                slug: safeSlug(post.slug),
            }));

    } catch {

        return [];

    }
}



export async function generateMetadata(
    { params }: PageProps
): Promise<Metadata> {

    try {

        const { slug } =
            await params;


        const normalizedSlug =
            safeSlug(slug);


        if (
            !normalizedSlug ||
            RESERVED_SYSTEM_ROUTES.has(normalizedSlug)
        ) {
            return {};
        }


        const post =
            getPostBySlug(normalizedSlug);


        if (!post) {

            return {
                title: "Article Not Found | NomadLifeXP",
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
                    `https://nomadlifexp.com/blog/posts/${normalizedSlug}`,

            },


            openGraph: {

                title:
                    `${title} | NomadLifeXP`,

                description,

                url:
                    `https://nomadlifexp.com/blog/posts/${normalizedSlug}`,

                type: "article",

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

                title:
                    `${title} | NomadLifeXP`,

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
            title: "Article | NomadLifeXP",
        };

    }
}



export default async function BlogPostPage(
    { params }: PageProps
) {


    const { slug } =
        await params;


    const normalizedSlug =
        safeSlug(slug);



    if (
        !normalizedSlug ||
        RESERVED_SYSTEM_ROUTES.has(normalizedSlug)
    ) {

        notFound();

    }



    const post =
        getPostBySlug(normalizedSlug);



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
        safeText(post.description)
        || "";


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
            `https://nomadlifexp.com/blog/posts/${normalizedSlug}`,

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
                    className="text-cyan-600 hover:underline"
                >
                    ← Back to {category}
                </Link>



                <header className="mt-6 mb-8">

                    <h1 className="text-4xl font-bold">
                        {title}
                    </h1>


                    <p className="mt-4 text-xl text-gray-600">
                        {description}
                    </p>

                </header>



                {image && (

                    <div className="relative w-full h-[250px] sm:h-[400px] mb-8 overflow-hidden rounded-xl">

                        <Image

                            src={image}

                            alt={title}

                            fill

                            priority

                            sizes="(max-width:896px) 100vw, 840px"

                            className="object-cover"

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


            </article>

        </>

    );

}