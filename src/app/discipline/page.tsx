import Link from "next/link";

export default function DisciplineSystemPost() {
    return (
        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 20px" }}>

            <h1>Discipline System</h1>

            <p style={{ color: "#94a3b8" }}>
                Discipline is not motivation. It is a structured system of repeated action.
            </p>

            <h2>Core Idea</h2>
            <p>
                Discipline is the ability to act even when you do not feel like it.
                This is the foundation of all transformation inside NomadLifeXP.
            </p>

            <h2>System Rules</h2>
            <ul>
                <li>Show up daily, even at low energy</li>
                <li>Start small, stay consistent</li>
                <li>Track actions, not feelings</li>
                <li>Remove decision fatigue</li>
            </ul>

            <h2>Outcome</h2>
            <p>
                A stable identity built on consistency, not motivation.
            </p>

            <div style={{ marginTop: "40px" }}>
                <Link href="/blog">← Back to Blog</Link>
            </div>

        </main>
    );
}