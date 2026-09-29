export const topicMap = {
    digitalNomadLifestyle: {
        hub: "/digital-nomads",
        relatedTopics: [
            "discipline",
            "fitness",
            "yoga",
            "mindset",
        ],
        relatedRoutes: [
            "/discipline",
            "/fitness",
            "/yoga",
            "/mindset",
        ],
    },

    discipline: {
        hub: "/discipline",
        guide: "/discipline/self-discipline-while-traveling",
        category: "/blog/category/discipline",
        relatedTopics: [
            "digitalNomadLifestyle",
            "fitness",
            "mindset",
        ],
        relatedRoutes: [
            "/blog/posts/how-to-build-self-discipline",
            "/blog/posts/self-discipline-comprehensive-guide",
            "/blog/posts/discipline-creates-freedom",
            "/blog/posts/consistency-myth-showing-up-beats-perfect",
            "/blog/posts/self-discipline-while-traveling",
            "/blog/posts/why-you-procrastinate-how-to-stop",
        ],
    },

    fitness: {
        hub: "/fitness",
        guide: "/fitness/fitness-for-digital-nomads",
        category: "/blog/category/fitness",
        relatedTopics: [
            "digitalNomadLifestyle",
            "discipline",
            "yoga",
        ],
        relatedRoutes: [
            "/blog/posts/build-workout-habit-outlast-motivation",
            "/blog/posts/fitness-is-not-about-time",
            "/blog/posts/fitness-for-digital-nomads",
            "/blog/posts/passive-fitness-consumption-trap",
            "/blog/posts/indoor-rock-climbing-workout-strength-balance-mindset",
            "/blog/posts/rope-climbing-guide",
        ],
    },

    yoga: {
        hub: "/yoga",
        guide: "/yoga/yoga-for-digital-nomads",
        category: "/blog/category/yoga",
        relatedTopics: [
            "digitalNomadLifestyle",
            "fitness",
            "mindset",
        ],
        relatedRoutes: [
            "/blog/posts/yoga-for-digital-nomads",
            "/blog/posts/forearm-stand-yoga-focus-confidence",
            "/blog/posts/headstand-benefits-body-mind-safety",
            "/blog/posts/forward-bending-yoga-stress-relief",
        ],
    },

    mindset: {
        hub: "/mindset",
        guide: "/mindset/mental-clarity-for-digital-nomads",
        category: "/blog/category/mindset",
        relatedTopics: [
            "digitalNomadLifestyle",
            "discipline",
            "yoga",
        ],
        relatedRoutes: [
            "/blog/posts/mental-clarity-for-digital-nomads",
            "/blog/posts/mental-clarity-stop-overthinking-and-regain-focus",
            "/blog/posts/rebuild-your-attention-span",
            "/blog/posts/why-you-cannot-focus-overload",
            "/blog/posts/you-are-not-stuck-in-life",
        ],
    },
} as const;
