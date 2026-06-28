"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { posts } from "@/lib/posts";

export default function BlogIndex() {
    const [searchQuery, setSearchQuery] = useState("all");
    const [activePillar, setActivePillar] = useState("all");
    const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

    const fixedPillars = ["all", "mindset", "discipline", "fitness", "yoga", "travel"];

    // 1. Fallback safety array
    const safePosts = Array.isArray(posts) ? posts : [];

    // 2. Type-agnostic normalizer helper
    const postMatchesPillar = (post: any, targetPillar: string): boolean => {
        if (!post) return false;
        const target = String(targetPillar || "").toLowerCase().trim();
        if (target === "all") return true;

        const pillarField = String(post.pillar || "").toLowerCase().trim();
        if (pillarField === target) return true;

        const categoryField = String(post.category || "").toLowerCase().trim();
        if (categoryField === target) return true;

        return false;
    };

    // 3. Performance-isolated lookup memo
    const filteredPosts = useMemo(() => {
        return safePosts.filter((post: any) => {
            if (!post) return false;

            const matchesPillar = postMatchesPillar(post, activePillar);
            const cleanQuery = String(searchQuery || "").toLowerCase().trim();
            if (!cleanQuery || cleanQuery === "all") return matchesPillar;

            const safeTitle = String(post.title || "").toLowerCase();
            const safeDescription = String(post.desc || post.description || "").toLowerCase();
            const safeKeywords = Array.isArray(post.keywords) ? post.keywords : [];

            return (
                matchesPillar &&
                (safeTitle.includes(cleanQuery) ||
                    safeDescription.includes(cleanQuery) ||
                    safeKeywords.some((k: any) => String(k || "").toLowerCase().includes(cleanQuery)))
            );
        });
    }, [searchQuery, activePillar, safePosts]);

    return (
        <div className="max-w-7xl mx-auto px-6 pt-36 pb-32 bg-transparent text-white antialiased font-sans selection:bg-cyan-500 selection:text-black">

            {/* Header Deck */}
            <header className="mb-20 max-w-5xl space-y-5">
                <p className="text-sm md:text-base uppercase tracking-[0.4em] font-black" style={{ color: 'var(--glow-cyan, #06b6d4)' }}>
                    NomadLifeXP // System Architecture
                </p>
                {/* Scaled down header elements */}
                <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase leading-tight">
                    Human Transformation Matrix
                </h1>
                <p className="text-base md:text-xl font-light leading-relaxed max-w-4xl text-slate-400">
                    Explore foundational protocols spanning cognitive clarity, habit mechanics, intentional movement, and mobile lifestyle execution.
                </p>
            </header>

            {/* Control Console */}
            <div className="flex flex-col gap-8 mb-16">

                {/* Pillar Selection Deck */}
                <div className="flex flex-wrap gap-3 border-b border-white/5 pb-8">
                    {fixedPillars.map((pillar) => {
                        const targetKey = String(pillar || "").toLowerCase().trim();
                        const postCount = targetKey === "all"
                            ? safePosts.length
                            : safePosts.filter((p: any) => postMatchesPillar(p, pillar)).length;

                        const isLive = postCount > 0 || targetKey === "travel";
                        const isActive = activePillar.toLowerCase().trim() === targetKey;

                        return (
                            <button
                                key={pillar}
                                onClick={() => setActivePillar(pillar)}
                                disabled={!isLive}
                                className="px-7 py-3 text-sm uppercase tracking-[0.2em] font-bold border transition-all duration-200 rounded-none"
                                style={{
                                    cursor: isLive ? "pointer" : "not-allowed",
                                    backgroundColor: isActive ? 'var(--glow-cyan, #06b6d4)' : 'transparent',
                                    color: isActive ? "#000000" : isLive ? "#ffffff" : "#334155",
                                    borderColor: isLive ? (isActive ? 'var(--glow-cyan, #06b6d4)' : 'rgba(255,255,255,0.15)') : '#1e293b',
                                    boxShadow: isActive ? '0 0 25px rgba(6,182,212,0.3)' : 'none'
                                }}
                            >
                                {pillar} {targetKey === "travel" && " ⚡ (System Coming)"}
                            </button>
                        );
                    })}
                </div>

                {/* Live Search Field */}
                <div className="w-full max-w-xl space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-slate-500 font-mono block">Query Pipeline Filter_</label>
                    <input
                        type="text"
                        placeholder="SEARCH PROTOCOLS..."
                        value={searchQuery === "all" ? "" : searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value || "all")}
                        className="p-4 text-base w-full rounded-none border outline-none font-mono uppercase tracking-wider transition-all duration-200 bg-[#060b18]/80 border-white/10 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                </div>
            </div>

            {/* Dynamic Module Grid */}
            {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.map((post: any, idx: number) => {
                        if (!post) return null;

                        const postKey = String(post.slug || idx).trim();
                        const isHovered = hoveredSlug === postKey;
                        const cleanSlug = String(post.slug || "").replace("#", "").trim();
                        const safeKeywordsList = Array.isArray(post.keywords) ? post.keywords : [];

                        return (
                            <Link
                                key={postKey}
                                href={`/blog/posts/${cleanSlug || ""}`}
                                onMouseEnter={() => setHoveredSlug(postKey)}
                                onMouseLeave={() => setHoveredSlug(null)}
                                className="border rounded-none p-8 flex flex-col justify-between transition-all duration-300 bg-[#0b132b]/20 backdrop-blur-md group relative overflow-hidden"
                                style={{
                                    borderColor: isHovered ? 'var(--glow-cyan, #06b6d4)' : 'rgba(255,255,255,0.05)',
                                    boxShadow: isHovered ? "0 20px 40px -15px rgba(6, 182, 212, 0.15)" : "none",
                                }}
                            >
                                {/* Card Header Content Block */}
                                <div className="space-y-4">
                                    <div className="flex gap-2 items-center text-xs font-mono font-bold uppercase tracking-[0.25em]">
                                        <span
                                            onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
                                                e.stopPropagation();
                                                e.preventDefault();
                                                const fallbackPillar = post.pillar || post.category || "all";
                                                setActivePillar(String(fallbackPillar).toLowerCase().trim());
                                            }}
                                            className="hover:underline cursor-pointer"
                                            style={{ color: 'var(--glow-cyan, #06b6d4)' }}
                                        >
                                            {post.pillar || post.category || "protocol"}
                                        </span>
                                        <span className="text-slate-700">/</span>
                                        <span className="text-slate-500">
                                            {String(post.category || "general").replace("-", " ")}
                                        </span>
                                    </div>

                                    <h3
                                        className="text-xl md:text-2xl font-black tracking-tight leading-tight uppercase transition-colors duration-200"
                                        style={{ color: isHovered ? 'var(--glow-cyan, #06b6d4)' : '#ffffff' }}
                                    >
                                        {post.title || "Untitled Matrix Protocol"}
                                    </h3>

                                    <p className="text-sm font-light leading-relaxed text-slate-400 pb-4">
                                        {post.desc || post.description || "No execution summary found."}
                                    </p>
                                </div>

                                {/* Card Footer Control Block */}
                                <div className="mt-6 space-y-6">
                                    <div className="flex flex-wrap gap-2">
                                        {safeKeywordsList.map((kw: any, kwIdx: number) => {
                                            const cleanKw = String(kw || "").trim();
                                            if (!cleanKw) return null;
                                            return (
                                                <span
                                                    key={`${cleanKw}-${kwIdx}`}
                                                    onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
                                                        e.stopPropagation();
                                                        e.preventDefault();
                                                        setSearchQuery(cleanKw);
                                                    }}
                                                    className="text-xs font-mono bg-slate-900/80 border border-white/5 px-2.5 py-1 rounded-none transition-colors duration-150 text-slate-400 hover:bg-slate-800 hover:text-white"
                                                >
                                                    #{cleanKw}
                                                </span>
                                            );
                                        })}
                                    </div>

                                    <div
                                        className="w-full text-center py-3.5 rounded-none text-xs font-mono font-bold uppercase tracking-[0.25em] border transition-all duration-300"
                                        style={{
                                            backgroundColor: isHovered ? 'var(--glow-cyan, #06b6d4)' : 'transparent',
                                            color: isHovered ? '#000000' : '#ffffff',
                                            borderColor: isHovered ? 'var(--glow-cyan, #06b6d4)' : 'rgba(255,255,255,0.1)'
                                        }}
                                    >
                                        Launch Protocol Study
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            ) : (
                <div className="text-center py-24 border border-dashed border-white/10 rounded-none bg-[#060b18]/40">
                    <p className="text-base text-slate-500 font-mono uppercase tracking-wider mb-4">
                        System Alert: No matching execution files found inside current directory lookup.
                    </p>
                    <button
                        onClick={() => { setSearchQuery("all"); setActivePillar("all"); }}
                        className="bg-none border-none font-bold text-xs font-mono uppercase tracking-[0.2em] underline cursor-pointer"
                        style={{ color: 'var(--glow-cyan, #06b6d4)' }}
                    >
                        Reset Matrix Filters
                    </button>
                </div>
            )}
        </div>
    );
}