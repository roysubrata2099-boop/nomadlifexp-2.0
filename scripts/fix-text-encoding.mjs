import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

const SCAN_DIRECTORIES = ["src"];

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
  ".mjs",
  ".cjs",
  ".md",
  ".mdx",
  ".json",
  ".css",
  ".scss",
]);

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

/*
 * Safe, common mojibake replacements.
 *
 * These are only applied when the exact broken sequence is found.
 * The script does NOT attempt aggressive character guessing.
 */
const REPLACEMENTS = new Map([
  ["â†’", "→"],
  ["â†", "→"],
  ["â€™", "’"],
  ["â€œ", "“"],
  ["â€", "”"],
  ["â€", "”"],
  ["â€¢", "•"],
  ["â€”", "—"],
  ["â€“", "–"],
  ["Ã©", "é"],
  ["Ã¨", "è"],
  ["Ãª", "ê"],
  ["Ã«", "ë"],
  ["Ã¡", "á"],
  ["Ã¢", "â"],
  ["Ã£", "ã"],
  ["Ã¤", "ä"],
  ["Ã¥", "å"],
  ["Ã§", "ç"],
  ["Ã±", "ñ"],
  ["Ã³", "ó"],
  ["Ã¶", "ö"],
  ["Ãº", "ú"],
  ["Ã¼", "ü"],
  ["Â©", "©"],
  ["Â®", "®"],
  ["Â°", "°"],
  ["Â·", "·"],
  ["Â ", " "],
]);

let changedFiles = 0;
let replacementCount = 0;

function fixFile(filePath) {
  const relativePath = path.relative(ROOT, filePath);

  if (isIgnoredPath(relativePath)) {
    return;
  }

  if (!isScannableFile(filePath)) {
    return;
  }

  const original = fs.readFileSync(filePath, "utf8");
  let content = original;

  for (const [broken, fixed] of REPLACEMENTS) {
    if (content.includes(broken)) {
      const occurrences = content.split(broken).length - 1;
      replacementCount += occurrences;
      content = content.replaceAll(broken, fixed);
    }
  }

  /*
   * U+FFFD means the original character was already lost during
   * a previous decoding operation.
   *
   * We intentionally do NOT guess these automatically.
   */
  if (content.includes("\uFFFD")) {
    console.warn(
      `⚠️ Replacement character remains: ${relativePath}`
    );
    console.warn(
      "   Manual review is required because the original character cannot be reconstructed safely."
    );
    console.warn("");
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, "utf8");
    changedFiles += 1;

    console.log(`✅ Fixed: ${relativePath}`);
  }
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
      fixFile(fullPath);
    }
  }
}

console.log("🔧 Checking source files for safe text-encoding fixes...");
console.log("");

for (const directory of SCAN_DIRECTORIES) {
  scanDirectory(path.join(ROOT, directory));
}

console.log("");

if (changedFiles === 0) {
  console.log("✅ No safe encoding fixes were necessary.");
} else {
  console.log(
    `✅ Fixed ${replacementCount} encoding issue(s) across ${changedFiles} file(s).`
  );
}

console.log("");
console.log(
  "Run 'npm run check:encoding' afterwards to verify the source tree."
);
