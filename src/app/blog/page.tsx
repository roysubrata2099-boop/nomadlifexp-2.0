import { getAllPosts, type PostData } from "@/lib/markdown";
import { normalizeCategory } from "@/lib/taxonomy";
import Link from "next/link";


interface SafePost {
    slug: string;
    title: string;
    description: string;
    category: string;
}


const CATEGORY_ROUTES: Record<string, string> = {
    discipline: "/discipline",
    fitness: "/fitness",
    yoga: "/yoga",
    mindset: "/mindset",
};


const slugify = (text: string): string =>
    text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");



export default function BlogPage() {


    const rawPosts = getAllPosts() || [];


    const posts: SafePost[] = rawPosts.map(
        (post: PostData) => {

            const category =
                normalizeCategory(
                    post.category ?? "",
                    post.title ?? ""
                );


            return {

                slug:
                    slugify(
                        post.slug ?? ""
                    ),

                title:
                    post.title?.trim() ||
                    "Untitled Knowledge Node",


                description:
                    post.description?.trim() ||
                    "System description unavailable.",


                category:
                    slugify(category),

            };

        }
    )
        .filter(
            post =>
                post.slug.length > 0
        );



    return (

        <div
            className="
            relative
            min-h-screen
            bg-black
            text-white
            overflow-hidden
            antialiased
            "
        >


            {/* Ambient System Glow */}

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


            <div
                className="
                absolute
                inset-0
                bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
                bg-[size:4rem_4rem]
                pointer-events-none
                "
            />



            <main
                className="
                relative
                z-10
                max-w-7xl
                mx-auto
                px-6
                py-32
                "
            >



                {/* Navigation */}

                <nav
                    className="
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


                    <span className="text-cyan-400">
                        SYSTEM_DIRECTORY
                    </span>


                </nav>





                {/* Hero */}

                <header
                    className="
                    max-w-5xl
                    mb-24
                    "
                >

                    <div
                        className="
                        flex
                        items-center
                        gap-3
                        mb-6
                        "
                    >

                        <span
                            className="
                            h-2
                            w-2
                            rounded-full
                            bg-cyan-400
                            animate-pulse
                            "
                        />


                        <p
                            className="
                            font-mono
                            text-xs
                            uppercase
                            tracking-[0.4em]
                            text-cyan-400
                            "
                        >
                            NomadLifeXP // Transformation Architecture
                        </p>


                    </div>



                    <h1
                        className="
                        text-5xl
                        md:text-7xl
                        font-black
                        uppercase
                        leading-none
                        tracking-tight
                        "
                    >

                        SELF DEVELOPMENT

                        <br />

                        <span
                            className="
                            bg-gradient-to-r
                            from-white
                            via-neutral-400
                            to-cyan-400
                            bg-clip-text
                            text-transparent
                            "
                        >
                            SYSTEM DATABASE
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
                        Explore structured transformation systems covering
                        discipline, fitness, yoga, mindset, and personal evolution.
                        Each knowledge module connects directly to its operational pillar.
                    </p>


                </header>





                {/* Blog Database */}

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
                        // ACTIVE KNOWLEDGE MODULES
                    </h2>




                    {posts.length === 0 ? (

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
                                [SYSTEM_INFO] No Blog Nodes Available.
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


                            {posts.map(
                                post => (

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


                                        <h3
                                            className="
                                        text-xl
                                        font-bold
                                        uppercase
                                        mb-4
                                        "
                                        >

                                            {post.title}

                                        </h3>



                                        <p
                                            className="
                                        text-sm
                                        text-neutral-400
                                        leading-relaxed
                                        mb-6
                                        "
                                        >

                                            {post.description}

                                        </p>




                                        <Link

                                            href={
                                                CATEGORY_ROUTES[
                                                post.category
                                                ] || "/blog"
                                            }

                                            className="
                                        inline-flex
                                        mb-6
                                        rounded-full
                                        px-3
                                        py-1
                                        text-xs
                                        uppercase
                                        font-mono
                                        bg-cyan-950
                                        text-cyan-300
                                        hover:bg-cyan-900
                                        "
                                        >

                                            {post.category}

                                        </Link>





                                        <Link

                                            href={`/blog/posts/${post.slug}`}

                                            className="
                                        block
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

                    )}



                </section>



            </main>


        </div>

    );

}