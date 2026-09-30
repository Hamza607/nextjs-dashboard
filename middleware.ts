import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET;

const secret = JWT_SECRET
  ? new TextEncoder().encode(JWT_SECRET)
  : null;

export async function middleware(
  request: NextRequest
) {
  const token =
    request.cookies.get("auth-token")?.value;

  const isDashboardRoute =
    request.nextUrl.pathname.startsWith(
      "/dashboard"
    );

  if (!isDashboardRoute) {
    return NextResponse.next();
  }

  if (!token || !secret) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  try {
    await jwtVerify(token, secret);

    return NextResponse.next();
  } catch {
    const response =
      NextResponse.redirect(
        new URL("/login", request.url)
      );

    response.cookies.delete("auth-token");

    return response;
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};