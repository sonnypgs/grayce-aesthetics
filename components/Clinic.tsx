import { Leaf, ShieldCheck, Sparkles, Timer } from "lucide-react";
import { photos } from "@/lib/site";
import SectionHeading from "./SectionHeading";

const principles = [
  {
    icon: ShieldCheck,
    title: "Physician-led plans",
    text: "Every treatment path starts with a medical consultation and suitability check.",
  },
  {
    icon: Timer,
    title: "Unhurried appointments",
    text: "The clinic is built around clear explanations, realistic expectations, and careful pacing.",
  },
  {
    icon: Leaf,
    title: "Skin quality first",
    text: "The goal is refreshed, healthier-looking skin rather than an overcorrected result.",
  },
  {
    icon: Sparkles,
    title: "Treatment range",
    text: "Facials, lasers, injectables, contouring, regenerative skin, and hair-health care.",
  },
];

export default function Clinic() {
  return (
    <section id="clinic" className="section-gradient-soft scroll-mt-24 py-24 md:py-32">
      <div className="max-w-page mx-auto px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <SectionHeading
              eyebrow="The Clinic"
              title="A calm room for precise work."
              intro="Grayce brings medical aesthetics into a softer, more considered setting: a clinic that feels composed, private, and easy to return to."
            />
          </div>
          <div className="md:col-span-7">
            <figure className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-hairline bg-bg-soft shadow-soft-lg">
              <img
                src={photos.complexions}
                alt="Skin care models representing Grayce clients"
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {principles.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="surface-panel rounded-[1.5rem] border border-hairline p-6 shadow-soft"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4b594c] text-[#ffeedc]">
                <Icon size={18} strokeWidth={1.8} />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold leading-tight text-[#243028]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#65705f]">
                {text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-12 md:items-end">
          <figure className="md:col-span-5 relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-hairline bg-bg-soft shadow-soft">
            <img
              src={photos.neck}
              alt="Neck and decolletage skin care"
              className="h-full w-full object-cover"
            />
          </figure>
          <blockquote className="md:col-span-7 border-t border-hairline pt-8 font-display text-3xl leading-tight text-ink md:text-4xl">
            Good aesthetics should look like cared-for skin, not a different
            person.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
