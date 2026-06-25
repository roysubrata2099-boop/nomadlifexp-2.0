import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">
            <h1 className="text-5xl font-bold text-yellow-400">404</h1>

            <p className="text-xl mt-4 text-zinc-300">
                This page could not be found.
            </p>

            <Link
                href="/"
                className="mt-6 px-5 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition"
            >
                Go Home
            </Link>
        </main>
    );
}