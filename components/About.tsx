import { Award, GraduationCap, ShieldCheck, Stethoscope } from "lucide-react";
import { clinic, photos } from "@/lib/site";
import SectionHeading from "./SectionHeading";

const icons = [GraduationCap, Stethoscope, ShieldCheck, Award];

export default function About() {
  return (
    <section id="about" className="section-gradient-soft scroll-mt-24 py-24 md:py-32">
      <div className="max-w-page mx-auto grid gap-12 px-6 md:grid-cols-12 md:items-center md:px-10">
        <div className="md:col-span-4">
          <figure className="relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-[2rem] border border-hairline bg-bg-soft shadow-soft-lg md:max-w-sm">
            <img
              src={photos.doctorPortrait}
              alt="Dr. Mary Grace Braga"
              className="h-full w-full object-cover object-top"
            />
          </figure>
        </div>

        <div className="md:col-span-8">
          <SectionHeading
            eyebrow="About the Doctor"
            title={clinic.doctor.displayName}
            intro={clinic.doctor.bio}
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {clinic.doctor.credentials.map((item, index) => {
              const Icon = icons[index] ?? Award;
              return (
                <article
                  key={item.label}
                  className="surface-panel rounded-2xl border border-hairline p-5 shadow-soft"
                >
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#4b594c] text-[#ffeedc]">
                    <Icon size={17} strokeWidth={1.8} />
                  </span>
                  <h3 className="font-display text-xl font-semibold leading-tight text-[#243028]">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#65705f]">
                    {item.detail}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 border-l border-gold pl-6">
            <p className="font-display text-2xl leading-snug text-ink">
              A quieter kind of aesthetic medicine: personal, precise, and
              paced around trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
