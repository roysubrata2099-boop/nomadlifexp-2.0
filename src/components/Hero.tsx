export default function Hero() {
    return (
        <section
            style={{
                position: "relative",
                height: "85vh",
                overflow: "hidden",
            }}
        >
            <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            >
                <source src="/videos/yoga.mp4" type="video/mp4" />
            </video>

            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.55)",
                }}
            />

            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    textAlign: "center",
                }}
            >
                <h1>NomadLifeXP</h1>
                <p>Discipline • Fitness • Yoga • Mindset</p>
                <h2>Evolve in Motion</h2>
            </div>
        </section>
    );
}