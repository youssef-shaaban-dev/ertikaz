import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import HeaderSection from "@/components/layout/HeaderSection";
import FooterSection from "@/components/layout/FooterSection";
import StickyWhatsapp from "@/components/layout/StickyWhatsapp";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "شركة ارتكاز للمقاولات والتكييف — Ertikaz",
  description: "شركة ارتكاز للمقاولات العالمية هي شركة هندسية وطنية رائدة متخصصة في أعمال التكييف والأعمال الكهروميكانيكية المتكاملة بالمملكة العربية السعودية.",
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  const isRtl = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-linear-to-b from-[#f0f9ff] via-[#ffffff] to-[#e6f4fe] text-blue-950 overflow-x-hidden font-sans selection:bg-blue-600 selection:text-white">
        <NextIntlClientProvider messages={messages}>
          <HeaderSection locale={locale} />
          <main className="grow bg-linear-to-b from-[#f0f9ff] via-[#ffffff] to-[#e6f4fe] text-blue-950 relative overflow-x-hidden selection:bg-blue-600 selection:text-white">
            {children}
          </main>
          <StickyWhatsapp />
          <FooterSection locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
