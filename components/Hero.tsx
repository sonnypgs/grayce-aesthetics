import { ArrowRight, MapPin, Phone } from "lucide-react";
import { bookingHref, clinic, isExternalBooking, photos } from "@/lib/site";

export default function Hero() {
  const tel = `tel:${clinic.contact.phones[0]}`;

  return (
    <section
      id="top"
      className="hero-gradient relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20"
    >
      <div className="max-w-page mx-auto px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <div className="reveal reveal-1 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
              <span className="h-px w-10 bg-gold" />
              Physician-led aesthetic care
            </div>

            <h1 className="reveal reveal-2 font-display mt-6 max-w-full text-[clamp(2.5rem,10.5vw,4.25rem)] leading-[0.96] text-ink md:max-w-3xl md:text-[clamp(4rem,7vw,6.75rem)]">
              Refined skin work, grounded in medicine.
            </h1>

            <p className="reveal reveal-3 mt-7 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Grayce is a medical aesthetic clinic in Parañaque led by{" "}
              <span className="font-medium text-ink">
                {clinic.doctor.displayName}
              </span>
              , pairing thoughtful consultation with skin, laser, injectable,
              and regenerative treatments.
            </p>

            <div className="reveal reveal-4 mt-9 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={bookingHref}
                target={isExternalBooking ? "_blank" : undefined}
                rel={isExternalBooking ? "noopener noreferrer" : undefined}
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-sage px-5 font-medium text-[var(--bg)] transition-colors hover:bg-sage-deep sm:px-6"
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
                className="inline-flex h-12 items-center gap-2 rounded-full border border-hairline bg-[var(--surface)] px-5 font-medium text-[#243028] transition-colors hover:border-gold sm:px-6"
              >
                <Phone size={16} strokeWidth={2} />
                Call Clinic
              </a>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="reveal reveal-3 relative grid gap-4 pb-8 md:grid-cols-8 md:pb-14">
              <figure className="image-grain relative aspect-[4/3] overflow-hidden rounded-t-[5rem] rounded-b-[2rem] border border-hairline bg-bg-soft shadow-soft-xl md:col-span-8 md:aspect-[5/4] md:rounded-t-[7rem]">
                <img
                  src={photos.clinicLounge}
                  alt="Grayce Medical Aesthetic Clinic lounge"
                  className="h-full w-full object-cover object-center"
                />
              </figure>
              <figure className="surface-panel absolute -left-3 bottom-0 hidden w-44 overflow-hidden rounded-[1.5rem] border border-hairline shadow-soft-lg md:block">
                <img
                  src={photos.serumDrop}
                  alt="Serum detail"
                  className="h-44 w-full object-cover"
                />
              </figure>
              <div className="surface-panel absolute bottom-4 right-2 max-w-[min(260px,calc(100%-1rem))] rounded-[1.5rem] border border-hairline p-4 shadow-soft-lg sm:p-5 md:-right-2">
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
