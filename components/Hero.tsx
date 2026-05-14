import { ArrowRight, MapPin, Phone } from "lucide-react";
import { bookingHref, clinic, isExternalBooking, photos } from "@/lib/site";
import BrandLogo from "./BrandLogo";

export default function Hero() {
  const tel = `tel:${clinic.contact.phones[0]}`;

  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="absolute inset-x-0 top-0 -z-10 h-[72%] bg-bg-alt" />
      <div className="max-w-page mx-auto px-6 md:px-10">
        <div className="grid min-h-[calc(100vh-7rem)] gap-10 md:grid-cols-12 md:items-end">
          <div className="pb-10 md:col-span-6 md:pb-20">
            <div className="reveal reveal-1 brand-logo-panel mb-8 flex h-24 w-52 items-center justify-center rounded-[2rem] border border-hairline p-4 shadow-soft">
              <BrandLogo className="h-full w-full object-contain" />
            </div>

            <div className="reveal reveal-2 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
              <span className="h-px w-10 bg-gold" />
              Physician-led aesthetic care
            </div>

            <h1 className="reveal reveal-3 font-display mt-6 max-w-3xl text-[clamp(3.15rem,7vw,6.75rem)] leading-[0.95] text-ink">
              Refined skin work, grounded in medicine.
            </h1>

            <p className="reveal reveal-4 mt-7 max-w-xl text-lg leading-relaxed text-ink-muted">
              Grayce is a medical aesthetic clinic in Parañaque led by{" "}
              <span className="font-medium text-ink">
                {clinic.doctor.displayName}
              </span>
              , pairing thoughtful consultation with skin, laser, injectable,
              and regenerative treatments.
            </p>

            <div className="reveal reveal-5 mt-9 flex flex-wrap items-center gap-3">
              <a
                href={bookingHref}
                target={isExternalBooking ? "_blank" : undefined}
                rel={isExternalBooking ? "noopener noreferrer" : undefined}
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-sage px-6 font-medium text-[var(--bg)] transition-colors hover:bg-sage-deep"
              >
                Book Appointment
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href={tel}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-hairline bg-[var(--surface)] px-6 font-medium text-[#243028] transition-colors hover:border-gold"
              >
                <Phone size={16} strokeWidth={2} />
                Call Clinic
              </a>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="reveal reveal-3 relative grid gap-4 pb-8 md:grid-cols-8 md:pb-14">
              <figure className="image-grain relative md:col-span-8 aspect-[4/5] overflow-hidden rounded-t-[7rem] rounded-b-[2rem] border border-hairline bg-bg-soft shadow-soft-xl">
                <img
                  src={photos.reception}
                  alt="Grayce Medical Aesthetic Clinic reception"
                  className="h-full w-full object-cover"
                />
              </figure>
              <figure className="surface-panel absolute -left-3 bottom-0 hidden w-44 overflow-hidden rounded-[1.5rem] border border-hairline shadow-soft-lg md:block">
                <img
                  src={photos.serumDrop}
                  alt="Serum detail"
                  className="h-44 w-full object-cover"
                />
              </figure>
              <div className="surface-panel absolute -right-2 bottom-4 max-w-[260px] rounded-[1.5rem] border border-hairline p-5 shadow-soft-lg">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 text-[#947f64]" size={17} />
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#947f64]">
                      Parañaque
                    </div>
                    <div className="mt-1 font-display text-lg font-semibold leading-tight text-[#243028]">
                      GF Asher Bldg., San Antonio Valley 1
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="editorial-rule" />
    </section>
  );
}
