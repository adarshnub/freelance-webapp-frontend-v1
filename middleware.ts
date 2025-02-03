import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token");

  if (
    (req.nextUrl.pathname === "/" ||
      req.nextUrl.pathname.startsWith("/freelance") ||
      req.nextUrl.pathname.startsWith("/jobs")) &&
    !token
  ) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/freelance/:path*", "/jobs/:path*"],
};
