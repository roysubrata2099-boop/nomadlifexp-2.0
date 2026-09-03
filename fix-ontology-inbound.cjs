const fs = require("fs");

const file = "src/lib/ontology/articles.ts";
let source = fs.readFileSync(file, "utf8");

const additions = {
  "fitness-is-not-about-time": [
    "indoor-rock-climbing-workout-strength-balance-mindset",
  ],

  "build-workout-habit-outlast-motivation": [
    "rope-climbing-guide",
  ],

  "mental-clarity-stop-overthinking-and-regain-focus": [
    "why-you-cannot-focus-overload",
  ],

  "discipline-creates-freedom": [
    "self-discipline-while-traveling",
  ],

  "forearm-stand-yoga-focus-confidence": [
    "yoga-for-digital-nomads",
  ],

  "fitness-for-digital-nomads": [
    "build-workout-habit-outlast-motivation",
  ],

  "mental-clarity-for-digital-nomads": [
    "mental-clarity-stop-overthinking-and-regain-focus",
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
    (target) =>
      !existing.includes(`"${target}"`),
  );

  if (missingTargets.length === 0) {
    console.log(`Skipping ${sourceSlug}: links already exist.`);
    continue;
  }

  const formatted = missingTargets
    .map((target) => `            "${target}",`)
    .join("\n");

  const newContent =
    existing.trim().length > 0
      ? `${existing.trimEnd()}\n${formatted}\n        `
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
console.log("✓ Inbound connectivity pass completed.");
