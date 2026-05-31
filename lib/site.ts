const freshaBookingUrl =
  "https://www.fresha.com/a/grayce-medical-aesthetic-clinic-manila-654-nuestra-sra-de-lourdes-wqxulh6r";

export const bookingHref =
  process.env.NEXT_PUBLIC_FRESHA_BOOKING_URL?.trim() || freshaBookingUrl;

export const isExternalBooking = /^https?:\/\//.test(bookingHref);

export const brand = {
  name: "Grayce Medical Aesthetic Clinic",
  short: "Grayce",
  tagline: "Medical aesthetics, delivered with grace.",
  colors: {
    almond: "#ffeedc",
    taupe: "#947f64",
    green: "#4b594c",
  },
  logos: {
    lockup: "/assets/grayce/brand/logo-full-lockup.png",
    lockupLight: "/assets/grayce/brand/logo-full-lockup-light.png",
    navMark: "/assets/grayce/brand/nav-monogram.png",
    wordmark: "/assets/grayce/brand/logo-wordmark.png",
    monogram: "/assets/grayce/brand/monogram-transparent.png",
  },
};

export const clinic = {
  name: brand.name,
  doctor: {
    name: "Dr. Mary Grace Tsai-Braga",
    displayName: "Dr. Mary Grace Tsai-Braga",
    title: "Medical Aesthetic Physician",
    bio: [
      "Grayce Medical Aesthetic Clinic is headed by Dr. Mary Grace Tsai-Braga, a board-certified physician since 2018, professionally trained in aesthetic medicine by the Aesthetic Medicine Institute and a holder of a Master’s degree in Public Health.",
      "Beyond aesthetic medicine, Dr. Grace is also an active clinical researcher dedicated to the advancement of innovative disease therapies and vaccines. Guided by her philosophy of balance, she integrates the discipline of medicine and research with her passion for health, aesthetics, and holistic body wellness. Her approach is firmly rooted in evidence-based practice, ensuring safe, personalized, and scientifically grounded aesthetic care.",
    ],
    credentials: [
      {
        label: "Board-Certified Physician",
        detail: "Board-certified physician since 2018.",
      },
      {
        label: "Aesthetic Medicine",
        detail: "Professionally trained by the Aesthetic Medicine Institute.",
      },
      {
        label: "Master’s Degree",
        detail: "Holder of a Master’s degree in Public Health.",
      },
      {
        label: "Clinical Research",
        detail:
          "Active clinical researcher dedicated to innovative disease therapies and vaccines.",
      },
    ],
  },
  contact: {
    phones: ["+639455564086", "+639681186488"],
    email: "graycemedicalaesthetics@gmail.com",
    instagram: "@graycemedicalaesthetics",
    address: {
      line1: "GF Asher Bldg.",
      line2: "654 Nuestra Sra. De Lourdes Ave.",
      line3: "San Antonio Valley 1, Parañaque City",
      country: "Metro Manila, Philippines",
    },
    hours: [
      { day: "Tuesday - Friday", time: "10:00 AM - 7:00 PM" },
      { day: "Saturday", time: "10:00 AM - 5:00 PM" },
      { day: "Sunday & Monday", time: "Closed" },
    ],
  },
};

export const photos = {
  serumDrop: "/assets/grayce/photos/serum-drop.jpg",
  rfTreatment: "/assets/grayce/photos/procare-rf-treatment.jpg",
  deviceDisplay: "/assets/grayce/photos/treatment-device-display.jpg",
  skinLaser: "/assets/grayce/photos/skin-laser-closeup.jpg",
  rfDevice: "/assets/grayce/photos/procare-rf-device.jpg",
  coolingLaser: "/assets/grayce/photos/cooling-laser-treatment.jpg",
  clinicLounge: "/assets/grayce/photos/clinic-lounge.jpg",
  reception: "/assets/grayce/photos/clinic-reception-mockup.jpg",
  coolingCloseup: "/assets/grayce/photos/cooling-procedure-closeup.jpg",
  doctorPortrait: "/assets/grayce/photos/dr-mary-grace-braga.jpg",
  facialHandpiece: "/assets/grayce/photos/facial-handpiece.jpg",
  hydrafacialHandpiece: "/assets/grayce/photos/hydrafacial-handpiece.jpg",
  hydrafacialDevice: "/assets/grayce/photos/hydrafacial-device.jpg",
  legs: "/assets/grayce/photos/laser-hair-reduction-legs.jpg",
  skinPortrait: "/assets/grayce/photos/skin-glow-portrait.jpg",
  diversePortrait: "/assets/grayce/photos/diverse-skin-portrait.jpg",
  lips: "/assets/grayce/photos/lip-filler-detail.jpg",
  complexions: "/assets/grayce/photos/complexions-group.jpg",
  brightSkin: "/assets/grayce/photos/bright-skin-model.jpg",
  neck: "/assets/grayce/photos/neck-decolletage.jpg",
};

export const serviceGroups = [
  {
    title: "Facials and Peels",
    image: photos.hydrafacialHandpiece,
    summary:
      "Facials, light therapy, and peels for cleansing, glow, texture, and skin refresh.",
    detail:
      "Facials and peels are selected after skin assessment, with protocols adjusted for skin type, sensitivity, and treatment goals.",
    subcategories: [
      {
        title: "Facials",
        image: photos.hydrafacialDevice,
        text:
          "Facial protocols support cleansing, exfoliation, hydration, and targeted skin refresh based on assessment.",
        items: [
          {
            name: "Collagen Facial",
            description:
              "A replenishing facial for skin that looks tired, dry, or depleted. It focuses on a softer, plumper-looking finish.",
          },
          {
            name: "Acne Clearing Facial",
            description:
              "A clarifying facial for congestion-prone skin and visible breakouts. Steps are selected to support clearer-looking pores.",
          },
          {
            name: "Brightening Facial",
            description:
              "A glow-focused facial for dullness and uneven-looking tone. It is designed as a gentle visible refresh.",
          },
          {
            name: "Diamond Facial",
            description:
              "An exfoliating facial that helps smooth rough surface texture. It leaves skin feeling polished and refreshed.",
          },
          {
            name: "Hydra Facial",
            description:
              "A hydration-centered facial with cleansing, exfoliation, and extraction support. It is suited for a fresh, dewy finish.",
          },
          {
            name: "Vamp Facial",
            description:
              "A rejuvenating facial option for skin renewal support. Suitability and pairing with other treatments are confirmed first.",
          },
        ],
      },
      {
        title: "Light Therapy (with Celluma Pro)",
        image: photos.deviceDisplay,
        text:
          "Celluma Pro light therapy is a non-invasive add-on used to support calming, recovery, and overall skin wellness.",
      },
      {
        title: "Peels",
        image: photos.serumDrop,
        text:
          "Peels are chosen conservatively based on skin tolerance, concern, and expected downtime.",
        items: [
          {
            name: "Pumpkin Peel",
            description:
              "An enzyme-based peel option for a gentle glow and surface-smoothing refresh. It is often chosen for dull or tired-looking skin.",
          },
          {
            name: "Glycolic Acid Peel",
            description:
              "An alpha-hydroxy acid peel for dullness, rough texture, and uneven-looking tone. Strength and timing are matched to skin tolerance.",
          },
        ],
      },
    ],
  },
  {
    title: "Hair Removal",
    image: photos.legs,
    summary:
      "Diode Laser Hair Reduction for selected facial and body areas, planned as progressive sessions.",
    detail:
      "Hair removal plans are based on treatment area, hair type, skin type, and the number of sessions likely needed.",
    subcategories: [
      {
        title: "Diode Laser Hair Reduction",
        image: photos.legs,
        text:
          "Diode laser targets active hair follicles over a series of sessions to reduce unwanted hair growth.",
        items: [
          {
            name: "Upper Lip/ Chin",
            description:
              "Focused treatment for common facial hair areas. Sessions are planned carefully around skin sensitivity.",
          },
          {
            name: "Underarms",
            description:
              "A popular area for progressive hair reduction. It can help reduce daily shaving needs over time.",
          },
          {
            name: "Arms",
            description:
              "Targets unwanted arm hair with area coverage discussed before treatment. Session spacing is planned for gradual reduction.",
          },
          {
            name: "Legs",
            description:
              "Treats larger lower-body areas for smoother-looking skin over a series. The plan depends on hair density and coverage.",
          },
          {
            name: "Bikini",
            description:
              "Focused hair reduction for the bikini area. Comfort, boundaries, and aftercare are reviewed before treatment.",
          },
        ],
      },
    ],
  },
  {
    title: "Skin Resurfacing",
    image: photos.coolingLaser,
    summary:
      "Resurfacing and removal procedures for texture, scarring, benign raised lesions, and skin rejuvenation.",
    detail:
      "Skin resurfacing services are physician-guided and matched to skin condition, comfort, downtime, and aftercare needs.",
    subcategories: [
      {
        title: "Skin Resurfacing",
        image: photos.coolingLaser,
        text:
          "Resurfacing options focus on improving visible texture and skin quality with a plan suited to the concern.",
        items: [
          {
            name: "Skin Resurfacing for textured and scarred skin",
            description:
              "A treatment plan for rough texture, visible acne scarring, and uneven skin quality. Downtime and aftercare are discussed before treatment.",
          },
          {
            name: "Warts, Syringoma, Sebaceous Gland Hyperplasia and Skin Tags removal",
            description:
              "Removal-focused care for selected benign raised skin lesions after assessment. The method depends on lesion type, area, and skin response.",
          },
          {
            name: "Diode Laser No Downtime Skin Rejuvenation",
            description:
              "A light-based refresh option for improving overall skin appearance with minimal planned downtime. It is selected when a gentler approach is preferred.",
          },
        ],
      },
    ],
  },
  {
    title: "Body Sculpting",
    image: photos.rfTreatment,
    summary:
      "Body sculpting treatments for selected face, neck, arm, abdomen, back, thigh, and leg areas.",
    detail:
      "Body Sculpting is planned around the target area, skin firmness, contour goals, and realistic session sequencing.",
    subcategories: [
      {
        title: "Body Sculpting",
        image: photos.rfTreatment,
        text:
          "Body sculpting supports contouring and firming goals in selected areas after consultation.",
        items: [
          {
            name: "Face/Neck",
            description:
              "Focused contouring support for the lower face and neck area. It is planned around skin laxity and facial balance.",
          },
          {
            name: "Arms",
            description:
              "Targets arm contour concerns and firmness goals. A series may be recommended depending on the area.",
          },
          {
            name: "Abdomen",
            description:
              "Supports abdominal contouring goals in suitable candidates. Treatment planning considers body goals and realistic progress.",
          },
          {
            name: "Back",
            description:
              "Targets selected back areas where contouring support is desired. Area mapping is confirmed before treatment.",
          },
          {
            name: "Front Thighs and Legs",
            description:
              "Focused support for the front thigh and leg areas. Sessions are planned around contour goals and comfort.",
          },
          {
            name: "Back Thighs and Legs",
            description:
              "Targets the back thigh and leg areas for contouring support. Treatment expectations are reviewed during consultation.",
          },
        ],
      },
    ],
  },
  {
    title: "Doctor's Procedures",
    image: photos.lips,
    summary:
      "Doctor-led injectables and procedures for facial refinement, skin quality, scars, veins, and hair growth.",
    detail:
      "Doctor's Procedures are consultation-led and performed with attention to anatomy, suitability, and conservative treatment planning.",
    subcategories: [
      {
        title: "A. Botox",
        image: photos.complexions,
        text:
          "Botox procedures soften selected muscle activity while preserving natural-looking movement and balance.",
        sections: [
          {
            title: "Face and Neck",
            items: [
              {
                name: "Forehead Lines",
                description:
                  "Helps soften horizontal forehead movement lines. Brow position and natural expression are considered.",
              },
              {
                name: "Glabellar Lines “Elevenses”",
                description:
                  "Targets the frown lines between the brows. The goal is a more relaxed-looking expression.",
              },
              {
                name: "Lateral Canthal Lines “Crow’s Feet”",
                description:
                  "Softens smile lines at the outer eye corners. Treatment is balanced to keep expression natural.",
              },
              {
                name: "Lower Eyelid “Jelly Rolls”",
                description:
                  "Addresses selected lower-eyelid muscle bunching. Suitability is assessed carefully because the area is delicate.",
              },
              {
                name: "Nasal Lines “Bunny Lines”",
                description:
                  "Targets scrunch lines that appear along the nose with facial movement. Dosing is planned conservatively.",
              },
              {
                name: "Masseter Hypertrophy “Jawtox”",
                description:
                  "Relaxes overactive masseter muscles in suitable patients. It may support jawline slimming and tension reduction goals.",
              },
              {
                name: "Lower Face/Neck “Nefertiti”",
                description:
                  "Targets selected lower-face and neck pull. The plan supports a more refined-looking jaw and neck contour.",
              },
              {
                name: "Platysmal (Neck) Bands",
                description:
                  "Softens prominent vertical neck bands in suitable patients. Neck anatomy and movement are reviewed first.",
              },
            ],
          },
          {
            title: "Body",
            items: [
              {
                name: "Underarms/ Hands/ Feet “Sweatox”",
                description:
                  "Targets excessive sweating in selected areas. Treatment area and dosing are confirmed by the doctor.",
              },
              {
                name: "“Traptox”",
                description:
                  "Targets the trapezius area when muscle bulk or tension is a concern. Suitability depends on anatomy and goals.",
              },
              {
                name: "“Barbie Arms”",
                description:
                  "A muscle-relaxing body contouring approach for selected arm concerns. It is planned only after assessment.",
              },
              {
                name: "“Barbie Legs”",
                description:
                  "A muscle-relaxing body contouring option for selected leg concerns. Treatment is matched to muscle pattern and goals.",
              },
            ],
          },
        ],
      },
      {
        title: "B. Dermal Fillers",
        image: photos.lips,
        text:
          "Dermal filler plans restore or refine volume and contour using conservative, anatomy-led placement.",
        items: [
          {
            name: "Temple",
            description:
              "Supports temple hollowing and upper-face balance. Placement is planned carefully because the area is anatomically sensitive.",
          },
          {
            name: "Nasolabial",
            description:
              "Softens the folds that run from the nose toward the mouth. Treatment may involve direct support or adjacent facial balancing.",
          },
          {
            name: "Jaw",
            description:
              "Adds definition or structure to selected jawline areas. The plan is based on facial proportion and natural contour.",
          },
          {
            name: "Lips",
            description:
              "Supports lip shape, hydration, or volume in a measured way. Proportion and natural movement stay central.",
          },
          {
            name: "Chin",
            description:
              "Refines chin projection or balance in suitable patients. It can support overall facial harmony when planned conservatively.",
          },
        ],
      },
      {
        title: "C. Lipodissolve Mesotherapy",
        image: photos.neck,
        text:
          "Lipodissolve Mesotherapy targets selected small fat deposits, with session count and suitability confirmed after consultation.",
        items: [
          {
            name: "Jowls",
            description:
              "Targets localized fullness along the lower face. It is considered alongside skin laxity and facial structure.",
          },
          {
            name: "Double Chin",
            description:
              "Targets submental fullness beneath the chin. Suitability depends on fat distribution and skin firmness.",
          },
          {
            name: "“Bra Fat”",
            description:
              "Targets localized fullness around the upper back or side-of-chest area. Area mapping is reviewed before treatment.",
          },
          {
            name: "Arms",
            description:
              "Targets selected arm fullness in suitable patients. Treatment expectations and session spacing are discussed first.",
          },
          {
            name: "Abdomen",
            description:
              "Targets localized abdominal fullness. It is not a weight-loss treatment and is planned for contour support.",
          },
          {
            name: "Back",
            description:
              "Targets selected back fullness after area assessment. A series may be needed for visible contour change.",
          },
          {
            name: "Thighs",
            description:
              "Targets localized thigh fullness in suitable areas. Planning considers comfort, symmetry, and realistic progress.",
          },
        ],
      },
      {
        title: "D. Threads",
        image: photos.facialHandpiece,
        text:
          "Thread procedures provide non-surgical lift or definition support for selected facial areas.",
        items: [
          {
            name: "HIKO Nose Lift (Non-surgical Rhinoplasty)",
            description:
              "A thread-based nose refinement option for selected bridge or tip concerns. Suitability depends on anatomy and desired change.",
          },
          {
            name: "PDO / COG Thread Lift",
            description:
              "A thread-lifting procedure for selected sagging or contour concerns. The plan depends on tissue quality and lift goals.",
          },
        ],
      },
      {
        title: "E. Skin Boosters",
        image: photos.serumDrop,
        text:
          "Skin boosters focus on skin quality, hydration, glow, and repair support rather than major shape change.",
        items: [
          {
            name: "Collagen Charger",
            description:
              "A collagen-supporting booster for improving the look of skin firmness and quality. It is selected based on skin goals.",
          },
          {
            name: "Rejuran I",
            description:
              "A skin-quality treatment often considered for delicate areas. The doctor confirms whether it suits the treatment zone.",
          },
          {
            name: "Rejuran Healer",
            description:
              "A regenerative skin-quality treatment for repair support and overall texture improvement. It is usually planned as a course.",
          },
          {
            name: "Rejuran Synergy (no-needle “glass skin”)",
            description:
              "A glow-focused skin-quality protocol for smoother, more hydrated-looking skin. It is selected when a no-needle approach is preferred.",
          },
          {
            name: "Luhilo Snow",
            description:
              "A booster option for brightening and hydrated-looking skin. It is chosen according to skin tone goals and tolerance.",
          },
          {
            name: "Exosomes (cellular regeneration)",
            description:
              "A regenerative support treatment used for skin repair and renewal goals. Pairing and timing are set after assessment.",
          },
        ],
      },
      {
        title: "F. Scar Treatments",
        image: photos.skinLaser,
        text:
          "Scar treatments are selected based on scar type, depth, texture, and whether the scar is raised or indented.",
        items: [
          {
            name: "Intralesional Corticosteroids (for keloid scars)",
            description:
              "A doctor-administered injection used for selected raised or keloid scars. The goal is to help soften and flatten the scar over time.",
          },
          {
            name: "Subcision & PRP (for acne scars)",
            description:
              "Subcision releases tethered acne scars, while PRP supports the healing response. It is planned for suitable depressed scars.",
          },
        ],
      },
      {
        title: "G. Sclerotherapy",
        image: photos.neck,
        text:
          "Sclerotherapy is a doctor-led vein treatment for selected visible leg veins after assessment.",
        items: [
          {
            name: "Legs - spider, reticular and varicose veins",
            description:
              "Targets suitable visible leg veins using injection treatment. Vein type, size, and medical history are reviewed first.",
          },
        ],
      },
      {
        title: "H. Hair Growth",
        image: photos.skinPortrait,
        text:
          "Hair growth treatments support scalp and hair wellness in suitable candidates after consultation.",
        items: [
          {
            name: "PRP",
            description:
              "Uses platelet-rich plasma from the patient’s own blood to support scalp and hair health. A series may be recommended.",
          },
          {
            name: "Exosomes",
            description:
              "A regenerative scalp support option for hair wellness goals. It is selected after reviewing hair and scalp condition.",
          },
          {
            name: "Hair Grow Rejuvenating System (PDT Light device",
            description:
              "A light-device treatment used to support scalp care and hair wellness. It may be paired with other hair-growth protocols.",
          },
        ],
      },
    ],
  },
];

export type SocialPost = {
  id: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  image: string;
  caption: string;
  timestamp: string;
  permalink: string;
};

export const instagramPosts: SocialPost[] = [
  {
    id: "ig_mock_001",
    mediaType: "CAROUSEL_ALBUM",
    image: photos.clinicLounge,
    caption:
      "A quiet look inside the clinic: measured consultations, thoughtful treatment planning, and skin care that starts with listening.",
    timestamp: "2026-05-18",
    permalink: "https://instagram.com/graycemedicalaesthetics",
  },
  {
    id: "ig_mock_002",
    mediaType: "IMAGE",
    image: photos.hydrafacialHandpiece,
    caption:
      "Hydration-focused facial care for a fresh, healthy-looking glow. Protocols are selected after skin assessment.",
    timestamp: "2026-05-12",
    permalink: "https://instagram.com/graycemedicalaesthetics",
  },
  {
    id: "ig_mock_003",
    mediaType: "VIDEO",
    image: photos.coolingLaser,
    caption:
      "Laser sessions are planned around comfort, suitability, and gradual progress, never one-size-fits-all.",
    timestamp: "2026-05-06",
    permalink: "https://instagram.com/graycemedicalaesthetics",
  },
  {
    id: "ig_mock_004",
    mediaType: "IMAGE",
    image: photos.rfTreatment,
    caption:
      "Radiofrequency treatment moments from the room: warm, focused, and guided by a careful clinical eye.",
    timestamp: "2026-04-29",
    permalink: "https://instagram.com/graycemedicalaesthetics",
  },
  {
    id: "ig_mock_005",
    mediaType: "CAROUSEL_ALBUM",
    image: photos.brightSkin,
    caption:
      "Skin health is cumulative. The best plans balance in-clinic treatment with habits that can be sustained.",
    timestamp: "2026-04-21",
    permalink: "https://instagram.com/graycemedicalaesthetics",
  },
  {
    id: "ig_mock_006",
    mediaType: "IMAGE",
    image: photos.diversePortrait,
    caption:
      "A soft skin-glow moment from the treatment menu: natural-looking refinement, gradual progress, and care that still feels like you.",
    timestamp: "2026-04-14",
    permalink: "https://instagram.com/graycemedicalaesthetics",
  },
];

export type Testimonial = {
  id: string;
  reviewer: string;
  rating: number;
  date: string;
  text: string;
  sourceUrl: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "review_mock_001",
    reviewer: "Alyssa M.",
    rating: 5,
    date: "2026-05-03",
    text:
      "The consultation felt very thorough and calm. Dr. Braga explained the options clearly and recommended a plan that made sense for my skin.",
    sourceUrl: "https://www.google.com/search?q=Grayce+Medical+Aesthetic+Clinic+reviews",
  },
  {
    id: "review_mock_002",
    reviewer: "Camille R.",
    rating: 5,
    date: "2026-04-17",
    text:
      "Beautiful clinic and very kind staff. I appreciated that the treatment was not rushed and every step was explained before starting.",
    sourceUrl: "https://www.google.com/search?q=Grayce+Medical+Aesthetic+Clinic+reviews",
  },
  {
    id: "review_mock_003",
    reviewer: "Nina P.",
    rating: 5,
    date: "2026-03-28",
    text:
      "My skin felt refreshed after the session, and the aftercare guidance was practical. It felt professional from booking to follow-up.",
    sourceUrl: "https://www.google.com/search?q=Grayce+Medical+Aesthetic+Clinic+reviews",
  },
];

export const mapQuery = encodeURIComponent(
  "GF Asher Bldg 654 Nuestra Sra. De Lourdes Ave San Antonio Valley 1 Paranaque City"
);
