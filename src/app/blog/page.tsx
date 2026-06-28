"use client";

import React, { useState } from "react";
import Link from "next/link";
// Directly import the 'posts' variable from your lib file to remove wildcard complexity
import { posts } from "@/lib/posts";

interface SafePostItem {
    slug?: string;
    category?: string;
    title?: string;
    desc?: string;
    description?: string;
    [key: string]: any;
}

export default function BlogIndex(): React.JSX.Element {
    const [activeFilter, setActiveFilter] = useState<string>("all");

    const FILTER_CATEGORIES = ["all", "mindset", "discipline", "fitness", "yoga"];

    const INDEX_CARDS = [
        { id: "mindset", title: "Mindset" },
        { id: "discipline", title: "Discipline" },
        { id: "fitness", title: "Fitness" },
        { id: "yoga", title: "Yoga" }
    ];

    // Safely verify if posts exists as an array
    const safePosts: SafePostItem[] = Array.isArray(posts) ? (posts as SafePostItem[]) : [];

    return (
        <div className="min-h-screen flex flex-col items-center justify-start px-6 pt-32 pb-24 bg-[#060b18] text-white antialiased">

            {/* HEADER PANELS */}
            <div className="max-w-5xl w-full text-center mb-20 flex flex-col items-center justify-center">
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
                        const isSelected = activeFilter === String(cat);
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

            {/* KNOWLEDGE INDEX GRID LAYOUT */}
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                {INDEX_CARDS.map((card) => {
                    const sectionPosts = safePosts.filter(
                        (p) => String(p?.category || "").toLowerCase() === String(card.id)
                    );

                    if (activeFilter !== "all" && activeFilter !== card.id) return null;

                    return (
                        <div
                            key={card.id}
                            className="w-full border border-white/5 bg-[#0b132b]/40 rounded-xl text-left transition-all duration-300 hover:border-cyan-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm p-8 flex flex-col justify-between group"
                        >
                            <div>
                                {/* Category Header */}
                                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] mb-6 border-b border-white/5 pb-4">
                                    <h2 className="font-bold tracking-widest text-white">
                                        {card.title}
                                    </h2>
                                </div>

                                {/* Link List */}
                                {sectionPosts.length > 0 ? (
                                    <ul className="space-y-5 mb-8">
                                        {sectionPosts.map((post: SafePostItem, postIdx: number) => (
                                            <li key={post?.slug || String(postIdx)} className="group/item">
                                                <Link
                                                    href={`/blog/posts/${post?.slug || ""}`}
                                                    className="block cursor-pointer"
                                                >
                                                    <h3 className="text-base font-semibold tracking-tight text-slate-200 group-hover/item:text-cyan-400 transition-colors duration-200 mb-1">
                                                        {post?.title || "Untitled Article"}
                                                    </h3>
                                                    {(post?.desc || post?.description) && (
                                                        <p className="text-xs font-light line-clamp-2" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                                                            {post.desc || post.description}
                                                        </p>
                                                    )}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-xs font-light italic mb-8" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                                        No articles compiled under this index node yet.
                                    </p>
                                )}
                            </div>

                            {/* View Filter Deep Dive */}
                            <button
                                onClick={() => setActiveFilter(card.id)}
                                className="text-xs font-bold tracking-widest uppercase inline-flex items-center gap-1 transition-colors hover:text-white mt-auto self-start cursor-pointer group"
                                style={{ color: 'var(--glow-cyan, #06b6d4)' }}
                            >
                                Explore {card.title} <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200">→</span>
                            </button>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}