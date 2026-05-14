import { brand } from "@/lib/site";

type Props = {
  className?: string;
  mark?: "lockup" | "wordmark" | "monogram";
  tone?: "color" | "light";
};

export default function BrandLogo({
  className = "",
  mark = "lockup",
  tone = "color",
}: Props) {
  const src =
    tone === "light" && mark === "lockup"
      ? brand.logos.lockupLight
      : brand.logos[mark];

  return (
    <img
      src={src}
      alt={brand.name}
      className={className}
      loading="eager"
    />
  );
}
