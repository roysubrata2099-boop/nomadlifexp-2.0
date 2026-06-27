import Link from "next/link";

export default function CategoryStrip() {
    const categories = ["discipline", "fitness", "yoga", "mindset"];

    return (
        <div className="flex flex-wrap gap-4 justify-center text-sm font-medium text-neutral-500">
            {categories.map((cat) => (
                <Link
                    key={cat}
                    href={`/blog/category/${cat}`}
                    className="hover:text-white transition"
                >
                    {cat.toUpperCase()}
                </Link>
            ))}
        </div>
    );
}