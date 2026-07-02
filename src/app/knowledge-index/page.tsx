"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { posts } from "@/lib/posts";

export default function KnowledgeIndexPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activePillar, setActivePillar] = useState("all");

    const safePosts = Array.isArray(posts) ? posts.filter(Boolean) : [];

    const pillars = ["all", "mindset", "discipline", "fitness", "yoga", "travel"];

    const filteredPosts = useMemo(() => {
        const q = searchQuery.toLowerCase().trim();

        return safePosts.filter((post: any) => {
            const matchesPillar =
                activePillar === "all" ||
                String(post?.pillar).toLowerCase() === activePillar ||
                String(post?.category).toLowerCase() === activePillar;

            if (!matchesPillar) return false;
            if (!q) return true;

            return (
                String(post?.title).toLowerCase().includes(q) ||
                String(post?.description).toLowerCase().includes(q)
            );
        });
    }, [searchQuery, activePillar, safePosts]);

    return (
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 1rem" }}>

            <h1>Knowledge Index</h1>

            {/* FILTERS */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {pillars.map((p) => (
                    <button
                        key={p}
                        onClick={() => setActivePillar(p)}
                        style={{
                            padding: "6px 12px",
                            border: "1px solid #ccc",
                            background: activePillar === p ? "#00c2ff" : "transparent",
                            color: activePillar === p ? "#fff" : "#000",
                            cursor: "pointer",
                        }}
                    >
                        {p}
                    </button>
                ))}
            </div>

            {/* SEARCH */}
            <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search posts..."
                style={{ marginTop: 20, padding: 10, width: "100%", maxWidth: 400 }}
            />

            {/* POSTS */}
            <div style={{ marginTop: 30, display: "grid", gap: 15 }}>
                {filteredPosts.map((post: any) => {
                    const slug = String(post?.slug || "");

                    const title = String(post?.title || "Untitled");
                    const description = String(post?.description || "");

                    return (
                        <Link
                            key={slug}
                            href={`/blog/posts/${slug}`}
                            style={{
                                padding: 16,
                                border: "1px solid #ddd",
                                borderRadius: 8,
                                textDecoration: "none",
                                color: "#000",
                            }}
                        >
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}