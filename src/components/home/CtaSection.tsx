"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { MessageSquare, Mail, ArrowRight, CalendarDays, Rocket } from "lucide-react";

export default function CtaSection() {
  const t = useTranslations("CTA");

  return (
    <section id="cta-contact" className="relative py-20 px-6 overflow-hidden z-20">
      {/* Decorative backdrop blending into page */}
      <div className="absolute inset-0 bg-[#F8FAFC]" />

      <div className="max-w-6xl mx-auto relative">
        {/* Main Card Context */}
        <div className="relative rounded-[2.5rem] sm:rounded-[3.5rem] bg-blue-950 overflow-hidden shadow-2xl shadow-blue-950/30 group">
          
          {/* Complex Mesh Grid Background Animation (subtle CSS blur blobs) */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/30 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 animate-pulse duration-[10s]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
            
            {/* Fine Dot Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-10 mix-blend-overlay"
              style={{
                backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
                backgroundSize: '24px 24px'
              }}
            />
          </div>

          {/* Inner Layout */}
          <div className="relative px-8 py-16 sm:px-16 sm:py-24 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 text-center lg:text-left rtl:lg:text-right">
            
            {/* Left Content Textual Column */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start gap-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">
                <Rocket className="w-4 h-4 text-sky-300" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-sky-100">
                  {t("badge")}
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                {t("title")}
              </h2>
              
              <p className="text-blue-100/70 text-base sm:text-lg font-semibold max-w-xl text-balance">
                {t("desc")}
              </p>
            </div>

            {/* Right Button Stacks Column */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-stretch justify-center gap-4 w-full max-w-md mx-auto lg:mx-0">
              
              {/* WhatsApp Priority Link */}
              <Link
                href="https://wa.me/966596940453" 
                target="_blank"
                className="flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-500/20 hover:scale-[1.02] hover:shadow-sky-400/40 transition-all active:scale-95 group/btn"
              >
                <MessageSquare className="w-6 h-6 group-hover/btn:-rotate-12 transition-transform" />
                <span>{t("btn_wa")}</span>
              </Link>

              {/* Email Variant Link */}
              <Link
                href="mailto:info@ertikazsa.com"
                className="flex items-center justify-center gap-3 px-8 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-black text-lg backdrop-blur-md transition-all hover:border-white/20 group/btn2"
              >
                <Mail className="w-6 h-6 group-hover/btn2:scale-110 transition-transform" />
                <span>{t("btn_mail")}</span>
              </Link>

              {/* Small Trust Badge underneath */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-sky-200/60 text-xs font-bold mt-2">
                <CalendarDays className="w-4 h-4" />
                <span>{t("hours")}</span>
              </div>
            </div>
          </div>

          {/* Abstract Top Left Overlay Wave Shape */}
          <div className="absolute top-0 ltr:left-0 rtl:right-0 w-48 h-48 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-white/20 to-transparent rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-[2s]" />
        </div>
      </div>
    </section>
  );
}
