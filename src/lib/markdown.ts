import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export interface BlogPost {
    slug: string;
    title: string;
    date: string | Date;
    category: 'Fitness' | 'Yoga' | 'Mindset' | 'Discipline' | string;
    description: string;
    isStartHere?: boolean;
    content: string;
}

// Get all posts sorted cleanly by date parameters
export function getAllPosts(): BlogPost[] {
    if (!fs.existsSync(postsDirectory)) return [];

    try {
        const fileNames = fs.readdirSync(postsDirectory);
        const allPostsData = fileNames
            .filter((fileName) => fileName.endsWith('.md'))
            .map((fileName) => {
                const slug = fileName.replace(/\.md$/, '');
                const fullPath = path.join(postsDirectory, fileName);
                const fileContents = fs.readFileSync(fullPath, 'utf8');
                const { data, content } = matter(fileContents);

                return {
                    slug: slug.toLowerCase().trim(),
                    title: typeof data.title === 'string' ? data.title : 'Untitled Node Blueprint',
                    date: data.date ? data.date : new Date().toISOString(),
                    category: typeof data.category === 'string' ? data.category : 'Discipline',
                    description: typeof data.description === 'string' ? data.description : '',
                    isStartHere: Boolean(data.isStartHere),
                    content: content || '',
                } as BlogPost;
            });

        return allPostsData.sort((a, b) => {
            const dateA = a.date instanceof Date ? a.date.getTime() : new Date(a.date).getTime();
            const dateB = b.date instanceof Date ? b.date.getTime() : new Date(b.date).getTime();
            return dateB - dateA;
        });
    } catch (error) {
        console.error("Critical Failure Reading File Manifest Directory Map:", error);
        return [];
    }
}

// 🛡️ RE-ENGINEERED COMPREHENSIVE CASE-INSENSITIVE FILE DETECTOR
export function getPostBySlug(slug: string): BlogPost | null {
    if (!slug || !fs.existsSync(postsDirectory)) return null;

    const targetSlugNormalized = slug.toLowerCase().trim();

    try {
        const fileNames = fs.readdirSync(postsDirectory);

        // Find the matched file on disk ignoring case variations completely
        const matchedFileName = fileNames.find(file => {
            const currentFileSlug = file.replace(/\.md$/, '').toLowerCase().trim();
            return currentFileSlug === targetSlugNormalized;
        });

        if (!matchedFileName) return null;

        const fullPath = path.join(postsDirectory, matchedFileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug: targetSlugNormalized,
            title: typeof data.title === 'string' ? data.title : 'Untitled Node Blueprint',
            date: data.date ? data.date : new Date().toISOString(),
            category: typeof data.category === 'string' ? data.category : 'Discipline',
            description: typeof data.description === 'string' ? data.description : '',
            isStartHere: Boolean(data.isStartHere),
            content: content || '',
        } as BlogPost;
    } catch {
        return null;
    }
}