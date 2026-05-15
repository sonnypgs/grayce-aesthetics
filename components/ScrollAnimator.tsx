"use client";

import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main > section"));

    document.body.classList.add("motion-ready");
    sections.forEach((section) => section.classList.add("section-reveal"));

    let frame: number | null = null;

    const updateVisibility = () => {
      frame = null;
      const viewportHeight = window.innerHeight;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isNearViewport =
          rect.top < viewportHeight * 1.08 && rect.bottom > -viewportHeight * 0.08;

        section.classList.toggle("section-visible", isNearViewport);
      });
    };

    const scheduleUpdate = () => {
      if (frame !== null) {
        return;
      }

      frame = window.requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);

    return () => {
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
      document.body.classList.remove("motion-ready");
      sections.forEach((section) => {
        section.classList.remove("section-reveal", "section-visible");
      });
    };
  }, []);

  return null;
}
