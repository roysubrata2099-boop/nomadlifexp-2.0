"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ---------------- OPERATIONAL NAVIGATION ENGINE ---------------- */
export default function Navbar() {
    const currentPath = usePathname() || "/";

    const navigationNodes = [
        { label: "Home", href: "/" },
        { label: "Start Here", href: "/start-here" },
        { label: "Knowledge Index", href: "/knowledge-index" },
        { label: "Blog", href: "/blog" },
        { label: "Discipline System", href: "/discipline-system" },
        { label: "About", href: "/about" }
    ];

    const isHomepage = currentPath === "/";

    return (
        <header className="w-full border-b border-neutral-900 bg-black text-neutral-200 selection:bg-neutral-800 selection:text-white sticky top-0 z-50 backdrop-blur-md bg-black/95 antialiased">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">

                {/* LOGO & ESCAPE VECTOR ROOT GROUP */}
                <div className="flex items-center justify-center gap-2">

                    {/* CONDITIONAL BACK TO HOME NAV NODE */}
                    {!isHomepage && (
                        <Link
                            href="/"
                            className="text-neutral-500 hover:text-cyan-400 transition-colors duration-200 text-sm font-mono pr-2 border-r border-white/10 group flex items-center justify-center"
                            title="Return to Homepage"
                        >
                            <span className="transform group-hover:-translate-x-1 transition-transform duration-200 font-bold">
                                &larr;
                            </span>
                        </Link>
                    )}

                    {/* ABSOLUTE CASE-PROTECTED BRAND LOGO */}
                    <Link
                        href="/"
                        className="font-black text-white tracking-wider text-sm font-mono hover:text-neutral-300 transition-colors block"
                    >
                        NomadLifeXP // Sys
                    </Link>
                </div>

                {/* RESPONSIVE SCALING LINK DECK */}
                <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-mono tracking-widest uppercase">
                    {navigationNodes.map((node) => {
                        // Secure active calculation routing layer
                        const isActive = currentPath === node.href || (node.href !== "/" && currentPath.startsWith(`${node.href}/`));

                        return (
                            <Link
                                key={node.href}
                                href={node.href}
                                className={`transition-colors py-1 relative group block ${isActive
                                    ? "text-white font-bold"
                                    : "text-neutral-500 hover:text-neutral-200"
                                    }`}
                            >
                                {isActive && (
                                    <span className="text-cyan-400 mr-1 animate-pulse">//</span>
                                )}
                                {String(node.label || "").toLowerCase().replace(/ /g, "_")}
                            </Link>
                        );
                    })}
                </div>

            </nav>
        </header>
    );
}