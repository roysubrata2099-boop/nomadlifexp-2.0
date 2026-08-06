"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface NavItem {
  readonly label: string;
  readonly href: string;
}

interface LibraryItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly details: string;
  readonly href: string;
}

interface ArticleItem {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly href: string;
}

const NAVIGATION: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Systems", href: "/discipline-system" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const LIBRARY_ITEMS: readonly LibraryItem[] = [
  {
    id: "lib-discipline",
    title: "Discipline System",
    description: "Habits. Focus. Consistency.",
    details: "Build self-discipline, create powerful routines, strengthen focus, and develop the consistency required for long-term personal growth.",
    href: "/discipline-system",
  },
  {
    id: "lib-fitness",
    title: "Fitness System",
    description: "Strength. Mobility. Performance.",
    details: "Develop physical capability through strength training, movement, recovery, endurance, and sustainable fitness systems.",
    href: "/blog/category/fitness",
  },
  {
    id: "lib-yoga",
    title: "Yoga System",
    description: "Movement. Awareness. Recovery.",
    details: "Improve flexibility, mobility, breath control, recovery, and mind-body awareness through intentional yoga practice.",
    href: "/blog/category/yoga",
  },
  {
    id: "lib-mindset",
    title: "Mindset System",
    description: "Growth. Resilience. Confidence.",
    details: "Strengthen focus, resilience, confidence, mental performance, and lifelong learning through practical mindset systems.",
    href: "/blog/category/mindset",
  },
];

const JOURNEY_STEPS: readonly { readonly step: string; readonly desc: string }[] = [
  { step: "Awareness", desc: "Understand your habits, environment, strengths, weaknesses, and current reality." },
  { step: "Discipline", desc: "Build routines, systems, identity, and daily consistency." },
  { step: "Strength", desc: "Develop physical capability, resilience, health, and energy." },
  { step: "Balance", desc: "Align body, mind, recovery, lifestyle, and sustainable performance." },
  { step: "Evolution", desc: "Continue improving through lifelong learning, adaptation, and intentional growth." },
];

const OPTIMIZATION_BENEFITS: readonly string[] = [
  "Stronger Body",
  "Sharper Mind",
  "Better Habits",
  "Greater Discipline",
  "Physical Fitness",
  "Yoga & Mobility",
  "Higher Performance",
  "Sustainable Growth",
  "Lifelong Learning",
  "Human Evolution",
];

const RESOURCE_LINKS: readonly string[] = [
  "Discipline System",
  "Fitness System",
  "Yoga System",
  "Mindset System",
  "Habit Building",
  "Lifestyle Optimization",
  "Personal Development",
  "Human Performance",
];

const LATEST_ARTICLES: readonly ArticleItem[] = [
  {
    id: "art-1",
    title: "How to Build Self-Discipline",
    category: "Discipline System",
    href: "/blog/how-to-build-self-discipline",
  },
  {
    id: "art-2",
    title: "Beginner Yoga for Mobility",
    category: "Yoga System",
    href: "/blog/beginner-yoga-for-mobility",
  },
  {
    id: "art-3",
    title: "Strength Training Fundamentals",
    category: "Fitness System",
    href: "/blog/strength-training-fundamentals",
  },
  {
    id: "art-4",
    title: "Morning Routine Guide",
    category: "Habit Building",
    href: "/blog/morning-routine-guide",
  },
  {
    id: "art-5",
    title: "Identity-Based Habits",
    category: "Discipline System",
    href: "/blog/identity-based-habits",
  },
  {
    id: "art-6",
    title: "Mental Performance Framework",
    category: "Mindset System",
    href: "/blog/mental-performance-framework",
  },
];

/**
 * Hydration-safe Video Player Component
 */
function ClientVideo() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-full bg-slate-900 animate-pulse flex items-center justify-center text-slate-600 text-xs tracking-widest uppercase">
        Loading System Media...
      </div>
    );
  }

  return (
    <video
      className="w-full h-full object-cover block"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/images/yoga-mind-body-awareness.jpg"
    >
      <source src="/videos/yoga-mind-body-awareness.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-[#050816] text-white selection:bg-cyan-400 selection:text-black overflow-x-hidden antialiased flex flex-col justify-between">
      {/* NAVIGATION HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="font-black tracking-[0.25em] text-sm uppercase flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="NomadLifeXP Home"
          >
            NOMADLIFE<span className="text-cyan-400">XP</span>
          </Link>

          <nav
            className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-slate-400"
            aria-label="Main Navigation"
          >
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-cyan-300 transition-colors focus:outline-none focus:text-cyan-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/start-here"
            className="px-5 py-2.5 border border-cyan-400 text-cyan-300 text-xs uppercase tracking-[0.2em] font-bold hover:bg-cyan-400 hover:text-black transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            Start Here
          </Link>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main id="main-content" className="flex-grow">
        {/* HERO SECTION */}
        <section
          className="relative pt-48 sm:pt-56 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center"
          aria-labelledby="hero-title"
        >
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-cyan-400/10 blur-[120px] pointer-events-none"
          />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-300 mb-6 text-center">
              NOMADLIFEXP // HUMAN OPTIMIZATION PLATFORM
            </p>

            <h1
              id="hero-title"
              className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none mb-8 text-white text-center"
            >
              Human Optimization Through <br />
              <span className="text-cyan-400">Discipline, Fitness, Yoga &amp; Mindset</span>
            </h1>

            <p className="text-sm font-semibold tracking-widest text-cyan-300 uppercase mb-4">
              Evolve in Motion.
            </p>

            <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-8 text-center font-light">
              NomadLifeXP is a Human Optimization Platform and Human Evolution System designed to help you build discipline, improve fitness, develop mobility through yoga, strengthen mindset, and create lasting habits through structured systems for lifelong transformation.
            </p>

            <div
              className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] font-semibold text-cyan-400/80 mb-10 flex-wrap"
              aria-label="System Pillars"
            >
              <span>Discipline System</span>
              <span className="text-white/30" aria-hidden="true">•</span>
              <span>Fitness System</span>
              <span className="text-white/30" aria-hidden="true">•</span>
              <span>Yoga System</span>
              <span className="text-white/30" aria-hidden="true">•</span>
              <span>Mindset System</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full sm:w-auto">
              <Link
                href="/start-here"
                className="w-full sm:w-auto px-8 py-4 bg-cyan-400 text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-cyan-300 transition shadow-[0_0_30px_rgba(34,211,238,0.3)] text-center focus:outline-none focus:ring-2 focus:ring-white"
              >
                Start Your Evolution
              </Link>
              <Link
                href="/discipline-system"
                className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-xs hover:border-cyan-400 hover:text-cyan-300 transition text-center focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                Explore Systems
              </Link>
            </div>
          </div>
        </section>

        {/* CINEMATIC VIDEO SECTION */}
        <section
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center w-full flex flex-col items-center"
          aria-label="NomadLifeXP Overview Video"
        >
          <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-video shadow-2xl flex items-center justify-center">
            <ClientVideo />
          </div>
        </section>

        {/* PHILOSOPHY SECTION */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-300 mb-6 text-center">
            THE PHILOSOPHY
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-tight text-center max-w-4xl mb-6">
            Transformation <br className="hidden sm:inline" />
            is not a moment. <br />
            <span className="text-cyan-400">It is a system.</span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-300 text-sm sm:text-base font-light leading-relaxed text-center mb-6">
            Transformation happens through consistent action, intentional habits, structured routines, and systems that improve your body, mind, and lifestyle over time.
          </p>
          <blockquote className="text-cyan-300 font-bold uppercase tracking-[0.2em] text-sm">
            Motivation fades. <br />
            <span className="text-white text-base">Systems endure.</span>
          </blockquote>
        </section>

        {/* HUMAN OPTIMIZATION SYSTEMS (LIBRARY) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center border-t border-white/10" aria-labelledby="systems-heading">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-300 mb-4">THE HUMAN OPTIMIZATION SYSTEM</p>
            <h2 id="systems-heading" className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-center mb-4">
              Everything Inside NomadLifeXP Is Connected
            </h2>
            <p className="text-slate-400 text-sm font-light">
              Explore the core foundational systems designed to help you evolve across every dimension.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {LIBRARY_ITEMS.map((item) => (
              <div
                key={item.id}
                className="group p-8 rounded-xl border border-white/10 bg-white/[0.01] hover:border-cyan-400/50 transition-all flex flex-col justify-between text-center"
              >
                <div>
                  <h3 className="font-bold uppercase text-2xl mb-2 text-center group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400/90 mb-3 text-center">{item.description}</p>
                  <p className="text-xs text-slate-400 text-center font-light mb-6">{item.details}</p>
                </div>
                <Link
                  href={item.href}
                  className="inline-block text-xs uppercase tracking-[0.2em] font-bold text-cyan-300 hover:text-cyan-400 transition-colors focus:outline-none focus:underline"
                >
                  Explore {item.title} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* THE JOURNEY */}
        <section className="border-y border-white/10 bg-white/[0.01] py-20 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 mb-2 text-center">
              HUMAN EVOLUTION FRAMEWORK
            </p>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-16 text-center">
              From Chaos <span className="text-cyan-400">To Clarity</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 w-full max-w-6xl">
              {JOURNEY_STEPS.map((item, idx) => (
                <div key={item.step} className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 rounded-full border border-cyan-400/40 flex items-center justify-center font-bold text-cyan-300 mb-4 bg-[#050816] text-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-center mb-2">
                    {item.step}
                  </h3>
                  <p className="text-xs text-slate-400 font-light text-center leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY HUMAN OPTIMIZATION SECTION */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center flex flex-col items-center">
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-300 mb-4 text-center">
            WHY HUMAN OPTIMIZATION?
          </p>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-6 text-center leading-tight">
            Build The Next <br />
            <span className="text-cyan-400">Version Of Yourself</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light mb-12 text-center max-w-xl">
            Human optimization is the continuous process of improving every area of your life through structured systems and intentional action.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl">
            {OPTIMIZATION_BENEFITS.map((benefit) => (
              <div
                key={benefit}
                className="p-4 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-200"
              >
                <span className="text-cyan-400 font-bold" aria-hidden="true">✓</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* HUMAN OPTIMIZATION LIBRARY & RESOURCES */}
        <section className="border-t border-white/10 bg-white/[0.01] py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-300 mb-4 text-center">
              HUMAN OPTIMIZATION LIBRARY
            </p>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4 text-center">
              Explore Practical Systems &amp; Frameworks
            </h2>
            <p className="text-slate-400 text-sm font-light mb-10 text-center max-w-xl">
              Explore practical systems, frameworks, guides, and educational resources designed to support your evolution.
            </p>

            <div className="mb-6 w-full text-left max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-cyan-300 mb-3 text-center sm:text-left">
                Featured Categories
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mb-16">
              {RESOURCE_LINKS.map((res) => (
                <span
                  key={res}
                  className="px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-950/10 text-cyan-300 text-xs font-mono uppercase tracking-wider"
                >
                  {res}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* LATEST ARTICLES SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10 text-center" aria-labelledby="articles-heading">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-300 mb-4">KNOWLEDGE BASE</p>
            <h2 id="articles-heading" className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-center mb-4">
              Latest Articles
            </h2>
            <p className="text-slate-400 text-sm font-light">
              Actionable guides and breakdowns to accelerate your performance and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {LATEST_ARTICLES.map((article) => (
              <Link
                key={article.id}
                href={article.href}
                className="group p-6 rounded-xl border border-white/10 bg-white/[0.01] hover:border-cyan-400/50 transition-all flex flex-col justify-between text-left focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <div>
                  <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-cyan-400 mb-2 px-2.5 py-1 rounded bg-cyan-950/20 border border-cyan-500/20">
                    {article.category}
                  </span>
                  <h3 className="font-bold uppercase text-lg text-white group-hover:text-cyan-300 transition-colors mb-4">
                    {article.title}
                  </h3>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-cyan-300 transition-colors flex items-center gap-1">
                  Read Article &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div>
            <Link
              href="/blog"
              className="inline-block px-8 py-3.5 border border-cyan-400 text-cyan-300 font-bold uppercase tracking-[0.2em] text-xs hover:bg-cyan-400 hover:text-black transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              View All Articles →
            </Link>
          </div>
        </section>

        {/* MISSION */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center flex flex-col items-center border-t border-white/10">
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-300 mb-4 text-center">
            OUR MISSION
          </p>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-6 text-center leading-tight">
            We don&apos;t chase motivation. <br />
            <span className="text-cyan-400">We build systems.</span>
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base text-center max-w-2xl font-light">
            NomadLifeXP exists to help individuals create sustainable transformation through structured habits, physical development, mindful movement, mental resilience, and continuous personal evolution.
          </p>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 px-4 text-center border-t border-white/10 bg-white/[0.01]">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-300 mb-4 text-center">
              START YOUR EVOLUTION
            </p>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-6 text-center">
              Build The Next <br />
              <span className="text-cyan-400">Version Of Yourself</span>
            </h2>
            <p className="text-slate-300 text-sm font-light mb-8 text-center">
              Everything begins with one decision. Build discipline. Improve your fitness. Develop your mindset. Move with purpose. Continue evolving.
            </p>
            <Link
              href="/start-here"
              className="inline-block px-10 py-4 bg-cyan-400 text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-cyan-300 transition text-center shadow-[0_0_30px_rgba(34,211,238,0.2)] focus:outline-none focus:ring-2 focus:ring-white"
            >
              Start Your Journey →
            </Link>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-cyan-500/20 bg-[#02040a] py-16 px-4 text-center text-xs text-slate-400">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <p className="font-black tracking-[0.3em] uppercase text-white mb-1 text-base text-center">
            NOMADLIFE<span className="text-cyan-400">XP</span>
          </p>
          <p className="uppercase tracking-[0.3em] text-[10px] text-cyan-400 mb-2 text-center">
            Human Optimization Platform
          </p>
          <p className="uppercase tracking-[0.3em] text-[10px] text-slate-500 mb-6 text-center">
            Evolve in Motion
          </p>

          <div className="flex justify-center items-center gap-4 mb-8 text-sm">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors uppercase tracking-[0.15em] font-medium focus:outline-none focus:underline"
              aria-label="NomadLifeXP YouTube Channel (opens in a new tab)"
            >
              YouTube
            </a>
            <span className="text-slate-600" aria-hidden="true">|</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors uppercase tracking-[0.15em] font-medium focus:outline-none focus:underline"
              aria-label="NomadLifeXP Instagram Account (opens in a new tab)"
            >
              Instagram
            </a>
          </div>

          <div className="w-full text-left max-w-xs mb-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300 text-center">
              Explore
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 mb-10 uppercase tracking-[0.2em] text-[11px] font-semibold text-slate-300" aria-label="Footer Navigation">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Homepage
            </Link>
            <Link href="/discipline-system" className="hover:text-cyan-400 transition-colors">
              Discipline System
            </Link>
            <Link href="/blog/category/fitness" className="hover:text-cyan-400 transition-colors">
              Fitness System
            </Link>
            <Link href="/blog/category/yoga" className="hover:text-cyan-400 transition-colors">
              Yoga System
            </Link>
            <Link href="/blog/category/mindset" className="hover:text-cyan-400 transition-colors">
              Mindset System
            </Link>
            <Link href="/blog" className="hover:text-cyan-400 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link href="/start-here" className="hover:text-cyan-400 transition-colors">
              Start Here
            </Link>
          </nav>

          <p className="text-slate-600 text-[11px] text-center">
            © 2026 NomadLifeXP. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}