"use client";

import Image from "next/image";
import { useState } from "react";

interface YouTubeShortProps {
    id: string;
    title?: string;
}

export default function YouTubeShort({
    id,
    title = "YouTube Short",
}: YouTubeShortProps) {
    const [playing, setPlaying] = useState(false);

    const thumbnail = `https://i.ytimg.com/vi/${encodeURIComponent(id)}/hqdefault.jpg`;

    return (
        <section className="my-8 flex flex-col items-center gap-4">
            <div className="relative aspect-[9/16] w-full max-w-[400px] overflow-hidden rounded-xl bg-black shadow-lg">
                {playing ? (
                    <iframe
                        src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&playsinline=1`}
                        title={title}
                        className="absolute inset-0 h-full w-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="eager"
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                ) : (
                    <button
                        type="button"
                        onClick={() => setPlaying(true)}
                        aria-label={`Play video: ${title}`}
                        className="group absolute inset-0 flex h-full w-full items-center justify-center bg-black"
                    >
                        <Image
                            src={thumbnail}
                            alt=""
                            fill
                            unoptimized
                            sizes="(max-width: 400px) 100vw, 400px"
                            className="object-cover"
                        />

                        <span className="absolute inset-0 bg-black/20 transition group-hover:bg-black/35" />

                        <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-white shadow-xl transition group-hover:scale-110">
                            <svg
                                viewBox="0 0 24 24"
                                className="h-10 w-10 fill-current"
                                aria-hidden="true"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </span>
                    </button>
                )}
            </div>

            <a
                href="https://www.youtube.com/@nomadlifexp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
            >
                Subscribe to NomadLifeXP on YouTube
            </a>
        </section>
    );
}