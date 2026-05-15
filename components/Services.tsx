import { ArrowUpRight } from "lucide-react";
import { bookingHref, isExternalBooking, serviceGroups } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="section-gradient-warm scroll-mt-24 py-24 md:py-32">
      <div className="max-w-page mx-auto px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionHeading
              eyebrow="Treatments"
              title="A focused menu, selected after consultation."
              intro="The public menu is intentionally category-led. Dr. Braga confirms the exact plan, sequence, and suitability after skin assessment."
            />
          </div>
          <div className="md:col-span-4 md:text-right">
            <a
              href={bookingHref}
              target={isExternalBooking ? "_blank" : undefined}
              rel={isExternalBooking ? "noopener noreferrer" : undefined}
              className="inline-flex h-12 items-center gap-2 rounded-full border border-hairline bg-[var(--surface)] px-6 font-medium text-[#243028] transition-colors hover:border-gold"
            >
              Book Appointment
              <ArrowUpRight size={16} strokeWidth={2} />
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceGroups.map((service, index) => (
            <article
              key={service.title}
              className="group surface-panel overflow-hidden rounded-[1.75rem] border border-hairline shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-soft-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-bg-soft">
                <img
                  src={service.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#947f64]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.75}
                    className="text-[#947f64]"
                  />
                </div>
                <h3 className="font-display text-2xl font-semibold leading-tight text-[#243028]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#65705f]">
                  {service.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
