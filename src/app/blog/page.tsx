"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { posts } from "@/lib/posts";

// Explicit structural contracts to enforce zero type implicit-any leaks
interface PostItem {
    slug?: string;
    title?: string;
    desc?: string;
    description?: string;
    pillar?: string;
    category?: string;
    keywords?: string[];
}

export default function BlogIndex() {
    const [searchQuery, setSearchQuery] = useState<string>("all");
    const [activePillar, setActivePillar] = useState<string>("all");
    const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

    const fixedPillars: string[] = ["all", "mindset", "discipline", "fitness", "yoga", "travel"];

    // Global Safe Cast Layer Array Definition
    const safePosts = (Array.isArray(posts) ? posts : []) as PostItem[];

    // Strict Explicit Pillar Matching Framework Matrix Rule
    const postMatchesPillar = (post: PostItem | null | undefined, targetPillar: string): boolean => {
        if (!post) return false;
        const target = String(targetPillar || "").toLowerCase().trim();
        if (target === "all") return true;

        const pillarField = String(post.pillar || "").toLowerCase().trim();
        if (pillarField === target) return true;

        const categoryField = String(post.category || "").toLowerCase().trim();
        if (categoryField === target) return true;

        return false;
    };

    // Memoized Filter Pipeline
    const filteredPosts = useMemo<PostItem[]>(() => {
        return safePosts.filter((post: PostItem) => {
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
                    safeKeywords.some((k: string) => String(k || "").toLowerCase().includes(cleanQuery)))
            );
        });
    }, [searchQuery, activePillar, safePosts]);

    return (
        <div className="relative min-h-screen bg-black text-white antialiased font-sans selection:bg-cyan-500 selection:text-black overflow-hidden">

            {/* Ambient Lighting Background Accents */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

            {/* High-Fi Background Mainframe Construction Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">

                {/* Back to Main Directory Navigation Protocol Link */}
                <div className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                        <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
                        RETURN_TO_HOME
                    </Link>
                </div>

                {/* Header Block Section */}
                <header className="mb-16 max-w-5xl space-y-5">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <p className="text-xs uppercase tracking-[0.4em] font-mono text-cyan-400">
                            NomadLifeXP // System Core
                        </p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
                        Human Transformation <br />
                        <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                            Matrix Index
                        </span>
                    </h1>
                    <p className="text-base md:text-lg font-light leading-relaxed max-w-3xl text-neutral-400 font-mono">
                        Deploying tactical workflows across psychological protocols, bio-mechanics, routine optimization frameworks, and nomadic system architectures.
                    </p>
                </header>

                {/* System Control Console Block */}
                <div className="flex flex-col gap-8 mb-16 bg-black border border-neutral-900 p-6 md:p-8 rounded-none relative">

                    {/* Console Header Status Bar */}
                    <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
                        <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">System_Directories ({filteredPosts.length})</span>
                        <div className="flex gap-1.5 items-center">
                            <span className="w-1.5 h-1.5 bg-neutral-800" />
                            <span className="w-1.5 h-1.5 bg-neutral-800" />
                            <span className="w-1.5 h-1.5 bg-cyan-500 animate-pulse" />
                        </div>
                    </div>

                    {/* Filter Directories Navigation Nodes */}
                    <div className="flex flex-wrap gap-2">
                        {fixedPillars.map((pillar: string) => {
                            const targetKey = String(pillar || "").toLowerCase().trim();
                            const postCount = targetKey === "all"
                                ? safePosts.length
                                : safePosts.filter((p: PostItem) => postMatchesPillar(p, pillar)).length;

                            const isLive = postCount > 0 || targetKey === "travel";
                            const isActive = activePillar.toLowerCase().trim() === targetKey;

                            return (
                                <button
                                    key={pillar}
                                    onClick={() => setActivePillar(pillar)}
                                    disabled={!isLive}
                                    className="px-5 py-2.5 text-xs font-mono uppercase tracking-widest border transition-all duration-150 rounded-none relative"
                                    style={{
                                        cursor: isLive ? "pointer" : "not-allowed",
                                        backgroundColor: isActive ? 'rgba(6,182,212,0.08)' : 'transparent',
                                        color: isActive ? "#22d3ee" : isLive ? "#a3a3a3" : "#404040",
                                        borderColor: isLive ? (isActive ? '#06b6d4' : '#262626') : '#171717',
                                    }}
                                >
                                    <span className="flex items-center gap-2 font-bold">
                                        {pillar}
                                        {postCount > 0 && (
                                            <span className="text-[10px] opacity-60">
                                                ({postCount})
                                            </span>
                                        )}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Filter Stream Input Node */}
                    <div className="w-full max-w-xl space-y-2">
                        <div className="flex justify-between items-center">
                            <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono block">Query Stream Pipeline_</label>
                            {searchQuery !== "all" && searchQuery !== "" && (
                                <span className="text-[9px] font-mono bg-cyan-950 border border-cyan-800 px-2 py-0.5 text-cyan-400 uppercase tracking-wider">Live_Filter</span>
                            )}
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Execute keyword string lookup..."
                                value={searchQuery === "all" ? "" : searchQuery}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value || "all")}
                                className="p-4 w-full rounded-none border outline-none font-mono text-sm tracking-wider transition-all duration-200 bg-neutral-950/40 border-neutral-800 text-white focus:border-cyan-500 placeholder:text-neutral-700"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-600 font-mono text-xs pointer-events-none">
                                [SYS_IN]
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2-Column Mainframes Matrix Grid */}
                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredPosts.map((post: PostItem, idx: number) => {
                            if (!post) return null;

                            const postKey = String(post.slug || idx).trim();
                            const isHovered = hoveredSlug === postKey;
                            const cleanSlug = String(post.slug || "").replace("#", "").trim();
                            const safeKeywordsList: string[] = Array.isArray(post.keywords) ? post.keywords : [];

                            return (
                                <Link
                                    key={postKey}
                                    href={`/blog/posts/${cleanSlug || ""}`}
                                    onMouseEnter={() => setHoveredSlug(postKey)}
                                    onMouseLeave={() => setHoveredSlug(null)}
                                    className="border rounded-none p-8 flex flex-col justify-between transition-all duration-300 bg-neutral-950/20 backdrop-blur-sm relative overflow-hidden"
                                    style={{
                                        borderColor: isHovered ? '#06b6d4' : '#171717',
                                        boxShadow: isHovered ? "0 20px 40px -15px rgba(6, 182, 212, 0.1)" : "none",
                                    }}
                                >
                                    {/* Card Content Head Deck */}
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-xs font-mono font-bold uppercase tracking-widest">
                                            <div className="flex gap-2 items-center">
                                                <span
                                                    onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
                                                        e.stopPropagation();
                                                        e.preventDefault();
                                                        const fallbackPillar = post.pillar || post.category || "all";
                                                        setActivePillar(String(fallbackPillar).toLowerCase().trim());
                                                    }}
                                                    className="text-cyan-400 hover:text-cyan-300 cursor-pointer"
                                                >
                                                    {post.pillar || post.category || "protocol"}
                                                </span>
                                                <span className="text-neutral-800">/</span>
                                                <span className="text-neutral-500">
                                                    {String(post.category || "general").toUpperCase().replace(/-/g, "_")}
                                                </span>
                                            </div>
                                            <span className="text-neutral-600 font-normal">
                                                ID: {idx < 9 ? `0${idx + 1}` : idx + 1}
                                            </span>
                                        </div>

                                        <h3
                                            className="text-xl font-bold tracking-tight leading-snug uppercase transition-colors duration-200"
                                            style={{ color: isHovered ? '#06b6d4' : '#ffffff' }}
                                        >
                                            {post.title || "Untitled Matrix Protocol"}
                                        </h3>

                                        <p className="text-sm font-light leading-relaxed text-neutral-400 pb-2">
                                            {post.desc || post.description || "No execution summary found."}
                                        </p>
                                    </div>

                                    {/* Card Footer Structural Interface Elements */}
                                    <div className="mt-6 space-y-5">
                                        <div className="flex flex-wrap gap-1.5">
                                            {safeKeywordsList.map((kw: string, kwIdx: number) => {
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
                                                        className="text-[11px] font-mono bg-neutral-900/40 border border-neutral-800 px-2 py-0.5 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                                                    >
                                                        #{cleanKw}
                                                    </span>
                                                );
                                            })}
                                        </div>

                                        <div
                                            className="w-full text-center py-3 text-xs font-mono font-bold uppercase tracking-widest border transition-all duration-200"
                                            style={{
                                                backgroundColor: isHovered ? '#06b6d4' : 'transparent',
                                                color: isHovered ? '#000000' : '#ffffff',
                                                borderColor: isHovered ? '#06b6d4' : 'rgba(255,255,255,0.1)'
                                            }}
                                        >
                                            Launch Protocol Study &rarr;
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-24 border border-dashed border-neutral-800 bg-neutral-950/40">
                        <p className="text-sm text-neutral-500 font-mono uppercase tracking-wider mb-4">
                            System Alert: No matching execution files found inside current directory lookup.
                        </p>
                        <button
                            onClick={() => { setSearchQuery("all"); setActivePillar("all"); }}
                            className="bg-none border-none font-bold text-xs font-mono uppercase tracking-widest underline text-cyan-400"
                        >
                            Reset Matrix Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}