"use client";

import { useEffect } from "react";

const MOBILE_QUERY = "(max-width: 767px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function MobileParallax() {
  useEffect(() => {
    const mobileMedia = window.matchMedia(MOBILE_QUERY);
    const reducedMotionMedia = window.matchMedia(REDUCED_MOTION_QUERY);
    const layers = Array.from(
      document.querySelectorAll<HTMLElement>("[data-mobile-parallax]"),
    );

    let frame: number | null = null;

    const resetLayers = () => {
      layers.forEach((layer) => {
        layer.style.removeProperty("--mobile-parallax-y");
      });
    };

    const update = () => {
      frame = null;

      if (!mobileMedia.matches || reducedMotionMedia.matches) {
        resetLayers();
        return;
      }

      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      layers.forEach((layer) => {
        const rect = layer.getBoundingClientRect();
        if (
          rect.bottom < -viewportHeight * 0.18 ||
          rect.top > viewportHeight * 1.18
        ) {
          return;
        }

        const amount = Number(layer.dataset.mobileParallax || 28);
        const travel = clamp(amount, -56, 56);
        const elementCenter = rect.top + rect.height / 2;
        const range = viewportCenter + rect.height / 2;
        const progress = clamp(
          (viewportCenter - elementCenter) / range,
          -1,
          1,
        );

        layer.style.setProperty(
          "--mobile-parallax-y",
          `${(progress * travel).toFixed(2)}px`,
        );
      });
    };

    const scheduleUpdate = () => {
      if (frame !== null) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    scheduleUpdate();

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("orientationchange", scheduleUpdate);
    mobileMedia.addEventListener("change", scheduleUpdate);
    reducedMotionMedia.addEventListener("change", scheduleUpdate);

    return () => {
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("orientationchange", scheduleUpdate);
      mobileMedia.removeEventListener("change", scheduleUpdate);
      reducedMotionMedia.removeEventListener("change", scheduleUpdate);
      resetLayers();
    };
  }, []);

  return null;
}
