"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Wind,
  Shield,
  Activity,
  Cpu,
  Mail,
  Layers,
  Sparkles,
  Phone,
  Briefcase,
  FileText,
  MapPin,
  Building,
  CheckCircle,
} from "lucide-react";

// Register ScrollTrigger client-side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TranslationProps {
  t: (key: string) => string;
  isRtl: boolean;
}

// 1. Header Navigation Component
function HeaderSection({
  isRtl,
  t,
  toggleLanguage,
}: TranslationProps & { toggleLanguage: () => void }) {
  return (
    <header className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-white/80 border-b border-sky-100/80 px-6 py-4 flex items-center justify-between shadow-sm">
      <div
        className="flex items-center gap-3 cursor-pointer group"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-sky-200 shadow bg-white flex items-center justify-center p-1 group-hover:scale-105 transition-transform">
          <Image
            src="/ertikaz-logo.jpeg"
            alt="Ertikaz Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col text-right rtl:text-right ltr:text-left">
          <span className="text-base sm:text-lg font-black tracking-tight text-blue-900 group-hover:text-blue-600 transition-colors">
            {isRtl ? "ارتكاز للمقاولات" : "Ertikaz SA"}
          </span>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-sky-600 font-extrabold leading-none">
            {isRtl ? "أعمال كهروميكانيكية وتكييف" : "MEP & HVAC Engineering"}
          </span>
        </div>
      </div>

      <nav className="hidden lg:flex items-center gap-8 font-bold text-sm text-blue-900/80">
        <a href="#" className="hover:text-blue-600 transition-colors">
          {t("nav_home")}
        </a>
        <a href="#about" className="hover:text-blue-600 transition-colors">
          {t("nav_about")}
        </a>
        <a href="#services" className="hover:text-blue-600 transition-colors">
          {t("nav_services")}
        </a>
        <a href="#catalog" className="hover:text-blue-600 transition-colors">
          {t("nav_projects")}
        </a>
        <a href="#contact" className="hover:text-blue-600 transition-colors">
          {t("nav_contact")}
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 text-xs sm:text-sm font-extrabold rounded-full border border-sky-200/60 bg-sky-50 text-blue-700 hover:bg-sky-100 transition-all cursor-pointer"
        >
          {t("toggle_lang")}
        </button>

        <a
          href="#contact"
          className="hidden md:flex px-6 py-2.5 text-xs sm:text-sm font-extrabold rounded-full bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white transition-all shadow-md hover:scale-[1.02]"
        >
          {t("cta_primary")}
        </a>
      </div>
    </header>
  );
}

// 2. Hero Section Component (Instant visual impact with dynamic cool breeze flow)
function HeroSection({
  isRtl,
  t,
  parallax,
}: TranslationProps & { parallax: { x: number; y: number } }) {
  return (
    <section className="relative min-h-screen pt-32 px-6 flex items-center justify-center overflow-hidden z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left column: Clear copy and action buttons */}
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

// 3. About Section Component (RECONSTRUCTED EXACTLY LIKE THE SCREENSHOT)
function AboutSection({ isRtl, t }: TranslationProps) {
  return (
    <section id="about" className="py-24 px-6 md:px-16 bg-white relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left column in LTR, Right column in RTL: Reconstructed exactly as requested */}
        <div className="space-y-8 text-right rtl:text-right ltr:text-left">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
              {isRtl ? (
                <>
                  من نحن <span className="text-[#54c4f3]">ارتكاز</span>
                </>
              ) : (
                <>
                  About <span className="text-[#54c4f3]">Ertikaz</span>
                </>
              )}
            </h2>
            {/* The beautiful light sky-blue horizontal underline from screenshot */}
            <div className="w-16 h-[3px] bg-[#54c4f3] rounded-full" />
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold max-w-2xl text-justify">
            {isRtl ? (
              <>
                شركة ارتكاز للمقاولات العالمية هي شركة هندسية وطنية رائدة متخصصة
                في توريد وتصميم وتركيب وصيانة الأنظمة الهندسية المتكاملة للمباني
                والمنشآت. تأسست مع الالتزام بتقديم حلول مبتكرة وموثوقة، وتلبي
                احتياجات المشاريع السكنية والتجارية والصناعية عبر مختلف القطاعات.
                تكمن خبرتنا الأساسية في أنظمة التكييف والتهوية، أعمال السباكة
                والصرف، مكافحة الحريق، الأنظمة الكهربائية والحلول الأمنية.
              </>
            ) : (
              <>
                Ertikaz International Contracting is a leading engineering
                contracting company specializing in the supply, installation,
                and maintenance of integrated engineering systems for buildings
                and facilities. Established with a commitment to delivering
                innovative and reliable solutions, we cater to residential,
                commercial, and industrial projects across various sectors. Our
                core expertise lies in HVAC and ventilation, plumbing and
                drainage, fire protection, electrical systems, and security
                solutions.
              </>
            )}
          </p>

          <div>
            {/* The beautiful solid sky-blue pill button from screenshot */}
            <a
              href="#services"
              className="inline-block px-8 py-3 bg-[#54c4f3] hover:bg-[#3db3e6] text-white font-extrabold text-sm rounded-full transition-all hover:scale-105 shadow-md shadow-[#54c4f3]/20"
            >
              {isRtl ? "عرض المزيد" : "View More"}
            </a>
          </div>
        </div>

        {/* Right column in LTR, Left column in RTL: Rounded Handshake city double-exposure image */}
        <div className="relative w-full h-[280px] sm:h-[380px] rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.12)] border border-sky-100 bg-[#f4faff]">
          <Image
            src="/ertikaz_about_handshake.png"
            alt="Ertikaz handshake corporate business engineering"
            fill
            className="object-cover object-center"
            sizes="(max-w-720px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}

// 4. Exploded AC Disassembly Section Component (ScrollTrigger driven)
interface DisassemblyProps extends TranslationProps {
  triggerRef: React.RefObject<HTMLDivElement | null>;
  casingRef: React.RefObject<HTMLDivElement | null>;
  filterRef: React.RefObject<HTMLDivElement | null>;
  fanRef: React.RefObject<HTMLDivElement | null>;
  chassisRef: React.RefObject<HTMLDivElement | null>;
  line1Ref: React.RefObject<HTMLDivElement | null>;
  line2Ref: React.RefObject<HTMLDivElement | null>;
  line3Ref: React.RefObject<HTMLDivElement | null>;
  line4Ref: React.RefObject<HTMLDivElement | null>;
  labelCompRef: React.RefObject<HTMLDivElement | null>;
  labelFilterRef: React.RefObject<HTMLDivElement | null>;
  labelFanRef: React.RefObject<HTMLDivElement | null>;
  labelChassisRef: React.RefObject<HTMLDivElement | null>;
}
function DisassemblySection({
  isRtl,
  t,
  triggerRef,
  casingRef,
  filterRef,
  fanRef,
  chassisRef,
  line1Ref,
  line2Ref,
  line3Ref,
  line4Ref,
  labelCompRef,
  labelFilterRef,
  labelFanRef,
  labelChassisRef,
}: DisassemblyProps) {
  return (
    <section
      id="disassembly"
      ref={triggerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden z-20 py-24 bg-gradient-to-b from-transparent via-[#f0f9ff] to-transparent border-b border-sky-100"
    >
      <div className="w-full max-w-7xl mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between relative gap-12">
        <div className="md:max-w-sm space-y-4 self-start md:self-center text-right rtl:text-right ltr:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-700">
            <Layers className="w-4 h-4" />
            <span>
              {isRtl ? "العرض الهندسي المفكك" : "Engineering Exploded View"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-blue-950 leading-tight">
            {t("disassembly_title")}
          </h2>
          <p className="text-sm sm:text-base text-blue-900/70 font-semibold leading-relaxed">
            {t("disassembly_subtitle")}
          </p>
        </div>

        <div className="relative flex-1 max-w-[320px] sm:max-w-[500px] h-[350px] sm:h-[450px] flex items-center justify-center perspective-[1000px]">
          {/* Connector Lines */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <div
              ref={line1Ref}
              className={`absolute w-12 sm:w-24 h-0.5 bg-gradient-to-r from-blue-500 to-transparent origin-right scale-x-0 opacity-0 transition-transform ${
                isRtl
                  ? "right-1/4 bottom-[35%] -rotate-12"
                  : "left-1/4 bottom-[35%] rotate-12"
              }`}
            />
            <div
              ref={line2Ref}
              className={`absolute w-16 sm:w-28 h-0.5 bg-gradient-to-r from-blue-500 to-transparent origin-right scale-x-0 opacity-0 transition-transform ${
                isRtl
                  ? "right-1/4 top-[28%] rotate-12"
                  : "left-1/4 top-[28%] -rotate-12"
              }`}
            />
            <div
              ref={line3Ref}
              className={`absolute w-16 sm:w-28 h-0.5 bg-gradient-to-l from-blue-500 to-transparent origin-left scale-x-0 opacity-0 transition-transform ${
                isRtl
                  ? "left-1/4 bottom-[30%] rotate-12"
                  : "right-1/4 bottom-[30%] -rotate-12"
              }`}
            />
            <div
              ref={line4Ref}
              className={`absolute w-12 sm:w-24 h-0.5 bg-gradient-to-l from-blue-500 to-transparent origin-left scale-x-0 opacity-0 transition-transform ${
                isRtl
                  ? "left-1/4 top-[32%] -rotate-12"
                  : "right-1/4 top-[32%] rotate-12"
              }`}
            />
          </div>

          {/* Floating labels */}
          <div
            ref={labelCompRef}
            className={`absolute p-4 rounded-2xl backdrop-blur-md bg-white/90 border border-sky-100 max-w-[150px] sm:max-w-[180px] text-xs pointer-events-none opacity-0 scale-90 translate-y-4 shadow-lg ${
              isRtl ? "right-[2%] bottom-[12%]" : "left-[2%] bottom-[12%]"
            }`}
          >
            <h4 className="font-extrabold text-blue-700 flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5" />
              <span>{t("comp_title")}</span>
            </h4>
            <p className="mt-1.5 text-blue-900/70 font-semibold leading-relaxed">
              {t("comp_desc")}
            </p>
          </div>

          <div
            ref={labelFilterRef}
            className={`absolute p-4 rounded-2xl backdrop-blur-md bg-white/90 border border-sky-100 max-w-[150px] sm:max-w-[180px] text-xs pointer-events-none opacity-0 scale-90 -translate-y-4 shadow-lg ${
              isRtl ? "right-[2%] top-[8%]" : "left-[2%] top-[8%]"
            }`}
          >
            <h4 className="font-extrabold text-blue-700 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" />
              <span>{t("filter_title")}</span>
            </h4>
            <p className="mt-1.5 text-blue-900/70 font-semibold leading-relaxed">
              {t("filter_desc")}
            </p>
          </div>

          <div
            ref={labelFanRef}
            className={`absolute p-4 rounded-2xl backdrop-blur-md bg-white/90 border border-sky-100 max-w-[150px] sm:max-w-[180px] text-xs pointer-events-none opacity-0 scale-90 translate-y-4 shadow-lg ${
              isRtl ? "left-[2%] bottom-[8%]" : "right-[2%] bottom-[8%]"
            }`}
          >
            <h4 className="font-extrabold text-blue-700 flex items-center gap-1">
              <Wind className="w-3.5 h-3.5" />
              <span>{t("fan_title")}</span>
            </h4>
            <p className="mt-1.5 text-blue-900/70 font-semibold leading-relaxed">
              {t("fan_desc")}
            </p>
          </div>

          <div
            ref={labelChassisRef}
            className={`absolute p-4 rounded-2xl backdrop-blur-md bg-white/90 border border-sky-100 max-w-[150px] sm:max-w-[180px] text-xs pointer-events-none opacity-0 scale-90 -translate-y-4 shadow-lg ${
              isRtl ? "left-[2%] top-[12%]" : "right-[2%] top-[12%]"
            }`}
          >
            <h4 className="font-extrabold text-blue-700 flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" />
              <span>{t("chassis_title")}</span>
            </h4>
            <p className="mt-1.5 text-blue-900/70 font-semibold leading-relaxed">
              {t("chassis_desc")}
            </p>
          </div>

          {/* AC Layers */}
          <div className="relative w-[280px] h-[130px] sm:w-[380px] sm:h-[180px] transform-style-3d select-none">
            <div
              ref={chassisRef}
              className="absolute inset-0 bg-gradient-to-b from-sky-50 to-sky-100 border border-sky-200 rounded-2xl shadow-[inset_0_1px_5px_rgba(255,255,255,0.8)] flex items-center justify-between p-6 overflow-hidden transform-gpu"
            >
              <div className="w-[30%] h-[90%] bg-blue-950 rounded-xl border border-sky-900 p-3 flex flex-col justify-between">
                <div className="w-full h-1 bg-sky-500/30 rounded-full animate-pulse" />
                <div className="w-full h-full bg-gradient-to-r from-blue-900 to-sky-950 rounded-md border border-sky-800 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-sky-400" />
                </div>
              </div>
              <div className="flex-1 h-full px-4 flex flex-col justify-around">
                <div className="w-full h-2 bg-gradient-to-r from-sky-400 via-sky-300 to-sky-500 rounded-full" />
                <div className="w-full h-2 bg-gradient-to-r from-sky-400 via-sky-300 to-sky-500 rounded-full" />
                <div className="w-full h-2 bg-gradient-to-r from-sky-400 via-sky-300 to-sky-500 rounded-full" />
              </div>
            </div>

            <div
              ref={fanRef}
              className="absolute inset-0 flex items-center justify-center transform-gpu"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-sky-300 bg-sky-100/40 backdrop-blur-[1px] flex items-center justify-center relative shadow-md">
                <svg
                  className="w-full h-full text-sky-500"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="10" fill="currentColor" />
                  <path
                    d="M 50,40 C 35,40 25,25 35,15 C 45,5 50,25 50,40 Z"
                    fill="currentColor"
                  />
                  <path
                    d="M 60,50 C 60,35 75,25 85,35 C 95,45 75,50 60,50 Z"
                    fill="currentColor"
                  />
                  <path
                    d="M 50,60 C 65,60 75,75 65,85 C 55,95 50,75 50,60 Z"
                    fill="currentColor"
                  />
                  <path
                    d="M 40,50 C 40,65 25,75 15,65 C 5,55 25,50 40,50 Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            <div
              ref={filterRef}
              className="absolute inset-0 bg-sky-200/20 backdrop-blur-[2px] border-2 border-sky-300 rounded-2xl overflow-hidden p-2 transform-gpu flex flex-col justify-between"
            >
              <div className="w-full h-full border border-sky-200 rounded-lg flex flex-wrap gap-1.5 p-2 overflow-hidden opacity-80">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded bg-sky-300/20 border border-sky-300/40 flex-shrink-0"
                  />
                ))}
              </div>
            </div>

            <div
              ref={casingRef}
              className="absolute inset-0 bg-gradient-to-r from-white to-sky-50 border-2 border-sky-200 rounded-2xl shadow-xl flex flex-col justify-between p-4 transform-gpu"
            >
              <div className="flex justify-between items-start w-full">
                <span className="text-[9px] sm:text-[10px] font-black tracking-widest text-blue-800">
                  ERTIKAZ AC SYSTEM
                </span>
                <div className="flex items-center gap-1.5 bg-sky-100 px-2 py-0.5 rounded-full border border-sky-200">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-ping" />
                  <span className="text-[8px] sm:text-[10px] font-bold text-blue-700">
                    16°C
                  </span>
                </div>
              </div>
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-sky-300 to-transparent animate-pulse" />
              <div className="flex justify-between items-end w-full">
                <div className="w-2.5 h-2.5 sm:w-4 sm:h-4 bg-sky-300 rounded-full" />
                <span className="text-[7px] sm:text-[9px] text-sky-600 font-extrabold tracking-widest uppercase">
                  GLACIAL COOL CORE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 5. Engineering Services Component
function ServicesSection({ isRtl, t }: TranslationProps) {
  return (
    <section id="services" className="py-32 px-6 max-w-7xl mx-auto relative z-20">
      <div className="text-center space-y-4 mb-20">
        <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-blue-700">
          <Briefcase className="w-4 h-4" />
          <span>
            {isRtl ? "خدماتنا الهندسية المعتمدة" : "OUR CONTRACTING SECTORS"}
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-blue-950">
          {t("services_title")}
        </h2>
        <p className="text-blue-900/70 text-lg max-w-2xl mx-auto font-semibold leading-relaxed">
          {t("services_subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-white border border-sky-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all group flex gap-6 items-start text-right rtl:text-right ltr:text-left">
          <div className="w-14 h-14 rounded-2xl bg-sky-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <Wind className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-black text-blue-950 group-hover:text-blue-600 transition-colors">
              {t("serv_hvac_title")}
            </h3>
            <p className="text-blue-900/70 text-sm leading-relaxed font-semibold">
              {t("serv_hvac_desc")}
            </p>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-sky-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all group flex gap-6 items-start text-right rtl:text-right ltr:text-left">
          <div className="w-14 h-14 rounded-2xl bg-sky-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <Activity className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-black text-blue-950 group-hover:text-blue-600 transition-colors">
              {t("serv_plumb_title")}
            </h3>
            <p className="text-blue-900/70 text-sm leading-relaxed font-semibold">
              {t("serv_plumb_desc")}
            </p>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-sky-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all group flex gap-6 items-start text-right rtl:text-right ltr:text-left">
          <div className="w-14 h-14 rounded-2xl bg-sky-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <Shield className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-black text-blue-950 group-hover:text-blue-600 transition-colors">
              {t("serv_fire_title")}
            </h3>
            <p className="text-blue-900/70 text-sm leading-relaxed font-semibold">
              {t("serv_fire_desc")}
            </p>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-sky-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all group flex gap-6 items-start text-right rtl:text-right ltr:text-left">
          <div className="w-14 h-14 rounded-2xl bg-sky-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <Cpu className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-black text-blue-950 group-hover:text-blue-600 transition-colors">
              {t("serv_elec_title")}
            </h3>
            <p className="text-blue-900/70 text-sm leading-relaxed font-semibold">
              {t("serv_elec_desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 6. Premium AC Brand Catalog Component
function CatalogSection({ isRtl, t }: TranslationProps) {
  return (
    <section id="catalog" className="py-32 bg-[#f0f8ff] border-y border-sky-100 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-700">
            <Layers className="w-4 h-4" />
            <span>
              {isRtl ? "أنظمة تكييف عالمية معتمدة" : "GLOBAL HVAC BRANDS"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-blue-950">
            {t("catalog_title")}
          </h2>
          <p className="text-blue-900/70 text-lg max-w-2xl mx-auto font-semibold">
            {t("catalog_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="rounded-3xl overflow-hidden bg-white border border-sky-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between text-right rtl:text-right ltr:text-left">
            <div className="p-8 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-sky-50 text-blue-700">
                {isRtl ? "أنظمة متعددة المناطق" : "Multi-Zone VRF"}
              </div>
              <h3 className="text-2xl font-black text-blue-950 group-hover:text-blue-600 transition-colors">
                {t("unit_1_title")}
              </h3>
              <p className="text-blue-900/70 text-sm leading-relaxed font-semibold">
                {t("unit_1_desc")}
              </p>
            </div>
            <div className="px-8 pb-8 pt-4 flex items-center justify-between border-t border-sky-50">
              <span className="text-xs font-bold text-sky-600">
                DAIKIN AUTHORIZED
              </span>
              <a
                href="#contact"
                className="px-5 py-2 text-xs font-extrabold bg-sky-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-full transition-all"
              >
                {isRtl ? "اطلب عرض سعر" : "Inquire"}
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden bg-white border-2 border-blue-500 shadow-md hover:shadow-2xl transition-all group flex flex-col justify-between relative text-right rtl:text-right ltr:text-left">
            <div className="absolute top-4 right-4 z-10 bg-blue-600 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
              {isRtl ? "الأكثر طلباً" : "BEST SELLER"}
            </div>

            <div className="relative w-full h-[200px] overflow-hidden bg-slate-50">
              <Image
                src="/modern_ac_unit.png"
                alt="Modern Luxury Air Conditioner"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-w-720px) 100vw, 33vw"
                loading="eager"
              />
            </div>

            <div className="p-8 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold bg-sky-50 text-blue-700">
                {isRtl ? "تكييف مخفي كونسيلد" : "Concealed Slim Split"}
              </div>
              <h3 className="text-2xl font-black text-blue-950 group-hover:text-blue-600 transition-colors">
                {t("unit_3_title")}
              </h3>
              <p className="text-blue-900/70 text-sm leading-relaxed font-semibold">
                {t("unit_3_desc")}
              </p>
            </div>
            <div className="px-8 pb-8 pt-4 flex items-center justify-between border-t border-sky-50">
              <span className="text-xs font-bold text-sky-600">
                GREE APPROVED
              </span>
              <a
                href="#contact"
                className="px-5 py-2 text-xs font-extrabold bg-blue-600 text-white hover:bg-blue-700 rounded-full transition-all shadow-md"
              >
                {isRtl ? "طلب مقاس ومعاينة" : "Inquire"}
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden bg-white border border-sky-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between text-right rtl:text-right ltr:text-left">
            <div className="p-8 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold bg-orange-50 text-orange-700">
                {isRtl ? "مشاريع وسعات ضخمة" : "High Capacity Chiller"}
              </div>
              <h3 className="text-2xl font-black text-blue-950 group-hover:text-blue-600 transition-colors">
                {t("unit_2_title")}
              </h3>
              <p className="text-blue-900/70 text-sm leading-relaxed font-semibold">
                {t("unit_2_desc")}
              </p>
            </div>
            <div className="px-8 pb-8 pt-4 flex items-center justify-between border-t border-sky-50">
              <span className="text-xs font-bold text-sky-600">
                CARRIER PARTNER
              </span>
              <a
                href="#contact"
                className="px-5 py-2 text-xs font-extrabold bg-sky-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-full transition-all"
              >
                {isRtl ? "اطلب عرض سعر" : "Inquire"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 7. Architectural Sectors Grid Component
function ProjectSectorsSection({ isRtl }: { isRtl: boolean }) {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto relative z-20">
      <div className="text-center space-y-4 mb-20">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-700">
          <Building className="w-4 h-4" />
          <span>{isRtl ? "مشاريعنا منفذة بالمملكة" : "PROJECT SECTORS"}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-blue-950">
          {isRtl ? "أين يتم تطبيق أنظمة ارتكاز؟" : "Engineering Projects Sectors"}
        </h2>
        <p className="text-blue-900/70 text-lg max-w-2xl mx-auto font-semibold">
          {isRtl
            ? "حلول تكييف كهروميكانيكية متخصصة مصممة لكافة المساحات والقطاعات."
            : "We deliver tailored thermodynamic MEP engineering for all architectural sectors."}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-sky-100 text-center space-y-3 shadow-sm hover:border-sky-300 hover:shadow transition-all">
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-blue-600 flex items-center justify-center mx-auto">
            <Building className="w-5 h-5" />
          </div>
          <h4 className="font-extrabold text-sm sm:text-base text-blue-950">
            {isRtl ? "الفلل والقصور السكنية" : "Luxury Villas & Palaces"}
          </h4>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-sky-100 text-center space-y-3 shadow-sm hover:border-sky-300 hover:shadow transition-all">
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-blue-600 flex items-center justify-center mx-auto">
            <Briefcase className="w-5 h-5" />
          </div>
          <h4 className="font-extrabold text-sm sm:text-base text-blue-950">
            {isRtl ? "المجمعات والمولات" : "Commercial Malls"}
          </h4>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-sky-100 text-center space-y-3 shadow-sm hover:border-sky-300 hover:shadow transition-all">
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-blue-600 flex items-center justify-center mx-auto">
            <Layers className="w-5 h-5" />
          </div>
          <h4 className="font-extrabold text-sm sm:text-base text-blue-950">
            {isRtl ? "الفنادق والأبراج السكنية" : "Hotels & Residential Towers"}
          </h4>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-sky-100 text-center space-y-3 shadow-sm hover:border-sky-300 hover:shadow transition-all">
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-blue-600 flex items-center justify-center mx-auto">
            <Cpu className="w-5 h-5" />
          </div>
          <h4 className="font-extrabold text-sm sm:text-base text-blue-950">
            {isRtl ? "المصانع والمستودعات" : "Factories & Warehouses"}
          </h4>
        </div>
      </div>
    </section>
  );
}

// 8. Fact Counter Component
function StatsSection({ t }: { t: (key: string) => string }) {
  return (
    <section className="py-24 bg-blue-900 text-white relative z-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        <div className="space-y-2">
          <p className="text-4xl sm:text-6xl font-black text-sky-300">
            {t("stat_1_num")}
          </p>
          <p className="text-xs sm:text-sm font-extrabold text-sky-100 uppercase tracking-wider">
            {t("stat_1_label")}
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-4xl sm:text-6xl font-black text-sky-300">
            {t("stat_2_num")}
          </p>
          <p className="text-xs sm:text-sm font-extrabold text-sky-100 uppercase tracking-wider">
            {t("stat_2_label")}
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-4xl sm:text-6xl font-black text-sky-300">
            {t("stat_3_num")}
          </p>
          <p className="text-xs sm:text-sm font-extrabold text-sky-100 uppercase tracking-wider">
            {t("stat_3_label")}
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-4xl sm:text-6xl font-black text-sky-300">
            {t("stat_4_num")}
          </p>
          <p className="text-xs sm:text-sm font-extrabold text-sky-100 uppercase tracking-wider">
            {t("stat_4_label")}
          </p>
        </div>
      </div>
    </section>
  );
}

// 9. Highly Interactive WhatsApp Inquiry Card Component
function WhatsAppInquirySection({ isRtl }: { isRtl: boolean }) {
  return (
    <section id="contact" className="py-32 px-6 relative z-20 bg-white">
      <div className="max-w-4xl mx-auto rounded-[32px] border border-sky-100 p-8 sm:p-16 relative overflow-hidden shadow-xl bg-gradient-to-b from-[#f0f9ff]/50 to-white text-center space-y-8">
        <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mx-auto shadow-md">
          <Phone className="w-10 h-10 animate-pulse" />
        </div>
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            <span>
              {isRtl
                ? "تواصل مباشر وفوري عبر الواتساب"
                : "Direct & Instant WhatsApp Support"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950">
            {isRtl
              ? "أرسل مخطط مشروعك لطلب عرض سعر فوري"
              : "Send Your Project Blueprint for an Instant Offer"}
          </h2>
          <p className="text-blue-900/70 text-base sm:text-lg font-semibold max-w-2xl mx-auto leading-relaxed">
            {isRtl
              ? "يسعدنا دراسة مخططات التكييف (مخطط مجاري الهواء، كونسيلد مخفي، مركزي) بصيغة PDF أو أوتوكاد وتقديم عرض سعر مجاني متكامل على الواتساب خلال دقائق."
              : "We are happy to analyze your architectural drafts & ducting layouts (PDF/CAD) and provide a comprehensive cooling proposal directly via WhatsApp in minutes."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <a
            href="https://wa.me/966509815516"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-emerald-50 to-emerald-500 hover:from-emerald-600 hover:to-green-700 hover:text-white text-emerald-700 hover:shadow-lg font-black text-lg border-2 border-emerald-300 transition-all shadow shadow-emerald-500/20 flex items-center justify-center gap-3 hover:scale-[1.02]"
          >
            <Phone className="w-6 h-6 text-emerald-600 hover:text-white" />
            <span>
              {isRtl
                ? "ابدأ المحادثة وأرسل المخطط الآن"
                : "Start Chat & Send Blueprint Now"}
            </span>
          </a>
        </div>

        <p className="text-xs text-blue-900/40 font-bold">
          {isRtl
            ? "متاحون لخدمتك على مدار الساعة للرد على استفسارات المشاريع السكنية والتجارية."
            : "Available 24/7 for residential, commercial, and industrial HVAC consulting."}
        </p>
      </div>
    </section>
  );
}

// 10. Corporate Sitemap Footer Component
function FooterSection({ isRtl, t }: TranslationProps) {
  return (
    <footer className="py-16 border-t border-sky-100 px-6 bg-[#f4faff] relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-blue-900/70 text-right rtl:text-right ltr:text-left">
        <div className="space-y-4">
          <div className="flex items-center gap-3 justify-start">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-sky-200 shadow bg-white flex items-center justify-center p-1">
              <Image
                src="/ertikaz-logo.jpeg"
                alt="Ertikaz Logo"
                width={35}
                height={35}
                className="object-contain"
              />
            </div>
            <span className="text-base font-black text-blue-950">
              {isRtl ? "شركة ارتكاز" : "Ertikaz SA"}
            </span>
          </div>
          <p className="text-xs font-semibold leading-relaxed">
            {isRtl
              ? "الشركة الرائدة بالمملكة في تكييف ومقاولات الأعمال الكهروميكانيكية المتكاملة."
              : "A premier engineering contracting corporation specializing in integrated building designs."}
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-extrabold text-blue-950 uppercase tracking-wider text-xs">
            {isRtl ? "اتصل بنا" : "Contact details"}
          </h4>
          <ul className="space-y-3 font-semibold text-xs">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <a href="mailto:info@ertikazsa.com" className="hover:text-blue-600">
                info@ertikazsa.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <a href="tel:0114998895" className="hover:text-blue-600">
                0114998895
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>
                {isRtl
                  ? "الرياض، المملكة العربية السعودية"
                  : "Riyadh, Saudi Arabia"}
              </span>
            </li>
          </ul>
        </div>

        <div className="space-y-4 font-semibold text-xs">
          <h4 className="font-extrabold text-blue-950 uppercase tracking-wider text-xs">
            {isRtl ? "خريطة الموقع" : "SITEMAP LINKS"}
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                {t("nav_home")}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-600 transition-colors"
              >
                {t("nav_about")}
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-blue-600 transition-colors"
              >
                {t("nav_services")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-600 transition-colors"
              >
                {t("nav_contact")}
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4 font-semibold text-xs">
          <h4 className="font-extrabold text-blue-950 uppercase tracking-wider text-xs">
            {isRtl ? "ماركات التكييف المعتمدة" : "Authorized brands"}
          </h4>
          <div className="grid grid-cols-2 gap-2 text-[10px] text-center uppercase tracking-widest text-sky-600">
            <div className="p-2 border border-sky-100 rounded bg-white font-extrabold">
              DAIKIN
            </div>
            <div className="p-2 border border-sky-100 rounded bg-white font-extrabold">
              CARRIER
            </div>
            <div className="p-2 border border-sky-100 rounded bg-white font-extrabold">
              GREE
            </div>
            <div className="p-2 border border-sky-100 rounded bg-white font-extrabold">
              TRANE
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-sky-100 text-center text-xs text-blue-900/50 font-bold flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>{t("footer_text")}</p>
        <p>
          {isRtl
            ? "معتمد ومصنف لدى الدفاع المدني والجهات المعنية بالمملكة."
            : "Civil Defense and Engineering Council Accredited."}
        </p>
      </div>
    </footer>
  );
}

// Main Page Orchestrator Component
export default function AeroLanding({ locale }: { locale: string }) {
  const t = useTranslations("Index");
  const isRtl = locale === "ar";

  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  // Refs for GSAP
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const line4Ref = useRef<HTMLDivElement>(null);

  const chassisRef = useRef<HTMLDivElement>(null);
  const fanRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const casingRef = useRef<HTMLDivElement>(null);

  const labelCompRef = useRef<HTMLDivElement>(null);
  const labelFilterRef = useRef<HTMLDivElement>(null);
  const labelFanRef = useRef<HTMLDivElement>(null);
  const labelChassisRef = useRef<HTMLDivElement>(null);

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    window.location.pathname = window.location.pathname.replace(
      /^\/(en|ar)/,
      `/${nextLocale}`
    );
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const xOffset = (clientX - window.innerWidth / 2) * 0.02;
    const yOffset = (clientY - window.innerHeight / 2) * 0.02;
    setParallax({ x: xOffset, y: yOffset });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=120%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Explode layers of AC Unit
    timeline.to(
      casingRef.current,
      {
        y: -140,
        z: 90,
        scale: 1.05,
        opacity: 0.4,
        boxShadow: "0 25px 50px -12px rgba(2, 132, 199, 0.25)",
        duration: 2,
      },
      0
    );

    timeline.to(
      filterRef.current,
      {
        x: isRtl ? 150 : -150,
        y: -40,
        scale: 0.95,
        opacity: 0.7,
        duration: 2,
      },
      0
    );

    timeline.to(
      fanRef.current,
      {
        x: isRtl ? -150 : 150,
        y: 40,
        rotation: 720,
        scale: 1.1,
        opacity: 0.8,
        duration: 2,
      },
      0
    );

    timeline.to(
      chassisRef.current,
      {
        scale: 0.85,
        opacity: 0.8,
        duration: 2,
      },
      0
    );

    // Draw connector lines
    timeline.to(
      [line1Ref.current, line2Ref.current, line3Ref.current, line4Ref.current],
      {
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        duration: 1.5,
        stagger: 0.1,
      },
      0.8
    );

    // Fade in floating labels
    timeline.to(
      [
        labelCompRef.current,
        labelFilterRef.current,
        labelFanRef.current,
        labelChassisRef.current,
      ],
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        stagger: 0.1,
      },
      1.2
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [isRtl]);

  useEffect(() => {
    const fan = fanRef.current;
    if (!fan) return;
    const rotationAnim = gsap.to(fan, {
      rotation: "+=360",
      ease: "none",
      duration: 10,
      repeat: -1,
    });
    return () => {
      rotationAnim.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="bg-gradient-to-b from-[#f0f9ff] via-[#ffffff] to-[#e6f4fe] text-blue-950 min-h-screen relative overflow-x-hidden selection:bg-blue-600 selection:text-white"
    >
      {/* Cool breeze micro-elements background */}
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

      <HeaderSection isRtl={isRtl} t={t} toggleLanguage={toggleLanguage} />

      <HeroSection isRtl={isRtl} t={t} parallax={parallax} />

      <AboutSection isRtl={isRtl} t={t} />

      <DisassemblySection
        isRtl={isRtl}
        t={t}
        triggerRef={triggerRef}
        casingRef={casingRef}
        filterRef={filterRef}
        fanRef={fanRef}
        chassisRef={chassisRef}
        line1Ref={line1Ref}
        line2Ref={line2Ref}
        line3Ref={line3Ref}
        line4Ref={line4Ref}
        labelCompRef={labelCompRef}
        labelFilterRef={labelFilterRef}
        labelFanRef={labelFanRef}
        labelChassisRef={labelChassisRef}
      />

      <ServicesSection isRtl={isRtl} t={t} />

      <CatalogSection isRtl={isRtl} t={t} />

      <ProjectSectorsSection isRtl={isRtl} />

      <StatsSection t={t} />

      <WhatsAppInquirySection isRtl={isRtl} />

      {/* Sticky floating green action button */}
      <a
        href="https://wa.me/966509815516"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center shadow-lg z-40 text-white hover:scale-105 transition-all"
      >
        <Phone className="w-6 h-6 animate-bounce" />
      </a>

      <FooterSection isRtl={isRtl} t={t} />
    </div>
  );
}
