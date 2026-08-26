import type { Dictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import { MediaFrame } from "@/components/ui/Media";
import { IconOrb, type Tone } from "@/components/ui/IconOrb";
import { SectionHeading } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Glyph, type GlyphName } from "@/components/icons/Glyph";
import type { ImageKey } from "@/lib/images";

const MEMBER_META: { image: ImageKey; icon: GlyphName; tone: Tone; shape: "arch" | "arch-soft" }[] = [
  { image: "team-clinician-f", icon: "implant", tone: "sky", shape: "arch" },
  { image: "team-doctor-5", icon: "sparkle", tone: "rose", shape: "arch-soft" },
  { image: "team-doctor-6", icon: "stethoscope", tone: "mint", shape: "arch" },
  { image: "team-doctor-3", icon: "aligner", tone: "lilac", shape: "arch-soft" },
];

export function Team({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const p = (path: string) => localePath(locale, path);

  return (
    <section id="team" className="section relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] bg-[linear-gradient(180deg,#f8f2ff,transparent)]"
      />

      <div className="container-x relative">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal className="max-w-3xl">
            <SectionHeading
              eyebrow={dict.team.eyebrow}
              eyebrowTone="rose"
              eyebrowIcon="users"
              title={dict.team.title}
              lead={dict.team.lead}
            />
          </Reveal>
          <Reveal delay={0.12}>
            <Button href={p("/about")} variant="outline" size="lg" icon="arrowUpRight">
              {dict.team.cta}
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {dict.team.members.map((member, i) => {
            const m = MEMBER_META[i];
            return (
              <Reveal key={member.name} delay={i * 0.09} direction="up">
                <article
                  className={`group relative flex h-full flex-col ${i % 2 === 1 ? "lg:mt-10" : ""}`}
                >
                  <div className="relative">
                    <MediaFrame
                      src={m.image}
                      alt={member.name}
                      shape={m.shape}
                      className="aspect-[3/4] w-full border-[5px] border-white transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-2"
                      sizes="(max-width:640px) 100vw, 320px"
                      imgClassName="saturate-[.88] transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.06]"
                    />
                    <span className="absolute -right-3 bottom-6 transition-transform duration-500 group-hover:-translate-y-2">
                      <IconOrb icon={m.icon} tone={m.tone} size="lg" halo />
                    </span>
                  </div>

                  <div className="mt-6 px-1">
                    <h3 className="font-display text-[1.22rem] leading-tight font-extrabold tracking-tight">
                      {member.name}
                    </h3>
                    <p className="mt-1.5 text-[0.92rem] font-extrabold text-coral-600">{member.role}</p>
                    <p className="mt-2 flex items-start gap-2 text-[0.92rem] leading-snug text-inksoft">
                      <Glyph
                        name="check"
                        strokeWidth={4}
                        className="mt-1 h-3.5 w-3.5 shrink-0 text-mint-400"
                      />
                      {member.focus}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Team;
