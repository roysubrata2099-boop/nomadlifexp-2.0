// src/app/discipline/page.tsx

import { getAllPosts } from "@/lib/markdown";
import { normalizeCategory } from "@/lib/taxonomy";
import type { Metadata } from "next";
import Link from "next/link";


interface SystemPost {
    slug: string;
    title: string;
    description: string;
}


export const metadata: Metadata = {
    title: "Discipline & Autonomy Architecture | NomadLifeXP",
    description:
        "Discipline is an engineered execution system designed to create long-term autonomy.",

    alternates: {
        canonical:
            "https://nomadlifexp.com/discipline",
    },
};



function getDisciplinePosts(): SystemPost[] {

    try {

        const posts = getAllPosts();


        if (!Array.isArray(posts)) {
            return [];
        }


        return posts

            .filter((post) => {

                if (!post) {
                    return false;
                }


                const category =
                    normalizeCategory(
                        post.category ?? "",
                        post.title ?? ""
                    );


                return category === "discipline";

            })


            .map((post) => ({

                slug:
                    String(
                        post.slug ?? ""
                    ).trim(),


                title:
                    String(
                        post.title ?? ""
                    ).trim() ||
                    "Untitled Knowledge Node",


                description:
                    String(
                        post.description ?? ""
                    ).trim() ||
                    "System description unavailable.",

            }))


            .filter(
                (post) =>
                    post.slug.length > 0
            );


    } catch {

        return [];

    }

}




export default function DisciplinePage() {


    const disciplineArticles =
        getDisciplinePosts();



    return (

        <main
            className="
            min-h-screen
            bg-black
            text-white
            antialiased
            "
        >


            <div
                className="
                relative
                max-w-7xl
                mx-auto
                px-6
                py-24
                "
            >


                <div
                    className="
                    absolute
                    top-0
                    left-1/3
                    w-[500px]
                    h-[500px]
                    bg-cyan-500/10
                    blur-[150px]
                    rounded-full
                    pointer-events-none
                    "
                />


                <nav
                    className="
                    relative
                    z-10
                    flex
                    gap-4
                    mb-16
                    pb-6
                    border-b
                    border-neutral-900
                    font-mono
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    "
                >

                    <Link
                        href="/"
                        className="
                        text-neutral-500
                        hover:text-cyan-400
                        "
                    >
                        ← RETURN_TO_HOME
                    </Link>


                    <span className="text-neutral-800">
                        /
                    </span>


                    <Link
                        href="/blog"
                        className="
                        text-neutral-500
                        hover:text-cyan-400
                        "
                    >
                        RETURN_TO_DIRECTORY
                    </Link>

                </nav>



                <header
                    className="
                    relative
                    z-10
                    mb-24
                    "
                >

                    <p
                        className="
                        mb-6
                        font-mono
                        text-xs
                        uppercase
                        tracking-[0.4em]
                        text-cyan-400
                        "
                    >
                        NomadLifeXP // Operational Execution Layer
                    </p>



                    <h1
                        className="
                        text-5xl
                        md:text-7xl
                        font-black
                        uppercase
                        leading-none
                        "
                    >

                        THE DISCIPLINE
                        <br />

                        <span
                            className="
                            text-cyan-400
                            "
                        >
                            SYSTEM MATRIX
                        </span>

                    </h1>



                    <p
                        className="
                        mt-8
                        max-w-3xl
                        text-neutral-400
                        font-mono
                        leading-relaxed
                        "
                    >

                        Discipline is not an emotional state
                        or a temporary motivational spark.
                        It is an engineered execution architecture
                        designed to construct long-term autonomy.

                    </p>

                </header>




                <section
                    className="
                    mb-24
                    "
                >

                    <h2
                        className="
                        mb-6
                        font-mono
                        text-xs
                        uppercase
                        tracking-[0.4em]
                        text-neutral-500
                        "
                    >
                        // THEORETICAL FOUNDATIONS GRID
                    </h2>



                    <div
                        className="
                        grid
                        md:grid-cols-3
                        gap-6
                        "
                    >

                        {[
                            [
                                "01 // STRUCTURE",
                                "Build systems that remove dependence on motivation."
                            ],
                            [
                                "02 // VARIABLE CONTROL",
                                "Reduce friction and protect attention from distraction."
                            ],
                            [
                                "03 // EXECUTION LOOP",
                                "Create repeatable behavioural systems."
                            ],
                        ].map(
                            ([title, text]) => (

                                <div
                                    key={title}
                                    className="
                                    border
                                    border-neutral-800
                                    bg-neutral-950
                                    p-8
                                    "
                                >

                                    <h3
                                        className="
                                        mb-4
                                        text-cyan-400
                                        font-mono
                                        text-xs
                                        "
                                    >
                                        {title}
                                    </h3>


                                    <p
                                        className="
                                        text-sm
                                        text-neutral-400
                                        "
                                    >
                                        {text}
                                    </p>


                                </div>

                            )
                        )}

                    </div>

                </section>




                <section>

                    <h2
                        className="
                        mb-8
                        font-mono
                        text-xs
                        uppercase
                        tracking-[0.4em]
                        text-neutral-500
                        "
                    >
                        // ACTIVE DATABASE KNOWLEDGE MODULES
                    </h2>




                    {
                        disciplineArticles.length === 0 ? (

                            <div
                                className="
                                border
                                border-neutral-800
                                bg-neutral-950
                                p-8
                                "
                            >

                                <p
                                    className="
                                    text-neutral-400
                                    font-mono
                                    text-sm
                                    "
                                >
                                    [SYSTEM_INFO] No Discipline Nodes Found.
                                </p>

                            </div>

                        ) : (

                            <div
                                className="
                                grid
                                md:grid-cols-2
                                gap-6
                                "
                            >

                                {
                                    disciplineArticles.map(
                                        (post) => (

                                            <article
                                                key={post.slug}
                                                className="
                                                border
                                                border-neutral-800
                                                bg-neutral-950
                                                p-8
                                                "
                                            >

                                                <h3
                                                    className="
                                                    text-lg
                                                    font-bold
                                                    uppercase
                                                    "
                                                >
                                                    {post.title}
                                                </h3>


                                                <p
                                                    className="
                                                    mt-4
                                                    text-neutral-400
                                                    "
                                                >
                                                    {post.description}
                                                </p>



                                                <Link
                                                    href={`/blog/posts/${post.slug}`}
                                                    className="
                                                    inline-block
                                                    mt-6
                                                    text-cyan-400
                                                    text-xs
                                                    font-mono
                                                    uppercase
                                                    "
                                                >
                                                    READ ARTICLE →
                                                </Link>


                                            </article>

                                        )
                                    )
                                }

                            </div>

                        )
                    }


                </section>




                <footer
                    className="
                    mt-24
                    border-t
                    border-neutral-900
                    pt-10
                    "
                >

                    <h2
                        className="
                        mb-6
                        font-mono
                        text-xs
                        uppercase
                        tracking-[0.4em]
                        text-neutral-500
                        "
                    >
                        // CROSS-CONNECT ALTERNATIVE NODES
                    </h2>


                    <div
                        className="
                        flex
                        gap-8
                        font-mono
                        text-xs
                        uppercase
                        "
                    >

                        <Link
                            href="/fitness"
                            className="text-neutral-400 hover:text-white"
                        >
                            fitness →
                        </Link>


                        <Link
                            href="/yoga"
                            className="text-neutral-400 hover:text-white"
                        >
                            yoga →
                        </Link>


                        <Link
                            href="/mindset"
                            className="text-neutral-400 hover:text-white"
                        >
                            mindset →
                        </Link>

                    </div>


                </footer>


            </div>


        </main>

    );

}