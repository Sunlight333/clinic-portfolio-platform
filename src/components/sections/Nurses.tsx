import type { Dictionary } from "@/i18n";
import { MediaFrame } from "@/components/ui/Media";
import { IconOrb, type Tone } from "@/components/ui/IconOrb";
import { SectionHeading } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { Glyph, type GlyphName } from "@/components/icons/Glyph";
import type { ImageKey } from "@/lib/images";

/* The nursing team is deliberately drawn nothing like the doctors: round
   portraits instead of arches, centred text instead of left-aligned, and the
   whole group sits inside one tinted panel so it reads as its own team. */
const NURSE_META: { image: ImageKey; icon: GlyphName; tone: Tone }[] = [
  { image: "nurse-lead", icon: "shield", tone: "mint" },
  { image: "nurse-dental", icon: "tooth", tone: "sky" },
  { image: "nurse-paediatric", icon: "child", tone: "amber" },
  { image: "nurse-recovery", icon: "heartPulse", tone: "lilac" },
  { image: "nurse-aesthetic", icon: "sparkle", tone: "rose" },
];

export function Nurses({ dict }: { dict: Dictionary }) {
  return (
    <section id="nurses" className="section-tight relative overflow-hidden">
      <div className="container-x relative">
        <Reveal direction="scale">
          <div className="shape-squircle relative overflow-hidden border border-white bg-[linear-gradient(158deg,#f1fbf7_0%,#eef5ff_48%,#fdf2f6_100%)] px-5 py-14 shadow-lift sm:px-10 lg:px-14 lg:py-16">
            <span
              aria-hidden
              className="animate-drift pointer-events-none absolute -top-24 -right-16 h-[26rem] w-[26rem] rounded-full opacity-55 blur-[100px]"
              style={{
                background: "radial-gradient(circle,#ffd9c6,transparent 68%)",
              }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-28 -left-20 h-[24rem] w-[24rem] rounded-full opacity-50 blur-[100px]"
              style={{
                background: "radial-gradient(circle,#cdf3e8,transparent 68%)",
              }}
            />

            <div className="relative">
              <SectionHeading
                align="center"
                eyebrow={dict.nurses.eyebrow}
                eyebrowTone="mint"
                eyebrowIcon="heartPulse"
                title={dict.nurses.title}
                lead={dict.nurses.lead}
                className="mx-auto"
              />

              <div className="mt-14 flex flex-wrap justify-center gap-x-7 gap-y-12">
                {dict.nurses.members.map((member, i) => {
                  const m = NURSE_META[i];
                  return (
                    <Reveal
                      key={member.name}
                      delay={i * 0.08}
                      direction="up"
                      className="w-[44%] max-w-[15rem] sm:w-[30%] lg:w-[calc(20%-1.4rem)]"
                    >
                      <article className="group flex h-full flex-col items-center text-center">
                        <div className="relative w-full">
                          <MediaFrame
                            src={m.image}
                            alt={member.name}
                            shape="circle"
                            className="aspect-square w-full border-[5px] border-white transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-2"
                            sizes="(max-width:640px) 46vw, 220px"
                            imgClassName="saturate-[.9] transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.07]"
                          />
                          <span className="absolute -right-1 bottom-1 transition-transform duration-500 group-hover:-translate-y-2">
                            <IconOrb icon={m.icon} tone={m.tone} size="sm" />
                          </span>
                        </div>

                        <h3 className="font-display mt-6 text-[1.14rem] leading-tight font-extrabold tracking-tight">
                          {member.name}
                        </h3>
                        <p className="mt-1.5 text-[0.99rem] font-extrabold text-coral-600">
                          {member.role}
                        </p>
                        <p className="mt-2 flex items-start justify-center gap-1.5 text-[0.97rem] leading-snug text-inksoft">
                          <Glyph
                            name="check"
                            strokeWidth={4}
                            className="mt-1 h-3.5 w-3.5 shrink-0 text-mint-400"
                          />
                          <span>{member.focus}</span>
                        </p>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Nurses;
