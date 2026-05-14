import { gallery } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-bg-alt py-24 md:py-32">
      <div className="max-w-page mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Visual Library"
          title="Every new image, placed with intent."
          intro="Treatment details, brand assets, skin imagery, and clinic visuals now work together as one visual system."
        />

        <div className="mt-14 grid grid-flow-dense grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
          {gallery.map((image, index) => {
            const feature = index === 0 || index === 8 || index === 15;
            return (
              <figure
                key={image.src}
                className={`relative overflow-hidden rounded-[1.25rem] border border-hairline bg-bg-soft shadow-soft ${
                  feature
                    ? "col-span-2 row-span-2 aspect-square md:col-span-3"
                    : "aspect-[4/5] md:col-span-2"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
