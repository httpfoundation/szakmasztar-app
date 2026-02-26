import { NextRequest, NextResponse } from "next/server";

/**
 * Middleware that restricts access on the production domain (app.szakmasztar.hu).
 *
 * - When the host is `app.szakmasztar.hu` and the visitor does NOT have the
 *   `szakmasztar_tester` cookie, every route is redirected to `/2026`.
 * - The `/test` route sets the tester cookie and redirects to `/`.
 * - Static files, Next.js internals, API routes, and the `/2026` page
 *   itself are always accessible.
 */

const PRODUCTION_HOST = "app.szakmasztar.hu";
const TESTER_COOKIE = "szakmasztar_tester";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host") ?? "";

  // ── /test route: set the tester cookie and redirect to home ──────────
  if (pathname === "/test") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    const response = NextResponse.redirect(url);

    response.cookies.set(TESTER_COOKIE, "1", {
      path: "/",
      httpOnly: false,
      // 90 days
      maxAge: 60 * 60 * 24 * 90,
      sameSite: "lax",
    });

    return response;
  }

  // ── Only enforce on the production domain ────────────────────────────
  const isProductionDomain =
    hostname === PRODUCTION_HOST || hostname.startsWith(`${PRODUCTION_HOST}:`);

  if (!isProductionDomain) {
    return NextResponse.next();
  }

  // ── Always allow the /2026 page ─────────────────────────────────────
  if (pathname === "/2026" || pathname.startsWith("/2026/")) {
    return NextResponse.next();
  }

  // ── If the tester cookie exists, allow everything ────────────────────
  if (request.cookies.get(TESTER_COOKIE)) {
    return NextResponse.next();
  }

  // ── Redirect everything else to /2026 ───────────────────────────
  const url = request.nextUrl.clone();
  url.pathname = "/2026";
  return NextResponse.redirect(url);
}

export const config = {
  /*
   * Match all routes except:
   * - _next/static  (static files)
   * - _next/image   (image optimisation)
   * - favicon.ico   (favicon)
   * - public folder assets (images, sw, manifest, etc.)
   */
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|images/|sw\\.js|workbox-|manifest|api/).*)",
  ],
};
