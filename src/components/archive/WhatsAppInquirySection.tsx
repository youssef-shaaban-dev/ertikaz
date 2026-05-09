import { Phone } from "lucide-react";

interface SectionProps {
  locale: string;
}

export default function WhatsAppInquirySection({ locale }: SectionProps) {
  const isRtl = locale === "ar";

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
