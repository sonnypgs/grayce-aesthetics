"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { bookingHref, isExternalBooking, serviceGroups } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import TrackedLink from "./TrackedLink";

type ServiceDetailEntry = string | {
  name: string;
  description: string;
};

type ServiceDetailSection = {
  title: string;
  items: ServiceDetailEntry[];
};

type ServiceDetailItem = {
  title: string;
  image: string;
  text?: string;
  items?: ServiceDetailEntry[];
  sections?: ServiceDetailSection[];
};

function ServiceEntry({ service }: { service: ServiceDetailEntry }) {
  const entry =
    typeof service === "string" ? { name: service, description: "" } : service;

  return (
    <li className="flex gap-2">
      <span className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-[#947f64]" />
      <span>
        <span className="font-medium">{entry.name}</span>
        {entry.description ? (
          <span className="mt-0.5 block text-[13px] leading-snug text-[#65705f]">
            {entry.description}
          </span>
        ) : null}
      </span>
    </li>
  );
}

export default function Services() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const modalHistoryActiveRef = useRef(false);
  const selectedService =
    selectedIndex === null ? null : serviceGroups[selectedIndex] ?? null;
  const subserviceBaseDelay = 820;
  const subserviceStagger = 220;
  const subserviceDuration = 700;
  const serviceActionDelay = selectedService
    ? subserviceBaseDelay +
      Math.max(0, selectedService.subcategories.length - 1) *
        subserviceStagger +
      subserviceDuration +
      220
    : 0;

  const openService = (index: number) => {
    if (selectedIndex === null && typeof window !== "undefined") {
      window.history.pushState(
        { grayceServiceModal: true },
        "",
        window.location.href,
      );
      modalHistoryActiveRef.current = true;
    }

    setSelectedIndex(index);
  };

  const closeService = () => {
    if (modalHistoryActiveRef.current && typeof window !== "undefined") {
      window.history.back();
      return;
    }

    setSelectedIndex(null);
  };

  useEffect(() => {
    const onPopState = () => {
      if (!modalHistoryActiveRef.current) return;

      modalHistoryActiveRef.current = false;
      setSelectedIndex(null);
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (!selectedService) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeService();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedService]);

  return (
    <section id="services" className="section-gradient-warm scroll-mt-24 py-24 md:py-32">
      <div className="max-w-page mx-auto px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionHeading
              eyebrow="Treatments"
              title="A focused menu, selected after consultation."
              intro="The public menu is intentionally category-led. Dr. Grace confirms the exact plan, sequence, and suitability after skin assessment."
            />
          </div>
          <div className="md:col-span-4 md:text-right">
            <TrackedLink
              href={bookingHref}
              target={isExternalBooking ? "_blank" : undefined}
              rel={isExternalBooking ? "noopener noreferrer" : undefined}
              eventName="book_appointment_click"
              eventData={{ location: "services" }}
              className="inline-flex h-12 items-center gap-2 rounded-full border border-hairline bg-[var(--surface)] px-6 font-medium text-[#243028] transition-colors hover:border-gold"
            >
              Book Appointment
              <ArrowUpRight size={16} strokeWidth={2} />
            </TrackedLink>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceGroups.map((service, index) => (
            <button
              key={service.title}
              type="button"
              onClick={() => openService(index)}
              aria-haspopup="dialog"
              aria-expanded={selectedIndex === index}
              className="group surface-panel overflow-hidden rounded-[1.75rem] border border-hairline text-left shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-soft-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-bg-soft">
                <img
                  src={service.image}
                  alt=""
                  className="mobile-parallax-media h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  data-mobile-parallax={index % 2 === 0 ? "28" : "-22"}
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold leading-tight text-[#243028]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#65705f]">
                  {service.summary}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedService &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 z-[100]">
            <button
              type="button"
              aria-label="Dismiss treatment details"
              onClick={closeService}
              className="lightbox-backdrop service-modal-backdrop absolute inset-0 bg-[rgba(17,23,17,0.84)] backdrop-blur-[3px] md:bg-[rgba(17,23,17,0.8)] lg:bg-[rgba(36,48,40,0.7)]"
            />

            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="treatment-dialog-title"
              className="service-modal-panel absolute inset-0 overflow-y-auto bg-[#fff7ed] text-[#243028] shadow-soft-xl md:inset-y-6 md:left-1/2 md:right-auto md:w-[min(calc(100vw-2rem),50rem)] md:max-w-none md:rounded-[1.75rem] lg:w-[min(calc(100vw-4rem),72rem)] lg:overflow-hidden"
            >
              <button
                type="button"
                onClick={closeService}
                className="fixed right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-[#fff7ed]/95 text-[#243028] shadow-soft transition-colors hover:border-[#947f64] md:absolute md:right-5 md:top-5"
                aria-label="Close treatment details"
              >
                <span className="relative block h-4 w-4" aria-hidden="true">
                  <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
                  <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
                </span>
              </button>

              <div className="grid min-h-full lg:grid-cols-12">
                <figure className="relative min-h-[280px] overflow-hidden bg-bg-soft md:min-h-[320px] lg:col-span-4 lg:min-h-full">
                  <img
                    src={selectedService.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,48,40,0.02),rgba(36,48,40,0.48))]" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-6 text-[#fff7ed] md:p-8">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ffeedc]/78">
                      Treatment
                    </span>
                    <p className="font-display mt-3 max-w-[18rem] text-3xl font-semibold leading-[1.05] md:text-[2.55rem]">
                      {selectedService.title}
                    </p>
                  </figcaption>
                </figure>

                <div className="lg:col-span-8 lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto">
                  <div className="px-6 pb-9 pt-8 md:px-10 md:py-9 lg:px-9 lg:py-8">
                    <p
                      id="treatment-dialog-title"
                      className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#947f64]"
                    >
                      Treatment Details
                    </p>
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#65705f]">
                      {selectedService.detail}
                    </p>

                    <div className="mt-7 border-y border-hairline">
                      {selectedService.subcategories.map((item, itemIndex) => {
                        const detailItem = item as ServiceDetailItem;

                        return (
                          <article
                            key={detailItem.title}
                            className="service-modal-subservice grid grid-cols-[4.75rem_1fr] gap-4 border-b border-hairline py-4 last:border-b-0 sm:grid-cols-[5.5rem_1fr] sm:gap-5"
                            style={{
                              animationDelay: `${
                                subserviceBaseDelay + itemIndex * subserviceStagger
                              }ms`,
                            }}
                          >
                            <div className="relative aspect-square overflow-hidden rounded-[0.75rem] border border-hairline bg-bg-soft">
                              <img
                                src={detailItem.image}
                                alt=""
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="self-center">
                              <h4 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#947f64]">
                                {detailItem.title}
                              </h4>
                              {detailItem.text ? (
                                <p className="mt-2 text-[15px] leading-relaxed text-[#243028]">
                                  {detailItem.text}
                                </p>
                              ) : null}
                            </div>
                            {detailItem.items?.length ? (
                              <ul className="col-span-2 mt-1 grid gap-2.5 text-[15px] leading-relaxed text-[#243028] xl:grid-cols-2">
                                {detailItem.items.map((service) => (
                                  <ServiceEntry
                                    key={
                                      typeof service === "string"
                                        ? service
                                        : service.name
                                    }
                                    service={service}
                                  />
                                ))}
                              </ul>
                            ) : null}
                            {detailItem.sections?.length ? (
                              <div className="col-span-2 mt-1 grid gap-4">
                                {detailItem.sections.map((section) => (
                                  <div key={section.title}>
                                    <h5 className="text-[12px] font-semibold text-[#4b594c]">
                                      {section.title}
                                    </h5>
                                    <ul className="mt-2 grid gap-2.5 text-[15px] leading-relaxed text-[#243028] xl:grid-cols-2">
                                      {section.items.map((service) => (
                                        <ServiceEntry
                                          key={
                                            typeof service === "string"
                                              ? service
                                              : service.name
                                          }
                                          service={service}
                                        />
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            ) : null}
                          </article>
                        );
                      })}
                    </div>

                    <div
                      className="service-modal-action mt-6 flex flex-col items-start gap-3 sm:flex-row"
                      style={{
                        animationDelay: `${serviceActionDelay}ms`,
                      }}
                    >
                      <TrackedLink
                        href={bookingHref}
                        target={isExternalBooking ? "_blank" : undefined}
                        rel={
                          isExternalBooking ? "noopener noreferrer" : undefined
                        }
                        eventName="book_appointment_click"
                        eventData={{
                          location: "services_modal",
                          label: selectedService.title,
                        }}
                        className="group inline-flex h-12 items-center justify-center gap-2 rounded-[0.35rem] bg-[#4b594c] px-6 font-medium text-[#ffeedc] transition-colors hover:bg-[#354238]"
                      >
                        Book Consultation
                        <ArrowUpRight
                          size={16}
                          strokeWidth={2}
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </TrackedLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
