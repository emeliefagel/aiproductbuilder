import { NextResponse, type NextRequest } from "next/server";
import { AUTH_COOKIE, tokenFor } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === "/login" || pathname === "/api/login") return NextResponse.next();

  const password = process.env.SITE_PASSWORD;
  const cookie = req.cookies.get(AUTH_COOKIE)?.value;
  if (password && cookie && cookie === (await tokenFor(password))) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png).*)"],
};
