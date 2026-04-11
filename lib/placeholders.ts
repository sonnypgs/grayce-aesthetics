// -----------------------------------------------------------------------------
// PLACEHOLDER CONTENT — swap these out before launch.
//
// Everything in this file is marketing copy and contact info for
// Grayce Medical Aesthetics. The clinic's real address, phone number,
// photos, and bio copy should replace the placeholders below once the
// client provides them.
// -----------------------------------------------------------------------------

const p = (w: number, h: number, label: string) =>
  `https://placehold.co/${w}x${h}/EBE3D3/556148?font=lora&text=${encodeURIComponent(
    label
  )}`;

export const images = {
  heroPortrait: p(900, 1150, "Dr. Mary Grace Braga"),
  aboutPortrait: p(900, 1100, "Dr. Braga Portrait"),
  clinicBuilding: p(1600, 1000, "Grayce Clinic Interior"),
  clinicExterior: p(900, 1100, "Treatment Room"),
  gallery: [
    p(900, 1200, "Reception"),
    p(1200, 800, "Treatment Suite"),
    p(900, 900, "Skincare Bar"),
    p(1200, 1000, "Consult Lounge"),
    p(900, 1100, "Waiting Area"),
    p(1200, 900, "Ambience"),
  ],
  ogImage: p(1200, 630, "Grayce Medical Aesthetics"),
};

export const clinic = {
  name: "Grayce Medical Aesthetics",
  short: "Grayce",
  tagline: "Refined aesthetics, delivered with grace.",
  doctor: {
    name: "Dr. Mary Grace Braga",
    title: "Medical Aesthetics Physician",
    affiliation: "Founder, Grayce Medical Aesthetics",
  },
  contact: {
    phone: "+63 (000) 000 0000", // TODO: replace
    email: "hello@grayce-aesthetics.com", // TODO: confirm
    instagram: "@grayceaesthetics", // TODO: confirm
    address: {
      line1: "[Unit / Floor, Building Name]", // TODO
      line2: "[Street Name]", // TODO
      region: "Parañaque City, Metro Manila, Philippines",
    },
    hours: [
      { day: "Tuesday – Friday", time: "10:00 AM – 7:00 PM" },
      { day: "Saturday", time: "10:00 AM – 5:00 PM" },
      { day: "Sunday & Monday", time: "Closed" },
    ],
  },
};
