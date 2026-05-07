import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  
  // Default to Arabic if locale is undefined or unsupported
  if (!locale || !["en", "ar"].includes(locale)) {
    locale = "ar";
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
