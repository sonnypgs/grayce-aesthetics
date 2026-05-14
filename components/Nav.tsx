"use client";

import { useEffect, useState } from "react";
import { bookingHref, isExternalBooking } from "@/lib/site";
import BrandLogo from "./BrandLogo";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#clinic", label: "Clinic" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-lg border-b border-hairline"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-page mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a
          href="#top"
          className="brand-logo-panel flex h-12 w-[148px] items-center justify-center rounded-full border border-hairline px-3 shadow-soft"
          aria-label="Grayce Medical Aesthetic Clinic home"
        >
          <BrandLogo className="h-9 w-full object-contain" />
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-[14px] text-ink-muted font-medium">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={bookingHref}
          target={isExternalBooking ? "_blank" : undefined}
          rel={isExternalBooking ? "noopener noreferrer" : undefined}
          className="group inline-flex h-11 items-center gap-2 rounded-full bg-sage px-5 text-sm font-medium text-[var(--bg)] transition-colors hover:bg-sage-deep"
        >
          Book Appointment
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </a>
      </div>
    </header>
  );
}
