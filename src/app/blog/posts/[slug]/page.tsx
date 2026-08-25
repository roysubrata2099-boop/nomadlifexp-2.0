import "server-only";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
    getAllMDXPosts,
    getMDXPostBySlug,
} from "@/lib/mdx";

import MDXRelatedArticles from "@/components/MDXRelatedArticles";
import { SITE_URL } from "@/lib/site";

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

const RESERVED_SYSTEM_ROUTES =
    new Set([
        "admin",
        "api",
        "dashboard",
        "login",
        "signup",
        "account",
        "settings",
        "blog",
    ]);

function safeText(value: unknown): string {
    return typeof value === "string"
        ? value.trim()
        : "";
}

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

function safeImage(value: unknown): string {
    if (typeof value !== "string") {
        return "";
    }

    const image = value.trim();

    if (!image.startsWith("/")) {
        return "";
    }

    return image;
}

function absoluteUrl(pathname: string): string {
    const normalizedPath =
        pathname === "/"
            ? ""
            : pathname.startsWith("/")
                ? pathname
                : `/${pathname}`;

    return `${SITE_URL}${normalizedPath}`;
}

export async function generateStaticParams() {
    try {
        const posts = getAllMDXPosts();

        return posts
            .map((post) => {
                const slug = safeSlug(post.slug);

                if (
                    !slug ||
                    RESERVED_SYSTEM_ROUTES.has(slug)
                ) {
                    return null;
                }

                return {
                    slug,
                };
            })
            .filter(
                (
                    item
                ): item is { slug: string } =>
                    item !== null
            );
    } catch {
        return [];
    }
}

export async function generateMetadata(
    {
        params,
    }: PageProps
): Promise<Metadata> {
    try {
        const { slug } = await params;

        const cleanSlug = safeSlug(slug);

        if (
            !cleanSlug ||
            RESERVED_SYSTEM_ROUTES.has(cleanSlug)
        ) {
            return {};
        }

        const post =
            await getMDXPostBySlug(cleanSlug);

        if (!post) {
            return {
                title:
                    "Article Not Found | NomadLifeXP",
            };
        }

        const title =
            safeText(post.title) ||
            "NomadLifeXP Article";

        const description =
            safeText(post.description) ||
            "Transformation systems and insights.";

        const image =
            safeImage(post.image);

        const canonicalUrl =
            absoluteUrl(
                `/blog/posts/${cleanSlug}`
            );

        return {
            title:
                `${title} | NomadLifeXP`,
            description,

            alternates: {
                canonical: canonicalUrl,
            },

            openGraph: {
                title,
                description,
                url: canonicalUrl,
                type: "article",

                images: image
                    ? [
                        {
                            url:
                                absoluteUrl(image),
                            alt: title,
                        },
                    ]
                    : [],
            },

            twitter: {
                card:
                    "summary_large_image",
                title,
                description,

                images: image
                    ? [
                        absoluteUrl(image),
                    ]
                    : [],
            },
        };
    } catch {
        return {
            title:
                "Article | NomadLifeXP",
        };
    }
}

export default async function MDXPostPage(
    {
        params,
    }: PageProps
) {
    const { slug } = await params;

    const cleanSlug = safeSlug(slug);

    if (
        !cleanSlug ||
        RESERVED_SYSTEM_ROUTES.has(cleanSlug)
    ) {
        notFound();
    }

    const post =
        await getMDXPostBySlug(cleanSlug);

    if (!post) {
        notFound();
    }

    const title =
        safeText(post.title) ||
        "Untitled Article";

    const description =
        safeText(post.description);

    const category =
        safeSlug(post.category);

    const categoryName =
        safeText(post.category)
            .replace(/[-_]+/g, " ")
            .replace(/\b\w/g, (char) =>
                char.toUpperCase()
            );

    const image =
        safeImage(post.image);

    const articleUrl =
        absoluteUrl(
            `/blog/posts/${cleanSlug}`
        );

    const categoryUrl =
        category
            ? absoluteUrl(
                `/blog/category/${category}`
            )
            : "";

    const relatedArticles =
        Array.isArray(post.relatedArticles)
            ? post.relatedArticles.filter(
                (item): item is string =>
                    typeof item === "string"
            )
            : [];

    /*
     * Article structured data.
     *
     * Only fields that are actually available from the
     * current MDX content model are included.
     *
     * No artificial publication dates, authors, ratings,
     * or other unsupported claims are generated.
     */
    const articleJsonLd = {
        "@type": "Article",
        "@id": `${articleUrl}#article`,
        headline: title,
        description: description || undefined,

        image: image
            ? [absoluteUrl(image)]
            : undefined,

        url: articleUrl,

        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": articleUrl,
        },

        articleSection:
            categoryName || undefined,

        author: {
            "@id":
                `${SITE_URL}/#organization`,
        },

        publisher: {
            "@id":
                `${SITE_URL}/#organization`,
        },

        isPartOf: {
            "@id":
                `${SITE_URL}/#website`,
        },
    };

    /*
     * Breadcrumb structured data.
     *
     * The article itself is the final breadcrumb item.
     * The category item is included only when a valid
     * category exists in the MDX frontmatter.
     */
    const breadcrumbItems = [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: absoluteUrl("/blog"),
        },
    ];

    if (category && categoryName) {
        breadcrumbItems.push({
            "@type": "ListItem",
            position: 3,
            name: categoryName,
            item: categoryUrl,
        });
    }

    breadcrumbItems.push({
        "@type": "ListItem",
        position:
            category && categoryName
                ? 4
                : 3,
        name: title,
        item: articleUrl,
    });

    const breadcrumbJsonLd = {
        "@type": "BreadcrumbList",
        "@id": `${articleUrl}#breadcrumb`,
        itemListElement: breadcrumbItems,
    };

    /*
     * Connect the article and breadcrumb to the
     * site-wide Organization and WebSite entities
     * already defined in the root layout.
     */
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            articleJsonLd,
            breadcrumbJsonLd,
        ],
    };

    return (
        <>
            <script
                id="article-structured-data"
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html:
                        JSON.stringify(jsonLd),
                }}
            />

            <article className="max-w-4xl mx-auto px-6 py-12">

                <div className="mb-6">
                    {category && (
                        <Link
                            href={`/blog/category/${category}`}
                            className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                            ← Back to {categoryName}
                        </Link>
                    )}
                </div>

                <header className="mb-10 border-b border-white/15 pb-6">

                    <h1 className="text-4xl font-extrabold text-white tracking-tight">
                        {title}
                    </h1>

                    {description && (
                        <p className="mt-4 text-xl text-[#EDF6FF]/90">
                            {description}
                        </p>
                    )}

                    {image && (
                        <div className="relative mt-8 overflow-hidden rounded-xl border border-white/10 shadow-lg">
                            <Image
                                src={image}
                                alt={title}
                                width={1200}
                                height={630}
                                priority
                                sizes="(max-width:896px) 100vw, 896px"
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    )}

                </header>

                <div className="blog-content prose prose-lg dark:prose-invert max-w-none text-[#EDF6FF]">
                    {post.content}
                </div>

                <MDXRelatedArticles
                    currentSlug={post.slug}
                    relatedSlugs={relatedArticles}
                />

            </article>
        </>
    );
}

