import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n";
import { isLocale } from "@/i18n/config";

import { MediaFrame } from "@/components/ui/Media";
import { IconOrb, type Tone } from "@/components/ui/IconOrb";
import { Glyph, type GlyphName } from "@/components/icons/Glyph";
import { Eyebrow, SectionHeading, Chip } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { Button } from "@/components/ui/Button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
    alternates: { canonical: `/${locale}/contact` },
  };
}

const CHANNELS: { icon: GlyphName; tone: Tone; shape: string }[] = [
  { icon: "phone", tone: "coral", shape: "shape-leaf" },
  { icon: "message", tone: "mint", shape: "shape-squircle" },
  { icon: "mail", tone: "lilac", shape: "shape-leaf-alt" },
  { icon: "heartPulse", tone: "rose", shape: "shape-ticket" },
];

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const t = dict.pages.contact;

  return (
    <>
      {/* ============================================================= hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(165deg,#fff8f2_0%,#fff0e9_40%,#f7f0ff_100%)] pt-[150px] pb-16 lg:pt-[200px] lg:pb-20">
        <div
          aria-hidden
          className="animate-drift pointer-events-none absolute -top-28 right-[-8rem] h-[34rem] w-[34rem] rounded-full opacity-60 blur-[110px]"
          style={{ background: "radial-gradient(circle,#ffd0c0,transparent 68%)" }}
        />

        <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <Eyebrow tone="coral" icon="pin">
                {t.eyebrow}
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="text-h1 mt-6">
                {t.title} <span className="text-gradient-warm font-serif italic">{t.titleAccent}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-lead mt-6 max-w-[52ch] text-inksoft">{t.lead}</p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Chip icon="clock">{dict.nav.quickHours}</Chip>
                <Chip icon="translate">EN · PT · ES</Chip>
                <Chip icon="parking">{dict.facility.tags[5]}</Chip>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.12}>
            <div className="relative mx-auto max-w-[30rem]">
              <MediaFrame
                src="lounge"
                alt={t.mapTitle}
                shape="arch-soft"
                className="aspect-[4/5] w-full border-[6px] border-white"
                sizes="(max-width:1024px) 80vw, 480px"
                priority
              />
              <span className="absolute -bottom-8 -left-6 hidden sm:block">
                <IconOrb icon="pin" tone="coral" size="2xl" halo pulse />
              </span>
              <span className="glass-strong absolute -right-4 top-10 rounded-[1.4rem] px-5 py-3.5">
                <span className="text-[0.72rem] font-extrabold tracking-[0.14em] text-inkmute uppercase">
                  {dict.hero.floatingSlot}
                </span>
                <span className="font-display mt-1 block text-[1.1rem] font-extrabold">
                  {dict.hero.floatingSlotValue}
                </span>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================= channels */}
      <section className="section-tight relative">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.channels.map((c, i) => {
            const m = CHANNELS[i];
            const isMail = c.value.includes("@");
            return (
              <Reveal key={c.label} delay={i * 0.07} direction="up">
                <a
                  href={isMail ? `mailto:${c.value}` : `tel:${c.value.replace(/\s/g, "")}`}
                  className={`${m.shape} group flex h-full flex-col items-center gap-4 border border-white bg-white/80 p-7 text-center shadow-lift backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-float`}
                >
                  <IconOrb icon={m.icon} tone={m.tone} size="xl" halo />
                  <span className="text-eyebrow text-inkmute">{c.label}</span>
                  <span className="font-display text-[1.1rem] font-extrabold tracking-tight break-all">
                    {c.value}
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ============================================== form + hours + map */}
      <section className="section relative overflow-hidden bg-[linear-gradient(180deg,#fffaf5,#fdf2f7_60%,#f6f1ff)]">
        <div className="container-x relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <Reveal>
            <ContactForm dict={dict} />
          </Reveal>

          <div className="flex flex-col gap-6">
            {/* hours */}
            <Reveal direction="left" delay={0.08}>
              <div className="shape-arch-soft border border-white bg-white/80 p-8 shadow-lift backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <IconOrb icon="clock" tone="mint" size="lg" />
                  <h2 className="font-display text-[1.35rem] font-extrabold tracking-tight">
                    {t.hoursTitle}
                  </h2>
                </div>
                <dl className="mt-6 flex flex-col gap-3.5">
                  {t.hours.map((h) => (
                    <div
                      key={h.d}
                      className="flex items-center justify-between border-b border-dashed border-ink/12 pb-3.5 last:border-0 last:pb-0"
                    >
                      <dt className="text-[0.98rem] font-bold text-inksoft">{h.d}</dt>
                      <dd className="font-display text-[1rem] font-extrabold">{h.h}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            {/* map card */}
            <Reveal direction="left" delay={0.16}>
              <div className="shape-ticket relative overflow-hidden border border-white shadow-lift">
                <div className="relative h-[19rem] bg-[linear-gradient(150deg,#eef7f3,#f6f1ff)]">
                  {/* stylised street plan */}
                  <svg
                    aria-hidden
                    viewBox="0 0 400 300"
                    className="absolute inset-0 h-full w-full"
                    fill="none"
                  >
                    <g stroke="#d9cfe0" strokeWidth="10" strokeLinecap="round" opacity="0.55">
                      <path d="M-20 90 H420" />
                      <path d="M-20 210 H420" />
                      <path d="M110 -20 V320" />
                      <path d="M290 -20 V320" />
                    </g>
                    <g stroke="#c9e6dd" strokeWidth="18" strokeLinecap="round">
                      <path d="M-20 150 H420" />
                    </g>
                    <g fill="#ffe2d1" opacity="0.85">
                      <rect x="130" y="105" width="60" height="34" rx="8" />
                      <rect x="200" y="105" width="70" height="34" rx="8" />
                      <rect x="130" y="165" width="52" height="32" rx="8" />
                      <rect x="300" y="165" width="70" height="32" rx="8" />
                      <rect x="20" y="105" width="70" height="34" rx="8" />
                    </g>
                    <g fill="#cfeee4" opacity="0.9">
                      <circle cx="330" cy="60" r="26" />
                      <circle cx="60" cy="230" r="30" />
                    </g>
                  </svg>

                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="relative grid place-items-center">
                      <span className="absolute h-24 w-24 animate-pulse-ring rounded-full ring-2 ring-coral-300" />
                      <IconOrb icon="pin" tone="coral" size="xl" />
                    </span>
                  </span>
                </div>

                <div className="bg-white/90 p-6 backdrop-blur-md">
                  <h3 className="font-display text-[1.2rem] font-extrabold tracking-tight">
                    {t.mapTitle}
                  </h3>
                  <p className="mt-2 text-[0.96rem] leading-relaxed text-inksoft">{t.mapLead}</p>
                  <Button
                    href="https://www.openstreetmap.org/search?query=Avenida%20Paulista%201600%20S%C3%A3o%20Paulo"
                    variant="outline"
                    size="md"
                    icon="arrowUpRight"
                    className="mt-5"
                  >
                    {t.directions}
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================ visit */}
      <section className="section-tight relative pb-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow={dict.facility.eyebrow}
              eyebrowTone="mint"
              eyebrowIcon="leaf"
              title={dict.facility.title}
              lead={dict.facility.lead}
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {(["lounge", "clinic-room", "dental-suite", "balloons"] as const).map((img, i) => (
              <Reveal key={img} delay={i * 0.08} direction="scale">
                <MediaFrame
                  src={img}
                  alt={dict.facility.title}
                  shape={i % 2 === 0 ? "arch" : "leaf-alt"}
                  className={`aspect-[3/4] w-full border-[5px] border-white ${i % 2 === 1 ? "lg:mt-8" : ""}`}
                  sizes="(max-width:640px) 100vw, 320px"
                />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {dict.facility.tags.map((tag, i) => (
              <Chip key={tag} icon={(["leaf", "sun", "shield", "child", "wheelchair", "parking"] as GlyphName[])[i % 6]}>
                {tag}
              </Chip>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
