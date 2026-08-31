import type { Dictionary } from "@/i18n";
import { MediaFrame } from "@/components/ui/Media";
import { SectionHeading, Stars } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { Glyph } from "@/components/icons/Glyph";
import { IconOrb } from "@/components/ui/IconOrb";
import type { ImageKey } from "@/lib/images";

const AVATARS: ImageKey[] = ["person-3", "person-4", "person-6", "person-5"];
const SHELLS = [
  "shape-leaf bg-[linear-gradient(160deg,#ffffff,#fff4ee)]",
  "shape-leaf-alt bg-[linear-gradient(160deg,#ffffff,#fff1f6)]",
  "shape-leaf-alt bg-[linear-gradient(160deg,#ffffff,#f2fbf8)]",
  "shape-leaf bg-[linear-gradient(160deg,#ffffff,#f5f1ff)]",
];

export function Testimonials({ dict }: { dict: Dictionary }) {
  return (
    <section className="section relative overflow-hidden bg-[linear-gradient(170deg,#fff7f0_0%,#ffeef4_52%,#f6f2ff_100%)]">
      <div
        aria-hidden
        className="animate-float-slower pointer-events-none absolute -left-24 bottom-10 h-[28rem] w-[28rem] rounded-full opacity-45 blur-[110px]"
        style={{ background: "radial-gradient(circle,#ffd6c4,transparent 68%)" }}
      />

      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            eyebrow={dict.testimonials.eyebrow}
            eyebrowTone="amber"
            eyebrowIcon="quote"
            title={dict.testimonials.title}
            lead={dict.testimonials.lead}
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {dict.testimonials.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08} direction={i % 2 === 0 ? "right" : "left"}>
              <figure
                className={`${SHELLS[i]} group relative flex h-full flex-col border border-white p-8 shadow-lift backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-float sm:p-9`}
              >
                <span className="pointer-events-none absolute top-6 right-8 opacity-15">
                  <Glyph name="quote" className="h-16 w-16 text-coral-500" strokeWidth={2} />
                </span>

                <Stars />

                <blockquote className="mt-5 flex-1 text-[1.12rem] leading-relaxed font-medium text-ink sm:text-[1.18rem]">
                  “{item.quote}”
                </blockquote>

                <figcaption className="mt-7 flex items-center gap-4 border-t border-ink/10 pt-6">
                  <MediaFrame
                    src={AVATARS[i]}
                    alt={item.name}
                    shape="circle"
                    className="h-16 w-16 shrink-0 border-[3px] border-white"
                    sizes="80px"
                  />
                  <span className="flex flex-col">
                    <span className="font-display text-[1.12rem] font-extrabold tracking-tight">
                      {item.name}
                    </span>
                    <span className="text-[0.96rem] font-bold text-inkmute">{item.role}</span>
                  </span>
                  <span className="ml-auto hidden sm:block">
                    <IconOrb icon="check" tone={i % 2 ? "rose" : "mint"} size="sm" />
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
