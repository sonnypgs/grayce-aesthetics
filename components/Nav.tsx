"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#clinic", label: "The Clinic" },
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
        <a href="#top" className="flex items-center gap-3 group">
          <span className="flex flex-col leading-none">
            <span className="font-display italic text-sage text-[26px] md:text-[30px] font-semibold tracking-tight">
              Grayce
            </span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-ink mt-0.5">
              Medical Aesthetics
            </span>
          </span>
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
          href="#contact"
          className="group inline-flex items-center gap-2 h-11 px-5 rounded-full bg-sage text-white text-sm font-medium hover:bg-sage-deep transition-colors"
        >
          Book a Consultation
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
