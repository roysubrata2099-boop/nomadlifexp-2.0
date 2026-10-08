import { NextRequest, NextResponse } from "next/server";

const legacyRedirects: Record<string, string> = {
  "/index.html": "/",
  "/blog.html": "/blog",
  "/fitness-consistency.html": "/blog/posts/passive-fitness-consumption-trap",
  "/attention-span.html": "/blog",
  "/cant-focus.html": "/blog",
  "/discipline-blog.html": "/blog",
  "/discipline-creates-freedom.html": "/blog",
  "/fitness-is-not-about-time.html": "/blog",
  "/forearm-stand.html": "/blog",
  "/forward-bending.html": "/blog",
  "/headstand.html": "/blog",
  "/mental-clarity.html": "/blog",
  "/self-discipline-guide.html": "/blog",
  "/stop-procrastination.html": "/blog",
  "/stuck-in-life.html": "/blog",

  "/blog/posts/stop-procrastination":
    "/blog/posts/why-you-procrastinate-how-to-stop",

  "/blog/posts/mental-clarity-how-to-stop-overthinking-and-improve-focus":
    "/blog/posts/mental-clarity-stop-overthinking-and-regain-focus",

  "/blog/posts/mental-clarity-stop-overthinking":
    "/blog/posts/mental-clarity-stop-overthinking-and-regain-focus",

  "/blog/posts/cant-focus-even-if-you-try":
    "/blog/posts/why-you-cannot-focus-overload",

  "/blog/posts/can-you-rebuild-your-attention-span-after-years-of-digital-distraction":
    "/blog/posts/rebuild-your-attention-span",

  "/blog/posts/the-reason-you-cant-focus-even-when-you-try-hard":
    "/blog/posts/why-you-cannot-focus-overload",

  "/insights/rebuild-attention-span-digital-distraction":
    "/blog/posts/rebuild-your-attention-span",

  "/insights/stop-procrastination-permanently":
    "/blog/posts/why-you-procrastinate-how-to-stop",
};

export function middleware(request: NextRequest) {
  const destination = legacyRedirects[request.nextUrl.pathname];

  if (!destination) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = destination;

  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: [
    "/index.html",
    "/blog.html",
    "/fitness-consistency.html",
    "/attention-span.html",
    "/cant-focus.html",
    "/discipline-blog.html",
    "/discipline-creates-freedom.html",
    "/fitness-is-not-about-time.html",
    "/forearm-stand.html",
    "/forward-bending.html",
    "/headstand.html",
    "/mental-clarity.html",
    "/self-discipline-guide.html",
    "/stop-procrastination.html",
    "/stuck-in-life.html",
    "/blog/posts/:path*",
    "/insights/:path*",
  ],
};
