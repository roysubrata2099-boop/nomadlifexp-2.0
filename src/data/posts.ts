/* ---------------- TYPES & SYSTEM SCHEMAS ---------------- */

export type PostCategory = "discipline" | "fitness" | "mindset" | "yoga";

export interface Post {
    /** The display header for the data node */
    title: string;
    /** The strict unique URL identifier path */
    slug: string;
    /** Low-profile contextual summary used for SEO meta and listing cards */
    description: string;
    /** Strongly-typed category grouping alignment */
    category: PostCategory;
    /** Raw semantic block payload (Markdown strings preferred in production engines) */
    content: string;
    /** Collection of slug identifiers referencing valid peer nodes */
    related: string[];
}

/* ---------------- IMMUTABLE POSTS DATABASE ---------------- */

export const posts: Post[] = [
    {
        title: "Self Discipline Guide: Reclaim Your Attention",
        slug: "self-discipline-guide",
        description: "Build unshakeable behavioral architecture through structured physical routines, not emotional motivation.",
        category: "discipline",
        content: `
            <h1>Self Discipline Guide // Protocol 01</h1>
            <p>Discipline is not a state of feeling. It is an engineering framework designed to eliminate friction points entirely.</p>
        `,
        related: ["workout-videos-no-action"]
    },
    {
        title: "Why People Watch Workout Videos but Never Exercise",
        slug: "workout-videos-no-action",
        description: "Deconstructing the cognitive reward loops that substitute media consumption for physiological exertion.",
        category: "fitness",
        content: `
            <h1>Workout Motivation Problem // Protocol 02</h1>
            <p>Passive monitoring triggers synthetic dopamine loops. True physical agency requires moving past observation and initiating mechanical output.</p>
        `,
        related: ["self-discipline-guide"]
    }
];

/* ---------------- DATA ACCESS LAYERS & VALIDATOR ENGINE ---------------- */

/**
 * Clean data string parsing to eliminate whitespace anomalies or trailing casing errors
 */
export function normalizeKey(value: string = ""): string {
    return value.toLowerCase().trim();
}

/**
 * Safe query selector to pull a clean post instance by its unique slug path
 */
export function getPostBySlug(slug: string): Post | undefined {
    const searchSlug = normalizeKey(slug);
    return posts.find((p) => normalizeKey(p.slug) === searchSlug);
}

/**
 * Returns all active posts belonging to a explicit typed tracking system category
 */
export function getPostsByCategory(category: PostCategory): Post[] {
    const searchCategory = normalizeKey(category);
    return posts.filter((p) => normalizeKey(p.category) === searchCategory);
}

/**
 * Evaluates the absolute relationship integrity of the structural post records.
 * Use inside pre-build checkpoints or Next.js layout entry tasks to flag broken cross-references.
 * @returns Array of tracking errors if dead cross-links are found
 */
export function verifyDatabaseIntegrity(): { originSlug: string; brokenRef: string }[] {
    const validSlugs = new Set(posts.map((p) => normalizeKey(p.slug)));
    const integrityErrors: { originSlug: string; brokenRef: string }[] = [];

    for (const post of posts) {
        for (const relatedSlug of post.related) {
            if (!validSlugs.has(normalizeKey(relatedSlug))) {
                integrityErrors.push({
                    originSlug: post.slug,
                    brokenRef: relatedSlug
                });
            }
        }
    }

    return integrityErrors;
}