import Link from "next/link";
import { getAllPosts, type PostData } from "@/lib/markdown";

interface RelatedArticlesProps {
    currentSlug: string;
    relatedSlugs: string[];
}

export default function RelatedArticles({ currentSlug, relatedSlugs }: RelatedArticlesProps) {
    if (!Array.isArray(relatedSlugs) || relatedSlugs.length === 0) return null;

    const allPosts = getAllPosts();
    const postsMap = new Map<string, PostData>();
    allPosts.forEach((post) => {
        if (post && post.slug) postsMap.set(post.slug.toLowerCase().trim(), post);
    });

    const validRelatedPosts = relatedSlugs
        .map((slug) => postsMap.get(slug.toLowerCase().trim()) || null)
        .filter((post): post is PostData => post !== null && post.slug !== currentSlug);

    if (validRelatedPosts.length === 0) return null;

    return (
        <section className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold mb-4">Related Articles</h3>
            <ul className="space-y-3">
                {validRelatedPosts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/blog/posts/${post.slug}`} className="text-blue-600 hover:underline">
                            {post.title}
                        </Link>
                        <p className="text-sm text-gray-500">{post.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
