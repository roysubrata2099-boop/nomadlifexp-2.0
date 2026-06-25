import React from "react";

export type Block = {
  type: "h1" | "h2" | "p" | "highlight" | "quote" | "cta";
  text: string;
};

// 1. Separate UI components for clean separation of concerns and clear React DevTools profiling
const H1 = ({ text }: { text: string }) => <h1 className="text-3xl font-bold mb-6">{text}</h1>;
const H2 = ({ text }: { text: string }) => <h2 className="text-2xl font-semibold mt-8 mb-4">{text}</h2>;
const P = ({ text }: { text: string }) => <p className="text-gray-700 leading-relaxed mb-4">{text}</p>;

const Highlight = ({ text }: { text: string }) => (
  <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3 mb-4">{text}</div>
);

const Quote = ({ text }: { text: string }) => (
  <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600 mb-4">{text}</blockquote>
);

const CTA = ({ text }: { text: string }) => (
  <div className="font-semibold text-blue-600 mt-6 mb-4">{text}</div>
);

// 2. Strongly-typed mapping dictionary
const BLOCK_COMPONENTS: Record<Block["type"], React.ComponentType<{ text: string }>> = {
  h1: H1,
  h2: H2,
  p: P,
  highlight: Highlight,
  quote: Quote,
  cta: CTA,
};

// 3. Clean, declarative mapping function
export function renderPostContent(content: Block[]) {
  return content.map((block, index) => {
    const Component = BLOCK_COMPONENTS[block.type];

    // Fallback if an unexpected runtime type bypasses TypeScript
    if (!Component) {
      return (
        <p key={index} className="mb-4">
          {block.text}
        </p>
      );
    }

    // Direct element rendering eliminates nested Fragment wrapper overhead
    return <Component key={index} text={block.text} />;
  });
}