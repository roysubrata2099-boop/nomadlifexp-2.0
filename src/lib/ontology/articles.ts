// src/lib/ontology/articles.ts

export type ArticlePillar =
    | "discipline"
    | "fitness"
    | "yoga"
    | "mindset";

export type ArticleContext =
    | "core"
    | "digital-nomad";

export interface OntologyArticle {
    id: string;
    slug: string;
    title: string;

    primaryPillar: ArticlePillar;

    contexts: ArticleContext[];

    entities: string[];

    relatedArticles: string[];
}

export const articleOntology: Record<
    string,
    OntologyArticle
> = {
    "forearm-stand-yoga-focus-confidence": {
        id: "forearm-stand-yoga-focus-confidence",

        slug: "forearm-stand-yoga-focus-confidence",

        title:
            "What Happens When You Try Forearm Stand Yoga for Focus and Confidence",

        primaryPillar: "yoga",

        contexts: [
            "core",
        ],

        entities: [
            "yoga",
            "forearm-stand",
            "focus",
            "confidence",
            "body-awareness",
            "emotional-control",
            "mental-clarity",
        ],

        relatedArticles: [
            "headstand-yoga-balance-strength",
            "forward-bending-yoga-stress-relief",
            "fitness-consistency-myth-showing-up",
            "mental-clarity-inner-awareness",
            "stuck-in-life-reset",
        ],
    },
};
