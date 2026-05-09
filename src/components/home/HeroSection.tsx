"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight, Wind, Activity, Shield, Cpu, Sparkles } from "lucide-react";

interface SectionProps {
  locale: string;
}

export default function HeroSection({ locale }: SectionProps) {
  const t = useTranslations("Index");
  const isRtl = locale === "ar";
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const xOffset = (e.clientX - window.innerWidth / 2) * 0.02;
      const yOffset = (e.clientY - window.innerHeight / 2) * 0.02;
      setParallax({ x: xOffset, y: yOffset });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 px-6 flex items-center justify-center overflow-hidden z-10">
      {/* Cool breeze micro-elements background inside the Hero itself for beautiful self-containment */}
      <div
        style={{
          transform: `translate(${parallax.x}px, ${parallax.y}px)`,
        }}
        className="absolute inset-0 pointer-events-none overflow-hidden z-0 transition-transform duration-500 ease-out opacity-40"
      >
        <svg
          className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 text-sky-200/50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 800"
          fill="none"
        >
          <path
            d="M -100,200 C 300,100 500,400 900,300 C 1300,200 1500,450 1900,350"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="8,12"
          />
          <path
            d="M -50,350 C 400,250 600,550 1000,400 C 1400,250 1600,500 2000,400"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="5,15"
          />
          <path
            d="M -150,550 C 250,450 450,750 850,600 C 1250,450 1450,700 1850,600"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeDasharray="12,18"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">
        <div className="space-y-8 text-center lg:text-left rtl:lg:text-right">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-200 bg-sky-50 text-blue-700 text-xs font-bold uppercase tracking-widest animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>
              {isRtl
                ? "توريد • تركيب • صيانة التكييف والأعمال الكهروميكانيكية"
                : "Supply • Install • Maintain HVAC & MEP"}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-blue-950">
            {t("title")}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-blue-900/70 font-semibold leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {t("subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white font-black transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>{t("cta_primary")}</span>
              <ArrowRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-sky-200 bg-white hover:bg-sky-50 text-blue-800 font-extrabold transition-all flex items-center justify-center"
            >
              {t("cta_secondary")}
            </a>
          </div>

          {/* Quick scope icons */}
          <div className="pt-6 border-t border-sky-100 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                <Wind className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-blue-900/80">
                {isRtl ? "تكييف وتهوية" : "HVAC Systems"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                <Activity className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-blue-900/80">
                {isRtl ? "أعمال سباكة وصحية" : "Plumbing Works"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-blue-900/80">
                {isRtl ? "مكافحة الحريق" : "Fire Protection"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-blue-900/80">
                {isRtl ? "تمديدات كهرباء" : "Electrical works"}
              </span>
            </div>
          </div>
        </div>

        {/* Right column: Premium photorealistic AC unit blowing breeze */}
        <div className="relative flex items-center justify-center select-none w-full h-[320px] sm:h-[450px]">
          <div className="absolute w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] bg-sky-300/30 rounded-full blur-[80px] pointer-events-none" />

          {/* Breeze lines */}
          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            <svg className="w-full h-full text-sky-400/60" fill="none" viewBox="0 0 400 400">
              <path
                d="M350,150 C250,150 200,100 100,120 C50,130 0,100 -50,110"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="animate-dash"
              />
              <path
                d="M380,200 C280,200 220,150 120,170 C70,180 20,150 -30,160"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-dash"
              />
              <path
                d="M340,250 C240,250 180,200 80,220 C30,230 -20,200 -70,210"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                className="animate-dash"
              />
            </svg>
          </div>

          <div className="relative w-full h-[220px] sm:h-[300px] rounded-3xl overflow-hidden border-2 border-sky-100 shadow-[0_20px_50px_rgba(2,132,199,0.15)] bg-white p-4">
            <Image
              src="/modern_ac_unit.png"
              alt="Ertikaz AC cooling system"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-w-720px) 100vw, 50vw"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
