"use client";

import { ArrowUpRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/site";
import { pushDataLayer } from "@/lib/tracking";
import SectionHeading from "./SectionHeading";

function formatReviewDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}

export default function Testimonials() {
  return (
    <section id="reviews" className="section-gradient-soft scroll-mt-24 py-24 md:py-32">
      <div className="max-w-page mx-auto px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionHeading
              eyebrow="Google Reviews"
              title="Patient words, held with care."
              intro="These mock testimonials reserve the space for Google Business Profile reviews once access is connected."
            />
          </div>
          <div className="md:col-span-4 md:text-right">
            <a
              href="https://www.google.com/search?q=Grayce+Medical+Aesthetic+Clinic+reviews"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                pushDataLayer({
                  event: "google_reviews_click",
                  location: "testimonials_header",
                })
              }
              className="inline-flex h-12 items-center gap-2 rounded-full border border-hairline bg-[var(--surface)] px-6 font-medium text-[#243028] transition-colors hover:border-gold"
            >
              Read Google Reviews
              <ArrowUpRight size={16} strokeWidth={2} />
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((review, index) => (
            <article
              key={review.id}
              className="surface-panel relative overflow-hidden rounded-[1.75rem] border border-hairline p-6 shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-soft-lg sm:p-7"
            >
              <div className="absolute right-5 top-5 text-[#947f64]/18">
                <Quote size={54} strokeWidth={1.25} />
              </div>

              <div className="relative">
                <div className="flex items-center gap-1 text-[#947f64]">
                  {Array.from({ length: review.rating }, (_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={16}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <p className="mt-6 font-display text-2xl font-semibold leading-snug text-[#243028]">
                  "{review.text}"
                </p>

                <div className="mt-7 flex items-end justify-between gap-4 border-t border-[rgba(75,89,76,0.12)] pt-5">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#947f64]">
                      Google Review {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-2 text-base font-semibold leading-tight text-[#243028]">
                      {review.reviewer}
                    </h3>
                    <p className="mt-1 text-sm text-[#65705f]">
                      {formatReviewDate(review.date)}
                    </p>
                  </div>
                  <a
                    href={review.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read ${review.reviewer}'s review on Google`}
                    onClick={() =>
                      pushDataLayer({
                        event: "google_review_card_click",
                        review_id: review.id,
                        review_position: index + 1,
                      })
                    }
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4b594c] text-[#ffeedc] transition hover:bg-[#354238]"
                  >
                    <ArrowUpRight size={17} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
