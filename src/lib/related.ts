import { Post } from "./posts";

export function getRelatedPosts(current: Post, allPosts: Post[]) {
    return allPosts
        .filter(post => post.slug !== current.slug)
        .map(post => {
            let score = 0;

            // 1. SAME CATEGORY (strongest signal)
            if (post.category === current.category) {
                score += 5;
            }

            // 2. KEYWORD MATCH (medium signal)
            const sharedKeywords = post.keywords.filter(k =>
                current.keywords.includes(k)
            );
            score += sharedKeywords.length * 2;

            // 3. TITLE SIMILARITY (light signal)
            const titleWords = current.title.toLowerCase().split(" ");
            const matchWords = post.title.toLowerCase().split(" ");

            titleWords.forEach(word => {
                if (matchWords.includes(word)) score += 1;
            });

            return { post, score };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 4) // top 4 related posts
        .map(x => x.post);
}