// src/lib/taxonomy.ts

const VALID_CATEGORIES = ["discipline", "fitness", "yoga", "mindset"];

/**
 * Normalizes frontmatter categories into official system tags.
 * Falls back safely based on contextual hints if the category is undefined or corrupted.
 */
export function normalizeCategory(category: unknown, title?: string): string {
    const safeCat = typeof category === "string" ? category.toLowerCase().trim() : "";

    if (VALID_CATEGORIES.includes(safeCat)) {
        return safeCat;
    }

    // Contextual fallback mapping engine
    const contentContext = `${safeCat} ${typeof title === 'string' ? title.toLowerCase() : ''}`;

    if (contentContext.includes("yoga") || contentContext.includes("breath") || contentContext.includes("meditation")) {
        return "yoga";
    }
    if (contentContext.includes("fit") || contentContext.includes("workout") || contentContext.includes("run") || contentContext.includes("body")) {
        return "fitness";
    }
    if (contentContext.includes("mind") || contentContext.includes("focus") || contentContext.includes("think")) {
        return "mindset";
    }

    // Default system fallback engine route
    return "discipline";
}