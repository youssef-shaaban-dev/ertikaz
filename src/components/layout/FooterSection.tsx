import Image from "next/image";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin } from "lucide-react";

interface SectionProps {
  locale: string;
}

export default function FooterSection({ locale }: SectionProps) {
  const t = useTranslations("Index");
  const isRtl = locale === "ar";

  return (
    <footer id="contact" className="py-16 border-t border-sky-100 px-6 bg-[#f4faff] relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-blue-900/70 text-right rtl:text-right ltr:text-left">
        <div className="space-y-4">
          <div className="flex items-center justify-start">
            <div className="relative w-36 h-14 rounded-xl overflow-hidden border border-sky-200 shadow bg-white flex items-center justify-center p-1">
              <Image
                src="/ertikaz-logo.jpeg"
                alt="Ertikaz Logo"
                fill
                className="object-contain"
                sizes="144px"
              />
            </div>
          </div>
          <p className="text-xs font-semibold leading-relaxed">
            {isRtl
              ? "الشركة الرائدة بالمملكة في تكييف ومقاولات الأعمال الكهروميكانيكية المتكاملة."
              : "A premier engineering contracting corporation specializing in integrated building designs."}
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="#" className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm" aria-label="Twitter">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm" aria-label="Instagram">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm" aria-label="LinkedIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm" aria-label="Facebook">
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
              <a href="tel:+966114998895" className="hover:text-blue-600">
                +966114998895
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
