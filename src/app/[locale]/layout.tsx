import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isRtl = locale === "ar";
  
  return {
    title: isRtl 
      ? "الارتكاز الدولية للمقاولات فى المملكة العربية السعودية"
      : "Ertikaz International Contracting | MEP & HVAC KSA",
    description: isRtl
      ? "شركة الارتكاز الدولية للمقاولات تقدم حلول MEP وHVAC - توريد وتركيب وصيانة التكييف، مكافحة الحريق، السباكة والكهرباء في الرياض - المملكة العربية السعودية."
      : "Ertikaz International Contracting delivers MEP, HVAC, fire protection, plumbing, and electrical solutions for projects across Saudi Arabia.",
    icons: {
      icon: "/logo.webp",
      apple: "/logo.webp",
    },
  };
}

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
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
