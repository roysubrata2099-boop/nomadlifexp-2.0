const fs = require("fs");

const file = "src/lib/ontology/articles.ts";
let source = fs.readFileSync(file, "utf8");

const fixes = {
  "consistency-myth-showing-up-beats-perfect": [
    "fitness-is-not-about-time",
    "build-workout-habit-outlast-motivation",
    "passive-fitness-consumption-trap",
  ],

  "how-to-build-self-discipline": [
    "self-discipline-comprehensive-guide",
    "why-you-procrastinate-how-to-stop",
    "mental-clarity-stop-overthinking-and-regain-focus",
  ],
};

for (const [slug, relatedArticles] of Object.entries(fixes)) {
  const escapedSlug = slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const pattern = new RegExp(
    `(    "${escapedSlug}": \\{[\\s\\S]*?relatedArticles: \\[)([\\s\\S]*?)(\\n        \\],)`,
    "m"
  );

  if (!pattern.test(source)) {
    console.log(`NOT FOUND: ${slug}`);
    continue;
  }

  const replacement =
    `$1\n` +
    relatedArticles.map(article => `            "${article}",`).join("\n") +
    `$3`;

  source = source.replace(pattern, replacement);

  console.log(`Updated: ${slug}`);
}

fs.writeFileSync(file, source, "utf8");

console.log("");
console.log("✓ Final outbound relationships added.");
