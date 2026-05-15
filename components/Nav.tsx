"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { bookingHref, isExternalBooking } from "@/lib/site";
import BrandLogo from "./BrandLogo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#clinic", label: "Clinic" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "Doctor" },
  { href: "#visit", label: "Visit" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const compactLogo = scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,box-shadow] duration-200 ease-out ${
        scrolled || open
          ? "border-b border-hairline bg-[#ffeedc] shadow-soft"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="max-w-page mx-auto flex h-16 items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 md:px-10">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className={`relative flex h-12 w-[86px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border p-2 shadow-soft transition-all duration-500 ease-out sm:h-14 sm:w-28 lg:h-16 lg:w-32 ${
            compactLogo
              ? "border-[#4b594c] bg-[#4b594c]"
              : "border-hairline bg-[#ffeedc]"
          }`}
          aria-label="Grayce Medical Aesthetic Clinic home"
        >
          <BrandLogo
            className={`absolute inset-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)] object-contain transition-all duration-500 ease-out ${
              compactLogo
                ? "scale-95 opacity-0"
                : "scale-100 opacity-100"
            }`}
          />
          <BrandLogo
            tone="light"
            className={`absolute inset-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)] object-contain transition-all duration-500 ease-out ${
              compactLogo
                ? "scale-100 opacity-100"
                : "scale-105 opacity-0"
            }`}
          />
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
          className="group hidden h-11 shrink-0 items-center gap-2 rounded-full bg-sage px-5 text-sm font-medium text-[var(--bg)] transition-colors hover:bg-sage-deep lg:inline-flex"
        >
          Book Appointment
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-hairline bg-[var(--surface)] text-[#243028] shadow-soft lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={19} strokeWidth={1.8} /> : <Menu size={19} strokeWidth={1.8} />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-hairline bg-[#ffeedc] px-4 pb-5 pt-3 shadow-soft lg:hidden">
          <nav className="mx-auto grid max-w-page gap-1 text-sm font-medium text-ink">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 transition-colors hover:bg-sage-soft"
              >
                {link.label}
              </a>
            ))}
            <a
              href={bookingHref}
              target={isExternalBooking ? "_blank" : undefined}
              rel={isExternalBooking ? "noopener noreferrer" : undefined}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-sage px-5 font-medium text-[var(--bg)]"
            >
              Book Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
