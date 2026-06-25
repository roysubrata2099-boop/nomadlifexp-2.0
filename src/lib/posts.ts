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
  canonical?: string;
  updatedDate?: string;
  readingTime?: number;
  featured?: boolean;
}

export const posts: Post[] = [
  {
    title: "Can You Rebuild Your Attention Span After Years of Digital Distraction",
    slug: "attention-span-guide",
    description: "Learn how digital distraction weakens attention span and how to rebuild focus and deep work ability.",
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
    relatedSlugs: ["attention-span-guide"],
    content: `
# The Reason You Can’t Focus Even When You Try Hard

You are not lazy. You are mentally overloaded.

## Why Focus Fails

Too many thoughts, stress, and constant input reduce mental clarity and performance.

Focus breaks when your mind has no space left to process clearly.
`
  },

  {
    title: "Self Discipline Guide: Reclaim Your Attention, Rebuild Your Life",
    slug: "self-discipline-and-consistency-guide",
    description: "Discipline begins with attention. Learn how to rebuild self-control and consistency.",
    keywords: ["self discipline", "habits", "focus"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "discipline",
    image: "https://nomadlifexp.com/images/discipline.jpg",
    relatedSlugs: ["attention-span-guide", "stop-procrastination"],
    content: `
# Self Discipline Guide

Most people think discipline is motivation. It is not. It is attention control.

## What Self Discipline Really Is

Self discipline is self leadership — choosing long-term direction over short-term emotion.

## Discipline Breaks in Attention First

Every distraction weakens identity.

## The System

- Awareness
- Energy
- Clarity
- Structure
- Identity

## Final Truth

You do not become disciplined. You remove what destroys discipline.
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
    relatedSlugs: [],
    content: `
# Why People Watch Workout Videos but Never Actually Exercise

Watching fitness content feels productive, but it creates false progress.

## Why Watching Feels Good

Your brain gets dopamine from learning, not doing.

## The Trap

Inspiration without action creates illusion of change.

## Real Rule

Only action changes the body, not consumption.

Start small. Move daily. Build consistency.
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
    relatedSlugs: [],
    content: `
# Fitness Consistency

Consistency is more important than intensity.

## Core Principle

Small actions repeated daily create transformation.

## Rule

Never miss twice.

Fitness is identity built through repetition.
`
  },

  {
    title: "Fitness Is Not About Time: Fix Your Workout Mindset",
    slug: "fitness-is-not-about-time",
    description: "Fix excuses around time and fitness.",
    keywords: ["fitness", "mindset"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "fitness",
    image: "https://nomadlifexp.com/images/fitness2.jpg",
    relatedSlugs: [],
    content: `
# Fitness Is Not About Time

You do not need more time. You need better structure.

## Truth

Even 20 minutes is enough if done consistently.

## Fix

Stop waiting for perfect time. Start now.
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
    relatedSlugs: [],
    content: `
# Mental Clarity

Overthinking creates noise in the mind.

## Solution

Reduce inputs. Increase silence.

## Result

Clarity is not gained. It is uncovered.
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
    relatedSlugs: [],
    content: `
# Stop Procrastination

Procrastination is emotional resistance.

## Why It Happens

Fear of discomfort.

## Fix

Start before you feel ready.
`
  },

  {
    title: "You Are Not Stuck in Life",
    slug: "stuck-in-life",
    description: "Break mental loops.",
    keywords: ["clarity", "mindset"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "mindset",
    image: "https://nomadlifexp.com/images/stuck.jpg",
    relatedSlugs: [],
    content: `
# You Are Not Stuck

You are repeating patterns, not trapped.

## Truth

Change your actions, change your life.
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
    relatedSlugs: [],
    content: `
# Build Discipline Foundation

Systems create discipline, not motivation.

## Rule

Structure beats willpower.
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
    relatedSlugs: [],
    content: `
# Discipline Creates Freedom

Structure removes chaos.

## Truth

Discipline = freedom.
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
    relatedSlugs: [],
    content: `
# Forward Bending Yoga

Helps calm the nervous system.

## Benefit

Reduces stress and improves relaxation.
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
    relatedSlugs: [],
    content: `
# Headstand Benefits

Inversions improve focus and circulation.

## Effect

Better body awareness and mental clarity.
`
  }
];