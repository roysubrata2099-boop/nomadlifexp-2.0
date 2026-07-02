import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Recreate __dirname safety in ES Modules environment
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target workspace configurations - verify this matches your content directory layout
const POSTS_DIR = path.join(__dirname, '../content/posts');
const VALID_CATEGORIES = ['fitness', 'mindset', 'yoga', 'discipline'];

function runAudit() {
    console.log('\x1b[36m%s\x1b[0m', '>> STARTING WORKSPACE ARCHITECTURE INTEGRITY AUDIT...');

    // If the posts folder doesn't exist yet, create it or alert gently
    if (!fs.existsSync(POSTS_DIR)) {
        console.warn('\x1b[33m%s\x1b[0m', `[NOTICE] Markdown directory not found at: ${POSTS_DIR}. Creating template path...`);
        fs.mkdirSync(POSTS_DIR, { recursive: true });
        console.log('\x1b[32m%s\x1b[0m', '[SUCCESS] Empty path initiated. Add your markdown posts here.');
        process.exit(0);
    }

    const files = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.md'));
    let structuralFailures = 0;

    files.forEach(file => {
        const filePath = path.join(POSTS_DIR, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');

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

        // Validation Assertions
        const requiredFields = ['title', 'description', 'category', 'slug'];
        requiredFields.forEach(field => {
            if (!metadata[field]) {
                console.error('\x1b[31m%s\x1b[0m', `[FAIL] ${file} is missing mandatory metadata property: "${field}"`);
                structuralFailures++;
            }
        });

        if (metadata.category && !VALID_CATEGORIES.includes(metadata.category.toLowerCase().trim())) {
            console.error('\x1b[31m%s\x1b[0m', `[FAIL] ${file} contains invalid system routing category identifier: "${metadata.category}"`);
            console.log(`       Allowed fields: [${VALID_CATEGORIES.join(', ')}]`);
            structuralFailures++;
        }
    });

    if (structuralFailures > 0) {
        console.error('\x1b[31m%s\x1b[0m', `\n[AUDIT FAILED] ${structuralFailures} core metadata errors caught. Fix file parameters to secure compilation.`);
        process.exit(1);
    } else {
        console.log('\x1b[32m%s\x1b[0m', '\n[AUDIT SUCCESSFUL] All resource matrix nodes are 100% compliant with standard operational protocol.');
    }
}

runAudit();