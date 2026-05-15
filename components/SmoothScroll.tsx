"use client";

import { useEffect } from "react";

const DURATION = 1100;
const SCROLL_PADDING = 96;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let activeFrame: number | null = null;

    const cancel = () => {
      if (activeFrame !== null) {
        cancelAnimationFrame(activeFrame);
        activeFrame = null;
      }
    };

    const onWheelOrTouch = () => cancel();

    const animateToTarget = (getTargetY: () => number) => {
      cancel();
      const startY = window.scrollY;
      const initialTarget = getTargetY();
      if (Math.abs(initialTarget - startY) < 2) {
        return;
      }
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / DURATION, 1);
        const eased = easeInOutCubic(t);
        const currentTarget = getTargetY();
        const distance = currentTarget - startY;
        window.scrollTo(0, startY + distance * eased);
        if (t < 1) {
          activeFrame = requestAnimationFrame(step);
        } else {
          activeFrame = null;
        }
      };

      activeFrame = requestAnimationFrame(step);
    };

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as HTMLElement | null)?.closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();

      const el = target as HTMLElement;
      animateToTarget(() => {
        const rect = el.getBoundingClientRect();
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const desired = window.scrollY + rect.top - SCROLL_PADDING;
        return Math.max(0, Math.min(desired, maxScroll));
      });
      history.replaceState(null, "", hash);
    };

    document.addEventListener("click", onClick);
    window.addEventListener("wheel", onWheelOrTouch, { passive: true });
    window.addEventListener("touchstart", onWheelOrTouch, { passive: true });

    return () => {
      cancel();
      document.removeEventListener("click", onClick);
      window.removeEventListener("wheel", onWheelOrTouch);
      window.removeEventListener("touchstart", onWheelOrTouch);
    };
  }, []);

  return null;
}
