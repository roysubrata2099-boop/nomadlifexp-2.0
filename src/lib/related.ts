import type { Post } from "@/types/post";

/* ---------------- SAFE HELPERS ---------------- */

function tokenize(text: string = ""): string[] {
    if (typeof text !== "string") return [];

    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, " ")
        .split(/\s+/)
        .filter((w) => w.length > 3);
}

function normalizeKeywords(input?: unknown): Set<string> {
    const set = new Set<string>();

    if (!Array.isArray(input)) return set;

    for (const item of input) {
        if (typeof item === "string") {
            set.add(item.toLowerCase().trim());
        }
    }

    return set;
}

/* ---------------- MAIN ENGINE ---------------- */

export function getRelatedPosts(current: Post, allPosts: Post[]): Post[] {
    if (!current || !Array.isArray(allPosts)) return [];

    const currentCategory = (current.category || "").toLowerCase();
    const currentKeywords = normalizeKeywords(current.keywords);
    const currentTokens = new Set(tokenize(current.title));

    const scored = allPosts
        .filter((p) => p && p.slug !== current.slug)
        .map((post) => {
            let score = 0;

            if ((post.category || "").toLowerCase() === currentCategory) {
                score += 5;
            }

            const postKeywords = normalizeKeywords(post.keywords);
            for (const k of postKeywords) {
                if (currentKeywords.has(k)) score += 2;
            }

            const postTokens = tokenize(post.title);
            for (const t of postTokens) {
                if (currentTokens.has(t)) score += 1;
            }

            return { post, score };
        })
        .filter((x) => x.score > 0)
        .sort((a, b) => b.score - a.score);

    return scored.slice(0, 4).map((x) => x.post);
}