import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n";
import { isLocale } from "@/i18n/config";

import { MediaFrame } from "@/components/ui/Media";
import { IconOrb, type Tone } from "@/components/ui/IconOrb";
import { Glyph, type GlyphName } from "@/components/icons/Glyph";
import { Eyebrow, SectionHeading, Chip } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Motion";
import { Button } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";
import { Team } from "@/components/sections/Team";
import { Nurses } from "@/components/sections/Nurses";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.about.title,
    description: dict.meta.about.description,
    alternates: { canonical: `/${locale}/about` },
  };
}

const VALUE_META: { icon: GlyphName; tone: Tone; shape: string }[] = [
  { icon: "shield", tone: "coral", shape: "shape-leaf" },
  { icon: "clock", tone: "mint", shape: "shape-arch-soft" },
  { icon: "flask", tone: "lilac", shape: "shape-leaf-alt" },
  { icon: "sun", tone: "amber", shape: "shape-ticket" },
];

const CRED_ICONS: GlyphName[] = ["shield", "check", "lock", "accessibility"];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const t = dict.pages.about;

  return (
    <>
      {/* ============================================================= hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(165deg,#fff8f3_0%,#fdf1ea_38%,#f5f0ff_100%)] pt-[150px] pb-16 lg:pt-[200px] lg:pb-24">
        <div
          aria-hidden
          className="animate-drift pointer-events-none absolute -left-28 top-10 h-[34rem] w-[34rem] rounded-full opacity-55 blur-[110px]"
          style={{
            background: "radial-gradient(circle,#ffd6c2,transparent 68%)",
          }}
        />

        <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <Eyebrow tone="coral" icon="users">
                {t.eyebrow}
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="text-h1 mt-6">
                {t.title}{" "}
                <span className="text-gradient-warm font-serif italic">
                  {t.titleAccent}
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-lead mt-6 max-w-[56ch] text-inksoft">
                {t.lead}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4">
                {dict.hero.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-[1.5rem] border border-white bg-white/70 px-4 py-5 text-center shadow-soft backdrop-blur-md"
                  >
                    <dt className="font-display flex items-baseline justify-center gap-1 text-[2rem] leading-none font-extrabold tracking-tight">
                      <Counter to={s.value} />
                      <span className="text-gradient-warm text-[0.66em]">
                        {s.suffix}
                      </span>
                    </dt>
                    <dd className="mt-2 text-[0.88rem] leading-tight font-bold text-inkmute">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.12}>
            <div className="relative mx-auto grid max-w-[34rem] grid-cols-2 gap-4">
              <MediaFrame
                src="lounge"
                alt={t.title}
                shape="arch-soft"
                className="aspect-[3/4] w-full border-[5px] border-white"
                sizes="(max-width:1024px) 45vw, 260px"
                priority
              />
              <div className="flex flex-col gap-4 pt-10">
                <MediaFrame
                  src="clinic-room"
                  alt={t.title}
                  shape="leaf"
                  className="aspect-square w-full border-[5px] border-white"
                  sizes="(max-width:1024px) 45vw, 260px"
                />
                <MediaFrame
                  src="community"
                  alt={t.title}
                  shape="leaf-alt"
                  className="aspect-square w-full border-[5px] border-white"
                  sizes="(max-width:1024px) 45vw, 260px"
                />
              </div>
              <span className="absolute -bottom-9 -left-9 hidden lg:block">
                <IconOrb icon="heartPulse" tone="rose" size="2xl" halo pulse />
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ story */}
      <section className="section relative overflow-hidden">
        <div className="container-x relative grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <div className="relative">
              <MediaFrame
                src="care-consult"
                alt={t.storyTitle}
                shape="blob"
                className="aspect-[4/3] w-full border-[6px] border-white"
                sizes="(max-width:1024px) 90vw, 560px"
                wash="warm"
              />
              <span className="glass-strong absolute -bottom-6 -right-4 flex items-center gap-4 rounded-[1.6rem] p-5">
                <IconOrb icon="leaf" tone="mint" size="lg" />
                <span className="flex flex-col leading-none">
                  <span className="font-display flex items-baseline gap-1 text-[2rem] font-extrabold tracking-tight">
                    {dict.hero.stats[0].value}
                    <span className="text-gradient-warm text-[0.6em]">
                      {dict.hero.stats[0].suffix}
                    </span>
                  </span>
                  <span className="mt-2 max-w-[10rem] text-[0.88rem] font-bold text-inkmute">
                    {dict.hero.stats[0].label}
                  </span>
                </span>
              </span>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow={t.storyTitle}
                eyebrowTone="lilac"
                eyebrowIcon="leaf"
                title={dict.brand.claim}
              />
            </Reveal>
            <div className="mt-8 flex flex-col gap-5">
              {t.story.map((paragraph, i) => (
                <Reveal
                  key={paragraph.slice(0, 24)}
                  delay={i * 0.08}
                  direction="left"
                >
                  <p className="text-[1.1rem] leading-relaxed text-inksoft">
                    <span className="float-left mr-3 mt-1 grid h-8 w-8 place-items-center rounded-full bg-coral-50 font-display text-[0.98rem] font-extrabold text-coral-600">
                      {i + 1}
                    </span>
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================== values */}
      <section className="section relative overflow-hidden bg-[linear-gradient(180deg,#fffaf5,#fff2ec_50%,#fdf1f7)]">
        <div className="container-x relative">
          <Reveal>
            <SectionHeading
              eyebrow={t.eyebrow}
              eyebrowTone="coral"
              eyebrowIcon="star"
              title={t.valuesTitle}
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.values.map((v, i) => {
              const m = VALUE_META[i];
              return (
                <Reveal key={v.title} delay={i * 0.08} direction="up">
                  <TiltCard intensity={7} className="group h-full">
                    <article
                      className={`${m.shape} flex h-full flex-col items-center border border-white bg-white/82 p-7 text-center shadow-lift backdrop-blur-md ${i % 2 === 1 ? "lg:mt-8" : ""}`}
                    >
                      <IconOrb icon={m.icon} tone={m.tone} size="xl" halo />
                      <h3 className="font-display mt-6 text-[1.22rem] font-extrabold tracking-tight">
                        {v.title}
                      </h3>
                      <p className="mt-3 text-[1.04rem] leading-relaxed text-inksoft">
                        {v.desc}
                      </p>
                    </article>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================== credentials */}
      <section className="section-tight relative">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow={dict.impact.eyebrow}
              eyebrowTone="mint"
              eyebrowIcon="shield"
              title={t.credentialsTitle}
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.credentials.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.07} direction="scale">
                <div className="flex h-full items-center gap-4 rounded-[1.7rem] border border-white bg-white/80 p-5 shadow-soft backdrop-blur-md transition-transform duration-500 hover:-translate-y-1.5">
                  <IconOrb
                    icon={CRED_ICONS[i]}
                    tone={(["coral", "mint", "lilac", "sky"] as Tone[])[i]}
                    size="lg"
                  />
                  <div>
                    <p className="font-display text-[1.12rem] font-extrabold tracking-tight">
                      {c.label}
                    </p>
                    <p className="mt-1 text-[0.96rem] leading-snug text-inksoft">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Team locale={locale} dict={dict} />
      <Nurses dict={dict} />

      {/* ======================================================= built here */}
      <section className="section relative overflow-hidden bg-[linear-gradient(180deg,#f7f2ff,#fff6f0)]">
        <div className="container-x relative">
          <div className="ring-grad shape-ticket relative overflow-hidden bg-white/92 p-8 shadow-float sm:p-12">
            <span aria-hidden className="ring-grad-line shape-ticket" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <Eyebrow tone="lilac" icon="code">
                  {dict.tech.eyebrow}
                </Eyebrow>
                <h2 className="text-h2 mt-5">{t.buildTitle}</h2>
                <p className="mt-5 max-w-[54ch] text-[1.1rem] leading-relaxed text-inksoft">
                  {t.buildLead}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  {dict.tech.metrics.map((m) => (
                    <Chip key={m.label} icon="check">
                      {m.value} · {m.label}
                    </Chip>
                  ))}
                </div>
                <Button
                  href={`/${locale}#tech`}
                  size="lg"
                  className="mt-8"
                  icon="arrowRight"
                >
                  {dict.common.learnMore}
                </Button>
              </div>

              <div className="relative">
                <MediaFrame
                  src="diagnostics-imaging"
                  alt={t.buildTitle}
                  shape="leaf"
                  className="aspect-[4/3] w-full border-[5px] border-white"
                  sizes="(max-width:1024px) 90vw, 520px"
                  wash="lilac"
                />
                <span className="absolute -bottom-7 -left-6 hidden sm:block">
                  <IconOrb icon="scan" tone="lilac" size="xl" halo />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials dict={dict} />
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
