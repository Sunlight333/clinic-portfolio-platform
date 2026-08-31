import type { Dictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import { MediaFrame } from "@/components/ui/Media";
import { IconOrb, type Tone } from "@/components/ui/IconOrb";
import { Glyph, type GlyphName } from "@/components/icons/Glyph";
import { SectionHeading } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const META: { icon: GlyphName; tone: Tone; shell: string; badgeTone: string }[] = [
  { icon: "smileDesign", tone: "sky", shell: "shape-squircle", badgeTone: "bg-sky-100 text-sky-400" },
  { icon: "implant", tone: "lilac", shell: "shape-leaf", badgeTone: "bg-lilac-100 text-lilac-500" },
  { icon: "sparkle", tone: "rose", shell: "shape-leaf-alt", badgeTone: "bg-rose-100 text-rose-500" },
  { icon: "droplet", tone: "coral", shell: "shape-squircle", badgeTone: "bg-coral-100 text-coral-600" },
  { icon: "heartPulse", tone: "mint", shell: "shape-ticket", badgeTone: "bg-mint-100 text-mint-500" },
  { icon: "users", tone: "amber", shell: "shape-ticket", badgeTone: "bg-amber-100 text-amber-400" },
];

export function Signature({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const p = (path: string) => localePath(locale, path);
  const items = dict.signature.items;

  return (
    <section className="section relative overflow-hidden bg-[linear-gradient(180deg,#fffaf5_0%,#fff3ea_40%,#fdf1f6_100%)]">
      <div
        aria-hidden
        className="animate-float-slower pointer-events-none absolute -right-40 top-24 h-[32rem] w-[32rem] rounded-full opacity-45 blur-[110px]"
        style={{ background: "radial-gradient(circle,#e0d3ff,transparent 68%)" }}
      />

      <div className="container-x relative">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal className="max-w-3xl">
            <SectionHeading
              eyebrow={dict.signature.eyebrow}
              eyebrowTone="lilac"
              eyebrowIcon="star"
              title={dict.signature.title}
              lead={dict.signature.lead}
            />
          </Reveal>
          <Reveal delay={0.15}>
            <Button href={p("/contact")} variant="outline" size="lg" icon="arrowUpRight">
              {dict.common.bookNow}
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* -------------------------------------------------- feature card */}
          <Reveal className="lg:col-span-2" direction="right">
            <article className="shape-squircle group relative h-full min-h-[24rem] overflow-hidden border border-white shadow-float">
              <MediaFrame
                src="dental-aligner"
                alt={items[0].title}
                shape="squircle"
                position="cover"
                className="shadow-none"
                sizes="(max-width:1024px) 100vw, 760px"
                ring={false}
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(190deg,rgba(58,43,63,0)_0%,rgba(58,43,63,.14)_44%,rgba(58,43,63,.66)_100%)]"
              />
              <div className="relative flex h-full flex-col justify-between p-7 sm:p-9">
                <div className="flex items-start justify-between gap-4">
                  <IconOrb icon={META[0].icon} tone={META[0].tone} size="xl" halo />
                  {items[0].badge && (
                    <span className="rounded-full bg-white/90 px-4 py-2 text-[0.82rem] font-extrabold tracking-[0.14em] text-coral-600 uppercase backdrop-blur-md">
                      {items[0].badge}
                    </span>
                  )}
                </div>

                <div className="mt-auto text-white">
                  <h3 className="text-h2 max-w-[16ch] drop-shadow-sm">{items[0].title}</h3>
                  <p className="mt-3 max-w-[46ch] text-[1.1rem] leading-relaxed text-white/90">
                    {items[0].desc}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <span className="glass flex items-center gap-2 rounded-full px-4 py-2 text-[0.98rem] font-extrabold text-ink">
                      <Glyph name="clock" className="h-4 w-4 text-coral-500" strokeWidth={3} />
                      {items[0].meta}
                    </span>
                    <span className="font-display rounded-full bg-white px-5 py-2 text-[1.1rem] font-extrabold text-ink">
                      {items[0].price}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* --------------------------------------------------- tall column */}
          <Reveal delay={0.1} direction="left">
            <article
              className={`${META[1].shell} relative flex h-full flex-col justify-between border border-white bg-white/80 p-7 shadow-lift backdrop-blur-md transition-transform duration-500 hover:-translate-y-1.5`}
            >
              <IconOrb icon={META[1].icon} tone={META[1].tone} size="xl" />
              <div className="mt-7">
                <h3 className="text-h3">{items[1].title}</h3>
                <p className="mt-3 text-[1.05rem] leading-relaxed text-inksoft">{items[1].desc}</p>
              </div>
              <div className="mt-7 flex items-center justify-between border-t border-ink/10 pt-5">
                <span className="text-[0.94rem] font-bold text-inkmute">{items[1].meta}</span>
                <span className="font-display text-[1.28rem] font-extrabold">{items[1].price}</span>
              </div>
            </article>
          </Reveal>

          {/* ---------------------------------------------------- middle row */}
          {items.slice(2, 5).map((item, idx) => {
            const m = META[idx + 2];
            return (
              <Reveal key={item.title} delay={0.08 * idx} direction="up">
                <article
                  className={`${m.shell} group relative flex h-full flex-col border border-white bg-white/80 p-7 shadow-lift backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-float`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <IconOrb icon={m.icon} tone={m.tone} size="lg" />
                    {item.badge && (
                      <span
                        className={`rounded-full px-3.5 py-1.5 text-[0.78rem] font-extrabold tracking-[0.14em] uppercase ${m.badgeTone}`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-6 text-[1.35rem] leading-tight font-extrabold tracking-tight font-display">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[1.04rem] leading-relaxed text-inksoft">{item.desc}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-5">
                    <span className="flex items-center gap-2 text-[0.94rem] font-bold text-inkmute">
                      <Glyph name="clock" className="h-4 w-4" strokeWidth={3} />
                      {item.meta}
                    </span>
                    <span className="font-display text-[1.22rem] font-extrabold">{item.price}</span>
                  </div>
                </article>
              </Reveal>
            );
          })}

          {/* ------------------------------------------------------ plan band */}
          <Reveal className="lg:col-span-3" direction="up" delay={0.05}>
            <article className="shape-ticket relative flex flex-col items-center gap-8 overflow-hidden border border-white bg-[linear-gradient(120deg,#fff3ec_0%,#ffe6f0_46%,#efe9ff_100%)] p-7 shadow-lift sm:p-9 lg:flex-row">
              <IconOrb icon={META[5].icon} tone={META[5].tone} size="2xl" halo pulse />
              <div className="flex-1 text-center lg:text-left">
                <span className="text-eyebrow text-coral-600">{items[5].badge}</span>
                <h3 className="text-h3 mt-2">{items[5].title}</h3>
                <p className="mt-3 max-w-[60ch] text-[1.08rem] leading-relaxed text-inksoft">
                  {items[5].desc}
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="text-center">
                  <p className="font-display text-[2.4rem] leading-none font-extrabold tracking-tight">
                    {items[5].price}
                  </p>
                  <p className="mt-1.5 text-[0.94rem] font-bold text-inkmute">{items[5].meta}</p>
                </div>
                <Button href={p("/contact")} size="lg" icon="arrowRight">
                  {dict.common.bookNow}
                </Button>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Signature;
