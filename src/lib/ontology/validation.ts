import { entities } from "./entities";
import { articleOntology } from "./articles";
import { articleGraph } from "./articleGraph";
import { predicates } from "./predicates";

export interface OntologyIssue {
    severity: "error" | "warning";
    code: string;
    message: string;
}

export function validateOntology(): OntologyIssue[] {
    const issues: OntologyIssue[] = [];

    const articles = Object.values(articleOntology);
    const entityEntries = Object.entries(entities);

    const articleIds = new Set<string>();
    const articleSlugs = new Set<string>();
    const entityIds = new Set<string>();

    const referencedEntities = new Set<string>();
    const connectedArticles = new Set<string>();

    const addIssue = (
        severity: "error" | "warning",
        code: string,
        message: string,
    ) => {
        issues.push({ severity, code, message });
    };

    // ------------------------------------------
    // 1. ENTITY REGISTRY VALIDATION
    // ------------------------------------------

    for (const [key, entity] of entityEntries) {
        if (key !== entity.id) {
            addIssue(
                "error",
                "ENTITY_KEY_MISMATCH",
                `Entity key ${key} does not match ID ${entity.id}.`,
            );
        }

        if (entityIds.has(entity.id)) {
            addIssue(
                "error",
                "DUPLICATE_ENTITY_ID",
                `Duplicate entity ID: ${entity.id}`,
            );
        }

        entityIds.add(entity.id);

        if (!entity.name.trim()) {
            addIssue(
                "error",
                "INVALID_ENTITY_NAME",
                `Entity ${entity.id} has an empty name.`,
            );
        }
    }

    // ------------------------------------------
    // 2. ARTICLE VALIDATION
    // ------------------------------------------

    for (const article of articles) {
        if (!article.id || !article.slug) {
            addIssue(
                "error",
                "INVALID_ARTICLE",
                `Article has missing ID or slug: ${article.id}`,
            );
            continue;
        }

        if (articleIds.has(article.id)) {
            addIssue(
                "error",
                "DUPLICATE_ARTICLE_ID",
                `Duplicate article ID: ${article.id}`,
            );
        }

        if (articleSlugs.has(article.slug)) {
            addIssue(
                "error",
                "DUPLICATE_ARTICLE_SLUG",
                `Duplicate article slug: ${article.slug}`,
            );
        }

        articleIds.add(article.id);
        articleSlugs.add(article.slug);

        if (!article.title.trim()) {
            addIssue(
                "error",
                "INVALID_ARTICLE_TITLE",
                `Article ${article.slug} has an empty title.`,
            );
        }

        if (!entities[article.primaryPillar]) {
            addIssue(
                "error",
                "INVALID_PILLAR",
                `${article.slug} references unknown pillar: ${article.primaryPillar}`,
            );
        }

        if (!Array.isArray(article.contexts) || article.contexts.length === 0) {
            addIssue(
                "warning",
                "MISSING_ARTICLE_CONTEXT",
                `${article.slug} has no context assigned.`,
            );
        }

        for (const entityId of article.entities) {
            if (!entities[entityId]) {
                addIssue(
                    "error",
                    "UNKNOWN_ENTITY",
                    `${article.slug} references unknown entity: ${entityId}`,
                );
            } else {
                referencedEntities.add(entityId);
            }
        }

        for (const relatedSlug of article.relatedArticles) {
            if (!articleOntology[relatedSlug]) {
                addIssue(
                    "error",
                    "UNKNOWN_ARTICLE",
                    `${article.slug} references unknown article: ${relatedSlug}`,
                );
            }
        }
    }

    // ------------------------------------------
    // 3. GRAPH VALIDATION
    // ------------------------------------------

    const validEndpoints = new Set<string>([
        ...articleIds,
        ...entityIds,
    ]);

    for (const triple of articleGraph.triples) {
        if (!triple.subject || !triple.object) {
            addIssue(
                "error",
                "INVALID_TRIPLE",
                "Relationship has an empty endpoint.",
            );
            continue;
        }

        if (!predicates[triple.predicate]) {
            addIssue(
                "error",
                "INVALID_PREDICATE",
                `Unknown predicate: ${triple.predicate}`,
            );
        }

        if (!validEndpoints.has(triple.subject)) {
            addIssue(
                "error",
                "INVALID_GRAPH_SUBJECT",
                `Unknown graph subject: ${triple.subject}`,
            );
        }

        if (!validEndpoints.has(triple.object)) {
            addIssue(
                "error",
                "INVALID_GRAPH_OBJECT",
                `Unknown graph object: ${triple.object}`,
            );
        }

        if (
            !Number.isFinite(triple.confidence) ||
            triple.confidence < 0 ||
            triple.confidence > 1
        ) {
            addIssue(
                "error",
                "INVALID_CONFIDENCE",
                `Invalid confidence in relationship: ${triple.subject}`,
            );
        }

        if (
            !["editorial", "derived", "imported"].includes(triple.source)
        ) {
            addIssue(
                "error",
                "INVALID_RELATIONSHIP_SOURCE",
                `Invalid relationship source: ${triple.subject}`,
            );
        }

        if (articleIds.has(triple.subject)) {
            connectedArticles.add(triple.subject);
        }

        if (articleIds.has(triple.object)) {
            connectedArticles.add(triple.object);
        }
    }

    // ------------------------------------------
    // 4. ARTICLE CONNECTIVITY
    // ------------------------------------------

    for (const article of articles) {
        if (!connectedArticles.has(article.id)) {
            addIssue(
                "warning",
                "ORPHANED_ARTICLE",
                `${article.slug} has no graph relationships.`,
            );
        }
    }

    // ------------------------------------------
    // 5. ORPHANED ENTITY DETECTION
    // ------------------------------------------

    for (const entity of Object.values(entities)) {
        if (
            entity.type !== "utility" &&
            entity.type !== "resource" &&
            !referencedEntities.has(entity.id)
        ) {
            addIssue(
                "warning",
                "UNREFERENCED_ENTITY",
                `${entity.id} is not referenced by any article.`,
            );
        }
    }

    return issues;
}
