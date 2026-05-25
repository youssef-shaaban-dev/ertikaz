import { Wind, Flame, Droplet, Zap, Cpu, Gauge } from "lucide-react";

export interface Feature {
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
}

export interface SystemSection {
  titleAr: string;
  titleEn: string;
  itemsAr: string[];
  itemsEn: string[];
}

export interface SubService {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  image: string;
  features: Feature[];
  systems?: SystemSection[];
}

export interface Category {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  image: string;
  iconName: "hvac" | "fire" | "plumbing" | "electrical" | "lowcurrent" | "gas";
  subServices: SubService[];
}

export const categories: Category[] = [
  {
    id: "hvac",
    titleAr: "الأعمال الميكانيكية - أنظمة التكييف والتهوية HVAC",
    titleEn: "Mechanical Works - HVAC Systems",
    descAr: "حلول متكاملة لتصميم وتوريد وتركيب أنظمة التكييف المباشر والمياه المبردة وأنظمة VRF الذكية ومجاري الهواء وفقاً لأعلى الكفاءات الطاقية.",
    descEn: "Comprehensive solutions for the design, supply, and installation of DX systems, chilled water, VRF, and air distribution with optimal energy efficiency.",
    image: "/images/services/hvac.webp",
    iconName: "hvac",
    subServices: [
      {
        id: "cooling_systems",
        titleAr: "أنظمة التكييف والتبريد",
        titleEn: "Cooling & AC Systems",
        descAr: "نقدم مجموعة متكاملة من حلول التكييف المركزي والمباشر وأنظمة تدفق التبريد المتغير VRF للمشاريع السكنية والتجارية والضخمة.",
        descEn: "We offer a complete range of central and direct expansion AC solutions alongside variable refrigerant flow (VRF) systems for residential, commercial, and industrial projects.",
        image: "/images/services/hvac_cooling.webp",
        features: [
          {
            titleAr: "تقنيات تبريد متنوعة",
            titleEn: "Diverse Cooling Tech",
            descAr: "تغطية شاملة تشمل أنظمة المياه المبردة (Chilled Water) والأنظمة المباشرة (DX) لتناسب متطلبات كل مشروع.",
            descEn: "Comprehensive coverage including Chilled Water and Direct Expansion systems to fit all project demands."
          },
          {
            titleAr: "أقصى كفاءة استهلاك للطاقة",
            titleEn: "Maximum Energy Efficiency",
            descAr: "نعتمد على تقنيات الإنفرتر الذكية وضاغطات متغيرة السرعة لتقليل استهلاك الكهرباء حتى 45%.",
            descEn: "Utilizing smart inverters and variable speed compressors to slice electricity bills by up to 45%."
          }
        ],
        systems: [
          {
            titleAr: "أنظمة التكييف المباشر DX Systems",
            titleEn: "Direct Expansion Systems (DX)",
            itemsAr: [
              "وحدات السبليت Split Units",
              "الوحدات المخفية Concealed Split Units",
              "وحدات الكاسيت Cassette Units",
              "وحدات الباكج Package Units",
              "وحدات الرووف توب Rooftop Units (RTU)",
              "أنظمة التكييف الدقيق Precision Air Conditioning (PAC)"
            ],
            itemsEn: [
              "Split Units",
              "Concealed Split Units",
              "Cassette Units",
              "Package Units",
              "Rooftop Units (RTU)",
              "Precision Air Conditioning (PAC)"
            ]
          },
          {
            titleAr: "أنظمة المياه المبردة Chilled Water Systems",
            titleEn: "Chilled Water Systems",
            itemsAr: [
              "الشيلرات الهوائية والمائية Air & Water Cooled Chillers",
              "وحدات مناولة الهواء AHU",
              "وحدات الملف والمروحة FCU",
              "مضخات المياه المبردة Chilled Water Pumps",
              "وحدات تثبيت الضغط Pressurization Units"
            ],
            itemsEn: [
              "Air & Water Cooled Chillers",
              "Air Handling Units (AHU)",
              "Fan Coil Units (FCU)",
              "Chilled Water Pumps",
              "Pressurization Units"
            ]
          },
          {
            titleAr: "أنظمة تدفق المبرد المتغير",
            titleEn: "Variable Refrigerant Flow Systems",
            itemsAr: [
              "أنظمة VRF / VRV الموفرة للطاقة بنسب عالية",
              "تحكم مستقل ودقيق في مناخ كل زون بغرفة منفصلة"
            ],
            itemsEn: [
              "High energy-efficient VRF / VRV systems",
              "Independent and precise climate control per zone/room"
            ]
          }
        ]
      },
      {
        id: "air_distribution",
        titleAr: "أنظمة توزيع الهواء ومجاري التكييف",
        titleEn: "Air Distribution & Ductwork",
        descAr: "تصنيع وتركيب مجاري الهواء (الدكت) بمختلف أنواعها، مع عزل متقدم وموزعات هواء تضمن توزيعاً هادئاً ومتوازناً.",
        descEn: "Fabrication and installation of high-grade air ducts with robust insulation and specialized outlets for seamless, draft-free airflow.",
        image: "/images/services/hvac_ducts.webp",
        features: [
          {
            titleAr: "تصميم هيدروليكي دقيق",
            titleEn: "Precise Airflow Design",
            descAr: "حسابات دقيقة لمقاسات الدكت لضمان سرعة هواء هادئة وضغط مستقر في كافة المنافذ.",
            descEn: "Rigorous static pressure calculations for calm velocity and stable pressure in all diffusers."
          },
          {
            titleAr: "عزل حراري وصوتي متطور",
            titleEn: "Acoustic & Thermal Insulation",
            descAr: "استخدام مواد عازلة معتمدة تمنع تكاثف الرطوبة وتخمد ضجيج تدفق الهواء.",
            descEn: "Approved insulation materials preventing condensation and muffling airflow turbulence."
          }
        ],
        systems: [
          {
            titleAr: "مكونات شبكات توزيع الهواء",
            titleEn: "Air Distribution Components",
            itemsAr: [
              "مجاري الهواء من الصاج المجلفن Galvanized Steel Ducts",
              "مجاري الهواء مسبقة العزل Pre-insulated Ducts (PID)",
              "خانقات وعازلات الحريق الميكانيكية والكهربائية Fire Dampers (FD / FSD)",
              "موزعات وصمامات الهواء Air Outlets (Diffusers, Grilles, Louvers)"
            ],
            itemsEn: [
              "Galvanized Steel Ducts",
              "Pre-insulated Ducts (PID)",
              "Mechanical & Electrical Fire Dampers (FD / FSD)",
              "Air Outlets (Diffusers, Grilles, Louvers)"
            ]
          }
        ]
      },
      {
        id: "ventilation_smoke",
        titleAr: "التهوية وسحب الدخان والتحكم",
        titleEn: "Ventilation & Smoke Control",
        descAr: "تصميم وتنفيذ أنظمة التهوية الميكانيكية لمواقف السيارات والمطابخ، بجانب أنظمة سحب الدخان الذكية للحفاظ على الأرواح.",
        descEn: "Expert setup of mechanical ventilation for parking and kitchens alongside safety smoke extractors integrated with fire panels.",
        image: "/images/services/hvac_ventilation.webp",
        features: [
          {
            titleAr: "أنظمة متكاملة مع الدفاع المدني",
            titleEn: "Civil Defense Compliant",
            descAr: "أنظمة ضغط سلالم وسحب دخان تستجيب فوراً لإشارات إنذار الحريق.",
            descEn: "Staircase pressurization and smoke exhaust triggering immediately upon fire alarm signals."
          },
          {
            titleAr: "ربط ذكي بالأتمتة BMS",
            titleEn: "BMS Integration Capabilities",
            descAr: "مراقبة أداء مراوح التهوية ومستويات غاز أول أكسيد الكربون في المواقف آلياً.",
            descEn: "Automated monitoring of fan efficiency and carbon monoxide levels across parking grids."
          }
        ],
        systems: [
          {
            titleAr: "أنظمة التهوية وإدارة الدخان Ventilation & Smoke Management",
            titleEn: "Ventilation & Smoke Management Systems",
            itemsAr: [
              "مراوح سحب هواء المواقف النفاثة Jet Fans & Parking Ventilation",
              "أنظمة تهوية المخازن والمطابخ التجارية Warehouses & Kitchen Ventilation",
              "مراوح ضغط السلالم وممرات الهروب Staircase Pressurization",
              "أنظمة سحب الدخان والتحكم فيه Smoke Extraction & Management",
              "أنظمة التحكم والأتمتة للتكييف والتهوية ومراقبة الـ BMS"
            ],
            itemsEn: [
              "Jet Fans & Parking Ventilation",
              "Warehouses & Commercial Kitchen Ventilation",
              "Staircase & Escape Route Pressurization",
              "Smoke Extraction & Smoke Management Systems",
              "HVAC Control & BMS Automation integration"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "fire_protection",
    titleAr: "أنظمة مكافحة الحريق والدفاع المدني",
    titleEn: "Fire Fighting & Protection Systems",
    descAr: "تصميم وتوريد وتركيب شبكات الإطفاء المائية والغازية المتكاملة وكشف الإنذار المبكر المعتمدة من الدفاع المدني السعودي وهيئة UL/FM.",
    descEn: "Turnkey installation of water-based, clean gas suppression grids and high-sensitivity fire alarms approved by Civil Defense and UL/FM standards.",
    image: "/images/services/fire_protection.webp",
    iconName: "fire",
    subServices: [
      {
        id: "water_suppression",
        titleAr: "أنظمة الإطفاء المائية ومضخات الحريق",
        titleEn: "Water-Based Suppression & Pumps",
        descAr: "العمود الفقري لأنظمة مكافحة الحريق، تشمل الرشاشات وصناديق الحريق وغرف المضخات المعتمدة كلياً.",
        descEn: "The backbone of life safety, providing specialized automatic sprinklers, fire cabinets, and certified UL/FM pump packages.",
        image: "/images/services/fire_water_pumps.webp",
        features: [
          {
            titleAr: "اعتمادات عالمية ومحلية",
            titleEn: "Certified Safety Standard",
            descAr: "مطابقة تامة لكود البناء السعودي SBC ومتطلبات الدفاع المدني والأكواد العالمية NFPA.",
            descEn: "100% compliance with Saudi Building Codes, Civil Defense, and international NFPA codes."
          },
          {
            titleAr: "مضخات إطفاء فائقة الموثوقية",
            titleEn: "High-Reliability Fire Pumps",
            descAr: "توريد غرف مضخات معتمدة UL/FM تضمن ضخ المياه بالكمية والضغط المطلوب في الطوارئ.",
            descEn: "Installing certified UL/FM pump sets that secure optimal water pressure and volume during fire events."
          }
        ],
        systems: [
          {
            titleAr: "الأنظمة المائية للحماية من الحريق Water-Based Systems",
            titleEn: "Water-Based Fire Protection Systems",
            itemsAr: [
              "أنظمة الرش الآلي المائية Automatic Sprinkler Systems",
              "شبكات صناديق خراطيم الحريق Fire Hose Cabinets & Reels",
              "شبكات حنفيات الحريق الخارجية والداخلية Fire Hydrants & Landing Valves",
              "غرف مضخات الحريق المعتمدة Fire Pump Rooms (UL/FM listed)"
            ],
            itemsEn: [
              "Automatic Sprinkler Systems",
              "Fire Hose Cabinets & Reels Networks",
              "External & Internal Fire Hydrants & Landing Valves",
              "Certified UL/FM Listed Fire Pump Rooms"
            ]
          }
        ]
      },
      {
        id: "special_suppression",
        titleAr: "الإطفاء بالغازات النظيفة والأنظمة الخاصة",
        titleEn: "Clean Agent & Special Suppression",
        descAr: "حلول الإخماد الذكي للمناطق الحساسة كالخوادم وغرف الكهرباء التي تمنع استخدام المياه تفادياً لتلف المعدات.",
        descEn: "Smart suppression technology tailored for sensitive zones like data centers and LV rooms where water causes equipment damage.",
        image: "/images/services/fire_clean_gas.webp",
        features: [
          {
            titleAr: "إخماد فوري بدون رطوبة",
            titleEn: "Zero-Residue Fast Quench",
            descAr: "امتصاص الحرارة وخفض الأكسجين بالغازات النظيفة دون ترك أي آثار كيميائية أو رطوبة.",
            descEn: "Instantly reducing oxygen/absorbing heat via clean agents leaving absolutely no moisture or residue."
          },
          {
            titleAr: "حماية خاصة لمطابخ المطاعم",
            titleEn: "Specialized Kitchen Systems",
            descAr: "أنظمة الرش الرطب الخاصة Wet Chemical لتأمين مداخن المطابخ التجارية الكبرى.",
            descEn: "Wet Chemical pre-engineered setups built to automatically suppress commercial kitchen hood fires."
          }
        ],
        systems: [
          {
            titleAr: "أنظمة الإطفاء الغازية والخاصة Clean Agent Suppression",
            titleEn: "Clean Agent & Special Suppression",
            itemsAr: [
              "نظام الإطفاء بغاز FM200 System المستدام",
              "نظام الإطفاء بغاز Novec 1230 المتطور والآمن بيئياً",
              "أنظمة الإطفاء بغاز ثاني أكسيد الكربون CO2 Systems للمصانع",
              "أنظمة الإطفاء بالرغوة Foam Systems للمستودعات الكبرى وهناجر الطائرات",
              "أنظمة إطفاء المطابخ التلقائية Wet Chemical Kitchen Hood Systems"
            ],
            itemsEn: [
              "Eco-sustainable FM200 Suppression Systems",
              "Advanced, green Novec 1230 Fire Suppression Systems",
              "Industrial Grade Carbon Dioxide (CO2) Systems",
              "Foam Suppression Systems for massive warehouses and aircraft hangars",
              "Automatic Wet Chemical Systems for commercial kitchen hoods"
            ]
          }
        ]
      },
      {
        id: "fire_alarm_safety",
        titleAr: "أنظمة إنذار الحريق والسلامة وحماية الحياة",
        titleEn: "Fire Alarm & Life Safety Systems",
        descAr: "أنظمة ذكية للكشف المبكر عن الحريق وإصدار إشارات الإخلاء، مترابطة هندسياً مع أنظمة سحب الدخان والتكييف.",
        descEn: "Intelligent early fire sensing grids linked to evacuation alarms and interconnected with HVAC smoke extraction dampers.",
        image: "/images/services/fire_alarm.webp",
        features: [
          {
            titleAr: "تحديد دقيق لمكان الحريق",
            titleEn: "Addressable Precision Search",
            descAr: "لوحات عنونة ذكية تحدد الكاشف الذي أطلق الإنذار بدقة لمنع انتشار الخطر.",
            descEn: "Smart addressable panels identifying the exact triggered detector to isolate hazards instantly."
          },
          {
            titleAr: "إخلاء صوتي آمن وموجه",
            titleEn: "Guided Voice Evacuation",
            descAr: "أنظمة PAVA تبث رسائل مسجلة توجه المتواجدين نحو أقرب مخرج طوارئ آمن.",
            descEn: "Voice alarm PAVA broadcasts directing building occupants clearly towards safer routes."
          }
        ],
        systems: [
          {
            titleAr: "مكونات أنظمة الإنذار والسلامة Fire Alarm & Life Safety",
            titleEn: "Fire Alarm & Life Safety Systems",
            itemsAr: [
              "أنظمة الإنذار المعنونة وغير المعنونة Addressable & Conventional Systems",
              "كواشف الدخان والحرارة وكواشف الغاز Smoke, Heat, Gas Detectors",
              "أنظمة النداء الصوتي العام والإخلاء PAVA Systems",
              "أنظمة إنارة الطوارئ ومؤشرات مخارج الهروب Emergency & Exit Lighting"
            ],
            itemsEn: [
              "Addressable & Conventional Fire Alarm Systems",
              "Smoke, Thermal Heat, and Combustible Gas Detectors",
              "Public Address & Voice Evacuation Systems (PAVA)",
              "Emergency Illumination & Illuminated Exit Lighting Signage"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "plumbing",
    titleAr: "الأعمال الصحية والسباكة",
    titleEn: "Plumbing & Sanitary Works",
    descAr: "نغطي أعمال تغذية المياه النظيفة، شبكات الصرف المتطورة، أنظمة تصريف السيول، ومعالجة المياه وتحليتها وفقاً لأعلى المعايير الصحية.",
    descEn: "We cover clean water supply infrastructure, robust drainage networks, storm water management, and high-efficiency water treatment systems.",
    image: "/images/services/plumbing.webp",
    iconName: "plumbing",
    subServices: [
      {
        id: "water_supply",
        titleAr: "شبكات التغذية ومضخات المياه",
        titleEn: "Water Supply & Pumps",
        descAr: "تصميم وتركيب شبكات تغذية مياه الشرب، مع وحدات تعزيز الضغط الذكية ومحطات التسخين المركزي.",
        descEn: "Routing high-grade drinking water pipe networks combined with intelligent pressure boosters and centralized heating.",
        image: "/images/services/plumbing_water_supply.webp",
        features: [
          {
            titleAr: "مواد صحية 100% ومقاومة للحرارة",
            titleEn: "100% Non-Corrosive Materials",
            descAr: "تمديدات أنابيب PPR و PEX و CPVC آمنة كيميائياً ولا تتأثر بالعسر المائي.",
            descEn: "PPR, PEX, and CPVC pipeline networks chemically inert, resisting calcification and corrosion."
          },
          {
            titleAr: "أنظمة ضغط مياه متوازن وثابت",
            titleEn: "Static Stable Pressure Booster",
            descAr: "تركيب مضخات معززة متغيرة التردد تحافظ على ضغط ثابت في جميع صمامات المبنى.",
            descEn: "Variable speed frequency driven boosters securing consistent flow at any faucet regardless of elevation."
          }
        ],
        systems: [
          {
            titleAr: "أنظمة التغذية بمياه الشرب Water Supply Systems",
            titleEn: "Water Supply Infrastructure Systems",
            itemsAr: [
              "شبكات الأنابيب الداخلية والخارجية PPR, PEX, CPVC Pipelines",
              "مضخات تعزيز الضغط الذكية والمضخات الغاطسة Booster & Submersible Pumps",
              "سخانات المياه المركزية وأنظمة التسخين الشمسي Central & Solar Water Heaters",
              "خزانات المياه العلوية والأرضية والمعزولة حرارياً Water Tanks"
            ],
            itemsEn: [
              "Internal & External Pipelines (PPR, PEX, CPVC)",
              "Smart Inverter Booster & Heavy-Duty Submersible Pumps",
              "Central Boilers & Sustainable Solar Water Heaters",
              "Elevated, Underground & Thermally Insulated Storage Water Tanks"
            ]
          }
        ]
      },
      {
        id: "drainage_storm",
        titleAr: "شبكات الصرف الصحي وتصريف السيول",
        titleEn: "Drainage & Storm Water Systems",
        descAr: "تأسيس شبكات الصرف بالجاذبية، وعزل الروائح الكريهة، وتصريف مياه الأمطار بكفاءة للتصدي للتقلبات الجوية.",
        descEn: "Gravity-led drainage engineering ensuring complete odor isolation and stormwater networks that secure structures against storms.",
        image: "/images/services/plumbing_drainage.webp",
        features: [
          {
            titleAr: "هندسة تدفق ذاتية التنظيف",
            titleEn: "Self-Cleaning Slope Engineering",
            descAr: "حسابات ميول دقيقة تمنع ترسب العوالق والانسدادات داخل الخطوط الرئيسية.",
            descEn: "Exact slope calculations preventing solids deposition and costly long-term blockages."
          },
          {
            titleAr: "حماية البيئة والصحة العامة",
            titleEn: "Public Environmental Protection",
            descAr: "عزل الزيوت والشحوم بمصائد متطورة قبل تصريف المياه للشبكة العامة.",
            descEn: "Separating greases/heavy oils through certified interceptors before reaching municipal lines."
          }
        ],
        systems: [
          {
            titleAr: "أنظمة الصرف الصحي وتصريف السيول Drainage & Storm Systems",
            titleEn: "Drainage & Storm Water Infrastructure",
            itemsAr: [
              "شبكات الصرف الصحي الداخلية والخارجية UPVC, PVC, Cast Iron",
              "أنظمة تصريف مياه الأمطار والسيول والأسطح Storm Water Drainage",
              "مصائد الشحوم والزيوت لمطابخ المطاعم Grease & Oil Interceptors",
              "محطات رفع وضخ مياه الصرف للمناطق المنخفضة Sewage Lifting Stations"
            ],
            itemsEn: [
              "Internal & External Drainage Grids (UPVC, PVC, Cast Iron)",
              "Stormwater & Roof Drainage Networks",
              "Commercial Grade Restaurant Grease & Heavy-Oil Interceptors",
              "Subterranean Sewage Lifting & Pumping Stations"
            ]
          }
        ]
      },
      {
        id: "water_treatment",
        titleAr: "معالجة وتنقية وتحلية المياه",
        titleEn: "Water Treatment & Purification",
        descAr: "توريد وإنشاء وحدات التحلية بالـ RO، وأنظمة التعقيم بالأشعة فوق البنفسجية وفلترة المياه الرمادية للمباني الخضراء.",
        descEn: "Assembly of Reverse Osmosis (RO) plants, Ultraviolet sterilization, and Grey Water reclaim systems for eco-friendly buildings.",
        image: "/images/services/plumbing_treatment.webp",
        features: [
          {
            titleAr: "مياه فائقة النقاء للشرب والصناعة",
            titleEn: "Ultra-Pure & Safe Output",
            descAr: "تخفيض ملوحة المياه TDS وموازنة العسر الكلسي لتأمين الأجهزة والمعدات.",
            descEn: "Optimizing TDS levels and softening hard calcium to extend lifetime of piping and machinery."
          }
        ],
        systems: [
          {
            titleAr: "أنظمة معالجة وتنقية المياه Water Treatment Systems",
            titleEn: "Water Purification & Treatment Plants",
            itemsAr: [
              "محطات تحلية المياه بنظام التناضح العكسي Reverse Osmosis (RO) Plants",
              "أنظمة تنقية المياه والفلاتر الرملية والكربونية وتعقيم الـ UV",
              "معالجة وإعادة تدوير مياه الصرف الرمادية Grey Water Systems"
            ],
            itemsEn: [
              "Reverse Osmosis (RO) Desalination Plants",
              "Sand & Carbon Filtration & UV Disinfection Sterilizers",
              "Eco Grey Water Reclaim & Recycled Water Systems"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "gas_systems",
    titleAr: "أنظمة الغازات (LPG) والغازات الطبية (MG)",
    titleEn: "Gas (LPG) & Medical Gas (MG) Systems",
    descAr: "تصميم وتوريد وتركيب شبكات الغاز البترولي المسال (LPG)، شبكات الغاز الطبيعي، وأنظمة الغازات الطبية (MG) المتكاملة للمستشفيات والمنشآت التجارية والصناعية.",
    descEn: "Design, supply, and installation of Liquefied Petroleum Gas (LPG) networks, Natural Gas pipelines, and certified Medical Gas (MG) systems for healthcare, commercial, and industrial facilities.",
    image: "/images/services/gas_systems.webp",
    iconName: "gas",
    subServices: [
      {
        id: "fuel_gas",
        titleAr: "أنظمة تمديدات الغاز المركزي والوقود",
        titleEn: "Central Gas & Fuel Distribution",
        descAr: "تركيب شبكات الغاز المركزي الآمنة وتوصيلات الديزل والوقود للمولدات والغلايات مع كواشف التسرب الآلية.",
        descEn: "Secure central LPG network distribution, diesel filling grids for backup generators with automatic leak-shutoff protocols.",
        image: "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?auto=format&fit=crop&w=800&q=80",
        features: [
          {
            titleAr: "تأمين وقائي ضد تسرب الغاز",
            titleEn: "Preventive Automatic Shutoff",
            descAr: "ربط الشبكة بصمامات إغلاق تلقائية (Solenoid Valves) وحساسات غاز متطورة.",
            descEn: "Interlocking pipelines with Solenoid shutoff valves and combustible gas detectors."
          },
          {
            titleAr: "اختبارات ضغط صارمة وشاملة",
            titleEn: "Rigorous Pressure Integrity Tests",
            descAr: "إخضاع كافة أنابيب الغاز المركزي لاختبارات ضغط هيدروليكية وهوائية للتأكد من خلوها من أي عيوب.",
            descEn: "Subjecting all supply networks to high pressure hydro-tests ensuring 100% joint integrity."
          }
        ],
        systems: [
          {
            titleAr: "أنظمة الوقود والغاز Fuel & Gas Systems",
            titleEn: "Central LPG & Fuel Piping Grids",
            itemsAr: [
              "شبكات الغاز المركزي للمطابخ والمباني السكنية والتجارية Central LPG Systems",
              "شبكات الغاز الطبيعي والأنظمة البترولية Natural Gas Pipe Networks",
              "شبكات تمديد الديزل والوقود للمولدات والغلايات Diesel & Fuel Supply Lines"
            ],
            itemsEn: [
              "Central LPG Distribution for villas, malls, and kitchens",
              "Natural Gas pipeline networks & certified hookups",
              "Diesel & Bulk Fuel supply networks for generators and boilers"
            ]
          }
        ]
      },
      {
        id: "special_mechanical",
        titleAr: "أنظمة الغازات الطبية (MG) والأنظمة الميكانيكية الخاصة",
        titleEn: "Medical Gas (MG) & Special Mechanical Systems",
        descAr: "نمتلك الخبرة لتنفيذ شبكات الغازات الطبية في المستشفيات، الهواء المضغوط، غرف التبريد، وغرف الأبحاث المعتمدة.",
        descEn: "High-end execution of Medical Gas systems for hospitals, compressed air grids, large cold storages, and certified clean rooms.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
        features: [
          {
            titleAr: "تطبيق صارم لمعايير التعقيم والغرف النظيفة",
            titleEn: "Strict Sterile Engineering Norms",
            descAr: "تنفيذ تمديدات الغازات الطبية النحاسية وغرف الأبحاث التي تتطلب درجات نقاء هواء فائقة.",
            descEn: "Deploying Medical Gas Copper pipelines and certified cleanroom layouts requiring high ISO classes."
          }
        ],
        systems: [
          {
            titleAr: "الأنظمة الميكانيكية الخاصة والصناعية Industrial Mechanical",
            titleEn: "Industrial & Special Mechanical Layouts",
            itemsAr: [
              "شبكات الغازات الطبية للمستشفيات Medical Gas Pipeline Systems (MGPS)",
              "أنظمة الهواء المضغوط والخلخلة للمصانع Compressed Air & Vacuum Systems",
              "أنظمة سحب وتجميع الغبار والأبخرة Dust & Fume Collection Systems",
              "أنظمة غرف التبريد والتجميد للمستودعات Cold & Freezing Rooms",
              "غرف الأبحاث والتبريد الدقيق لمراكز البيانات Clean Rooms & Data Center Cooling"
            ],
            itemsEn: [
              "Hospital Medical Gas Pipeline Systems (MGPS)",
              "Industrial Compressed Air & Central Vacuum Systems",
              "Industrial Dust, Smoke & Fume Extraction Systems",
              "Massive Commercial Cold Storage & Freezing Chambers",
              "Certified ISO Clean Rooms & Enterprise Data Center Cooling"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "electrical",
    titleAr: "الأعمال الكهربائية وأنظمة التيار الخفيف ELV",
    titleEn: "Electrical & Extra Low Voltage (ELV) Systems",
    descAr: "تأسيس وتوزيع الطاقة الكهربائية والإنارة الذكية والطاقة البديلة، بالإضافة إلى الأنظمة الأمنية المتطورة وشبكات الاتصالات وأتمتة المباني الحديثة.",
    descEn: "Erecting power distribution networks, architectural smart lighting, along with advanced integrated security, communication, and smart building automation.",
    image: "/images/services/electrical.webp",
    iconName: "electrical",
    subServices: [
      {
        id: "power_distribution",
        titleAr: "أنظمة القوى الكهربائية والتوزيع",
        titleEn: "Power Distribution & Grid Systems",
        descAr: "تأسيس شبكات التوزيع ولوحات الكهرباء وكابلات الضغط العالي وتأمين المباني عبر التأريض والمانعات.",
        descEn: "Routing LV/MV distribution boards, power cabling, and installing absolute grounding and lightning arrays.",
        image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80",
        features: [
          {
            titleAr: "تأمين استمرارية التيار بدون انقطاع",
            titleEn: "Uninterruptible Power Availability",
            descAr: "توفير أنظمة ATS ومولدات احتياطية تعمل أوتوماتيكياً في أجزاء من الثانية عند انقطاع المغذي الرئيسي.",
            descEn: "Providing ATS units and automated backup generator arrays activating instantly during utility blackouts."
          },
          {
            titleAr: "أعلى معايير السلامة البشرية والأجهزة",
            titleEn: "Highest Equipment & Human Safety",
            descAr: "شبكات تأريض متكاملة ومانعات صواعق لتفريغ الشحنات الزائدة وحماية الأجهزة الحساسة.",
            descEn: "Complete grounding networks and lightning protection arresting surge currents and saving gear."
          }
        ],
        systems: [
          {
            titleAr: "أنظمة القوى الكهربائية Power Distribution Systems",
            titleEn: "Main Power Distribution Systems",
            itemsAr: [
              "شبكات الجهد المنخفض والمتوسط وتجهيزاتها LV & MV Networks",
              "لوحات التوزيع الرئيسية والفرعية والقواطع المعتمدة Main & Sub-Distribution Boards (MDB / DB)",
              "مسارات وحوامل الكابلات المنظمة Cable Trays, Ladders, Trunking",
              "أنظمة التأريض والحماية من الصواعق الشاملة Grounding & Lightning Protection Systems",
              "أنظمة الطاقة الاحتياطية Backup Power Systems (Generators, ATS, UPS)"
            ],
            itemsEn: [
              "Low & Medium Voltage Power Grids (LV/MV)",
              "Main & Sub-Distribution Switchgear Panels (MDB / DB)",
              "Organized Cable Containment (Trays, Ladders, Trunking)",
              "Comprehensive Grounding & Lightning Protection Systems",
              "Fail-safe Backup Power Systems (Generators, ATS, UPS)"
            ]
          }
        ]
      },
      {
        id: "lighting_systems",
        titleAr: "تصميم وشبكات الإنارة الذكية",
        titleEn: "Smart & Architectural Lighting",
        descAr: "دراسة وتوزيع الإنارة الداخلية والخارجية والتجميلية، ودمجها مع أنظمة التحكم الرقمية وتوفير الطاقة.",
        descEn: "Architectural indoor, outdoor, and landscape lighting schemes integrated with digital energy-saving automation.",
        image: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&w=800&q=80",
        features: [
          {
            titleAr: "تنسيق إنارة جمالي وتوفير عالي",
            titleEn: "High Efficiency Illumination",
            descAr: "استخدام برامج الـ Dialux لحساب الشدة الضوئية بدقة لتجنب الهدر وضمان الراحة البصرية.",
            descEn: "Utilizing Dialux simulation for precise lux levels preventing glare and unnecessary waste."
          }
        ],
        systems: [
          {
            titleAr: "أنظمة الإضاءة المتنوعة Lighting Systems",
            titleEn: "Integrated Lighting Layouts",
            itemsAr: [
              "الإنارة الداخلية والخارجية الفاخرة Indoor & Outdoor Lighting",
              "الإضاءة المعمارية وتنسيق المسطحات الخضراء Architectural & Landscape Lighting",
              "أنظمة إنارة الطوارئ ومسالك الهروب المدمجة Emergency & Exit Lighting",
              "أنظمة التحكم في الإضاءة والإنارة الذكية والخافتة Lighting Control & Smart Lighting"
            ],
            itemsEn: [
              "Premium Indoor & Outdoor Fixtures & Illumination",
              "Architectural Highlight & Landscape Aesthetic Lighting",
              "Emergency Safe Path & Self-Illuminated Exit Lighting",
              "Intelligent Lighting Control & Dimming Automated Grids"
            ]
          }
        ]
      },
      {
        id: "renewable_energy",
        titleAr: "أنظمة الطاقة المتجددة ومحطات الشحن",
        titleEn: "Renewable Energy & EV Charging",
        descAr: "ندعم رؤية 2030 عبر تركيب ألواح الخلايا الشمسية الكهروضوئية وبناء محطات شحن السيارات الكهربائية.",
        descEn: "We support Saudi Vision 2030 by erecting Solar PV cells and building electric vehicle (EV) charging kiosks.",
        image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80",
        features: [
          {
            titleAr: "خفض الاعتماد على الشبكة الكهربائية",
            titleEn: "Cut Grid Dependency",
            descAr: "توليد طاقة خضراء مجانية للمصانع والمنشآت تخفض التكاليف التشغيلية بنسب هائلة.",
            descEn: "Harvesting free green electricity for commercial assets, shrinking utility OPEX dramatically."
          },
          {
            titleAr: "تجهيزات السيارات الكهربائية الحديثة",
            titleEn: "Future-Proof EV Stations",
            descAr: "تثبيت شواحن EV سريعة تدعم معايير مختلف السيارات الكهربائية العالمية.",
            descEn: "Installing fast AC/DC EV chargers supporting world vehicle compliance."
          }
        ],
        systems: [
          {
            titleAr: "أنظمة الطاقة المستدامة Renewable Systems",
            titleEn: "Sustainable Power Systems",
            itemsAr: [
              "أنظمة الخلايا الشمسية الكهروضوئية المتكاملة Solar PV Systems",
              "محطات شحن المركبات والسيارات الكهربائية Electric Vehicle (EV) Charging Stations"
            ],
            itemsEn: [
              "Integrated Rooftop & Ground Solar PV (Photovoltaic) Grids",
              "Intelligent Commercial & Residential Electric Vehicle (EV) Charging Kiosks"
            ]
          }
        ]
      },
      {
        id: "security_elv",
        titleAr: "الأنظمة الأمنية وكاميرات المراقبة",
        titleEn: "Security Systems & CCTV",
        descAr: "شبكات مراقبة أمنية وحماية متطورة تعتمد على الذكاء الاصطناعي لتأمين المداخل والمخارج والحدود.",
        descEn: "AI-powered comprehensive security networks safeguarding property boundaries and recording footfalls.",
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
        features: [
          {
            titleAr: "أتمتة العبور والمصدات",
            titleEn: "Automated Entry Controls",
            descAr: "ربط بوابات دخول السيارات بقارئ اللوحات التلقائي لتنظيم حركة المرور بأمان.",
            descEn: "Coupling vehicle barriers with automated License Plate Recognition (LPR) for fast transit."
          }
        ],
        systems: [
          {
            titleAr: "الأنظمة الأمنية المتكاملة Security Systems",
            titleEn: "Integrated Security Solutions",
            itemsAr: [
              "كاميرات المراقبة التلفزيونية الشبكية والذكية IP CCTV Systems",
              "أنظمة التحكم في الدخول والعبور والبصمة Access Control Systems",
              "بوابات ومصدات وموانع اقتحام السيارات Gate Barriers & Road Blockers",
              "أنظمة الكشف عن التسلل والإنذار الحارس وحماية الأسوار Intrusion Detection"
            ],
            itemsEn: [
              "High Definition Networked & AI IP CCTV Systems",
              "Biometric Access Control & Visitor Tracking Management",
              "Hydraulic/Mechanical Gate Barriers & Anti-Ram Road Blockers",
              "Perimeter Guarding & Wireless Intrusion Detection Systems"
            ]
          }
        ]
      },
      {
        id: "comm_networks",
        titleAr: "أنظمة الاتصالات والشبكات المتطورة",
        titleEn: "Communications & Networks",
        descAr: "تنفيذ البنية التحتية لكابلات البيانات والألياف البصرية والشبكات اللاسلكية بتغطيات فائقة السرعة والموثوقية.",
        descEn: "Deploying resilient backbone structured cabling, fiber optics, and high-throughput corporate wireless coverage.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
        features: [
          {
            titleAr: "تغطية وايرلس خالية من النقاط العمياء",
            titleEn: "Seamless Multi-Point WiFi Coverage",
            descAr: "تصميم خرائط الحرارة اللاسلكية لتثبيت نقاط الوصول بأماكن مدروسة هندسياً.",
            descEn: "Mapping WiFi signal heatmaps to deploy Access Points with zero dropouts and absolute speed."
          }
        ],
        systems: [
          {
            titleAr: "أنظمة الاتصالات والشبكات Communications & Networks",
            titleEn: "Communication Networks Infrastructure",
            itemsAr: [
              "شبكات البيانات والهاتف المنظمة Structured Cabling (Cat6/Cat6A/Cat7)",
              "شبكات الألياف البصرية وربط المقاسم Fiber Optic Networks (FTTH)",
              "أنظمة الاتصال اللاسلكي وتوسيع النطاق والواي فاي WiFi & Wireless Systems"
            ],
            itemsEn: [
              "High-Speed Structured Cabling for Data & Voice (Cat6/Cat6A/Cat7)",
              "Enterprise Fiber Optic Splicing & Local Terminations (FTTH)",
              "Corporate Dense Wireless/WiFi Networks & Repeater Grids"
            ]
          }
        ]
      },
      {
        id: "av_systems",
        titleAr: "الأنظمة السمعية والبصرية المتطورة",
        titleEn: "Audio-Visual & AV Solutions",
        descAr: "نظم الصوت العامة للمجمعات والأنظمة الصوتية والمرئية لقاعات الاجتماعات بجانب الإنتركم الموحد.",
        descEn: "Background music systems for retail malls, boardrooms AV systems, and unified intelligent intercom modules.",
        image: "https://images.unsplash.com/photo-1590608897129-79da98d15969?auto=format&fit=crop&w=800&q=80",
        features: [
          {
            titleAr: "تأثير صوتي نقي ومتزن",
            titleEn: "Crisp & Balanced Sound Field",
            descAr: "حساب التشتت الصوتي في المساحات العامة لضمان وضوح الصوت وعدم الصدى المزعج.",
            descEn: "Calculating public acoustics ensuring crisp and highly legible audibility with minimal echoes."
          }
        ],
        systems: [
          {
            titleAr: "الأنظمة السمعية والبصرية Audio-Visual (AV)",
            titleEn: "Audio-Visual & AV Infrastructure",
            itemsAr: [
              "أنظمة الصوت العامة والموسيقى الخلفية Public Address & BGM",
              "أنظمة الصوت والصورة والشاشات لقاعات الاجتماعات AV Boardroom Systems",
              "أنظمة الإنتركوم الصوتي والمرئي الذكي Audio/Video Intercom"
            ],
            itemsEn: [
              "Public Address & Ambient Background Music (BGM) Systems",
              "Integrated Screens, Projectors & Sound for Boardroom AV Systems",
              "Smart Unified Networked Audio/Video Intercom Systems"
            ]
          }
        ]
      },
      {
        id: "automation_smart",
        titleAr: "أنظمة الأتمتة وإدارة المباني الذكية",
        titleEn: "Building Automation & BMS",
        descAr: "دمج أنظمة المبنى الميكانيكية والكهربائية في شاشة تحكم مركزية واحدة (BMS) وتأسيس الفلل والقصور الذكية.",
        descEn: "Converging mechanical and electrical systems into a unified dashboard (BMS) alongside ultra-premium smart home installs.",
        image: "/images/services/electrical_bms.webp",
        features: [
          {
            titleAr: "تحكم كامل ومركزي بكبسة زر",
            titleEn: "Central Touchscreen Operations",
            descAr: "مراقبة التشغيل وإطلاق الإنذارات للأعطال ميكانيكياً وكهربائياً لتقليل أوقات التوقف والصيانة.",
            descEn: "Monitoring runtime logs and generating real-time electrical/mechanical fault reports automatically."
          }
        ],
        systems: [
          {
            titleAr: "أنظمة التحكم والمباني الذكية Smart Automation",
            titleEn: "Smart Systems & SCADA/BMS Automation",
            itemsAr: [
              "أنظمة إدارة المباني والتحكم بالطاقة Building Management System (BMS)",
              "أنظمة المنازل والمباني والقصور الذكية Smart Home / Smart Building Automation",
              "أنظمة التحكم الصناعي والتحكم عن بعد والمراقبة SCADA & PLC Systems"
            ],
            itemsEn: [
              "Building Management System (BMS) for holistic HVAC/Electrical savings",
              "Smart Home & Smart Building automation (Shading, Scene Control, Multi-room)",
              "Industrial Grade Programmable Controllers & Remote Scopes (SCADA & PLC)"
            ]
          }
        ]
      }
    ]
  }
];

export function getIcon(iconName: string) {
  switch (iconName) {
    case "hvac":
      return <Wind className="w-8 h-8" />;
    case "fire":
      return <Flame className="w-8 h-8" />;
    case "plumbing":
      return <Droplet className="w-8 h-8" />;
    case "electrical":
      return <Zap className="w-8 h-8" />;
    case "lowcurrent":
      return <Cpu className="w-8 h-8" />;
    case "gas":
      return <Gauge className="w-8 h-8" />;
    default:
      return <Wind className="w-8 h-8" />;
  }
}
