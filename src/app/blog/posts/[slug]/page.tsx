import { getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

export default async function PostPage({
    params,
}: {
    params: { slug: string };
}) {
    const { slug } = params;

    if (!slug) return notFound();

    const post = await getPostBySlug(slug);

    if (!post) return notFound();

    let contentHtml = "";

    try {
        const file = await remark()
            .use(remarkRehype)
            .use(rehypeStringify)
            .process(post.content ?? "");

        contentHtml = String(file);
    } catch (e) {
        console.error("Markdown processing error:", e);
        contentHtml = "<p>Error loading content</p>";
    }

    return (
        <div style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
            <h1>{post.title ?? "Untitled"}</h1>
            <p>{post.category ?? "uncategorized"}</p>
            <hr />
            <article dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
    );
}