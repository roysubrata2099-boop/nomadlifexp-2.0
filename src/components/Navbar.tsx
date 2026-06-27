"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/* ---------------- OPERATIONAL NAVIGATION ENGINE ---------------- */
export default function Navbar() {
    const currentPath = usePathname();

    // Safely appended the Discipline System protocol node without disrupting order
    const navigationNodes = [
        { label: "Home", href: "/" },
        { label: "Start Here", href: "/start-here" },
        { label: "Knowledge Index", href: "/knowledge-index" },
        { label: "Blog", href: "/blog" },
        { label: "Discipline System", href: "/discipline-system" },
        { label: "About", href: "/about" }
    ];

    return (
        <header className="w-full border-b border-neutral-900 bg-black text-neutral-200 selection:bg-neutral-800 selection:text-white sticky top-0 z-50 backdrop-blur-md bg-black/95 antialiased">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">

                {/* LOGO IDENTIFIER ROOT (Case-Protected) */}
                <Link
                    href="/"
                    className="font-black text-white normal-case tracking-wider text-sm font-mono hover:text-neutral-300 transition-colors"
                >
                    NomadLifeXP // Sys
                </Link>

                {/* RESPONSIVE SCALING LINK DECK */}
                <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-widest">
                    {navigationNodes.map((node) => {
                        // Evaluate real-time route path matching metrics
                        const isActive = currentPath === node.href || currentPath?.startsWith(`${node.href}/`);

                        return (
                            <Link
                                key={node.href}
                                href={node.href}
                                className={`transition-colors py-1 relative group ${isActive
                                    ? "text-white font-bold"
                                    : "text-neutral-500 hover:text-neutral-200"
                                    }`}
                            >
                                {isActive && (
                                    <span className="text-yellow-500 mr-1 animate-pulse">//</span>
                                )}
                                {node.label.toLowerCase().replace(/ /g, "_")}
                            </Link>
                        );
                    })}
                </div>

            </nav>
        </header>
    );
}