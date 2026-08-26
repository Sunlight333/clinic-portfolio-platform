import Link from "next/link";
import type { Dictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import { MediaFrame } from "@/components/ui/Media";
import { IconOrb, type Tone } from "@/components/ui/IconOrb";
import { Glyph, type GlyphName } from "@/components/icons/Glyph";
import { SectionHeading, Blobs } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import type { ImageKey } from "@/lib/images";

type Key = "dental" | "aesthetics" | "medical";

const CARDS: {
  key: Key;
  href: string;
  icon: GlyphName;
  tone: Tone;
  image: ImageKey;
  /** every card gets its own silhouette — nothing is a plain rectangle */
  frame: "arch-soft" | "leaf" | "ticket";
  shell: string;
  accent: string;
  raise: string;
}[] = [
  {
    key: "dental",
    href: "/dental",
    icon: "tooth",
    tone: "sky",
    image: "dental-treatment",
    frame: "arch-soft",
    shell: "shape-arch-soft bg-[linear-gradient(170deg,#ffffff_0%,#f2f9ff_58%,#e8f3ff_100%)]",
    accent: "text-sky-400",
    raise: "lg:mt-10",
  },
  {
    key: "aesthetics",
    href: "/aesthetics",
    icon: "sparkle",
    tone: "rose",
    image: "aesthetics-mask",
    frame: "leaf",
    shell: "shape-leaf bg-[linear-gradient(170deg,#ffffff_0%,#fff3f7_58%,#ffe8f0_100%)]",
    accent: "text-rose-400",
    raise: "",
  },
  {
    key: "medical",
    href: "/medical",
    icon: "stethoscope",
    tone: "mint",
    image: "care-elder",
    frame: "ticket",
    shell: "shape-ticket bg-[linear-gradient(170deg,#ffffff_0%,#f1fbf7_58%,#e6f7f1_100%)]",
    accent: "text-mint-500",
    raise: "lg:mt-10",
  },
];

export function Services({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const p = (path: string) => localePath(locale, path);

  return (
    <section id="services" className="section relative overflow-hidden">
      <Blobs variant="warm" />

      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            eyebrow={dict.services.eyebrow}
            eyebrowIcon="sparkle"
            title={
              <>
                {dict.services.title.split(" ").slice(0, -3).join(" ")}{" "}
                <span className="text-gradient-warm font-serif italic">
                  {dict.services.title.split(" ").slice(-3).join(" ")}
                </span>
              </>
            }
            lead={dict.services.lead}
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-7">
          {CARDS.map((card, i) => {
            const c = dict.services.cards[card.key];
            return (
              <Reveal key={card.key} delay={i * 0.12} direction="up" className={card.raise}>
                <TiltCard intensity={7} className="group h-full">
                  <article
                    className={`relative flex h-full flex-col overflow-hidden border border-white p-5 pb-7 shadow-lift transition-shadow duration-500 group-hover:shadow-float ${card.shell}`}
                  >
                    <div className="relative">
                      <MediaFrame
                        src={card.image}
                        alt={c.title}
                        shape={card.frame === "arch-soft" ? "arch-soft" : card.frame === "leaf" ? "leaf" : "ticket"}
                        className="h-56 w-full"
                        sizes="(max-width:1024px) 100vw, 400px"
                        wash={card.tone === "sky" ? "mint" : card.tone === "rose" ? "rose" : "mint"}
                      />
                      <span className="absolute -bottom-8 left-4">
                        <IconOrb icon={card.icon} tone={card.tone} size="xl" halo />
                      </span>
                    </div>

                    <div className="mt-12 flex flex-1 flex-col px-2">
                      <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-white bg-white/80 px-3.5 py-1.5 text-[0.72rem] font-extrabold tracking-[0.16em] text-inksoft uppercase shadow-soft">
                        {c.tag}
                      </span>
                      <h3 className="text-h3">{c.title}</h3>
                      <p className="mt-3 text-[1rem] leading-relaxed text-inksoft">{c.desc}</p>

                      <ul className="mt-6 flex flex-col gap-3">
                        {c.points.map((point) => (
                          <li key={point} className="flex items-center gap-3">
                            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white shadow-soft">
                              <Glyph
                                name="check"
                                strokeWidth={4.5}
                                className={`h-3.5 w-3.5 ${card.accent}`}
                              />
                            </span>
                            <span className="text-[0.96rem] font-bold">{point}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={p(card.href)}
                        className="font-display mt-8 inline-flex items-center gap-2.5 self-start rounded-full border-[1.6px] border-ink/12 bg-white/70 px-6 py-3 text-[1rem] font-extrabold transition-all duration-400 hover:border-transparent hover:bg-ink hover:text-white"
                      >
                        {dict.services.cta}
                        <Glyph
                          name="arrowUpRight"
                          strokeWidth={3.2}
                          className="h-4 w-4 transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </Link>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
