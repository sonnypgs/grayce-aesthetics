import SectionHeading from "./SectionHeading";
import { images, clinic } from "@/lib/placeholders";
import { GraduationCap, Stethoscope, Award, Sparkles } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    label: "Doctor of Medicine",
    detail: "[University Name — Year]",
  },
  {
    icon: Stethoscope,
    label: "Aesthetic Medicine Training",
    detail: "[Institution — Year]",
  },
  {
    icon: Award,
    label: "PRC Licensed Physician",
    detail: "Republic of the Philippines",
  },
  {
    icon: Sparkles,
    label: "Certifications",
    detail: "[Injectables · Laser · Skin]",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 scroll-mt-24 bg-bg">
      <div className="max-w-page mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft-lg bg-bg-soft">
            <img
              src={images.aboutPortrait}
              alt={`Portrait of ${clinic.doctor.name}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 md:-right-8 bg-white border border-hairline rounded-2xl px-5 py-4 max-w-[260px] shadow-soft">
            <div className="text-[11px] uppercase tracking-[0.18em] text-sage-deep font-semibold">
              Founder
            </div>
            <div className="font-display text-ink text-base mt-1.5 leading-snug font-semibold">
              {clinic.doctor.name}
            </div>
            <div className="text-xs text-ink-muted mt-1">
              {clinic.doctor.title}
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <SectionHeading
            eyebrow="About the Doctor"
            title={clinic.doctor.name}
            intro="A new generation of medical aesthetics in Parañaque — led by a physician who believes beautiful skin begins with trust, science, and a long conversation."
          />

          <div className="mt-8 space-y-5 text-ink-muted text-base leading-relaxed max-w-2xl">
            {/* TODO: replace with Dr. Braga's real bio */}
            <p>
              Dr. Mary Grace Braga founded Grayce Medical Aesthetics to offer
              Parañaque a calm, modern clinic where every treatment begins with
              a careful skin analysis and an honest plan. Her approach favors
              subtle, cumulative results over dramatic before-and-afters.
            </p>
            <p>
              Trained in both general medicine and aesthetic procedures, Dr.
              Braga works closely with each client to tailor injectables,
              energy-based treatments, and medical-grade skincare to their
              skin, lifestyle, and long-term goals.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {credentials.map(({ icon: Icon, label, detail }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="shrink-0 w-11 h-11 rounded-2xl bg-sage-soft/70 flex items-center justify-center text-sage-deep">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <div>
                  <div className="font-display text-ink text-base font-semibold leading-tight">
                    {label}
                  </div>
                  <div className="text-sm text-ink-muted mt-1">{detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
