"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LOCALES, LOCALE_META, type Locale } from "@/i18n/config";
import { FlagDisc } from "@/components/icons/Flags";
import { Glyph } from "@/components/icons/Glyph";

type Props = {
  locale: Locale;
  label: string;
  hint: string;
  variant?: "bar" | "compact" | "stack";
};

/** Swap the leading locale segment, keep the rest of the path. */
function swapLocale(pathname: string, next: Locale) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${next}`;
  parts[0] = next;
  return `/${parts.join("/")}`;
}

export function LanguageSwitcher({ locale, label, hint, variant = "compact" }: Props) {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!box.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  /* --- inline row of circular flags (used in the mobile sheet / footer) --- */
  if (variant === "stack" || variant === "bar") {
    return (
      <div className={variant === "stack" ? "flex flex-col gap-4" : "flex items-center gap-3"}>
        {variant === "stack" && (
          <span className="text-eyebrow text-inkmute">{label}</span>
        )}
        <div className="flex items-center gap-2.5">
          {LOCALES.map((l) => {
            const active = l === locale;
            return (
              <Link
                key={l}
                href={swapLocale(pathname, l)}
                aria-current={active ? "true" : undefined}
                aria-label={LOCALE_META[l].label}
                className={`group relative grid place-items-center rounded-full transition-all duration-400 ease-[cubic-bezier(.16,1,.3,1)] ${
                  active
                    ? "scale-105 ring-[3px] ring-coral-400 ring-offset-2 ring-offset-cream"
                    : "opacity-75 ring-2 ring-white hover:scale-105 hover:opacity-100"
                }`}
                style={{ width: 46, height: 46 }}
              >
                <FlagDisc locale={l} size={46} />
                <span className="sr-only">{LOCALE_META[l].native}</span>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  /* ---------------------------- dropdown (header) --------------------------- */
  return (
    <div ref={box} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={hint}
        className="group flex items-center gap-2 rounded-full border border-white bg-white/75 py-1.5 pr-3.5 pl-1.5 shadow-soft backdrop-blur-md transition-all duration-400 hover:shadow-lift"
      >
        <FlagDisc locale={locale} size={34} />
        <span className="font-display text-[0.98rem] font-extrabold tracking-tight">
          {LOCALE_META[locale].code}
        </span>
        <Glyph
          name="chevronDown"
          strokeWidth={3.4}
          className={`h-3.5 w-3.5 text-inkmute transition-transform duration-400 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="listbox"
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="glass-strong absolute right-0 z-50 mt-3 w-[16.5rem] origin-top-right rounded-[1.75rem] bg-white/98 p-2.5"
          >
            <p className="text-eyebrow px-3.5 pt-2 pb-3 text-inkmute">{label}</p>
            {LOCALES.map((l) => {
              const active = l === locale;
              return (
                <Link
                  key={l}
                  href={swapLocale(pathname, l)}
                  onClick={() => setOpen(false)}
                  role="option"
                  aria-selected={active}
                  className={`flex items-center gap-3.5 rounded-[1.25rem] px-3 py-2.5 transition-colors duration-300 ${
                    active ? "bg-coral-50" : "hover:bg-white/70"
                  }`}
                >
                  <FlagDisc locale={l} size={38} />
                  <span className="flex flex-col leading-tight">
                    <span className="font-display text-[1.02rem] font-extrabold">
                      {LOCALE_META[l].native}
                    </span>
                    <span className="text-[0.78rem] text-inkmute">{LOCALE_META[l].region}</span>
                  </span>
                  {active && (
                    <Glyph name="check" strokeWidth={4} className="ml-auto h-4 w-4 text-coral-500" />
                  )}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LanguageSwitcher;
