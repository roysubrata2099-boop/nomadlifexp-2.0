// src/lib/taxonomy.ts

/**
 * Normalizes any category string or title phrase into one of the 4 core pillars.
 */
export const normalizeCategory = (category: string = "", title: string = ""): string => {
    const cleanTitle = title.toLowerCase();
    const cleanCat = category.toLowerCase().trim();

    // 1. Evaluate Title Indicators First
    if (
        cleanTitle.includes("reclaim your attention") ||
        cleanTitle.includes("self-discipline guide") ||
        cleanTitle.includes("lack discipline") ||
        cleanTitle.includes("procrastinate") ||
        cleanTitle.includes("discipline")
    ) {
        return "discipline";
    }

    if (
        cleanTitle.includes("workout videos") ||
        cleanTitle.includes("never actually exercise") ||
        cleanTitle.includes("fitness consistency") ||
        cleanTitle.includes("not about time") ||
        cleanTitle.includes("workout mindset") ||
        cleanTitle.includes("workout habit") ||
        cleanTitle.includes("outlasts your motivation") ||
        cleanTitle.includes("fitness") ||
        cleanTitle.includes("exercise")
    ) {
        return "fitness";
    }

    if (
        cleanTitle.includes("everything becomes still") ||
        cleanTitle.includes("headstand") ||
        cleanTitle.includes("forearm stand") ||
        cleanTitle.includes("forward bending") ||
        cleanTitle.includes("yoga") ||
        cleanTitle.includes("inversion")
    ) {
        return "yoga";
    }

    if (
        cleanTitle.includes("attention span") ||
        cleanTitle.includes("digital distraction") ||
        cleanTitle.includes("can’t focus") ||
        cleanTitle.includes("cant focus") ||
        cleanTitle.includes("mental clarity") ||
        cleanTitle.includes("overthinking") ||
        cleanTitle.includes("stuck in life") ||
        cleanTitle.includes("mindset")
    ) {
        return "mindset";
    }

    // 2. Evaluate Explicit Category Fallbacks
    if (cleanCat === "wellness") return "fitness";
    if (cleanCat === "self growth" || cleanCat === "mental clarity") return "mindset";

    // 3. Absolute Default Guard
    return cleanCat || "discipline";
};