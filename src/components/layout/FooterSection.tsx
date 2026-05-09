import Image from "next/image";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Layers, Cpu, Briefcase } from "lucide-react";

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
