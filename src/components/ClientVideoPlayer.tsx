"use client";

import { useEffect, useRef, useState } from "react";

export default function ClientVideoPlayer() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const video = videoRef.current;

        if (!video) {
            return;
        }

        const tryPlay = () => {
            if (video.paused) {
                video.play().catch(() => {
                    // Autoplay may be blocked by the browser.
                    // The poster remains visible until playback is allowed.
                });
            }
        };

        tryPlay();

        video.addEventListener("loadeddata", tryPlay);
        video.addEventListener("canplay", tryPlay);

        const timer = window.setTimeout(tryPlay, 500);

        return () => {
            window.clearTimeout(timer);
            video.removeEventListener("loadeddata", tryPlay);
            video.removeEventListener("canplay", tryPlay);
        };
    }, []);

    const handleVideoError = () => {
        setHasError(true);
    };

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#050816]">
            {!hasError ? (
                <>
                    <video
                        ref={videoRef}
                        className="absolute inset-0 w-full h-full object-contain object-center pointer-events-none select-none"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        controls={false}
                        disablePictureInPicture
                        aria-hidden="true"
                        poster="/images/yoga-mind-body-awareness.jpg"
                        onError={handleVideoError}
                    >
                        <source
                            src="/videos/yoga-mind-body-awareness.mp4"
                            type="video/mp4"
                        />
                    </video>

                    <div
                        className="absolute inset-0 z-10 pointer-events-auto"
                        onContextMenu={(event) => {
                            event.preventDefault();
                        }}
                        aria-hidden="true"
                    />
                </>
            ) : (
                <div
                    className="absolute inset-0 bg-cyan-950/60"
                    aria-hidden="true"
                />
            )}
        </div>
    );
}
