// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// ================= TYPES =================
interface System {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
}

interface AudienceItem {
  id: string;
  title: string;
  description: string;
}

interface KnowledgeItem {
  id: string;
  title: string;
  text: string;
  href: string;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// ================= DATA CONFIGURATION =================
const SYSTEMS: readonly System[] = [
  {
    id: "system-discipline",
    title: "Discipline",
    subtitle: "The Foundation",
    description:
      "Build consistency, habits, focus, and the ability to execute regardless of circumstances.",
    href: "/discipline-system",
  },
  {
    id: "system-fitness",
    title: "Fitness",
    subtitle: "Physical Capability",
    description:
      "Develop strength, mobility, energy, and a body capable of supporting your mission.",
    href: "/blog/category/fitness",
  },
  {
    id: "system-yoga",
    title: "Yoga",
    subtitle: "Movement & Awareness",
    description:
      "Improve balance, breathing, recovery, and the connection between body and mind.",
    href: "/blog/category/yoga",
  },
  {
    id: "system-mindset",
    title: "Mindset",
    subtitle: "Inner Architecture",
    description:
      "Develop resilience, confidence, clarity, and the mental framework for growth.",
    href: "/blog/category/mindset",
  },
];

const NAVIGATION: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Systems", href: "/discipline-system" },
];

const AUDIENCE_ITEMS: readonly AudienceItem[] = [
  {
    id: "audience-nomads",
    title: "Digital Nomads",
    description: "Create freedom while building discipline and intentional living.",
  },
  {
    id: "audience-entrepreneurs",
    title: "Entrepreneurs",
    description: "Develop performance without sacrificing health and balance.",
  },
  {
    id: "audience-creators",
    title: "Creators",
    description: "Build consistency, creativity, and long-term execution.",
  },
  {
    id: "audience-growth",
    title: "Growth Seekers",
    description: "Improve habits, mindset, and lifestyle quality.",
  },
];

const KNOWLEDGE_ITEMS: readonly KnowledgeItem[] = [
  {
    id: "knowledge-discipline",
    title: "Discipline",
    text: "Habits, routines, focus, consistency.",
    href: "/blog/category/discipline",
  },
  {
    id: "knowledge-fitness",
    title: "Fitness",
    text: "Strength, mobility, energy, performance.",
    href: "/blog/category/fitness",
  },
  {
    id: "knowledge-yoga",
    title: "Yoga",
    text: "Movement, breathing, awareness.",
    href: "/blog/category/yoga",
  },
  {
    id: "knowledge-mindset",
    title: "Mindset",
    text: "Growth, resilience, confidence.",
    href: "/blog/category/mindset",
  },
];

const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: "faq-what-is",
    question: "What is NomadLifeXP?",
    answer:
      "NomadLifeXP is a personal evolution framework built around discipline, fitness, yoga, mindset, and intentional living.",
  },
  {
    id: "faq-four-systems",
    question: "What are the four systems?",
    answer:
      "The four foundations are Discipline, Fitness, Yoga, and Mindset. Together they create a complete transformation framework.",
  },
  {
    id: "faq-who-for",
    question: "Who is this for?",
    answer:
      "It is designed for anyone who wants stronger habits, better health, improved focus, and continuous growth.",
  },
  {
    id: "faq-where-start",
    question: "Where should I start?",
    answer:
      "Begin with the Start Here path and build your personal evolution system step by step.",
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
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden selection:bg-cyan-400 selection:text-black">
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
        <nav
          aria-label="Main Navigation"
          className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between"
        >
          <Link
            href="/"
            className="font-black tracking-[0.35em] text-sm uppercase focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
          >
            NOMADLIFE
            <span className="text-cyan-400">XP</span>
          </Link>

          <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.25em] text-slate-400">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-cyan-300 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/start-here"
            className="px-6 py-3 border border-cyan-400 text-cyan-300 text-xs uppercase tracking-[0.25em] font-bold hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            Start Here
          </Link>
        </nav>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32">
        {/* Ambient background lights */}
        <div
          aria-hidden="true"
          className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-cyan-400/10 blur-[160px] pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-yellow-400/10 blur-[140px] pointer-events-none"
        />

        <div className="relative z-10 max-w-5xl text-center">
          <motion.p
            initial={isMounted ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.6em] text-cyan-300 mb-10"
          >
            NomadLifeXP
          </motion.p>

          <motion.h1
            initial={isMounted ? { opacity: 0, scale: 0.95 } : false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl sm:text-7xl md:text-9xl font-black uppercase leading-[0.85] tracking-tight"
          >
            Evolve
            <br />
            <span className="text-cyan-400">in Motion</span>
          </motion.h1>

          <motion.p
            initial={isMounted ? { opacity: 0 } : false}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-2xl mx-auto mt-12 text-lg text-slate-400 leading-relaxed"
          >
            A complete personal evolution framework built around
            <span className="text-white">
              {" "}discipline, fitness, yoga, and mindset.
            </span>
            <br />
            Build stronger systems. Create better habits. Become your next version.
          </motion.p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
            <Link
              href="/start-here"
              className="px-10 py-5 bg-cyan-400 text-black font-bold uppercase tracking-[0.25em] text-xs hover:bg-cyan-300 transition shadow-[0_0_50px_rgba(34,211,238,.4)]"
            >
              Begin Journey
            </Link>

            <Link
              href="/knowledge-index"
              className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-[0.25em] text-xs hover:border-cyan-400 hover:text-cyan-300 transition"
            >
              Explore Knowledge
            </Link>
          </div>

          <div className="mt-20 text-xs uppercase tracking-[0.5em] text-slate-500">
            Scroll to evolve ↓
          </div>
        </div>
      </section>

      {/* ================= VIDEO EXPERIENCE ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cyan-400/10 blur-3xl pointer-events-none"
          />

          <video
            className="relative w-full aspect-video object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/yoga-mind-body-awareness.jpg"
          >
            <source
              src="/videos/yoga-mind-body-awareness.mp4"
              type="video/mp4"
            />
            Your browser does not support video playback.
          </video>
        </div>

        <div className="text-center max-w-3xl mx-auto mt-16">
          <p className="text-xs uppercase tracking-[0.5em] text-cyan-300 mb-6">
            The Philosophy
          </p>

          <h2 className="text-4xl md:text-6xl font-black uppercase">
            Transformation is not a moment.
            <br />
            It is a system.
          </h2>
        </div>
      </section>

      {/* ================= FOUR CORE SYSTEMS ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.5em] text-cyan-300 mb-6">
            The Four Foundations
          </p>

          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight">
            Build Your
            <br />
            <span className="text-cyan-400">Evolution System</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-8 text-slate-400 leading-relaxed">
            Four connected systems designed to transform your body, mind, habits,
            and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SYSTEMS.map((system, index) => (
            <motion.div
              key={system.id}
              initial={isMounted ? { opacity: 0, y: 40 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Link
                href={system.href}
                className="group block relative h-full p-10 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-500 overflow-hidden"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                />

                <div className="relative">
                  <div className="text-xs tracking-[0.4em] uppercase text-cyan-300 mb-6">
                    0{index + 1}
                  </div>

                  <h3 className="text-3xl font-black uppercase mb-3">
                    {system.title}
                  </h3>

                  <p className="text-sm uppercase tracking-[0.25em] text-white/50 mb-6">
                    {system.subtitle}
                  </p>

                  <p className="text-slate-400 leading-relaxed">
                    {system.description}
                  </p>

                  <div className="mt-8 text-xs uppercase tracking-[0.35em] text-cyan-300 group-hover:text-white transition-colors duration-300">
                    Explore System →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TRANSFORMATION PATH ================= */}
      <section className="border-y border-white/10 bg-white/[0.02] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.5em] text-cyan-300 mb-6">
              The Journey
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase">
              From Chaos
              <br />
              <span className="text-cyan-400">To Clarity</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {STEPS.map((step, index) => (
              <div key={`step-${step}`} className="relative text-center">
                <div className="mx-auto w-20 h-20 rounded-full border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-bold bg-[#050816] shadow-[0_0_40px_rgba(34,211,238,.15)]">
                  0{index + 1}
                </div>

                <h3 className="mt-6 uppercase font-bold tracking-wider">
                  {step}
                </h3>

                {index !== STEPS.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden md:block absolute top-10 left-[70%] w-full h-px bg-white/10 pointer-events-none"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="max-w-5xl mx-auto px-6 py-32 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-cyan-300 mb-8">
          Our Mission
        </p>

        <h2 className="text-4xl md:text-7xl font-black uppercase leading-tight">
          We don't chase motivation.
          <br />
          <span className="text-cyan-400">We build systems.</span>
        </h2>

        <p className="mt-10 text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
          NomadLifeXP helps individuals create sustainable personal
          transformation through structured habits, physical development, mindful
          movement, and mental resilience.
        </p>
      </section>

      {/* ================= AUDIENCE ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AUDIENCE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              <h3 className="text-xl font-bold uppercase mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= KNOWLEDGE INDEX ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.5em] text-cyan-300 mb-6">
            Knowledge Index
          </p>

          <h2 className="text-4xl md:text-6xl font-black uppercase">
            Explore.
            <br />
            <span className="text-cyan-400">Learn. Evolve.</span>
          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-slate-400">
            A growing library of systems, frameworks, and insights designed to
            help you improve every area of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {KNOWLEDGE_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group p-8 rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-cyan-400/10 hover:border-cyan-400/50 transition duration-300"
            >
              <h3 className="font-bold uppercase text-xl mb-4">{item.title}</h3>

              <p className="text-sm text-slate-400">{item.text}</p>

              <div className="mt-6 text-xs uppercase tracking-[0.3em] text-cyan-300">
                Explore →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="border-y border-white/10 py-32 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.5em] text-cyan-300 mb-6">
              FAQ
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase">
              Questions
              <br />
              Answered
            </h2>
          </div>

          <div className="space-y-6">
            {FAQ_ITEMS.map((faq) => (
              <details
                key={faq.id}
                className="group border border-white/10 rounded-2xl p-6 transition-all duration-300"
              >
                <summary className="cursor-pointer font-bold uppercase tracking-wide list-none flex justify-between items-center focus:outline-none">
                  <span>{faq.question}</span>
                  <span className="text-cyan-400 group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>

                <p className="mt-5 text-slate-400 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative py-40 px-6 text-center overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cyan-400/10 blur-[140px] pointer-events-none"
        />

        <div className="relative max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.5em] text-xs text-cyan-300 mb-8">
            Your Evolution Begins
          </p>

          <h2 className="text-5xl md:text-8xl font-black uppercase leading-none">
            Evolve
            <br />
            <span className="text-cyan-400">in Motion</span>
          </h2>

          <p className="mt-10 text-slate-400 text-lg">
            The next version of yourself is built through small actions repeated
            consistently.
          </p>

          <Link
            href="/start-here"
            className="inline-block mt-12 px-12 py-5 bg-cyan-400 text-black font-bold uppercase tracking-[0.3em] text-xs hover:bg-cyan-300 transition duration-300"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-16 px-6 text-center">
        <h3 className="font-black tracking-[0.4em] uppercase">
          NomadLife
          <span className="text-cyan-400">XP</span>
        </h3>

        <p className="mt-4 text-xs uppercase tracking-[0.5em] text-cyan-300">
          Evolve in Motion
        </p>

        {/* Social Links */}
        <div className="mt-8 text-xs uppercase tracking-[0.3em] text-slate-400">
          <span className="text-slate-500 mr-2">Follow NomadLifeXP —</span>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 transition-colors duration-200"
          >
            YouTube
          </a>
          <span className="mx-2 text-slate-600">|</span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 transition-colors duration-200"
          >
            Instagram
          </a>
        </div>

        {/* Internal Links */}
        <div className="flex justify-center gap-8 mt-8 text-xs uppercase tracking-[0.25em] text-slate-500">
          <Link href="/about" className="hover:text-cyan-300 transition">
            About
          </Link>
          <Link href="/blog" className="hover:text-cyan-300 transition">
            Blog
          </Link>
          <Link
            href="/knowledge-index"
            className="hover:text-cyan-300 transition"
          >
            Knowledge
          </Link>
          <Link href="/start-here" className="hover:text-cyan-300 transition">
            Start
          </Link>
        </div>

        <p className="mt-10 text-xs text-slate-600">
          © 2026 NomadLifeXP. All rights reserved.
        </p>
      </footer>
    </div>
  );
}