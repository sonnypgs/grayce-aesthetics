import SectionHeading from "./SectionHeading";
import { images } from "@/lib/placeholders";
import { Building2, Leaf, ShieldCheck, Coffee } from "lucide-react";

const highlights = [
  {
    icon: Building2,
    title: "A boutique clinic, built on purpose.",
    text: "Grayce is Dr. Braga's own practice — a small, modern space designed to feel more like a considered retreat than a medical office.",
  },
  {
    icon: Leaf,
    title: "Calm, modern, and unhurried.",
    text: "Soft light, natural materials, and private consultation rooms. Every appointment is paced to let you ask every question twice.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence-led, physician-run.",
    text: "Every treatment at Grayce is prescribed and administered by a licensed physician — no rushed walk-ins, no one-size-fits-all menus.",
  },
  {
    icon: Coffee,
    title: "Made to come back to.",
    text: "A refreshments bar, a quiet lounge, and flexible after-work hours — designed for clients who live full, busy lives.",
  },
];

export default function Clinic() {
  return (
    <section
      id="clinic"
      className="py-24 md:py-32 scroll-mt-24 bg-bg relative"
    >
      <div className="max-w-page mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6">
            <SectionHeading
              eyebrow="The Clinic"
              title="Her own space. Her own standard."
              intro="Grayce Medical Aesthetics is Dr. Mary Grace Braga's boutique clinic in Parañaque — a warm, modern room built around one idea: that good aesthetic medicine takes time, attention, and a place that feels like care."
            />
          </div>

          <div className="md:col-span-6">
            <figure className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-soft-lg bg-white">
              <img
                src={images.clinicBuilding}
                alt="Grayce clinic interior placeholder"
                className="w-full h-full object-cover"
              />
              <figcaption className="absolute left-5 bottom-5 bg-white/95 backdrop-blur px-3.5 py-2 text-[11px] uppercase tracking-[0.18em] text-sage-deep font-semibold rounded-full border border-hairline">
                Grayce — Interior
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-6">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-white border border-hairline rounded-3xl p-7 flex gap-5 hover:shadow-soft hover:-translate-y-0.5 transition-all duration-500"
            >
              <span className="shrink-0 w-12 h-12 rounded-2xl bg-sage-soft/70 flex items-center justify-center text-sage-deep">
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-ink-muted leading-relaxed text-[15px]">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-12 gap-8 items-center">
          <figure className="md:col-span-4 relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src={images.clinicExterior}
              alt="Treatment room placeholder"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="md:col-span-8">
            <blockquote className="font-display text-2xl md:text-[1.75rem] leading-snug text-ink max-w-2xl font-medium">
              <span className="text-sage text-4xl leading-none mr-1 align-top">
                &ldquo;
              </span>
              Good aesthetic medicine is quiet. It's the skin you've always
              had, looked after properly — not a new face. My job is to help
              you get there, honestly and at your own pace.
              <footer className="mt-5 text-xs uppercase tracking-[0.18em] text-ink-muted font-semibold">
                — Dr. Mary Grace Braga {/* TODO: confirm or replace */}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
