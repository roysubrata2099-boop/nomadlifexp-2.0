import { getAllPosts } from "@/lib/markdown";
import type { Metadata } from "next";
import Link from "next/link";

interface SystemPost {
    slug: string;
    title: string;
    description: string;
}


function safeString(value: unknown): string {
    return typeof value === "string"
        ? value.trim()
        : "";
}


function safeSlug(value: unknown): string {
    return safeString(value)
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "")
        .trim();
}


export const metadata: Metadata = {

    title:
        "Mindset System Matrix | NomadLifeXP",

    description:
        "Deconstruct subconscious programming, build psychological systems and engineer cognitive resilience.",

    alternates: {
        canonical:
            "https://nomadlifexp.com/mindset",
    },

};



export default function MindsetPage() {


    const allPosts =
        getAllPosts() ?? [];



    const mindsetPosts: SystemPost[] =
        allPosts

            .filter(
                (post) =>
                    safeString(post.category)
                        .toLowerCase()
                    === "mindset"
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
                    "System description unavailable."

            }))


            .filter(
                (post) =>
                    post.slug.length > 0
            );




    const focusProtocols = [

        {
            title:
                "01 // Radical Information Elimination",

            text:
                "Protect attention by removing unnecessary inputs and controlling information exposure."
        },


        {
            title:
                "02 // Systematic Bias Disruption",

            text:
                "Audit mental frameworks and replace automatic reactions with intentional decision systems."
        },


        {
            title:
                "03 // Attention Chamber Integrity",

            text:
                "Create protected periods of deep focus where high-value execution can occur."
        }

    ];



    const crossLinks = [

        {
            name: "discipline",
            href: "/discipline"
        },

        {
            name: "fitness",
            href: "/fitness"
        },

        {
            name: "yoga",
            href: "/yoga"
        }

    ];



    return (

        <div className="
relative
min-h-screen
bg-black
text-white
overflow-hidden
">


            <div className="
absolute
inset-0
bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]
bg-[size:4rem_4rem]
pointer-events-none
"
            />



            <main className="
relative
z-10
max-w-7xl
mx-auto
px-6
py-32
">



                <nav className="
flex
gap-5
border-b
border-neutral-900
pb-6
mb-16
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





                <header className="
mb-20
max-w-5xl
">


                    <p className="
text-xs
font-mono
uppercase
tracking-[0.4em]
text-cyan-400
mb-6
">
                        NomadLifeXP // Cognitive Operating Layer
                    </p>



                    <h1 className="
text-5xl
md:text-7xl
font-black
uppercase
leading-none
">

                        THE MINDSET

                        <br />

                        <span className="
text-cyan-400
">

                            SYSTEM MATRIX

                        </span>


                    </h1>



                    <p className="
mt-8
text-neutral-400
font-mono
max-w-3xl
leading-relaxed
">

                        Perception is an adjustable framework.
                        True psychological resilience is built through intentional identity architecture and cognitive optimization.

                    </p>


                </header>





                <section className="
mb-20
">


                    <h2 className="
text-xs
font-mono
uppercase
tracking-[0.4em]
text-neutral-500
mb-8
">

// CORE MINDSET OPTIMIZATION PARAMETERS

                    </h2>




                    <div className="
grid
md:grid-cols-3
gap-6
">


                        {
                            focusProtocols.map((item) => (


                                <div
                                    key={item.title}
                                    className="
border
border-neutral-800
bg-neutral-950
p-8
"
                                >


                                    <h3 className="
text-cyan-400
font-mono
text-xs
mb-4
">

                                        {item.title}

                                    </h3>


                                    <p className="
text-sm
text-neutral-400
leading-relaxed
">

                                        {item.text}

                                    </p>


                                </div>


                            ))
                        }


                    </div>


                </section>






                <section>


                    <h2 className="
text-xs
font-mono
uppercase
tracking-[0.4em]
text-neutral-500
mb-8
">

// ACTIVE DATABASE KNOWLEDGE MODULES

                    </h2>





                    {
                        mindsetPosts.length === 0 ? (

                            <div className="
border
border-neutral-800
p-8
text-neutral-500
font-mono
">

                                [SYSTEM] NO MINDSET NODES FOUND.

                            </div>


                        )

                            :

                            (

                                <div className="
grid
md:grid-cols-2
gap-6
">


                                    {
                                        mindsetPosts.map((post) => (


                                            <article
                                                key={post.slug}
                                                className="
border
border-neutral-800
bg-neutral-950
p-8
"
                                            >


                                                <h3 className="
font-bold
uppercase
mb-4
">

                                                    {post.title}

                                                </h3>



                                                <p className="
text-neutral-400
text-sm
mb-6
">

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

                                                    OPEN ARTICLE →

                                                </Link>



                                            </article>


                                        ))

                                    }


                                </div>


                            )

                    }


                </section>






                <footer className="
mt-24
border-t
border-neutral-900
pt-10
">


                    <h2 className="
text-xs
font-mono
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


                        {
                            crossLinks.map((link) => (

                                <Link

                                    key={link.href}

                                    href={link.href}

                                    className="
text-neutral-400
hover:text-white
"

                                >

                                    {link.name} →

                                </Link>


                            ))

                        }


                    </div>


                </footer>



            </main>


        </div>


    );

}