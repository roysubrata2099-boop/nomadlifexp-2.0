const fs = require("fs");

const file = "src/lib/ontology/articles.ts";
const source = fs.readFileSync(file, "utf8");

const articleIds = [...source.matchAll(
  /^\s{4}["']([^"']+)["']:\s*\{/gm
)].map(m => m[1]);

const articleIdSet = new Set(articleIds);

const relatedBlocks = [...source.matchAll(
  /(["'])([^"']+)\1:\s*\{([\s\S]*?)relatedArticles:\s*\[([\s\S]*?)\]/g
)];

const outbound = new Map();
const inbound = new Map();
const broken = [];

for (const id of articleIds) {
  outbound.set(id, []);
  inbound.set(id, []);
}

for (const block of relatedBlocks) {
  const articleId = block[2];
  const relatedContent = block[4];

  const refs = [...relatedContent.matchAll(
    /["']([^"']+)["']/g
  )].map(m => m[1]);

  outbound.set(articleId, refs);

  for (const ref of refs) {
    if (!articleIdSet.has(ref)) {
      broken.push(ref);
      continue;
    }

    inbound.get(ref).push(articleId);
  }
}

const uniqueBroken = [...new Set(broken)];

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
console.log("=== NOMADLIFEXP ONTOLOGY VERIFICATION ===");
console.log("");

console.log("Ontology entries:          ", articleIds.length);
console.log("Related-article blocks:   ", relatedBlocks.length);

const totalRelationships = [...outbound.values()]
  .reduce((total, refs) => total + refs.length, 0);

console.log("Total relationships:       ", totalRelationships);
console.log(
  "Articles with outbound:    ",
  articleIds.length - withoutOutbound.length
);
console.log(
  "Articles without outbound: ",
  withoutOutbound.length
);
console.log(
  "Articles without inbound:  ",
  withoutInbound.length
);
console.log(
  "True orphan articles:      ",
  orphans.length
);
console.log("Broken references:         ", uniqueBroken.length);

if (withoutOutbound.length > 0) {
  console.log("");
  console.log("ARTICLES WITHOUT OUTBOUND LINKS:");

  withoutOutbound.forEach(id => {
    console.log(" -", id);
  });
}

if (withoutInbound.length > 0) {
  console.log("");
  console.log("ARTICLES WITHOUT INBOUND LINKS:");

  withoutInbound.forEach(id => {
    console.log(" -", id);
  });
}

if (orphans.length > 0) {
  console.log("");
  console.log("TRUE ORPHAN ARTICLES:");

  orphans.forEach(id => {
    console.log(" -", id);
  });
}

if (uniqueBroken.length > 0) {
  console.log("");
  console.log("BROKEN REFERENCES:");

  uniqueBroken.forEach(x => {
    console.log(" -", x);
  });

  process.exitCode = 1;
} else {
  console.log("");
  console.log("✓ All relatedArticle references resolve.");
}

console.log("");
