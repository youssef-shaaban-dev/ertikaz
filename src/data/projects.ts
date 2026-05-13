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
    mainImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
        captionAr: "توريد وتركيب أنظمة التكييف لفيلا سكنية",
        captionEn: "Supply & Installation of HVAC Systems for Residential Villa"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
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
    mainImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
        captionAr: "توريد وتركيب أنظمة التكييف المخفي لعمارة سكنية",
        captionEn: "Supply & Installation of Concealed HVAC Systems for Residential Building"
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
    mainImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        captionAr: "توريد وتركيب نظام تكييف VRF لفيلا سكنية",
        captionEn: "Supply & Installation of VRF Air Conditioning System for Residential Villa"
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
    mainImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        captionAr: "معرض روزنتال – برج المملكة",
        captionEn: "Rosenthal Showroom – Kingdom Tower"
      },
      {
        url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
        captionAr: "شبكة متكاملة لإطفاء ومكافحة الحريق وأنظمة الإنذار",
        captionEn: "Integrated fire alarm & firefighting loop"
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
    mainImage: "https://images.unsplash.com/photo-1566647387313-9fda80664848?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566647387313-9fda80664848?auto=format&fit=crop&w=1200&q=80",
        captionAr: "منطقة الألعاب Kids Area – برج المملكة",
        captionEn: "Kids Area (M Special) – Kingdom Tower"
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
    mainImage: "https://images.unsplash.com/photo-1567449300-4830-6c5b1f81a028?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1567449300-4830-6c5b1f81a028?auto=format&fit=crop&w=1200&q=80",
        captionAr: "معرض Gold Orbit – هايبر لولو",
        captionEn: "Gold Orbit Showroom – Lulu Hypermarket"
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
    mainImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        captionAr: "توريد وتركيب أنظمة التكييف لفندق بلكونيا",
        captionEn: "Supply & Installation of HVAC Systems for Balconia Hotel"
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
    mainImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
        captionAr: "إحلال وتجديد وحدات التكييف بمصنع ألبان بدر",
        captionEn: "Replacement & Renovation of HVAC Units for Badr Dairy Factory"
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
    mainImage: "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=1200&q=80",
        captionAr: "أعمال التركيبات الكهربائية بمصنع CEER – رابغ",
        captionEn: "Electrical Installation Works for CEER Factory – Rabigh"
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
    mainImage: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80",
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
    mainImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
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
    mainImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
        captionAr: "صالة 5 – مطار الملك خالد الدولي",
        captionEn: "Terminal 5 – King Khalid International Airport"
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
    mainImage: "https://images.unsplash.com/photo-1483450388369-9ed95738483c?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1483450388369-9ed95738483c?auto=format&fit=crop&w=1200&q=80",
        captionAr: "صالة طيران عرباسكو – مطار جدة الدولي",
        captionEn: "Arasco Aviation Lounge – Jeddah International Airport"
      }
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
    mainImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
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
    mainImage: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80",
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
    mainImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80",
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
    mainImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&q=80",
        captionAr: "هيئة الإذاعة والتلفزيون – الرياض",
        captionEn: "Saudi Broadcasting Authority – Riyadh"
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
    mainImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
        captionAr: "توريد وتركيب أنظمة التكييف والتهوية بمستودعات طيبة",
        captionEn: "Supply & Installation of HVAC & Ventilation Systems for Taiba Warehouses"
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
