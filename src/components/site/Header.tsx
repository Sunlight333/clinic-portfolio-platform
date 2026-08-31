"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Dictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Glyph, type GlyphName } from "@/components/icons/Glyph";
import { IconOrb, type Tone } from "@/components/ui/IconOrb";
import { MediaFrame } from "@/components/ui/Media";
import { Button } from "@/components/ui/Button";
import type { ImageKey } from "@/lib/images";

type Props = { locale: Locale; dict: Dictionary };

type ServiceEntry = {
  key: "dental" | "aesthetics" | "medical";
  href: string;
  icon: GlyphName;
  tone: Tone;
  image: ImageKey;
};

const SERVICES: ServiceEntry[] = [
  { key: "dental", href: "/dental", icon: "tooth", tone: "sky", image: "dental-unit" },
  { key: "aesthetics", href: "/aesthetics", icon: "sparkle", tone: "rose", image: "aesthetics-facial" },
  { key: "medical", href: "/medical", icon: "stethoscope", tone: "mint", image: "care-consult" },
];

export function Header({ locale, dict }: Props) {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [sheet, setSheet] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMega(false);
    setSheet(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = sheet ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sheet]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMega(false);
      setSheet(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const p = (path: string) => localePath(locale, path);
  const isActive = (path: string) => {
    const target = p(path);
    return path === "/" ? pathname === target : pathname.startsWith(target);
  };

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMega(true);
  };
  const closeMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMega(false), 160);
  };

  const navLink =
    "font-display relative rounded-full px-5 py-3 text-[1.12rem] font-extrabold tracking-[-0.025em] transition-colors duration-300";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[80]">
      {/* ---------------------------------------------------- utility strip */}
      <div
        className={`pointer-events-auto hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] lg:block ${
          scrolled ? "h-0 opacity-0" : "h-11 opacity-100"
        }`}
      >
        <div className="container-x flex h-11 items-center justify-between text-[0.94rem] font-semibold text-inksoft">
          <span className="flex items-center gap-2.5">
            <Glyph name="clock" className="h-4 w-4 text-coral-500" strokeWidth={3} />
            {dict.nav.quickHours}
          </span>
          <span className="flex items-center gap-6">
            <a
              href={`tel:${dict.footer.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2.5 transition-colors hover:text-coral-600"
            >
              <Glyph name="phone" className="h-4 w-4 text-coral-500" strokeWidth={3} />
              {dict.footer.phone}
            </a>
            <span className="flex items-center gap-2.5">
              <Glyph name="pin" className="h-4 w-4 text-coral-500" strokeWidth={3} />
              {dict.footer.address}
            </span>
          </span>
        </div>
      </div>

      {/* ------------------------------------------------------- main card */}
      <div className="container-x pointer-events-auto">
        <div
          className={`glass-strong flex items-center justify-between rounded-[2.1rem] transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
            scrolled ? "mt-2 h-[78px] px-4 lg:h-[84px] lg:px-6" : "mt-2 h-[84px] px-4 lg:h-[100px] lg:px-7"
          }`}
        >
          <Link href={p("/")} className="group/logo flex items-center" aria-label="Aurélia Clinic">
            <Logo size={scrolled ? 44 : 50} />
          </Link>

          {/* desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            <Link
              href={p("/")}
              className={`${navLink} ${isActive("/") && pathname === p("/") ? "bg-white text-coral-600 shadow-soft" : "hover:bg-white/70"}`}
            >
              {dict.nav.home}
            </Link>

            <div className="relative" onMouseEnter={openMega} onMouseLeave={closeMega}>
              <button
                type="button"
                onClick={() => setMega((v) => !v)}
                aria-expanded={mega}
                className={`${navLink} inline-flex items-center gap-2 ${
                  mega ||
                  isActive("/dental") ||
                  isActive("/aesthetics") ||
                  isActive("/medical")
                    ? "bg-white text-coral-600 shadow-soft"
                    : "hover:bg-white/70"
                }`}
              >
                {dict.nav.services}
                <Glyph
                  name="chevronDown"
                  strokeWidth={3.6}
                  className={`h-3.5 w-3.5 transition-transform duration-400 ${mega ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            <Link
              href={p("/about")}
              className={`${navLink} ${isActive("/about") ? "bg-white text-coral-600 shadow-soft" : "hover:bg-white/70"}`}
            >
              {dict.nav.about}
            </Link>
            <Link
              href={p("/contact")}
              className={`${navLink} ${isActive("/contact") ? "bg-white text-coral-600 shadow-soft" : "hover:bg-white/70"}`}
            >
              {dict.nav.contact}
            </Link>
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <LanguageSwitcher
              locale={locale}
              label={dict.nav.language}
              hint={dict.nav.languageHint}
              variant="compact"
            />
            {/* wrapped rather than given a `hidden` class: Button already sets
                `inline-flex`, and display utilities win by stylesheet order */}
            <span className="hidden sm:inline-flex">
              <Button href={p("/contact")} size="md" icon="calendar">
                {dict.nav.book}
              </Button>
            </span>

            <button
              type="button"
              onClick={() => setSheet(true)}
              aria-label={dict.nav.openMenu}
              className="grid h-12 w-12 place-items-center rounded-full border border-white bg-white/80 text-ink shadow-soft transition-transform duration-300 hover:scale-105 lg:hidden"
            >
              <Glyph name="menu" className="h-5 w-5" strokeWidth={3.4} />
            </button>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------- mega menu */}
      <AnimatePresence>
        {mega && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={openMega}
            onMouseLeave={closeMega}
            className="container-x pointer-events-auto absolute inset-x-0 hidden pt-3 lg:block"
          >
            <div className="glass-strong overflow-hidden rounded-[2.4rem] bg-white/97 p-4">
              <div className="grid grid-cols-[1.75fr_1fr] gap-4">
                {/* service cards */}
                <div className="grid grid-cols-3 gap-4">
                  {SERVICES.map((s) => {
                    const card = dict.navCards[s.key];
                    return (
                      <Link
                        key={s.key}
                        href={p(s.href)}
                        className="group relative flex flex-col overflow-hidden rounded-[1.9rem] border border-white bg-white/70 p-4 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1.5 hover:bg-white hover:shadow-lift"
                      >
                        <div className="relative h-28 overflow-hidden rounded-[1.4rem]">
                          <MediaFrame
                            src={s.image}
                            alt={card.title}
                            shape="squircle"
                            position="cover"
                            className="rounded-[1.4rem] shadow-none"
                            sizes="280px"
                            ring={false}
                          />
                        </div>
                        <div className="-mt-9 mb-2 pl-1">
                          <IconOrb icon={s.icon} tone={s.tone} size="md" />
                        </div>
                        <h3 className="font-display text-[1.16rem] font-extrabold tracking-tight">
                          {card.title}
                        </h3>
                        <p className="mt-1.5 text-[0.98rem] leading-snug text-inksoft">{card.desc}</p>
                        <span className="mt-3 inline-flex items-center gap-1.5 text-[0.94rem] font-extrabold text-coral-600">
                          {dict.services.cta}
                          <Glyph
                            name="arrowRight"
                            strokeWidth={3.4}
                            className="h-3.5 w-3.5 transition-transform duration-400 group-hover:translate-x-1"
                          />
                        </span>
                      </Link>
                    );
                  })}
                </div>

                {/* side rail */}
                <div className="flex flex-col gap-4">
                  {(["about", "contact"] as const).map((k) => (
                    <Link
                      key={k}
                      href={p(k === "about" ? "/about" : "/contact")}
                      className="group flex items-center gap-3.5 rounded-[1.6rem] border border-white bg-white/70 p-3.5 transition-all duration-400 hover:-translate-y-1 hover:bg-white hover:shadow-lift"
                    >
                      <IconOrb icon={k === "about" ? "users" : "pin"} tone={k === "about" ? "lilac" : "amber"} size="md" />
                      <span className="flex flex-col">
                        <span className="font-display text-[1.1rem] font-extrabold tracking-tight">
                          {dict.navCards[k].title}
                        </span>
                        <span className="text-[0.92rem] leading-snug text-inksoft">
                          {dict.navCards[k].desc}
                        </span>
                      </span>
                    </Link>
                  ))}

                  <div className="shape-ticket relative overflow-hidden bg-[linear-gradient(135deg,#ff9d75,#f2769c_55%,#a78bfa)] p-5 text-white">
                    <p className="text-eyebrow opacity-90">{dict.nav.quickHours}</p>
                    <p className="font-display mt-1.5 text-[1.3rem] font-extrabold tracking-tight">
                      {dict.footer.phone}
                    </p>
                    <Button
                      href={p("/contact")}
                      variant="invert"
                      size="md"
                      className="mt-3.5 w-full"
                      icon="arrowUpRight"
                    >
                      {dict.nav.book}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ----------------------------------------------------- mobile sheet */}
      <AnimatePresence>
        {sheet && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto fixed inset-0 z-[95] overflow-y-auto bg-[linear-gradient(160deg,#fff6ef,#ffeee6_45%,#f6f0ff)] lg:hidden"
          >
            <div className="container-x flex min-h-full flex-col py-5">
              <div className="flex items-center justify-between">
                <Logo size={46} />
                <button
                  type="button"
                  onClick={() => setSheet(false)}
                  aria-label={dict.nav.close}
                  className="grid h-12 w-12 place-items-center rounded-full border border-white bg-white/85 shadow-soft"
                >
                  <Glyph name="close" className="h-5 w-5" strokeWidth={3.4} />
                </button>
              </div>

              <motion.nav
                className="mt-7 flex flex-col gap-3.5"
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } } }}
              >
                {[
                  { href: "/", label: dict.nav.home, icon: "sun" as GlyphName, tone: "amber" as Tone, desc: dict.brand.claim },
                  ...SERVICES.map((s) => ({
                    href: s.href,
                    label: dict.navCards[s.key].title,
                    icon: s.icon,
                    tone: s.tone,
                    desc: dict.navCards[s.key].desc,
                  })),
                  { href: "/about", label: dict.navCards.about.title, icon: "users" as GlyphName, tone: "lilac" as Tone, desc: dict.navCards.about.desc },
                  { href: "/contact", label: dict.navCards.contact.title, icon: "pin" as GlyphName, tone: "coral" as Tone, desc: dict.navCards.contact.desc },
                ].map((item) => (
                  <motion.div
                    key={item.href}
                    variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={p(item.href)}
                      className="flex items-center gap-4 rounded-[1.8rem] border border-white bg-white/75 p-4 shadow-soft transition-transform duration-300 active:scale-[.98]"
                    >
                      <IconOrb icon={item.icon} tone={item.tone} size="md" />
                      <span className="flex min-w-0 flex-col">
                        <span className="font-display text-[1.25rem] font-extrabold tracking-tight">
                          {item.label}
                        </span>
                        <span className="truncate text-[0.94rem] text-inksoft">{item.desc}</span>
                      </span>
                      <Glyph name="arrowRight" strokeWidth={3.2} className="ml-auto h-5 w-5 text-coral-500" />
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              <div className="mt-7 flex flex-col gap-5 rounded-[1.8rem] border border-white bg-white/70 p-5 shadow-soft">
                <LanguageSwitcher
                  locale={locale}
                  label={dict.nav.language}
                  hint={dict.nav.languageHint}
                  variant="stack"
                />
                <Button href={p("/contact")} size="lg" className="w-full" icon="calendar">
                  {dict.nav.book}
                </Button>
                <a
                  href={`tel:${dict.footer.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2.5 text-[1.02rem] font-bold text-inksoft"
                >
                  <Glyph name="phone" className="h-4 w-4 text-coral-500" strokeWidth={3} />
                  {dict.footer.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
