export interface FixedRoute {
    slug: string;
    category: "mindset" | "discipline" | "fitness" | "yoga" | "general";
    displayPillar: "MINDSET" | "DISCIPLINE" | "FITNESS" | "YOGA" | "GENERAL";
    fallbackTitle: string;
    fallbackDescription: string;
}

// 100% Immutable Ground-Truth Map for all 14 baseline articles
const STATIC_PROTECTION_MATRIX: Record<string, Omit<FixedRoute, 'slug'>> = {
    // 🧠 Mindset (4)
    "rebuild-your-attention-span": {
        category: "mindset",
        displayPillar: "MINDSET",
        fallbackTitle: "Rebuild Your Attention Span",
        fallbackDescription: "Reclaim your mental baseline and stop dopamine overstimulation."
    },
    "why-you-cant-focus-even-when-you-try-hard": {
        category: "mindset",
        displayPillar: "MINDSET",
        fallbackTitle: "Why You Can't Focus Even When You Try Hard",
        fallbackDescription: "The underlying mechanics of cognitive friction and focus optimization."
    },
    "mental-clarity-stop-overthinking-and-regain-focus": {
        category: "mindset",
        displayPillar: "MINDSET",
        fallbackTitle: "Mental Clarity: Stop Overthinking and Regain Focus",
        fallbackDescription: "Practical mental frameworks to eliminate internal noise."
    },
    "you-are-not-stuck-in-life": {
        category: "mindset",
        displayPillar: "MINDSET",
        fallbackTitle: "You Are Not Stuck in Life",
        fallbackDescription: "Breaking down false glass ceilings and rewiring momentum patterns."
    },

    // 🎯 Discipline (3)
    "self-discipline-guide-reclaim-your-attention-rebuild-your-life": {
        category: "discipline",
        displayPillar: "DISCIPLINE",
        fallbackTitle: "Self Discipline Guide: Reclaim Your Attention, Rebuild Your Life",
        fallbackDescription: "The definitive operational blueprint to building sovereign self-control."
    },
    "why-you-procrastinate-and-how-to-stop-it": {
        category: "discipline",
        displayPillar: "DISCIPLINE",
        fallbackTitle: "Why You Procrastinate and How to Stop It",
        fallbackDescription: "Moving past emotional resistance frameworks into raw, consistent action."
    },
    "the-power-of-daily-habits-over-motivation": {
        category: "discipline",
        displayPillar: "DISCIPLINE",
        fallbackTitle: "The Power of Daily Habits Over Motivation",
        fallbackDescription: "Why system-driven behavior scaling beats erratic motivation bursts every time."
    },

    // 💪 Fitness (4)
    "why-people-watch-workout-videos-but-never-actually-exercise": {
        category: "fitness",
        displayPillar: "FITNESS",
        fallbackTitle: "Why People Watch Workout Videos but Never Actually Exercise",
        fallbackDescription: "Overcoming passive consumption loops to manifest real physical habits."
    },
    "fitness-consistency-build-workout-discipline-that-lasts": {
        category: "fitness",
        displayPillar: "FITNESS",
        fallbackTitle: "Fitness Consistency: Build Workout Discipline That Lasts",
        fallbackDescription: "Structuring automated body transformations without friction dependencies."
    },
    "fitness-is-not-about-time": {
        category: "fitness",
        displayPillar: "FITNESS",
        fallbackTitle: "Fitness Is Not About Time",
        fallbackDescription: "Demolishing time-scarcity myths around athletic cultivation layouts."
    },
    "build-workout-habit-outlast-motivation": {
        category: "fitness",
        displayPillar: "FITNESS",
        fallbackTitle: "How to Build a Workout Habit That Outlasts Your Motivation",
        fallbackDescription: "The structural architecture required to anchor an unshakeable fitness identity."
    },

    // 🧘 Yoga (3)
    "headstand-benefits-for-body-and-mind": {
        category: "yoga",
        displayPillar: "YOGA",
        fallbackTitle: "Headstand Benefits for Body and Mind",
        fallbackDescription: "Inversion mechanics for neural performance and vascular wellness."
    },
    "forearm-stand-yoga-for-focus-and-confidence": {
        category: "yoga",
        displayPillar: "YOGA",
        fallbackTitle: "Forearm Stand Yoga for Focus and Confidence",
        fallbackDescription: "Calibrating geometric precision balance to anchor situational awareness."
    },
    "forward-bending-yoga-for-stress-relief": {
        category: "yoga",
        displayPillar: "YOGA",
        fallbackTitle: "Forward Bending Yoga for Stress Relief",
        fallbackDescription: "Triggering parasympathetic nervous response states through structured release."
    }
};

/**
 * 100% Guarded Resolution Engine
 * Accepts any raw string (filename, URL slug, corrupted case string) and guarantees
 * a validated, type-safe route output without throwing runtime crashes.
 */
export function getGlobalSystemRoute(rawInput: string): FixedRoute {
    // Normalization parsing context
    let s = String(rawInput || "").toLowerCase().trim();
    s = s.replace(/\.md$/i, ""); // Strip out file extension if passed directly

    // Intercept pattern matching variant names (e.g., if the physical markdown file is different)
    if (s.includes("workout-habit") || s.includes("outlasts-your-motivation")) {
        s = "build-workout-habit-outlast-motivation";
    } else if (s.includes("attention-span")) {
        s = "rebuild-your-attention-span";
    } else if (s.includes("cant-focus")) {
        s = "why-you-cant-focus-even-when-you-try-hard";
    } else if (s.includes("overthinking") || s.includes("mental-clarity")) {
        s = "mental-clarity-stop-overthinking-and-regain-focus";
    } else if (s.includes("not-stuck")) {
        s = "you-are-not-stuck-in-life";
    } else if (s.includes("self-discipline")) {
        s = "self-discipline-guide-reclaim-your-attention-rebuild-your-life";
    } else if (s.includes("procrastinate")) {
        s = "why-you-procrastinate-and-how-to-stop-it";
    } else if (s.includes("daily-habits")) {
        s = "the-power-of-daily-habits-over-motivation";
    } else if (s.includes("workout-videos")) {
        s = "why-people-watch-workout-videos-but-never-actually-exercise";
    } else if (s.includes("fitness-consistency")) {
        s = "fitness-consistency-build-workout-discipline-that-lasts";
    } else if (s.includes("not-about-time")) {
        s = "fitness-is-not-about-time";
    } else if (s.includes("headstand")) {
        s = "headstand-benefits-for-body-and-mind";
    } else if (s.includes("forearm-stand")) {
        s = "forearm-stand-yoga-for-focus-and-confidence";
    } else if (s.includes("forward-bending")) {
        s = "forward-bending-yoga-for-stress-relief";
    }

    // Attempt configuration matrix mapping index lookup
    const protectedMatch = STATIC_PROTECTION_MATRIX[s];

    if (protectedMatch) {
        return {
            slug: s,
            category: protectedMatch.category,
            displayPillar: protectedMatch.displayPillar,
            fallbackTitle: protectedMatch.fallbackTitle,
            fallbackDescription: protectedMatch.fallbackDescription
        };
    }

    // Critical Fallback Layer: If completely unrecognizable, generate valid placeholders instead of breaking the layout
    const formattedTitle = s
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return {
        slug: s,
        category: "general",
        displayPillar: "GENERAL",
        fallbackTitle: formattedTitle || "System Resource Log",
        fallbackDescription: "Protocol data log details are currently online and loading."
    };
}

/**
 * Returns an array of all 14 absolute valid paths and data states for validation sweeps
 */
export function getAllImmutableRoutes(): FixedRoute[] {
    return Object.keys(STATIC_PROTECTION_MATRIX).map(slugKey => ({
        slug: slugKey,
        ...STATIC_PROTECTION_MATRIX[slugKey]
    }));
}