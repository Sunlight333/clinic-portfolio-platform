import type { Dictionary } from "@/i18n";
import { IconOrb, type Tone } from "@/components/ui/IconOrb";
import { SectionHeading } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Motion";
import { TechIcon, techTitle } from "@/components/icons/TechIcon";
import { Glyph, type GlyphName } from "@/components/icons/Glyph";
import { MediaFrame } from "@/components/ui/Media";
import { Logo } from "@/components/site/Logo";

const CAP_META: { icon: GlyphName; tone: Tone; shape: string }[] = [
  { icon: "layers", tone: "coral", shape: "shape-squircle" },
  { icon: "waves", tone: "lilac", shape: "shape-leaf" },
  { icon: "translate", tone: "mint", shape: "shape-leaf-alt" },
  { icon: "accessibility", tone: "sky", shape: "shape-squircle" },
  { icon: "gauge", tone: "amber", shape: "shape-leaf-alt" },
  { icon: "lock", tone: "rose", shape: "shape-leaf" },
];

const GROUP_TONE = [
  "from-coral-100 to-rose-50",
  "from-lilac-100 to-sky-50",
  "from-mint-100 to-sky-50",
  "from-sky-100 to-lilac-50",
  "from-amber-100 to-coral-50",
];

export function TechStack({ dict }: { dict: Dictionary }) {
  const allSlugs = dict.tech.groups.flatMap((g) => g.slugs);

  return (
    <section
      id="tech"
      className="section relative overflow-hidden bg-[linear-gradient(180deg,#fffaf5,#fff4ec_55%,#f7f1ff)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(255,169,131,.22), transparent 45%), radial-gradient(circle at 88% 30%, rgba(167,139,250,.2), transparent 46%), radial-gradient(circle at 50% 96%, rgba(70,198,171,.18), transparent 46%)",
        }}
      />

      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            eyebrow={dict.tech.eyebrow}
            eyebrowTone="lilac"
            eyebrowIcon="code"
            title={
              <>
                {dict.tech.title.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="text-gradient-warm font-serif italic">
                  {dict.tech.title.split(" ").slice(-2).join(" ")}
                </span>
              </>
            }
            lead={dict.tech.lead}
            align="center"
            className="mx-auto"
          />
        </Reveal>

        {/* ------------------------------------------------------ capabilities */}
        <h3 className="text-eyebrow mt-16 text-center text-inkmute">{dict.tech.capabilitiesTitle}</h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.tech.capabilities.map((cap, i) => {
            const m = CAP_META[i];
            return (
              <Reveal key={cap.title} delay={i * 0.07} direction="up">
                <article
                  className={`${m.shape} group relative flex h-full flex-col items-start border border-white bg-white/80 p-7 shadow-lift backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-float`}
                >
                  <IconOrb icon={m.icon} tone={m.tone} size="xl" halo />
                  <h4 className="font-display mt-6 text-[1.3rem] font-extrabold tracking-tight">
                    {cap.title}
                  </h4>
                  <p className="mt-2.5 text-[0.98rem] leading-relaxed text-inksoft">{cap.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* --------------------------------------------------------- stack grid */}
        <h3 className="text-eyebrow mt-20 text-center text-inkmute">{dict.tech.stackTitle}</h3>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {dict.tech.groups.map((group, gi) => (
            <Reveal
              key={group.title}
              delay={gi * 0.06}
              direction="up"
              className={gi === dict.tech.groups.length - 1 ? "lg:col-span-2" : ""}
            >
              <div
                className={`shape-squircle relative h-full border border-white bg-gradient-to-br ${GROUP_TONE[gi % GROUP_TONE.length]} p-7 shadow-soft`}
              >
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-coral-400" />
                  <h4 className="font-display text-[1.12rem] font-extrabold tracking-tight">
                    {group.title}
                  </h4>
                  <span className="ml-auto font-mono text-[0.78rem] font-bold text-inkmute">
                    {String(group.slugs.length).padStart(2, "0")}
                  </span>
                </div>

                <ul className="mt-6 flex flex-wrap gap-3.5">
                  {group.slugs.map((slug) => (
                    <li key={slug}>
                      <span className="group/chip flex w-[5.6rem] flex-col items-center gap-2">
                        <span className="grid h-[4.4rem] w-[4.4rem] place-items-center rounded-full border border-white bg-white/90 shadow-soft transition-all duration-400 ease-[cubic-bezier(.16,1,.3,1)] group-hover/chip:-translate-y-1.5 group-hover/chip:shadow-lift">
                          <TechIcon slug={slug} size={34} />
                        </span>
                        <span className="text-center text-[0.72rem] leading-tight font-bold text-inksoft">
                          {techTitle(slug)}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ------------------------------------------------------------ author */}
        <Reveal direction="up" className="mt-16">
          <article className="shape-ticket relative overflow-hidden border border-white bg-white/85 shadow-float backdrop-blur-xl">
            <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="relative min-h-[18rem]">
                <MediaFrame
                  src="tech-team"
                  alt={dict.tech.author}
                  shape="squircle"
                  position="cover"
                  className="rounded-none shadow-none"
                  sizes="(max-width:1024px) 100vw, 460px"
                  ring={false}
                  wash="lilac"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(200deg,transparent_35%,rgba(58,43,63,.45))]"
                />
                <div className="absolute bottom-6 left-6">
                  <Logo size={52} variant="invert" />
                </div>
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-10">
                <span className="text-eyebrow text-coral-600">{dict.tech.author}</span>
                <h3 className="text-h3 mt-3">{dict.tech.authorRole}</h3>
                <p className="mt-4 max-w-[54ch] text-[1.02rem] leading-relaxed text-inksoft">
                  {dict.tech.authorBio}
                </p>

                <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {dict.tech.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-[1.3rem] border border-white bg-[linear-gradient(150deg,#fff,#fff6f0)] px-4 py-4 text-center shadow-soft"
                    >
                      <dt className="font-display text-[1.65rem] leading-none font-extrabold tracking-tight text-gradient-warm">
                        {m.value}
                      </dt>
                      <dd className="mt-2 text-[0.76rem] leading-tight font-bold text-inkmute">
                        {m.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </article>
        </Reveal>
      </div>

      {/* ------------------------------------------------------------ marquee */}
      <div className="relative mt-16">
        <Marquee speed={58} gap="1.6rem" className="py-3">
          {allSlugs.map((slug, i) => (
            <span
              key={`${slug}-${i}`}
              className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-white bg-white/80 shadow-soft"
              title={techTitle(slug)}
            >
              <TechIcon slug={slug} size={28} />
            </span>
          ))}
        </Marquee>
        <Marquee speed={64} gap="1.6rem" reverse className="mt-4 py-3">
          {[...allSlugs].reverse().map((slug, i) => (
            <span
              key={`${slug}-r-${i}`}
              className="flex shrink-0 items-center gap-3 rounded-full border border-white bg-white/70 py-2.5 pr-6 pl-2.5 shadow-soft"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white shadow-soft">
                <TechIcon slug={slug} size={22} />
              </span>
              <span className="font-display text-[0.98rem] font-extrabold tracking-tight whitespace-nowrap">
                {techTitle(slug)}
              </span>
            </span>
          ))}
        </Marquee>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-[linear-gradient(90deg,#fbf5ff,transparent)]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-[linear-gradient(270deg,#fbf5ff,transparent)]"
        />
      </div>

      <div className="container-x relative mt-10 flex justify-center">
        <span className="flex items-center gap-2.5 rounded-full border border-white bg-white/70 px-5 py-2.5 text-[0.86rem] font-bold text-inksoft shadow-soft">
          <Glyph name="code" className="h-4 w-4 text-coral-500" strokeWidth={3} />
          Next.js 16 · React 19 · Tailwind CSS v4 · Motion
        </span>
      </div>
    </section>
  );
}

export default TechStack;
