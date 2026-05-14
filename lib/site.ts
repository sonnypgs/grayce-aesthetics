export const bookingHref =
  process.env.NEXT_PUBLIC_FRESHA_BOOKING_URL?.trim() || "#contact";

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
    lockup: "/assets/grayce/brand/logo-lockup-on-almond.svg",
    monogram: "/assets/grayce/brand/logo-monogram-on-almond.svg",
    lightOnGreen: "/assets/grayce/brand/logo-light-on-green.svg",
    lightOnTaupe: "/assets/grayce/brand/logo-light-on-taupe.svg",
    transparentWordmark: "/assets/grayce/brand/wordmark-transparent.png",
    transparentMonogram: "/assets/grayce/brand/monogram-transparent.png",
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
      line2: "Nuestra Sra. De Lourdes Ave.",
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
  reception: "/assets/grayce/photos/clinic-reception-mockup.jpg",
  coolingCloseup: "/assets/grayce/photos/cooling-procedure-closeup.jpg",
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

export const gallery = [
  { src: photos.reception, alt: "Grayce Medical Aesthetic Clinic reception mockup" },
  { src: photos.serumDrop, alt: "Serum drop for aesthetic facial treatment" },
  { src: photos.rfTreatment, alt: "Radiofrequency treatment close-up" },
  { src: photos.deviceDisplay, alt: "Aesthetic treatment device screen" },
  { src: photos.skinLaser, alt: "Laser treatment close-up" },
  { src: photos.rfDevice, alt: "Radiofrequency treatment device" },
  { src: photos.coolingLaser, alt: "Cooling laser treatment in progress" },
  { src: photos.coolingCloseup, alt: "Skin procedure close-up" },
  { src: photos.facialHandpiece, alt: "Facial handpiece treatment" },
  { src: photos.hydrafacialHandpiece, alt: "Hydrafacial handpiece treatment" },
  { src: photos.hydrafacialDevice, alt: "Hydrafacial treatment device" },
  { src: photos.legs, alt: "Laser hair reduction beauty image" },
  { src: photos.skinPortrait, alt: "Healthy glowing skin portrait" },
  { src: photos.diversePortrait, alt: "Diverse skin care portrait" },
  { src: photos.lips, alt: "Lip and lower-face detail" },
  { src: photos.complexions, alt: "Group portrait showing different complexions" },
  { src: photos.brightSkin, alt: "Bright skin care model" },
  { src: photos.neck, alt: "Neck and decolletage skin care image" },
];

export const mapQuery = encodeURIComponent(
  "GF Asher Bldg Nuestra Sra. De Lourdes Ave San Antonio Valley 1 Paranaque City"
);
