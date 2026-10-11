"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Info } from "lucide-react";

interface SectionProps {
  locale: string;
}

export default function FooterSection({ locale }: SectionProps) {
  const t = useTranslations("Index");
  const isRtl = locale === "ar";
  const [showPartnership, setShowPartnership] = useState(false);

  return (
    <footer id="contact" className="py-16 border-t border-sky-100 px-6 bg-[#f4faff] relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-blue-900/70 text-right rtl:text-right ltr:text-left">
        <div className="space-y-4">
          <div className="flex items-center justify-start">
            <div className="relative w-36 h-14 rounded-xl overflow-hidden border border-sky-200 shadow bg-white flex items-center justify-center p-1">
              <Image
                src="/logo.webp"
                alt="Ertikaz Logo"
                fill
                className="object-contain"
                sizes="144px"
              />
            </div>
          </div>
          <p className="text-xs font-semibold leading-relaxed">
            {isRtl
              ? "الشركة الرائدة بالمملكة في الأعمال الكهروميكانيكية المتكاملة."
              : "A premier corporation in the Kingdom specializing in integrated electromechanical works."}
          </p>
          <div className="flex items-center gap-3 pt-2">
            {/* X */}
            <a href="https://x.com/ertikazsaudi" target="_blank" className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm" aria-label="Twitter">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* instagram */}
            <a href="https://www.instagram.com/ertikaz.contracting/" target="_blank" className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm" aria-label="Instagram">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            {/* linkdin */}
            <a href="https://www.linkedin.com/company/ertikaz-contracting/" target="_blank" className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm" aria-label="LinkedIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/ertikaz.contracting/" target="_blank" className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

          </div>
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
              <a href="tel:+966596940453" className="hover:text-blue-600" dir="ltr">
                +966 59 694 0453
              </a>
            </li>
            <a href="https://wa.me/966596940453" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] flex items-center gap-2" >
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 0C5.385 0 0 5.388 0 12.037c0 2.128.555 4.205 1.611 6.035L.175 23.361l5.443-1.428A11.954 11.954 0 0 0 12.031 24c6.643 0 12.038-5.389 12.038-12.038 0-6.649-5.395-12.038-12.038-12.038zM12.031 22.02c-1.802 0-3.567-.482-5.11-1.397l-.367-.218-3.797.996.996-3.702-.24-.382a9.98 9.98 0 0 1-1.528-5.317c0-5.558 4.52-10.079 10.083-10.079 5.559 0 10.079 4.521 10.079 10.079 0 5.558-4.52 10.079-10.079 10.079zm5.541-7.568c-.304-.152-1.796-.886-2.074-.988-.278-.102-.482-.152-.684.152-.204.304-.786.988-.962 1.19-.178.204-.356.228-.66.076-.304-.152-1.282-.473-2.443-1.512-.906-.81-1.518-1.81-1.696-2.114-.178-.304-.02-.469.132-.62.136-.136.304-.356.456-.532.152-.178.204-.304.304-.506.102-.204.052-.382-.024-.532-.078-.152-.684-1.648-.938-2.256-.248-.592-.498-.512-.684-.522-.178-.01-.382-.01-.586-.01-.204 0-.532.076-.81.382-.278.304-1.064 1.04-1.064 2.534s1.09 2.94 1.242 3.142c.152.204 2.14 3.266 5.184 4.58.724.312 1.29.5 1.732.64.726.232 1.386.2 1.906.12.584-.09 1.796-.734 2.05-1.444.254-.71.254-1.318.178-1.444-.076-.126-.28-.204-.584-.356z" />
                </svg>

                WhatsApp

              </li>
            </a>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <a
                href="https://www.google.com/maps/search/El%20Ertikaz%20International%20Contracting%20Company/@24.72891225,46.81818811,17z?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline underline-offset-4 decoration-blue-300 hover:decoration-blue-600 transition-colors"
              >
                {isRtl
                  ? "14231، شارع سعد بن أبي وقاص، حي النسيم، الرياض"
                  : "14231, Saad ibn Abi Waqqas Street, Al Nasim district, Riyadh"}
              </a>
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

        <div className="space-y-4">
          <h4 className="font-extrabold text-blue-950 uppercase tracking-wider text-xs">
            {t("distributor_title")}
          </h4>
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="h-14 rounded-xl border border-sky-100 bg-white flex items-center justify-center p-2 shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-300 group">
              <Image
                src="/images/distributors/carrier.svg"
                alt="Carrier Logo"
                width={80}
                height={26}
                style={{ width: "auto", height: "auto" }}
                className="max-h-8 object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
            <div className="h-14 rounded-xl border border-sky-100 bg-white flex items-center justify-center p-2 shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-300 group">
              <Image
                src="/images/distributors/daikin.svg"
                alt="Daikin Logo"
                width={80}
                height={26}
                style={{ width: "auto", height: "auto" }}
                className="max-h-7 object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
            <div className="h-14 rounded-xl border border-sky-100 bg-white flex items-center justify-center p-2 shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-300 group">
              <Image
                src="/images/distributors/gree.svg"
                alt="Gree Logo"
                width={80}
                height={26}
                style={{ width: "auto", height: "auto" }}
                className="max-h-7 object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
            <div className="h-14 rounded-xl border border-sky-100 bg-white flex items-center justify-center p-2 shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-300 group">
              <Image
                src="/images/distributors/mitsubishi.svg"
                alt="Mitsubishi Logo"
                width={80}
                height={26}
                style={{ width: "auto", height: "auto" }}
                className="max-h-8 object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-sky-200/80 flex flex-col items-center justify-center text-center space-y-3 font-body">
        {/* Accreditation */}
        <p className="font-bold text-blue-950 text-xs sm:text-sm tracking-wide">
          {isRtl
            ? "معتمد ومصنف لدى الدفاع المدني والجهات المعنية بالمملكة."
            : "Civil Defense and Engineering Council Accredited."}
        </p>

        {/* Copyright */}
        <p className="max-w-4xl text-xs sm:text-[13px] font-semibold text-blue-950/85 leading-relaxed">
          {isRtl
            ? "© 2026 ارتكاز - جميع الحقوق محفوظة. يُحظر تماماً الاستخدام غير المصرح به، بما في ذلك تدريب نماذج الذكاء الاصطناعي، أو إعادة الإنتاج، أو الاستغلال التجاري."
            : "© 2026 Ertikaz - All content is copyrighted. Unauthorized use, including AI training, reproduction, or commercial exploitation, is strictly prohibited."}
        </p>

        {/* Crafted in Egypt & Developed by MRCO */}
        <p className="text-xs sm:text-sm font-semibold text-blue-950">
          {isRtl ? "صُنع بكل حب في مصر ❤️ " : "Proudly Crafted in Egypt with Love ❤️ "}
          <Link href="https://mrco-egypt.com" target="_blank" className="text-blue-600 hover:text-blue-800 transition-colors underline underline-offset-4 font-bold">
            {isRtl ? "تم تطوير الموقع من خلال شركة ميركو ايجيبت" : "Website developed by MRCO-Egypt"}
          </Link>
        </p>

        {/* MRCO-Egypt Partnership Tooltip */}
        <div className="pt-2">
          <div
            className="inline-flex flex-wrap items-center justify-center gap-2 group relative cursor-help text-center select-none"
            onClick={() => setShowPartnership(!showPartnership)}
          >
            <p dir="ltr" className="text-xs sm:text-[13px] text-slate-700 group-hover:text-blue-950 transition-colors leading-relaxed max-w-[320px] sm:max-w-none border-b border-dashed border-slate-400 group-hover:border-blue-600 pb-0.5 font-medium">
              <span className="text-blue-950 font-bold">Ertikaz | </span>
              <a href="https://mrco-egypt.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800 transition-colors font-bold">Growth & Marketing by MRCO-Egypt</a>
              <span className="text-slate-600 group-hover:text-slate-900 transition-colors font-medium"> a strategy-driven digital marketing and brand communication agency in Egypt</span>
            </p>

            <Info className={`w-4 h-4 transition-colors flex-shrink-0 inline-block ${showPartnership ? 'text-blue-700' : 'text-blue-600 group-hover:text-blue-800'}`} />

            <div
              className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-[90vw] sm:w-[460px] p-4 sm:p-5 bg-[#0B1528] rounded-xl border border-amber-400/40 shadow-2xl transition-all duration-300 z-50 text-left pointer-events-none ${showPartnership
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible translate-y-2 lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0'
                }`}
              dir="ltr"
            >
              <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                <span className="text-amber-400 font-bold text-sm tracking-wide">Growth & Marketing</span>
              </div>
              <p className="text-xs sm:text-[13px] font-normal text-slate-100 leading-relaxed mb-3">
                Ertikaz - Growth & Marketing by MRCO-Egypt , a strategy-driven digital marketing and brand communication agency in Egypt, for brand strategy, digital marketing, and web development.
              </p>
              <p className="text-xs sm:text-[13px] font-normal text-slate-100 leading-relaxed">
                MRCO-Egypt specializes in brand strategy, brand identity, web development, SEO, Generative Engine Optimization (GEO), and AI Optimization (AIO), helping businesses build distinctive brands and achieve measurable digital growth.
              </p>
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-[7px] border-transparent border-t-amber-400/40"></div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-[#0B1528] -mt-[1px]"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
