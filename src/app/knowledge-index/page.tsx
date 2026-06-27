"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { posts } from "@/lib/posts";

export default function KnowledgeIndexPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activePillar, setActivePillar] = useState<string>("all");
    const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

    // Hardcoded core tracking array guarantees absolute pillar layout order
    const fixedPillars = ["all", "mindset", "discipline", "fitness", "yoga", "travel"];

    // Ultra-forgiving helper to check if a post belongs to a pillar
    const postMatchesPillar = (post: any, targetPillar: string) => {
        if (!post) return false;
        const target = targetPillar.toLowerCase().trim();
        if (target === "all") return true;

        // Check if the pillar property matches
        const pillarField = String(post.pillar || "").toLowerCase().trim();
        if (pillarField === target) return true;

        // Fallback: Check if the category property matches (just in case fields are swapped)
        const categoryField = String(post.category || "").toLowerCase().trim();
        if (categoryField === target) return true;

        return false;
    };

    const filteredPosts = useMemo(() => {
        return posts.filter((post: any) => {
            if (!post) return false;

            // Validate if it matches the selected tab
            const matchesPillar = postMatchesPillar(post, activePillar);

            const cleanQuery = searchQuery.toLowerCase().trim();
            if (!cleanQuery) return matchesPillar;

            const safeTitle = (post.title || "").toLowerCase();
            const safeDescription = (post.description || "").toLowerCase();
            const safeKeywords = Array.isArray(post.keywords) ? post.keywords : [];

            return (
                matchesPillar &&
                (safeTitle.includes(cleanQuery) ||
                    safeDescription.includes(cleanQuery) ||
                    safeKeywords.some((k: any) => String(k).toLowerCase().includes(cleanQuery)))
            );
        });
    }, [searchQuery, activePillar]);

    return (
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1rem", fontFamily: "sans-serif", backgroundColor: "transparent" }}>
            {/* Header Deck */}
            <header style={{ marginBottom: "3.5rem" }}>
                <p style={{ textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "0.75rem", color: "var(--glow-cyan)", fontWeight: 600, margin: "0 0 0.5rem 0" }}>
                    NomadLifeXP // System Architecture
                </p>
                <h1 style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-0.03em", margin: 0, color: "var(--text-main)" }}>
                    Human Transformation Matrix
                </h1>
                <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", marginTop: "0.6rem", maxWidth: "600px", lineHeight: "1.5" }}>
                    Explore foundational protocols spanning cognitive clarity, habit mechanics, intentional movement, and mobile lifestyle execution.
                </p>
            </header>

            {/* Control Console */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
                {/* Pillar Selection Deck */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {fixedPillars.map((pillar) => {
                        // Count posts matching this pillar using our smart helper
                        const postCount = pillar === "all"
                            ? posts.length
                            : posts.filter((p) => postMatchesPillar(p, pillar)).length;

                        // Force tabs to stay open and clickable if it's "all", "travel", or has posts
                        const isLive = postCount > 0 || pillar === "all";
                        const isActive = activePillar.toLowerCase().trim() === pillar.toLowerCase().trim();

                        return (
                            <button
                                key={pillar}
                                onClick={() => setActivePillar(pillar)}
                                disabled={!isLive && pillar !== "travel"}
                                style={{
                                    padding: "0.6rem 1.2rem",
                                    borderRadius: "4px",
                                    border: `1px solid ${isActive ? "var(--glow-cyan)" : "var(--text-main)"}`,
                                    fontSize: "0.8rem",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em",
                                    fontWeight: 600,
                                    cursor: isLive || pillar === "travel" ? "pointer" : "not-allowed",
                                    backgroundColor: isActive ? "var(--glow-cyan)" : "transparent",
                                    color: isActive ? "#fff" : isLive ? "var(--text-main)" : "#555",
                                    borderColor: isLive ? (isActive ? "var(--glow-cyan)" : "var(--text-main)") : "#333",
                                    transition: "all 0.15s ease",
                                }}
                            >
                                {pillar} {pillar === "travel" && postCount === 0 && "⚡ (System Coming)"}
                            </button>
                        );
                    })}
                </div>

                {/* Live Search Field */}
                <input
                    type="text"
                    placeholder="Search by keyword, core symptom, or practice..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                        padding: "0.8rem 1rem",
                        fontSize: "1rem",
                        width: "100%",
                        maxWidth: "450px",
                        borderRadius: "4px",
                        border: "1px solid var(--text-main)",
                        outline: "none",
                        backgroundColor: "var(--bg-surface-blue)",
                        color: "var(--text-main)"
                    }}
                />
            </div>

            {/* Dynamic Module Grid */}
            {filteredPosts.length > 0 ? (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
                    {filteredPosts.map((post: any) => {
                        if (!post) return null;
                        const isHovered = hoveredSlug === post.slug;
                        const cleanSlug = String(post.slug || "").replace("#", "").trim();

                        return (
                            <Link
                                key={post.slug}
                                href={`/blog/posts/${cleanSlug}`}
                                onMouseEnter={() => setHoveredSlug(post.slug)}
                                onMouseLeave={() => setHoveredSlug(null)}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    border: isHovered ? "1px solid var(--glow-cyan)" : "1px solid #222",
                                    borderRadius: "6px",
                                    padding: "1.5rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    backgroundColor: "var(--bg-surface-blue)",
                                    boxShadow: isHovered ? "0 10px 25px -5px rgba(0, 0, 0, 0.3)" : "none",
                                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                                    cursor: "pointer"
                                }}
                            >
                                {/* Card Header Content Block */}
                                <div>
                                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                        <span
                                            onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
                                                e.stopPropagation();
                                                e.preventDefault();
                                                const fallbackPillar = post.pillar || post.category || "all";
                                                setActivePillar(String(fallbackPillar).toLowerCase().trim());
                                            }}
                                            style={{ color: "var(--glow-cyan)", cursor: "pointer", textDecoration: "underline" }}
                                        >
                                            {post.pillar || post.category || "protocol"}
                                        </span>
                                        <span style={{ color: "var(--text-muted)" }}>/</span>
                                        <span style={{ color: "var(--text-muted)" }}>{String(post.category || "general").replace("-", " ")}</span>
                                    </div>
                                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginTop: "0.75rem", marginBottom: "0.5rem", lineHeight: "1.35", color: isHovered ? "var(--glow-cyan)" : "var(--text-main)" }}>
                                        {post.title}
                                    </h3>
                                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.5", marginBottom: "1.5rem" }}>
                                        {post.description}
                                    </p>
                                </div>

                                {/* Card Footer Control Block */}
                                <div>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.25rem" }}>
                                        {(post.keywords || []).map((kw: string) => (
                                            <span
                                                key={kw}
                                                onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
                                                    e.stopPropagation();
                                                    e.preventDefault();
                                                    setSearchQuery(kw);
                                                }}
                                                style={{
                                                    fontSize: "0.75rem",
                                                    color: "var(--text-main)",
                                                    backgroundColor: "#1e293b",
                                                    padding: "0.2rem 0.5rem",
                                                    borderRadius: "4px",
                                                    cursor: "pointer",
                                                    transition: "background-color 0.1s ease"
                                                }}
                                            >
                                                #{kw}
                                            </span>
                                        ))}
                                    </div>

                                    <div
                                        style={{
                                            display: "block",
                                            width: "100%",
                                            textAlign: "center",
                                            padding: "0.65rem 0",
                                            backgroundColor: isHovered ? "var(--glow-cyan)" : "var(--bg-deep-blue)",
                                            color: "#fff",
                                            borderRadius: "4px",
                                            fontSize: "0.85rem",
                                            fontWeight: 600,
                                            border: "1px solid var(--text-main)"
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
                <div style={{ textTransform: "none", textAlign: "center", padding: "4rem 2rem", border: "1px dashed var(--text-muted)", borderRadius: "6px" }}>
                    <p style={{ color: "var(--text-muted)", fontSize: "1rem", margin: "0 0 1rem 0" }}>No matching transformation protocols found.</p>
                    <button
                        onClick={() => { setSearchQuery(""); setActivePillar("all"); }}
                        style={{ background: "none", border: "none", color: "var(--glow-cyan)", textDecoration: "underline", cursor: "pointer", fontWeight: 700, fontSize: "0.9rem" }}
                    >
                        Reset Matrix Filters
                    </button>
                </div>
            )}
        </div>
    );
}