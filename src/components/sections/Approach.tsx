import type { Dictionary } from "@/i18n";
import { MediaFrame } from "@/components/ui/Media";
import { IconOrb, type Tone } from "@/components/ui/IconOrb";
import { SectionHeading, StepBadge } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import type { GlyphName } from "@/components/icons/Glyph";

const STEP_META: { icon: GlyphName; tone: Tone; shape: string; lift: string }[] = [
  { icon: "message", tone: "coral", shape: "shape-arch", lift: "lg:translate-y-0" },
  { icon: "scan", tone: "sky", shape: "shape-leaf", lift: "lg:translate-y-8" },
  { icon: "leaf", tone: "mint", shape: "shape-arch", lift: "lg:translate-y-0" },
  { icon: "message", tone: "lilac", shape: "shape-leaf-alt", lift: "lg:translate-y-8" },
];

export function Approach({ dict }: { dict: Dictionary }) {
  return (
    <section className="section relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,#fdf1f6,transparent)]"
      />

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow={dict.approach.eyebrow}
              eyebrowTone="mint"
              eyebrowIcon="check"
              title={dict.approach.title}
              lead={dict.approach.lead}
            />
          </Reveal>

          <Reveal direction="left" delay={0.12}>
            <div className="relative mx-auto max-w-[34rem]">
              <MediaFrame
                src="care-hands"
                alt={dict.approach.title}
                shape="blob"
                className="h-[22rem] w-full sm:h-[26rem]"
                sizes="(max-width:1024px) 100vw, 560px"
                wash="warm"
              />
              <span className="absolute -bottom-6 -left-4 hidden sm:block">
                <IconOrb icon="heartPulse" tone="rose" size="xl" halo />
              </span>
              <span className="glass-strong absolute -top-5 right-2 rounded-[1.3rem] px-5 py-3">
                <span className="font-display block text-[1.5rem] leading-none font-extrabold">20</span>
                <span className="text-[0.84rem] font-bold text-inkmute">min · 1:1</span>
              </span>
            </div>
          </Reveal>
        </div>

        {/* ------------------------------------------------------- timeline */}
        <div className="relative mt-20">
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-[4.6rem] hidden h-24 w-full lg:block"
            viewBox="0 0 1200 100"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M40 60 C 220 -10, 380 110, 600 44 S 980 -10, 1160 56"
              stroke="url(#trail)"
              strokeWidth="2.5"
              strokeDasharray="10 12"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="trail" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffa583" />
                <stop offset="45%" stopColor="#f2769c" />
                <stop offset="100%" stopColor="#74dbc3" />
              </linearGradient>
            </defs>
          </svg>

          <ol className="relative grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {dict.approach.steps.map((step, i) => {
              const m = STEP_META[i];
              return (
                <Reveal as="li" key={step.n} delay={i * 0.1} className={`${m.lift}`}>
                  <div
                    className={`${m.shape} group relative flex h-full flex-col items-center border border-white bg-white/78 p-7 pt-9 text-center shadow-lift backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-float`}
                  >
                    <IconOrb icon={m.icon} tone={m.tone} size="xl" halo />
                    <span className="mt-5 flex items-center gap-2.5">
                      <StepBadge n={step.n} tone={i % 2 === 0 ? "coral" : "lilac"} />
                    </span>
                    <h3 className="font-display mt-4 text-[1.28rem] font-extrabold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-[1.04rem] leading-relaxed text-inksoft">{step.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Approach;
