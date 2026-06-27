"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MAIN_NAVIGATION_NODES = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Discipline System", href: "/discipline-system" },
];

function NomadLifeXPMaster() {
  const currentPath = usePathname();

  return (
    <div className="min-h-screen flex flex-col items-center justify-between antialiased bg-[#060b18] text-white">

      {/* HEADER */}
      <header className="w-full border-b border-white/5 sticky top-0 z-50 backdrop-blur-md bg-[#060b18]/80">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 text-center">

          <Link
            href="/"
            className="font-bold uppercase tracking-widest text-sm text-white hover:opacity-90 transition-opacity"
          >
            NOMADLIFE<span style={{ color: "var(--glow-cyan)" }}>XP</span>
          </Link>

          <div className="flex items-center gap-x-6 md:gap-x-8 text-[11px] tracking-[0.2em] uppercase font-medium">
            {MAIN_NAVIGATION_NODES.map((node) => {
              const isActive = currentPath === node.href;

              return (
                <Link
                  key={node.href}
                  href={node.href}
                  className="transition-colors hover:text-white"
                  style={{
                    color: isActive
                      ? "var(--glow-cyan)"
                      : "var(--text-muted, #94a3b8)",
                    fontWeight: isActive ? "700" : "400",
                  }}
                >
                  {node.label}
                </Link>
              );
            })}
          </div>

          <Link
            href="/start-here"
            className="text-[10px] uppercase tracking-widest px-5 py-2.5 border font-bold transition-all rounded-sm"
            style={{
              borderColor: "var(--glow-cyan)",
              color: "var(--glow-cyan)",
            }}
          >
            Start Here
          </Link>

        </nav>
      </header>

      {/* HERO */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 pt-32 pb-24 max-w-4xl w-full text-center mx-auto">

        <div className="mb-10">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-gray-400">
            Core Framework
          </span>

          {/* SAFELY CONVERTED MATRIX NODES */}
          <div className="text-xs tracking-[0.25em] uppercase font-semibold text-cyan-300 mt-2 flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
            <Link href="/discipline-system" className="hover:text-white transition-colors duration-200">Discipline</Link>
            <span className="text-gray-600 font-normal">/</span>
            <Link href="/blog?category=fitness" className="hover:text-white transition-colors duration-200">Fitness</Link>
            <span className="text-gray-600 font-normal">/</span>
            <Link href="/blog?category=yoga" className="hover:text-white transition-colors duration-200">Yoga</Link>
            <span className="text-gray-600 font-normal">/</span>
            <Link href="/blog?category=mindset" className="hover:text-white transition-colors duration-200">Mindset</Link>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight uppercase mb-12">
          Evolve in Motion
        </h1>

        <p className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed text-gray-400 mb-14">
          The NomadLifeXP configuration maps deliberate execution parameters to
          clean physical output. It is engineered to establish strict cognitive
          clarity and daily consistency through non-negotiable micro-structures.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto mb-24">
          <Link
            href="/start-here"
            className="w-full px-10 py-4 text-xs uppercase tracking-widest font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition"
          >
            Initialize System
          </Link>

          <Link
            href="/blog"
            className="w-full px-10 py-4 text-xs uppercase tracking-widest border border-white/20 text-white hover:border-cyan-400 transition"
          >
            Enter Blog System
          </Link>
        </div>

        <div className="w-full aspect-video border border-white/10 rounded-2xl overflow-hidden mb-24">
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/yoga.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="text-center max-w-xl">
          <h3 className="text-xl font-bold uppercase mb-3">
            From Chaos to Clarity
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed">
            Cultivate internal attention controls, dissolve counterproductive
            stress variables, and systematically recalibrate your biological
            baseline.
          </p>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="w-full border-t border-white/5 py-12 text-center text-xs text-gray-500">
        <div className="mb-4">
          Follow NomadLifeXP —{" "}
          <a className="text-white mx-2" href="https://youtube.com">
            YouTube
          </a>
          |
          <a className="text-white mx-2" href="https://instagram.com">
            Instagram
          </a>
        </div>

        <div>© 2026 NomadLifeXP. All rights reserved.</div>

        <Link
          href="/knowledge-index"
          className="block mt-4 text-cyan-400 hover:text-cyan-300"
        >
          Knowledge Index ↗
        </Link>
      </footer>

    </div>
  );
}

/* ✅ SAFE NEXT.JS EXPORT */
export default function Page() {
  return <NomadLifeXPMaster />;
}