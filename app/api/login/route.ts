import { NextResponse, type NextRequest } from "next/server";
import { AUTH_COOKIE, tokenFor } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const given = String(form.get("password") ?? "").trim();
  const password = process.env.SITE_PASSWORD;

  if (!password || given !== password) {
    return NextResponse.redirect(new URL("/login?fel=1", req.url), 303);
  }

  const res = NextResponse.redirect(new URL("/", req.url), 303);
  res.cookies.set(AUTH_COOKIE, await tokenFor(password), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
  return res;
}
