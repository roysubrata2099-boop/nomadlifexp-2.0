// src/lib/taxonomy.ts

export const VALID_CATEGORIES = [
    "discipline",
    "fitness",
    "yoga",
    "mindset",
] as const;


export type Category =
    typeof VALID_CATEGORIES[number];



export function slugifyCategory(
    value: string
): string {

    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}




/**
 * Converts any incoming category value
 * into one of the official pillar routes.
 *
 * Guaranteed return:
 * discipline | fitness | yoga | mindset
 */
export function normalizeCategory(
    category: unknown,
    title: string = ""
): Category {


    const incoming =
        typeof category === "string"
            ? slugifyCategory(category)
            : "";



    if (
        VALID_CATEGORIES.includes(
            incoming as Category
        )
    ) {
        return incoming as Category;
    }



    const context =
        `${incoming} ${title}`
            .toLowerCase();



    const rules: Array<{
        category: Category;
        keywords: string[];
    }> = [

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


        ];



    for (const rule of rules) {

        if (
            rule.keywords.some(
                keyword =>
                    context.includes(keyword)
            )
        ) {
            return rule.category;
        }

    }



    return "discipline";
}