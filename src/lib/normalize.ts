/**
 * SANITIZATION PROTOCOLS // DATA INFRASTRUCTURE UTILITIES
 */

/**
 * Normalizes keys, string parameters, or categories for safe, exact comparison.
 * Preserves spaces but cleans casing and anomalous whitespace.
 * 
 * @example "  Mental Clarity  " => "mental clarity"
 */
export function normalizeKey(value: string = ""): string {
    return value
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " "); // Unifies multi-space fragments into a single space
}

/**
 * Generates a URL-safe slug from raw user input strings.
 * Strips accents, punctuation, and non-alphanumeric entities to prevent breaking paths.
 * 
 * @example "Protocol #01: Advanced Somatic Control!" => "protocol-01-advanced-somatic-control"
 */
export function generateSlug(value: string = ""): string {
    return value
        .toLowerCase()
        .trim()
        // 1. Normalize unicode accents (e.g., converts 'é' to 'e' using canonical decomposition)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        // 2. Remove non-alphanumeric characters, except for spaces and dashes
        .replace(/[^a-z0-9\s\-]/g, "")
        // 3. Convert spaces and multi-dashes into single, clean structural dashes
        .replace(/[\s_]+/g, "-")
        .replace(/-+/g, "-")
        // 4. Edge trim trailing or leading structural dashes
        .replace(/^-+|-+$/g, "");
}