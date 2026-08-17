"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type JSX } from "react";

// --- INTERFACES ---
interface SystemItem {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly coreFocus: string;
  readonly description: string;
  readonly primaryOutcome: string;
  readonly href: string;
}

interface NavItem {
  readonly label: string;
  readonly href: string;
}

interface JourneyStage {
  readonly step: string;
  readonly title: string;
  readonly desc: string;
}

interface KnowledgeCategory {
  readonly title: string;
  readonly focus: string;
  readonly href: string;
}

// --- DATA ---
const NAVIGATION: readonly NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Systems", href: "/discipline-system" },
  { label: "Blog", href: "/blog" },
  { label: "Start", href: "/start-here" },
];

const FOUR_SYSTEMS: readonly SystemItem[] = [
  {
    id: "sys-discipline",
    number: "01",
    title: "Discipline System",
    coreFocus: "HABITS. FOCUS. CONSISTENCY.",
    description: "Build the ability to act with intention, follow through, and create consistency that lasts.",
    primaryOutcome: "Stronger routines. Better focus. Greater self-control.",
    href: "/blog/category/discipline",
  },
  {
    id: "sys-fitness",
    number: "02",
    title: "Fitness System",
    coreFocus: "STRENGTH. MOBILITY. PERFORMANCE.",
    description: "Build physical capacity through strength, movement, conditioning, and intelligent recovery.",
    primaryOutcome: "A stronger, more capable, more resilient body.",
    href: "/blog/category/fitness",
  },
  {
    id: "sys-yoga",
    number: "03",
    title: "Yoga System",
    coreFocus: "MOVEMENT. AWARENESS. RECOVERY.",
    description: "Develop mobility, breath, body awareness, balance, and deeper control through mindful movement.",
    primaryOutcome: "Better movement. Better recovery. Greater mind-body connection.",
    href: "/blog/category/yoga",
  },
  {
    id: "sys-mindset",
    number: "04",
    title: "Mindset System",
    coreFocus: "GROWTH. RESILIENCE. CONFIDENCE.",
    description: "Develop the mental foundations required to handle pressure, overcome resistance, and keep evolving.",
    primaryOutcome: "Greater resilience. Stronger confidence. A growth-oriented mind.",
    href: "/blog/category/mindset",
  },
];

// --- COMPONENTS ---
function ClientVideoPlayer(): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = (): void => {
      video.play().catch((): void => { });
    };

    tryPlay();

    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);

    const timer = setTimeout(tryPlay, 500);

    return () => {
      clearTimeout(timer);
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-cyan-950/40">
      {!hasError ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          aria-hidden="true"
          poster="/images/yoga-poster.jpg"
          onError={(): void => setHasError(true)}
        >
          <source src="/videos/yoga-mind-body-awareness.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="absolute inset-0 bg-cyan-950/60" />
      )}
    </div>
  );
}

export default function HomePage(): JSX.Element {
  const youtubeUrl: string = process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://youtube.com/@nomadlifexp";
  const instagramUrl: string = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/nomadlifexp";

  useEffect(() => {
    // Content Protection
    const handleContextMenu = (e: MouseEvent): void => { e.preventDefault(); };
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "F12" || (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) || (e.ctrlKey && e.key === "U")) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#050816] text-white selection:bg-cyan-400 selection:text-black font-sans flex flex-col justify-between">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="font-black tracking-[0.25em] text-sm uppercase">
            NOMADLIFE<span className="text-cyan-400">XP</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <Link key={item.href} href={item.href} className="text-xs uppercase font-bold text-slate-300 hover:text-cyan-400 transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/start-here" className="px-4 py-2 bg-cyan-400 text-black font-bold uppercase text-xs tracking-wider hover:bg-cyan-300 transition-colors">
            Start Here &rarr;
          </Link>
        </div>
      </header>

      <main className="pt-20 flex-grow">
        {/* HERO SECTION */}
        <section className="py-24 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight mb-6">BUILD YOURSELF<br /><span className="text-cyan-400">LIKE A SYSTEM</span></h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">NomadLifeXP helps you build discipline, fitness, mindset, and habits through structured systems.</p>
            <Link href="/start-here" className="px-8 py-4 bg-cyan-400 text-black font-bold uppercase text-xs tracking-wider hover:bg-cyan-300">Start Your Evolution &rarr;</Link>
          </div>
        </section>

        {/* CINEMATIC YOGA SECTION */}
        <section className="relative w-full h-[60vh] my-12 overflow-hidden">
          <ClientVideoPlayer />
          <div className="absolute inset-0 z-10 flex items-center justify-center text-center">
            <h2 className="text-4xl font-black uppercase text-white drop-shadow-2xl">Evolve in Motion</h2>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#03050c] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Link href="/" className="font-black tracking-[0.25em] text-sm uppercase block mb-2">NOMADLIFE<span className="text-cyan-400">XP</span></Link>
            <p className="text-xs text-slate-500 font-mono">&copy; {new Date().getFullYear()} NomadLifeXP. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-cyan-400">YouTube &rarr;</a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-cyan-400">Instagram &rarr;</a>
          </div>
        </div>
      </footer>
    </div>
  );
}