"use client";

import React, { useState } from "react";
import Link from "next/link";

const BLOG_POSTS = [
    {
        slug: "rebuild-your-attention-span",
        category: "mindset",
        date: "2026-06-24",
        title: "Can You Rebuild Your Attention Span After Years of Digital Distraction?",
        desc: "Learn how digital distraction weakens attention span and how to rebuild focus and deep work ability."
    },
    {
        slug: "why-you-cannot-focus-overload",
        category: "mindset",
        date: "2026-06-24",
        title: "The Reason You Can't Focus Even When You Try Hard",
        desc: "Why focus breaks due to stress and mental overload."
    },
    {
        slug: "mental-clarity-stop-overthinking",
        category: "mindset",
        date: "2026-06-24",
        title: "Mental Clarity: Stop Overthinking and Regain Focus",
        desc: "Clear your mind and improve focus."
    },
    {
        slug: "you-are-not-stuck-in-life",
        category: "mindset",
        date: "2026-06-24",
        title: "You Are Not Stuck in Life",
        desc: "Break mental loops."
    },
    {
        slug: "self-discipline-comprehensive-guide",
        category: "discipline",
        date: "2026-06-24",
        title: "Self Discipline Guide: Reclaim Your Attention, Rebuild Your Life",
        desc: "Discipline begins with attention."
    },
    {
        slug: "why-you-procrastinate-how-to-stop",
        category: "discipline",
        date: "2026-06-24",
        title: "Why You Procrastinate and How to Stop It",
        desc: "Break procrastination cycles."
    },
    {
        slug: "passive-fitness-consumption-trap",
        category: "fitness",
        date: "2026-06-24",
        title: "Why People Watch Workout Videos but Never Actually Exercise",
        desc: "Psychological trap of passive fitness consumption."
    },
    {
        slug: "consistency-myth-showing-up-beats-perfect",
        category: "fitness",
        date: "2026-06-25",
        title: "The Consistency Myth: Why Showing Up Beats the Perfect Workout",
        desc: "Why a flawed 15-minute workout beats a skipped 60-minute session."
    },
    {
        slug: "build-workout-habit-outlast-motivation",
        category: "fitness",
        date: "2026-06-26",
        title: "How to Build a Workout Habit That Outlasts Your Motivation",
        desc: "Designing a frictionless system for permanent lifestyle fitness."
    },
    {
        slug: "forward-bending-yoga-stress-relief",
        category: "yoga",
        date: "2026-06-24",
        title: "Forward Bending Yoga for Stress Relief",
        desc: "How forward bending yoga positions encourage the body to fold inward, release spinal tension, and calm the nervous system."
    },
    {
        slug: "headstand-benefits-body-mind-safety",
        category: "yoga",
        date: "2026-06-24",
        title: "Headstand Benefits for Body and Mind",
        desc: "Explore the physical and mental benefits of practicing the headstand posture safely."
    },
    {
        slug: "forearm-stand-yoga-focus-confidence",
        category: "yoga",
        date: "2026-06-24",
        title: "What Happens When You Try Forearm Stand Yoga for Focus and Confidence",
        desc: "An in-depth look at how forearm stand builds core power, sharpens psychological concentration, and reduces a fear of failure."
    }
];

const FILTER_CATEGORIES = ["all", "mindset", "discipline", "fitness", "yoga"];

export default function BlogIndex() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredPosts = activeFilter === "all"
        ? BLOG_POSTS
        : BLOG_POSTS.filter(p => p.category === activeFilter);

    return (
        <div className="min-h-screen flex flex-col items-center justify-start px-6 pt-32 pb-24 bg-[#060b18] text-white antialiased">

            {/* HEADER PANELS */}
            <div className="max-w-3xl w-full text-center mb-20 flex flex-col items-center justify-center">
                <div className="space-y-4 mb-8">
                    <span className="text-xs uppercase tracking-[0.3em] font-bold" style={{ color: 'var(--glow-amber, #f59e0b)' }}>
                        Articles & Insights
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase fiery-glow-text">
                        NomadLifeXP Blog
                    </h1>
                </div>

                <p className="max-w-xl mx-auto text-sm font-light leading-relaxed mb-12" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                    Cultivating discipline, functional fitness, modern yoga, and an unshakeable mindset.
                </p>

                {/* FILTERS PANEL */}
                <div className="flex flex-wrap justify-center gap-3 pt-2 border-b border-white/5 pb-8 w-full">
                    {FILTER_CATEGORIES.map((cat) => {
                        const isSelected = activeFilter === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className="px-6 py-2.5 text-xs uppercase tracking-widest transition-all cursor-pointer font-medium border"
                                style={{
                                    borderColor: isSelected ? 'var(--glow-cyan, #06b6d4)' : 'rgba(255,255,255,0.08)',
                                    backgroundColor: isSelected ? 'var(--glow-cyan, #06b6d4)' : 'transparent',
                                    color: isSelected ? '#000000' : 'var(--text-muted, #94a3b8)',
                                    boxShadow: isSelected ? '0 0 15px rgba(6,182,212,0.2)' : 'none'
                                }}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* FEED LAYOUT BLOCK */}
            <div className="max-w-3xl w-full space-y-8 flex flex-col items-center justify-center">
                {filteredPosts.map((post, index) => (
                    <article
                        key={index}
                        className="w-full border border-white/5 bg-[#0b132b]/40 rounded-xl text-left transition-all duration-300 hover:border-cyan-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm group"
                    >
                        {/* UPDATED ROUTE TO MATCH THE 'posts' SUBFOLDER */}
                        <Link href={`/blog/posts/${post.slug}`} className="block p-8 w-full h-full cursor-pointer">

                            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] mb-6 border-b border-white/5 pb-4" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                                <span className="font-bold tracking-widest" style={{ color: 'var(--glow-amber, #f59e0b)' }}>
                  // {post.category}
                                </span>
                                <span className="font-light opacity-80">{post.date}</span>
                            </div>

                            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4 group-hover:text-cyan-400 transition-colors text-white duration-300">
                                {post.title}
                            </h2>

                            <p className="text-sm font-light leading-relaxed mb-6" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                                {post.desc}
                            </p>

                            <span className="text-xs font-bold tracking-widest uppercase inline-flex items-center gap-1 transition-colors group-hover:text-white" style={{ color: 'var(--glow-cyan, #06b6d4)' }}>
                                Read Post <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200">→</span>
                            </span>

                        </Link>
                    </article>
                ))}
            </div>

        </div>
    );
}