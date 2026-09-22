/**
 * NomadLifeXP — Internal Linking Intelligence Layer
 *
 * SAFETY CONTRACT
 * --------------
 * This module is READ-ONLY.
 *
 * It does NOT:
 * - modify MDX files
 * - modify posts.json
 * - modify relatedArticles
 * - modify routes
 * - modify metadata
 * - create redirects
 * - change canonical URLs
 * - write files
 *
 * Editorial authority:
 *   existing relatedArticles
 *
 * The functions below only analyse existing article data and return
 * deterministic suggestions / validation results.
 */

export type ArticleLink = {
    slug: string;
    title?: string;
    category?: string;
};

export type OntologyArticle = {
    id: string;
    slug: string;
    title: string;
    category?: string;
    tags?: readonly string[];

    /**
     * Existing manually/editorially selected relationships.
     * These remain authoritative.
     */
    relatedArticles?: readonly string[];

    /**
     * Optional contextual metadata.
     * The system works without these fields.
     */
    keywords?: readonly string[];
    topics?: readonly string[];
};

export type ArticleCandidate = {
    article: OntologyArticle;
    score: number;
    reasons: readonly string[];
};

export type OntologyValidation = {
    valid: boolean;
    articles: number;
    relationships: number;
    brokenReferences: readonly {
        sourceId: string;
        targetId: string;
    }[];
    selfReferences: readonly string[];
    duplicateRelationships: readonly {
        sourceId: string;
        targetId: string;
    }[];
};

/* -------------------------------------------------------------------------- */
/* Normalisation                                                              */
/* -------------------------------------------------------------------------- */

function normalize(value: string): string {
    return value
        .toLowerCase()
        .trim()
        .replace(/[-_]+/g, " ")
        .replace(/\s+/g, " ");
}

function normalizeList(values?: readonly string[]): string[] {
    if (!values) return [];

    return values
        .map(normalize)
        .filter(Boolean);
}


/* -------------------------------------------------------------------------- */
/* Article lookup                                                             */
/* -------------------------------------------------------------------------- */

function buildArticleMap(
    articles: readonly OntologyArticle[],
): Map<string, OntologyArticle> {
    return new Map(articles.map((article) => [article.id, article]));
}

function getArticle(
    articles: readonly OntologyArticle[],
    articleId: string,
): OntologyArticle | undefined {
    return buildArticleMap(articles).get(articleId);
}

/* -------------------------------------------------------------------------- */
/* Editorial authority                                                       */
/* -------------------------------------------------------------------------- */

/**
 * Existing relatedArticles are the editorial authority.
 *
 * This function intentionally does not calculate anything.
 * It simply exposes the relationships already approved by the editor.
 */
export function getEditorialRelatedArticles(
    articles: readonly OntologyArticle[],
    articleId: string,
): OntologyArticle[] {
    const article = getArticle(articles, articleId);

    if (!article || !article.relatedArticles?.length) {
        return [];
    }

    const articleMap = buildArticleMap(articles);

    return article.relatedArticles
        .map((id) => articleMap.get(id))
        .filter((item): item is OntologyArticle => Boolean(item));
}

/* -------------------------------------------------------------------------- */
/* Candidate discovery                                                        */
/* -------------------------------------------------------------------------- */

/**
 * Finds possible related articles without changing editorial relationships.
 *
 * Candidates are suggestions only.
 */
export function getArticleCandidates(
    articles: readonly OntologyArticle[],
    articleId: string,
): OntologyArticle[] {
    const source = getArticle(articles, articleId);

    if (!source) return [];

    const editorialIds = new Set(source.relatedArticles ?? []);

    return articles.filter((article) => {
        if (article.id === source.id) return false;

        // Existing editorial relationships are already known.
        if (editorialIds.has(article.id)) return false;

        return true;
    });
}

/* -------------------------------------------------------------------------- */
/* Relationship scoring                                                       */
/* -------------------------------------------------------------------------- */

export function scoreArticleRelationship(
    articles: readonly OntologyArticle[],
    sourceId: string,
    targetId: string,
): number {
    const source = getArticle(articles, sourceId);
    const target = getArticle(articles, targetId);

    if (!source || !target) return 0;
    if (source.id === target.id) return 0;

    let score = 0;

    const sourceCategory = normalize(source.category ?? "");
    const targetCategory = normalize(target.category ?? "");

    const sourceTags = new Set(normalizeList(source.tags));
    const targetTags = new Set(normalizeList(target.tags));

    const sourceKeywords = new Set(normalizeList(source.keywords));
    const targetKeywords = new Set(normalizeList(target.keywords));

    const sourceTopics = new Set(normalizeList(source.topics));
    const targetTopics = new Set(normalizeList(target.topics));

    /* Same pillar/category */
    if (
        sourceCategory &&
        targetCategory &&
        sourceCategory === targetCategory
    ) {
        score += 40;
    }

    /* Shared tags */
    const sharedTags = [...sourceTags].filter((tag) =>
        targetTags.has(tag),
    );

    score += Math.min(sharedTags.length * 10, 30);

    /* Shared keywords */
    const sharedKeywords = [...sourceKeywords].filter((keyword) =>
        targetKeywords.has(keyword),
    );

    score += Math.min(sharedKeywords.length * 5, 20);

    /* Shared topics */
    const sharedTopics = [...sourceTopics].filter((topic) =>
        targetTopics.has(topic),
    );

    score += Math.min(sharedTopics.length * 5, 20);

    /* Existing editorial relationship gets highest confidence */
    if (source.relatedArticles?.includes(target.id)) {
        score += 100;
    }

    return Math.min(score, 100);
}

/* -------------------------------------------------------------------------- */
/* Intelligent related articles                                               */
/* -------------------------------------------------------------------------- */

/**
 * Returns existing editorial relationships first.
 *
 * Optional calculated candidates are returned only when requested.
 *
 * IMPORTANT:
 * This function does not mutate relatedArticles.
 */
export function getRelatedArticles(
    articles: readonly OntologyArticle[],
    articleId: string,
    options: {
        includeSuggestions?: boolean;
        limit?: number;
    } = {},
): ArticleCandidate[] {
    const source = getArticle(articles, articleId);

    if (!source) return [];

    const limit = Math.max(1, options.limit ?? 6);

    const editorial = getEditorialRelatedArticles(
        articles,
        articleId,
    );

    const editorialResults: ArticleCandidate[] = editorial.map(
        (article) => ({
            article,
            score: 100,
            reasons: ["Editorial relationship"],
        }),
    );

    /*
     * Editorial authority is preserved.
     *
     * By default, do not introduce automatically calculated links.
     */
    if (!options.includeSuggestions) {
        return editorialResults.slice(0, limit);
    }

    const editorialIds = new Set(
        editorial.map((article) => article.id),
    );

    const candidates = getArticleCandidates(
        articles,
        articleId,
    );

    const suggestions: ArticleCandidate[] = candidates
        .map((article) => {
            const score = scoreArticleRelationship(
                articles,
                articleId,
                article.id,
            );

            const reasons: string[] = [];

            if (
                source.category &&
                article.category &&
                normalize(source.category) === normalize(article.category)
            ) {
                reasons.push("Same pillar");
            }

            const sharedTags = normalizeList(source.tags).filter((tag) =>
                normalizeList(article.tags).includes(tag),
            );

            if (sharedTags.length > 0) {
                reasons.push(`Shared tags: ${sharedTags.join(", ")}`);
            }

            const sharedTopics = normalizeList(source.topics).filter((topic) =>
                normalizeList(article.topics).includes(topic),
            );

            if (sharedTopics.length > 0) {
                reasons.push(`Shared topics: ${sharedTopics.join(", ")}`);
            }

            return {
                article,
                score,
                reasons,
            };
        })
        .filter(
            (candidate) =>
                candidate.score > 0 &&
                !editorialIds.has(candidate.article.id),
        )
        .sort((a, b) => b.score - a.score);

    return [
        ...editorialResults,
        ...suggestions,
    ].slice(0, limit);
}

/* -------------------------------------------------------------------------- */
/* Pillar relationships                                                       */
/* -------------------------------------------------------------------------- */

export function getPillarLinks(
    articles: readonly OntologyArticle[],
    articleId: string,
): OntologyArticle[] {
    const source = getArticle(articles, articleId);

    if (!source || !source.category) return [];

    const category = normalize(source.category);

    return articles.filter((article) => {
        if (article.id === source.id) return false;

        return normalize(article.category ?? "") === category;
    });
}

/* -------------------------------------------------------------------------- */
/* Context relationships                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Finds articles that share meaningful semantic context.
 *
 * This is deliberately separate from getRelatedArticles()
 * so UI components can choose whether they want:
 *
 * - editorial links
 * - pillar links
 * - contextual suggestions
 */
export function getContextLinks(
    articles: readonly OntologyArticle[],
    articleId: string,
    limit = 6,
): OntologyArticle[] {
    const source = getArticle(articles, articleId);

    if (!source) return [];

    const sourceTags = new Set(normalizeList(source.tags));
    const sourceKeywords = new Set(normalizeList(source.keywords));
    const sourceTopics = new Set(normalizeList(source.topics));

    return articles
        .filter((article) => article.id !== source.id)
        .map((article) => {
            const tags = normalizeList(article.tags);
            const keywords = normalizeList(article.keywords);
            const topics = normalizeList(article.topics);

            const sharedTags = tags.filter((tag) => sourceTags.has(tag)).length;
            const sharedKeywords = keywords.filter((keyword) =>
                sourceKeywords.has(keyword),
            ).length;
            const sharedTopics = topics.filter((topic) =>
                sourceTopics.has(topic),
            ).length;

            const score =
                sharedTags * 10 +
                sharedKeywords * 5 +
                sharedTopics * 5;

            return {
                article,
                score,
            };
        })
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map((item) => item.article);
}

/* -------------------------------------------------------------------------- */
/* Ontology validation                                                        */
/* -------------------------------------------------------------------------- */

/**
 * Validates the existing ontology.
 *
 * This function NEVER changes anything.
 */
export function validateArticleOntology(
    articles: readonly OntologyArticle[],
): OntologyValidation {
    const articleMap = buildArticleMap(articles);

    const brokenReferences: {
        sourceId: string;
        targetId: string;
    }[] = [];

    const selfReferences: string[] = [];

    const duplicateRelationships: {
        sourceId: string;
        targetId: string;
    }[] = [];

    let relationships = 0;

    for (const article of articles) {
        const related = article.relatedArticles ?? [];

        relationships += related.length;

        const seen = new Set<string>();

        for (const targetId of related) {
            if (targetId === article.id) {
                selfReferences.push(article.id);
            }

            if (!articleMap.has(targetId)) {
                brokenReferences.push({
                    sourceId: article.id,
                    targetId,
                });
            }

            if (seen.has(targetId)) {
                duplicateRelationships.push({
                    sourceId: article.id,
                    targetId,
                });
            }

            seen.add(targetId);
        }
    }

    const valid =
        brokenReferences.length === 0 &&
        selfReferences.length === 0 &&
        duplicateRelationships.length === 0;

    return {
        valid,
        articles: articles.length,
        relationships,
        brokenReferences,
        selfReferences,
        duplicateRelationships,
    };
}
