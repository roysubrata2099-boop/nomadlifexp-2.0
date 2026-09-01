// src/lib/ontology/graph.ts

import type { OntologyEntity } from "./entities";
import type { Predicate } from "./predicates";

export interface SemanticTriple {
    subject: string;
    predicate: Predicate;
    object: string;

    /**
     * Confidence score from 0 to 1.
     *
     * 1.0 = explicitly defined/editorial
     * Lower values = inferred/derived
     */
    confidence: number;

    /**
     * How the relationship was created.
     */
    source: "editorial" | "derived" | "imported";
}

export interface EntityGraph {
    entities: Record<string, OntologyEntity>;
    triples: SemanticTriple[];
    outgoing: Map<string, SemanticTriple[]>;
    incoming: Map<string, SemanticTriple[]>;
}

/**
 * Build an in-memory semantic graph.
 *
 * This function does not modify the website,
 * MDX files, routes, or page rendering.
 */
export function buildGraph(
    entities: Record<string, OntologyEntity>,
    triples: SemanticTriple[],
): EntityGraph {
    const outgoing = new Map<
        string,
        SemanticTriple[]
    >();

    const incoming = new Map<
        string,
        SemanticTriple[]
    >();

    for (const triple of triples) {
        // --------------------------------------------
        // Outgoing relationships
        // --------------------------------------------

        const outgoingRelations =
            outgoing.get(triple.subject) ?? [];

        outgoingRelations.push(triple);

        outgoing.set(
            triple.subject,
            outgoingRelations,
        );

        // --------------------------------------------
        // Incoming relationships
        // --------------------------------------------

        const incomingRelations =
            incoming.get(triple.object) ?? [];

        incomingRelations.push(triple);

        incoming.set(
            triple.object,
            incomingRelations,
        );
    }

    return {
        entities,
        triples,
        outgoing,
        incoming,
    };
}

/**
 * Get relationships originating from an entity.
 */
export function getOutgoingRelations(
    graph: EntityGraph,
    entityId: string,
): SemanticTriple[] {
    return graph.outgoing.get(entityId) ?? [];
}

/**
 * Get relationships pointing toward an entity.
 */
export function getIncomingRelations(
    graph: EntityGraph,
    entityId: string,
): SemanticTriple[] {
    return graph.incoming.get(entityId) ?? [];
}

/**
 * Get both incoming and outgoing relationships.
 */
export function getAllRelations(
    graph: EntityGraph,
    entityId: string,
): SemanticTriple[] {
    return [
        ...getOutgoingRelations(graph, entityId),
        ...getIncomingRelations(graph, entityId),
    ];
}

/**
 * Get IDs of entities connected to an entity.
 */
export function getRelatedEntityIds(
    graph: EntityGraph,
    entityId: string,
): string[] {
    const outgoing = getOutgoingRelations(
        graph,
        entityId,
    );

    const incoming = getIncomingRelations(
        graph,
        entityId,
    );

    return Array.from(
        new Set([
            ...outgoing.map(
                (triple) => triple.object,
            ),

            ...incoming.map(
                (triple) => triple.subject,
            ),
        ]),
    );
}
