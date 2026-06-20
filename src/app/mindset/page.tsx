import Link from "next/link";

export default function MentalClarityPost() {
    return (
        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 20px" }}>

            <h1>Mental Clarity System</h1>

            <p style={{ color: "#94a3b8" }}>
                Mental clarity is the ability to focus without internal noise.
            </p>

            <h2>Core Problem</h2>
            <p>
                Modern attention is fragmented due to constant distractions.
            </p>

            <h2>System Rules</h2>
            <ul>
                <li>Single-task focus only</li>
                <li>Reduce digital noise</li>
                <li>Daily reflection or journaling</li>
                <li>Protect attention like energy</li>
            </ul>

            <h2>Outcome</h2>
            <p>
                Sharp focus, emotional stability, and better decision-making.
            </p>

            <div style={{ marginTop: "40px" }}>
                <Link href="/blog">← Back to Blog</Link>
            </div>

        </main>
    );
}