// src/lib/ontology/predicates.ts

export type Predicate =
  | "classifiedAs"
  | "contains"
  | "relatedTo"
  | "explains"
  | "supports"
  | "improves"
  | "reduces"
  | "requires"
  | "appliesTo"
  | "partOf"
  | "belongsTo"
  | "discoverableFrom"
  | "recommendedBy"
  | "externalResourceFor";

export interface PredicateDefinition {
  id: Predicate;
  label: string;
  directional: boolean;
  inverse?: string;
}

export const predicates: Record<
  Predicate,
  PredicateDefinition
> = {
  classifiedAs: {
    id: "classifiedAs",
    label: "classified as",
    directional: true,
    inverse: "classificationOf",
  },

  contains: {
    id: "contains",
    label: "contains",
    directional: true,
    inverse: "containedBy",
  },

  relatedTo: {
    id: "relatedTo",
    label: "related to",
    directional: false,
    inverse: "relatedTo",
  },

  explains: {
    id: "explains",
    label: "explains",
    directional: true,
    inverse: "explainedBy",
  },

  supports: {
    id: "supports",
    label: "supports",
    directional: true,
    inverse: "supportedBy",
  },

  improves: {
    id: "improves",
    label: "improves",
    directional: true,
    inverse: "improvedBy",
  },

  reduces: {
    id: "reduces",
    label: "reduces",
    directional: true,
    inverse: "reducedBy",
  },

  requires: {
    id: "requires",
    label: "requires",
    directional: true,
    inverse: "requiredBy",
  },

  appliesTo: {
    id: "appliesTo",
    label: "applies to",
    directional: true,
    inverse: "applicationOf",
  },

  partOf: {
    id: "partOf",
    label: "part of",
    directional: true,
    inverse: "contains",
  },

  belongsTo: {
    id: "belongsTo",
    label: "belongs to",
    directional: true,
    inverse: "contains",
  },

  discoverableFrom: {
    id: "discoverableFrom",
    label: "discoverable from",
    directional: true,
    inverse: "discoverySourceFor",
  },

  recommendedBy: {
    id: "recommendedBy",
    label: "recommended by",
    directional: true,
    inverse: "recommends",
  },

  externalResourceFor: {
    id: "externalResourceFor",
    label: "external resource for",
    directional: true,
    inverse: "hasExternalResource",
  },
};
