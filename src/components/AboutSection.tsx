import AboutSection from "@/components/AboutSection";
import { Metadata } from "next";

// 1. COMPILATION EDGE CACHING OPTIMIZATIONS
export const runtime = "edge"; // Deploys instantly to distributed global CDNs
export const dynamic = "force-static"; // Pre-builds page to flat HTML for sub-millisecond loads

// 2. SEARCH ENGINE METADATA ARRAYS
export const metadata: Metadata = {
  title: "About the System | NomadLifeXP",
  description: "The philosophy, mechanics, and direct architecture behind the NomadLifeXP framework for lifestyle optimization.",
  keywords: ["About NomadLifeXP", "System Architecture", "Habit Frameworks", "Lifestyle Optimization"],
  openGraph: {
    title: "About NomadLifeXP | The System Framework",
    description: "The philosophy, mechanics, and direct architecture behind the NomadLifeXP framework.",
    type: "profile",
  },
};

// 3. CORE PAGE COMPONENT RUNTIME
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden selection:bg-neutral-800 selection:text-white antialiased">
      {/* Structural grid line or boundary layer can be anchored here if required */}
      <div className="w-full relative z-10">
        <AboutSection />
      </div>
    </main>
  );
}