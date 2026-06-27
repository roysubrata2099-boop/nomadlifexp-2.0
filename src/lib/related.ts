import { Post } from "./posts";

/* ---------------- EXTENDED RUNTIME TYPE ---------------- */
export interface EnhancedPost extends Post {
    /** Explicitly typing keywords since it drives our matching calculations */
    keywords?: string | string[];
}

/* ---------------- RELEVANCE INFRASTRUCTURE ---------------- */

/**
 * Sanitizes input text and decomposes it into high-value comparable word tokens.
 * Automatically filters out common noise and short stop words.
 */
function tokenize(text: string = ""): string[] {
    if (!text) return [];

    return text
        .toLowerCase()
        // Replace non-alphanumeric entities with safe spacing markers
        .replace(/[^\w\s\-]/g, " ")
        .split(/[\s_]+/)
        .map((word) => word.trim())
        // Retain only structural semantic tokens (words greater than 3 characters)
        .filter((word) => word.length > 3);
}

/**
 * Transforms diverse keyword inputs cleanly into unique, case-normalized strings.
 */
function getNormalizedKeywords(input: string | string[] | undefined): Set<string> {
    const uniqueKeywords = new Set<string>();
    if (!input) return uniqueKeywords;

    const rawArray = Array.isArray(input)
        ? input
        : input.split(",");

    for (const rawWord of rawArray) {
        if (typeof rawWord === "string") {
            const cleanWord = rawWord.trim().toLowerCase();
            if (cleanWord) {
                uniqueKeywords.add(cleanWord);
            }
        }
    }

    return uniqueKeywords;
}

/* ---------------- THE OPERATIONAL ENGINE ---------------- */

/**
 * Calculates and delivers the top 4 most contextually relevant peer posts.
 * Utilizes a balanced, deterministic scoring matrix to optimize layout stability.
 */
export function getRelatedPosts(current: EnhancedPost, allPosts: EnhancedPost[]): Post[] {
    if (!current || !Array.isArray(allPosts)) return [];

    const currentKeywords = getNormalizedKeywords(current.keywords);
    const currentTitleTokens = new Set(tokenize(current.title));
    const currentCategory = current.category ? current.category.toLowerCase().trim() : "";

    const scored = allPosts
        .filter((post) => post && post.slug !== current.slug)
        .map((post) => {
            let score = 0;

            // 1. SYSTEM CATEGORY MATCH (Primary weight constraint)
            if (post.category && post.category.toLowerCase().trim() === currentCategory) {
                score += 5;
            }

            // 2. METADATA KEYWORD MATCH (Secondary weight constraint)
            const postKeywords = getNormalizedKeywords(post.keywords);
            for (const keyword of postKeywords) {
                if (currentKeywords.has(keyword)) {
                    score += 2;
                }
            }

            // 3. LEXICAL TITLE TOKEN MATCH (Granular semantic signal)
            const postTitleTokens = tokenize(post.title);
            for (const token of postTitleTokens) {
                if (currentTitleTokens.has(token)) {
                    score += 1;
                }
            }

            return { post, score };
        })
        // Strip zero-relevance anomalies immediately to save downstream resources
        .filter((item) => item.score > 0);

    // Immutable deterministic sort tracking to protect against sorting glitches
    const sortedMatches = [...scored].sort((a, b) => {
        if (b.score === a.score) {
            // Strict alphabetical slug fallback guarantees identical layout output across renders
            return a.post.slug.localeCompare(b.post.slug);
        }
        return b.score - a.score;
    });

    // Deliver maximum 4 high-value matches back to interface layer
    return sortedMatches.slice(0, 4).map((item) => item.post);
}