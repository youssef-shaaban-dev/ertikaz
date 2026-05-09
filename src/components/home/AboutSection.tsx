import Image from "next/image";

interface SectionProps {
  locale: string;
}

export default function AboutSection({ locale }: SectionProps) {
  const isRtl = locale === "ar";

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
