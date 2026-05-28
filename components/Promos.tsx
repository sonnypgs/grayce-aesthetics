import { ArrowUpRight, CalendarDays, Sparkles, Tag } from "lucide-react";
import { bookingHref, isExternalBooking, photos } from "@/lib/site";
import TrackedLink from "./TrackedLink";

const promoNotes = [
  {
    title: "Fresh offers",
    text: "New promos and package notes are added as the clinic refreshes its treatment calendar.",
  },
  {
    title: "Current on Fresha",
    text: "Fresha is the best place to see what is live now, including availability and booking details.",
  },
  {
    title: "Carefully matched",
    text: "The team can still confirm which promo fits your skin goals before treatment begins.",
  },
];

export default function Promos() {
  return (
    <section
      id="promos"
      className="relative scroll-mt-24 overflow-hidden bg-[#4b594c] py-20 text-[#ffeedc] md:py-28"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,238,220,0.14),transparent_36%),linear-gradient(180deg,rgba(36,48,40,0.06),rgba(36,48,40,0.24))]" />
      <div className="relative max-w-page mx-auto px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#ffeedc]/20 bg-[#ffeedc]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ffeedc]/90">
              <Sparkles size={12} strokeWidth={1.8} />
              Promos
            </div>
            <h2 className="font-display mt-5 max-w-3xl text-[2.5rem] font-semibold leading-[1.02] text-[#fff7ed] sm:text-5xl md:text-[4.1rem]">
              There is always something new to check on Fresha.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#ffeedc]/80 sm:text-lg">
              Grayce updates promos often, from seasonal skin refreshes to
              limited treatment packages. For the latest live offers, open
              Fresha and choose the option that fits your next visit.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
              <TrackedLink
                href={bookingHref}
                target={isExternalBooking ? "_blank" : undefined}
                rel={isExternalBooking ? "noopener noreferrer" : undefined}
                eventName="book_appointment_click"
                eventData={{ location: "promos" }}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#ffeedc] px-6 font-medium text-[#4b594c] shadow-soft transition-colors hover:bg-[#fff7ed]"
              >
                Check Promos on Fresha
                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </TrackedLink>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#ffeedc]/30 px-6 font-medium text-[#ffeedc] transition-colors hover:border-[#ffeedc]/60 hover:bg-[#ffeedc]/10"
              >
                Ask the Clinic
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <figure className="relative overflow-hidden rounded-t-[4rem] rounded-b-[1.5rem] border border-[#ffeedc]/20 bg-[#354238] shadow-soft-xl md:rounded-t-[6rem]">
              <img
                src={photos.serumDrop}
                alt="Skincare serum drop for Grayce promo treatments"
                className="mobile-parallax-media aspect-[4/3] h-full w-full object-cover opacity-90 mix-blend-screen"
                data-mobile-parallax="-26"
              />
              <figcaption className="absolute bottom-4 left-4 right-4 rounded-[1.25rem] border border-[#ffeedc]/20 bg-[#243028]/80 p-4 text-sm leading-relaxed text-[#ffeedc]/80 shadow-soft backdrop-blur">
                <span className="mb-1 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#ffeedc]">
                  <CalendarDays size={13} strokeWidth={1.8} />
                  Updated offers
                </span>
                Fresha keeps the current promo list close to the booking flow.
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {promoNotes.map((note) => (
            <article
              key={note.title}
              className="rounded-[1.25rem] border border-[#ffeedc]/20 bg-[#ffeedc]/10 p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffeedc] text-[#4b594c]">
                  <Tag size={16} strokeWidth={1.8} />
                </span>
                <h3 className="font-display text-xl font-semibold leading-tight text-[#fff7ed]">
                  {note.title}
                </h3>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-[#ffeedc]/75">
                {note.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
