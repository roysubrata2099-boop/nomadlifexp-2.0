import Link from "next/link";

export default function FitnessBasicsPost() {
    return (
        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 20px" }}>

            <h1>Fitness System</h1>

            <p style={{ color: "#94a3b8" }}>
                Fitness is not intensity. It is consistent physical development.
            </p>

            <h2>Core Principle</h2>
            <p>
                Your body improves through repetition, not random workouts.
            </p>

            <h2>Daily Structure</h2>
            <ul>
                <li>30–60 minutes movement daily</li>
                <li>Focus on form before intensity</li>
                <li>Progress slowly over time</li>
                <li>Recovery is part of training</li>
            </ul>

            <h2>Outcome</h2>
            <p>
                Strong, energetic body that supports mental clarity.
            </p>

            <div style={{ marginTop: "40px" }}>
                <Link href="/blog">← Back to Blog</Link>
            </div>

        </main>
    );
}