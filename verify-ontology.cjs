const fs = require("fs");

const file = "src/lib/ontology/articles.ts";
const source = fs.readFileSync(file, "utf8");

const articleIds = [...source.matchAll(
  /^\s{4}["']([^"']+)["']:\s*\{/gm
)].map(m => m[1]);

const articleIdSet = new Set(articleIds);

const relatedBlocks = [...source.matchAll(
  /relatedArticles:\s*\[([\s\S]*?)\]/g
)];

const relationships = [];
const broken = [];

for (const block of relatedBlocks) {
  const refs = [...block[1].matchAll(
    /["']([^"']+)["']/g
  )].map(m => m[1]);

  relationships.push(...refs);

  for (const ref of refs) {
    if (!articleIdSet.has(ref)) {
      broken.push(ref);
    }
  }
}

const uniqueBroken = [...new Set(broken)];

console.log("");
console.log("=== NOMADLIFEXP ONTOLOGY VERIFICATION ===");
console.log("");
console.log("Ontology entries:       ", articleIds.length);
console.log("Related-article blocks: ", relatedBlocks.length);
console.log("Total relationships:    ", relationships.length);
console.log("Articles with links:    ", relatedBlocks.filter(b => b[1].match(/["'][^"']+["']/)).length);
console.log("Broken references:      ", uniqueBroken.length);

if (uniqueBroken.length > 0) {
  console.log("");
  console.log("BROKEN REFERENCES:");
  uniqueBroken.forEach(x => console.log(" -", x));
  process.exitCode = 1;
} else {
  console.log("");
  console.log("✓ All relatedArticle references resolve.");
}

console.log("");
