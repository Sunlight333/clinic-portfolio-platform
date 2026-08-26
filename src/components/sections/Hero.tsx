"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { Dictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import { Button } from "@/components/ui/Button";
import { IconOrb } from "@/components/ui/IconOrb";
import { Glyph } from "@/components/icons/Glyph";
import { Stars } from "@/components/ui/Bits";
import { Counter } from "@/components/ui/Motion";
import { IMG } from "@/lib/images";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const p = (path: string) => localePath(locale, path);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yMedia = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const yCopy = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reduce) {
      v.pause();
      setPlaying(false);
    }
  }, [reduce]);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section
      ref={ref}
      className="relative flex min-h-[700px] flex-col justify-center overflow-hidden pt-[126px] pb-12 lg:h-[100svh] lg:max-h-[1060px] lg:pt-[clamp(158px,21svh,190px)] lg:pb-12"
    >
      {/* ---------------------------------------------------------- backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(155deg,#fff8f2_0%,#fff1e8_38%,#fdeaf3_68%,#f2eeff_100%)]" />
        <div
          className="animate-drift absolute -top-32 -left-24 h-[38rem] w-[38rem] rounded-full opacity-70 blur-[110px]"
          style={{ background: "radial-gradient(circle at 35% 35%,#ffc9ab,transparent 68%)" }}
        />
        <div
          className="animate-float-slower absolute top-[8%] right-[-10rem] h-[34rem] w-[34rem] rounded-full opacity-60 blur-[120px]"
          style={{ background: "radial-gradient(circle at 50% 50%,#e3d5ff,transparent 66%)" }}
        />
        <div
          className="animate-drift absolute -bottom-40 left-1/3 h-[30rem] w-[30rem] rounded-full opacity-55 blur-[120px]"
          style={{ background: "radial-gradient(circle at 50% 50%,#c9f0e4,transparent 68%)" }}
        />
        {/* fine grid, adds structure without weight */}
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(58,43,63,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(58,43,63,.045) 1px, transparent 1px)",
            backgroundSize: "78px 78px",
            maskImage: "radial-gradient(90% 70% at 50% 40%, #000, transparent 78%)",
            WebkitMaskImage: "radial-gradient(90% 70% at 50% 40%, #000, transparent 78%)",
          }}
        />
      </div>

      <div className="container-x relative grid w-full items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12">
        {/* ------------------------------------------------------------ copy */}
        <motion.div style={reduce ? undefined : { y: yCopy, opacity: fade }} className="flex flex-col">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white bg-white/75 py-2 pr-5 pl-2 shadow-soft backdrop-blur-md"
          >
            <span className="relative grid h-7 w-7 place-items-center rounded-full bg-mint-100">
              <span className="absolute inset-0 animate-pulse-ring rounded-full ring-2 ring-mint-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-mint-400" />
            </span>
            <span className="text-[0.86rem] font-extrabold tracking-tight text-ink">
              {dict.hero.badge}
            </span>
          </motion.span>

          <h1 className="text-display mt-5">
            {[dict.hero.titleTop, dict.hero.titleAccent, dict.hero.titleBottom].map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.95, delay: 0.08 + i * 0.11, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                {i === 1 ? (
                  <span className="text-gradient-warm font-serif italic">{line}</span>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="text-lead mt-5 max-w-[54ch] text-inksoft [@media(max-height:820px)]:mt-4 [@media(max-height:820px)]:text-[1rem]"
          >
            {dict.hero.lead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.54, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 flex flex-wrap items-center gap-3.5 [@media(max-height:820px)]:mt-5"
          >
            <Button href={p("/contact")} size="xl" icon="calendar" className="[@media(max-height:820px)]:h-14">
              {dict.hero.ctaPrimary}
            </Button>
            <Button href="#tour" variant="outline" size="xl" icon="play" className="[@media(max-height:820px)]:h-14">
              {dict.hero.ctaSecondary}
            </Button>
          </motion.div>

          {/* stat row */}
          <motion.dl
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.66, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 grid max-w-xl grid-cols-3 gap-3 [@media(max-height:820px)]:mt-5"
          >
            {dict.hero.stats.map((s, i) => (
              <div
                key={s.label}
                className={`rounded-[1.5rem] border border-white bg-white/60 px-4 py-4 backdrop-blur-md [@media(max-height:820px)]:py-2.5 ${
                  i === 1 ? "shadow-soft" : ""
                }`}
              >
                <dt className="font-display flex items-baseline gap-1 text-[clamp(1.7rem,2.6vw,2.35rem)] font-extrabold tracking-tight [@media(max-height:820px)]:text-[1.5rem]">
                  <Counter to={s.value} />
                  <span className="text-gradient-warm text-[0.72em]">{s.suffix}</span>
                </dt>
                <dd className="mt-1 text-[0.82rem] leading-tight font-semibold text-inkmute">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* ----------------------------------------------------------- media */}
        <motion.div
          style={reduce ? undefined : { y: yMedia }}
          className="perspective-far relative mx-auto w-full max-w-[36rem] lg:max-w-none"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotateY: -8 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.15, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="preserve-3d relative"
          >
            {/* orbiting ring */}
            <span
              aria-hidden
              className="animate-spin-slower absolute -inset-8 rounded-full opacity-50 lg:-inset-12"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, rgba(255,138,99,.5) 70deg, transparent 160deg, rgba(167,139,250,.45) 250deg, transparent 340deg)",
                maskImage: "radial-gradient(circle, transparent 62%, #000 64%, #000 68%, transparent 70%)",
                WebkitMaskImage:
                  "radial-gradient(circle, transparent 62%, #000 64%, #000 68%, transparent 70%)",
              }}
            />

            {/* main video card */}
            <div className="shape-arch-soft relative overflow-hidden border-[6px] border-white shadow-float">
              <video
                ref={videoRef}
                className="h-[42svh] w-full object-cover sm:h-[46svh] lg:h-[clamp(26rem,54svh,34rem)]"
                poster="/video/hero-poster.jpg"
                src="/video/hero-loop.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={dict.hero.videoTitle}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_45%,rgba(58,43,63,.42))]"
              />

              {/* video chrome */}
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
                <div className="glass flex items-center gap-3 rounded-full py-2 pr-5 pl-2">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[linear-gradient(130deg,#ff9060,#f2769c)]">
                    <Glyph name="sparkle" className="h-4 w-4 text-white" strokeWidth={3} />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="font-display text-[0.94rem] font-extrabold">
                      {dict.hero.videoTitle}
                    </span>
                    <span className="text-[0.74rem] font-semibold text-inkmute">
                      {dict.hero.videoSub}
                    </span>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={toggle}
                  aria-label={playing ? dict.common.pauseTour : dict.common.playTour}
                  className="glass grid h-12 w-12 shrink-0 place-items-center rounded-full transition-transform duration-300 hover:scale-105"
                >
                  <Glyph name={playing ? "pause" : "play"} className="h-4 w-4" strokeWidth={3.4} />
                </button>
              </div>
            </div>

            {/* floating: rating */}
            <motion.div
              initial={{ opacity: 0, x: -26, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="glass-strong animate-float-slow absolute -left-3 top-[16%] flex items-center gap-3 rounded-[1.4rem] px-4 py-3 sm:-left-8"
            >
              <span className="font-display text-[1.7rem] leading-none font-extrabold text-ink">4.9</span>
              <span className="flex flex-col">
                <Stars />
                <span className="mt-1 text-[0.72rem] font-bold text-inkmute">
                  {dict.hero.floatingRating}
                </span>
              </span>
            </motion.div>

            {/* floating: next slot */}
            <motion.div
              initial={{ opacity: 0, x: 26, y: 14 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="glass-strong animate-float-slower absolute -right-2 bottom-[14%] flex items-center gap-3 rounded-[1.4rem] px-4 py-3 sm:-right-7"
            >
              <IconOrb icon="calendar" tone="mint" size="sm" />
              <span className="flex flex-col leading-tight">
                <span className="text-[0.72rem] font-bold tracking-wide text-inkmute uppercase">
                  {dict.hero.floatingSlot}
                </span>
                <span className="font-display text-[1.02rem] font-extrabold">
                  {dict.hero.floatingSlotValue}
                </span>
              </span>
            </motion.div>

            {/* floating specialty orbs — icons kept large and prominent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.02, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute -top-6 right-[12%] hidden lg:block"
            >
              <IconOrb icon="tooth" tone="sky" size="lg" halo />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.14, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute top-[54%] -left-9 hidden lg:block"
            >
              <IconOrb icon="heartPulse" tone="rose" size="lg" halo />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* --------------------------------------------------------- scroll cue */}
      <motion.a
        href="#services"
        style={reduce ? undefined : { opacity: fade }}
        className="absolute right-[6%] bottom-6 hidden flex-col items-center gap-2 text-[0.76rem] font-extrabold tracking-[0.2em] text-inkmute uppercase lg:flex"
      >
        {dict.hero.scroll}
        <span className="relative grid h-11 w-7 place-items-start rounded-full border-2 border-ink/20 p-1.5">
          <motion.span
            className="h-2 w-2 rounded-full bg-coral-400"
            animate={reduce ? undefined : { y: [0, 12, 0] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>

      {/* preloaded first frame keeps LCP honest */}
      <link rel="preload" as="image" href={IMG["dental-suite"].src} />
    </section>
  );
}

export default Hero;
