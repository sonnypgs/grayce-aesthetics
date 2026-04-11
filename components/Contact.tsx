import { clinic } from "@/lib/placeholders";
import Star from "./Star";
import {
  Phone,
  Mail,
  Instagram,
  Calendar,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  const subject = encodeURIComponent(
    "Consultation Request — Grayce Medical Aesthetics"
  );
  const body = encodeURIComponent(
    "Hello Dr. Braga,\n\nI'd like to book a consultation at Grayce.\n\nName:\nPreferred date / time:\nWhat I'd like to discuss:\n\nThank you."
  );
  const mailto = `mailto:${clinic.contact.email}?subject=${subject}&body=${body}`;
  const tel = `tel:${clinic.contact.phone.replace(/\s|\(|\)|-/g, "")}`;
  const ig = `https://instagram.com/${clinic.contact.instagram.replace(
    "@",
    ""
  )}`;

  return (
    <section id="contact" className="py-24 md:py-32 scroll-mt-24 bg-bg">
      <div className="max-w-page mx-auto px-6 md:px-10">
        <div className="relative rounded-[2.5rem] bg-bg-alt border border-hairline overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-0"
            style={{
              background:
                "radial-gradient(900px 500px at 85% 0%, rgba(243, 233, 200, 0.65), transparent 60%), radial-gradient(700px 400px at 0% 100%, rgba(124, 142, 110, 0.12), transparent 60%)",
            }}
          />
          <div className="relative grid md:grid-cols-12 gap-10 md:gap-12 p-8 md:p-16">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-hairline text-sage-deep text-[11px] font-semibold uppercase tracking-[0.18em]">
                <Star className="text-navy" size={11} />
                Book a Consultation
              </div>

              <h2 className="font-display mt-6 text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[1.04] text-ink">
                Let&apos;s talk about
                <br />
                <span className="font-script italic text-sage text-[1.15em] leading-none">
                  your skin
                </span>
                .
              </h2>

              <p className="mt-6 text-ink-muted text-lg max-w-xl leading-relaxed">
                Reach out by phone, email, or Instagram to schedule your first
                consultation with Dr. Braga. We&apos;ll respond within one
                business day.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={mailto}
                  className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-sage text-white font-medium hover:bg-sage-deep transition-colors"
                >
                  <Calendar size={16} strokeWidth={2} />
                  Request a Consultation
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <a
                  href={tel}
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-hairline bg-white text-ink font-medium hover:border-sage transition-colors"
                >
                  <Phone size={16} strokeWidth={2} />
                  Call the Clinic
                </a>
              </div>

              <p className="mt-6 text-sm text-ink-muted">
                Online booking coming soon.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="bg-white border border-hairline rounded-3xl p-7 shadow-soft">
                <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-muted">
                  Contact Details
                </div>

                <dl className="mt-5 space-y-5">
                  <div>
                    <dt className="flex items-center gap-2 text-xs text-ink-muted">
                      <Phone size={13} strokeWidth={2} /> Phone
                    </dt>
                    <dd className="mt-1.5">
                      <a
                        href={tel}
                        className="font-display text-lg font-semibold text-ink hover:text-sage-deep transition-colors"
                      >
                        {clinic.contact.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-2 text-xs text-ink-muted">
                      <Mail size={13} strokeWidth={2} /> Email
                    </dt>
                    <dd className="mt-1.5">
                      <a
                        href={mailto}
                        className="font-display text-lg font-semibold text-ink hover:text-sage-deep transition-colors break-all"
                      >
                        {clinic.contact.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-2 text-xs text-ink-muted">
                      <Instagram size={13} strokeWidth={2} /> Instagram
                    </dt>
                    <dd className="mt-1.5">
                      <a
                        href={ig}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-lg font-semibold text-ink hover:text-sage-deep transition-colors"
                      >
                        {clinic.contact.instagram}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-2 text-xs text-ink-muted">
                      <MapPin size={13} strokeWidth={2} /> Visit
                    </dt>
                    <dd className="mt-1.5 font-display text-[15px] font-semibold text-ink leading-snug">
                      {clinic.contact.address.line1}
                      <br />
                      {clinic.contact.address.line2}
                      <div className="text-ink-muted text-sm font-normal mt-1">
                        {clinic.contact.address.region}
                      </div>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
