import { Car, Clock, MapPin } from "lucide-react";
import { clinic, mapQuery } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function Visit() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <section id="visit" className="scroll-mt-24 bg-bg py-24 md:py-32">
      <div className="max-w-page mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Visit"
          title="Find us in San Antonio Valley 1."
          intro="Appointments are handled directly through the clinic, with online Fresha booking ready to connect once the final booking link is available."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-12">
          <div className="space-y-5 md:col-span-5">
            <div className="surface-panel rounded-[1.5rem] border border-hairline p-6 shadow-soft">
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#947f64]">
                <MapPin size={15} />
                Address
              </div>
              <address className="mt-4 not-italic font-display text-2xl font-semibold leading-tight text-[#243028]">
                {clinic.contact.address.line1}
                <br />
                {clinic.contact.address.line2}
                <br />
                {clinic.contact.address.line3}
              </address>
              <p className="mt-2 text-sm text-[#65705f]">
                {clinic.contact.address.country}
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex h-11 items-center rounded-full bg-[#4b594c] px-5 text-sm font-medium text-[#ffeedc]"
              >
                Open in Maps
              </a>
            </div>

            <div className="surface-panel rounded-[1.5rem] border border-hairline p-6 shadow-soft">
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#947f64]">
                <Clock size={15} />
                Hours
              </div>
              <dl className="mt-4">
                {clinic.contact.hours.map((hour) => (
                  <div
                    key={hour.day}
                    className="flex items-baseline justify-between gap-5 border-b border-[rgba(75,89,76,0.12)] py-3 last:border-b-0"
                  >
                    <dt className="text-sm text-[#243028]">{hour.day}</dt>
                    <dd className="text-right text-sm text-[#65705f]">
                      {hour.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="surface-panel rounded-[1.5rem] border border-hairline p-6 shadow-soft">
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#947f64]">
                <Car size={15} />
                Arrival
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#65705f]">
                Search for Grayce Medical Aesthetic Clinic or GF Asher Bldg. on
                Nuestra Sra. De Lourdes Ave. for the most direct route.
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="relative flex min-h-[520px] overflow-hidden rounded-[2rem] border border-hairline bg-[#4b594c] p-8 text-[#ffeedc] shadow-soft-lg">
              <div
                aria-hidden
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #ffeedc 1px, transparent 1px), linear-gradient(0deg, #ffeedc 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                }}
              />
              <div className="relative mt-auto max-w-lg">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-[#ffeedc]/30 bg-[#ffeedc] text-[#4b594c] shadow-soft">
                  <MapPin size={26} strokeWidth={1.8} />
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ffeedc]/70">
                  Map Preview
                </div>
                <h3 className="font-display mt-4 text-4xl leading-tight md:text-5xl">
                  GF Asher Bldg., Nuestra Sra. De Lourdes Ave.
                </h3>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-[#ffeedc]/78">
                  Open the live map for the most accurate route to San Antonio
                  Valley 1, Parañaque City.
                </p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex h-11 items-center rounded-full bg-[#ffeedc] px-5 text-sm font-medium text-[#4b594c]"
                >
                  Open Live Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
