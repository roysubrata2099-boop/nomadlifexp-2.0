// src/app/blog/posts/[slug]/page.tsx

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

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

// 100% Secure System Isolation Shield Matrix
const RESERVED_SYSTEM_ROUTES = new Set([
    "discipline-system",
    "discipline-system-preview",
    "dashboard"
]);

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
            // Absolute Compile-Time Protection Guard
            .filter(post => !RESERVED_SYSTEM_ROUTES.has(slugify(post.slug)))
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
        const normalizedSlug = slugify(slug || "");

        // Return blank object instantly if system path requested to prevent dynamic collision
        if (!normalizedSlug || RESERVED_SYSTEM_ROUTES.has(normalizedSlug)) {
            return {};
        }

        const post = getPostBySlug(normalizedSlug);

        if (!post) {
            return {
                title: "Article Not Found | NomadLifeXP",
            };
        }

        const exactTitle = safeText(post.title) || "NomadLifeXP Article";
        const exactDesc = safeText(post.description) || "Transformation systems and insights.";
        const exactImage = safeText(post.image);

        return {
            title: `${exactTitle} | NomadLifeXP`,
            description: exactDesc,
            alternates: {
                canonical: `https://nomadlifexp.com/blog/posts/${normalizedSlug}`,
            },
            openGraph: {
                title: `${exactTitle} | NomadLifeXP`,
                description: exactDesc,
                url: `https://nomadlifexp.com/blog/posts/${normalizedSlug}`,
                type: "article",
                siteName: "NomadLifeXP",
                images: exactImage ? [{ url: `https://nomadlifexp.com${exactImage}` }] : [],
            },
            twitter: {
                card: "summary_large_image",
                title: `${exactTitle} | NomadLifeXP`,
                description: exactDesc,
                images: exactImage ? [`https://nomadlifexp.com${exactImage}`] : [],
            },
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
    const normalizedSlug = slugify(slug || "");

    // 100% Bulletproof Runtime Guard: Step aside if hitting system parameters
    if (!normalizedSlug || RESERVED_SYSTEM_ROUTES.has(normalizedSlug)) {
        notFound();
    }

    let post;
    try {
        post = getPostBySlug(normalizedSlug);
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

    const cleanTitle = safeText(post.title) || "Untitled Article";
    const cleanDescription = safeText(post.description) || "Transformation systems and insights.";
    const cleanImage = safeText(post.image);
    const currentPostSlug = typeof post.slug === "string" ? post.slug : slug;

    // Structured Graph Metadata Setup
    const jsonLdGraph = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": `https://nomadlifexp.com/blog/posts/${slugify(currentPostSlug)}#article`,
                "isPartOf": {
                    "@type": "WebPage",
                    "@id": `https://nomadlifexp.com/blog/posts/${slugify(currentPostSlug)}`
                },
                "headline": cleanTitle,
                "description": cleanDescription,
                "inLanguage": "en-US",
                "mainEntityOfPage": `https://nomadlifexp.com/blog/posts/${slugify(currentPostSlug)}`,
                ...(cleanImage && { "image": `https://nomadlifexp.com${cleanImage}` }),
                "publisher": {
                    "@type": "Organization",
                    "@id": "https://nomadlifexp.com/#organization",
                    "name": "NomadLifeXP",
                    "url": "https://nomadlifexp.com"
                },
                "author": {
                    "@type": "Person",
                    "@id": "https://nomadlifexp.com/#author",
                    "name": "NomadLifeXP Editorial Team"
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": `https://nomadlifexp.com/blog/posts/${slugify(currentPostSlug)}#breadcrumb`,
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://nomadlifexp.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Blog",
                        "item": "https://nomadlifexp.com/blog"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "category",
                        "item": `https://nomadlifexp.com/blog/category/${slugify(category)}`
                    },
                    {
                        "@type": "ListItem",
                        "position": 4,
                        "name": cleanTitle,
                        "item": `https://nomadlifexp.com/blog/posts/${slugify(currentPostSlug)}`
                    }
                ]
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
            />

            <article className="max-w-4xl mx-auto px-6 py-12">
                <Link
                    href={`/blog/category/${slugify(category || "general")}`}
                    className="text-sm text-cyan-600 hover:underline inline-flex items-center gap-1"
                >
                    <span>&larr;</span> Back to {category}
                </Link>

                <header className="mt-6 mb-8 border-b pb-6">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                        {cleanTitle}
                    </h1>

                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
                        {cleanDescription}
                    </p>
                </header>

                {/* Secure Image Container Matrix - Injected Safely Here */}
                {cleanImage && (
                    <div className="relative w-full h-[250px] sm:h-[400px] mb-8 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                        <Image
                            src={cleanImage}
                            alt={cleanTitle}
                            fill
                            priority
                            sizes="(max-w-4xl) 100vw, 840px"
                            className="object-cover transition-opacity duration-300"
                        />
                    </div>
                )}

                <div
                    className="prose dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{
                        __html: safeText(post.contentHtml)
                    }}
                />

                <RelatedArticles
                    currentSlug={typeof post.slug === "string" ? post.slug : ""}
                    relatedSlugs={Array.isArray(post.relatedArticles) ? post.relatedArticles : []}
                />

                <footer className="mt-12 pt-8 border-t">
                    <Link
                        href="/blog"
                        className="text-cyan-600 hover:underline inline-flex items-center gap-1"
                    >
                        Return to all blogs <span>&rarr;</span>
                    </Link>
                </footer>
            </article>
        </>
    );
}