import SectionHeading from "./SectionHeading";
import {
  Sparkles,
  Droplet,
  Sun,
  Leaf,
  Wand2,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Signature Facials & Skincare",
    blurb:
      "Medical-grade facials, peels, and deep-cleansing rituals designed around your skin analysis and pace of life.",
  },
  {
    icon: Droplet,
    title: "Injectables",
    blurb:
      "Toxin and dermal filler treatments placed with a light, anatomical hand — refreshed, never frozen.",
  },
  {
    icon: Sun,
    title: "Laser & Light",
    blurb:
      "Pigmentation, redness, texture, and hair reduction — handled with modern energy-based platforms.",
  },
  {
    icon: Wand2,
    title: "Body Contouring",
    blurb:
      "Non-invasive body treatments to tone, tighten, and smooth — paired with realistic, staged plans.",
  },
  {
    icon: Leaf,
    title: "Skin Analysis & Plans",
    blurb:
      "A proper consultation, a proper diagnosis, and a treatment plan you actually understand before we begin.",
  },
  {
    icon: HeartHandshake,
    title: "Memberships",
    blurb:
      "Thoughtful care packages for clients who want their skin looked after on a steady, unhurried cadence.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-bg-alt scroll-mt-24">
      <div className="max-w-page mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Services"
          title="A considered menu, not a catalog."
          intro="Every visit at Grayce begins with a conversation. These are the core services we offer — each one tailored, each one explained, each one led by Dr. Braga."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, blurb }) => (
            <article
              key={title}
              className="group relative bg-white border border-hairline rounded-3xl p-7 hover:shadow-soft-lg hover:-translate-y-1 hover:border-transparent transition-all duration-500"
            >
              <div className="flex items-start justify-between">
                <span className="w-12 h-12 rounded-2xl bg-sage-soft/70 flex items-center justify-center text-sage-deep">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.75}
                  className="text-ink-muted opacity-0 group-hover:opacity-100 group-hover:text-sage-deep transition-all duration-300 -translate-x-1 group-hover:translate-x-0"
                />
              </div>
              <h3 className="font-display text-xl font-semibold leading-snug text-ink mt-6">
                {title}
              </h3>
              <p className="mt-3 text-ink-muted leading-relaxed text-[15px]">
                {blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
