import "server-only";

import { getAllPosts } from "@/lib/markdown";
import { normalizeCategory } from "@/lib/taxonomy";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface SystemPost {
  slug: string;
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: "The Discipline System™ | NomadLifeXP",
  description:
    "The foundation system of human optimization. Build self-discipline, lasting habits, structured routines, and transform your identity.",
  alternates: {
    canonical: "https://www.nomadlifexp.com/discipline",
  },
};

function safeSlug(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }
  return value.trim().toLowerCase();
}

function safeText(value: unknown, fallback: string): string {
  if (typeof value !== "string") {
    return fallback;
  }
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : fallback;
}

function getDisciplinePosts(): SystemPost[] {
  try {
    const posts = getAllPosts();

    if (!Array.isArray(posts)) {
      return [];
    }

    return posts
      .filter((post) => {
        if (!post || typeof post !== "object") {
          return false;
        }

        try {
          const rawCategory = typeof post.category === "string" ? post.category : "";
          const rawTitle = typeof post.title === "string" ? post.title : "";

          const category = normalizeCategory(rawCategory, rawTitle);
          return safeSlug(category) === "discipline";
        } catch {
          return false;
        }
      })
      .map((post) => ({
        slug: safeSlug(post?.slug),
        title: safeText(post?.title, "Untitled Knowledge Node"),
        description: safeText(post?.description, "System description unavailable."),
      }))
      .filter((post) => post.slug.length > 0);
  } catch {
    return [];
  }
}

export default function DisciplinePage() {
  let disciplineArticles: SystemPost[] = [];

  try {
    disciplineArticles = getDisciplinePosts();
  } catch {
    disciplineArticles = [];
  }

  return (
    <main className="min-h-screen bg-black text-white antialiased">
      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

        <nav className="relative z-10 flex gap-4 mb-16 pb-6 border-b border-neutral-900 font-mono text-xs uppercase tracking-[0.3em]">
          <Link
            href="/"
            className="text-neutral-500 hover:text-cyan-400 transition-colors"
          >
            &larr; Return Home
          </Link>

          <span className="text-neutral-800">/</span>

          <span className="text-neutral-400">discipline</span>
        </nav>

        <header className="relative z-10 mb-24">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
            NOMADLIFEXP // HUMAN EVOLUTION SYSTEM
          </p>

          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none">
            The Discipline System&trade;
          </h1>

          <p className="mt-6 text-xl font-medium text-neutral-200">
            The Foundation System of Human Optimization
          </p>

          <p className="mt-4 max-w-3xl text-neutral-400 font-mono leading-relaxed">
            Build Self-Discipline. Build Lasting Habits. Transform Your Identity.
          </p>

          <p className="mt-4 max-w-3xl text-neutral-400 font-mono leading-relaxed">
            The Discipline System is the foundation system of the NomadLifeXP Human Optimization System — a self-discipline framework designed to build lasting habits, structured routines, and behavioural systems that create sustainable transformation.
          </p>

          <p className="mt-4 max-w-3xl text-neutral-400 font-mono leading-relaxed">
            Stop relying on motivation. Motivation fades. Systems endure.
          </p>
        </header>

        <section className="mb-24">
          <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
            THE DISCIPLINE EVOLUTION PATH
          </h2>
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
            A framework for rebuilding control, consistency, and self-mastery.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                id: "01",
                title: "01 — Awareness",
                subtext: "Understand your patterns, distractions, and behaviors.",
                text: "Before you can change your actions, you must understand what controls them."
              },
              {
                id: "02",
                title: "02 — Control",
                subtext: "Regain control over your attention, impulses, and decisions.",
                text: "Discipline begins when you stop reacting and start choosing."
              },
              {
                id: "03",
                title: "03 — Consistency",
                subtext: "Build systems that continue working even when motivation disappears.",
                text: "Small actions repeated over time create lasting transformation."
              },
              {
                id: "04",
                title: "04 — Mastery",
                subtext: "Become someone who naturally acts according to your values.",
                text: "True discipline is not something you force. It becomes part of who you are."
              },
            ].map((module) => (
              <div
                key={module.id}
                className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between"
              >
                <div>
                  <h3 className="mb-3 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                    {module.title}
                  </h3>
                  <p className="mb-4 text-sm font-semibold text-white">
                    {module.subtext}
                  </p>
                </div>
                <p className="text-xs text-neutral-400 font-mono leading-relaxed">
                  {module.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {disciplineArticles.length > 0 && (
          <section className="mb-24">
            <div className="flex justify-between items-end mb-8 border-b border-neutral-900 pb-4">
              <div>
                <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                  START YOUR DISCIPLINE TRANSFORMATION
                </h2>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                  New to discipline? Begin here. Follow the recommended path:
                </p>
              </div>
              <span className="font-mono text-xs text-neutral-400 mb-1">
                {disciplineArticles.length} ARTICLES
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {disciplineArticles.map((post) => (
                <article
                  key={post.slug}
                  className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-wide">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-sm text-neutral-400 font-mono leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                  <Link
                    href={`/blog/posts/${post.slug}`}
                    className="inline-block mt-8 text-cyan-400 text-xs font-mono uppercase tracking-wider hover:text-white transition-colors"
                  >
                    READ ARTICLE &rarr;
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="mb-24 border border-neutral-900 bg-neutral-950/60 p-8 md:p-12">
          <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
            THE NOMADLIFEXP DISCIPLINE FRAMEWORK
          </h2>
          <p className="mb-10 text-xl font-bold uppercase tracking-wide">
            Four Elements That Create Self-Mastery
          </p>

          <div className="grid md:grid-cols-2 gap-8 font-mono">
            <div className="border-l border-cyan-500/40 pl-6">
              <h3 className="text-white font-bold uppercase mb-2">Attention</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">Your attention determines your direction. Learn to protect your focus from distraction and reclaim control over your mental energy.</p>
            </div>
            <div className="border-l border-cyan-500/40 pl-6">
              <h3 className="text-white font-bold uppercase mb-2">Habits</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">Your daily actions shape your future identity. Build systems that make positive behavior easier and more consistent.</p>
            </div>
            <div className="border-l border-cyan-500/40 pl-6">
              <h3 className="text-white font-bold uppercase mb-2">Action</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">Progress comes from execution. Discipline transforms intentions into repeated action.</p>
            </div>
            <div className="border-l border-cyan-500/40 pl-6">
              <h3 className="text-white font-bold uppercase mb-2">Identity</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">The highest level of discipline is becoming someone who naturally follows through. Your habits become your character.</p>
            </div>
          </div>
        </section>

        <section className="mb-24 grid md:grid-cols-2 gap-8">
          <div className="border border-red-950/50 bg-neutral-950 p-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-red-400 mb-6">WHY DISCIPLINE MATTERS // WITHOUT IT:</h3>
            <ul className="space-y-3 font-mono text-sm text-neutral-400 list-disc list-inside">
              <li>Goals remain unfinished.</li>
              <li>Knowledge remains unused.</li>
              <li>Potential remains unrealized.</li>
            </ul>
          </div>
          <div className="border border-cyan-950/50 bg-neutral-950 p-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400 mb-6">WHY DISCIPLINE MATTERS // WITH IT:</h3>
            <ul className="space-y-3 font-mono text-sm text-neutral-400 list-disc list-inside">
              <li>Attention becomes focused.</li>
              <li>Actions become intentional.</li>
              <li>Progress becomes consistent.</li>
              <li>Personal transformation becomes possible.</li>
            </ul>
          </div>
        </section>

        <section className="mb-24 border border-cyan-900/40 bg-neutral-950 p-10 text-center">
          <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400 mb-3">
            START YOUR EVOLUTION
          </h2>
          <p className="text-2xl md:text-3xl font-black uppercase tracking-wide mb-4">
            Build Your Personal Operating System
          </p>
          <p className="text-neutral-400 font-mono text-sm max-w-xl mx-auto mb-8">
            Discipline is where transformation begins. Create the systems that allow your mind, body, and life to evolve.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-cyan-500 text-black font-mono text-xs uppercase tracking-[0.3em] px-8 py-4 font-bold hover:bg-cyan-400 transition-colors"
          >
            Build the system &rarr;
          </Link>
        </section>

        <footer className="border-t border-neutral-900 pt-10">
          <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-neutral-500">
            CONTINUE YOUR HUMAN EVOLUTION
          </h2>
          <p className="mb-6 font-mono text-xs text-neutral-600 uppercase">
            Discipline is the foundation. Continue developing the other pillars:
          </p>

          <div className="grid sm:grid-cols-3 gap-6 font-mono text-xs uppercase">
            <Link
              href="/blog/category/mindset"
              className="border border-neutral-900 bg-neutral-950 p-6 text-neutral-300 hover:border-cyan-500 transition-colors block"
            >
              <span className="block text-white font-bold mb-1">Mindset</span>
              <span className="text-neutral-500 text-[10px] lowercase block mb-3">Develop mental clarity, resilience, and stronger decision-making.</span>
              <span className="text-cyan-400">EXPLORE MINDSET &rarr;</span>
            </Link>

            <Link
              href="/blog/category/fitness"
              className="border border-neutral-900 bg-neutral-950 p-6 text-neutral-300 hover:border-neutral-700 transition-colors block"
            >
              <span className="block text-white font-bold mb-1">Fitness</span>
              <span className="text-neutral-500 text-[10px] lowercase block mb-3">Build physical strength, movement, and consistency.</span>
              <span className="text-cyan-400">EXPLORE FITNESS &rarr;</span>
            </Link>

            <Link
              href="/blog/category/yoga"
              className="border border-neutral-900 bg-neutral-950 p-6 text-neutral-300 hover:border-neutral-700 transition-colors block"
            >
              <span className="block text-white font-bold mb-1">Yoga</span>
              <span className="text-neutral-500 text-[10px] lowercase block mb-3">Develop balance, awareness, recovery, and mind-body connection.</span>
              <span className="text-cyan-400">EXPLORE YOGA &rarr;</span>
            </Link>
          </div>
        </footer>

      </div>
    </main>
  );
}