import Link from "next/link";

export default function YogaAwarenessPost() {
    return (
        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 20px" }}>

            <h1>Yoga Awareness System</h1>

            <p style={{ color: "#94a3b8" }}>
                Yoga is not flexibility. It is control of breath, body, and awareness.
            </p>

            <h2>Core Idea</h2>
            <p>
                Yoga builds internal stability through breath and movement control.
            </p>

            <h2>Practice Structure</h2>
            <ul>
                <li>Slow controlled movements</li>
                <li>Breath awareness in every posture</li>
                <li>Daily short practice (10–30 min)</li>
                <li>No ego-based performance</li>
            </ul>

            <h2>Outcome</h2>
            <p>
                A calm, stable, and aware mind-body system.
            </p>

            <div style={{ marginTop: "40px" }}>
                <Link href="/blog">← Back to Blog</Link>
            </div>

        </main>
    );
}