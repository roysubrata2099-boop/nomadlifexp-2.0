import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

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

function safeText(value: unknown): string {
    return typeof value === "string" ? value.trim() : "";
}

// Hardened static generation wrapper
export async function generateStaticParams() {
    try {
        const posts = getAllPosts();

        if (!Array.isArray(posts)) {
            return [];
        }

        return posts
            .filter(post => post && typeof post.slug === "string")
            .map(post => ({
                slug: slugify(post.slug),
            }));
    } catch {
        return [];
    }
}

// Safe Metadata Pipeline to insulate SEO crawling from broken files
export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    try {
        const { slug } = await params;
        if (!slug) return { title: "Article | NomadLifeXP" };

        const post = getPostBySlug(slugify(slug));

        if (!post) {
            return {
                title: "Article Not Found | NomadLifeXP",
            };
        }

        const exactTitle = safeText(post.title) || "NomadLifeXP Article";
        const exactDesc = safeText(post.description) || "Transformation systems and insights.";

        return {
            title: `${exactTitle} | NomadLifeXP`,
            description: exactDesc,
        };
    } catch {
        return {
            title: "Article | NomadLifeXP",
        };
    }
}

export default async function BlogPostPage({
    params,
}: PageProps) {
    const { slug } = await params;

    if (!slug) {
        notFound();
    }

    let post;
    try {
        post = getPostBySlug(slugify(slug));
    } catch {
        notFound();
    }

    if (!post) {
        notFound();
    }

    // Guard taxonomy processing from missing category fields
    let category = "General";
    try {
        const rawCategory = typeof post.category === "string" ? post.category : "";
        const rawTitle = typeof post.title === "string" ? post.title : "";
        category = normalizeCategory(rawCategory, rawTitle) || "General";
    } catch {
        category = "General";
    }

    return (
        <article
            className="
            max-w-4xl
            mx-auto
            px-6
            py-12
            "
        >
            <Link
                href={`/blog/category/${slugify(category || "general")}`}
                className="
                text-sm
                text-cyan-600
                hover:underline
                "
            >
                ← Back to {category}
            </Link>

            <header
                className="
                mt-6
                mb-8
                border-b
                pb-6
                "
            >
                <h1
                    className="
                    text-4xl
                    font-bold
                    text-gray-900
                    dark:text-white
                    "
                >
                    {safeText(post.title) || "Untitled Article"}
                </h1>

                <p
                    className="
                    mt-4
                    text-xl
                    text-gray-600
                    dark:text-gray-400
                    "
                >
                    {safeText(post.description)}
                </p>
            </header>

            <div
                className="
                prose
                dark:prose-invert
                max-w-none
                "
                dangerouslySetInnerHTML={{
                    __html: safeText(post.contentHtml)
                }}
            />

            <RelatedArticles
                currentSlug={typeof post.slug === "string" ? post.slug : ""}
                relatedSlugs={Array.isArray(post.relatedArticles) ? post.relatedArticles : []}
            />

            <footer
                className="
                mt-12
                pt-8
                border-t
                "
            >
                <Link
                    href="/blog"
                    className="
                    text-cyan-600
                    hover:underline
                    "
                >
                    Return to all blogs →
                </Link>
            </footer>
        </article>
    );
}