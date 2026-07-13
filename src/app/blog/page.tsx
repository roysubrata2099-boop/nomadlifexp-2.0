import { getAllPosts, type PostData } from "@/lib/markdown";
import { normalizeCategory } from "@/lib/taxonomy";
import Link from "next/link";

const slugify = (text: string) =>
    text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");

interface SafePost {
    slug: string;
    title: string;
    description: string;
    category: string;
}

export default function BlogPage() {
    const posts: SafePost[] = getAllPosts().map((post: PostData) => {
        const category = normalizeCategory(
            post.category ?? "uncategorized",
            post.title ?? ""
        );

        return {
            slug: slugify(post.slug),
            title: post.title ?? "Untitled Post",
            description:
                post.description ?? "No description available.",
            category: slugify(category),
        };
    });

    if (!posts.length) {
        return (
            <main className="max-w-6xl mx-auto px-6 py-12">

                <header className="mb-10">

                    <Link
                        href="/"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            mb-8
                            text-xs
                            font-mono
                            uppercase
                            tracking-[0.3em]
                            text-zinc-500
                            hover:text-cyan-400
                            transition-colors
                        "
                    >
                        <span aria-hidden="true">←</span>
                        Return Home Node
                    </Link>

                    <p
                        className="
                            mb-4
                            text-xs
                            font-mono
                            uppercase
                            tracking-[0.4em]
                            text-cyan-400
                        "
                    >
                        NomadLifeXP // System Log Registry
                    </p>

                    <h1
                        className="
                            text-4xl
                            font-bold
                            text-white
                        "
                    >
                        Self-Development
                        <br />
                        <span className="text-cyan-400">
                            System Map
                        </span>
                    </h1>

                </header>


                <p className="mt-4 text-zinc-400">
                    No system nodes found.
                </p>

            </main>
        );
    }


    return (
        <main className="max-w-6xl mx-auto px-6 py-12">

            <header className="mb-10">

                <Link
                    href="/"
                    className="
                        inline-flex
                        items-center
                        gap-2
                        mb-8
                        text-xs
                        font-mono
                        uppercase
                        tracking-[0.3em]
                        text-zinc-500
                        hover:text-cyan-400
                        transition-colors
                    "
                >
                    <span aria-hidden="true">←</span>
                    Return Home Node
                </Link>


                <p
                    className="
                        mb-4
                        text-xs
                        font-mono
                        uppercase
                        tracking-[0.4em]
                        text-cyan-400
                    "
                >
                    NomadLifeXP // System Log Registry
                </p>


                <h1
                    className="
                        text-4xl
                        font-bold
                        text-white
                    "
                >
                    Self-Development
                    <br />
                    <span className="text-cyan-400">
                        System Map
                    </span>
                </h1>


                <p
                    className="
                        mt-3
                        text-zinc-400
                    "
                >
                    Explore structured systems covering discipline, fitness,
                    yoga, mindset, and personal evolution.
                </p>

            </header>


            <section className="space-y-6">

                {posts.map((post) => (

                    <article
                        key={post.slug}
                        className="
                            rounded-2xl
                            border
                            border-zinc-800
                            bg-zinc-950
                            p-6
                            hover:border-cyan-500/60
                            transition-all
                        "
                    >

                        <Link
                            href={`/blog/posts/${post.slug}`}
                            className="
                                block
                                text-2xl
                                font-bold
                                text-white
                                hover:text-cyan-400
                                transition-colors
                            "
                        >
                            {post.title}
                        </Link>


                        <p
                            className="
                                mt-3
                                text-zinc-300
                                leading-relaxed
                            "
                        >
                            {post.description}
                        </p>


                        <div className="mt-5">

                            <Link
                                href={`/blog/category/${post.category}`}
                                className="
                                    inline-flex
                                    rounded-full
                                    px-3
                                    py-1
                                    text-sm
                                    font-medium
                                    bg-cyan-950
                                    text-cyan-300
                                    hover:bg-cyan-900
                                    transition-colors
                                "
                            >
                                Category:{" "}
                                {post.category.replace(/-/g, " ")}
                            </Link>

                        </div>


                        <Link
                            href={`/blog/posts/${post.slug}`}
                            className="
                                inline-block
                                mt-5
                                text-sm
                                font-semibold
                                text-cyan-400
                                hover:underline
                            "
                        >
                            Read full article →
                        </Link>


                    </article>

                ))}

            </section>

        </main>
    );
}