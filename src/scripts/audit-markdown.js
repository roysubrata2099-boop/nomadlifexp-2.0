import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Recreate __dirname safety in ES Modules environment
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target workspace configurations - Adjust path if your posts live elsewhere
const POSTS_DIR = path.join(__dirname, '../content/posts');
const VALID_CATEGORIES = ['fitness', 'mindset', 'yoga', 'discipline'];

// Complete URL correction map
const linkReplacements = [
    { old: /\.html/g, new: '' }, // Strips out all old .html extensions
    { old: /href="\/attention-span"/g, new: 'href="/blog/posts/attention-span"' },
    { old: /href="\/stop-procrastination"/g, new: 'href="/blog/posts/stop-procrastination"' },
    { old: /href="\/stuck-in-life"/g, new: 'href="/blog/posts/stuck-in-life"' },
    { old: /href="\/mental-clarity"/g, new: 'href="/blog/posts/mental-clarity-stop-overthinking-and-regain-focus"' },
    { old: /href="\/self-discipline-guide"/g, new: 'href="/blog/posts/self-discipline-guide"' },

    // Markdown syntax fallbacks
    { old: /\(\/attention-span\)/g, new: '(/blog/posts/attention-span)' },
    { old: /\(\/stop-procrastination\)/g, new: '(/blog/posts/stop-procrastination)' },
    { old: /\(\/stuck-in-life\)/g, new: '(/blog/posts/stuck-in-life)' },
    { old: /\(\/mental-clarity\)/g, new: '(/blog/posts/mental-clarity-stop-overthinking-and-regain-focus)' },
    { old: /\(\/self-discipline-guide\)/g, new: '(/blog/posts/self-discipline-guide)' }
];

function runAuditAndRecovery() {
    console.log('\x1b[36m%s\x1b[0m', '>> STARTING WORKSPACE ARCHITECTURE INTEGRITY AUDIT & ROUTE RECOVERY...');

    if (!fs.existsSync(POSTS_DIR)) {
        console.warn('\x1b[33m%s\x1b[0m', `[NOTICE] Markdown directory not found at: ${POSTS_DIR}. Creating template path...`);
        fs.mkdirSync(POSTS_DIR, { recursive: true });
        console.log('\x1b[32m%s\x1b[0m', '[SUCCESS] Empty path initiated. Add your markdown posts here.');
        process.exit(0);
    }

    const files = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.md') || file.endsWith('.html'));
    let structuralFailures = 0;
    let totalFixedFiles = 0;

    files.forEach(file => {
        const filePath = path.join(POSTS_DIR, file);
        let fileContent = fs.readFileSync(filePath, 'utf8');
        let wasModified = false;

        // --- 1. ROUTE CORRECTION ENGINE ---
        linkReplacements.forEach(rule => {
            if (rule.old.test(fileContent)) {
                fileContent = fileContent.replace(rule.old, rule.new);
                wasModified = true;
            }
        });

        if (wasModified) {
            fs.writeFileSync(filePath, fileContent, 'utf8');
            console.log('\x1b[32m%s\x1b[0m', `[RECOVERED] Automatically fixed routing paths in: ${file}`);
            totalFixedFiles++;
        }

        // --- 2. FRONTMATTER INTEGRITY CHECK ---
        const match = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---/);
        if (!match) {
            console.error('\x1b[31m%s\x1b[0m', `[FAIL] Missing YAML Frontmatter block header: ${file}`);
            structuralFailures++;
            return;
        }

        const frontmatterText = match[1];
        const lines = frontmatterText.split('\n');
        const metadata = {};

        lines.forEach(line => {
            const separatorIndex = line.indexOf(':');
            if (separatorIndex !== -1) {
                const key = line.slice(0, separatorIndex).trim();
                const value = line.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, '');
                metadata[key] = value;
            }
        });

        const requiredFields = ['title', 'description', 'category', 'slug'];
        requiredFields.forEach(field => {
            if (!metadata[field]) {
                console.error('\x1b[31m%s\x1b[0m', `[FAIL] ${file} is missing mandatory metadata property: "${field}"`);
                structuralFailures++;
            }
        });

        if (metadata.category && !VALID_CATEGORIES.includes(metadata.category.toLowerCase().trim())) {
            console.error('\x1b[31m%s\x1b[0m', `[FAIL] ${file} contains invalid system routing category identifier: "${metadata.category}"`);
            structuralFailures++;
        }
    });

    console.log('\x1b[34m%s\x1b[0m', `\n>> Recovery Complete: Fixed routing links in ${totalFixedFiles} files.`);

    if (structuralFailures > 0) {
        console.error('\x1b[31m%s\x1b[0m', `[AUDIT FAILED] ${structuralFailures} frontmatter metadata errors remaining. Fix them to ensure Next.js compiles.`);
        process.exit(1);
    } else {
        console.log('\x1b[32m%s\x1b[0m', '[AUDIT SUCCESSFUL] All structures match operational protocols.');
    }
}

runAuditAndRecovery();