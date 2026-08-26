import type { Dictionary } from "@/i18n";
import { SectionHeading } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { FaqList, FaqAside } from "./Faq";

export function FaqSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="faq" className="section relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[24rem] bg-[linear-gradient(180deg,#f7f2ff,transparent)]"
      />

      <div className="container-x relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow={dict.faq.eyebrow}
              eyebrowTone="lilac"
              eyebrowIcon="message"
              title={dict.faq.title}
            />
          </Reveal>
          <Reveal delay={0.12} className="mt-10">
            <FaqAside
              title={dict.cta.title}
              lead={dict.cta.lead}
              phone={dict.footer.phone}
            />
          </Reveal>
        </div>

        <Reveal direction="left" delay={0.08}>
          <FaqList items={dict.faq.items} />
        </Reveal>
      </div>
    </section>
  );
}

export default FaqSection;
