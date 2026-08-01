// src/app/page.tsx

import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NomadLifeXP // Human Evolution System",
  description: "A structured transformation system for building discipline, physical strength, mental clarity, and a more intentional life.",
  alternates: {
    canonical: "https://www.nomadlifexp.com",
  },
};

interface Pillar {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
}

interface LibraryItem {
  id: string;
  title: string;
  description: string;
  href: string;
}

const PILLARS: readonly Pillar[] = [
  {
    id: "pillar-discipline",
    number: "01",
    title: "Discipline",
    description: "The foundation of consistency, focus, and execution.",
    href: "/discipline",
  },
  {
    id: "pillar-fitness",
    number: "02",
    title: "Fitness",
    description: "Physical strength, resilience, and vitality.",
    href: "/fitness",
  },
  {
    id: "pillar-yoga",
    number: "03",
    title: "Yoga",
    description: "Balance, mobility, and mind-body integration.",
    href: "/yoga",
  },
  {
    id: "pillar-mindset",
    number: "04",
    title: "Mindset",
    description: "Mental clarity, emotional regulation, and autonomy.",
    href: "/mindset",
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
    description: "Strength. Movement. Vitality.",
    href: "/blog/category/fitness",
  },
  {
    id: "lib-yoga",
    title: "Yoga",
    description: "Mobility. Breath. Balance.",
    href: "/blog/category/yoga",
  },
  {
    id: "lib-mindset",
    title: "Mindset",
    description: "Clarity. Strategy. Autonomy.",
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
    <main className="min-h-screen bg-black text-white antialiased">
      <div className="relative max-w-7xl mx-auto px-6 py-24">

        {/* Visual Background Accent */}
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

        {/* Hero Section */}
        <header className="relative z-10 mb-32 text-center">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
            NOMADLIFEXP // HUMAN EVOLUTION SYSTEM
          </p>

          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none mb-8">
            Architect Your <span className="text-cyan-400">Autonomy</span>
          </h1>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-light">
            A structured transformation system for building discipline, physical strength, mental clarity, and a more intentional life.
          </p>

          <div
            className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] font-semibold text-cyan-400/80 mb-10 flex-wrap"
            aria-label="System Pillars"
          >
            <span>Discipline</span>
            <span className="text-white/30" aria-hidden="true">&bull;</span>
            <span>Fitness</span>
            <span className="text-white/30" aria-hidden="true">&bull;</span>
            <span>Yoga</span>
            <span className="text-white/30" aria-hidden="true">&bull;</span>
            <span>Mindset</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/start-here"
              className="w-full sm:w-auto px-8 py-4 bg-cyan-500 text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-cyan-400 transition text-center focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              Begin Journey
            </Link>
            <Link
              href="/discipline-system"
              className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-xs hover:border-cyan-400 hover:text-cyan-300 transition text-center focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              Explore Systems
            </Link>
          </div>
        </header>

        {/* Core Pillars Grid */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400 mb-2">
                            // CORE PILLARS
            </h2>
            <h3 className="text-3xl font-black uppercase tracking-wide">
              The Four Architecture Pillars
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between hover:border-cyan-500/50 transition-colors"
              >
                <div>
                  <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block mb-4">
                    {pillar.number} // PILLAR
                  </span>
                  <h4 className="text-xl font-bold uppercase tracking-wide mb-3">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-neutral-400 font-mono leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>
                <Link
                  href={pillar.href}
                  className="inline-block text-cyan-400 text-xs font-mono uppercase tracking-wider hover:text-white transition-colors"
                >
                  ACCESS MODULE &rarr;
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* System Overview Section */}
        <section className="mb-32 border border-neutral-900 bg-neutral-950/60 p-8 md:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400 mb-4">
                            // SYSTEM MANIFESTO
            </h2>
            <h3 className="text-3xl font-black uppercase tracking-wide mb-6">
              Engineered Execution Systems
            </h3>
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg font-light text-center mb-10">
              NomadLifeXP is a personal development system designed to build self-discipline, better habits, physical fitness, mental clarity, and sustainable personal growth through structured daily systems.
            </p>
            <div className="flex flex-wrap justify-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest">
              {STEPS.map((step, idx) => (
                <React.Fragment key={step}>
                  <span className="text-cyan-400">{step}</span>
                  {idx < STEPS.length - 1 && <span className="text-neutral-700">&rarr;</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Library Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400 mb-2">
                            // KNOWLEDGE INDEX
            </h2>
            <h3 className="text-3xl font-black uppercase tracking-wide">
              Explore Knowledge Categories
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LIBRARY_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="border border-neutral-800 bg-neutral-950 p-8 block hover:border-cyan-500/50 transition-colors group"
              >
                <h4 className="text-lg font-bold uppercase tracking-wide mb-2 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-400 font-mono">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer Navigation Connect */}
        <footer className="border-t border-neutral-900 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs uppercase tracking-widest">
          <p className="text-neutral-500">
            &copy; {new Date().getFullYear()} NomadLifeXP // All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/knowledge-index" className="hover:text-cyan-400 transition-colors">
              Masterclass Index
            </Link>
            <Link href="/discipline-system" className="hover:text-cyan-400 transition-colors">
              Systems
            </Link>
            <Link href="/start-here" className="hover:text-cyan-400 transition-colors">
              Start Here
            </Link>
            <Link href="/blog" className="hover:text-cyan-400 transition-colors">
              Blog
            </Link>
          </div>
        </footer>

      </div>
    </main>
  );
}