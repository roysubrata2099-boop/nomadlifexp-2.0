export interface Post {
  title: string;
  slug: string;
  description: string;
  keywords: string[];
  author: string;
  date: string;
  category: string;
  image: string;
  relatedSlugs: string[];
  content: string;

  // ✅ SAFE SEO EXTENSIONS (DO NOT BREAK EXISTING DATA)
  canonical?: string;
  updatedDate?: string;
  readingTime?: number;
  featured?: boolean;
}

export const posts: Post[] = [
  {
    title: "Can You Rebuild Your Attention Span After Years of Digital Distraction",
    slug: "attention-span-guide",
    description:
      "Learn how digital distraction weakens attention span and how to rebuild focus and deep work ability.",
    keywords: ["attention span", "focus", "deep work"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "mindset",
    image: "https://nomadlifexp.com/images/attention-span.jpg",
    relatedSlugs: ["mental-clarity", "stop-procrastination", "discipline-creates-freedom"],
    content: `
# Can You Rebuild Your Attention Span After Years of Digital Distraction

Modern life has changed how attention works. Your inability to focus is not a defect. It is a result of constant digital interruption.

Every notification, every short video, and every switch in attention trains your brain to lose depth.

The good news is that attention can be rebuilt.

## The Protocol for Recovery

Start with focused work blocks without distraction. Train your mind to stay in one task without switching.

Even five minutes of pure focus is powerful in the beginning.
`
  },

  {
    title: "The Reason You Can’t Focus Even When You Try Hard",
    slug: "cant-focus",
    description: "Why focus breaks due to stress and mental overload.",
    keywords: ["focus", "stress", "overthinking"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "mindset",
    image: "https://nomadlifexp.com/images/focus.jpg",
    relatedSlugs: ["mental-clarity", "attention-span-guide"],
    content: `
# The Reason You Can’t Focus Even When You Try Hard

You are not lazy. You are mentally overloaded. When your mind is full, focus naturally breaks.

## Why Focus Fails

Too many thoughts, stress, and constant input reduce mental clarity and performance.
`
  },

  {
    title: "Self Discipline Guide: Reclaim Your Attention, Rebuild Your Life",
    slug: "self-discipline-and-consistency-guide",
    description: "Discipline begins with attention. Learn how to rebuild self-control and consistency.",
    keywords: ["self discipline", "focus", "habits"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "discipline",
    image: "https://nomadlifexp.com/images/discipline.jpg",
    relatedSlugs: [
      "mental-clarity",
      "attention-span-guide",
      "stop-procrastination",
      "discipline-creates-freedom"
    ],
    content: `
# Self Discipline Guide: Reclaim Your Attention, Rebuild Your Life

Most people believe they lack discipline. They call themselves lazy, inconsistent, unmotivated. But the truth is more dangerous. The real problem is not weakness. The real problem is attention.

You sit down to focus, but a notification steals your mind. A quick scroll becomes an hour. A short video becomes a cycle. Discipline does not collapse in big failures. It collapses in small interruptions.

**Discipline breaks first in attention, not in action.**

## What Self Discipline Really Is

Self discipline is not punishment. It is not restriction. It is not forcing yourself through suffering.

Self discipline is self leadership. It is the ability to act according to long-term direction instead of short-term emotion.

Every time you choose focus over distraction, you are not just completing a task. You are shaping identity.

*Discipline is not behavior. It is identity in motion.*

## Why Discipline Feels Hard Today

It is not because people are weaker. It is because the environment is stronger.

Modern life is engineered for distraction. Social media, short content, endless entertainment, constant stimulation.

This creates:
- Attention fragmentation
- Mental fatigue
- Low discomfort tolerance

## The Hidden Cost of Weak Discipline

Without discipline, life drifts. You delay work, restart goals, avoid decisions.

The real damage is internal — you stop trusting yourself.

## Discipline Is Not Found, It Is Built

Discipline is a system outcome, not a personality trait.

Systems decide behavior when motivation disappears.

## The NomadLifeXP Discipline System

- **Awareness:** Reclaim attention through silence and meditation.
- **Energy:** Build body strength through fitness and breathwork.
- **Clarity:** Reduce mental noise with single-direction focus.
- **Systems:** Design environment, not willpower.
- **Identity:** Become someone who keeps commitments.

## Why Fitness, Yoga, and Meditation Matter

They build internal stability and control over attention.

A distracted mind cannot build a disciplined life.

## The 7 Day Reset

Day 1: Walk without phone
Day 2: Silent sitting
Day 3: Workout or yoga
Day 4: Focused task
Day 5: Remove distraction
Day 6: Reflection writing
Day 7: Morning without phone

## Why This Works

Discipline is built through repetition, not intensity.

## Final Insight

You do not need to become someone else. You need to remove what is blocking who you already are.
`
  },

  {
    title: "Why People Watch Workout Videos but Never Actually Exercise",
    slug: "workout-videos-no-action",
    description: "Psychological trap of passive fitness consumption.",
    keywords: ["fitness", "procrastination"],
    author: "Nomad Life XP",
    date: "2026-06-25",
    category: "fitness",
    image: "https://nomadlifexp.com/images/workout.jpg",
    relatedSlugs: ["fitness-consistency", "self-discipline-and-consistency-guide"],
    content: `
# Why People Watch Workout Videos but Never Actually Exercise

Watching fitness content feels motivating for a moment, but real change only happens through action.</p>

Every day, millions of people watch workout videos but never act on them.

They save routines, feel inspired, and plan to start tomorrow.

**Inspiration feels like progress — but only action creates real change.**

## Why Watching Feels So Good

Watching gives your brain a false sense of achievement.

You imagine transformation without doing the work.

*Watching creates inspiration. Action creates transformation.*

## Comfort Keeps People Stuck

Comfort feels safe, but it prevents growth.

The life you want starts on the other side of discomfort.

## Why Motivation Fails

Motivation is temporary. It comes and goes.

Consistency requires habits, not feelings.

Discipline is what works when motivation disappears.

## How to Break the Cycle

Start small: walk, stretch, do 10 pushups.

Focus on consistency instead of perfection.

## Final Thoughts

Watching can inspire you, but only action changes your life.

Your life changes when your habits change.
`
  },

  {
    title: "Fitness Consistency: Build Workout Discipline That Lasts",
    slug: "fitness-consistency",
    description: "Build long-term fitness habits.",
    keywords: ["fitness", "consistency"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "fitness",
    image: "https://nomadlifexp.com/images/fitness.jpg",
    relatedSlugs: ["fitness-is-not-about-time"],
    content: `
# Fitness Consistency

Consistency matters more than motivation.

Small repeated actions build long-term results.
`
  },

  {
    title: "Fitness Is Not About Time: Fix Your Workout Mindset",
    slug: "fitness-is-not-about-time",
    description: "Fix excuses around time and fitness.",
    keywords: ["fitness", "time management"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "fitness",
    image: "https://nomadlifexp.com/images/fitness2.jpg",
    relatedSlugs: ["fitness-consistency"],
    content: `
# Fitness Is Not About Time

You do not need more time. You need better structure.
`
  },

  {
    title: "Mental Clarity: Stop Overthinking and Regain Focus",
    slug: "mental-clarity",
    description: "Clear your mind and improve focus.",
    keywords: ["mental clarity", "focus"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "mindset",
    image: "https://nomadlifexp.com/images/mental.jpg",
    relatedSlugs: ["attention-span-guide"],
    content: `
# Mental Clarity

Overthinking creates mental noise. Clarity comes from reduction.
`
  },

  {
    title: "Why You Procrastinate and How to Stop It",
    slug: "stop-procrastination",
    description: "Break procrastination cycles.",
    keywords: ["procrastination"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "discipline",
    image: "https://nomadlifexp.com/images/procrastination.jpg",
    relatedSlugs: ["self-discipline-and-consistency-guide"],
    content: `
# Stop Procrastination

Procrastination is emotional resistance, not laziness.
`
  },

  {
    title: "You Are Not Stuck in Life",
    slug: "stuck-in-life",
    description: "Break mental loops.",
    keywords: ["stuck", "clarity"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "mindset",
    image: "https://nomadlifexp.com/images/stuck.jpg",
    relatedSlugs: ["mental-clarity"],
    content: `
# You Are Not Stuck

You are repeating patterns, not stuck forever.
`
  },

  {
    title: "Build Discipline Foundation",
    slug: "discipline-blog",
    description: "Core discipline system.",
    keywords: ["discipline"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "discipline",
    image: "https://nomadlifexp.com/images/discipline2.jpg",
    relatedSlugs: ["self-discipline-and-consistency-guide"],
    content: `
# Build Discipline Foundation

Systems create discipline, not motivation.
`
  },

  {
    title: "Discipline Creates Freedom",
    slug: "discipline-creates-freedom",
    description: "Structure creates freedom.",
    keywords: ["discipline", "freedom"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "discipline",
    image: "https://nomadlifexp.com/images/freedom.jpg",
    relatedSlugs: ["self-discipline-and-consistency-guide"],
    content: `
# Discipline Creates Freedom

Structure removes chaos and gives clarity.
`
  },

  {
    title: "Forward Bending Yoga for Stress Relief",
    slug: "forward-bending",
    description: "Yoga for relaxation and flexibility.",
    keywords: ["yoga"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "yoga",
    image: "https://nomadlifexp.com/images/yoga1.jpg",
    relatedSlugs: ["headstand"],
    content: `
# Forward Bending Yoga

This posture helps relax the nervous system.
`
  },

  {
    title: "Headstand Benefits for Body and Mind",
    slug: "headstand",
    description: "Yoga inversion benefits.",
    keywords: ["yoga"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "yoga",
    image: "https://nomadlifexp.com/images/yoga2.jpg",
    relatedSlugs: ["forward-bending"],
    content: `
# Headstand Benefits

Inversions improve focus and body awareness.
`
  }
];