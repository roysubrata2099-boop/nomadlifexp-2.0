// src/lib/ontology/articleGraph.ts

import { entities } from "./entities";
import type { SemanticTriple } from "./graph";
import { buildGraph } from "./graph";
import { articleOntology } from "./articles";

const articleTriples: SemanticTriple[] = [];

for (const article of Object.values(articleOntology)) {
    // Article → primary pillar
    articleTriples.push({
        subject: article.id,
        predicate: "classifiedAs",
        object: article.primaryPillar,
        confidence: 1,
        source: "editorial",
    });

    // Article → semantic entities
    for (const entityId of article.entities) {
        articleTriples.push({
            subject: article.id,
            predicate: "explains",
            object: entityId,
            confidence: 0.9,
            source: "derived",
        });
    }

    // Article → editorial related articles
    for (const relatedSlug of article.relatedArticles) {
        articleTriples.push({
            subject: article.id,
            predicate: "relatedTo",
            object: relatedSlug,
            confidence: 1,
            source: "editorial",
        });
    }
}

export const articleGraph = buildGraph(
    entities,
    articleTriples,
);
