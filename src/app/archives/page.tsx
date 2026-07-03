import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "System Archives | NomadLifeXP",
    description: "Access the complete historical timeline of the NomadLifeXP self-transformation architecture.",
};

export default function ArchivesPage() {
    // This can be populated dynamically from your markdown parser later
    const historicalNodes = [
        { title: "Self-Discipline Guide: Reclaim Your Attention", date: "2026", route: "/blog/posts/self-discipline-comprehensive-guide", cat: "discipline" },
        { title: "Can You Rebuild Your Attention Span?", date: "2026", route: "/blog/posts/rebuild-your-attention-span", cat: "mindset" },
        { title: "Mental Clarity: How to Stop Overthinking", date: "2026", route: "/blog/posts/mental-clarity-stop-overthinking-and-regain-focus", cat: "mindset" },
        { title: "How to Build a Workout Habit That Outlasts Your Motivation", date: "2026", route: "/blog/posts/build-workout-habit-outlast-motivation", cat: "fitness" },
        { title: "What Happens in Your Mind When Everything Becomes Still", date: "2026", route: "/blog/posts/headstand-benefits-body-mind-safety", cat: "yoga" },
    ];

    return (
        <div className="min-h-screen bg-[#050914] text-[#EDF6FF] antialiased font-sans pt-36 pb-32">
            <div className="max-w-4xl mx-auto px-6">
                <nav className="mb-12 text-xs font-mono uppercase tracking-widest text-neutral-500">
                    <Link href="/blog" className="hover:text-cyan-400 transition-colors">&larr; BACK_TO_BLOG</Link>
                </nav>

                <header className="mb-16 border-b border-neutral-900 pb-8">
                    <p className="text-xs uppercase tracking-[0.3em] font-mono text-cyan-400 mb-2">// GLOBAL_INDEX_LOGS</p>
                    <h1 className="text-4xl font-black uppercase tracking-tight text-white">System Archives</h1>
                </header>

                <div className="space-y-4 font-mono">
                    {historicalNodes.map((node, i) => (
                        <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-900/40 py-3 text-sm hover:bg-neutral-950/40 px-2 transition-colors">
                            <div className="flex items-center gap-3">
                                <span className="text-xs text-neutral-600">[{node.cat}]</span>
                                <Link href={node.route} className="text-neutral-300 hover:text-cyan-400 transition-colors">
                                    {node.title}
                                </Link>
                            </div>
                            <span className="text-xs text-neutral-500 pt-1 sm:pt-0">{node.date} // RECORD</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}