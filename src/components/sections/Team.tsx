import type { Dictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import { MediaFrame } from "@/components/ui/Media";
import { IconOrb, type Tone } from "@/components/ui/IconOrb";
import { SectionHeading } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Glyph, type GlyphName } from "@/components/icons/Glyph";
import type { ImageKey } from "@/lib/images";

const MEMBER_META: {
  image: ImageKey;
  icon: GlyphName;
  tone: Tone;
  shape: "arch" | "arch-soft";
}[] = [
  { image: "team-clinician-f", icon: "implant", tone: "sky", shape: "arch" },
  { image: "team-doctor-5", icon: "sparkle", tone: "rose", shape: "arch-soft" },
  {
    image: "team-family-med",
    icon: "stethoscope",
    tone: "mint",
    shape: "arch",
  },
  { image: "team-ortho", icon: "aligner", tone: "lilac", shape: "arch-soft" },
  { image: "team-derm", icon: "skin", tone: "coral", shape: "arch" },
  { image: "team-surgeon", icon: "tooth", tone: "amber", shape: "arch-soft" },
  { image: "team-sedation", icon: "heartPulse", tone: "sky", shape: "arch" },
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
            <Button
              href={p("/about")}
              variant="outline"
              size="lg"
              icon="arrowUpRight"
            >
              {dict.team.cta}
            </Button>
          </Reveal>
        </div>
      </div>

      {/* Seven specialists, one line: the row bleeds out of the container and
          scrolls rather than wrapping, so the team never breaks into a short
          second row. */}
      <div className="rail-x relative mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
        {dict.team.members.map((member, i) => {
          const m = MEMBER_META[i];
          return (
            <Reveal
              key={member.name}
              delay={(i % 4) * 0.09}
              direction="up"
              className="w-[68vw] max-w-[16rem] shrink-0 snap-start sm:w-[13.5rem] lg:w-[11.25rem]"
            >
              <article className="group relative flex h-full flex-col">
                <div className="relative">
                  <MediaFrame
                    src={m.image}
                    alt={member.name}
                    shape={m.shape}
                    className="aspect-[3/4] w-full border-[5px] border-white transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-2"
                    sizes="(max-width:640px) 68vw, 260px"
                    imgClassName="saturate-[.88] transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.06]"
                  />
                  <span className="absolute -right-2 bottom-5 transition-transform duration-500 group-hover:-translate-y-2">
                    <IconOrb icon={m.icon} tone={m.tone} size="md" halo />
                  </span>
                </div>

                <div className="mt-6 px-1">
                  <h3 className="font-display min-h-[2.5em] text-[1.22rem] leading-tight font-extrabold tracking-tight">
                    {member.name}
                  </h3>
                  <p className="mt-1.5 text-[1rem] font-extrabold text-coral-600">
                    {member.role}
                  </p>
                  <p className="mt-2 flex items-start gap-2 text-[1rem] leading-snug text-inksoft">
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
    </section>
  );
}

export default Team;
