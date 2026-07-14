import { getAllPosts } from "@/lib/markdown";
import type { Metadata } from "next";
import Link from "next/link";


interface SystemPost {
    slug: string;
    title: string;
    description: string;
    category: string;
}


function safeString(value: unknown): string {
    if (typeof value !== "string") return "";
    return value.trim();
}


function safeSlug(value: unknown): string {

    const text = safeString(value);

    if (!text) return "";

    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}


function safeCategory(value: unknown): string {

    return safeString(value)
        .toLowerCase()
        .trim();
}



/* ================= SEO ================= */

export const metadata: Metadata = {

    title:
        "Somatic Mechanics & Fitness Architecture | NomadLifeXP",

    description:
        "Physical capability is the biological foundation of performance. Explore fitness systems designed for strength, resilience and longevity.",

    alternates: {
        canonical:
            "https://nomadlifexp.com/fitness",
    },

};



/* ================= PAGE ================= */


export default function FitnessPage() {


    let rawPosts: unknown[] = [];


    try {

        const data = getAllPosts();

        if (Array.isArray(data)) {
            rawPosts = data;
        }

    } catch {

        rawPosts = [];

    }



    const fitnessArticles: SystemPost[] = rawPosts

        .filter(
            (post): post is Record<string, unknown> =>
                typeof post === "object" &&
                post !== null
        )


        .map((post) => ({

            slug:
                safeSlug(post.slug),

            title:
                safeString(post.title)
                ||
                "Untitled Knowledge Node",


            description:
                safeString(post.description)
                ||
                "System description unavailable.",


            category:
                safeCategory(post.category),

        }))


        .filter(
            post =>
                post.category === "fitness"
                &&
                post.slug.length > 0
        );




    return (

        <div className="
relative
min-h-screen
bg-black
text-white
overflow-hidden
antialiased
">


            <div className="
absolute
inset-0
bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]
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


                <nav className="
mb-14
flex
gap-5
font-mono
text-xs
uppercase
tracking-[0.3em]
">


                    <Link
                        href="/"
                        className="
text-neutral-500
hover:text-cyan-400
"
                    >
                        ← RETURN_HOME
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
                        RETURN_DIRECTORY
                    </Link>


                </nav>




                <header className="
mb-20
max-w-4xl
">


                    <p className="
text-xs
font-mono
uppercase
tracking-[0.4em]
text-cyan-400
mb-6
">

                        NomadLifeXP // Somatic Optimization Layer

                    </p>



                    <h1 className="
text-5xl
md:text-7xl
font-black
uppercase
leading-none
">

                        SOMATIC MECHANICS

                        <br />

                        <span className="
text-cyan-400
">

                            &amp; KINETIC POWER

                        </span>


                    </h1>



                    <p className="
mt-8
text-neutral-400
font-mono
leading-relaxed
">

                        Physical capability is the biological substrate of consciousness.
                        Fitness is engineered through systems, consistency and deliberate execution.

                    </p>


                </header>





                <section>


                    <h2 className="
mb-8
text-xs
font-mono
uppercase
tracking-[0.4em]
text-neutral-500
">

// ACTIVE FITNESS DATABASE MODULES

                    </h2>



                    {
                        fitnessArticles.length === 0 ?


                            <div className="
border
border-neutral-800
bg-neutral-950
p-8
text-neutral-400
font-mono
text-sm
">

                                [SYSTEM_STATUS]
                                No Fitness Knowledge Nodes Available.

                            </div>



                            :


                            <div className="
grid
md:grid-cols-2
gap-6
">


                                {
                                    fitnessArticles.map(post => (


                                        <article
                                            key={post.slug}
                                            className="
border
border-neutral-800
bg-neutral-950
p-8
hover:border-cyan-500/50
transition
"
                                        >


                                            <h3 className="
text-xl
font-bold
mb-4
"
                                            >

                                                {post.title}

                                            </h3>



                                            <p className="
text-neutral-400
mb-6
"
                                            >

                                                {post.description}

                                            </p>



                                            <Link

                                                href={`/blog/posts/${post.slug}`}

                                                className="
text-cyan-400
font-mono
text-xs
uppercase
hover:text-cyan-300
"

                                            >

                                                READ ARTICLE →

                                            </Link>



                                        </article>


                                    ))

                                }


                            </div>


                    }


                </section>





                <footer className="
mt-24
border-t
border-neutral-900
pt-10
font-mono
text-xs
uppercase
tracking-[0.3em]
">


                    <h2 className="
text-neutral-500
mb-6
">

// CROSS CONNECT NODES

                    </h2>


                    <div className="flex gap-8">


                        <Link href="/discipline">
                            discipline →
                        </Link>


                        <Link href="/yoga">
                            yoga →
                        </Link>


                        <Link href="/mindset">
                            mindset →
                        </Link>


                    </div>


                </footer>




            </main>


        </div>


    );


}