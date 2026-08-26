import type { Dictionary } from "@/i18n";
import { IconOrb, type Tone } from "@/components/ui/IconOrb";
import { SectionHeading } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Motion";
import { Glyph, type GlyphName } from "@/components/icons/Glyph";
import { MediaFrame } from "@/components/ui/Media";

const PILLARS: { icon: GlyphName; tone: Tone }[] = [
  { icon: "layers", tone: "lilac" },
  { icon: "shield", tone: "mint" },
  { icon: "sun", tone: "amber" },
];

const STAT_SHAPE = ["shape-arch", "shape-squircle", "shape-ticket", "shape-arch-soft"];

export function Impact({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="tour"
      className="section relative overflow-hidden bg-[linear-gradient(165deg,#f4fbf8_0%,#eef7ff_45%,#f6f1ff_100%)]"
    >
      <div
        aria-hidden
        className="animate-drift pointer-events-none absolute -left-32 top-10 h-[34rem] w-[34rem] rounded-full opacity-50 blur-[110px]"
        style={{ background: "radial-gradient(circle,#c6f0e3,transparent 68%)" }}
      />

      <div className="container-x relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.06fr] lg:items-center">
          {/* ------------------------------------------------------ copy side */}
          <div>
            <Reveal>
              <SectionHeading
                eyebrow={dict.impact.eyebrow}
                eyebrowTone="sky"
                eyebrowIcon="gauge"
                title={(() => {
                  const [head, ...rest] = dict.impact.title.split(",");
                  const tail = rest.join(",").trim();
                  if (!tail) return dict.impact.title;
                  return (
                    <>
                      {head},
                      <br />
                      <span className="text-gradient-fresh font-serif italic">{tail}</span>
                    </>
                  );
                })()}
                lead={dict.impact.lead}
              />
            </Reveal>

            <div className="mt-10 flex flex-col gap-4">
              {dict.impact.pillars.map((pillar, i) => (
                <Reveal key={pillar.title} delay={i * 0.1} direction="right">
                  <div className="group flex items-start gap-5 rounded-[1.8rem] border border-white bg-white/72 p-5 shadow-soft backdrop-blur-md transition-all duration-500 hover:translate-x-1.5 hover:bg-white hover:shadow-lift">
                    <IconOrb icon={PILLARS[i].icon} tone={PILLARS[i].tone} size="lg" />
                    <div>
                      <h3 className="font-display text-[1.2rem] font-extrabold tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 text-[0.98rem] leading-relaxed text-inksoft">{pillar.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ----------------------------------------------------- media side */}
          <Reveal direction="left" delay={0.1}>
            <div className="relative">
              {/* ambient generated video — pure light, no distraction */}
              <div className="shape-blob-alt relative h-[24rem] overflow-hidden border-[6px] border-white shadow-float sm:h-[30rem]">
                <MediaFrame
                  src="lounge"
                  alt={dict.facility.title}
                  shape="squircle"
                  position="cover"
                  className="rounded-none shadow-none"
                  sizes="(max-width:1024px) 100vw, 640px"
                  ring={false}
                />
                {/* generated ambient light pass — real video, blended into the photo */}
                <video
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-soft-light"
                  src="/video/aurora-loop.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  aria-hidden="true"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_20%_10%,rgba(255,255,255,.42),transparent_62%)]"
                />
                <div className="absolute inset-x-6 bottom-6 flex items-center justify-end gap-3">
                  <span className="glass rounded-full px-5 py-2.5 text-[0.9rem] font-extrabold">
                    {dict.impact.videoCaption}
                  </span>
                  <span className="glass grid h-11 w-11 place-items-center rounded-full">
                    <Glyph name="sun" className="h-5 w-5 text-amber-400" strokeWidth={3} />
                  </span>
                </div>
              </div>

              {/* corner photo, keeps the block human */}
              <div className="absolute -bottom-8 -left-10 hidden w-40 sm:block">
                <MediaFrame
                  src="team-clinician-f"
                  alt={dict.team.members[0].name}
                  shape="circle"
                  className="aspect-square w-full border-[5px] border-white"
                  sizes="200px"
                />
              </div>
              <span className="absolute -top-6 right-4 hidden sm:block">
                <IconOrb icon="sparkle" tone="rose" size="lg" halo />
              </span>
            </div>
          </Reveal>
        </div>

        {/* ---------------------------------------------------------- stats */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dict.impact.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} direction="scale">
              <div
                className={`${STAT_SHAPE[i]} flex h-full flex-col items-center justify-center border border-white bg-white/80 px-6 py-9 text-center shadow-lift backdrop-blur-md transition-transform duration-500 hover:-translate-y-1.5`}
              >
                <p className="font-display flex items-baseline text-[clamp(2.6rem,4.4vw,3.6rem)] leading-none font-extrabold tracking-tight">
                  <Counter to={stat.value} />
                  <span className="text-gradient-warm text-[0.62em]">{stat.suffix}</span>
                </p>
                <p className="mt-3 max-w-[18ch] text-[0.94rem] leading-snug font-bold text-inksoft">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Impact;
