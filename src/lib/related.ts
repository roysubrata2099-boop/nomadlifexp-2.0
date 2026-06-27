import { Post } from "./posts";

/* ---------------- CLEAN COMPATIBLE TYPE ---------------- */

/**
 * We keep keywords fully compatible with Post
 * so TypeScript never conflicts.
 */
export interface EnhancedPost extends Omit<Post, "keywords"> {
    keywords?: string[];
}

/* ---------------- TOKENIZER ---------------- */
function tokenize(text: string = ""): string[] {
    if (!text) return [];

    return text
        .toLowerCase()
        .replace(/[^\w\s\-]/g, " ")
        .split(/[\s_]+/)
        .map((w) => w.trim())
        .filter((w) => w.length > 3);
}

/* ---------------- KEYWORD NORMALIZER ---------------- */
function getNormalizedKeywords(input: string[] | undefined): Set<string> {
    const set = new Set<string>();
    if (!input) return set;

    for (const item of input) {
        if (!item) continue;
        set.add(item.trim().toLowerCase());
    }

    return set;
}

/* ---------------- MAIN ENGINE ---------------- */
export function getRelatedPosts(
    current: EnhancedPost,
    allPosts: EnhancedPost[]
): Post[] {
    if (!current || !Array.isArray(allPosts)) return [];

    const currentKeywords = getNormalizedKeywords(current.keywords);
    const currentTitleTokens = new Set(tokenize(current.title));
    const currentCategory = current.category?.toLowerCase().trim() || "";

    const scored = allPosts
        .filter((p) => p.slug !== current.slug)
        .map((post) => {
            let score = 0;

            // 1. CATEGORY MATCH
            if (
                post.category &&
                post.category.toLowerCase().trim() === currentCategory
            ) {
                score += 5;
            }

            // 2. KEYWORDS MATCH
            const postKeywords = getNormalizedKeywords(post.keywords);

            for (const k of postKeywords) {
                if (currentKeywords.has(k)) {
                    score += 2;
                }
            }

            // 3. TITLE MATCH
            const postTokens = tokenize(post.title);

            for (const t of postTokens) {
                if (currentTitleTokens.has(t)) {
                    score += 1;
                }
            }

            return { post, score };
        })
        .filter((x) => x.score > 0);

    const sorted = scored.sort((a, b) => {
        if (b.score === a.score) {
            return a.post.slug.localeCompare(b.post.slug);
        }
        return b.score - a.score;
    });

    return sorted.slice(0, 4).map((x) => x.post);
}