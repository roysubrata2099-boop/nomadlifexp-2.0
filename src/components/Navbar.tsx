import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex gap-6 p-4 border-b">

            <Link href="/">Home</Link>

            <Link href="/blog">Blog</Link>

            <Link href="/about">About</Link>

            <Link href="/start-here">Start Here</Link>

            <Link href="/discipline-system">Discipline System</Link>

            <Link href="/blog/category/mindset">Mindset</Link>

            <Link href="/blog/category/discipline">Discipline</Link>

            <Link href="/blog/category/fitness">Fitness</Link>

            <Link href="/blog/category/yoga">Yoga</Link>

        </nav>
    );
}