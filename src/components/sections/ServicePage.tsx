import type { Dictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import { MediaFrame } from "@/components/ui/Media";
import { IconOrb, type Tone } from "@/components/ui/IconOrb";
import { Glyph, type GlyphName } from "@/components/icons/Glyph";
import { Chip, Eyebrow, SectionHeading, StepBadge } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";
import { FaqList } from "./Faq";
import { CtaBand } from "./CtaBand";
import type { ImageKey } from "@/lib/images";

export type ServiceKey = "dental" | "aesthetics" | "medical";

type Config = {
  tone: Tone;
  toneAlt: Tone;
  eyebrowTone: "coral" | "mint" | "lilac" | "rose" | "sky" | "amber";
  heroIcon: GlyphName;
  wash: string;
  heroImages: [ImageKey, ImageKey, ImageKey];
  treatmentIcons: GlyphName[];
  highlightIcons: GlyphName[];
  processIcons: GlyphName[];
  gallery: ImageKey[];
  faqTone: "coral" | "mint" | "lilac";
};

export const SERVICE_CONFIG: Record<ServiceKey, Config> = {
  dental: {
    tone: "sky",
    toneAlt: "lilac",
    eyebrowTone: "sky",
    heroIcon: "tooth",
    wash: "bg-[linear-gradient(165deg,#f6fbff_0%,#eef6ff_42%,#f6f1ff_100%)]",
    heroImages: ["dental-suite", "dental-treatment", "dental-light"],
    treatmentIcons: ["leaf", "smileDesign", "implant", "aligner", "scan", "child"],
    highlightIcons: ["scan", "cube", "shield"],
    processIcons: ["scan", "smileDesign", "tooth", "check"],
    gallery: ["dental-unit", "dental-aligner", "detail-coat"],
    faqTone: "lilac",
  },
  aesthetics: {
    tone: "rose",
    toneAlt: "lilac",
    eyebrowTone: "rose",
    heroIcon: "skin",
    wash: "bg-[linear-gradient(165deg,#fff7fa_0%,#fff0f5_42%,#f8f1ff_100%)]",
    heroImages: ["aesthetics-facial", "aesthetics-mask", "detail-skincare"],
    treatmentIcons: ["scan", "sparkle", "droplet", "syringe", "laser", "leaf"],
    highlightIcons: ["scan", "waves", "skin"],
    processIcons: ["scan", "layers", "syringe", "check"],
    gallery: ["aesthetics-treatment", "aesthetics-skin", "aesthetics-hair"],
    faqTone: "coral",
  },
  medical: {
    tone: "mint",
    toneAlt: "sky",
    eyebrowTone: "mint",
    heroIcon: "stethoscope",
    wash: "bg-[linear-gradient(165deg,#f4fbf8_0%,#eefaf5_42%,#eff7ff_100%)]",
    heroImages: ["care-consult", "care-elder", "detail-stethoscope"],
    treatmentIcons: ["user", "heartPulse", "flask", "gauge", "vaccine", "clock"],
    highlightIcons: ["users", "flask", "layers"],
    processIcons: ["user", "message", "flask", "check"],
    gallery: ["diagnostics-imaging", "medical-vaccine", "wellness"],
    faqTone: "mint",
  },
};

const CARD_SHAPES = ["shape-leaf", "shape-squircle", "shape-leaf-alt", "shape-ticket", "shape-squircle", "shape-leaf"];

export function ServicePage({
  locale,
  dict,
  service,
}: {
  locale: Locale;
  dict: Dictionary;
  service: ServiceKey;
}) {
  const p = (path: string) => localePath(locale, path);
  const page = dict.pages[service];
  const cfg = SERVICE_CONFIG[service];

  return (
    <>
      {/* ============================================================= hero */}
      <section className={`relative overflow-hidden pt-[150px] pb-16 lg:pt-[200px] lg:pb-24 ${cfg.wash}`}>
        <div
          aria-hidden
          className="animate-drift pointer-events-none absolute -top-24 -left-20 h-[34rem] w-[34rem] rounded-full opacity-60 blur-[110px]"
          style={{ background: "radial-gradient(circle,#ffd3c0,transparent 68%)" }}
        />
        <div
          aria-hidden
          className="animate-float-slower pointer-events-none absolute -right-24 top-1/3 h-[30rem] w-[30rem] rounded-full opacity-50 blur-[110px]"
          style={{ background: "radial-gradient(circle,#dcd0ff,transparent 68%)" }}
        />

        <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <Reveal>
              <Eyebrow tone={cfg.eyebrowTone} icon={cfg.heroIcon}>
                {page.eyebrow}
              </Eyebrow>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="text-h1 mt-6">
                {page.title}{" "}
                <span className="text-gradient-warm font-serif italic">{page.titleAccent}</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="text-lead mt-6 max-w-[54ch] text-inksoft">{page.lead}</p>
            </Reveal>

            <Reveal delay={0.24}>
              <ul className="mt-8 flex flex-wrap gap-3">
                {page.chips.map((chip, i) => (
                  <li key={chip}>
                    <Chip icon={cfg.treatmentIcons[i % cfg.treatmentIcons.length]}>{chip}</Chip>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-9 flex flex-wrap gap-3.5">
                <Button href={p("/contact")} size="xl" icon="calendar">
                  {dict.nav.book}
                </Button>
                <Button href="#treatments" variant="outline" size="xl" icon="chevronDown">
                  {page.treatmentsTitle}
                </Button>
              </div>
            </Reveal>
          </div>

          {/* image collage — three shapes, three depths */}
          <Reveal direction="left" delay={0.12}>
            <div className="relative mx-auto grid h-[27rem] max-w-[34rem] grid-cols-5 grid-rows-6 gap-4 sm:h-[32rem] lg:h-[34rem]">
              <MediaFrame
                src={cfg.heroImages[0]}
                alt={page.title}
                shape="arch-soft"
                className="col-span-3 row-span-6 border-[5px] border-white"
                sizes="(max-width:1024px) 60vw, 340px"
                priority
              />
              <MediaFrame
                src={cfg.heroImages[1]}
                alt={page.title}
                shape="leaf-alt"
                className="col-span-2 row-span-3 border-[5px] border-white"
                sizes="(max-width:1024px) 40vw, 220px"
              />
              <MediaFrame
                src={cfg.heroImages[2]}
                alt={page.title}
                shape="circle"
                className="col-span-2 row-span-3 border-[5px] border-white"
                sizes="(max-width:1024px) 40vw, 220px"
              />
              <span className="absolute -bottom-10 -left-10 hidden lg:block">
                <IconOrb icon={cfg.heroIcon} tone={cfg.tone} size="2xl" halo pulse />
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================================================= highlights */}
      <section className="section relative overflow-hidden">
        <div className="container-x relative">
          <Reveal>
            <SectionHeading
              eyebrow={dict.services.eyebrow}
              eyebrowTone={cfg.eyebrowTone}
              title={page.highlightsTitle}
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {page.highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.1} direction="up">
                <TiltCard intensity={6} className="group h-full">
                  <article
                    className={`${i === 1 ? "shape-arch-soft lg:-mt-6" : i === 0 ? "shape-leaf" : "shape-leaf-alt"} flex h-full flex-col items-center border border-white bg-white/80 p-8 text-center shadow-lift backdrop-blur-md`}
                  >
                    <IconOrb
                      icon={cfg.highlightIcons[i]}
                      tone={i === 1 ? cfg.toneAlt : cfg.tone}
                      size="2xl"
                      halo
                    />
                    <h3 className="font-display mt-7 text-[1.32rem] font-extrabold tracking-tight">
                      {h.title}
                    </h3>
                    <p className="mt-3 text-[1.06rem] leading-relaxed text-inksoft">{h.desc}</p>
                  </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================= treatments */}
      <section
        id="treatments"
        className="section relative overflow-hidden bg-[linear-gradient(180deg,#fffaf5,#fff3ec_45%,#fdf0f6)]"
      >
        <div className="container-x relative">
          <Reveal>
            <SectionHeading
              eyebrow={page.eyebrow}
              eyebrowTone={cfg.eyebrowTone}
              eyebrowIcon="star"
              title={page.treatmentsTitle}
              lead={page.treatmentsLead}
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {page.treatments.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.06} direction="up">
                <article
                  className={`${CARD_SHAPES[i % CARD_SHAPES.length]} group relative flex h-full flex-col border border-white bg-white/85 p-7 shadow-lift backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-float`}
                >
                  <IconOrb
                    icon={cfg.treatmentIcons[i % cfg.treatmentIcons.length]}
                    tone={i % 3 === 0 ? cfg.tone : i % 3 === 1 ? cfg.toneAlt : "amber"}
                    size="xl"
                    halo
                  />
                  <h3 className="font-display mt-6 text-[1.28rem] leading-tight font-extrabold tracking-tight">
                    {t.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[1.05rem] leading-relaxed text-inksoft">{t.desc}</p>

                  <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-5">
                    <span className="flex items-center gap-2 text-[0.96rem] font-bold text-inkmute">
                      <Glyph name="clock" className="h-4 w-4" strokeWidth={3} />
                      {t.meta}
                    </span>
                    <span className="font-display text-[1.22rem] font-extrabold">{t.price}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================== process */}
      <section className="section relative overflow-hidden">
        <div className="container-x relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow={dict.approach.eyebrow}
              eyebrowTone={cfg.eyebrowTone}
              title={page.processTitle}
              lead={dict.approach.lead}
              accent={
                <div className="mt-4 flex w-full flex-wrap gap-4">
                  <MediaFrame
                    src={cfg.gallery[0]}
                    alt={page.processTitle}
                    shape="petal"
                    className="h-40 w-40 border-[5px] border-white"
                    sizes="200px"
                  />
                  <MediaFrame
                    src={cfg.gallery[1]}
                    alt={page.processTitle}
                    shape="circle"
                    className="h-40 w-40 border-[5px] border-white"
                    sizes="200px"
                  />
                </div>
              }
            />
          </Reveal>

          <ol className="flex flex-col gap-5">
            {page.process.map((step, i) => (
              <Reveal as="li" key={step.n} delay={i * 0.08} direction="left">
                <div className="group flex items-start gap-5 rounded-[1.9rem] border border-white bg-white/80 p-6 shadow-soft backdrop-blur-md transition-all duration-500 hover:translate-x-2 hover:bg-white hover:shadow-lift">
                  <StepBadge n={step.n} tone={i % 2 === 0 ? "coral" : "lilac"} />
                  <div className="flex-1">
                    <h3 className="font-display text-[1.24rem] font-extrabold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[1.05rem] leading-relaxed text-inksoft">{step.desc}</p>
                  </div>
                  <IconOrb icon={cfg.processIcons[i]} tone={cfg.tone} size="lg" className="hidden sm:block" />
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================================== faq */}
      <section className="section relative overflow-hidden bg-[linear-gradient(180deg,#fdf3f8,#fffaf5)]">
        <div className="container-x relative grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow={dict.faq.eyebrow}
              eyebrowTone={cfg.eyebrowTone}
              eyebrowIcon="message"
              title={page.faqTitle}
              accent={
                <div className="mt-4 w-full">
                  <MediaFrame
                    src={cfg.gallery[2]}
                    alt={page.faqTitle}
                    shape="leaf"
                    className="aspect-[4/3] w-full max-w-sm border-[5px] border-white"
                    sizes="380px"
                  />
                </div>
              }
            />
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <FaqList items={page.faq} tone={cfg.faqTone} />
          </Reveal>
        </div>
      </section>

      <CtaBand locale={locale} dict={dict} />
    </>
  );
}

export default ServicePage;
