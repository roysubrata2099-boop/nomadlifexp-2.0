import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Yoga Mind & Body Awareness | NomadLifeXP",
    description:
        "Explore the connection between yoga, movement, breath, body awareness, mobility, balance, and personal growth with NomadLifeXP.",
    alternates: {
        canonical:
            "https://www.nomadlifexp.com/videos/yoga-mind-body-awareness",
    },
};

const VIDEO_URL =
    "https://www.nomadlifexp.com/videos/yoga-mind-body-awareness.mp4";

const THUMBNAIL_URL =
    "https://www.nomadlifexp.com/images/yoga-mind-body-awareness.jpg";

export default function YogaMindBodyAwarenessVideoPage() {
    const videoStructuredData = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: "Yoga Mind & Body Awareness",
        description:
            "Explore the connection between yoga, movement, breath, body awareness, mobility, balance, and personal growth with NomadLifeXP.",
        thumbnailUrl: [THUMBNAIL_URL],
        uploadDate: "2026-07-05T00:00:00Z",
        contentUrl: VIDEO_URL,
        creator: {
            "@type": "Organization",
            name: "NomadLifeXP",
            url: "https://www.nomadlifexp.com/",
        },
    };

    return (
        <main className="min-h-screen bg-[#050816] text-white">
            <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
                <div className="mb-10 text-center">
                    <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-cyan-400">
                        NomadLifeXP Yoga
                    </p>

                    <h1 className="text-4xl font-black uppercase tracking-tight md:text-6xl">
                        Yoga Mind &amp; Body Awareness
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
                        Explore the connection between movement, breath, body
                        awareness, mobility, balance, and personal growth.
                    </p>
                </div>

                <div className="overflow-hidden border border-white/10 bg-black shadow-2xl">
                    <video
                        className="aspect-video w-full bg-black object-cover"
                        controls
                        playsInline
                        preload="metadata"
                        poster="/images/yoga-mind-body-awareness.jpg"
                    >
                        <source
                            src="/videos/yoga-mind-body-awareness.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <article className="mx-auto mt-12 max-w-3xl space-y-6 text-base leading-relaxed text-slate-300 md:text-lg">
                    <p>
                        Yoga is more than performing individual poses. It can
                        be a practice for developing greater awareness of how
                        you move, breathe, balance, recover, and respond to
                        physical sensations.
                    </p>

                    <p>
                        This NomadLifeXP video explores mindful movement and
                        the relationship between physical practice and greater
                        body awareness.
                    </p>

                    <p>
                        Through movement, breath, mobility, and controlled
                        practice, the goal is to build a stronger connection
                        between body and mind.
                    </p>

                    <div className="border-l-4 border-cyan-400 bg-cyan-950/20 p-6">
                        <p className="font-mono text-sm uppercase tracking-widest text-cyan-300">
                            Movement. Breath. Awareness. Control.
                        </p>
                    </div>
                </article>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(videoStructuredData),
                    }}
                />
            </div>
        </main>
    );
}

