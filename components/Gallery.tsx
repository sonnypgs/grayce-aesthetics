import SectionHeading from "./SectionHeading";
import { images } from "@/lib/placeholders";

export default function Gallery() {
  const [a, b, c, d, e, f] = images.gallery;

  return (
    <section id="gallery" className="py-24 md:py-32 bg-bg-alt scroll-mt-24">
      <div className="max-w-page mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Inside the Clinic"
          title="A space that feels like care."
          intro="Soft light, natural textures, and the kind of details you only notice when someone has been thinking about them for a long time."
        />

        <div className="mt-14 grid grid-cols-12 gap-4 md:gap-5 auto-rows-[140px] md:auto-rows-[180px]">
          <figure className="col-span-12 md:col-span-7 row-span-3 relative overflow-hidden rounded-[2rem] shadow-soft bg-bg-soft">
            <img
              src={a}
              alt="Clinic placeholder"
              className="w-full h-full object-cover"
            />
            <figcaption className="absolute bottom-4 left-4 text-[11px] uppercase tracking-[0.18em] text-ink font-semibold bg-white/95 backdrop-blur px-3 py-1.5 rounded-full border border-hairline">
              Reception
            </figcaption>
          </figure>
          <figure className="col-span-6 md:col-span-5 row-span-2 relative overflow-hidden rounded-[2rem] shadow-soft bg-bg-soft">
            <img
              src={b}
              alt="Clinic placeholder"
              className="w-full h-full object-cover"
            />
          </figure>
          <figure className="col-span-6 md:col-span-5 row-span-1 relative overflow-hidden rounded-[2rem] shadow-soft bg-bg-soft">
            <img
              src={c}
              alt="Clinic placeholder"
              className="w-full h-full object-cover"
            />
          </figure>
          <figure className="col-span-12 md:col-span-4 row-span-2 relative overflow-hidden rounded-[2rem] shadow-soft bg-bg-soft">
            <img
              src={d}
              alt="Clinic placeholder"
              className="w-full h-full object-cover"
            />
          </figure>
          <figure className="col-span-6 md:col-span-4 row-span-2 relative overflow-hidden rounded-[2rem] shadow-soft bg-bg-soft">
            <img
              src={e}
              alt="Clinic placeholder"
              className="w-full h-full object-cover"
            />
          </figure>
          <figure className="col-span-6 md:col-span-4 row-span-2 relative overflow-hidden rounded-[2rem] shadow-soft bg-bg-soft">
            <img
              src={f}
              alt="Clinic placeholder"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
