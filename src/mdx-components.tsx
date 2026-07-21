import type { MDXComponents } from "mdx/types";


/**
 * Global MDX component mapping.
 *
 * This file is required by Next.js App Router
 * when using MDX.
 *
 * Keep this lightweight and predictable.
 * Custom components can be added here later.
 */
export function useMDXComponents(
    components: MDXComponents
): MDXComponents {
    return {
        ...components,
    };
}