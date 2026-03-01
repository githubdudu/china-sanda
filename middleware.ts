import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const key
      = request.nextUrl.searchParams.get("key")
        ?? request.cookies.get("admin-key")?.value;

    if (!key || key !== process.env.ADMIN_KEY) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    // Set cookie so staff don't need ?key= on every page navigation
    const response = NextResponse.next();
    response.cookies.set("admin-key", key, {
      httpOnly: true,
      path: "/",
      sameSite: "strict",
    });
    return response;
  }
}

export const config = { matcher: ["/admin/:path*"] };
