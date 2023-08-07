import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const publicPath = path === "/login" || path === "/register";
  const token = request.cookies.get("token")?.value || "";
  if (publicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  } else if (!publicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: ["/login", "/register", "/"],
};
