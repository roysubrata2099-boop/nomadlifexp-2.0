import fs from "node:fs";
import path from "node:path";
import { parse } from "yaml";

const CONTENT_DIR = "./src/content/posts-mdx";

const files = fs.readdirSync(CONTENT_DIR)
  .filter(file => file.endsWith(".mdx"));

let totalErrors = 0;
let totalWarnings = 0;

console.log("\n========== MDX SEO VALIDATION ==========\n");

for (const file of files) {
  const filePath = path.join(CONTENT_DIR, file);
  const content = fs.readFileSync(filePath, "utf8");

  console.log(`\n========================================`);
  console.log(`FILE: ${file}`);
  console.log(`========================================`);

  const match = content.match(
    /^---[ \t]*\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/
  );

  if (!match) {
    console.log("ERROR: Missing or invalid frontmatter");
    totalErrors++;
    continue;
  }

  let data;

  try {
    data = parse(match[1]);
  } catch (error) {
    console.log(`ERROR: YAML: ${error.message}`);
    totalErrors++;
    continue;
  }

  if (!data || typeof data !== "object" || Array.isArray(data)) {
    console.log("ERROR: Frontmatter must be a YAML object");
    totalErrors++;
    continue;
  }

  const errors = [];
  const warnings = [];

  for (const field of ["title", "slug", "description"]) {
    if (typeof data[field] !== "string" || !data[field].trim()) {
      errors.push(`Missing or invalid ${field}`);
    }
  }

  if (typeof data.title === "string") {
    console.log(`Title length: ${data.title.length}/65`);
    if (data.title.length > 65) {
      errors.push("Title exceeds 65 characters");
    }
  }

  if (typeof data.seoTitle === "string") {
    console.log(`SEO title length: ${data.seoTitle.length}/65`);
    if (data.seoTitle.length > 65) {
      errors.push("SEO title exceeds 65 characters");
    }
  } else {
    warnings.push("seoTitle is missing");
  }

  if (typeof data.description === "string") {
    const length = data.description.trim().length;
    console.log(`Description length: ${length}/160`);

    if (length < 120 || length > 160) {
      errors.push(`Description must be 120-160 characters (currently ${length})`);
    }
  }

  if (typeof data.slug === "string") {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.slug)) {
      errors.push("Invalid slug format");
    }

    if (data.slug !== path.basename(file, ".mdx")) {
      warnings.push("Slug does not match filename");
    }
  }

  if (Array.isArray(data.relatedArticles)) {
    for (const slug of data.relatedArticles) {
      if (
        typeof slug !== "string" ||
        !fs.existsSync(path.join(CONTENT_DIR, `${slug}.mdx`))
      ) {
        warnings.push(`Related article not found: ${slug}`);
      }
    }
  }

  errors.forEach(error => console.log(`ERROR: ${error}`));
  warnings.forEach(warning => console.log(`WARNING: ${warning}`));

  if (errors.length === 0 && warnings.length === 0) {
    console.log("STATUS: ALL CHECKS PASSED");
  }

  totalErrors += errors.length;
  totalWarnings += warnings.length;
}

console.log("\n========== FINAL SUMMARY ==========");
console.log(`Files checked: ${files.length}`);
console.log(`Errors: ${totalErrors}`);
console.log(`Warnings: ${totalWarnings}`);

if (totalErrors > 0) {
  process.exitCode = 1;
} else {
  console.log("SEO FRONTMATTER VALIDATION PASSED");
}
