import { brand } from "@/lib/site";
import BrandLogo from "./BrandLogo";

export default function MaintenancePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-bg text-ink">
      <div className="absolute inset-0 -z-10 hero-gradient" />
      <div className="absolute inset-x-0 top-0 h-px bg-hairline" />
      <div className="mx-auto flex min-h-screen max-w-page flex-col justify-center px-6 py-12 md:px-10">
        <section
          aria-labelledby="maintenance-title"
          className="grid min-h-[calc(100vh-6rem)] items-center gap-12 md:grid-cols-12"
        >
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
              <span className="h-px w-10 bg-gold" />
              Maintenance mode
            </div>

            <h1
              id="maintenance-title"
              className="font-display mt-7 max-w-4xl text-[clamp(3.25rem,11vw,7rem)] leading-[0.9] text-ink"
            >
              We&rsquo;re refreshing the site.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
              Please check back soon.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="brand-logo-panel relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center overflow-hidden rounded-t-[6rem] rounded-b-[2rem] border border-hairline p-10 shadow-soft-xl md:max-w-md md:rounded-t-[8rem]">
              <div className="absolute inset-6 rounded-t-[5rem] rounded-b-[1.5rem] border border-gold-soft" />
              <BrandLogo
                mark="monogram"
                className="relative h-44 w-44 object-contain sm:h-52 sm:w-52"
              />
            </div>
          </div>
        </section>

        <div className="editorial-rule" />
        <p className="mt-6 text-xs text-ink-muted">
          {brand.name}
        </p>
      </div>
    </main>
  );
}
