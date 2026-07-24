// src/app/page.tsx
"use client";

import Link from "next/link";

interface Pillar {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
}

interface NavItem {
  readonly label: string;
  readonly href: string;
}

interface LibraryItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
}

const NAVIGATION: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Systems", href: "/discipline-system" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const PILLARS: readonly Pillar[] = [
  {
    id: "pillar-discipline",
    number: "01",
    title: "Discipline",
    description: "The foundation of consistency, focus, and execution.",
    href: "/discipline-system",
  },
  {
    id: "pillar-fitness",
    number: "02",
    title: "Fitness",
    description: "Building physical capability, strength, and energy.",
    href: "/blog/category/fitness",
  },
  {
    id: "pillar-yoga",
    number: "03",
    title: "Yoga",
    description: "Movement, awareness, breathing, and balance.",
    href: "/blog/category/yoga",
  },
  {
    id: "pillar-mindset",
    number: "04",
    title: "Mindset",
    description: "The architecture of resilience, confidence, and growth.",
    href: "/blog/category/mindset",
  },
];

const LIBRARY_ITEMS: readonly LibraryItem[] = [
  {
    id: "lib-discipline",
    title: "Discipline",
    description: "Habits. Focus. Consistency.",
    href: "/blog/category/discipline",
  },
  {
    id: "lib-fitness",
    title: "Fitness",
    description: "Strength. Mobility. Performance.",
    href: "/blog/category/fitness",
  },
  {
    id: "lib-yoga",
    title: "Yoga",
    description: "Movement. Awareness. Recovery.",
    href: "/blog/category/yoga",
  },
  {
    id: "lib-mindset",
    title: "Mindset",
    description: "Growth. Resilience. Confidence.",
    href: "/blog/category/mindset",
  },
];

const STEPS: readonly string[] = [
  "Awareness",
  "Discipline",
  "Strength",
  "Balance",
  "Evolution",
];

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-[#050816] text-white selection:bg-cyan-400 selection:text-black overflow-x-hidden antialiased">
      {/* 1. HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="font-black tracking-[0.25em] text-sm uppercase flex items-center gap-1 focus:outline-none"
          >
            NOMADLIFE<span className="text-cyan-400">XP</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-slate-400">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-cyan-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/start-here"
            className="px-5 py-2.5 border border-cyan-400 text-cyan-300 text-xs uppercase tracking-[0.2em] font-bold hover:bg-cyan-400 hover:text-black transition-all"
          >
            Start Here
          </Link>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative pt-48 sm:pt-56 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-cyan-400/10 blur-[120px] pointer-events-none"
        />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-300 mb-6 text-center">
            NomadLifeXP // Human Optimization Platform
          </p>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight leading-none mb-8 text-white text-center">
            Evolve <br />
            <span className="text-cyan-400">in Motion</span>
          </h1>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-10 text-center font-light">
            A system for building a stronger body, a clearer mind, and a more intentional life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full sm:w-auto">
            <Link
              href="/start-here"
              className="w-full sm:w-auto px-8 py-4 bg-cyan-400 text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-cyan-300 transition shadow-[0_0_30px_rgba(34,211,238,0.3)] text-center"
            >
              Begin Journey
            </Link>
            <Link
              href="/discipline-system"
              className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-xs hover:border-cyan-400 hover:text-cyan-300 transition text-center"
            >
              Explore Systems
            </Link>
          </div>
        </div>
      </section>

      {/* 3. CINEMATIC VIDEO SECTION (PURE EMOTION, NO TEXT BELOW) */}
      <section
        style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%" }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center"
      >
        <div
          style={{ marginLeft: "auto", marginRight: "auto", width: "100%" }}
          className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-video shadow-2xl flex items-center justify-center"
        >
          <video
            style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "100%", height: "100%", objectFit: "cover" }}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/yoga-mind-body-awareness.jpg"
            suppressHydrationWarning
          >
            <source src="/videos/yoga-mind-body-awareness.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* 4. PHILOSOPHY SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        <p className="text-xs uppercase tracking-[0.4em] text-cyan-300 mb-6 text-center">
          The Philosophy
        </p>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-tight text-center max-w-4xl">
          Transformation <br className="hidden sm:inline" />
          is not a moment. <br />
          <span className="text-cyan-400">It is a system.</span>
        </h2>
      </section>

      {/* 5. THE FOUR PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-center">
            The Four Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center max-w-5xl mx-auto">
          {PILLARS.map((pillar) => (
            <Link
              key={pillar.id}
              href={pillar.href}
              className="group flex flex-col items-center justify-center p-8 transition-all text-center border-b border-white/10 hover:border-cyan-400/50"
            >
              <span className="text-cyan-400 font-mono text-xl sm:text-2xl mb-2 font-bold">
                {pillar.number}
              </span>
              <h3 className="text-3xl sm:text-4xl font-black uppercase mb-3 group-hover:text-cyan-300 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-sm mx-auto font-light">
                {pillar.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. THE JOURNEY */}
      <section className="border-y border-white/10 bg-white/[0.01] py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 mb-2 text-center">
            The Journey
          </p>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-16 text-center">
            From Chaos <span className="text-cyan-400">To Clarity</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 w-full max-w-5xl">
            {STEPS.map((step, idx) => (
              <div key={step} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border border-cyan-400/40 flex items-center justify-center font-bold text-cyan-300 mb-4 bg-[#050816] text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-center">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MISSION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center flex flex-col items-center">
        <p className="text-xs uppercase tracking-[0.4em] text-cyan-300 mb-4 text-center">
          Our Mission
        </p>
        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-6 text-center leading-tight">
          We don&apos;t chase motivation. <br />
          <span className="text-cyan-400">We build systems.</span>
        </h2>
        <p className="text-slate-300 leading-relaxed text-sm sm:text-base text-center max-w-2xl font-light">
          NomadLifeXP helps individuals create sustainable transformation through structured habits, physical development, mindful movement, and mental resilience.
        </p>
      </section>

      {/* 9. EVOLUTION LIBRARY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center border-t border-white/10">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-center">
            Evolution Library
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {LIBRARY_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group p-8 rounded-xl border border-white/10 bg-white/[0.01] hover:border-cyan-400/50 transition-all flex flex-col items-center text-center"
            >
              <h3 className="font-bold uppercase text-2xl mb-2 text-center group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 text-center">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="py-24 px-4 text-center border-t border-white/10 bg-white/[0.01]">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-300 mb-4 text-center">
            Your Evolution Begins
          </p>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-8 text-center">
            Build The Next <br />
            <span className="text-cyan-400">Version Of Yourself</span>
          </h2>
          <Link
            href="/start-here"
            className="inline-block px-10 py-4 bg-cyan-400 text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-cyan-300 transition text-center shadow-[0_0_30px_rgba(34,211,238,0.2)]"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* 12. FOOTER (WITH YOUTUBE & INSTAGRAM) */}
      <footer className="border-t border-cyan-500/20 bg-[#02040a] py-16 px-4 text-center text-xs text-slate-400">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <p className="font-black tracking-[0.3em] uppercase text-white mb-1 text-base text-center">
            NOMADLIFE<span className="text-cyan-400">XP</span>
          </p>
          <p className="uppercase tracking-[0.3em] text-[10px] text-cyan-400 mb-8 text-center">
            Evolve in Motion
          </p>

          <div className="flex justify-center items-center gap-4 mb-8 text-sm">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors uppercase tracking-[0.15em] font-medium"
            >
              YouTube
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors uppercase tracking-[0.15em] font-medium"
            >
              Instagram
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-10 uppercase tracking-[0.2em] text-[11px] font-semibold text-slate-300">
            <Link href="/about" className="hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link href="/blog" className="hover:text-cyan-400 transition-colors">
              Blog
            </Link>
            <Link href="/discipline-system" className="hover:text-cyan-400 transition-colors">
              Systems
            </Link>
            <Link href="/start-here" className="hover:text-cyan-400 transition-colors">
              Start
            </Link>
          </div>

          <p className="text-slate-600 text-[11px] text-center">
            © 2026 NomadLifeXP. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}