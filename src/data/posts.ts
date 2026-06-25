export type Post = {
    title: string;
    slug: string;
    description?: string;
    category: "discipline" | "fitness" | "mindset" | "yoga";
    content: string;
    related?: string[];
};

export const posts: Post[] = [
    {
        title: "Self Discipline Guide: Reclaim Your Attention",
        slug: "self-discipline-guide",
        description: "Build discipline through systems, not motivation",
        category: "discipline",
        content: `
            <h1>Self Discipline Guide</h1>
            <p>Discipline is not motivation. It is structure.</p>
        `,
        related: ["workout-videos-no-action"]
    },

    {
        title: "Why People Watch Workout Videos but Never Exercise",
        slug: "workout-videos-no-action",
        description: "Why inspiration doesn't become action",
        category: "fitness",
        content: `
            <h1>Workout Motivation Problem</h1>
            <p>Watching feels good, but action changes life.</p>
        `,
        related: ["self-discipline-guide"]
    }
];