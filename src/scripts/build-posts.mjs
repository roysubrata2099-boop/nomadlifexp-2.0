import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "src/content/posts");
const OUTPUT_FILE = path.join(process.cwd(), "src/data/posts.json");

// 100% Bulletproof Route Protection Rules
const linkReplacements = [
    { old: /\.html/g, new: '' }, // Strips out old .html extensions
    { old: /href="\/attention-span"/g, new: 'href="/blog/posts/attention-span"' },
    { old: /href="\/stop-procrastination"/g, new: 'href="/blog/posts/stop-procrastination"' },
    { old: /href="\/stuck-in-life"/g, new: 'href="/blog/posts/stuck-in-life"' },
    { old: /href="\/mental-clarity"/g, new: 'href="/blog/posts/mental-clarity-stop-overthinking-and-regain-focus"' },
    { old: /href="\/self-discipline-guide"/g, new: 'href="/blog/posts/self-discipline-guide"' },

    // Markdown syntax processing engine
    { old: /\(\/attention-span\)/g, new: '(/blog/posts/attention-span)' },
    { old: /\(\/stop-procrastination\)/g, new: '(/blog/posts/stop-procrastination)' },
    { old: /\(\/stuck-in-life\)/g, new: '(/blog/posts/stuck-in-life)' },
    { old: /\(\/mental-clarity\)/g, new: '(/blog/posts/mental-clarity-stop-overthinking-and-regain-focus)' },
    { old: /\(\/self-discipline-guide\)/g, new: '(/blog/posts/self-discipline-guide)' }
];

function getAllMarkdownFiles() {
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

function buildPosts() {
    const files = getAllMarkdownFiles();
    let totalFixedInstances = 0;

    const posts = files.map((file) => {
        const fullPath = path.join(POSTS_DIR, file);
        const raw = fs.readFileSync(fullPath, "utf-8");
        const { data, content } = matter(raw);

        // Sanitize and protect all markdown content routes automatically
        const protectedContent = fixContentLinks(content);

        if (protectedContent !== content) {
            totalFixedInstances++;
            // Optional: Automatically save the fix back into the raw markdown file too
            fs.writeFileSync(fullPath, matter.stringify(protectedContent, data), "utf-8");
        }

        return {
            slug: file.replace(".md", ""),
            title: data.title || "Untitled",
            description: data.description || protectedContent.slice(0, 140),
            category: data.category || "uncategorized",
            pillar: data.pillar || data.category || "general",
            keywords: data.keywords || [],
            content: protectedContent,
        };
    });

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2));

    console.log(`\n🚀 Link Recovery Complete: Auto-corrected links across ${totalFixedInstances} markdown resources.`);
    console.log(`✅ Generated operational JSON system nodes: ${posts.length}`);
}

buildPosts();