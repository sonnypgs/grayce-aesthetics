"use client";

import { useEffect, useState } from "react";
import { Palette } from "lucide-react";

const themes = [
  { id: "almond", label: "Almond", swatch: "#ffeedc" },
  { id: "green", label: "Deep Green", swatch: "#4b594c" },
  { id: "taupe", label: "Taupe", swatch: "#947f64" },
] as const;

type Theme = (typeof themes)[number]["id"];

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("grayce-theme", theme);
  window.dispatchEvent(new Event("grayce-theme-change"));
}

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("almond");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("grayce-theme");
    const initial =
      saved === "green" || saved === "taupe" || saved === "almond"
        ? saved
        : "almond";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  return (
    <aside className="fixed bottom-4 right-4 z-[90] w-[min(calc(100vw-2rem),320px)] rounded-2xl border border-hairline bg-[var(--surface)] text-[#243028] shadow-soft-lg">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center gap-3 px-4 py-3 text-left"
        aria-expanded={open}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4b594c] text-[#ffeedc]">
          <Palette size={15} strokeWidth={1.8} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#947f64]">
            Preview Theme
          </div>
          <div className="truncate text-xs text-[#66705f]">
            {themes.find((option) => option.id === theme)?.label}
          </div>
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#947f64]">
          {open ? "Close" : "Open"}
        </span>
      </button>
      {open && (
        <div className="grid grid-cols-3 gap-2 border-t border-[rgba(75,89,76,0.14)] p-3">
          {themes.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => {
                setTheme(option.id);
                applyTheme(option.id);
              }}
              className={`group flex min-h-16 flex-col items-center justify-center gap-2 rounded-xl border px-2 py-2 text-[11px] font-medium transition ${
                theme === option.id
                  ? "border-[#4b594c] bg-[#ffeedc] text-[#243028]"
                  : "border-[rgba(75,89,76,0.14)] bg-white/70 text-[#66705f] hover:border-[#947f64]"
              }`}
              aria-pressed={theme === option.id}
            >
              <span
                className="h-5 w-5 rounded-full border border-[rgba(75,89,76,0.22)]"
                style={{ backgroundColor: option.swatch }}
              />
              <span className="leading-tight">{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </aside>
  );
}
