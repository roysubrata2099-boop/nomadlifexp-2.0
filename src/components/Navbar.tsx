"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pillarPages = [
    { label: "Discipline", href: "/blog/category/discipline" },
    { label: "Fitness", href: "/blog/category/fitness" },
    { label: "Mindset", href: "/blog/category/mindset" },
    { label: "Yoga", href: "/yoga" },
];

export default function Navbar() {
    const currentPath = usePathname() || "/";

    const currentPillar = pillarPages.find(
        (page) =>
            currentPath === page.href ||
            currentPath.startsWith(`${page.href}/`) ||
            (page.label === "Yoga" && currentPath === "/yoga")
    );

    return (
        <header className="sticky top-0 z-50 w-full border-b border-neutral-900 bg-black/95 text-neutral-200 backdrop-blur-md">
            <nav
                className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
                aria-label="Main navigation"
            >
                <Link
                    href="/"
                    className="font-mono text-sm font-black tracking-wider text-white transition-colors hover:text-cyan-400"
                >
                    NOMADLIFEXP
                </Link>

                <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest">
                    <Link
                        href="/"
                        className="text-neutral-300 transition-colors hover:text-cyan-400"
                    >
                        Home
                    </Link>

                    <span className="text-neutral-600">/</span>

                    <Link
                        href="/blog"
                        className="text-neutral-300 transition-colors hover:text-cyan-400"
                    >
                        Blog
                    </Link>

                    {currentPillar && (
                        <>
                            <span className="text-neutral-600">/</span>
                            <span
                                className="font-bold text-cyan-400"
                                aria-current="page"
                            >
                                {currentPillar.label}
                            </span>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}
