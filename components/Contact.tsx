import {
  ArrowUpRight,
  Calendar,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { bookingHref, clinic, isExternalBooking } from "@/lib/site";
import BrandLogo from "./BrandLogo";
import TrackedLink from "./TrackedLink";

export default function Contact() {
  const subject = encodeURIComponent(
    "Appointment Request - Grayce Medical Aesthetic Clinic"
  );
  const body = encodeURIComponent(
    "Hello Grayce,\n\nI'd like to book an appointment.\n\nName:\nPreferred date / time:\nTreatment or concern:\n\nThank you."
  );
  const mailto = `mailto:${clinic.contact.email}?subject=${subject}&body=${body}`;
  const ig = `https://instagram.com/${clinic.contact.instagram.replace("@", "")}`;

  return (
    <section id="contact" className="section-gradient-warm scroll-mt-24 py-24 md:py-32">
      <div className="max-w-page mx-auto px-6 md:px-10">
        <div className="grid overflow-hidden rounded-[2.5rem] border border-hairline bg-[var(--surface)] shadow-soft-xl md:grid-cols-12">
          <div className="bg-[#4b594c] p-8 text-[#ffeedc] md:col-span-5 md:p-12">
            <BrandLogo tone="light" className="h-32 w-56 object-contain" />
            <h2 className="font-display mt-10 text-5xl leading-none md:text-6xl">
              Ready for a careful consultation?
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-[#ffeedc]/80">
              Book online through Fresha for appointment availability and
              current promos, or contact Grayce directly by phone, email, or
              Instagram.
            </p>
          </div>

          <div className="surface-panel p-8 md:col-span-7 md:p-12">
            <div className="flex flex-wrap gap-3">
              <TrackedLink
                href={bookingHref}
                target={isExternalBooking ? "_blank" : undefined}
                rel={isExternalBooking ? "noopener noreferrer" : undefined}
                eventName="book_appointment_click"
                eventData={{ location: "contact" }}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[#4b594c] px-6 font-medium text-[#ffeedc]"
              >
                <Calendar size={16} strokeWidth={2} />
                Book Appointment
                <ArrowUpRight size={16} strokeWidth={2} />
              </TrackedLink>
              <TrackedLink
                href={mailto}
                eventName="email_click"
                eventData={{ location: "contact", email: clinic.contact.email }}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-[rgba(75,89,76,0.18)] px-6 font-medium text-[#243028]"
              >
                <Mail size={16} strokeWidth={2} />
                Email Clinic
              </TrackedLink>
            </div>

            <dl className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-[rgba(75,89,76,0.14)] p-5">
                <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#947f64]">
                  <Phone size={14} /> Phone
                </dt>
                <dd className="mt-3 space-y-1">
                  {clinic.contact.phones.map((phone) => (
                    <TrackedLink
                      key={phone}
                      href={`tel:${phone}`}
                      eventName="phone_click"
                      eventData={{ location: "contact", phone }}
                      className="block font-display text-xl font-semibold text-[#243028]"
                    >
                      {phone}
                    </TrackedLink>
                  ))}
                </dd>
              </div>

              <div className="rounded-2xl border border-[rgba(75,89,76,0.14)] p-5">
                <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#947f64]">
                  <Instagram size={14} /> Instagram
                </dt>
                <dd className="mt-3">
                  <TrackedLink
                    href={ig}
                    target="_blank"
                    rel="noopener noreferrer"
                    eventName="instagram_profile_click"
                    eventData={{ location: "contact" }}
                    className="font-display text-xl font-semibold text-[#243028]"
                  >
                    {clinic.contact.instagram}
                  </TrackedLink>
                </dd>
              </div>

              <div className="rounded-2xl border border-[rgba(75,89,76,0.14)] p-5 sm:col-span-2">
                <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#947f64]">
                  <MapPin size={14} /> Visit
                </dt>
                <dd className="mt-3 font-display text-2xl font-semibold leading-tight text-[#243028]">
                  {clinic.contact.address.line1}, {clinic.contact.address.line2}
                  <br />
                  {clinic.contact.address.line3}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
