import fs from 'fs';
import path from 'path';

// Aligned Path Configurations (Matches Build Script)
const POSTS_DIR = path.join(process.cwd(), "src/content/posts");
const VALID_CATEGORIES = ['fitness', 'mindset', 'yoga', 'discipline', 'uncategorized'];

// 100% Bulletproof Routing Protection Mapping Rules
const linkReplacements = [
    { old: /\.html/g, new: '' },
    { old: /href="\/attention-span"/g, new: 'href="/blog/posts/attention-span"' },
    { old: /href="\/stop-procrastination"/g, new: 'href="/blog/posts/stop-procrastination"' },
    { old: /href="\/stuck-in-life"/g, new: 'href="/blog/posts/stuck-in-life"' },
    { old: /href="\/mental-clarity"/g, new: 'href="/blog/posts/mental-clarity-stop-overthinking-and-regain-focus"' },
    { old: /href="\/self-discipline-guide"/g, new: 'href="/blog/posts/self-discipline-guide"' },
    { old: /href="\/discipline-creates-freedom"/g, new: 'href="/blog/posts/discipline-creates-freedom"' },

    { old: /\(\/attention-span\)/g, new: '(/blog/posts/attention-span)' },
    { old: /\(\/stop-procrastination\)/g, new: '(/blog/posts/stop-procrastination)' },
    { old: /\(\/stuck-in-life\)/g, new: '(/blog/posts/stuck-in-life)' },
    { old: /\(\/mental-clarity\)/g, new: '(/blog/posts/mental-clarity-stop-overthinking-and-regain-focus)' },
    { old: /\(\/self-discipline-guide\)/g, new: '(/blog/posts/self-discipline-guide)' },
    { old: /\(\/discipline-creates-freedom\)/g, new: '(/blog/posts/discipline-creates-freedom)' }
];

function runAudit() {
    console.log('\x1b[36m%s\x1b[0m', '>> STARTING WORKSPACE ARCHITECTURE INTEGRITY AUDIT...');

    if (!fs.existsSync(POSTS_DIR)) {
        console.warn('\x1b[33m%s\x1b[0m', `[NOTICE] Markdown directory not found at: ${POSTS_DIR}. Creating template path...`);
        fs.mkdirSync(POSTS_DIR, { recursive: true });
        console.log('\x1b[32m%s\x1b[0m', '[SUCCESS] Empty path initiated. Add your markdown posts here.');
        process.exit(0);
    }

    const files = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.md'));
    let structuralFailures = 0;
    let automaticallyFixedLinksCount = 0;

    files.forEach(file => {
        const filePath = path.join(POSTS_DIR, file);
        let fileContent = fs.readFileSync(filePath, 'utf8');
        let fileWasModified = false;

        linkReplacements.forEach(rule => {
            if (rule.old.test(fileContent)) {
                fileContent = fileContent.replace(rule.old, rule.new);
                fileWasModified = true;
            }
        });

        if (fileWasModified) {
            fs.writeFileSync(filePath, fileContent, 'utf8');
            automaticallyFixedLinksCount++;
            console.log('\x1b[32m%s\x1b[0m', `[AUDIT RECOVERY] Corrected layout links inside resource: ${file}`);
        }

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

    if (automaticallyFixedLinksCount > 0) {
        console.log('\x1b[34m%s\x1b[0m', `>> Audit complete: Auto-repaired paths across ${automaticallyFixedLinksCount} source files.`);
    }

    if (structuralFailures > 0) {
        console.error('\x1b[31m%s\x1b[0m', `\n[AUDIT FAILED] ${structuralFailures} metadata errors caught.`);
        process.exit(1);
    } else {
        console.log('\x1b[32m%s\x1b[0m', '\n[AUDIT SUCCESSFUL] All structures are 100% synchronized.');
    }
}

runAudit();