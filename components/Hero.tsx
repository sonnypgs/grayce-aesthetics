import { images, clinic } from "@/lib/placeholders";
import { ArrowRight, Phone } from "lucide-react";
import Star from "./Star";

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

      {/* gold sparkle cluster — left corner */}
      <svg
        aria-hidden
        className="absolute top-2 -left-4 w-32 sm:w-44 md:top-4 md:left-0 md:w-80 opacity-70 md:opacity-80 -z-10"
        viewBox="0 0 320 260"
        fill="#C9A14A"
      >
        {/* stars: translate(x y) scale(s) */}
        <g transform="translate(40 40) scale(1.8)">
          <path d="M12 0 C 13 9 15 11 24 12 C 15 13 13 15 12 24 C 11 15 9 13 0 12 C 9 11 11 9 12 0 Z"/>
        </g>
        <g transform="translate(140 20) scale(1.1)">
          <path d="M12 0 C 13 9 15 11 24 12 C 15 13 13 15 12 24 C 11 15 9 13 0 12 C 9 11 11 9 12 0 Z"/>
        </g>
        <g transform="translate(90 110) scale(2.4)">
          <path d="M12 0 C 13 9 15 11 24 12 C 15 13 13 15 12 24 C 11 15 9 13 0 12 C 9 11 11 9 12 0 Z"/>
        </g>
        <g transform="translate(200 80) scale(0.9)">
          <path d="M12 0 C 13 9 15 11 24 12 C 15 13 13 15 12 24 C 11 15 9 13 0 12 C 9 11 11 9 12 0 Z"/>
        </g>
        <g transform="translate(20 180) scale(1.3)">
          <path d="M12 0 C 13 9 15 11 24 12 C 15 13 13 15 12 24 C 11 15 9 13 0 12 C 9 11 11 9 12 0 Z"/>
        </g>
        <g transform="translate(180 170) scale(1.6)">
          <path d="M12 0 C 13 9 15 11 24 12 C 15 13 13 15 12 24 C 11 15 9 13 0 12 C 9 11 11 9 12 0 Z"/>
        </g>
        <g transform="translate(260 40) scale(1.2)">
          <path d="M12 0 C 13 9 15 11 24 12 C 15 13 13 15 12 24 C 11 15 9 13 0 12 C 9 11 11 9 12 0 Z"/>
        </g>
      </svg>

      {/* gold sparkle cluster — right corner */}
      <svg
        aria-hidden
        className="absolute top-2 -right-4 w-32 sm:w-44 md:top-10 md:right-0 md:w-80 opacity-70 md:opacity-80 -z-10"
        viewBox="0 0 320 260"
        fill="#C9A14A"
      >
        <g transform="translate(260 30) scale(1.9)">
          <path d="M12 0 C 13 9 15 11 24 12 C 15 13 13 15 12 24 C 11 15 9 13 0 12 C 9 11 11 9 12 0 Z"/>
        </g>
        <g transform="translate(170 20) scale(1.1)">
          <path d="M12 0 C 13 9 15 11 24 12 C 15 13 13 15 12 24 C 11 15 9 13 0 12 C 9 11 11 9 12 0 Z"/>
        </g>
        <g transform="translate(210 110) scale(2.3)">
          <path d="M12 0 C 13 9 15 11 24 12 C 15 13 13 15 12 24 C 11 15 9 13 0 12 C 9 11 11 9 12 0 Z"/>
        </g>
        <g transform="translate(90 70) scale(0.9)">
          <path d="M12 0 C 13 9 15 11 24 12 C 15 13 13 15 12 24 C 11 15 9 13 0 12 C 9 11 11 9 12 0 Z"/>
        </g>
        <g transform="translate(280 180) scale(1.4)">
          <path d="M12 0 C 13 9 15 11 24 12 C 15 13 13 15 12 24 C 11 15 9 13 0 12 C 9 11 11 9 12 0 Z"/>
        </g>
        <g transform="translate(120 170) scale(1.6)">
          <path d="M12 0 C 13 9 15 11 24 12 C 15 13 13 15 12 24 C 11 15 9 13 0 12 C 9 11 11 9 12 0 Z"/>
        </g>
        <g transform="translate(30 50) scale(1.2)">
          <path d="M12 0 C 13 9 15 11 24 12 C 15 13 13 15 12 24 C 11 15 9 13 0 12 C 9 11 11 9 12 0 Z"/>
        </g>
      </svg>

      <div className="max-w-page mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 md:gap-12 items-center relative">
        <div className="md:col-span-7">
          <div className="reveal reveal-1 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sage-soft/70 text-sage-deep text-[11px] font-semibold uppercase tracking-[0.18em]">
            <Star className="text-navy" size={11} />
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
