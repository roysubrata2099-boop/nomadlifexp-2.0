

import { getAllMDXPosts } from "@/lib/mdx-reader";
import { articleOntology } from "./articles";

export type OntologyIssue = {
    code: string;
    severity: "error" | "warning";
    source?: string;
    target?: string;
    message: string;
};

export type OntologyAudit = {
    totalMDXArticles: number;
    totalOntologyArticles: number;
    missingFromOntology: string[];
    missingFromMDX: string[];
    brokenRelationships: {
        source: string;
        target: string;
    }[];
    issues: OntologyIssue[];
    healthy: boolean;
};

function normalizeSlug(value: unknown): string {
    if (typeof value !== "string") return "";

    return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
}

export function auditArticleOntology(): OntologyAudit {
    const posts = getAllMDXPosts();

    const issues: OntologyIssue[] = [];

    const mdxSlugs = new Set(
        posts.map(post => normalizeSlug(post.slug))
            .filter(Boolean)
    );

    const ontologyEntries = Object.entries(articleOntology);

    const ontologySlugs = new Set(
        ontologyEntries.map(([key]) => normalizeSlug(key))
    );

    const missingFromOntology = [...mdxSlugs]
        .filter(slug => !ontologySlugs.has(slug))
        .sort();

    const missingFromMDX = [...ontologySlugs]
        .filter(slug => !mdxSlugs.has(slug))
        .sort();

    const brokenRelationships: {
        source: string;
        target: string;
    }[] = [];

    // Check MDX coverage.
    for (const slug of missingFromOntology) {
        issues.push({
            code: "MISSING_ONTOLOGY_ENTRY",
            severity: "warning",
            source: slug,
            message: `Published MDX article "${slug}" has no ontology entry.`,
        });
    }

    // Check ontology entries and relationships.
    for (const [key, article] of ontologyEntries) {
        const slug = normalizeSlug(key);

        if (!article) continue;

        if (normalizeSlug(article.slug) !== slug) {
            issues.push({
                code: "SLUG_MISMATCH",
                severity: "error",
                source: key,
                message: "Ontology key and article slug do not match.",
            });
        }

        if (normalizeSlug(article.id) !== slug) {
            issues.push({
                code: "ID_MISMATCH",
                severity: "warning",
                source: key,
                message: "Article ID differs from its normalized slug.",
            });
        }

        if (!article.title?.trim()) {
            issues.push({
                code: "MISSING_TITLE",
                severity: "error",
                source: key,
                message: "Article title is empty.",
            });
        }

        if (!["discipline", "fitness", "yoga", "mindset"].includes(article.primaryPillar)) {
            issues.push({
                code: "INVALID_PILLAR",
                severity: "error",
                source: key,
                message: "Article has an unsupported primary pillar.",
            });
        }

        const validContexts = ["core", "digital-nomad"];

        for (const context of article.contexts) {
            if (!validContexts.includes(context)) {
                issues.push({
                    code: "INVALID_CONTEXT",
                    severity: "error",
                    source: key,
                    target: context,
                    message: "Article contains an unsupported context.",
                });
            }
        }

        if (new Set(article.entities).size !== article.entities.length) {
            issues.push({
                code: "DUPLICATE_ENTITY",
                severity: "warning",
                source: key,
                message: "Article contains duplicate semantic entities.",
            });
        }

        if (new Set(article.relatedArticles).size !== article.relatedArticles.length) {
            issues.push({
                code: "DUPLICATE_RELATION",
                severity: "warning",
                source: key,
                message: "Article contains duplicate editorial relationships.",
            });
        }

        for (const relatedSlug of article.relatedArticles) {
            const target = normalizeSlug(relatedSlug);

            if (target === slug) {
                issues.push({
                    code: "SELF_REFERENCE",
                    severity: "warning",
                    source: slug,
                    target,
                    message: "Article references itself.",
                });

                continue;
            }

            if (!ontologySlugs.has(target)) {
                brokenRelationships.push({
                    source: slug,
                    target,
                });

                issues.push({
                    code: "BROKEN_RELATIONSHIP",
                    severity: "error",
                    source: slug,
                    target,
                    message: `Related article "${target}" does not exist in the ontology.`,
                });

                continue;
            }

            if (!mdxSlugs.has(target)) {
                issues.push({
                    code: "UNPUBLISHED_RELATIONSHIP",
                    severity: "warning",
                    source: slug,
                    target,
                    message: `Related article "${target}" has no matching MDX content.`,
                });
            }
        }
    }

    return {
        totalMDXArticles: mdxSlugs.size,
        totalOntologyArticles: ontologySlugs.size,
        missingFromOntology,
        missingFromMDX,
        brokenRelationships,
        issues,
        healthy: issues.every(issue => issue.severity !== "error"),
    };
}

