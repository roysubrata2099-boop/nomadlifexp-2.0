// src/lib/ontology/articleRecommendations.ts

import { articleOntology } from "./articles";

export interface RecommendedArticle {
    slug: string;
    score: number;
    reasons: string[];
}

type RecommendationOptions = {
    limit?: number;
};

const SCORE = {
    editorial: 100,
    samePillar: 30,
    sharedEntity: 18,
    sharedContext: 15,
    digitalNomadContext: 12,
};

function normalizeSlug(value: unknown): string {
    if (typeof value !== "string") {
        return "";
    }

    return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
}

export function getRecommendedArticleSlugs(
    currentSlug: string,
    options: RecommendationOptions = {},
): string[] {
    const limit = Math.max(
        1,
        Math.min(options.limit ?? 5, 10),
    );

    const cleanCurrentSlug =
        normalizeSlug(currentSlug);

    if (!cleanCurrentSlug) {
        return [];
    }

    const current =
        articleOntology[cleanCurrentSlug];

    if (!current) {
        return [];
    }

    const editorialRelations =
        new Set(
            current.relatedArticles
                .map(normalizeSlug)
                .filter(Boolean),
        );

    const scored: RecommendedArticle[] = [];

    for (const article of Object.values(articleOntology)) {
        const candidateSlug =
            normalizeSlug(article.slug);

        if (
            !candidateSlug ||
            candidateSlug === cleanCurrentSlug
        ) {
            continue;
        }

        let score = 0;
        const reasons: string[] = [];

        // --------------------------------------------
        // 1. Explicit editorial relationship
        // --------------------------------------------

        if (editorialRelations.has(candidateSlug)) {
            score += SCORE.editorial;
            reasons.push("editorial");
        }

        // --------------------------------------------
        // 2. Same primary pillar
        // --------------------------------------------

        if (
            article.primaryPillar ===
            current.primaryPillar
        ) {
            score += SCORE.samePillar;
            reasons.push("same-pillar");
        }

        // --------------------------------------------
        // 3. Shared semantic entities
        // --------------------------------------------

        const currentEntities =
            new Set(current.entities);

        const sharedEntities =
            article.entities.filter((entity) =>
                currentEntities.has(entity),
            );

        if (sharedEntities.length > 0) {
            score +=
                sharedEntities.length *
                SCORE.sharedEntity;

            reasons.push(
                `shared-entities:${sharedEntities.length}`,
            );
        }

        // --------------------------------------------
        // 4. Shared context
        // --------------------------------------------

        const currentContexts =
            new Set(current.contexts);

        const sharedContexts =
            article.contexts.filter((context) =>
                currentContexts.has(context),
            );

        if (sharedContexts.length > 0) {
            score +=
                sharedContexts.length *
                SCORE.sharedContext;

            reasons.push(
                `shared-context:${sharedContexts.length}`,
            );
        }

        // --------------------------------------------
        // 5. Digital-nomad bridge
        //
        // Allows relevant nomad content to connect
        // even when the primary pillar differs.
        // --------------------------------------------

        if (
            current.contexts.includes(
                "digital-nomad",
            ) &&
            article.contexts.includes(
                "digital-nomad",
            )
        ) {
            score += SCORE.digitalNomadContext;

            if (
                !reasons.includes(
                    "shared-context:1",
                )
            ) {
                reasons.push(
                    "digital-nomad-context",
                );
            }
        }

        if (score <= 0) {
            continue;
        }

        scored.push({
            slug: candidateSlug,
            score,
            reasons,
        });
    }

    return scored
        .sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score;
            }

            return a.slug.localeCompare(
                b.slug,
            );
        })
        .slice(0, limit)
        .map((article) => article.slug);
}
