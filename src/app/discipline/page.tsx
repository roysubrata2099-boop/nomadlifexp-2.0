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


const slugify = (text: string): string =>
    text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");



export const metadata: Metadata = {
    title: "Discipline & Autonomy Architecture | NomadLifeXP",
    description:
        "Discipline is not motivation. It is an engineered execution system designed to create long-term autonomy.",
    alternates: {
        canonical: "https://nomadlifexp.com/discipline",
    },
};



export async function generateStaticParams() {

    return [];
}



export default function DisciplinePage() {


    const rawPosts = getAllPosts();


    const disciplineArticles: SystemPost[] = rawPosts

        .filter((post) => {

            const category = normalizeCategory(
                post.category ?? "",
                post.title ?? ""
            );

            return category === "discipline";

        })

        .map((post) => ({

            slug: slugify(post.slug ?? ""),

            title:
                post.title?.trim() ||
                "Untitled Knowledge Node",

            description:
                post.description?.trim() ||
                "System description unavailable."

        }))

        .filter((post) => post.slug.length > 0);



    return (

        <div className="
relative
min-h-screen
bg-black
text-white
overflow-hidden
antialiased
">


            {/* Ambient Glow */}

            <div className="
absolute
top-0
left-1/3
w-[500px]
h-[500px]
bg-cyan-500/10
blur-[150px]
rounded-full
pointer-events-none
"/>



            <div className="
absolute
inset-0
bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
bg-[size:4rem_4rem]
pointer-events-none
"/>



            <main className="
relative
z-10
max-w-7xl
mx-auto
px-6
py-32
">



                {/* Navigation */}

                <nav className="
flex
gap-5
border-b
border-neutral-900
pb-6
mb-16
font-mono
text-xs
tracking-[0.3em]
uppercase
">


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





                {/* Hero */}

                <header className="
max-w-5xl
mb-24
">


                    <div className="
flex
items-center
gap-3
mb-6
">

                        <span className="
h-2
w-2
rounded-full
bg-cyan-400
animate-pulse
"/>


                        <p className="
font-mono
text-xs
uppercase
tracking-[0.4em]
text-cyan-400
">

                            NomadLifeXP // Operational Execution Layer

                        </p>


                    </div>




                    <h1 className="
text-5xl
md:text-7xl
font-black
uppercase
leading-none
tracking-tight
">


                        THE DISCIPLINE

                        <br />


                        <span className="
bg-gradient-to-r
from-white
via-neutral-400
to-cyan-400
bg-clip-text
text-transparent
">

                            SYSTEM MATRIX

                        </span>


                    </h1>



                    <p className="
mt-8
max-w-3xl
text-neutral-400
font-mono
leading-relaxed
">

                        Discipline is not an emotional state or a temporary motivational spark.
                        It is an engineered execution architecture designed to construct
                        long-term autonomy.

                    </p>


                </header>






                {/* Foundation Grid */}

                <section className="
mb-24
">


                    <h2 className="
mb-6
text-xs
uppercase
tracking-[0.4em]
font-mono
text-neutral-500
">

// THEORETICAL FOUNDATIONS GRID

                    </h2>



                    <div className="
grid
md:grid-cols-3
gap-6
">


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
                            ]

                        ].map(([title, text]) => (


                            <div
                                key={title}
                                className="
border
border-neutral-800
bg-neutral-950/40
p-8
hover:border-cyan-500/40
transition
"
                            >


                                <h3 className="
text-cyan-400
font-mono
text-xs
mb-4
">

                                    {title}

                                </h3>


                                <p className="
text-sm
text-neutral-400
leading-relaxed
">

                                    {text}

                                </p>


                            </div>


                        ))}


                    </div>


                </section>








                {/* Articles */}

                <section>


                    <h2 className="
mb-8
font-mono
text-xs
uppercase
tracking-[0.4em]
text-neutral-500
">

// ACTIVE DATABASE KNOWLEDGE MODULES

                    </h2>




                    <div className="
grid
md:grid-cols-2
gap-6
">


                        {disciplineArticles.map((post) => (


                            <article
                                key={post.slug}
                                className="
border
border-neutral-800
bg-neutral-950/50
p-8
hover:border-cyan-500/40
transition
"
                            >


                                <h3 className="
text-lg
font-bold
uppercase
mb-4
">

                                    {post.title}

                                </h3>


                                <p className="
text-sm
text-neutral-400
leading-relaxed
mb-6
">

                                    {post.description}

                                </p>



                                <Link

                                    href={`/blog/posts/${post.slug}`}

                                    className="
text-xs
font-mono
uppercase
text-cyan-400
hover:text-cyan-300
"

                                >

                                    READ ARTICLE →

                                </Link>


                            </article>


                        ))}


                    </div>


                </section>






                {/* Cross Links */}

                <footer className="
mt-24
border-t
border-neutral-900
pt-10
">


                    <h2 className="
font-mono
text-xs
uppercase
tracking-[0.4em]
text-neutral-500
mb-6
">

// CROSS-CONNECT ALTERNATIVE NODES

                    </h2>


                    <div className="
flex
gap-8
font-mono
text-xs
uppercase
">


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




            </main>


        </div>

    );

}