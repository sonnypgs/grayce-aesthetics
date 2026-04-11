import { images, clinic } from "@/lib/placeholders";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden"
    >
      {/* soft wash backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1100px 700px at 80% 5%, rgba(243, 233, 200, 0.55), transparent 55%), radial-gradient(700px 400px at 5% 90%, rgba(124, 142, 110, 0.10), transparent 60%)",
        }}
      />

      {/* gold foliage corner ornaments */}
      <svg
        aria-hidden
        className="absolute top-4 left-0 w-48 md:w-64 opacity-60 -z-10"
        viewBox="0 0 240 200"
        fill="none"
      >
        <path
          d="M10 180 Q 60 120 40 60 M40 60 Q 70 80 90 70 M40 60 Q 30 30 55 20 M10 180 Q 80 150 120 100 M120 100 Q 150 110 170 90 M120 100 Q 115 70 140 55"
          stroke="#C9A14A"
          strokeWidth="1.25"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="55" cy="20" r="3" fill="#C9A14A" />
        <circle cx="90" cy="70" r="2.5" fill="#C9A14A" />
        <circle cx="140" cy="55" r="3" fill="#C9A14A" />
        <circle cx="170" cy="90" r="2.5" fill="#C9A14A" />
      </svg>
      <svg
        aria-hidden
        className="absolute top-10 right-0 w-48 md:w-64 opacity-60 -z-10"
        viewBox="0 0 240 200"
        fill="none"
      >
        <path
          d="M230 180 Q 180 120 200 60 M200 60 Q 170 80 150 70 M200 60 Q 210 30 185 20 M230 180 Q 160 150 120 100 M120 100 Q 90 110 70 90 M120 100 Q 125 70 100 55"
          stroke="#C9A14A"
          strokeWidth="1.25"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="185" cy="20" r="3" fill="#C9A14A" />
        <circle cx="150" cy="70" r="2.5" fill="#C9A14A" />
        <circle cx="100" cy="55" r="3" fill="#C9A14A" />
        <circle cx="70" cy="90" r="2.5" fill="#C9A14A" />
      </svg>

      <div className="max-w-page mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 md:gap-12 items-center relative">
        <div className="md:col-span-7">
          <div className="reveal reveal-1 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sage-soft/70 text-sage-deep text-[11px] font-semibold uppercase tracking-[0.18em]">
            <span className="star-bullet" aria-hidden />
            Now open in Parañaque
          </div>

          <h1 className="reveal reveal-2 font-display text-ink mt-7 text-[clamp(2.5rem,6.2vw,5.5rem)] leading-[1.02]">
            Refined aesthetics,
            <br />
            delivered with{" "}
            <span className="font-script italic text-sage text-[1.15em] leading-none">
              grace
            </span>
            .
          </h1>

          <p className="reveal reveal-3 mt-7 max-w-xl text-ink-muted text-lg leading-relaxed">
            {clinic.name} is the boutique medical aesthetics practice of{" "}
            <span className="text-ink font-medium">{clinic.doctor.name}</span> —
            a modern clinic built around thoughtful consultations, evidence-led
            treatments, and results that feel like you.
          </p>

          <div className="reveal reveal-4 mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-sage text-white font-medium hover:bg-sage-deep transition-colors"
            >
              Book a Consultation
              <ArrowRight
                size={16}
                strokeWidth={2}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-hairline bg-white/60 backdrop-blur text-ink font-medium hover:border-sage transition-colors"
            >
              View Services
            </a>
          </div>

          <div className="reveal reveal-5 mt-14 hidden md:grid grid-cols-3 max-w-xl gap-6 pt-8 border-t border-hairline">
            <div>
              <div className="font-display text-3xl text-ink font-semibold">
                10+
              </div>
              <div className="text-xs text-ink-muted mt-1">
                Signature treatments
              </div>
            </div>
            <div>
              <div className="font-display text-3xl text-ink font-semibold">
                1:1
              </div>
              <div className="text-xs text-ink-muted mt-1">
                Consultations with Dr. Braga
              </div>
            </div>
            <div>
              <div className="font-display text-3xl text-ink font-semibold">
                PRC
              </div>
              <div className="text-xs text-ink-muted mt-1">
                Licensed physician
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 relative">
          <div className="reveal reveal-3 relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft-lg bg-bg-soft">
            <img
              src={images.heroPortrait}
              alt={`Portrait of ${clinic.doctor.name}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="reveal reveal-4 absolute -bottom-5 -left-5 md:-left-8 bg-white rounded-2xl border border-hairline px-5 py-4 max-w-[270px] shadow-soft">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-sage-deep font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
              Now accepting
            </div>
            <div className="font-display text-ink text-base mt-1.5 leading-snug font-semibold">
              New clients &amp; consultations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
