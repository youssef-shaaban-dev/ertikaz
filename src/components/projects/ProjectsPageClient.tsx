"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, X, ChevronLeft, ChevronRight, Eye, Calendar, MapPin, Filter, Home, ArrowRight, ArrowLeft } from "lucide-react";

interface ProjectImage {
  url: string;
  captionAr: string;
  captionEn: string;
}

interface Project {
  id: string;
  category: "banks" | "hospitals" | "hotels" | "residential" | "restaurants";
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  locationAr: string;
  locationEn: string;
  dateAr: string;
  dateEn: string;
  mainImage: string;
  images: ProjectImage[];
}

const projectsList: Project[] = [
  {
    id: "ncb-bank",
    category: "banks",
    titleAr: "البنك الأهلي السعودي - الفرع الرئيسي",
    titleEn: "SNB Bank - Main Regional Branch",
    descAr: "تنفيذ وتمديد أنظمة التكييف عالي الاستاتيكية وربطها بأنظمة التحكم الذكي لوحة تحكم واحدة BMS.",
    descEn: "Installation of high-static pressure ducted AC systems integrated with centralized smart BMS controllers.",
    locationAr: "الرياض، المملكة العربية السعودية",
    locationEn: "Riyadh, Saudi Arabia",
    dateAr: "٢٠٢٥ م",
    dateEn: "2025",
    mainImage: "https://images.unsplash.com/photo-1541354329998-f437a2f54d7f?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541354329998-f437a2f54d7f?auto=format&fit=crop&w=1200&q=80",
        captionAr: "تصميم واجهة البنك الذكية وفتحات دكت الهواء المركزية",
        captionEn: "Smart bank facade design integrated with central air duct vents"
      },
      {
        url: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=1200&q=80",
        captionAr: "لوحات كهربائية للتحكم في أنظمة التكييف والإنارة المنخفضة",
        captionEn: "Advanced power panels controlling central climate & low-current grids"
      }
    ]
  },
  {
    id: "alrajhi-bank",
    category: "banks",
    titleAr: "مصرف الراجحي - مبنى الإدارة الإقليمية",
    titleEn: "Al Rajhi Bank - Regional Office Tower",
    descAr: "توريد وتركيب أنظمة تكييف VRF دايكن الموفرة للطاقة لجميع طوابق البرج الإداري مع شبكة مكافحة الحريق.",
    descEn: "Supply and installation of eco-friendly Daikin VRF units and fire suppression loops across the office tower.",
    locationAr: "جدة، المملكة العربية السعودية",
    locationEn: "Jeddah, Saudi Arabia",
    dateAr: "٢٠٢٦ م",
    dateEn: "2026",
    mainImage: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=1200&q=80",
        captionAr: "برج الإدارة الإقليمية المتكامل بأنظمة التكييف الحديثة والموفرة",
        captionEn: "Regional office tower integrated with advanced VRF technology"
      }
    ]
  },
  {
    id: "kfsh-hospital",
    category: "hospitals",
    titleAr: "مستشفى الملك فيصل التخصصي - مبنى العيادات",
    titleEn: "King Faisal Specialist Hospital - Clinics Building",
    descAr: "هندسة وتركيب شبكات الهواء المعقمة وفلاتر هيبا (HEPA Filters) المتوافقة مع المعايير الطبية العالمية.",
    descEn: "Engineering and installation of sterile air networks and certified medical HEPA filtration loops.",
    locationAr: "الرياض، المملكة العربية السعودية",
    locationEn: "Riyadh, Saudi Arabia",
    dateAr: "٢٠٢٥ م",
    dateEn: "2025",
    mainImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
        captionAr: "ممرات العيادات المجهزة بتكييف مركزي معقم بالكامل وضد الميكروبات",
        captionEn: "Clinics corridors equipped with fully sterile, antimicrobial central AC"
      }
    ]
  },
  {
    id: "dallah-hospital",
    category: "hospitals",
    titleAr: "مستشفى دلة الصحي الجديد",
    titleEn: "New Dallah Health Hospital",
    descAr: "توريد وتركيب مضخات الحريق المعتمدة وتنفيذ كامل الأعمال الكهروميكانيكية (MEP) وشبكة التمديدات الصحية.",
    descEn: "Supply and installation of certified fire pumps and comprehensive MEP & plumbing systems.",
    locationAr: "الدمام، المملكة العربية السعودية",
    locationEn: "Dammam, Saudi Arabia",
    dateAr: "٢٠٢٦ م",
    dateEn: "2026",
    mainImage: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
        captionAr: "بنية كهروميكانيكية متطورة ومطابقة بالكامل لاشتراطات الدفاع المدني والصحة",
        captionEn: "State-of-the-art MEP infrastructure fully compliant with civil defense codes"
      }
    ]
  },
  {
    id: "sheraton-hotel",
    category: "hotels",
    titleAr: "فندق شيراتون الرياض - الأجنحة الفاخرة",
    titleEn: "Sheraton Riyadh - Luxury Suites",
    descAr: "تنفيذ شبكة تكييف مركزي متكاملة صامتة مع مخارج هواء طولية مخفية لضمان أعلى مستويات الهدوء والرفاهية.",
    descEn: "Implementation of a centralized, whisper-quiet AC system with custom linear slot diffusers in guest suites.",
    locationAr: "الرياض، المملكة العربية السعودية",
    locationEn: "Riyadh, Saudi Arabia",
    dateAr: "٢٠٢٥ م",
    dateEn: "2025",
    mainImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        captionAr: "تكييف صامت مع مخارج هواء مدمجة بالديكورات الجبسية للأجنحة",
        captionEn: "Silent climate control built into premium room design ceiling elements"
      }
    ]
  },
  {
    id: "hilton-hotel",
    category: "hotels",
    titleAr: "فندق هيلتون جدة - البهو المركزي",
    titleEn: "Hilton Jeddah - Central Grand Lobby",
    descAr: "تركيب وحدات مناولة الهواء العملاقة (AHUs) وتشغيل أنظمة التهوية وسحب الدخان والدفاع المدني في الممرات والبهو المفتوح.",
    descEn: "Installation of massive Air Handling Units (AHUs), smoke extraction loops, and civil defense grids for the grand lobby.",
    locationAr: "جدة، المملكة العربية السعودية",
    locationEn: "Jeddah, Saudi Arabia",
    dateAr: "٢٠٢٦ م",
    dateEn: "2026",
    mainImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        captionAr: "بهو الفندق الكبير المجهز بأقوى وحدات التبريد والتهوية المركزية المتواصلة",
        captionEn: "Grand open lobby equipped with heavy-duty air conditioning and extraction"
      }
    ]
  },
  {
    id: "yasmine-villa",
    category: "residential",
    titleAr: "فيلا حي النخيل السكنية الفاخرة",
    titleEn: "Al-Nakheel Luxury Villa",
    descAr: "تأسيس شبكة تكييف كونسيلد مخفي ذكي بالكامل وتمديد شبكات التغذية والمياه والصرف المعزولة بأحدث المواد التركيبية.",
    descEn: "Complete installation of smart concealed AC and fully insulated premium water supply networks.",
    locationAr: "الرياض، المملكة العربية السعودية",
    locationEn: "Riyadh, Saudi Arabia",
    dateAr: "٢٠٢٦ م",
    dateEn: "2026",
    mainImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
        captionAr: "الفيلا من الخارج مدمجة بأحدث فتحات الهواء وأنظمة التهوية والمصارف الذكية",
        captionEn: "Luxury villa exterior integrated with high-efficiency architectural air flow"
      }
    ]
  },
  {
    id: "yasmin-tower",
    category: "residential",
    titleAr: "برج الياسمين السكني الاستثماري",
    titleEn: "Al-Yasmin Residential Tower",
    descAr: "توزيع وتأمين التمديدات الكهروميكانيكية وتوريد وتركيب أجهزة تكييف جري (Gree) لعدد ٨٠ شقة سكنية متكاملة.",
    descEn: "Distribution of MEP services and installation of Gree AC units across 80 luxurious residential apartments.",
    locationAr: "الرياض، المملكة العربية السعودية",
    locationEn: "Riyadh, Saudi Arabia",
    dateAr: "٢٠٢٥ م",
    dateEn: "2025",
    mainImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
        captionAr: "برج الياسمين السكني المتكامل بشبكات التبريد والتمديدات الكهروميكانيكية الحديثة",
        captionEn: "Al-Yasmin tower fitted with robust central MEP and multi-split cooling grids"
      }
    ]
  },
  {
    id: "romansiah-kitchen",
    category: "restaurants",
    titleAr: "مطابخ ومطاعم الرومانسية المركزية",
    titleEn: "Al-Romansiah Central Kitchens",
    descAr: "تصميم وتنفيذ أنظمة تهوية وسحب أدخنة المطابخ وصناعة الدكت آلياً بأعلى كفاءة لضمان تدوير الهواء ومقاومة الحريق.",
    descEn: "Design and implementation of massive kitchen ventilation hoods and automated air recycling ducts.",
    locationAr: "الرياض، المملكة العربية السعودية",
    locationEn: "Riyadh, Saudi Arabia",
    dateAr: "٢٠٢٥ M",
    dateEn: "2025",
    mainImage: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80",
        captionAr: "أنظمة سحب الدخان الثقيلة والصامتة للمطابخ المركزية الضخمة",
        captionEn: "Heavy-duty smoke extraction and air circulation for major kitchens"
      }
    ]
  },
  {
    id: "lavender-restaurant",
    category: "restaurants",
    titleAr: "مطعم ومقهى لافندر الفاخر",
    titleEn: "Lavender Fine Dining Restaurant",
    descAr: "تنفيذ تكييف مخفي كونسيلد مريح وغير مباشر في الصالات المغلقة لضمان توزيع متكافئ للبرودة وهدوء تام للزوار.",
    descEn: "Concealed AC ducted installations delivering cozy, draft-free cooling and maximum peace for visitors.",
    locationAr: "جدة، المملكة العربية السعودية",
    locationEn: "Jeddah, Saudi Arabia",
    dateAr: "٢٠٢٦ م",
    dateEn: "2026",
    mainImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
        captionAr: "صالة الطعام الأنيقة والمزودة بأنظمة توزيع وفتحات هواء تتناسق تماماً مع الديكور الخشبي والمعدني",
        captionEn: "Elegant dining room fitted with climate diffusers blending into modern wood design"
      }
    ]
  }
];

type CategoryFilter = "all" | "banks" | "hospitals" | "hotels" | "residential" | "restaurants";

interface CategoryTab {
  id: CategoryFilter;
  labelAr: string;
  labelEn: string;
}

const categoriesTabs: CategoryTab[] = [
  { id: "all", labelAr: "الكل", labelEn: "All" },
  { id: "banks", labelAr: "البنوك", labelEn: "Banks" },
  { id: "hospitals", labelAr: "المستشفيات", labelEn: "Hospitals" },
  { id: "hotels", labelAr: "الفنادق", labelEn: "Hotels" },
  { id: "residential", labelAr: "المباني السكنية", labelEn: "Residential" },
  { id: "restaurants", labelAr: "المطاعم", labelEn: "Restaurants" }
];

export default function ProjectsPageClient({ locale }: { locale: string }) {
  const isRtl = locale === "ar";
  
  // Filter and Modal state
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsList);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Filter projects dynamically with smooth state updates
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProjects(projectsList);
    } else {
      setFilteredProjects(projectsList.filter((p) => p.category === selectedCategory));
    }
  }, [selectedCategory]);

  // Lock body scroll on active modal
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeProject]);

  const openSlider = (project: Project) => {
    setActiveProject(project);
    setCurrentSlideIndex(0);
  };

  const closeSlider = () => {
    setActiveProject(null);
  };

  const nextSlide = () => {
    if (!activeProject) return;
    setCurrentSlideIndex((prev) => (prev + 1) % activeProject.images.length);
  };

  const prevSlide = () => {
    if (!activeProject) return;
    setCurrentSlideIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-blue-950 selection:bg-blue-600 selection:text-white">
      
      {/* Majestic Sub-Page Hero Section */}
      <section className="relative h-[380px] sm:h-[450px] flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Background Image with Engineering Blueprint Blueprint overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
            alt="Engineering Blueprint"
            fill
            priority
            className="object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 via-blue-950/90 to-slate-50" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-5 mt-10">
          {/* Breadcrumb Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-white text-xs sm:text-sm font-bold">
            <Link href={`/${locale}`} className="hover:text-sky-400 transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>{isRtl ? "الرئيسية" : "Home"}</span>
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-sky-300">{isRtl ? "معرض مشاريعنا" : "Projects Gallery"}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            {isRtl ? "سجل منجزات ارتكاز" : "Our Projects"}
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            {isRtl
              ? "نستعرض بكل فخر سلة من كبرى المشاريع الكهروميكانيكية والتكييف التي نفذتها ارتكاز عبر ربوع المملكة."
              : "Discover our proud record of major electromechanical, HVAC, and civil defense contracting across Saudi Arabia."}
          </p>
        </div>
      </section>

      {/* Filter and Grid Content */}
      <section className="py-16 max-w-7xl mx-auto px-6 relative z-10 -mt-16">
        <div className="bg-white rounded-[3rem] shadow-xl border border-sky-100/60 p-8 sm:p-12 space-y-12">
          
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-slate-100 pb-8">
            <div className="flex items-center gap-2 text-blue-950">
              <Filter className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-black">{isRtl ? "تصفية وتحديد المشاريع" : "Filter Projects"}</h3>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {categoriesTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all duration-300 ${
                    selectedCategory === tab.id
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                      : "bg-slate-50 hover:bg-slate-100 text-blue-950 border border-slate-100"
                  }`}
                >
                  {isRtl ? tab.labelAr : tab.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Filtered Projects */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => openSlider(project)}
                  className="group cursor-pointer relative rounded-[2.5rem] overflow-hidden bg-white border border-slate-100 shadow-md hover:shadow-2xl hover:border-blue-200 transition-all duration-500 flex flex-col justify-between h-[450px]"
                >
                  {/* Image wrapper */}
                  <div className="relative w-full h-[280px] overflow-hidden bg-slate-50">
                    <Image
                      src={project.mainImage}
                      alt={isRtl ? project.titleAr : project.titleEn}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-w-768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent" />

                    {/* Overlay Action */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-14 h-14 rounded-full bg-white/95 backdrop-blur-md text-blue-600 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-500 border border-white">
                        <Eye className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Location Badge */}
                    <div className="absolute bottom-4 rtl:right-6 ltr:left-6 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-[10px] sm:text-xs font-black text-blue-950 shadow-md flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" />
                      <span>{isRtl ? project.locationAr.split("،")[0] : project.locationEn.split(",")[0]}</span>
                    </div>
                  </div>

                  {/* Descriptions */}
                  <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between text-right rtl:text-right ltr:text-left">
                    <div className="space-y-2">
                      <h4 className="text-lg font-black text-blue-950 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                        {isRtl ? project.titleAr : project.titleEn}
                      </h4>
                      <p className="text-blue-900/60 text-xs sm:text-sm font-semibold line-clamp-2 leading-relaxed">
                        {isRtl ? project.descAr : project.descEn}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center text-slate-400">
              <Briefcase className="w-16 h-16 mx-auto mb-4 opacity-40 text-blue-600" />
              <p className="text-lg font-bold">{isRtl ? "لا توجد مشاريع مضافة في هذا التصنيف حالياً." : "No projects in this category currently."}</p>
            </div>
          )}
        </div>
      </section>

      {/* State-of-the-art Glassmorphic Popup Lightbox Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in bg-slate-950/80 backdrop-blur-xl">
          {/* Main Container */}
          <div className="relative w-full max-w-5xl bg-white/10 backdrop-blur-md border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col justify-between max-h-[90vh]">
            
            {/* Header / Meta Line */}
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/10 relative z-20">
              <div className="text-white text-right rtl:text-right ltr:text-left space-y-1">
                <h3 className="text-xl sm:text-2xl font-black">
                  {isRtl ? activeProject.titleAr : activeProject.titleEn}
                </h3>
                <div className="flex items-center gap-4 text-xs font-bold text-white/60">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-sky-400" />
                    <span>{isRtl ? activeProject.locationAr : activeProject.locationEn}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-sky-400" />
                    <span>{isRtl ? activeProject.dateAr : activeProject.dateEn}</span>
                  </span>
                </div>
              </div>

              {/* Rotating Hover Close Button */}
              <button
                onClick={closeSlider}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-blue-950 flex items-center justify-center transition-all duration-300 border border-white/20 transform hover:rotate-90 shadow-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Slider / Image Viewer */}
            <div className="relative flex-grow flex items-center justify-center min-h-[300px] sm:min-h-[450px] overflow-hidden group/slider">
              {/* Active Image */}
              <div className="relative w-full h-full aspect-video max-h-[50vh] overflow-hidden">
                <Image
                  src={activeProject.images[currentSlideIndex].url}
                  alt={isRtl ? activeProject.images[currentSlideIndex].captionAr : activeProject.images[currentSlideIndex].captionEn}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Navigation Left Arrow */}
              <button
                onClick={prevSlide}
                className="absolute left-4 w-12 h-12 rounded-full bg-white/15 hover:bg-white text-white hover:text-blue-950 flex items-center justify-center transition-all duration-300 border border-white/20 shadow-md transform ltr:group-hover/slider:translate-x-1 rtl:group-hover/slider:-translate-x-1"
              >
                {isRtl ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
              </button>

              {/* Navigation Right Arrow */}
              <button
                onClick={nextSlide}
                className="absolute right-4 w-12 h-12 rounded-full bg-white/15 hover:bg-white text-white hover:text-blue-950 flex items-center justify-center transition-all duration-300 border border-white/20 shadow-md transform ltr:group-hover/slider:-translate-x-1 rtl:group-hover/slider:translate-x-1"
              >
                {isRtl ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
              </button>

              {/* Floating Caption Overlay */}
              <div className="absolute bottom-4 left-6 right-6 p-4 rounded-2xl bg-slate-950/70 backdrop-blur-md border border-white/10 text-center text-white max-w-xl mx-auto">
                <p className="text-xs sm:text-sm font-black tracking-wide leading-relaxed">
                  {isRtl
                    ? activeProject.images[currentSlideIndex].captionAr
                    : activeProject.images[currentSlideIndex].captionEn}
                </p>
              </div>
            </div>

            {/* Slider Indicators Footer */}
            <div className="p-6 border-t border-white/10 flex items-center justify-center gap-2.5">
              {activeProject.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentSlideIndex === idx 
                      ? "w-8 bg-sky-400" 
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
