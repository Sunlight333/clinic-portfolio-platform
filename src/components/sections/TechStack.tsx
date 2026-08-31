import type { Dictionary } from "@/i18n";
import { IconOrb, type Tone } from "@/components/ui/IconOrb";
import { SectionHeading } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import type { GlyphName } from "@/components/icons/Glyph";
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

export function TechStack({ dict }: { dict: Dictionary }) {
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
                  <p className="mt-2.5 text-[1.05rem] leading-relaxed text-inksoft">{cap.desc}</p>
                </article>
              </Reveal>
            );
          })}
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
                <p className="mt-4 max-w-[54ch] text-[1.08rem] leading-relaxed text-inksoft">
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
                      <dd className="mt-2 text-[0.84rem] leading-tight font-bold text-inkmute">
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
    </section>
  );
}

export default TechStack;
