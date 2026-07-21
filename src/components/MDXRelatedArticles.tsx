import "server-only";

import Link from "next/link";

import { getAllMDXPosts } from "@/lib/mdx";

type Props = {
    currentSlug: string;
    relatedSlugs?: string[];
};

type SafePost = {
    slug: string;
    title: string;
    description: string;
    category: string;
};

function safeSlug(value: unknown): string {
    if (typeof value !== "string") {
        return "";
    }

    return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
}

function safeText(value: unknown): string {
    return typeof value === "string" ? value.trim() : "";
}

export default function MDXRelatedArticles({
    currentSlug,
    relatedSlugs = [],
}: Props) {
    const cleanCurrentSlug = safeSlug(currentSlug);

    if (!cleanCurrentSlug) {
        return null;
    }

    let posts: SafePost[] = [];

    try {
        const allPosts = getAllMDXPosts();

        if (!Array.isArray(allPosts)) {
            return null;
        }

        posts = allPosts
            .map((post) => ({
                slug: safeSlug(post.slug),

                title:
                    safeText(post.title) ||
                    "Untitled Article",

                description:
                    safeText(post.description),

                category:
                    safeSlug(post.category),
            }))
            .filter((post) => Boolean(post.slug));

    } catch {
        return null;
    }

    if (posts.length === 0) {
        return null;
    }

    const currentPost = posts.find(
        (post) =>
            post.slug === cleanCurrentSlug
    );

    const postMap = new Map(
        posts.map((post) => [
            post.slug,
            post,
        ])
    );

    const manualRelated = Array.isArray(relatedSlugs)
        ? relatedSlugs
            .map((slug) =>
                postMap.get(
                    safeSlug(slug)
                )
            )
            .filter(
                (post): post is SafePost =>
                    Boolean(post)
            )
        : [];

    const fallbackRelated = currentPost
        ? posts.filter(
            (post) =>
                post.category ===
                currentPost.category &&
                post.slug !==
                cleanCurrentSlug
        )
        : [];

    const relatedPosts = [
        ...manualRelated,
        ...fallbackRelated,
    ]
        .filter(
            (post) =>
                post.slug !==
                cleanCurrentSlug
        )
        .filter(
            (post, index, array) =>
                array.findIndex(
                    (item) =>
                        item.slug ===
                        post.slug
                ) === index
        )
        .slice(0, 5);

    if (relatedPosts.length === 0) {
        return null;
    }

    return (
        <section
            className="mt-12 border-t pt-8"
            aria-label="Related Articles"
        >
            <h2 className="text-2xl font-bold mb-6">
                Related Articles
            </h2>

            <div className="grid gap-4">
                {relatedPosts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/posts/${post.slug}`}
                        aria-label={`Read ${post.title}`}
                        className="
                            block
                            rounded-lg
                            border
                            p-4
                            transition
                            hover:bg-gray-50
                            dark:hover:bg-gray-900
                        "
                    >
                        <h3 className="font-semibold">
                            {post.title}
                        </h3>

                        {post.description && (
                            <p
                                className="
                                    mt-2
                                    text-sm
                                    text-gray-600
                                    dark:text-gray-400
                                "
                            >
                                {post.description}
                            </p>
                        )}
                    </Link>
                ))}
            </div>
        </section>
    );
}
