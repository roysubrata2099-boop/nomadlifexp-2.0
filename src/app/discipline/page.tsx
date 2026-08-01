import { notFound } from "next/navigation";
import { getPostsByCategory } from "@/lib/blog"; // Adjust to your data fetching utility
import BlogCard from "@/components/BlogCard";

interface CategoryPageProps {
    params: {
        category: string;
    };
}

// Generate static paths for known categories
export async function generateStaticParams() {
    return [
        { category: "discipline" },
        { category: "fitness" },
        { category: "nomad-life" },
    ];
}

export async function generateMetadata({ params }: CategoryPageProps) {
    const category = params.category.toLowerCase();
    const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);

    return {
        title: `${formattedCategory} | NomadLifeXP`,
        description: `Explore articles, systems, and guides focused on ${category} for digital nomads.`,
        alternates: {
            canonical: `https://www.nomadlifexp.com/blog/category/${category}`,
        },
    };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const category = params.category.toLowerCase();
    const posts = await getPostsByCategory(category);

    if (!posts || posts.length === 0) {
        // Optionally allow empty categories or trigger a 404
        // notFound();
    }

    const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);

    // Define accent styling based on category context
    const accentColor =
        category === "discipline" ? "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" :
            category === "fitness" ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" :
                "text-amber-400 bg-amber-500/10 border-amber-500/20";

    return (
        <main className="min-h-screen max-w-6xl mx-auto px-4 py-12">
            <header className="mb-12">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 border ${accentColor}`}>
                    Category Archive
                </span>
                <h1 className="text-4xl font-extrabold tracking-tight text-white mb-4">
                    {formattedCategory}
                </h1>
                <p className="text-zinc-400 max-w-2xl text-lg">
                    Mastering {category} as a location-independent professional. Practical systems, frameworks, and deep dives.
                </p>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post: any) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </section>
        </main>
    );
}