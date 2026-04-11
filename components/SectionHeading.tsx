import Star from "./Star";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <header className={`max-w-3xl ${alignCls}`}>
      <div
        className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sage-soft/70 text-sage-deep text-[11px] font-semibold uppercase tracking-[0.18em] ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <Star className="text-navy" size={11} />
        {eyebrow}
      </div>
      <h2 className="font-display text-[2.25rem] sm:text-5xl md:text-[3.5rem] leading-[1.05] text-ink mt-5">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-ink-muted text-lg leading-relaxed max-w-2xl">
          {intro}
        </p>
      )}
    </header>
  );
}
