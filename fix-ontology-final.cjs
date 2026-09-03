const fs = require("fs");

const file = "src/lib/ontology/articles.ts";
let source = fs.readFileSync(file, "utf8");

const additions = {
  "fitness-is-not-about-time": [
    "fitness-for-digital-nomads",
  ],

  "mental-clarity-stop-overthinking-and-regain-focus": [
    "mental-clarity-for-digital-nomads",
  ],
};

for (const [sourceSlug, targets] of Object.entries(additions)) {
  const escapedSlug = sourceSlug.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&",
  );

  const pattern = new RegExp(
    `("${escapedSlug}":\\s*\\{[\\s\\S]*?relatedArticles:\\s*\\[)([\\s\\S]*?)(\\]\\s*,)`,
  );

  const match = source.match(pattern);

  if (!match) {
    throw new Error(`Could not find article: ${sourceSlug}`);
  }

  const existing = match[2];

  const missingTargets = targets.filter(
    (target) => !existing.includes(`"${target}"`),
  );

  if (missingTargets.length === 0) {
    console.log(`Skipping ${sourceSlug}: links already exist.`);
    continue;
  }

  const formatted = missingTargets
    .map((target) => `            "${target}",`)
    .join("\n");

  const trimmed = existing.trim();

  const newContent =
    trimmed.length > 0
      ? `\n${trimmed}\n${formatted}\n        `
      : `\n${formatted}\n        `;

  source = source.replace(
    pattern,
    `$1${newContent}$3`,
  );

  console.log(
    `Updated: ${sourceSlug} -> ${missingTargets.join(", ")}`,
  );
}

fs.writeFileSync(file, source, "utf8");

console.log("");
console.log("✓ Final inbound connections added.");
