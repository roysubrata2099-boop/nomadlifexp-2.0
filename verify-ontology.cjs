const fs = require("node:fs");
const path = require("node:path");

const file = path.join(
    process.cwd(),
    "src/lib/ontology/articles.ts"
);

if (!fs.existsSync(file)) {
    console.error("Article ontology file not found.");
    process.exit(1);
}

const source = fs.readFileSync(file, "utf8");

const articleIds = [
    ...source.matchAll(
        /^\s{4}["']([^"']+)["']:\s*\{/gm
    )
].map(match => match[1]);

const articleSet = new Set(articleIds);

const issues = [];
const outbound = new Map();
const inbound = new Map();

for (const id of articleIds) {
    outbound.set(id, []);
    inbound.set(id, []);
}

if (articleIds.length === 0) {
    console.error("No ontology articles detected.");
    process.exit(1);
}

if (articleSet.size !== articleIds.length) {
    issues.push("Duplicate article registry keys detected.");
}

const relatedBlocks = [
    ...source.matchAll(
        /(["'])([^"']+)\1:\s*\{([\s\S]*?)relatedArticles:\s*\[([\s\S]*?)\]/g
    )
];

for (const block of relatedBlocks) {
    const articleId = block[2];
    const relatedContent = block[4];

    if (!articleSet.has(articleId)) {
        issues.push(
            `Unknown relationship source: ${articleId}`
        );
        continue;
    }

    const refs = [
        ...relatedContent.matchAll(/["']([^"']+)["']/g)
    ].map(match => match[1]);

    outbound.set(articleId, refs);

    const uniqueRefs = new Set(refs);

    if (uniqueRefs.size !== refs.length) {
        issues.push(
            `Duplicate relationships in ${articleId}`
        );
    }

    for (const ref of refs) {
        if (ref === articleId) {
            issues.push(
                `Self-reference detected: ${articleId}`
            );
            continue;
        }

        if (!articleSet.has(ref)) {
            issues.push(
                `Broken relationship: ${articleId} -> ${ref}`
            );
            continue;
        }

        inbound.get(ref).push(articleId);
    }
}

if (relatedBlocks.length !== articleIds.length) {
    issues.push(
        `Registry mismatch: ${articleIds.length} articles, ` +
        `${relatedBlocks.length} relationship blocks.`
    );
}

const totalRelationships = [
    ...outbound.values()
].reduce((sum, refs) => sum + refs.length, 0);

const withoutOutbound = articleIds.filter(
    id => outbound.get(id).length === 0
);

const withoutInbound = articleIds.filter(
    id => inbound.get(id).length === 0
);

const orphans = articleIds.filter(
    id =>
        outbound.get(id).length === 0 &&
        inbound.get(id).length === 0
);

console.log("");
console.log("==========================================");
console.log(" NOMADLIFEXP ONTOLOGY VERIFICATION");
console.log("==========================================");
console.log("");

console.log("Registered articles:", articleIds.length);
console.log("Relationship blocks:", relatedBlocks.length);
console.log("Total relationships:", totalRelationships);
console.log("Without outbound:", withoutOutbound.length);
console.log("Without inbound:", withoutInbound.length);
console.log("True orphans:", orphans.length);
console.log("Verification errors:", issues.length);

if (withoutOutbound.length) {
    console.log("\nARTICLES WITHOUT OUTBOUND RELATIONSHIPS:");

    withoutOutbound.forEach(id =>
        console.log(" -", id)
    );
}

if (withoutInbound.length) {
    console.log("\nARTICLES WITHOUT INBOUND RELATIONSHIPS:");

    withoutInbound.forEach(id =>
        console.log(" -", id)
    );
}

if (issues.length) {
    console.error("\nVERIFICATION ISSUES:");

    issues.forEach(issue =>
        console.error(" -", issue)
    );

    console.error("\nONTOLOGY VERIFICATION FAILED.");
    process.exit(1);
}

console.log("");
console.log("All registered article relationships resolve.");
console.log("No duplicate or self-referencing relationships.");
console.log("ONTOLOGY VERIFICATION PASSED.");
console.log("");
