import type { Dictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import { SectionHeading } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { TeamRail, type MemberMeta } from "@/components/sections/TeamRail";

const MEMBER_META: MemberMeta[] = [
  { image: "team-clinician-f", icon: "implant", tone: "sky", shape: "arch" },
  { image: "team-doctor-5", icon: "sparkle", tone: "rose", shape: "arch-soft" },
  { image: "team-family-med", icon: "stethoscope", tone: "mint", shape: "arch" },
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
            <Button href={p("/about")} variant="outline" size="lg" icon="arrowUpRight">
              {dict.team.cta}
            </Button>
          </Reveal>
        </div>
      </div>

      {/* The cards carry only a name and a title; everything else lives in the
          profile dialog each card opens. */}
      <TeamRail
        members={dict.team.members}
        meta={MEMBER_META}
        labels={{ ...dict.team.modal, open: dict.team.open }}
        bookHref={p("/contact")}
      />
    </section>
  );
}

export default Team;
