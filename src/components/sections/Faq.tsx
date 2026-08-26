"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Glyph } from "@/components/icons/Glyph";
import { IconOrb } from "@/components/ui/IconOrb";

export type FaqItem = { q: string; a: string };

export function FaqList({ items, tone = "coral" }: { items: FaqItem[]; tone?: "coral" | "mint" | "lilac" }) {
  const [open, setOpen] = useState<number | null>(0);

  const ring = {
    coral: "border-coral-200 bg-[linear-gradient(150deg,#fff,#fff4ee)]",
    mint: "border-mint-200 bg-[linear-gradient(150deg,#fff,#f1fbf7)]",
    lilac: "border-lilac-200 bg-[linear-gradient(150deg,#fff,#f7f3ff)]",
  }[tone];

  return (
    <ul className="flex flex-col gap-4">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q}>
            <div
              className={`overflow-hidden rounded-[1.8rem] border transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
                isOpen ? `${ring} shadow-lift` : "border-white bg-white/70 shadow-soft hover:bg-white"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
              >
                <span
                  className={`font-display grid h-10 w-10 shrink-0 place-items-center rounded-full text-[0.92rem] font-extrabold transition-colors duration-400 ${
                    isOpen ? "bg-coral-500 text-white" : "bg-white text-inkmute shadow-soft"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display flex-1 text-[1.08rem] leading-snug font-extrabold tracking-tight sm:text-[1.18rem]">
                  {item.q}
                </span>
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white bg-white shadow-soft transition-transform duration-500 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <Glyph
                    name={isOpen ? "minus" : "plus"}
                    strokeWidth={3.6}
                    className="h-4 w-4 text-coral-500"
                  />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="px-5 pb-6 pl-[4.6rem] text-[1rem] leading-relaxed text-inksoft sm:px-6 sm:pl-[5rem]">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function FaqAside({ title, lead, phone }: { title: string; lead: string; phone: string }) {
  return (
    <div className="shape-arch-soft sticky top-40 hidden flex-col items-center border border-white bg-[linear-gradient(170deg,#fff,#fff2ea_60%,#ffe8f1)] p-8 text-center shadow-lift lg:flex">
      <IconOrb icon="message" tone="coral" size="2xl" halo pulse />
      <h3 className="font-display mt-6 text-[1.35rem] font-extrabold tracking-tight">{title}</h3>
      <p className="mt-3 text-[0.98rem] leading-relaxed text-inksoft">{lead}</p>
      <a
        href={`tel:${phone.replace(/\s/g, "")}`}
        className="font-display mt-6 inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-[1rem] font-extrabold text-white transition-transform duration-300 hover:scale-[1.03]"
      >
        <Glyph name="phone" strokeWidth={3} className="h-4 w-4" />
        {phone}
      </a>
    </div>
  );
}
