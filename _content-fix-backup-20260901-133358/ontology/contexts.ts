// src/lib/ontology/contexts.ts

export type OntologyContext =
    | "core"
    | "digital-nomad";

export interface OntologyContextDefinition {
    id: OntologyContext;
    name: string;
    summary: string;
}

export const contexts: Record<
    OntologyContext,
    OntologyContextDefinition
> = {
    core: {
        id: "core",
        name: "Core",
        summary:
            "NomadLifeXP's foundational systems for discipline, fitness, yoga, and mindset.",
    },

    "digital-nomad": {
        id: "digital-nomad",
        name: "Digital Nomad",
        summary:
            "The application of NomadLifeXP's core systems to the realities of digital-nomad life.",
    },
};
