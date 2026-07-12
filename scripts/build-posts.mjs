import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Aligned Path Configurations
const POSTS_DIR = path.join(process.cwd(), "src/content/posts");
const OUTPUT_DIR = path.join(process.cwd(), "src/data");

// 100% Bulletproof Next.js Routing Correction Engine
const linkReplacements = [
    { old: /\.html/g, new: '' }, // Strips all .html references out instantly
    { old: /href="\/attention-span"/g, new: 'href="/blog/posts/attention-span"' },
    { old: /href="\/stop-procrastination"/g, new: 'href="/blog/posts/stop-procrastination"' },
    { old: /href="\/stuck-in-life"/g, new: 'href="/blog/posts/stuck-in-life"' },
    { old: /href="\/mental-clarity"/g, new: 'href="/blog/posts/mental-clarity-stop-overthinking-and-regain-focus"' },
    { old: /href="\/self-discipline-guide"/g, new: 'href="/blog/posts/self-discipline-guide"' },
    { old: /href="\/discipline-creates-freedom"/g, new: 'href="/blog/posts/discipline-creates-freedom"' },

    // Markdown alternative syntax wrappers
    { old: /\(\/attention-span\)/g, new: '(/blog/posts/attention-span)' },
    { old: /\(\/stop-procrastination\)/g, new: '(/blog/posts/stop-procrastination)' },
    { old: /\(\/stuck-in-life\)/g, new: '(/blog/posts/stuck-in-life)' },
    { old: /\(\/mental-clarity\)/g, new: '(/blog/posts/mental-clarity-stop-overthinking-and-regain-focus)' },
    { old: /\(\/self-discipline-guide\)/g, new: '(/blog/posts/self-discipline-guide)' },
    { old: /\(\/discipline-creates-freedom\)/g, new: '(/blog/posts/discipline-creates-freedom)' }
];

function getFiles() {
    if (!fs.existsSync(POSTS_DIR)) return [];
    return fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
}

function fixContentLinks(content) {
    let updatedContent = content;
    linkReplacements.forEach(rule => {
        updatedContent = updatedContent.replace(rule.old, rule.new);
    });
    return updatedContent;
}

function parsePost(file) {
    const fullPath = path.join(POSTS_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);

    const protectedContent = fixContentLinks(content);

    if (protectedContent !== content) {
        fs.writeFileSync(fullPath, matter.stringify(protectedContent, data), "utf8");
        console.log(`\x1b[32m%s\x1b[0m`, `[BUILD RECOVERY] Fixed broken routing in: ${file}`);
    }

    return {
        slug: file.replace(/\.md$/, "").toLowerCase(),
        title: data.title || "Untitled",
        description: data.description || protectedContent.slice(0, 140),
        category: data.category || "uncategorized",
        displayPillar: data.displayPillar || "BLOG",
        content: protectedContent,
    };
}

function build() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    console.log('\x1b[36m%s\x1b[0m', '>> RUNNING COMPILATION & EMBEDDED PATH PROTECTION ENGINE...');
    const posts = getFiles().map(parsePost);

    fs.writeFileSync(
        path.join(OUTPUT_DIR, "posts.json"),
        JSON.stringify(posts, null, 2)
    );

    console.log(`✅ Generated ${posts.length} clean, 100% path-protected post profiles.`);
}

build();