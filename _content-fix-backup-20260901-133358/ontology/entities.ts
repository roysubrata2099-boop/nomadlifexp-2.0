// src/lib/ontology/entities.ts

export type EntityType =
    | "pillar"
    | "concept"
    | "practice"
    | "context"
    | "support"
    | "utility"
    | "resource";

export type PageRole =
    | "core-pillar"
    | "digital-nomad-context"
    | "support"
    | "utility"
    | "external-resource";

export interface OntologyEntity {
    id: string;
    type: EntityType;
    name: string;
    aliases: string[];
    summary: string;
    keywords: string[];
    href?: string;
    linkable: boolean;
    pageRole?: PageRole;
}

export const entities: Record<string, OntologyEntity> = {
    discipline: {
        id: "discipline",
        type: "pillar",
        name: "Discipline",
        aliases: ["discipline", "self-discipline"],
        summary:
            "The practice of developing consistency, structure, and intentional action.",
        keywords: [
            "self discipline",
            "consistency",
            "habits",
            "routine",
            "self control",
        ],
        href: "/discipline",
        linkable: true,
        pageRole: "core-pillar",
    },

    fitness: {
        id: "fitness",
        type: "pillar",
        name: "Fitness",
        aliases: ["fitness", "physical fitness"],
        summary:
            "The development of physical strength, mobility, endurance, health, and capability.",
        keywords: [
            "exercise",
            "training",
            "strength",
            "mobility",
            "endurance",
            "workout",
            "recovery",
        ],
        href: "/fitness",
        linkable: true,
        pageRole: "core-pillar",
    },

    yoga: {
        id: "yoga",
        type: "pillar",
        name: "Yoga",
        aliases: ["yoga", "yogic practice"],
        summary:
            "A practice integrating movement, breath, awareness, and mental presence.",
        keywords: [
            "asana",
            "pranayama",
            "breathwork",
            "meditation",
            "mindfulness",
        ],
        href: "/yoga",
        linkable: true,
        pageRole: "core-pillar",
    },

    mindset: {
        id: "mindset",
        type: "pillar",
        name: "Mindset",
        aliases: ["mindset"],
        summary:
            "The patterns of thought, awareness, perspective, and resilience that shape how we respond to life.",
        keywords: [
            "focus",
            "awareness",
            "resilience",
            "perspective",
            "growth",
            "mental clarity",
        ],
        href: "/mindset",
        linkable: true,
        pageRole: "core-pillar",
    },

    "digital-nomad": {
        id: "digital-nomad",
        type: "context",
        name: "Digital Nomad",
        aliases: [
            "digital nomad",
            "digital nomads",
            "remote worker",
            "location-independent worker",
        ],
        summary:
            "A person who works remotely while maintaining a location-flexible lifestyle.",
        keywords: [
            "remote work",
            "nomad lifestyle",
            "location independent",
            "work from anywhere",
        ],
        linkable: false,
        pageRole: "digital-nomad-context",
    },

    "forearm-stand": {
        id: "forearm-stand",
        type: "practice",
        name: "Forearm Stand",
        aliases: [
            "forearm stand",
            "forearmstand",
            "pincha mayurasana",
            "pincha",
        ],
        summary:
            "An advanced yoga inversion that develops balance, body awareness, concentration, and confidence.",
        keywords: [
            "forearm balance",
            "forearm inversion",
            "pincha mayurasana",
            "pincha",
            "inversion",
        ],
        linkable: true,
    },

    focus: {
        id: "focus",
        type: "concept",
        name: "Focus",
        aliases: [
            "focus",
            "concentration",
            "mental focus",
        ],
        summary:
            "The ability to direct and sustain attention on the present task or experience.",
        keywords: [
            "concentration",
            "attention",
            "mental focus",
            "presence",
        ],
        linkable: true,
    },

    confidence: {
        id: "confidence",
        type: "concept",
        name: "Confidence",
        aliases: [
            "confidence",
            "self-confidence",
            "self trust",
            "self-trust",
        ],
        summary:
            "A grounded sense of trust in your ability to act, learn, adapt, and respond.",
        keywords: [
            "self confidence",
            "self trust",
            "belief",
            "assurance",
        ],
        linkable: true,
    },

    "body-awareness": {
        id: "body-awareness",
        type: "concept",
        name: "Body Awareness",
        aliases: [
            "body awareness",
            "physical awareness",
            "somatic awareness",
        ],
        summary:
            "Awareness of the body's position, movement, sensations, alignment, and physical responses.",
        keywords: [
            "alignment",
            "body awareness",
            "physical awareness",
            "body control",
        ],
        linkable: true,
    },

    "emotional-control": {
        id: "emotional-control",
        type: "concept",
        name: "Emotional Control",
        aliases: [
            "emotional control",
            "emotional regulation",
        ],
        summary:
            "The ability to notice emotional responses and respond deliberately rather than react automatically.",
        keywords: [
            "emotional regulation",
            "emotional control",
            "self regulation",
        ],
        linkable: true,
    },

    "mental-clarity": {
        id: "mental-clarity",
        type: "concept",
        name: "Mental Clarity",
        aliases: [
            "mental clarity",
            "clarity of mind",
        ],
        summary:
            "A state of clear, focused awareness with reduced mental distraction.",
        keywords: [
            "clarity",
            "clear mind",
            "mental clarity",
            "clear thinking",
        ],
        linkable: true,
    },

    recalibration: {
        id: "recalibration",
        type: "support",
        name: "Recalibration",
        aliases: [
            "recalibration",
            "recalibrate",
        ],
        summary:
            "A supporting practice for stepping back, reassessing, and restoring alignment.",
        keywords: [
            "reset",
            "realignment",
            "reflection",
        ],
        linkable: true,
        pageRole: "support",
    },

    "start-here": {
        id: "start-here",
        type: "utility",
        name: "Start Here",
        aliases: [
            "start here",
            "begin here",
        ],
        summary:
            "A starting point for discovering the NomadLifeXP system.",
        keywords: [
            "getting started",
            "begin",
            "introduction",
        ],
        linkable: false,
        pageRole: "utility",
    },

    "knowledge-index": {
        id: "knowledge-index",
        type: "utility",
        name: "Knowledge Index",
        aliases: [
            "knowledge index",
            "knowledge base",
            "index",
        ],
        summary:
            "A discovery layer for navigating NomadLifeXP's knowledge and articles.",
        keywords: [
            "knowledge",
            "articles",
            "topics",
            "index",
        ],
        linkable: false,
        pageRole: "utility",
    },

    "official-resources": {
        id: "official-resources",
        type: "resource",
        name: "Official Resources",
        aliases: [
            "official resources",
            "official resource",
        ],
        summary:
            "A collection of trusted external resources referenced by NomadLifeXP.",
        keywords: [
            "official",
            "resources",
            "external resources",
        ],
        linkable: false,
        pageRole: "external-resource",
    },
};
