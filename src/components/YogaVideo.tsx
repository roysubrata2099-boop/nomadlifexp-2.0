export default function YogaVideo() {
    return (
        <section className="w-full flex justify-center bg-black py-8 selection:bg-neutral-800 selection:text-white antialiased">
            <div className="w-full max-w-4xl px-6">
                <video
                    className="w-full rounded-none border border-neutral-900 shadow-2xl bg-neutral-950 aspect-video object-cover"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    {/* Fixed path pointing to the videos subfolder */}
                    <source src="/videos/yoga.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
}