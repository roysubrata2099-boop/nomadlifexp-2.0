import {
    articleOntology,
    entities,
    articleGraph,
    validateOntology,
} from "../lib/ontology";

import {
    auditArticleOntology,
} from "../lib/ontology/integrity";

const ontologyIssues = validateOntology();
const contentAudit = auditArticleOntology();

const issues = [
    ...ontologyIssues,
    ...contentAudit.issues,
];

const errors = issues.filter(
    issue => issue.severity === "error"
);

const warnings = issues.filter(
    issue => issue.severity === "warning"
);

console.log("\n==========================================");
console.log(" NOMADLIFEXP UNIFIED ONTOLOGY AUDIT");
console.log("==========================================\n");

console.log("Ontology articles:", Object.keys(articleOntology).length);
console.log("Registered entities:", Object.keys(entities).length);
console.log("Graph relationships:", articleGraph.triples.length);

console.log("\n--- MDX CONTENT INTEGRITY ---\n");

console.log("MDX articles:", contentAudit.totalMDXArticles);
console.log("Ontology articles:", contentAudit.totalOntologyArticles);

console.log(
    "Missing ontology entries:",
    contentAudit.missingFromOntology.length
);

console.log(
    "Ontology entries without MDX:",
    contentAudit.missingFromMDX.length
);

console.log(
    "Broken editorial relationships:",
    contentAudit.brokenRelationships.length
);

console.log("\n--- VALIDATION RESULTS ---\n");

console.log("Total errors:", errors.length);
console.log("Total warnings:", warnings.length);

if (issues.length > 0) {
    console.log("\nVALIDATION DETAILS:\n");

    for (const issue of issues) {
        console.log(
            `[${issue.severity.toUpperCase()}] ${issue.code}: ${issue.message}`
        );
    }
}

console.log("\n==========================================");

if (errors.length === 0) {
    console.log("ONTOLOGY AND MDX VALIDATION PASSED");
} else {
    console.log("ONTOLOGY AND MDX VALIDATION FAILED");
}

console.log("==========================================\n");

if (errors.length > 0) {
    process.exitCode = 1;
}
