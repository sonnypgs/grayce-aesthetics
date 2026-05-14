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
      <div className="max-w-page mx-auto flex h-16 items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 md:px-10">
        <a
          href="#top"
          className="brand-logo-panel flex h-11 w-[116px] shrink-0 items-center justify-center rounded-full border border-hairline px-3 shadow-soft sm:h-12 sm:w-[148px]"
          aria-label="Grayce Medical Aesthetic Clinic home"
        >
          <BrandLogo mark="wordmark" className="h-8 w-full object-contain sm:h-9" />
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
          className="group inline-flex h-11 shrink-0 items-center gap-1.5 rounded-full bg-sage px-4 text-sm font-medium text-[var(--bg)] transition-colors hover:bg-sage-deep sm:gap-2 sm:px-5"
        >
          <span className="sm:hidden">Book</span>
          <span className="hidden sm:inline">Book Appointment</span>
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
