import { Post } from "./posts";

/* ---------------- EXTENDED TYPE (SAFE + COMPATIBLE) ---------------- */
export interface EnhancedPost extends Omit<Post, "keywords"> {
    /**
     * Keywords can come in multiple formats from CMS or legacy data.
     * We normalize everything internally in getNormalizedKeywords().
     */
    keywords?: string | string[];
}

/* ---------------- TEXT TOKENIZER ---------------- */
function tokenize(text: string = ""): string[] {
    if (!text) return [];

    return text
        .toLowerCase()
        .replace(/[^\w\s\-]/g, " ")
        .split(/[\s_]+/)
        .map((word) => word.trim())
        .filter((word) => word.length > 3);
}

/* ---------------- KEYWORD NORMALIZER ---------------- */
function getNormalizedKeywords(input: string | string[] | undefined): Set<string> {
    const set = new Set<string>();
    if (!input) return set;

    const arr = Array.isArray(input)
        ? input
        : input.split(",");

    for (const item of arr) {
        if (typeof item !== "string") continue;

        const clean = item.trim().toLowerCase();
        if (clean) set.add(clean);
    }

    return set;
}

/* ---------------- RELATED POSTS ENGINE ---------------- */
export function getRelatedPosts(
    current: EnhancedPost,
    allPosts: EnhancedPost[]
): Post[] {
    if (!current || !Array.isArray(allPosts)) return [];

    const currentKeywords = getNormalizedKeywords(current.keywords);
    const currentTitleTokens = new Set(tokenize(current.title));
    const currentCategory = current.category?.toLowerCase().trim() || "";

    const scored = allPosts
        .filter((post) => post && post.slug !== current.slug)
        .map((post) => {
            let score = 0;

            /* 1. CATEGORY MATCH (highest priority) */
            if (
                post.category &&
                post.category.toLowerCase().trim() === currentCategory
            ) {
                score += 5;
            }

            /* 2. KEYWORD MATCH */
            const postKeywords = getNormalizedKeywords(post.keywords);

            for (const keyword of postKeywords) {
                if (currentKeywords.has(keyword)) {
                    score += 2;
                }
            }

            /* 3. TITLE TOKEN MATCH */
            const postTitleTokens = tokenize(post.title);

            for (const token of postTitleTokens) {
                if (currentTitleTokens.has(token)) {
                    score += 1;
                }
            }

            return { post, score };
        })
        .filter((item) => item.score > 0);

    /* deterministic sorting (stable UI) */
    const sorted = [...scored].sort((a, b) => {
        if (b.score === a.score) {
            return a.post.slug.localeCompare(b.post.slug);
        }
        return b.score - a.score;
    });

    return sorted.slice(0, 4).map((item) => item.post);
}