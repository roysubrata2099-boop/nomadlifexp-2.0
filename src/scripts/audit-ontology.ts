import {
    articleOntology,
    entities,
    articleGraph,
    validateOntology,
} from "../lib/ontology";

const issues = validateOntology();

const errors = issues.filter(
    issue => issue.severity === "error"
);

const warnings = issues.filter(
    issue => issue.severity === "warning"
);

console.log("\n==================================");
console.log(" NOMADLIFEXP ONTOLOGY AUDIT");
console.log("==================================\n");

console.log("Registered articles:", Object.keys(articleOntology).length);
console.log("Registered entities:", Object.keys(entities).length);
console.log("Graph relationships:", articleGraph.triples.length);

console.log("\nErrors:", errors.length);
console.log("Warnings:", warnings.length);

if (issues.length > 0) {
    console.log("\nVALIDATION ISSUES:\n");

    for (const issue of issues) {
        console.log(
            `[${issue.severity.toUpperCase()}] ${issue.code}: ${issue.message}`
        );
    }
}

console.log("\n==================================");

if (errors.length === 0) {
    console.log("ONTOLOGY VALIDATION PASSED");
} else {
    console.log("ONTOLOGY VALIDATION FAILED");
}

console.log("==================================\n");

if (errors.length > 0) {
    process.exitCode = 1;
}
