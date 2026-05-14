import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-alt": "var(--bg-alt)",
        "bg-soft": "var(--bg-soft)",
        ink: "var(--ink)",
        "ink-muted": "var(--ink-muted)",
        sage: "var(--sage)",
        "sage-deep": "var(--sage-deep)",
        "sage-soft": "var(--sage-soft)",
        gold: "var(--gold)",
        "gold-deep": "var(--gold-deep)",
        "gold-soft": "var(--gold-soft)",
        navy: "var(--navy)",
        hairline: "var(--hairline)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      maxWidth: {
        page: "1240px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft:
          "0 1px 2px rgb(var(--shadow-rgb) / 0.06), 0 8px 24px -12px rgb(var(--shadow-rgb) / 0.16)",
        "soft-lg":
          "0 2px 4px rgb(var(--shadow-rgb) / 0.05), 0 24px 56px -20px rgb(var(--shadow-rgb) / 0.22)",
        "soft-xl":
          "0 4px 8px rgb(var(--shadow-rgb) / 0.06), 0 40px 80px -24px rgb(var(--shadow-rgb) / 0.26)",
      },
    },
  },
  plugins: [],
};

export default config;
