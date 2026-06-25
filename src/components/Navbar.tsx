"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const linkClass = (path: string) =>
        `transition ${pathname === path
            ? "text-yellow-400 font-semibold"
            : "text-zinc-300 hover:text-yellow-400"
        }`;

    return (
        <header className="border-b border-zinc-800 bg-black/90 backdrop-blur-md sticky top-0 z-50">
            <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold text-white hover:text-yellow-400 transition"
                >
                    NomadLifeXP
                </Link>

                {/* Links */}
                <div className="flex gap-6 text-sm">
                    <Link href="/blog" className={linkClass("/blog")}>
                        Blog
                    </Link>

                    <Link href="/mindset" className={linkClass("/mindset")}>
                        Mindset
                    </Link>

                    <Link href="/discipline" className={linkClass("/discipline")}>
                        Discipline
                    </Link>

                    <Link href="/fitness" className={linkClass("/fitness")}>
                        Fitness
                    </Link>

                    <Link href="/yoga" className={linkClass("/yoga")}>
                        Yoga
                    </Link>
                </div>
            </nav>
        </header>
    );
}