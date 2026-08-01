// src/app/yoga/page.tsx

import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yoga Module // NomadLifeXP",
  description: "Movement, awareness, breathing, and balance routines engineered for physical longevity and mental clarity.",
  alternates: {
    canonical: "https://www.nomadlifexp.com/yoga",
  },
};

export default function YogaPage() {
  return (
    <main className="min-h-screen bg-black text-white antialiased selection:bg-cyan-500 selection:text-black">
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">

        {/* Visual Background Accent */}
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

        {/* Header Section */}
        <header className="relative z-10 mb-16 text-center">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                        // PILLAR 03 // YOGA & MOBILITY
          </p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-6">
            Movement, Awareness, <span className="text-cyan-400">Breathing &amp; Balance</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-light font-mono">
            Systematic mobility, breathing protocols, and structural balance routines designed to fortify physical range of motion and mental calm.
          </p>
        </header>

        {/* Video Module Section */}
        <section className="mb-24">
          <div className="max-w-4xl mx-auto border border-neutral-800 bg-neutral-950 p-3 sm:p-4 rounded-none shadow-2xl relative">
            <div className="absolute top-3 left-3 flex items-center gap-2 z-10 font-mono text-[10px] text-neutral-400 uppercase tracking-widest bg-black/80 px-2 py-1 border border-neutral-800">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              YOGA_STREAM_ACTIVE
            </div>
            <div className="w-full aspect-video bg-black border border-neutral-900 flex items-center justify-center overflow-hidden relative">
              {/* Embedded Yoga Video Clip Frame / Stream Container */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/30 via-black to-neutral-950 flex flex-col items-center justify-center p-6 text-center">
                <span className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400 mb-3">
                                    // YOGA &amp; RECOVERY PROTOCOL
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white mb-2">
                  FOUNDATIONAL MOBILITY &amp; BREATHWORK
                </h3>
                <p className="font-mono text-xs text-neutral-400 max-w-md mx-auto mb-6">
                  Stream integrated live movement sessions and restorative flexibility routines.
                </p>
                <div className="font-mono text-[11px] text-cyan-400 border border-cyan-500/30 bg-cyan-950/40 px-4 py-2 uppercase tracking-widest">
                  STATUS: READY FOR VIDEO EMBED
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back Navigation Footer */}
        <footer className="border-t border-neutral-900 pt-12 flex items-center justify-between font-mono text-xs uppercase tracking-widest">
          <Link href="/" className="text-neutral-400 hover:text-cyan-400 transition-colors">
            &larr; Return to Home Systems
          </Link>
          <Link href="/discipline" className="text-neutral-400 hover:text-cyan-400 transition-colors">
            Next: Discipline Module &rarr;
          </Link>
        </footer>

      </div>
    </main>
  );
}