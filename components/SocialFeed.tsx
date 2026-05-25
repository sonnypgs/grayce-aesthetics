"use client";

import { ArrowUpRight, Instagram, Play, Rows3 } from "lucide-react";
import { clinic, instagramPosts } from "@/lib/site";
import { pushDataLayer } from "@/lib/tracking";
import SectionHeading from "./SectionHeading";

function formatPostDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}

function MediaBadge({ mediaType }: { mediaType: string }) {
  if (mediaType === "VIDEO") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#243028]/82 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#ffeedc]">
        <Play size={11} fill="currentColor" />
        Reel
      </span>
    );
  }

  if (mediaType === "CAROUSEL_ALBUM") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#243028]/82 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#ffeedc]">
        <Rows3 size={11} />
        Carousel
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#243028]/82 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#ffeedc]">
      <Instagram size={11} />
      Post
    </span>
  );
}

export default function SocialFeed() {
  const profileHref = `https://instagram.com/${clinic.contact.instagram.replace("@", "")}`;

  return (
    <section id="instagram" className="section-gradient-warm scroll-mt-24 py-24 md:py-32">
      <div className="max-w-page mx-auto px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionHeading
              eyebrow="Instagram"
              title="Recent notes from the clinic."
              intro="A live social feed will connect here once Meta access is approved. For now, these mock posts show the final rhythm, spacing, and content shape."
            />
          </div>
          <div className="md:col-span-4 md:text-right">
            <a
              href={profileHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                pushDataLayer({
                  event: "instagram_profile_click",
                  location: "social_feed_header",
                })
              }
              className="inline-flex h-12 items-center gap-2 rounded-full border border-hairline bg-[var(--surface)] px-6 font-medium text-[#243028] transition-colors hover:border-gold"
            >
              Follow {clinic.contact.instagram}
              <ArrowUpRight size={16} strokeWidth={2} />
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-12">
          {instagramPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group surface-panel overflow-hidden rounded-[1.5rem] border border-hairline shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-soft-lg ${
                index === 0
                  ? "md:col-span-6 lg:col-span-5"
                  : index === 1
                    ? "md:col-span-6 lg:col-span-4"
                    : "md:col-span-4 lg:col-span-3"
              }`}
            >
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  pushDataLayer({
                    event: "instagram_post_click",
                    post_id: post.id,
                    post_position: index + 1,
                  })
                }
                className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-[#947f64]"
              >
                <div
                  className={`relative overflow-hidden bg-bg-soft ${
                    index < 2 ? "aspect-[1.08/1]" : "aspect-square"
                  }`}
                >
                  <img
                    src={post.image}
                    alt=""
                    className="mobile-parallax-media h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    data-mobile-parallax={index % 2 === 0 ? "20" : "-16"}
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#243028]/46 via-transparent to-[#ffeedc]/10" />
                  <div className="absolute left-4 top-4">
                    <MediaBadge mediaType={post.mediaType} />
                  </div>
                  <div className="absolute bottom-4 left-4 rounded-full bg-[#ffeedc]/92 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#4b594c] shadow-soft">
                    {formatPostDate(post.timestamp)}
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#947f64]">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <Instagram size={15} />
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-[#65705f]">
                    {post.caption}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#4b594c]">
                    View on Instagram
                    <ArrowUpRight size={15} strokeWidth={2} />
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
