import { Car, Clock, MapPin } from "lucide-react";
import { clinic, mapQuery } from "@/lib/site";
import SectionHeading from "./SectionHeading";

function GoogleMapsIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 21s6-5.35 6-11a6 6 0 0 0-12 0c0 5.65 6 11 6 11Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M9.25 10.1a2.75 2.75 0 1 0 5.5 0 2.75 2.75 0 0 0-5.5 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 3.75v3.5M7.7 10.2h3.05M13.25 10.2h3.05"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.45"
      />
    </svg>
  );
}

function WazeIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M4.5 12.2c0-4.25 3.35-7.45 7.85-7.45 4.1 0 7.15 2.8 7.15 6.65 0 3.75-2.95 6.55-7.1 6.55H9.45L5.6 20.2l.9-3.95c-1.25-.95-2-2.35-2-4.05Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
      <path
        d="M9.1 10.6h.01M14.9 10.6h.01M9.8 14.05c1.25.95 3.15.95 4.4 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.9"
      />
      <path
        d="M8.6 18.05a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9ZM16.4 18.05a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Visit() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  const wazeUrl = "https://www.waze.com/ul?ll=14.4676%2C121.0207&navigate=yes";
  const osmMapUrl =
    "https://www.openstreetmap.org/?mlat=14.4676&mlon=121.0207#map=15/14.4676/121.0207";
  const osmTileZoom = 15;
  const osmTiles = Array.from({ length: 9 }, (_, index) => {
    const column = index % 3;
    const row = Math.floor(index / 3);

    return {
      x: 27398 + column,
      y: 15051 + row,
    };
  });

  return (
    <section id="visit" className="section-gradient-soft scroll-mt-24 py-24 md:py-32">
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
              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#4b594c] px-5 text-sm font-medium text-[#ffeedc] transition hover:bg-[#354238]"
                >
                  <GoogleMapsIcon className="h-4 w-4" />
                  Google Maps
                </a>
                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-hairline bg-[var(--surface)] px-5 text-sm font-medium text-[#243028] transition hover:border-[#947f64]"
                >
                  <WazeIcon className="h-4 w-4" />
                  Waze
                </a>
              </div>
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
                654 Nuestra Sra. De Lourdes Ave. for the most direct route.
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-hairline bg-[#4b594c] text-[#ffeedc] shadow-soft-lg">
              <div
                aria-label="OpenStreetMap view of Grayce Medical Aesthetic Clinic area"
                className="absolute inset-0 overflow-hidden"
                role="img"
              >
                <div className="absolute left-1/2 top-1/2 grid h-[768px] w-[768px] -translate-x-[52%] -translate-y-[55%] grid-cols-3 grid-rows-3 opacity-90 grayscale-[12%] sepia-[16%] saturate-[0.78]">
                  {osmTiles.map((tile) => (
                    <img
                      key={`${tile.x}-${tile.y}`}
                      src={`https://tile.openstreetmap.org/${osmTileZoom}/${tile.x}/${tile.y}.png`}
                      alt=""
                      className="h-64 w-64"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[#4b594c]/8 mix-blend-multiply" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,transparent_26%,rgba(255,238,220,0.32)_100%)]" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#ffeedc]/20" />

              <div className="pointer-events-none absolute left-1/2 top-[48%] z-10 -translate-x-1/2 -translate-y-[84%]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4b594c] text-[#ffeedc] shadow-soft-lg ring-8 ring-[#ffeedc]/75">
                  <MapPin size={22} strokeWidth={2} />
                </div>
              </div>

              <div className="absolute right-5 top-5 z-10 rounded-full bg-[#ffeedc]/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#4b594c] shadow-soft">
                © OSM contributors
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-10 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
                <div className="rounded-[1.5rem] border border-[#ffeedc]/20 bg-[#ffeedc]/95 p-5 text-[#243028] shadow-soft-lg backdrop-blur">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#947f64]">
                    OpenStreetMap Area View
                  </div>
                  <h3 className="font-display mt-2 text-2xl font-semibold leading-tight md:text-3xl">
                    GF Asher Bldg., 654 Nuestra Sra. De Lourdes Ave.
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#65705f]">
                    San Antonio Valley 1, Parañaque City
                  </p>
                </div>
                <a
                  href={osmMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-[#ffeedc] px-5 text-sm font-medium text-[#4b594c] shadow-soft"
                >
                  Open Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
