export interface ProjectImage {
  url: string;
  captionAr: string;
  captionEn: string;
}

export interface Project {
  id: string;
  category: "residential-commercial" | "industrial" | "airports-infrastructure" | "healthcare" | "media-broadcasting" | "warehouses-logistics";
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

export const projectsList: Project[] = [
  // Residential & Commercial Projects
  {
    id: "residential-villa-alshifa",
    category: "residential-commercial",
    titleAr: "مشروع فيلا سكنية – حي الشفاء",
    titleEn: "Residential Villa – Al Shifa District",
    descAr: "توريد وتركيب أنظمة التكييف لفيلا سكنية.",
    descEn: "Supply & Installation of HVAC Systems for Residential Villa.",
    locationAr: "حي الشفاء، الرياض",
    locationEn: "Al Shifa District, Riyadh",
    dateAr: "٢٠٢٥ م",
    dateEn: "2025",
    mainImage: "/images/projects/alshifa-main.jpg",
    images: [
      {
        url: "/images/projects/alshifa-main.jpg",
        captionAr: "توريد وتركيب أنظمة التكييف لفيلا سكنية",
        captionEn: "Supply & Installation of HVAC Systems for Residential Villa"
      },
      {
        url: "/images/projects/alshifa-extra.jpg",
        captionAr: "أعمال تنفيذ متكاملة لشبكات تكييف الهواء",
        captionEn: "Integrated execution of air conditioning networks"
      }
    ]
  },
  {
    id: "residential-building-kingfahad",
    category: "residential-commercial",
    titleAr: "عمارة سكنية – حي الملك فهد",
    titleEn: "Residential Building – Al King Fahad District",
    descAr: "توريد وتركيب أنظمة التكييف المخفي لعمارة سكنية.",
    descEn: "Supply & Installation of Concealed HVAC Systems for Residential Building.",
    locationAr: "حي الملك فهد، الرياض",
    locationEn: "Al King Fahad District, Riyadh",
    dateAr: "٢٠٢٥ م",
    dateEn: "2025",
    mainImage: "/images/projects/kingfahad.jpg",
    images: [
      {
        url: "/images/projects/balconia-2.jpeg",
        captionAr: "توريد وتركيب أنظمة التكييف المخفي لعمارة سكنية",
        captionEn: "Supply & Installation of Concealed HVAC Systems for Residential Building"
      },
      {
        url: "/images/projects/balconia-1.jpeg",
        captionAr: "أعمال تنفيذ متكاملة لشبكات تكييف الهواء",
        captionEn: "Integrated execution of air conditioning networks"
      }
    ]
  },
  {
    id: "residential-villa-diriyah",
    category: "residential-commercial",
    titleAr: "فيلا سكنية – الدرعية",
    titleEn: "Residential Villa – Diriyah",
    descAr: "توريد وتركيب نظام تكييف VRF لفيلا سكنية.",
    descEn: "Supply & Installation of VRF Air Conditioning System for Residential Villa.",
    locationAr: "الدرعية، الرياض",
    locationEn: "Diriyah, Riyadh",
    dateAr: "٢٠٢٥ م",
    dateEn: "2025",
    mainImage: "/images/Projects Photos/Dreya Villa/screen-6.png",
    images: [
      {
       url: "/images/Projects Photos/Dreya Villa/screen-8.png",
        captionAr: "توريد وتركيب نظام تكييف VRF لفيلا سكنية",
        captionEn: "Supply & Installation of VRF Air Conditioning System for Residential Villa"
      },
      {
        url: "/images/projects/diriyah-1.jpeg",
        captionAr: "أعمال التكييف والتمديدات الداخلية للفيلا",
        captionEn: "HVAC and internal piping works for the villa"
      }
    ]
  },
  {
    id: "rosenthal-showroom-kingdom",
    category: "residential-commercial",
    titleAr: "معرض روزنتال – برج المملكة",
    titleEn: "Rosenthal Showroom – Kingdom Tower",
    descAr: "توريد وتركيب أنظمة التكييف ومكافحة الحريق وإنذار الحريق.",
    descEn: "Supply & Installation of HVAC, Fire Fighting & Fire Alarm Systems for Rosenthal Showroom.",
    locationAr: "برج المملكة، الرياض",
    locationEn: "Kingdom Tower, Riyadh",
    dateAr: "٢٠٢٦ م",
    dateEn: "2026",
    mainImage: "/images/projects/rosenthal_showroom_hq.png",
    images: [
      {
        url: "/images/projects/rosenthal-1.jpeg",
        captionAr: "معرض روزنتال – برج المملكة",
        captionEn: "Rosenthal Showroom – Kingdom Tower"
      },
      {
        url: "/images/projects/rosenthal-2.jpeg",
        captionAr: "أنظمة التكييف ومكافحة الحريق وإنذار الحريق",
        captionEn: "HVAC, fire fighting & fire alarm systems"
      }
    ]
  },
  {
    id: "kids-area-kingdom",
    category: "residential-commercial",
    titleAr: "منطقة الألعاب Kids Area (M Special) – برج المملكة",
    titleEn: "Kids Area (M Special) – Kingdom Tower",
    descAr: "توريد وتركيب أنظمة التكييف ومكافحة الحريق وإنذار الحريق.",
    descEn: "Supply & Installation of HVAC, Fire Fighting & Fire Alarm Systems for Kids Area.",
    locationAr: "برج المملكة، الرياض",
    locationEn: "Kingdom Tower, Riyadh",
    dateAr: "٢٠٢٦ م",
    dateEn: "2026",
    mainImage: "/images/projects/kingdom_tower_kids_area.png",
    images: [
      {
        url: "/images/projects/kidsarea-1.jpeg",
        captionAr: "منطقة الألعاب Kids Area (M Special) – برج المملكة",
        captionEn: "Kids Area (M Special) – Kingdom Tower"
      },
      {
        url: "/images/projects/kidsarea-2.jpeg",
        captionAr: "أعمال تركيب أنظمة التكييف ومكافحة الحريق",
        captionEn: "Installation of HVAC and firefighting systems"
      }
    ]
  },
  {
    id: "gold-orbit-showroom",
    category: "residential-commercial",
    titleAr: "معرض Gold Orbit – هايبر لولو – الملز",
    titleEn: "Gold Orbit Showroom – Lulu Hypermarket",
    descAr: "توريد وتركيب نظام التكييف لمعرض Gold Orbit.",
    descEn: "Supply & Installation of HVAC System for Gold Orbit Showroom.",
    locationAr: "الملز، الرياض",
    locationEn: "Al Malaz, Riyadh",
    dateAr: "٢٠٢٦ م",
    dateEn: "2026",
    mainImage: "/images/Projects Photos/Gold Orbit/screen-1.png",
    images: [
      {
        url: "/images/Projects Photos/Gold Orbit/screen-1.png",
        captionAr: "معرض Gold Orbit – هايبر لولو",
        captionEn: "Gold Orbit Showroom – Lulu Hypermarket"
      },
      {
        url: "/images/Projects Photos/Gold Orbit/screen-12.png",
        captionAr: "توريد وتركيب نظام التكييف لمعرض Gold Orbit",
        captionEn: "Supply & Installation of HVAC System for Gold Orbit Showroom"
      }
    ]
  },
  {
    id: "balconia-hotel",
    category: "residential-commercial",
    titleAr: "فندق بلكونيا – حي الصحافة",
    titleEn: "Balconia Hotel – Al Sahafa District",
    descAr: "توريد وتركيب أنظمة التكييف لفندق بلكونيا.",
    descEn: "Supply & Installation of HVAC Systems for Balconia Hotel.",
    locationAr: "حي الصحافة، الرياض",
    locationEn: "Al Sahafa District, Riyadh",
    dateAr: "٢٠٢٦ م",
    dateEn: "2026",
    mainImage: "/images/projects/balconia.jpeg",
    images: [
      {
        url: "/images/projects/balconia-1.jpeg",
        captionAr: "توريد وتركيب أنظمة التكييف لفندق بلكونيا",
        captionEn: "Supply & Installation of HVAC Systems for Balconia Hotel"
      },
      {
        url: "/images/projects/balconia-2.jpeg",
        captionAr: "أعمال التكييف والتمديدات الخارجية للفندق",
        captionEn: "HVAC and external installations for the hotel"
      }
    ]
  },

  // Industrial Projects
  {
    id: "badr-dairy-factory",
    category: "industrial",
    titleAr: "مصنع ألبان بدر",
    titleEn: "Badr Dairy Factory",
    descAr: "إحلال وتجديد وحدات التكييف بمصنع ألبان بدر.",
    descEn: "Replacement & Renovation of HVAC Units for Badr Dairy Factory.",
    locationAr: "المملكة العربية السعودية",
    locationEn: "Saudi Arabia",
    dateAr: "٢٠٢٥ م",
    dateEn: "2025",
    mainImage: "/images/projects/badr_dairy_factory.png",
    images: [
      {
        url: "/images/projects/badr-1.jpeg",
        captionAr: "إحلال وتجديد وحدات التكييف بمصنع ألبان بدر",
        captionEn: "Replacement & Renovation of HVAC Units for Badr Dairy Factory"
      },
      {
        url: "/images/projects/badr-2.jpeg",
        captionAr: "تحديث وصيانة شبكات التكييف والتهوية بالمصنع",
        captionEn: "Upgrading and maintaining air conditioning networks at the factory"
      }
    ]
  },
  {
    id: "ceer-factory-rabigh",
    category: "industrial",
    titleAr: "مصنع CEER – رابغ",
    titleEn: "CEER Factory – Rabigh",
    descAr: "أعمال التركيبات الكهربائية بمصنع CEER.",
    descEn: "Electrical Installation Works for CEER Factory – Rabigh.",
    locationAr: "رابغ",
    locationEn: "Rabigh",
    dateAr: "٢٠٢٦ م",
    dateEn: "2026",
    mainImage: "/images/projects/ceer-1.webp",
    images: [
      {
        url: "/images/projects/ceer-1.webp",
        captionAr: "أعمال التركيبات الكهربائية بمصنع CEER – رابغ",
        captionEn: "Electrical Installation Works for CEER Factory – Rabigh"
      },
      {
        url: "/images/projects/ceer-2.webp",
        captionAr: "لوحات التوزيع الكهربائية وتجهيزات المصنع",
        captionEn: "Electrical distribution boards and factory setup"
      }
    ]
  },
  {
    id: "first-air-pharmaceutical-industrial",
    category: "industrial",
    titleAr: "مصنع الأدوية First Air – حوطة سدير",
    titleEn: "First Air Pharmaceutical Factory – Hotat Sudair",
    descAr: "توريد وتركيب شبكة الغازات الطبية بمصنع الأدوية.",
    descEn: "Supply & Installation of Medical Gas Network for First Air Pharmaceutical Factory.",
    locationAr: "حوطة سدير",
    locationEn: "Hotat Sudair",
    dateAr: "٢٠٢٦ م",
    dateEn: "2026",
    mainImage: "/images/projects/first-air.jpg",
    images: [
      {
        url: "/images/projects/first-air.jpg",
        captionAr: "توريد وتركيب شبكة الغازات الطبية بمصنع الأدوية",
        captionEn: "Supply & Installation of Medical Gas Network for First Air Pharmaceutical Factory"
      }
    ]
  },
  {
    id: "new-dammam-correctional",
    category: "industrial",
    titleAr: "إصلاحية الدمام الجديدة",
    titleEn: "New Dammam Correctional Facility",
    descAr: "أعمال تركيب كابلات الجهد العالي.",
    descEn: "High Voltage Cable Installation Works – New Dammam Correctional Facility.",
    locationAr: "الدمام",
    locationEn: "Dammam",
    dateAr: "٢٠٢٥ م",
    dateEn: "2025",
    mainImage: "/images/projects/dammam.jpg",
    images: [
      {
        url: "/images/projects/dammam.jpg",
        captionAr: "أعمال تركيب كابلات الجهد العالي – إصلاحية الدمام الجديدة",
        captionEn: "High Voltage Cable Installation Works – New Dammam Correctional Facility"
      }
    ]
  },

  // Airports & Infrastructure Projects
  {
    id: "airport-kkia-t5",
    category: "airports-infrastructure",
    titleAr: "صالة 5 – مطار الملك خالد الدولي – الرياض",
    titleEn: "Terminal 5 – King Khalid International Airport",
    descAr: "تركيبات شبكة مكافحة الحريق وأنظمة التكييف.",
    descEn: "Fire Fighting Network & HVAC Installation Works – Terminal 5 – King Khalid International Airport.",
    locationAr: "الرياض",
    locationEn: "Riyadh",
    dateAr: "٢٠٢٦ م",
    dateEn: "2026",
    mainImage: "/images/projects/kkia-1.jpg",
    images: [
      {
        url: "/images/projects/kkia-1.jpg",
        captionAr: "صالة 5 – مطار الملك خالد الدولي",
        captionEn: "Terminal 5 – King Khalid International Airport"
      },
      {
        url: "/images/projects/kkia-2.jpeg",
        captionAr: "تركيبات شبكة مكافحة الحريق وأنظمة التكييف بالصالة",
        captionEn: "Firefighting and HVAC installation works at the terminal"
      }
    ]
  },
  {
    id: "arasco-aviation-lounge",
    category: "airports-infrastructure",
    titleAr: "صالة طيران عرباسكو – مطار جدة الدولي",
    titleEn: "Arasco Aviation Lounge – Jeddah International Airport",
    descAr: "توريد وتركيب أنظمة التكييف والتهوية.",
    descEn: "Supply & Installation of HVAC & Ventilation Systems for Arasco Aviation Lounge.",
    locationAr: "جدة",
    locationEn: "Jeddah",
    dateAr: "٢٠٢٦ م",
    dateEn: "2026",
    mainImage: "/images/projects/arabasco.png",
    images: [
      {
        url: "/images/projects/arabasco.png",
        captionAr: "صالة طيران عرباسكو – مطار جدة الدولي",
        captionEn: "Arasco Aviation Lounge – Jeddah International Airport"
      },
    ]
  },

  // Healthcare Projects
  {
    id: "anfas-alraha-hospital",
    category: "healthcare",
    titleAr: "مستشفى أنفاس الراحة – الرياض",
    titleEn: "Anfas Al Raha Hospital – Riyadh",
    descAr: "توريد وتركيب أنظمة التهوية بمستشفى أنفاس الراحة.",
    descEn: "Supply & Installation of Ventilation Systems for Anfas Al Raha Hospital.",
    locationAr: "الرياض",
    locationEn: "Riyadh",
    dateAr: "٢٠٢٦ م",
    dateEn: "2026",
    mainImage: "/images/projects/anfas.jpg",
    images: [
      {
        url: "/images/projects/anfas.jpg",
        captionAr: "توريد وتركيب أنظمة التهوية بمستشفى أنفاس الراحة",
        captionEn: "Supply & Installation of Ventilation Systems for Anfas Al Raha Hospital"
      }
    ]
  },
  {
    id: "first-air-pharmaceutical-healthcare",
    category: "healthcare",
    titleAr: "مصنع الأدوية First Air – حوطة سدير",
    titleEn: "First Air Pharmaceutical Factory – Hotat Sudair",
    descAr: "توريد وتركيب شبكة الغازات الطبية بمصنع الأدوية.",
    descEn: "Supply & Installation of Medical Gas Network for First Air Pharmaceutical Factory.",
    locationAr: "حوطة سدير",
    locationEn: "Hotat Sudair",
    dateAr: "٢٠٢٦ م",
    dateEn: "2026",
    mainImage: "/images/projects/first-air.jpg",
    images: [
      {
        url: "/images/projects/first-air.jpg",
        captionAr: "توريد وتركيب شبكة الغازات الطبية بمصنع الأدوية",
        captionEn: "Supply & Installation of Medical Gas Network for First Air Pharmaceutical Factory"
      }
    ]
  },

  // Media & Broadcasting Projects
  {
    id: "gravity-media-arabia",
    category: "media-broadcasting",
    titleAr: "عربة البث لشركة Gravity Media Arabia",
    titleEn: "Broadcasting Vehicle – Gravity Media Arabia",
    descAr: "توريد وتركيب نظام تكييف VRF بعربة البث الإذاعي والتلفزيوني.",
    descEn: "Supply & Installation of VRF Air Conditioning System for Broadcasting Vehicle.",
    locationAr: "المملكة العربية السعودية",
    locationEn: "Saudi Arabia",
    dateAr: "٢٠٢٥ م",
    dateEn: "2025",
    mainImage: "/images/projects/gravity_media.png",
    images: [
      {
        url: "/images/projects/gravity.jpg",
        captionAr: "عربة البث لشركة Gravity Media Arabia",
        captionEn: "Broadcasting Vehicle – Gravity Media Arabia"
      }
    ]
  },
  {
    id: "sba-control-rooms",
    category: "media-broadcasting",
    titleAr: "هيئة الإذاعة والتلفزيون – الرياض",
    titleEn: "Saudi Broadcasting Authority – Riyadh",
    descAr: "توريد وتركيب أنظمة التكييف بصالة السمنار وغرف التحكم.",
    descEn: "Supply & Installation of HVAC Systems for Seminar Hall & Control Rooms.",
    locationAr: "الرياض",
    locationEn: "Riyadh",
    dateAr: "٢٠٢٦ م",
    dateEn: "2026",
    mainImage: "/images/projects/sba_riyadh.png",
    images: [
      {
        url: "/images/projects/sba-1.jpeg",
        captionAr: "هيئة الإذاعة والتلفزيون – الرياض",
        captionEn: "Saudi Broadcasting Authority – Riyadh"
      },
      {
        url: "/images/projects/sba-2.jpeg",
        captionAr: "توريد وتركيب أنظمة التكييف بصالة السمنار وغرف التحكم",
        captionEn: "Supply & Installation of HVAC Systems for Seminar Hall & Control Rooms"
      }
    ]
  },

  // Warehouses & Logistics Projects
  {
    id: "taiba-warehouses",
    category: "warehouses-logistics",
    titleAr: "مستودعات طيبة",
    titleEn: "Taiba Warehouses",
    descAr: "توريد وتركيب أنظمة التكييف والتهوية بمستودعات طيبة.",
    descEn: "Supply & Installation of HVAC & Ventilation Systems for Taiba Warehouses.",
    locationAr: "المملكة العربية السعودية",
    locationEn: "Saudi Arabia",
    dateAr: "٢٠٢٥ م",
    dateEn: "2025",
    mainImage: "/images/projects/taiba_warehouses.png",
    images: [
      {
        url: "/images/projects/taiba-1.jpeg",
        captionAr: "توريد وتركيب أنظمة التكييف والتهوية بمستودعات طيبة",
        captionEn: "Supply & Installation of HVAC & Ventilation Systems for Taiba Warehouses"
      },
      {
        url: "/images/projects/taiba-2.jpeg",
        captionAr: "أعمال التكييف والتمديدات الهوائية بالمستودعات",
        captionEn: "HVAC and ducting installation at the warehouses"
      }
    ]
  }
];

export type CategoryFilter = "all" | "residential-commercial" | "industrial" | "airports-infrastructure" | "healthcare" | "media-broadcasting" | "warehouses-logistics";

export interface CategoryTab {
  id: CategoryFilter;
  labelAr: string;
  labelEn: string;
}

export const categoriesTabs: CategoryTab[] = [
  { id: "all", labelAr: "الكل", labelEn: "All" },
  { id: "residential-commercial", labelAr: "سكني وتجاري", labelEn: "Res & Com" },
  { id: "industrial", labelAr: "المشاريع الصناعية", labelEn: "Industrial" },
  { id: "airports-infrastructure", labelAr: "المطارات والبنية التحتية", labelEn: "Airports" },
  { id: "healthcare", labelAr: "المشاريع الطبية", labelEn: "Healthcare" },
  { id: "media-broadcasting", labelAr: "الإعلام والاتصالات", labelEn: "Media" },
  { id: "warehouses-logistics", labelAr: "المستودعات", labelEn: "Warehouses" }
];
