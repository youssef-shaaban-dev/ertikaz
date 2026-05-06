"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Layers, Shield, Wind } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SectionProps {
  locale: string;
}

export default function DisassemblySection({ locale }: SectionProps) {
  const t = useTranslations("Index");
  const isRtl = locale === "ar";

  // Refs for self-contained GSAP
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
      ScrollTrigger.getAll().forEach((st) => st.kill());
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
