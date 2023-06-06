import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import i18n from "../i18n-config.js";

let locales = ["en", "nl"];
let headers = { "accept-language": "nl-NL,nl;q=0.5" };
let languages = new Negotiator({ headers }).languages();
let defaultLocale = "nl";

// console.log(languages);

function getLocale(request) {
  return match(languages, locales, defaultLocale);
}

export default function middleware(request) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  // console.log(pathnameIsMissingLocale);
  // console.log(getLocale(request));

  // Redirect if there is no locale

  console.log(pathnameIsMissingLocale);
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

// console.log(middleware);

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
