export { entities } from "./entities";

export type {
    EntityType,
    PageRole,
    OntologyEntity,
} from "./entities";

export {
    articleOntology,
} from "./articles";

export type {
    ArticlePillar,
    ArticleContext,
    OntologyArticle,
} from "./articles";

export {
    topicMap,
} from "@/data/topic-map";

export {
    articleGraph,
} from "./articleGraph";

export {
    getOutgoingRelations,
    getIncomingRelations,
    getAllRelations,
    getRelatedEntityIds,
} from "./graph";

export {
    getRecommendedArticleSlugs,
} from "./articleRecommendations";

export {
    validateOntology,
} from "./validation";

export type {
    OntologyIssue,
} from "./validation";
