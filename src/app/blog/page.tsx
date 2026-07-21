import "server-only";

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { getAllMDXPosts } from "@/lib/mdx";


const SITE_URL = "https://nomadlifexp.com";


export const metadata: Metadata = {

    title:
        "Self-Development System Database | NomadLifeXP",

    description:
        "Explore structured transformation systems covering discipline, fitness, yoga, mindset, and personal evolution.",

    alternates: {
        canonical: `${SITE_URL}/blog`,
    },

    openGraph: {

        title:
            "Self-Development System Database | NomadLifeXP",

        description:
            "Explore structured transformation systems covering discipline, fitness, yoga, mindset, and personal evolution.",

        url:
            `${SITE_URL}/blog`,

        type:
            "website",

    },

    twitter: {

        card:
            "summary_large_image",

        title:
            "Self-Development System Database | NomadLifeXP",

        description:
            "Explore structured transformation systems covering discipline, fitness, yoga, mindset, and personal evolution.",

    },

};



type SafePost = {

    slug: string;

    title: string;

    description: string;

    category: string;

    image: string;

};





function safeText(
    value: unknown,
    fallback: string
): string {

    if (
        typeof value !== "string"
    ) {

        return fallback;

    }


    const clean =
        value.trim();


    return clean || fallback;

}





function slugify(
    value: string
): string {

    return value

        .toLowerCase()

        .trim()

        .replace(
            /[^a-z0-9]+/g,
            "-"
        )

        .replace(
            /^-+|-+$/g,
            ""
        );

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






function normalizePosts(): SafePost[] {


    try {


        const raw =
            getAllMDXPosts();



        if (
            !Array.isArray(raw)
        ) {

            return [];

        }





        const seen =
            new Set<string>();





        return raw

            .map(
                (post): SafePost | null => {


                    const title =
                        safeText(
                            post.title,
                            "Untitled Knowledge Node"
                        );



                    const slug =
                        slugify(
                            safeText(
                                post.slug,
                                title
                            )
                        );



                    if (
                        !slug ||
                        seen.has(slug)
                    ) {

                        return null;

                    }



                    seen.add(slug);





                    return {

                        slug,

                        title,

                        description:
                            safeText(
                                post.description,
                                "System description unavailable."
                            ),


                        category:
                            slugify(
                                safeText(
                                    post.category,
                                    "general"
                                )
                            ),


                        image:
                            safeImage(
                                post.image
                            ),

                    };


                }

            )

            .filter(
                (
                    post
                ): post is SafePost =>
                    post !== null
            )

            .sort(
                (
                    a,
                    b
                ) =>
                    a.title.localeCompare(
                        b.title
                    )
            );



    }

    catch {


        return [];

    }

}








export default function BlogV2Page() {


    const posts =
        normalizePosts();




    return (


        <div className="relative min-h-screen bg-black text-white overflow-hidden antialiased">



            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />



            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />





            <main className="relative z-10 max-w-7xl mx-auto px-6 py-32">





                <nav className="flex gap-5 border-b border-neutral-900 pb-6 mb-16 font-mono text-xs tracking-[0.3em] uppercase">


                    <Link
                        href="/"
                        className="text-neutral-500 hover:text-cyan-400"
                    >

                        ← RETURN_TO_HOME

                    </Link>


                    <span className="text-neutral-800">
                        /
                    </span>


                    <span className="text-cyan-400">
                        MDX_DATABASE
                    </span>


                </nav>






                <header className="max-w-5xl mb-24">


                    <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">

                        NomadLifeXP // MDX Transformation Architecture

                    </p>



                    <h1 className="mt-6 text-5xl md:text-7xl font-black uppercase leading-none">


                        SELF DEVELOPMENT

                        <br />

                        <span className="bg-gradient-to-r from-white via-neutral-400 to-cyan-400 bg-clip-text text-transparent">

                            MDX DATABASE

                        </span>


                    </h1>




                    <p className="mt-8 max-w-3xl text-neutral-400 font-mono">

                        Explore structured transformation systems covering discipline, fitness, yoga, mindset, and personal evolution.

                    </p>


                </header>







                <section>


                    {posts.length === 0 && (

                        <p className="text-neutral-500 font-mono">

                            No articles available.

                        </p>

                    )}





                    <div className="grid md:grid-cols-2 gap-8">



                        {posts.map(
                            (
                                post
                            ) => (


                                <article

                                    key={post.slug}

                                    className="border border-neutral-800 bg-neutral-950/50 p-8 rounded-2xl hover:border-cyan-500/40 transition"

                                >



                                    {post.image && (

                                        <div className="relative w-full h-72 mb-6 rounded-xl overflow-hidden bg-neutral-900">


                                            <Image

                                                src={post.image}

                                                alt={post.title}

                                                fill

                                                priority={false}

                                                sizes="(max-width:768px) 100vw, 50vw"

                                                className="object-contain"

                                            />


                                        </div>

                                    )}







                                    <h2 className="text-xl font-bold uppercase">

                                        {post.title}

                                    </h2>





                                    <p className="mt-4 text-sm text-neutral-400">

                                        {post.description}

                                    </p>






                                    <div className="mt-6">


                                        <Link

                                            href={`/blog/category/${post.category}`}

                                            className="rounded-full px-3 py-1 text-xs uppercase font-mono bg-cyan-950 text-cyan-300"

                                        >

                                            {post.category}

                                        </Link>


                                    </div>







                                    <Link

                                        href={`/blog/posts/${post.slug}`}

                                        className="mt-6 inline-flex text-xs font-mono uppercase text-cyan-400 hover:text-cyan-300"

                                    >

                                        READ ARTICLE →

                                    </Link>





                                </article>


                            )

                        )}



                    </div>


                </section>



            </main>


        </div>


    );

}
