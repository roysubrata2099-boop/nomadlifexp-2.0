import type { MDXComponents } from "mdx/types";
import YouTubeShort from "@/components/YouTubeShort";

/**
 * Global MDX component mapping.
 *
 * This file is required by Next.js App Router
 * when using MDX.
 */
export function useMDXComponents(
    components: MDXComponents
): MDXComponents {
    return {
        ...components,
        YouTubeShort,
    };
}
