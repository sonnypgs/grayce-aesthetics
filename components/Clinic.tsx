import { Eye, HandHeart, Sparkles } from "lucide-react";
import { photos } from "@/lib/site";
import Star from "./Star";

const clinicStatements = [
  {
    icon: Eye,
    title: "VISION",
    text:
      "To become the community’s most trusted partner in medical aesthetics and comprehensive body wellness, offering care that feels accessible, honest, and deeply connected to the people we serve.",
  },
  {
    icon: HandHeart,
    title: "MISSION",
    text:
      "To collaborate with patients and clients regarding their goals through evidence-based and research-backed medical practice, prioritizing safety, facial and body harmony, and personalized care.",
  },
  {
    icon: Sparkles,
    title: "CORE VALUES",
    text:
      "To practice with honesty, empathy, collaboration, innovation, and service quality, creating an experience where every treatment decision is clear, respectful, and intentionally guided.",
  },
];

const clinicIntro = [
  "Grayce Medical Aesthetic Clinic opened its doors on May 2nd 2026 grounded in the belief that intentionally taking care and improving ourselves always lead to our most natural beauty and revitalizing longevity.",
  "This clinic was developed by partners in love and in life, aesthetic medicine Dr. Mary Grace Tsai-Braga and entrepreneur Mr. Mark Lester Braga equipped with the goal of restoring and refining already existing features rather than outright redefinition.",
  "Through evidence-based medical practice, and with the use of clinical-grade products and machines, Grayce Medical Aesthetic Clinic aims to be your trusted partner in everything: HEALTH, AESTHETICS, AND BODY WELLNESS. Largely community-based, we aspire to make aesthetic services accessible to everyone.",
];

export default function Clinic() {
  return (
    <section
      id="clinic"
      className="section-gradient-soft scroll-mt-24 pb-20 pt-14 md:pb-24 md:pt-16"
    >
      <div className="max-w-page mx-auto px-6 md:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-5">
            <figure className="relative h-full min-h-[410px] overflow-hidden rounded-[1.75rem] border border-hairline bg-bg-soft shadow-soft-lg sm:min-h-[480px] lg:min-h-[560px]">
              <img
                src={photos.clinicLounge}
                alt="Grayce clinic lounge"
                className="mobile-parallax-media h-full w-full object-cover object-[42%_50%]"
                data-mobile-parallax="28"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,48,40,0.02)_34%,rgba(36,48,40,0.46))]" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-[#fff7ed] md:p-8">
                <p className="max-w-[21rem] font-display text-3xl leading-[1.05] md:text-[2.35rem]">
                  Good aesthetics should look like cared-for skin, not a
                  different person.
                </p>
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-7">
            <div className="flex h-full flex-col gap-8 lg:pl-6">
              <div>
                <div className="inline-flex items-center gap-2.5 rounded-full bg-sage-soft/70 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-sage-deep">
                  <Star className="text-navy" size={11} />
                  About Grayce
                </div>
                <h2 className="font-display mt-5 max-w-[42rem] text-[2.35rem] font-semibold leading-[1.02] text-ink sm:text-5xl md:text-[3.6rem]">
                  A calm room for precise work.
                </h2>

                <div className="mt-7 grid gap-5 text-[15.5px] leading-relaxed text-ink-muted md:grid-cols-2 md:gap-7">
                  <p className="md:col-span-2 md:max-w-[52rem]">
                    {clinicIntro[0]}
                  </p>
                  <p>{clinicIntro[1]}</p>
                  <p>{clinicIntro[2]}</p>
                </div>
              </div>

              <div className="border-y border-hairline">
                {clinicStatements.map(({ icon: Icon, title, text }) => (
                  <article
                    key={title}
                    className="grid gap-4 border-b border-hairline py-5 last:border-b-0 sm:grid-cols-[3.5rem_1fr] sm:items-start sm:gap-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4b594c] text-[#ffeedc]">
                      <Icon size={18} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#947f64]">
                        {title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-[#243028]">
                        {text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
