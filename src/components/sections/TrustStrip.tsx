import type { Dictionary } from "@/i18n";
import { Marquee } from "@/components/ui/Motion";
import { Glyph, type GlyphName } from "@/components/icons/Glyph";

const ICONS: GlyphName[] = ["calendar", "scan", "translate", "leaf", "check", "shield", "child", "clock"];
const TONE = [
  "text-coral-500 bg-coral-50",
  "text-mint-500 bg-mint-50",
  "text-lilac-500 bg-lilac-50",
  "text-rose-500 bg-rose-50",
  "text-sky-400 bg-sky-50",
  "text-amber-400 bg-amber-100/70",
];

export function TrustStrip({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative -mt-2 overflow-hidden border-y border-white/70 bg-[linear-gradient(90deg,#fff4ec,#fdeef7_50%,#f2f0ff)] py-6">
      <Marquee speed={54} gap="1.2rem">
        {dict.marquee.items.map((item, i) => (
          <span
            key={item}
            className="flex shrink-0 items-center gap-3 rounded-full border border-white bg-white/75 py-2.5 pr-6 pl-2.5 shadow-soft backdrop-blur-sm"
          >
            <span className={`grid h-11 w-11 place-items-center rounded-full ${TONE[i % TONE.length]}`}>
              <Glyph name={ICONS[i % ICONS.length]} className="h-5 w-5" strokeWidth={2.8} />
            </span>
            <span className="font-display text-[1.08rem] font-extrabold tracking-tight whitespace-nowrap">
              {item}
            </span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}

export default TrustStrip;
