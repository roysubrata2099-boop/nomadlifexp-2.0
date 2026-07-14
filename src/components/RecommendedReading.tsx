import Link from "next/link";
import { getAllPosts, type PostData } from "@/lib/markdown";
import { getSafePostUrl } from "@/lib/routes";


interface RelatedProps {
    titles?: string[];
}



export default function RecommendedReading({
    titles = [],
}: RelatedProps) {


    const posts: PostData[] = getAllPosts() ?? [];



    const recommended: PostData[] = titles

        .map((title) =>
            posts.find(
                (post) =>
                    post.title.trim().toLowerCase() ===
                    title.trim().toLowerCase()
            )
        )

        .filter(
            (post): post is PostData =>
                Boolean(post)
        );




    if (recommended.length === 0) {
        return null;
    }




    return (

        <section className="mt-16">


            <h2
                className="
                    mb-6
                    font-mono
                    text-xs
                    uppercase
                    tracking-[0.4em]
                    text-neutral-500
                "
            >
                // RECOMMENDED READING
            </h2>



            <div className="space-y-4">


                {recommended.map((post) => (

                    <Link
                        key={post.slug}
                        href={getSafePostUrl(post.slug)}
                        className="
                            block
                            border
                            border-neutral-800
                            bg-neutral-950
                            p-6
                            hover:border-cyan-400
                            transition
                        "
                    >


                        <h3
                            className="
                                text-white
                                font-bold
                            "
                        >
                            {post.title}
                        </h3>



                        <p
                            className="
                                mt-3
                                text-sm
                                text-neutral-400
                            "
                        >
                            {post.description}
                        </p>



                        <span
                            className="
                                mt-4
                                inline-block
                                text-xs
                                font-mono
                                uppercase
                                text-cyan-400
                            "
                        >
                            READ ARTICLE →
                        </span>



                    </Link>

                ))}


            </div>


        </section>

    );
}