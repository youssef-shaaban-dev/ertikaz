import { Wind, Flame, Droplet, Zap, Cpu } from "lucide-react";

export interface Feature {
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
}

export interface SubService {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  image: string;
  features: Feature[];
}

export interface Category {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  image: string;
  iconName: "hvac" | "fire" | "plumbing" | "electrical" | "lowcurrent";
  subServices: SubService[];
}

export const categories: Category[] = [
  {
    id: "hvac",
    titleAr: "أنظمة التكييف والتهوية HVAC",
    titleEn: "HVAC & Ventilation Systems",
    descAr: "تصميم وتوريد وتركيب أنظمة التكييف المركزي، التكييف المخفي كونسيلد، وأنظمة VRF الذكية بمعدلات كفاءة طاقة متطورة.",
    descEn: "Design, supply, and installation of Central AC, Concealed Ducted Splits, and smart VRF systems with optimized energy efficiency.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    iconName: "hvac",
    subServices: [
      {
        id: "central_ac",
        titleAr: "أنظمة التكييف المركزي",
        titleEn: "Central Air Conditioning",
        descAr: "حلول تبريد فائقة السعة ومصممة هندسياً للمشاريع الكبيرة والمصانع والأبراج الإدارية والمجمعات التجارية المفتوحة.",
        descEn: "High-capacity cooling solutions custom-engineered for massive projects, factories, commercial towers, and open malls.",
        image: "https://images.unsplash.com/photo-1585338111221-d4041667b9fc?auto=format&fit=crop&w=800&q=80",
        features: [
          {
            titleAr: "تبريد عالي السعة",
            titleEn: "High Capacity Cooling",
            descAr: "أنظمة تدفق ضخمة مصممة للتغلب على درجات الحرارة الصحراوية في المساحات الشاسعة.",
            descEn: "Heavy-duty systems built to conquer desert climates across expansive architectural layouts."
          },
          {
            titleAr: "كفاءة اقتصادية مستدامة",
            titleEn: "Smart Energy Management",
            descAr: "محولات ترددية متطورة توفر ما يصل إلى 40% من استهلاك الطاقة الكهروميكانيكية.",
            descEn: "Advanced inverter and stage controls reducing energy usage by up to 40%."
          },
          {
            titleAr: "هيكل تشغيل شاق متكامل",
            titleEn: "Continuous Duty Housing",
            descAr: "سبائك معالجة حرارياً تضمن عمراً تشغيلياً استثنائياً في الأجواء الرملية والرطبة.",
            descEn: "Thermally treated alloys ensuring outstanding operational life in sandy and humid climates."
          }
        ]
      },
      {
        id: "concealed_ac",
        titleAr: "تكييف جري المخفي الكونسيلد",
        titleEn: "Concealed Ducted Splits",
        descAr: "تصاميم تبريد نحيفة ومخفية تندمج بانسجام كلي داخل السقف المعلق، وتوفر توزيعاً مريحاً وهادئاً للهواء.",
        descEn: "Slim cooling units hidden elegantly inside false ceilings, providing whisper-quiet, indirect air distribution.",
        image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
        features: [
          {
            titleAr: "تكامل ديكوري مثالي",
            titleEn: "Seamless Interior Harmony",
            descAr: "يختفي التكييف تماماً ولا يظهر سوى مخارج الهواء (Grills) التي تنسجم مع أرقى التصاميم المعمارية.",
            descEn: "The unit remains completely invisible, leaving only elegant grills that complement luxury decors."
          },
          {
            titleAr: "تشغيل فائق الهدوء",
            titleEn: "Whisper-Quiet Operation",
            descAr: "عزل صوتي متطور للمراوح الداخلية يمنحك هدوءاً مطلقاً في غرف النوم والمجالس.",
            descEn: "Advanced soundproofing on indoor fan coils ensures absolute peace in bedrooms and lounges."
          },
          {
            titleAr: "توزيع هواء متزن غير مباشر",
            titleEn: "Draft-Free Airflow",
            descAr: "تصميم دكت مرن يوزع الهواء عبر مخارج طولية لتجنب تيار الهواء المباشر على الأفراد.",
            descEn: "Custom ductwork distribution via linear diffusers to prevent direct, chilling drafts."
          }
        ]
      },
      {
        id: "vrf_systems",
        titleAr: "أنظمة دايكن VRF الذكية",
        titleEn: "Intelligent VRF/VRV Systems",
        descAr: "الجيل الأحدث من هندسة المناخ الذكية، يمنحك تحكماً مستقلاً لكل منطقة مع توفير غير مسبوق للكهرباء.",
        descEn: "The cutting-edge of climate engineering, giving you zoned control for each room with unprecedented power savings.",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
        features: [
          {
            titleAr: "تحكم منطقي مستقل لكل غرفة",
            titleEn: "Independent Zoned Comfort",
            descAr: "ضبط درجة حرارة كل مجلس أو غرفة على حدة بما يتناسب مع تفضيلات كل فرد بدقة تامة.",
            descEn: "Adjust the temperature of each zone or bedroom separately to match personal preferences."
          },
          {
            titleAr: "توفير عملاق في فواتير الطاقة",
            titleEn: "Massive Electrical Savings",
            descAr: "تقنيات الإنفرتر المتغيرة ديناميكياً تقلص استهلاك الكهرباء بنسبة تصل إلى 50%.",
            descEn: "Variable inverter compressor speeds that dynamically throttle power, saving up to 50%."
          },
          {
            titleAr: "حماية مساحات الأسطح المعمارية",
            titleEn: "Architectural Roof Optimization",
            descAr: "ربط عشرات الوحدات الداخلية بوحدة خارجية واحدة مدمجة وصامتة للحفاظ على جمالية المبنى.",
            descEn: "Connect dozens of indoor cooling cassettes to a single, compact, and silent outdoor condenser."
          }
        ]
      }
    ]
  },
  {
    id: "fire_protection",
    titleAr: "أنظمة مكافحة الحريق والدفاع المدني",
    titleEn: "Fire Protection & Civil Defense",
    descAr: "حلول أمنية وحماية معتمدة تشمل شبكات الإنذار المبكر الحساسة ورشاشات الإطفاء المائية والغازية للسلامة المطلقة.",
    descEn: "Certified security and life safety solutions covering smart early detection, automated water and clean gas suppression.",
    image: "https://images.unsplash.com/photo-1599740831664-d62f6b3e71d3?auto=format&fit=crop&w=1200&q=80",
    iconName: "fire",
    subServices: [
      {
        id: "firefighting_systems",
        titleAr: "أنظمة إطفاء ومكافحة الحريق",
        titleEn: "Firefighting Systems",
        descAr: "شبكات متكاملة للرش الآلي، وصناديق خراطيم المياه، ومضخات الحريق المعتمدة بالكامل من الدفاع المدني السعودي.",
        descEn: "Integrated automatic sprinkler nets, fire hose cabinets, and UL/FM listed fire pumps compliant with Civil Defense.",
        image: "https://images.unsplash.com/photo-1617470703128-26a0fc9af10f?auto=format&fit=crop&w=800&q=80",
        features: [
          {
            titleAr: "إخماد تلقائي فوري وسريع",
            titleEn: "Automatic Rapid Suppression",
            descAr: "تنشيط فوري للرشاشات بمجرد ارتفاع درجة الحرارة للسيطرة الكاملة على الحريق ومحاصرته.",
            descEn: "Instant sprinkler activation at high temperatures to isolate and extinguish fires in seconds."
          },
          {
            titleAr: "إطفاء غاز نظيف FM200 وآمن",
            titleEn: "FM200 Clean Agent Gas",
            descAr: "إطفاء ذكي بالغاز النظيف مخصص لغرف السيرفرات والأوراق الحساسة دون ترك أي أثر للرطوبة.",
            descEn: "Eco-friendly, residue-free gas suppression engineered for server rooms and critical paper archives."
          },
          {
            titleAr: "اعتماد رسمي من الدفاع المدني",
            titleEn: "SASO & Civil Defense Compliant",
            descAr: "تصميم وتنفيذ هندسي يطابق تماماً كود البناء السعودي ومتطلبات الدفاع المدني.",
            descEn: "All engineering designs and equipment strictly match Saudi Building Codes and civil defense guidelines."
          }
        ]
      },
      {
        id: "fire_detection_systems",
        titleAr: "أنظمة إنذار وكشف الحريق",
        titleEn: "Fire Detection Systems",
        descAr: "لوحات تحكم ذكية مرتبطة بكواشف دخان وحرارية فائقة الحساسية مع أنظمة نداء وإخلاء صوتي تلقائي.",
        descEn: "Smart control panels linked to highly sensitive smoke and heat detectors with automated voice evacuation alarms.",
        image: "https://images.unsplash.com/photo-1606201416391-7681cbe1ca4f?auto=format&fit=crop&w=800&q=80",
        features: [
          {
            titleAr: "كشف مبكر عالي الحساسية",
            titleEn: "Early Threat Detection",
            descAr: "كواشف ذكية تستشعر جزيئات الدخان الدقيقة والحرارة في اللحظات الأولى من نشوب الحريق.",
            descEn: "Smart multi-sensors that detect micro-smoke particles and thermal spikes at the very onset."
          },
          {
            titleAr: "ربط تقني وميكانيكي متكامل",
            titleEn: "Smart Interlocking Alarm",
            descAr: "ربط لوحة الإنذار بمراوح سحب الدخان، المصاعد، ونظام التكييف لقطع الأكسجين وحماية الممرات.",
            descEn: "Connecting the main panel with smoke extractors, elevators, and HVAC to choke oxygen in exit routes."
          },
          {
            titleAr: "إخلاء صوتي وتوجيه تلقائي",
            titleEn: "Voice Evacuation Broadcast",
            descAr: "إطلاق تنبيهات وإرشادات صوتية مبرمجة مسبقاً توجه الأفراد بوضوح لمخارج الطوارئ الآمنة.",
            descEn: "Clear, pre-programmed vocal instructions broadcasting to direct occupants safely to emergency exits."
          }
        ]
      },
      {
        id: "security_systems",
        titleAr: "الأنظمة الأمنية وكاميرات المراقبة",
        titleEn: "Security Systems",
        descAr: "شبكات مراقبة ذكية عالية الدقة، أنظمة تحكم بالدخول، وحلول تيار منخفض متكاملة لسلامة المنشآت.",
        descEn: "High-definition smart CCTV surveillance grids, keycard access control, and unified low-current integrations.",
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
        features: [
          {
            titleAr: "مراقبة ذكية فائقة الدقة",
            titleEn: "Ultra-HD Smart Cameras",
            descAr: "كاميرات بدقة 4K مزودة برؤية ليلية ملونة فائقة وتحليل ذكي للذكاء الاصطناعي على الجوال.",
            descEn: "4K smart cameras with full-color night vision and real-time AI analytics routed to mobile devices."
          },
          {
            titleAr: "تحكم ذكي في العبور والدخول",
            titleEn: "Access Control Management",
            descAr: "بوابات إلكترونية وأنظمة بصمة وتعرف على الوجوه لتنظيم وإدارة حركة الأفراد والزوار.",
            descEn: "Biometric and face-recognition terminals controlling secure entry and logging foot traffic."
          },
          {
            titleAr: "تكامل التيار المنخفض الموحد",
            titleEn: "Unified Low-Current Grid",
            descAr: "ربط الإنتركم، الحواجز الأمنية، وشبكات البيانات تحت مظلة هندسية واحدة لسهولة التحكم.",
            descEn: "Integrating intercoms, vehicle barriers, and IT lines into one unified central command panel."
          }
        ]
      }
    ]
  },
  {
    id: "plumbing",
    titleAr: "الأعمال المائية والشبكات الصحية",
    titleEn: "Plumbing & Sanitary Works",
    descAr: "تصميم وتنفيذ شبكات المياه والصرف الصحي وتوريد المضخات وحلول معالجة وفلترة المياه بأحدث التقنيات.",
    descEn: "Design and installation of high-pressure water grids, professional drainage networks, and state-of-the-art filtration units.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    iconName: "plumbing",
    subServices: [
      {
        id: "water_supply",
        titleAr: "شبكات تغذية المياه والمضخات",
        titleEn: "Water Supply Networks",
        descAr: "تمديد شبكات مياه الشرب، ومجموعات المضخات الذكية لتعزيز الضغط، وخزانات المياه ذات العزل الحراري المتقدم.",
        descEn: "Routing drinking water pipelines, installing smart booster pump stations, and setting up thermally insulated tanks.",
        image: "https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=800&q=80",
        features: [
          {
            titleAr: "مضخات ضغط مياه متوازن",
            titleEn: "Intelligent Booster Pumps",
            descAr: "مجموعات مضخات ذكية متغيرة السرعة تضمن ضغطاً ممتازاً وثابتاً في أعلى الطوابق.",
            descEn: "Variable speed booster pumps that ensure perfect and balanced water pressure on upper floors."
          },
          {
            titleAr: "أنابيب PPR صحية 100%",
            titleEn: "Non-Toxic PPR/PEX Piping",
            descAr: "تمديدات أنابيب مقاومة للحرارة العالية وخالية من الصدأ والترسبات لضمان مياه نقية وصحية.",
            descEn: "Rust-free, food-grade thermal pipelines that prevent scale build-up and preserve water purity."
          },
          {
            titleAr: "عزل وتأمين الخزانات حرارياً",
            titleEn: "High-Grade Tank Insulation",
            descAr: "عزل كامل لخزانات المياه لحمايتها من أشعة الشمس المباشرة ونمو البكتيريا صيفاً.",
            descEn: "Complete thermal insulation of storage tanks to prevent bacterial growth and solar heating."
          }
        ]
      },
      {
        id: "drainage_systems",
        titleAr: "شبكات الصرف وتصريف السيول",
        titleEn: "Drainage & Sewerage Systems",
        descAr: "تأسيس شبكات الصرف الصحي الداخلي والخارجي، مصائد شحوم للمطاعم والمطابخ وتصريف مياه الأمطار بدقة عالية.",
        descEn: "Expert routing of gravity drainage pipelines, heavy-duty grease traps for kitchens, and high-efficiency storm water drainage.",
        image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=800&q=80",
        features: [
          {
            titleAr: "حسابات ميول هندسية صارمة",
            titleEn: "Gravity Slope Engineering",
            descAr: "حسابات دقيقة للميول لضمان تدفق ذاتي وسريع للمياه دون تراكم أو انسدادات.",
            descEn: "Precise slope routing calculations to guarantee continuous self-cleaning flow and zero clogs."
          },
          {
            titleAr: "مصائد شحوم وزيوت صناعية",
            titleEn: "Commercial Grease Interceptors",
            descAr: "حلول احترافية لفصل الدهون والزيوت في المطابخ الكبرى لحماية التمديدات العامة من الانسداد.",
            descEn: "Professional grade grease traps separating oils in large kitchens to keep public pipelines free."
          },
          {
            titleAr: "أنظمة تهوية متطورة لكتم الروائح",
            titleEn: "Odorless Venting Systems",
            descAr: "استخدام صمامات تهوية ومصائد مياه متقدمة تمنع تماماً تسرب الروائح الكريهة إلى داخل الفلل.",
            descEn: "Utilizing advanced mechanical vents and water traps that permanently lock away sewer gases."
          }
        ]
      },
      {
        id: "water_treatment",
        titleAr: "محطات تصفية ومعالجة المياه",
        titleEn: "Water Treatment & Softening",
        descAr: "توريد وتركيب أنظمة الفلترة المركزية متعددة المراحل وفلاتر الرمل وأجهزة إزالة عسر الكالسيوم.",
        descEn: "Supply and installation of central multi-stage sand filters, carbon purifiers, and water softening units.",
        image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800&q=80",
        features: [
          {
            titleAr: "تصفية كربونية مركزية",
            titleEn: "Main Entry Carbon Filters",
            descAr: "إزالة الأتربة، الرواسب الدقيقة، الكلور، والروائح من المياه المغذية للمبنى بالكامل.",
            descEn: "Removing sand, fine sediments, chlorine, and odors from the main water line of the building."
          },
          {
            titleAr: "أجهزة تيسير المياه (منع الأملاح)",
            titleEn: "Scale-Prevention Softeners",
            descAr: "حماية السخانات وخلاطات المياه وشبكة التدفئة من الترسبات الكلسية وإطالة عمر الأجهزة.",
            descEn: "Protecting water heaters, mixers, and pipe networks from lime-scale build-up, extending system lifespan."
          },
          {
            titleAr: "تعقيم فائق بالأشعة UV",
            titleEn: "Ultraviolet Disinfection",
            descAr: "قضاء تام على 99.9% من البكتيريا والجراثيم بالمياه دون استخدام مواد كيميائية ضارة.",
            descEn: "Destroying 99.9% of waterborne bacteria and microbes without adding any harmful chemicals."
          }
        ]
      }
    ]
  },
  {
    id: "electrical",
    titleAr: "الأعمال الكهربائية والإنارة",
    titleEn: "Electrical & Lighting Works",
    descAr: "توفير حلول كهربائية متكاملة تشمل لوحات توزيع الطاقة، والأنظمة الكهربائية الخاصة بالإنارة، والمعدات الكهربائية المتطورة.",
    descEn: "Providing comprehensive electrical solutions including distribution boards, specialized lighting systems, and advanced power gear.",
    image: "https://images.unsplash.com/photo-1621905252507-b354bcadc014?auto=format&fit=crop&w=1200&q=80",
    iconName: "electrical",
    subServices: [
      {
        id: "power_distribution",
        titleAr: "لوحات وأنظمة توزيع الطاقة",
        titleEn: "Power Distribution Systems",
        descAr: "تركيب واختبار لوحات التوزيع الرئيسية والفرعية المعتمدة مع كابلات التحميل العالي والتأريض الآمن.",
        descEn: "Installation and testing of main & sub-distribution boards with high-load cabling and secure grounding.",
        image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80",
        features: [
          {
            titleAr: "توزيع أحمال متزن",
            titleEn: "Balanced Load Distribution",
            descAr: "توزيع هندسي دقيق للأحمال الكهربائية لمنع انقطاع التيار وحماية الكابلات من الحرارة الزائدة.",
            descEn: "Precise engineering design to balance loads, preventing outages and protecting main cables."
          },
          {
            titleAr: "لوحات معتمدة SASO",
            titleEn: "SASO Certified Panels",
            descAr: "استخدام لوحات وقواطع كهربائية من شركات عالمية معتمدة ومطابقة للمواصفات السعودية والمحلية.",
            descEn: "Utilizing global certified breakers and panels matching strict local regulations."
          },
          {
            titleAr: "أنظمة تأريض آمنة",
            titleEn: "Advanced Earthing Grids",
            descAr: "تأسيس شبكات تأريض فائقة الحماية لمنع التسرب الكهربائي وتفريغ الصواعق بأمان.",
            descEn: "Installing protective grounding grids ensuring safe discharge and absolute personal safety."
          }
        ]
      },
      {
        id: "smart_lighting",
        titleAr: "تصميم وتوريد شبكات الإنارة",
        titleEn: "Lighting Design & Networks",
        descAr: "تركيب أنظمة الإضاءة الذكية والإنارة المخفية والخارجية المتطورة الموفرة للطاقة.",
        descEn: "Installation of energy-efficient architectural lighting, LED tracks, and intelligent external floodlighting.",
        image: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&w=800&q=80",
        features: [
          {
            titleAr: "إنارة جمالية موفرة LED",
            titleEn: "Aesthetic LED Lighting",
            descAr: "توزيع إنارة مدروس يسلط الضوء على جماليات المباني والديكور باستهلاك طاقة أدنى.",
            descEn: "Strategically distributed LED setups that enhance visual aesthetics with minimum watts."
          },
          {
            titleAr: "أنظمة تحكم خافت Dimmers",
            titleEn: "Dimmer Control Grids",
            descAr: "تركيب وحدات تحكم رقمية تتيح ضبط شدة ودرجة حرارة الضوء بلمسة واحدة.",
            descEn: "Deploying digital dimmer modules letting occupants adjust brightness instantly."
          }
        ]
      }
    ]
  },
  {
    id: "low_current",
    titleAr: "أعمال التيار الخفيف والأتمتة",
    titleEn: "Low Current & Smart Systems",
    descAr: "تصميم وتنفيذ أنظمة التحكم بالمباني الذكية، كاميرات المراقبة CCTV، أنظمة الدخول والتحكم، بالإضافة إلى تحسين الاتصالات.",
    descEn: "Design and build of smart home control, CCTV networks, biometric access control, and optimized data infrastructures.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
    iconName: "lowcurrent",
    subServices: [
      {
        id: "cctv_monitoring",
        titleAr: "كاميرات المراقبة CCTV",
        titleEn: "IP CCTV & Surveillance",
        descAr: "تركيب أنظمة المراقبة عالية الدقة IP Cameras والربط بالشبكة للوصول عن بعد.",
        descEn: "Deployment of Ultra HD IP camera systems connected to centralized cloud grids for remote monitoring.",
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
        features: [
          {
            titleAr: "رؤية ليلية ذكية",
            titleEn: "Smart Night Vision",
            descAr: "تصوير ملون واضح تماماً حتى في حالات الإظلام التام بفضل مستشعرات StarLight.",
            descEn: "Color recording even in pitch black environments utilizing high-grade sensors."
          }
        ]
      },
      {
        id: "smart_buildings",
        titleAr: "أنظمة التحكم والمباني الذكية",
        titleEn: "Smart Building Automation",
        descAr: "ربط كامل لمكونات المنزل أو المنشأة بشبكة واحدة تتيح التحكم الآلي والمناخي من الجوال.",
        descEn: "Unified automated grids connecting household electronics, climate, and shading for mobile management.",
        image: "https://images.unsplash.com/photo-1585909693682-7a8c37b941d1?auto=format&fit=crop&w=800&q=80",
        features: [
          {
            titleAr: "أتمتة التكييف والإضاءة",
            titleEn: "AC & Light Automation",
            descAr: "إطفاء وتشغيل آلي للكهرباء حسب مستشعرات الحركة والحضور البشري.",
            descEn: "Occupancy sensing for intelligent automated on/off states for lights and AC."
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
    default:
      return <Wind className="w-8 h-8" />;
  }
}
