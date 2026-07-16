import { NextResponse } from "next/server";

// Meta's AI-training crawler (identifies itself as "meta-externalagent/1.1").
// It's been hammering the site and burning Vercel edge/function usage, so we
// reject it here before any rendering, data fetching, or Sanity calls happen.
const BLOCKED_USER_AGENTS = [/meta-externalagent/i];

export function middleware(request) {
  const userAgent = request.headers.get("user-agent") || "";

  if (BLOCKED_USER_AGENTS.some((pattern) => pattern.test(userAgent))) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
