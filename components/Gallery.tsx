"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { gallery } from "@/lib/site";
import SectionHeading from "./SectionHeading";

const galleryLayout = [
  "col-span-2 row-span-2 sm:col-span-4 sm:row-span-3 lg:col-span-5 lg:row-span-4",
  "col-span-1 row-span-2 sm:col-span-2 sm:row-span-2 lg:col-span-3 lg:row-span-2",
  "col-span-1 row-span-2 sm:col-span-3 sm:row-span-2 lg:col-span-4 lg:row-span-3",
  "col-span-2 row-span-1 sm:col-span-3 sm:row-span-2 lg:col-span-3 lg:row-span-2",
  "col-span-1 row-span-2 sm:col-span-3 sm:row-span-2 lg:col-span-4 lg:row-span-2",
  "col-span-1 row-span-1 sm:col-span-3 sm:row-span-2 lg:col-span-3 lg:row-span-2",
  "col-span-2 row-span-2 sm:col-span-3 sm:row-span-3 lg:col-span-5 lg:row-span-3",
  "col-span-1 row-span-2 sm:col-span-3 sm:row-span-2 lg:col-span-3 lg:row-span-2",
  "col-span-1 row-span-1 sm:col-span-2 sm:row-span-2 lg:col-span-4 lg:row-span-2",
  "col-span-2 row-span-2 sm:col-span-4 sm:row-span-2 lg:col-span-4 lg:row-span-3",
  "col-span-1 row-span-1 sm:col-span-2 sm:row-span-2 lg:col-span-3 lg:row-span-2",
  "col-span-1 row-span-2 sm:col-span-3 sm:row-span-2 lg:col-span-5 lg:row-span-2",
  "col-span-2 row-span-2 sm:col-span-3 sm:row-span-3 lg:col-span-4 lg:row-span-3",
  "col-span-1 row-span-2 sm:col-span-3 sm:row-span-2 lg:col-span-3 lg:row-span-2",
  "col-span-1 row-span-1 sm:col-span-2 sm:row-span-2 lg:col-span-3 lg:row-span-2",
  "col-span-2 row-span-2 sm:col-span-4 sm:row-span-2 lg:col-span-5 lg:row-span-3",
  "col-span-1 row-span-2 sm:col-span-3 sm:row-span-2 lg:col-span-4 lg:row-span-2",
  "col-span-1 row-span-1 sm:col-span-3 sm:row-span-2 lg:col-span-3 lg:row-span-2",
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : gallery[activeIndex];
  const activeNumber = activeIndex ?? 0;

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? current : (current + 1) % gallery.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? current
            : (current - 1 + gallery.length) % gallery.length,
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    document.body.classList.add("lightbox-open");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      document.body.classList.remove("lightbox-open");
    };
  }, [activeIndex]);

  return (
    <section id="gallery" className="section-gradient-warm scroll-mt-24 py-24 md:py-32">
      <div className="max-w-page mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Visual Library"
          title="Every new image, placed with intent."
          intro="Treatment details, brand assets, skin imagery, and clinic visuals now work together as one visual system."
        />

        <div className="mt-14 grid auto-rows-[8.5rem] grid-cols-2 grid-flow-row-dense gap-3 sm:auto-rows-[7.5rem] sm:grid-cols-6 md:gap-4 lg:auto-rows-[8rem] lg:grid-cols-12">
          {gallery.map((image, index) => (
              <figure
                key={image.src}
                className={`group relative cursor-pointer overflow-hidden rounded-[1.25rem] border border-hairline bg-bg-soft shadow-soft transition-transform duration-500 hover:-translate-y-1 ${galleryLayout[index % galleryLayout.length]}`}
              >
                <button
                  type="button"
                  aria-label={`Open image ${index + 1}: ${image.alt}`}
                  className="gallery-trigger absolute inset-0 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-[#ffeedc]"
                  onClick={() => setActiveIndex(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.035]"
                    loading={index < 6 ? "eager" : "lazy"}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#243028]/36 via-transparent to-[#ffeedc]/8 opacity-72 transition-opacity duration-500 group-hover:opacity-80" />
                  <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-[#ffeedc]/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#4b594c] shadow-soft">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="pointer-events-none absolute bottom-3 left-3 right-3 translate-y-2 rounded-[1rem] bg-[#243028] px-4 py-3 text-[13px] font-semibold leading-snug text-[#ffeedc] opacity-0 shadow-soft-lg ring-1 ring-[#ffeedc]/20 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:bottom-4 sm:left-4 sm:right-4 sm:text-sm">
                    {image.alt}
                  </div>
                </button>
              </figure>
          ))}
        </div>
      </div>

      {activeImage ? (
        <div
          aria-modal="true"
          className="lightbox-backdrop fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(8,12,10,0.94)] px-4 py-6 backdrop-blur-2xl sm:px-8"
          role="dialog"
        >
          <button
            type="button"
            aria-label="Close image viewer"
            className="cursor-gallery-close absolute inset-0"
            onClick={() => setActiveIndex(null)}
          />
          <div className="lightbox-panel relative z-10 grid max-h-[92vh] w-full max-w-6xl grid-rows-[minmax(0,1fr)_auto] overflow-hidden rounded-[1.5rem] border border-[#ffeedc]/24 bg-[#ffeedc] shadow-soft-xl">
            <div className="relative min-h-0 bg-[#243028]">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="h-full max-h-[74vh] w-full object-contain"
              />
              <button
                type="button"
                aria-label="Close image viewer"
                className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#ffeedc]/92 text-[#4b594c] shadow-soft transition hover:bg-white"
                onClick={() => setActiveIndex(null)}
              >
                <X size={19} strokeWidth={2} />
              </button>
            </div>

            <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#947f64]">
                  Visual Library {String(activeNumber + 1).padStart(2, "0")} of{" "}
                  {String(gallery.length).padStart(2, "0")}
                </div>
                <p className="mt-2 font-display text-xl leading-tight text-[#243028] sm:text-2xl">
                  {activeImage.alt}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="inline-flex h-10 items-center rounded-full border border-hairline px-4 text-sm font-medium text-[#4b594c] transition hover:border-[#947f64]"
                  onClick={() =>
                    setActiveIndex(
                      (activeNumber - 1 + gallery.length) % gallery.length,
                    )
                  }
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="inline-flex h-10 items-center rounded-full bg-[#4b594c] px-4 text-sm font-medium text-[#ffeedc] transition hover:bg-[#354238]"
                  onClick={() => setActiveIndex((activeNumber + 1) % gallery.length)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
