"use client";
import { useTranslations } from "next-intl";


export default function ClientsSection() {
  const t = useTranslations("Clients");

  const clients = [
    {
      id: "elaf",
      name: t("elaf"),
      logo: (
        <svg className="h-10 w-auto text-amber-500" viewBox="0 0 220 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Stylized 'E' gold & dark grey stripes */}
          <path d="M10 5H40L32 17H5L10 5Z" fill="#EAB308" />
          <path d="M13 20H43L37 28H10L13 20Z" fill="#374151" />
          <path d="M16 31H46L38 43H13L16 31Z" fill="#1F2937" />
          {/* Typography */}
          <text x="55" y="24" fontFamily="inherit" fontWeight="900" fontSize="17" fill="#0F172A" letterSpacing="0.5">
            SAUDI ELAF
          </text>
          <text x="55" y="40" fontFamily="inherit" fontWeight="700" fontSize="8" fill="#64748B" letterSpacing="1">
            {t("elaf_sub").toUpperCase()}
          </text>
        </svg>
      )
    },
    {
      id: "injazz",
      name: t("injaz"),
      logo: (
        <svg className="h-11 w-auto text-teal-600" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="5" width="3" height="35" rx="1.5" fill="#0D9488" />
          <rect x="23" y="12" width="3" height="28" rx="1.5" fill="#0D9488" />
          <path d="M15 15H35V18H15V15Z" fill="#0D9488" />
          <path d="M23 25H40V28H23V25Z" fill="#14B8A6" />
          <text x="50" y="22" fontFamily="inherit" fontWeight="900" fontSize="13" fill="#0D9488">
            Lamsat Al Injazz
          </text>
          <text x="50" y="38" fontFamily="inherit" fontWeight="800" fontSize="11" fill="#0F172A" letterSpacing="0.5">
            {t("injaz")}
          </text>
        </svg>
      )
    },
    {
      id: "basateen",
      name: t("basateen"),
      logo: (
        <svg className="h-10 w-auto" viewBox="0 0 180 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="3" width="44" height="44" rx="6" fill="#4B5563" />
          <path d="M27 10L16 35H21L27 20L33 35H38L27 10Z" fill="#FFFFFF" />
          <path d="M22 28H32" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <text x="60" y="22" fontFamily="inherit" fontWeight="900" fontSize="13" fill="#1F2937" letterSpacing="1">
            ALBASATEEN
          </text>
          <text x="60" y="38" fontFamily="inherit" fontWeight="800" fontSize="12" fill="#4B5563" letterSpacing="0.5">
            {t("basateen")}
          </text>
        </svg>
      )
    },
    {
      id: "diriyah",
      name: t("diriyah"),
      logo: (
        <svg className="h-11 w-auto text-[#854d0e]" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="21" stroke="#854D0E" strokeWidth="2" />
          <circle cx="25" cy="25" r="17" stroke="#CA8A04" strokeWidth="1" strokeDasharray="3 2" />
          <path d="M25 12V32" stroke="#854D0E" strokeWidth="2" />
          <path d="M21 20C18 18 16 18 16 22C16 26 21 25 21 25" stroke="#CA8A04" strokeWidth="1.5" />
          <path d="M29 20C32 18 34 18 34 22C34 26 29 25 29 25" stroke="#CA8A04" strokeWidth="1.5" />
          <text x="56" y="24" fontFamily="inherit" fontWeight="900" fontSize="13" fill="#854D0E">
            {t("diriyah")}
          </text>
          <text x="56" y="38" fontFamily="inherit" fontWeight="700" fontSize="9" fill="#CA8A04" letterSpacing="1">
            DIRIYAH GATE
          </text>
        </svg>
      )
    },
    {
      id: "chalhoub",
      name: t("chalhoub"),
      logo: (
        <svg className="h-10 w-auto text-blue-900" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 30C15 20 22 10 32 12C28 22 25 28 35 30C25 32 15 35 10 30Z" fill="#1E3A8A" />
          <path d="M18 22C21 16 26 12 30 14C27 20 25 24 31 25C24 26 19 28 18 22Z" fill="#2563EB" />
          <path d="M8 32C11 26 15 22 20 24C17 28 16 32 21 33C15 34 10 36 8 32Z" fill="#1D4ED8" />
          <text x="45" y="24" fontFamily="inherit" fontWeight="900" fontSize="12" fill="#1E3A8A" letterSpacing="1.5">
            CHALHOUB GROUP
          </text>
          <text x="45" y="40" fontFamily="inherit" fontWeight="800" fontSize="11" fill="#475569" letterSpacing="0.5">
            {t("chalhoub")}
          </text>
        </svg>
      )
    },
    {
      id: "neom",
      name: t("neom"),
      logo: (
        <svg className="h-9 w-auto" viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="18" fill="#111827" />
          <path d="M20 18L30 32M30 18L20 32" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <text x="52" y="32" fontFamily="inherit" fontWeight="900" fontSize="24" fill="#111827" letterSpacing="2">
            NEOM
          </text>
        </svg>
      )
    },
    {
      id: "rafal",
      name: t("rafal"),
      logo: (
        <svg className="h-10 w-auto" viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 5H35V15H15V25H30V35H15V45H10V5Z" fill="#92400E" />
          <text x="45" y="24" fontFamily="inherit" fontWeight="900" fontSize="16" fill="#78350F" letterSpacing="1">
            RAFAL
          </text>
          <text x="45" y="40" fontFamily="inherit" fontWeight="800" fontSize="11" fill="#A16207">
            {t("rafal")}
          </text>
        </svg>
      )
    },
    {
      id: "ceer",
      name: t("ceer"),
      logo: (
        <img
          src="/images/Clients-Logo/CEER_-_English_Logo.png"
          alt="CEER Logo"
          className="h-10 w-auto object-contain max-h-12 filter grayscale contrast-125 brightness-95 hover:grayscale-0 transition-all duration-300"
        />
      )
    },
    {
      id: "arabasco",
      name: t("arabasco"),
      logo: (
        <img
          src="/images/Clients-Logo/images (1).png"
          alt="Arabasco Logo"
          className="h-10 w-auto object-contain max-h-12 filter grayscale contrast-125 brightness-95 hover:grayscale-0 transition-all duration-300"
        />
      )
    },
    {
      id: "gravity",
      name: t("gravity"),
      logo: (
        <img
          src="/images/Clients-Logo/2025-10-03.jpg"
          alt="Gravity Media Logo"
          className="h-10 w-auto object-contain max-h-12 filter grayscale contrast-125 brightness-95 hover:grayscale-0 transition-all duration-300"
        />
      )
    },
    {
      id: "fgc",
      name: t("fgc"),
      logo: (
        <img
          src="/images/Clients-Logo/images.png"
          alt="FGC Logo"
          className="h-10 w-auto object-contain max-h-12 filter grayscale contrast-125 brightness-95 hover:grayscale-0 transition-all duration-300"
        />
      )
    },
    {
      id: "mbl",
      name: t("mbl"),
      logo: (
        <img
          src="/images/Clients-Logo/download.png"
          alt="MBL Logo"
          className="h-10 w-auto object-contain max-h-12 filter grayscale contrast-125 brightness-95 hover:grayscale-0 transition-all duration-300"
        />
      )
    },
    {
      id: "icad",
      name: t("icad"),
      logo: (
        <img
          src="/images/Clients-Logo/download.webp"
          alt="ICAD Logo"
          className="h-10 w-auto object-contain max-h-12 filter grayscale contrast-125 brightness-95 hover:grayscale-0 transition-all duration-300"
        />
      )
    },
    {
      id: "iwatt",
      name: t("iwatt"),
      logo: (
        <img
          src="/images/Clients-Logo/IWATT-1.webp"
          alt="IWATT Logo"
          className="h-10 w-auto object-contain max-h-12 filter grayscale contrast-125 brightness-95 hover:grayscale-0 transition-all duration-300"
        />
      )
    }
  ];

  const marqueeClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-10 bg-white border-b border-sky-50 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h3 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight relative inline-block">
          {t("header_title")}
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#54c4f3] rounded-full" />
        </h3>
      </div>
      <div className="relative w-full overflow-hidden flex items-center" dir="ltr">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="flex w-max gap-12 sm:gap-16 animate-marquee py-4">
          {marqueeClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex items-center justify-center bg-sky-50/20 hover:bg-sky-50/50 border border-sky-100/40 hover:border-sky-100/80 rounded-2xl px-8 py-5 shadow-[0_4px_20px_rgba(2,132,199,0.02)] hover:shadow-[0_8px_30px_rgba(2,132,199,0.05)] transition-all duration-300 transform hover:scale-[1.03] select-none"
            >
              {client.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
