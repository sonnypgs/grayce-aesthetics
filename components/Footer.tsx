import { Instagram } from "lucide-react";
import { brand, clinic } from "@/lib/site";
import BrandLogo from "./BrandLogo";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Treatments" },
  { href: "#clinic", label: "Clinic" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const ig = `https://instagram.com/${clinic.contact.instagram.replace("@", "")}`;

  return (
    <footer className="border-t border-hairline bg-bg py-12">
      <div className="max-w-page mx-auto px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="brand-logo-panel flex h-28 w-56 items-center justify-center rounded-[2rem] border border-hairline p-4 shadow-soft">
              <BrandLogo className="h-full w-full object-contain" />
            </div>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-muted">
              {brand.tagline} Physician-led skin, laser, injectable, and
              regenerative aesthetic care in Parañaque City.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
              Explore
            </div>
            <ul className="mt-5 space-y-2.5 text-sm text-ink-muted">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
              Contact
            </div>
            <ul className="mt-5 space-y-2.5 text-sm text-ink-muted">
              {clinic.contact.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone}`} className="hover:text-ink">
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${clinic.contact.email}`}
                  className="break-all hover:text-ink"
                >
                  {clinic.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={ig}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-ink"
                >
                  <Instagram size={15} />
                  {clinic.contact.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-hairline pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {year} {brand.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
