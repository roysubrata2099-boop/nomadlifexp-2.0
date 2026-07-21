import "server-only";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
    getAllMDXPosts,
} from "@/lib/mdx";


const SITE_URL =
    "https://nomadlifexp.com";



type PageProps = {
    params: Promise<{
        category: string;
    }>;
};



type SafePost = {

    slug: string;

    title: string;

    description: string;

    category: string;

    image: string;

};



const ALLOWED_CATEGORIES =
    new Set([
        "discipline",
        "fitness",
        "yoga",
        "mindset",
    ]);





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
        .replace(
            /[^a-z0-9]+/g,
            "-"
        )
        .replace(
            /^-+|-+$/g,
            "");

}





function safeText(
    value: unknown
): string {

    if (
        typeof value !== "string"
    ) {
        return "";
    }


    return value.trim();

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

        const categories =
            getAllMDXPosts()
                .map(
                    post =>
                        safeSlug(
                            post.category
                        )
                )
                .filter(
                    category =>
                        ALLOWED_CATEGORIES.has(
                            category
                        )
                );


        return [
            ...new Set(categories)
        ].map(
            category => ({
                category,
            })
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


    const {
        category,
    } = await params;


    const cleanCategory =
        safeSlug(category);



    if (
        !ALLOWED_CATEGORIES.has(
            cleanCategory
        )
    ) {

        return {
            title:
                "Category Not Found | NomadLifeXP",
        };

    }



    return {

        title:
            `${cleanCategory} Articles | NomadLifeXP`,

        description:
            `Explore ${cleanCategory} transformation systems and insights from NomadLifeXP.`,

        alternates: {

            canonical:
                `${SITE_URL}/blog/category/${cleanCategory}`,

        },

        robots: {

            index: true,

            follow: true,

        },

    };

}








export default async function MDXCategoryPage(
    {
        params,
    }: PageProps
) {


    const {
        category,
    } = await params;



    const cleanCategory =
        safeSlug(category);



    if (
        !ALLOWED_CATEGORIES.has(
            cleanCategory
        )
    ) {

        notFound();

    }





    let posts: SafePost[] = [];





    try {


        posts =
            getAllMDXPosts()

                .map(
                    post => ({

                        slug:
                            safeSlug(
                                post.slug
                            ),


                        title:
                            safeText(
                                post.title
                            )
                            ||
                            "Untitled Article",


                        description:
                            safeText(
                                post.description
                            )
                            ||
                            "No description available.",


                        category:
                            safeSlug(
                                post.category
                            ),


                        image:
                            safeImage(
                                post.image
                            ),

                    })
                )

                .filter(
                    post =>
                        post.category ===
                        cleanCategory
                );


    } catch {

        posts = [];

    }






    if (
        posts.length === 0
    ) {

        notFound();

    }







    return (

        <main
            className="
            min-h-screen
            bg-black
            text-white
            px-6
            py-32
            "
        >


            <div
                className="
                max-w-6xl
                mx-auto
                "
            >



                <nav
                    className="
                    flex
                    gap-3
                    text-xs
                    font-mono
                    uppercase
                    text-cyan-400
                    "
                >

                    <Link
                        href="/"
                        className="hover:text-cyan-300"
                    >
                        Home
                    </Link>


                    <span>
                        /
                    </span>


                    <Link
                        href="/blog"
                        className="hover:text-cyan-300"
                    >
                        Blog
                    </Link>


                    <span>
                        /
                    </span>


                    <span
                        className="text-white"
                    >
                        {cleanCategory}
                    </span>


                </nav>








                <div
                    className="
                    mt-8
                    flex
                    flex-wrap
                    gap-3
                    "
                >

                    {
                        [
                            "discipline",
                            "fitness",
                            "yoga",
                            "mindset",
                        ]
                            .map(
                                item => (

                                    <Link

                                        key={item}

                                        href={
                                            `/blog/category/${item}`
                                        }

                                        className={`
                                    rounded-full
                                    border
                                    px-4
                                    py-2
                                    text-xs
                                    uppercase
                                    font-mono
                                    transition
                                    ${item === cleanCategory
                                                ?
                                                "border-cyan-400 text-cyan-400"
                                                :
                                                "border-neutral-800 text-neutral-400 hover:border-cyan-400"
                                            }
                                    `}

                                    >

                                        {item}

                                    </Link>

                                )
                            )
                    }

                </div>








                <header
                    className="
                    mt-16
                    mb-16
                    "
                >

                    <p
                        className="
                        text-xs
                        font-mono
                        tracking-[0.4em]
                        text-cyan-400
                        uppercase
                        "
                    >
                        CATEGORY_NODE
                    </p>


                    <h1
                        className="
                        mt-5
                        text-5xl
                        font-black
                        uppercase
                        "
                    >
                        {cleanCategory}
                    </h1>


                </header>








                <section
                    className="
                    grid
                    md:grid-cols-2
                    gap-6
                    "
                >


                    {
                        posts.map(
                            post => (

                                <article

                                    key={
                                        post.slug
                                    }

                                    className="
                                    border
                                    border-neutral-800
                                    bg-neutral-950/50
                                    p-8
                                    hover:border-cyan-500/40
                                    transition
                                    "

                                >



                                    {
                                        post.image && (

                                            <div
                                                className="
                                                relative
                                                w-full
                                                h-72
                                                mb-6
                                                rounded-xl
                                                overflow-hidden
                                                bg-neutral-900
                                                "
                                            >

                                                <Image

                                                    src={
                                                        post.image
                                                    }

                                                    alt={
                                                        post.title
                                                    }

                                                    fill

                                                    sizes="
                                                    (max-width:768px)
                                                    100vw,
                                                    50vw
                                                    "

                                                    className="
                                                    object-cover
                                                    "

                                                />

                                            </div>

                                        )
                                    }






                                    <h2
                                        className="
                                        text-xl
                                        font-bold
                                        uppercase
                                        "
                                    >
                                        {
                                            post.title
                                        }
                                    </h2>





                                    <p
                                        className="
                                        mt-4
                                        text-neutral-400
                                        "
                                    >
                                        {
                                            post.description
                                        }
                                    </p>






                                    <Link

                                        href={
                                            `/blog/posts/${post.slug}`
                                        }

                                        className="
                                        mt-6
                                        inline-flex
                                        text-xs
                                        uppercase
                                        font-mono
                                        text-cyan-400
                                        hover:text-cyan-300
                                        "

                                    >

                                        READ ARTICLE →

                                    </Link>




                                </article>

                            )
                        )
                    }


                </section>



            </div>


        </main>

    );

}
