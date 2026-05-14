"use client";

import { useEffect, useState } from "react";
import { brand } from "@/lib/site";

type Props = {
  className?: string;
  mark?: "lockup" | "monogram";
};

const themeLogo = {
  almond: {
    lockup: brand.logos.lockup,
    monogram: brand.logos.monogram,
  },
  green: {
    lockup: brand.logos.lightOnGreen,
    monogram: brand.logos.lightOnGreen,
  },
  taupe: {
    lockup: brand.logos.lightOnTaupe,
    monogram: brand.logos.lightOnTaupe,
  },
};

export default function BrandLogo({ className = "", mark = "lockup" }: Props) {
  const [theme, setTheme] = useState<"almond" | "green" | "taupe">("almond");

  useEffect(() => {
    const readTheme = () => {
      const current = document.documentElement.dataset.theme;
      setTheme(current === "green" || current === "taupe" ? current : "almond");
    };

    readTheme();
    window.addEventListener("grayce-theme-change", readTheme);
    return () => window.removeEventListener("grayce-theme-change", readTheme);
  }, []);

  return (
    <img
      src={themeLogo[theme][mark]}
      alt={brand.name}
      className={className}
      loading="eager"
    />
  );
}
