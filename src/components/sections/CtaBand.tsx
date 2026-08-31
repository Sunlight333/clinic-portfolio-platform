import type { Dictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import { Button } from "@/components/ui/Button";
import { IconOrb } from "@/components/ui/IconOrb";
import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/ui/Media";
import { Glyph } from "@/components/icons/Glyph";

export function CtaBand({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const p = (path: string) => localePath(locale, path);

  return (
    <section className="section-tight relative overflow-hidden pb-24">
      <div className="container-x relative">
        <Reveal direction="scale">
          <div className="shape-arch-soft relative overflow-hidden border-[6px] border-white shadow-float">
            {/* photographic base, warmed by a gradient so text stays readable */}
            <MediaFrame
              src="community"
              alt={dict.cta.title}
              shape="squircle"
              position="cover"
              className="rounded-none shadow-none"
              sizes="100vw"
              ring={false}
            />
            {/* Brand wash: dense behind the copy on the left, opening up on the
                right so the photograph actually reads. */}
            <span
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(125deg,rgba(249,112,74,.93)_0%,rgba(242,118,156,.78)_46%,rgba(139,110,240,.55)_100%)]"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(58,43,63,.28)_0%,rgba(58,43,63,.12)_42%,transparent_70%)] lg:bg-[linear-gradient(90deg,rgba(58,43,63,.3)_0%,rgba(58,43,63,.1)_48%,transparent_72%)]"
            />
            <span
              aria-hidden
              className="animate-spin-slower absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full opacity-30"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, rgba(255,255,255,.75), transparent 55%)",
              }}
            />

            <div className="relative flex flex-col items-center gap-10 px-6 py-16 text-center sm:px-12 sm:py-20 lg:flex-row lg:justify-between lg:text-left">
              <div className="max-w-2xl">
                <span className="text-eyebrow inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/20 px-4 py-2 text-white backdrop-blur-md">
                  <Glyph name="sparkle" className="h-3.5 w-3.5" strokeWidth={3.4} />
                  {dict.cta.eyebrow}
                </span>
                <h2 className="text-h1 mt-6 text-white drop-shadow-sm">{dict.cta.title}</h2>
                <p className="mt-5 max-w-[56ch] text-[1.16rem] leading-relaxed text-white/92">
                  {dict.cta.lead}
                </p>

                <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5 lg:justify-start">
                  <Button href={p("/contact")} variant="soft" size="xl" icon="calendar">
                    {dict.cta.primary}
                  </Button>
                  <Button
                    href={`tel:${dict.footer.phone.replace(/\s/g, "")}`}
                    variant="invert"
                    size="xl"
                    icon="phone"
                  >
                    {dict.cta.secondary}
                  </Button>
                </div>

                <p className="mt-7 flex items-center justify-center gap-2.5 text-[1rem] font-bold text-white/85 lg:justify-start">
                  <Glyph name="clock" className="h-4 w-4" strokeWidth={3} />
                  {dict.cta.note}
                </p>
              </div>

              {/* orb cluster — icons kept oversized on purpose */}
              <div className="relative hidden h-[19rem] w-[19rem] shrink-0 lg:block">
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid h-[13rem] w-[13rem] place-items-center rounded-full border border-white/45 bg-white/16 backdrop-blur-xl">
                    <IconOrb icon="calendar" tone="coral" size="2xl" />
                  </span>
                </span>
                <span className="animate-float-slow absolute top-0 right-2">
                  <IconOrb icon="tooth" tone="sky" size="lg" />
                </span>
                <span className="animate-float-slower absolute bottom-2 left-0">
                  <IconOrb icon="skin" tone="rose" size="lg" />
                </span>
                <span className="animate-float-slow absolute right-0 bottom-10">
                  <IconOrb icon="stethoscope" tone="mint" size="lg" />
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default CtaBand;
