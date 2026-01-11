import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { QR_TOKENS } from "@/lib/auth"

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // Allow login page
  if (pathname === "/login") {
    return NextResponse.next()
  }

  // Check auth cookie
  const isAuthenticated = request.cookies.get("wedding_auth")?.value === "true"

  if (isAuthenticated) {
    return NextResponse.next()
  }

  // Check QR token
  const token = searchParams.get("token")
  if (token && QR_TOKENS.includes(token)) {
    const response = NextResponse.redirect(new URL("/", request.url))
    response.cookies.set("wedding_auth", "true", {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    })
    return response
  }

  // Redirect to login
  return NextResponse.redirect(new URL("/login", request.url))
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
}
