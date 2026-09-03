const fs = require("fs");

const file = "src/lib/ontology/articles.ts";
let source = fs.readFileSync(file, "utf8");

const additions = {
  "fitness-for-digital-nomads": [
    "fitness-is-not-about-time",
    "build-workout-habit-outlast-motivation",
  ],

  "mental-clarity-for-digital-nomads": [
    "mental-clarity-stop-overthinking-and-regain-focus",
    "rebuild-your-attention-span",
  ],

  "self-discipline-while-traveling": [
    "discipline-creates-freedom",
    "self-discipline-comprehensive-guide",
  ],

  "yoga-for-digital-nomads": [
    "forearm-stand-yoga-focus-confidence",
    "forward-bending-yoga-stress-relief",
  ],
};

for (const [slug, relatedArticles] of Object.entries(additions)) {
  const escapedSlug = slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const pattern = new RegExp(
    `("${escapedSlug}":\\s*\\{[\\s\\S]*?relatedArticles:\\s*\\[)([\\s\\S]*?)(\\]\\s*,)`,
  );

  const match = source.match(pattern);

  if (!match) {
    throw new Error(`Could not find article: ${slug}`);
  }

  const existing = match[2];

  if (existing.trim().length > 0) {
    console.log(`Skipping ${slug}: relatedArticles is not empty.`);
    continue;
  }

  const formatted = relatedArticles
    .map((article) => `            "${article}",`)
    .join("\n");

  source = source.replace(
    pattern,
    `$1\n${formatted}\n        $3`,
  );

  console.log(`Updated: ${slug}`);
}

fs.writeFileSync(file, source, "utf8");

console.log("");
console.log("✓ Digital-nomad orphan relationships added.");
