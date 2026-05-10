"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Globe, Menu, X, ArrowRight } from "lucide-react";

interface SectionProps {
  locale: string;
}

export default function HeaderSection({ locale }: SectionProps) {
  const t = useTranslations("Index");
  const isRtl = locale === "ar";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    window.location.pathname = window.location.pathname.replace(
      /^\/(en|ar)/,
      `/${nextLocale}`
    );
  };

  return (
    <>
      <header className="fixed top-0 sm:top-4 left-0 right-0 max-w-7xl mx-auto z-50 px-4 sm:px-6 transition-all duration-300">
        <div className="backdrop-blur-xl bg-white/75 border border-sky-100/60 sm:rounded-full px-6 py-3.5 flex items-center justify-between shadow-[0_10px_30px_rgba(2,132,199,0.06)] relative">
          
          {/* Logo Brand Box */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Link href={`/${locale}`} className="relative w-36 h-14 rounded-xl overflow-hidden border border-sky-100 shadow bg-white flex items-center justify-center p-1 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/ertikaz-logo.jpeg"
                alt="Ertikaz Logo"
                fill
                priority
                className="object-contain"
                sizes="144px"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 font-bold text-sm text-blue-950/80">
            <Link
              href={`/${locale}`}
              className="px-3.5 py-1.5 hover:bg-sky-50/70 hover:text-blue-600 rounded-full transition-all"
            >
              {t("nav_home")}
            </Link>
            <Link
              href={`/${locale}#about`}
              className="px-3.5 py-1.5 hover:bg-sky-50/70 hover:text-blue-600 rounded-full transition-all"
            >
              {t("nav_about")}
            </Link>
            <Link
              href={`/${locale}#services`}
              className="px-3.5 py-1.5 hover:bg-sky-50/70 hover:text-blue-600 rounded-full transition-all"
            >
              {t("nav_services")}
            </Link>
            <Link
              href={`/${locale}/projects`}
              className="px-3.5 py-1.5 hover:bg-sky-50/70 hover:text-blue-600 rounded-full transition-all"
            >
              {t("nav_projects")}
            </Link>
            <Link
              href={`/${locale}#contact`}
              className="px-3.5 py-1.5 hover:bg-sky-50/70 hover:text-blue-600 rounded-full transition-all"
            >
              {t("nav_contact")}
            </Link>
          </nav>

          {/* Action Area */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 text-xs sm:text-sm font-black rounded-full border border-sky-100 bg-sky-50/60 hover:bg-sky-100 text-blue-700 transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{t("toggle_lang")}</span>
            </button>

            {/* Direct Contact Button */}
            <a
              href="https://wa.me/966509815516"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex px-6 py-2.5 text-xs sm:text-sm font-black rounded-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white transition-all shadow-md shadow-blue-500/10 hover:scale-[1.02]"
            >
              {isRtl ? "تواصل معنا" : "Contact Us"}
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full border border-sky-100 bg-sky-50/60 hover:bg-sky-100 text-blue-900 transition-all"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sliding Navigation Dropdown Overlay */}
      <div
        className={`fixed inset-x-0 top-0 z-40 lg:hidden transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-2xl border-b border-sky-100/80 pt-28 pb-8 px-6 space-y-6 shadow-2xl">
          <nav className="flex flex-col gap-4 font-extrabold text-base text-blue-950 text-right rtl:text-right ltr:text-left">
            <Link
              href={`/${locale}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2.5 px-4 hover:bg-sky-50/60 hover:text-blue-600 rounded-2xl transition-all"
            >
              {t("nav_home")}
            </Link>
            <Link
              href={`/${locale}#about`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2.5 px-4 hover:bg-sky-50/60 hover:text-blue-600 rounded-2xl transition-all"
            >
              {t("nav_about")}
            </Link>
            <Link
              href={`/${locale}#services`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2.5 px-4 hover:bg-sky-50/60 hover:text-blue-600 rounded-2xl transition-all"
            >
              {t("nav_services")}
            </Link>
            <Link
              href={`/${locale}/projects`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2.5 px-4 hover:bg-sky-50/60 hover:text-blue-600 rounded-2xl transition-all"
            >
              {t("nav_projects")}
            </Link>
            <Link
              href={`/${locale}#contact`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2.5 px-4 hover:bg-sky-50/60 hover:text-blue-600 rounded-2xl transition-all"
            >
              {t("nav_contact")}
            </Link>
          </nav>

          <div className="pt-4 border-t border-sky-100 flex flex-col gap-3">
            <a
              href="https://wa.me/966509815516"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-black text-center text-sm shadow-md flex items-center justify-center gap-2"
            >
              <span>{isRtl ? "تواصل معنا" : "Contact Us"}</span>
              <ArrowRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
