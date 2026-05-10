"use client";

import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, X, ChevronLeft, ChevronRight, Eye, Calendar, MapPin, ArrowLeft, ArrowRight } from "lucide-react";

interface ProjectImage {
  url: string;
  caption: string;
}

interface Project {
  id: string;
  title: string;
  desc: string;
  location: string;
  date: string;
  mainImage: string;
  images: ProjectImage[];
}


export default function ProjectsSection() {
  const t = useTranslations("Projects");
  const  locale  = useLocale();
  const isRtl = locale === "ar";
  const projectsData: Project[] = [
    {
      id: "hotels",
      title: t("hotels_title"),
      desc: t("hotels_desc"),
      location: t("hotels_loc"),
      date: t("hotels_date"),
      mainImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      images: [
        {
          url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
          caption: t("hotels_cap1")
        },
        {
          url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
          caption: t("hotels_cap2")
        }
      ]
    },
    {
      id: "hospitals",
      title: t("hospitals_title"),
      desc: t("hospitals_desc"),
      location: t("hospitals_loc"),
      date: t("hospitals_date"),
      mainImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      images: [
        {
          url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
          caption: t("hospitals_cap1")
        },
        {
          url: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
          caption: t("hospitals_cap2")
        }
      ]
    },
    {
      id: "banks",
      title: t("banks_title"),
      desc: t("banks_desc"),
      location: t("banks_loc"),
      date: t("banks_date"),
      mainImage: "https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?auto=format&fit=crop&w=800&q=80",
      images: [
        {
          url: "https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?auto=format&fit=crop&w=1200&q=80",
          caption: t("banks_cap1")
        }
      ]
    },
    {
      id: "villas",
      title: t("villas_title"),
      desc: t("villas_desc"),
      location: t("villas_loc"),
      date: t("villas_date"),
      mainImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      images: [
        {
          url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
          caption: t("villas_cap1")
        }
      ]
    },
    {
      id: "restaurants",
      title: t("restaurants_title"),
      desc: t("restaurants_desc"),
      location: t("restaurants_loc"),
      date: t("restaurants_date"),
      mainImage: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
      images: [
        {
          url: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80",
          caption: t("restaurants_cap1")
        }
      ]
    }
  ];



  // Modal Slider State
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Prevent background scroll when modal is active
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
    <section id="projects" className="py-24 sm:py-32 bg-gradient-to-b from-white via-[#f8fafc] to-white border-y border-sky-100/60 relative z-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Title */}
        <div className="text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-blue-700 bg-blue-50 px-4 py-2 rounded-full border border-blue-100/60">
            <Briefcase className="w-4 h-4" />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-blue-950 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-blue-900/60 text-base sm:text-lg max-w-2xl mx-auto font-semibold leading-relaxed">
            {t("desc")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => openSlider(project)}
              className="group cursor-pointer relative rounded-[2.5rem] overflow-hidden bg-white border border-sky-100 shadow-lg hover:shadow-2xl hover:border-blue-200 transition-all duration-500 text-right rtl:text-right ltr:text-left h-[450px] flex flex-col justify-between"
            >
              {/* Main Cover Image */}
              <div className="relative w-full h-[280px] overflow-hidden bg-slate-100">
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-w-768px) 100vw, 33vw"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent" />

                {/* Floating Action Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md text-blue-600 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-500 border border-white">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-4 rtl:right-6 ltr:left-6 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-[10px] sm:text-xs font-black text-blue-950 shadow-md flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>{project.location.split(isRtl ? "،" : ",")[0]}</span>
                </div>
              </div>

              {/* Cover Details */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-blue-950 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-blue-900/60 text-xs sm:text-sm font-semibold line-clamp-2 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2.5 px-10 py-5 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white font-black rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
          >
            <span>{t("btn_all")}</span>
            {isRtl ? (
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            ) : (
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            )}
          </Link>
        </div>
      </div>

      {/* State-of-the-art Glassmorphic Popup Lightbox Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in bg-slate-950/80 backdrop-blur-xl">
          {/* Main Container */}
          <div className="relative w-full max-w-5xl bg-white/10 backdrop-blur-md border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col justify-between max-h-[90vh]">

            {/* Header / Meta Line */}
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/10 relative z-20">
              <div className="text-white text-right rtl:text-right ltr:text-left space-y-1">
                <h3 className="text-xl sm:text-2xl font-black">
                  {activeProject.title}
                </h3>
                <div className="flex items-center gap-4 text-xs font-bold text-white/60">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-sky-400" />
                    <span>{activeProject.location}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-sky-400" />
                    <span>{activeProject.date}</span>
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
                  alt={activeProject.images[currentSlideIndex].caption}
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
                  {activeProject.images[currentSlideIndex].caption}
                </p>
              </div>
            </div>

            {/* Slider Indicators Footer */}
            <div className="p-6 border-t border-white/10 flex items-center justify-center gap-2.5">
              {activeProject.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${currentSlideIndex === idx
                      ? "w-8 bg-sky-400"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                    }`}
                />
              ))}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
