import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEFAULT_PREFERENCES, isValidLocale } from "@/lib/locale";
import { readPreferencesFromCookie } from "@/lib/locale-storage";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    const saved = readPreferencesFromCookie(request.headers.get("cookie"));
    const locale = saved?.locale ?? DEFAULT_PREFERENCES.locale;
    const response = NextResponse.redirect(new URL(`/${locale}`, request.url));
    response.headers.set("x-locale", locale);
    return response;
  }

  const locale = pathname.split("/")[1];
  if (locale && !isValidLocale(locale)) {
    const response = NextResponse.redirect(new URL(`/${DEFAULT_PREFERENCES.locale}`, request.url));
    response.headers.set("x-locale", DEFAULT_PREFERENCES.locale);
    return response;
  }

  const response = NextResponse.next();
  if (locale && isValidLocale(locale)) {
    response.headers.set("x-locale", locale);
  }
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
