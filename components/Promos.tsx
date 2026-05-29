import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { bookingHref, isExternalBooking, photos } from "@/lib/site";
import TrackedLink from "./TrackedLink";

const promoDetails = [
  {
    icon: CalendarDays,
    title: "New promos added regularly",
    text: "Check back often",
  },
  {
    icon: Clock3,
    title: "Limited-time offers",
    text: "While slots last",
  },
  {
    icon: ShieldCheck,
    title: "Fresha-secured booking",
    text: "Safe and seamless",
  },
];

export default function Promos() {
  return (
    <section
      id="promos"
      className="relative scroll-mt-24 overflow-hidden bg-[#4b594c] text-[#ffeedc]"
    >
      <div className="absolute inset-x-0 top-0 hidden h-[700px] bg-[#354238] md:block">
        <img
          src={photos.facialHandpiece}
          alt=""
          className="h-full w-full object-cover object-[55%_50%] opacity-95 saturate-[0.78] sepia-[0.22]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(75,89,76,0.2),transparent_34%),linear-gradient(180deg,rgba(255,238,220,0.08),transparent_42%,rgba(36,48,40,0.14))]" />
      </div>
      <svg
        aria-hidden="true"
        className="absolute inset-x-0 top-0 hidden h-[700px] w-full md:block"
        preserveAspectRatio="none"
        viewBox="0 0 1440 700"
      >
        <path
          d="M0 0H870C805 126 757 239 748 360C739 481 789 596 888 700H0Z"
          fill="#4b594c"
        />
      </svg>
      <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(ellipse_at_18%_12%,rgba(255,238,220,0.16),transparent_38%),linear-gradient(180deg,rgba(36,48,40,0.08),rgba(36,48,40,0.26))] md:h-[700px]" />
      <div className="absolute bottom-[5.5rem] left-0 hidden h-72 w-36 opacity-20 md:block">
        <div className="absolute bottom-20 left-0 h-px w-28 origin-left rotate-[-48deg] bg-[#ffeedc]" />
        <div className="absolute bottom-28 left-0 h-px w-24 origin-left rotate-[-30deg] bg-[#ffeedc]" />
        <div className="absolute bottom-36 left-0 h-px w-20 origin-left rotate-[-12deg] bg-[#ffeedc]" />
      </div>

      <div className="relative grid md:min-h-[700px] md:grid-cols-[minmax(0,1fr)_minmax(390px,43vw)]">
        <div className="px-6 py-20 md:py-14 md:pl-[max(2.5rem,calc((100vw-1240px)/2+2.5rem))] md:pr-12">
          <div className="max-w-[44rem]">
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ffeedc]/75">
              <Sparkles size={13} strokeWidth={1.8} />
              Promos
            </div>

            <div className="mt-3 h-px w-20 bg-[#ffeedc]/46" />

            <h2 className="font-display mt-6 max-w-[33rem] text-[clamp(2.85rem,4.15vw,4.25rem)] font-semibold leading-[0.98] text-[#fff7ed]">
              Latest offers live on Fresha.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#ffeedc]/78 sm:text-lg">
              Exclusive seasonal promotions and limited-time offers are
              available on our Fresha page. Book with ease, at your convenience.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
              <TrackedLink
                href={bookingHref}
                target={isExternalBooking ? "_blank" : undefined}
                rel={isExternalBooking ? "noopener noreferrer" : undefined}
                eventName="book_appointment_click"
                eventData={{ location: "promos" }}
                className="group inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-[0.35rem] bg-[#ffeedc] px-7 font-medium text-[#4b594c] shadow-soft transition-colors duration-200 hover:bg-[#fff7ed]"
              >
                View Fresha Promos
                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </TrackedLink>
              <a
                href="#contact"
                className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 font-medium text-[#d5b990] transition-colors duration-200 hover:text-[#ffeedc]"
              >
                Ask the Clinic
              </a>
            </div>

            <ul className="mt-9 max-w-[34rem] divide-y divide-[#ffeedc]/18">
              {promoDetails.map(({ icon: Icon, ...detail }) => (
                <li
                  key={detail.title}
                  className="grid gap-3 py-3 sm:grid-cols-[3.5rem_1fr] sm:items-center sm:gap-5"
                >
                  <div className="border-[#ffeedc]/18 sm:border-r">
                    <Icon
                      size={22}
                      strokeWidth={1.7}
                      className="text-[#d5b990]"
                    />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ffeedc]/76">
                      {detail.title}
                    </h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-[#ffeedc]/80">
                      {detail.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="relative min-h-[390px] overflow-hidden bg-[#354238] md:min-h-full md:bg-transparent">
          <img
            src={photos.facialHandpiece}
            alt="Facial treatment handpiece for Grayce skin care"
            className="mobile-parallax-media h-full w-full object-cover object-[18%_50%] opacity-95 saturate-[0.78] sepia-[0.22] md:hidden"
            data-mobile-parallax="28"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(36,48,40,0.14))] md:hidden" />
        </figure>
      </div>

    </section>
  );
}
