import { clinic } from "@/lib/placeholders";
import { Instagram } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#clinic", label: "The Clinic" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const ig = `https://instagram.com/${clinic.contact.instagram.replace(
    "@",
    ""
  )}`;

  return (
    <footer className="bg-bg border-t border-hairline pt-16 pb-10">
      <div className="max-w-page mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <div className="flex flex-col leading-none">
              <span className="font-display italic text-sage text-[34px] font-semibold tracking-tight">
                Grayce
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-ink mt-1">
                Medical Aesthetics
              </span>
            </div>
            <p className="mt-6 max-w-md text-ink-muted text-[15px] leading-relaxed">
              {clinic.tagline} A boutique clinic led by {clinic.doctor.name} in
              Parañaque City.
            </p>
            <a
              href={ig}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-ink-muted hover:text-sage-deep transition-colors"
            >
              <Instagram size={16} strokeWidth={1.75} />
              {clinic.contact.instagram}
            </a>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-ink">
              Explore
            </div>
            <ul className="mt-5 space-y-2.5 text-sm text-ink-muted">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="hover:text-ink transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-ink">
              Contact
            </div>
            <ul className="mt-5 space-y-2.5 text-sm text-ink-muted">
              <li className="text-ink font-medium">{clinic.contact.phone}</li>
              <li>
                <a
                  href={`mailto:${clinic.contact.email}`}
                  className="hover:text-ink transition-colors break-all"
                >
                  {clinic.contact.email}
                </a>
              </li>
              <li>
                {clinic.contact.address.line2}
                <br />
                {clinic.contact.address.region}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-ink-muted">
          <div>
            © {year} {clinic.name}. All rights reserved.
          </div>
          <div>Refined aesthetics, delivered with grace.</div>
        </div>
      </div>
    </footer>
  );
}
