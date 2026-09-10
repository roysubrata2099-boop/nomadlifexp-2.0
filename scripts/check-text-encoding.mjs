import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

const SCAN_DIRECTORIES = [
  "src",
];

const IGNORE_DIRECTORY_NAMES = new Set([
  "node_modules",
  ".next",
  ".git",
  "posts-mdx-backup",
]);

const IGNORE_FILE_SUFFIXES = [
  ".backup",
  ".before-final-fix",
  ".before-inbound-fix",
];

const SCANNABLE_EXTENSIONS = new Set([
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".md",
  ".mdx",
  ".json",
  ".css",
  ".scss",
]);

/*
 * Common UTF-8 → Windows-1252/Latin-1 mojibake sequences.
 *
 * These are intentionally checked as suspicious patterns rather than
 * automatically replaced. Automatic replacement can damage legitimate text.
 */
const MOJIBAKE_PATTERNS = [
  /â†/u,
  /â€™/u,
  /â€œ/u,
  /â€/u,
  /â€¢/u,
  /â€”/u,
  /â€“/u,
  /Ãƒ/u,
  /Ã†/u,
  /Â©/u,
  /Â®/u,
  /Â°/u,
];

let problemCount = 0;

function isIgnoredPath(relativePath) {
  const normalized = relativePath.replaceAll("\\", "/");
  const parts = normalized.split("/");

  if (parts.some((part) => IGNORE_DIRECTORY_NAMES.has(part))) {
    return true;
  }

  const fileName = parts.at(-1) ?? "";

  return IGNORE_FILE_SUFFIXES.some((suffix) =>
    fileName.endsWith(suffix)
  );
}

function isScannableFile(filePath) {
  return SCANNABLE_EXTENSIONS.has(
    path.extname(filePath).toLowerCase()
  );
}

function report(filePath, lineNumber, message, line) {
  problemCount += 1;

  console.error(`❌ ${message}`);
  console.error(`   ${filePath}:${lineNumber}`);

  if (line) {
    console.error(`   ${line.trim()}`);
  }

  console.error("");
}

function scanFile(filePath) {
  const relativePath = path.relative(ROOT, filePath);

  if (isIgnoredPath(relativePath)) {
    return;
  }

  if (!isScannableFile(filePath)) {
    return;
  }

  const buffer = fs.readFileSync(filePath);

  /*
   * Detect invalid UTF-8 replacement characters.
   *
   * U+FFFD usually means that a decoding process encountered bytes
   * that could not be interpreted correctly.
   */
  const content = buffer.toString("utf8");

  const lines = content.split(/\r?\n/);

  lines.forEach((line, index) => {
    for (const pattern of MOJIBAKE_PATTERNS) {
      if (pattern.test(line)) {
        report(
          relativePath,
          index + 1,
          "Possible UTF-8 mojibake detected",
          line
        );

        break;
      }
    }

    if (line.includes("\uFFFD")) {
      report(
        relativePath,
        index + 1,
        "Unicode replacement character detected",
        line
      );
    }
  });
}

function scanDirectory(directory) {
  if (!fs.existsSync(directory)) {
    return;
  }

  const entries = fs.readdirSync(directory, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    const relativePath = path.relative(ROOT, fullPath);

    if (isIgnoredPath(relativePath)) {
      continue;
    }

    if (entry.isDirectory()) {
      scanDirectory(fullPath);
      continue;
    }

    if (entry.isFile()) {
      scanFile(fullPath);
    }
  }
}

console.log("🔎 Checking source files for text encoding problems...");

for (const directory of SCAN_DIRECTORIES) {
  scanDirectory(path.join(ROOT, directory));
}

if (problemCount > 0) {
  console.error(
    `❌ Encoding check failed: ${problemCount} problem(s) detected.`
  );

  console.error("");
  console.error(
    "Fix the affected source text before building or deploying."
  );

  process.exit(1);
}

console.log("✅ Encoding check passed.");
