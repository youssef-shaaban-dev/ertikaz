import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // Supported locales
  locales: ["en", "ar"],

  // Used when no locale matches
  defaultLocale: "ar",

  // Do not show the locale prefix for the default locale if you want clean URLs,
  // but showing it is standard and simpler for next-intl. Let's keep it standard.
  localePrefix: "always"
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ar|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"]
};
