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
    wordmark: "/assets/grayce/brand/logo-wordmark.png",
    monogram: "/assets/grayce/brand/monogram-transparent.png",
  },
};

export const clinic = {
  name: brand.name,
  doctor: {
    name: "Dr. Mary Grace Tsai Braga",
    displayName: "Dr. Mary Grace Braga",
    title: "Medical Aesthetic Physician",
    bio:
      "Dr. Mary Grace Braga brings a physician-led, evidence-based approach to skin health and aesthetic treatments in Parañaque. Her practice combines careful consultation, medical training, and refined technique so every plan feels personal, measured, and safe.",
    credentials: [
      {
        label: "Doctor of Medicine",
        detail:
          "University of Perpetual Help DALTA Jonelta Foundation School of Medicine, 2016",
      },
      {
        label: "Master in Public Health",
        detail: "College of Public Health, University of the Philippines Manila, 2024",
      },
      {
        label: "PRC Licensed Physician",
        detail: "Physician Licensure Examination, March 2018",
      },
      {
        label: "Aesthetic Medicine",
        detail: "AMIPI Level I and II Certificate Courses, 2025",
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
    title: "Skin Health Facials",
    image: photos.hydrafacialHandpiece,
    summary:
      "Collagen, acne-clearing, brightening, diamond, hydra, and vamp facial protocols selected after skin assessment.",
  },
  {
    title: "Peels & Resurfacing",
    image: photos.serumDrop,
    summary:
      "Glycolic and salicylic-based peels, CO2 fractional laser, and texture-focused plans for blemishes, pores, and acne scarring.",
  },
  {
    title: "Laser Treatments",
    image: photos.coolingLaser,
    summary:
      "Diode laser hair reduction, diode rejuvenation, and procedure-led laser care for smoother, more even-looking skin.",
  },
  {
    title: "Injectables",
    image: photos.lips,
    summary:
      "Botulinum toxin and dermal filler treatments for facial balance, soft rejuvenation, and physician-guided refinement.",
  },
  {
    title: "Body & Contouring",
    image: photos.rfTreatment,
    summary:
      "Radiofrequency, ultrasound cavitation, mesotherapy, and body-focused treatments for tightening and contouring.",
  },
  {
    title: "Regenerative Skin",
    image: photos.facialHandpiece,
    summary:
      "Skin boosters, exosomes, PRP microneedling, scar treatments, and hair-health therapies for longer-term skin quality.",
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
    image: photos.skinPortrait,
    caption:
      "Skin health is cumulative. The best plans balance in-clinic treatment with habits that can be sustained.",
    timestamp: "2026-04-21",
    permalink: "https://instagram.com/graycemedicalaesthetics",
  },
  {
    id: "ig_mock_006",
    mediaType: "IMAGE",
    image: photos.doctorPortrait,
    caption:
      "Physician-led aesthetic care with Dr. Mary Grace Braga, centered on safety, clarity, and natural-looking refinement.",
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
