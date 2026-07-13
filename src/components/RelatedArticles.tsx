// src/components/RelatedArticles.tsx
import Link from "next/link";
import { getAllPosts, type PostItem } from "@/lib/markdown";

interface RelatedArticlesProps {
    currentSlug: string;
    relatedSlugs: string[];
}

export default function RelatedArticles({ currentSlug, relatedSlugs }: RelatedArticlesProps) {
    // 🛡️ Fail safe if array references are malformed or empty
    if (!Array.isArray(relatedSlugs) || relatedSlugs.length === 0) {
        return null;
    }

    const allPosts = getAllPosts();
    const cleanCurrentSlug = String(currentSlug || "").toLowerCase().trim();

    // ⚡ Optimization: Convert post array to a Map for O(1) lightning-fast lookups
    const postsMap = new Map<string, PostItem>();

    allPosts.forEach((post) => {
        if (post && typeof post.slug === "string") {
            postsMap.set(post.slug, post);
        }
    });

    // Filter and map valid slugs cleanly
    const validRelatedPosts = relatedSlugs
        .map((rawSlug) => {
            // 🛡️ Ensure string safety and drop potential extensions left in raw frontmatter
            const target = String(rawSlug || "")
                .replace(/\.md$/, "")
                .replace(/\.\.+/g, "") // Directory traversal safety matching markdown.ts
                .replace(/[/\\]/g, "")
                .toLowerCase()
                .trim();

            return postsMap.get(target);
        })
        .filter((post): post is PostItem => {
            // 🛡️ Security Check: Ensure the target post exists, isn't the current post, and has a valid slug/title
            return (
                !!post &&
                typeof post.slug === "string" &&
                post.slug !== cleanCurrentSlug &&
                typeof post.title === "string" &&
                post.title.trim().length > 0
            );
        });

    // If all links were invalid or pointing to itself, render nothing
    if (validRelatedPosts.length === 0) {
        return null;
    }

    return (
        <section className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800 clear-both">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Related Articles
            </h3>
            <ul className="space-y-3 list-none pl-0">
                {validRelatedPosts.map((post) => (
                    <li key={`related-${post.slug}`} className="group block">
                        <Link
                            href={`/blog/posts/${encodeURIComponent(post.slug)}`}
                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200 inline-flex items-center"
                        >
                            <span className="group-hover:underline text-left">{post.title}</span>
                            <span className="transform translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-200 ml-1">
                                →
                            </span>
                        </Link>
                        {post.description && typeof post.description === "string" && (
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2 max-w-xl">
                                {post.description}
                            </p>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
}