// build-posts.mjs
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'src/data/posts.json');

function cleanMarkdownLink(url) {
    if (!url) return '';
    return url
        .replace(/\.md$/, '')          // strip .md extensions
        .replace(/^[./\\]+/, '')       // strip leading paths
        .split('/')                    // split deep directory paths
        .pop()                         // grab final segment
        .toLowerCase()
        .trim();
}

export function repairDatabase() {
    try {
        if (!fs.existsSync(DATA_FILE)) {
            console.error(`❌ Data target missing: ${DATA_FILE}`);
            return;
        }

        const rawData = fs.readFileSync(DATA_FILE, 'utf8');
        const posts = JSON.parse(rawData);

        if (!Array.isArray(posts)) {
            throw new Error("Invalid posts schema: Base dataset is not an array.");
        }

        const repaired = posts.map((post) => {
            const relatedArticles = new Set();
            const content = String(post.content || post.contentHtml || "");

            // Match header sections implicitly ending at next Markdown header or file end
            const sectionRegex = /##\s+(?:Related Articles|Recommended Reading)([\s\S]*?)(?:##|$)/i;
            const sectionMatch = content.match(sectionRegex);

            if (sectionMatch && sectionMatch[1]) {
                const sectionBlock = sectionMatch[1];
                // Captures standard markdown notation: [Anchor Title](Link Target)
                const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
                let match;

                while ((match = linkRegex.exec(sectionBlock)) !== null) {
                    const rawTitle = match[1].trim().toLowerCase();
                    const rawUrl = match[2].trim().toLowerCase();
                    const parsedUrlSlug = cleanMarkdownLink(rawUrl);

                    let matchedPost = null;

                    // Strategy A: Direct matches against database slugs
                    if (parsedUrlSlug && parsedUrlSlug !== '#') {
                        matchedPost = posts.find(p => String(p.slug).toLowerCase().trim() === parsedUrlSlug);
                    }

                    // Strategy B: Title substring fallback (Fixes dead '#' links)
                    if (!matchedPost && rawTitle.length > 3) {
                        matchedPost = posts.find(p => {
                            const postTitleClean = String(p.title).toLowerCase();
                            return postTitleClean.includes(rawTitle) || rawTitle.includes(postTitleClean);
                        });
                    }

                    // Strategy C: Structural Fuzzy Match fallback (Fixes truncated markdown titles)
                    if (!matchedPost && rawTitle.length > 5) {
                        const partialToken = rawTitle.slice(0, 8);
                        matchedPost = posts.find(p => String(p.title).toLowerCase().includes(partialToken));
                    }

                    if (matchedPost) {
                        const cleanTargetSlug = String(matchedPost.slug).toLowerCase().trim();
                        if (cleanTargetSlug !== String(post.slug).toLowerCase().trim()) {
                            relatedArticles.add(cleanTargetSlug);
                        }
                    }
                }
            }

            // Safe Normalization Schema Mapper
            return {
                slug: String(post.slug || "").toLowerCase().trim(),
                title: String(post.title || "Untitled Document"),
                description: String(post.description || ""),
                category: String(post.category || "discipline").toLowerCase().trim(),
                displayPillar: String(post.displayPillar || "DISCIPLINE").toUpperCase().trim(),
                date: String(post.date || new Date().toISOString().split('T')[0]),
                contentHtml: content,
                relatedArticles: Array.from(relatedArticles)
            };
        });

        fs.writeFileSync(DATA_FILE, JSON.stringify(repaired, null, 2), 'utf8');
        console.log("✅ 100% Secure Pipeline Sync: posts.json fully normalized.");
    } catch (error) {
        console.error("🚨 Critical Error Processing Data Pipeline:", error);
    }
}

// Execute execution context automatically if launched standalone
repairDatabase();