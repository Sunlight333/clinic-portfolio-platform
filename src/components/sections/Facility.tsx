import type { Dictionary } from "@/i18n";
import { MediaFrame } from "@/components/ui/Media";
import { SectionHeading, Chip } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Motion";
import type { ImageKey } from "@/lib/images";
import type { GlyphName } from "@/components/icons/Glyph";

type Shot = { src: ImageKey; shape: "leaf" | "arch" | "circle" | "squircle" | "leaf-alt" | "petal"; w: string };

const ROW_A: Shot[] = [
  { src: "lounge", shape: "arch", w: "w-[19rem]" },
  { src: "dental-suite", shape: "leaf", w: "w-[23rem]" },
  { src: "detail-skincare", shape: "circle", w: "w-[15rem]" },
  { src: "clinic-room", shape: "squircle", w: "w-[21rem]" },
  { src: "aesthetics-treatment", shape: "leaf-alt", w: "w-[19rem]" },
];

const ROW_B: Shot[] = [
  { src: "dental-light", shape: "circle", w: "w-[15rem]" },
  { src: "diagnostics-imaging", shape: "squircle", w: "w-[22rem]" },
  { src: "wellness", shape: "petal", w: "w-[18rem]" },
  { src: "lab-vials", shape: "leaf", w: "w-[19rem]" },
  { src: "balloons", shape: "arch", w: "w-[16rem]" },
];

const TAG_ICONS: GlyphName[] = ["leaf", "sun", "shield", "child", "wheelchair", "parking"];

export function Facility({ dict }: { dict: Dictionary }) {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow={dict.facility.eyebrow}
              eyebrowTone="mint"
              eyebrowIcon="pin"
              title={dict.facility.title}
              lead={dict.facility.lead}
            />
          </Reveal>

          <Reveal delay={0.12} direction="left">
            <ul className="flex flex-wrap gap-3">
              {dict.facility.tags.map((tag, i) => (
                <li key={tag}>
                  <Chip icon={TAG_ICONS[i % TAG_ICONS.length]}>{tag}</Chip>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* full-bleed gallery */}
      <div className="relative mt-14 space-y-6">
        <Marquee speed={70} gap="1.5rem">
          {ROW_A.map((shot, i) => (
            <MediaFrame
              key={`${shot.src}-${i}`}
              src={shot.src}
              alt={dict.facility.title}
              shape={shot.shape}
              className={`${shot.w} aspect-[4/3] shrink-0 border-[5px] border-white`}
              sizes="380px"
            />
          ))}
        </Marquee>

        <Marquee speed={78} gap="1.5rem" reverse>
          {ROW_B.map((shot, i) => (
            <MediaFrame
              key={`${shot.src}-${i}`}
              src={shot.src}
              alt={dict.facility.title}
              shape={shot.shape}
              className={`${shot.w} aspect-[4/3] shrink-0 border-[5px] border-white`}
              sizes="380px"
            />
          ))}
        </Marquee>

        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-[linear-gradient(90deg,#fffaf5,transparent)] sm:w-40"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-[linear-gradient(270deg,#fffaf5,transparent)] sm:w-40"
        />
      </div>
    </section>
  );
}

export default Facility;
