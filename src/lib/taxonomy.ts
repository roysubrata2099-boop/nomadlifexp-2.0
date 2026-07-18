// src/lib/taxonomy.ts

export const VALID_CATEGORIES = [
    "discipline",
    "fitness",
    "yoga",
    "mindset",
] as const;

export type Category = typeof VALID_CATEGORIES[number];

/**
 * Type guard to explicitly check if an unknown string matches the core platform categories.
 */
export function isValidCategory(value: string): value is Category {
    return VALID_CATEGORIES.includes(value as Category);
}

/**
 * Standardizes raw string structures into clean, uniform URL-safe variants.
 */
export function slugifyCategory(value: string): string {
    if (!value) return "";
    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

/**
 * Converts any incoming category value into one of the official pillar routes.
 * Guaranteed fallback isolation defaults to: 'discipline'
 *
 * @param category - The raw input payload sourced from frontmatter parsing layers.
 * @param title - The post title string used for contextual signature validation.
 */
export function normalizeCategory(
    category: unknown,
    title: string = ""
): Category {
    // 1. Safe Parameter Normalization
    const incoming = typeof category === "string" ? slugifyCategory(category) : "";

    // 2. Direct Explicit Match Optimization
    if (isValidCategory(incoming)) {
        return incoming;
    }

    // 3. Contextual Pattern Identification Vector
    const safeTitle = typeof title === "string" ? title.toLowerCase() : "";
    const context = `${incoming} ${safeTitle}`;

    interface MatchingRule {
        readonly category: Category;
        readonly keywords: readonly string[];
    }

    const rules: readonly MatchingRule[] = [
        {
            category: "yoga",
            keywords: [
                "yoga",
                "asana",
                "breath",
                "pranayama",
                "meditation",
                "stretch",
                "mobility",
            ],
        },
        {
            category: "fitness",
            keywords: [
                "fitness",
                "workout",
                "training",
                "exercise",
                "strength",
                "muscle",
                "running",
                "gym",
            ],
        },
        {
            category: "mindset",
            keywords: [
                "mindset",
                "focus",
                "mental",
                "clarity",
                "attention",
                "overthinking",
            ],
        },
    ] as const;

    // 4. Fallback Context Loop Evaluation
    for (const rule of rules) {
        if (rule.keywords.some((keyword) => context.includes(keyword))) {
            return rule.category;
        }
    }

    // 5. Hardened Core System Default
    return "discipline";
}