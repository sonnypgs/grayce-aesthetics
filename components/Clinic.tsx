import { Eye, HandHeart, Sparkles } from "lucide-react";
import { photos } from "@/lib/site";
import SectionHeading from "./SectionHeading";

const clinicStatements = [
  {
    icon: Eye,
    title: "VISION",
    text:
      "To become the community’s most trusted partner in medical aesthetics and comprehensive body wellness.",
  },
  {
    icon: HandHeart,
    title: "MISSION",
    text:
      "To collaborate with patients and clients regarding their goals through the use of evidence-based and research-backed medical practice and services prioritizing safety, facial and body harmony, in conjunction with personalized care.",
  },
  {
    icon: Sparkles,
    title: "CORE VALUES",
    text: "Honesty, Empathy, Collaboration, Innovation and Service Quality",
  },
];

export default function Clinic() {
  return (
    <section id="clinic" className="section-gradient-soft scroll-mt-24 py-24 md:py-32">
      <div className="max-w-page mx-auto px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <SectionHeading
              eyebrow="About Grayce"
              title="A calm room for precise work."
              intro="Grayce Medical Aesthetic Clinic opened its doors on May 2nd 2026 grounded in the belief that intentionally taking care and improving ourselves always lead to our most natural beauty and revitalizing longevity. This clinic was developed by partners in love and in life, aesthetic medicine Dr. Mary Grace Tsai-Braga and entrepreneur Mr. Mark Lester Braga equipped with the goal of restoring and refining already existing features rather than outright redefinition. Through evidence-based medical practice, and with the use of clinical-grade products and machines, Grayce Medical Aesthetic Clinic aims to be your trusted partner in everything: HEALTH, AESTHETICS, AND BODY WELLNESS. Largely community-based, we aspire to make aesthetic services accessible to everyone."
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

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {clinicStatements.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="surface-panel rounded-[1.5rem] border border-hairline p-6 shadow-soft"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4b594c] text-[#ffeedc]">
                <Icon size={18} strokeWidth={1.8} />
              </span>
              <h3 className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#947f64]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#243028]">
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
