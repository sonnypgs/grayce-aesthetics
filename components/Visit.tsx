import SectionHeading from "./SectionHeading";
import { clinic } from "@/lib/placeholders";
import { MapPin, Clock, Car } from "lucide-react";

export default function Visit() {
  // Parañaque City default bbox — will be tightened once the real address lands
  const bbox = "121.0098,14.4713,121.0298,14.4873";

  return (
    <section id="visit" className="py-24 md:py-32 scroll-mt-24 bg-bg">
      <div className="max-w-page mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Visit Us"
          title="Easy to find. Easy to feel at home."
        />

        <div className="mt-14 grid md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-5 space-y-8">
            <div className="bg-white border border-hairline rounded-3xl p-7">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-sage-soft/70 flex items-center justify-center text-sage-deep">
                  <MapPin size={16} strokeWidth={1.75} />
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-muted">
                  Address
                </span>
              </div>
              <div className="mt-4 font-display text-xl text-ink font-semibold leading-snug">
                {clinic.contact.address.line1}
                <br />
                {clinic.contact.address.line2}
              </div>
              <div className="text-ink-muted text-sm mt-1">
                {clinic.contact.address.region}
              </div>
            </div>

            <div className="bg-white border border-hairline rounded-3xl p-7">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-sage-soft/70 flex items-center justify-center text-sage-deep">
                  <Clock size={16} strokeWidth={1.75} />
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-muted">
                  Hours
                </span>
              </div>
              <dl className="mt-4">
                {clinic.contact.hours.map((h, i) => (
                  <div
                    key={h.day}
                    className={`flex items-baseline justify-between py-3 ${
                      i !== clinic.contact.hours.length - 1
                        ? "border-b border-hairline"
                        : ""
                    }`}
                  >
                    <dt className="text-ink text-[15px]">{h.day}</dt>
                    <dd className="text-ink-muted tabular-nums text-[15px]">
                      {h.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="bg-white border border-hairline rounded-3xl p-7">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-sage-soft/70 flex items-center justify-center text-sage-deep">
                  <Car size={16} strokeWidth={1.75} />
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-muted">
                  Getting Here
                </span>
              </div>
              <p className="mt-4 text-ink-muted text-[15px] leading-relaxed">
                {/* TODO: replace with real directions */}
                On-site parking is available. The clinic is a short drive from
                SM City Parañaque and major access points along the
                Sucat–Dr. A. Santos corridor.
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="relative aspect-[4/3] md:aspect-auto md:h-full md:min-h-[520px] overflow-hidden rounded-[2rem] shadow-soft-lg bg-bg-soft">
              <iframe
                title="Map of Grayce Medical Aesthetics"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik`}
                className="absolute inset-0 w-full h-full border-0 pointer-events-none"
                style={{
                  filter: "grayscale(1) contrast(1.08) brightness(1.02)",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full pointer-events-none"
              >
                <svg
                  width="52"
                  height="66"
                  viewBox="0 0 52 66"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    filter:
                      "drop-shadow(0 8px 18px rgba(42, 53, 40, 0.45))",
                  }}
                >
                  <path
                    d="M26 4C14.95 4 6 12.95 6 24c0 14 20 38 20 38s20-24 20-38c0-11.05-8.95-20-20-20z"
                    fill="#C9A14A"
                    stroke="#556148"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                  <circle cx="26" cy="24" r="7" fill="#556148" />
                </svg>
              </div>

              <div className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 px-3.5 py-2 bg-white/95 backdrop-blur-md rounded-full border border-hairline shadow-soft">
                <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                <span className="text-[11px] font-semibold text-ink">
                  Grayce Medical Aesthetics
                </span>
                <span className="text-[11px] text-ink-muted">
                  · Parañaque
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
