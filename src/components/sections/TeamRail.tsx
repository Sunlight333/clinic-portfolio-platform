"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Dictionary } from "@/i18n";
import { MediaFrame } from "@/components/ui/Media";
import { IconOrb, type Tone } from "@/components/ui/IconOrb";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Glyph, type GlyphName } from "@/components/icons/Glyph";
import type { ImageKey } from "@/lib/images";

export type MemberMeta = {
  image: ImageKey;
  icon: GlyphName;
  tone: Tone;
  shape: "arch" | "arch-soft";
};

type Props = {
  members: Dictionary["team"]["members"];
  meta: MemberMeta[];
  labels: Dictionary["team"]["modal"] & { open: string };
  bookHref: string;
};

/* The ramp tops out at 400 for sky and amber, which is too light for small
   uppercase type — these are the darker inks the icon orbs already use. */
const TONE_INK: Record<Tone, string> = {
  coral: "#d1481f",
  rose: "#c93f6d",
  lilac: "#6e4fd6",
  mint: "#1e8a76",
  sky: "#2a72c4",
  amber: "#b9741a",
};

export function TeamRail({ members, meta, labels, bookHref }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  /* A control that cannot do anything should not be on screen. */
  const readEdges = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }, []);

  useEffect(readEdges, [readEdges]);

  /* Nudge the row by exactly one card so the snap points stay honest. */
  const nudge = (dir: number) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    el.scrollBy({
      left: dir * ((card?.offsetWidth ?? 300) + 24),
      behavior: "smooth",
    });
  };

  const close = useCallback(() => {
    setOpen(null);
    openerRef.current?.focus();
  }, []);

  const step = useCallback(
    (delta: number) =>
      setOpen((i) =>
        i === null ? i : (i + delta + members.length) % members.length,
      ),
    [members.length],
  );

  /* Escape closes, the arrows walk the row, and the page behind stops
     scrolling while the dialog owns the screen. */
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const active = open === null ? null : members[open];
  const activeMeta = open === null ? null : meta[open];

  return (
    <>
      {/* One line, read left to right: the row bleeds past the container and
          scrolls rather than wrapping, and each card reveals a beat after the
          one before it. */}
      <div className="relative mt-14">
        <div
          ref={railRef}
          onScroll={readEdges}
          className="rail-x flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6"
        >
          {members.map((member, i) => {
            const m = meta[i];
            return (
              <Reveal
                key={member.name}
                delay={Math.min(i, 5) * 0.08}
                direction="right"
                className="w-[78vw] max-w-[20rem] shrink-0 snap-start sm:w-[17.5rem] lg:w-[18.5rem]"
              >
                <div className="group relative">
                  <button
                    type="button"
                    aria-haspopup="dialog"
                    onClick={(e) => {
                      openerRef.current = e.currentTarget;
                      setOpen(i);
                    }}
                    className="block w-full cursor-pointer rounded-[2rem] text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-coral-300/70"
                  >
                    <MediaFrame
                      src={m.image}
                      alt={member.name}
                      shape={m.shape}
                      className="aspect-[3/4.05] w-full border-[5px] border-white transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-2.5"
                      sizes="(max-width:640px) 78vw, 320px"
                      imgClassName="saturate-[.92] transition-transform duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.07]"
                    >
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-[64%] bg-[linear-gradient(180deg,transparent_0%,rgba(52,34,44,.16)_26%,rgba(52,34,44,.74)_72%,rgba(52,34,44,.93)_100%)]"
                      />
                      <span className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                        <span className="font-display block text-[1.32rem] leading-tight font-extrabold tracking-tight text-white">
                          {member.name}
                        </span>
                        <span className="mt-1.5 block text-[1.02rem] leading-snug font-extrabold text-amber-200">
                          {member.role}
                        </span>
                        <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/16 px-4 py-2 text-[0.9rem] font-extrabold text-white backdrop-blur-md transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-ink">
                          {labels.open}
                          <Glyph
                            name="arrowUpRight"
                            className="h-3.5 w-3.5"
                            strokeWidth={3.4}
                          />
                        </span>
                      </span>
                    </MediaFrame>
                  </button>

                  <span className="pointer-events-none absolute -right-3 top-[14%] transition-transform duration-500 group-hover:-translate-y-2.5">
                    <IconOrb icon={m.icon} tone={m.tone} size="md" halo />
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* the row runs on past the edge of the screen, so give it controls */}
        <button
          type="button"
          aria-label="←"
          onClick={() => nudge(-1)}
          className={`absolute top-[42%] left-5 z-20 hidden h-14 w-14 place-items-center rounded-full border border-white bg-white/92 text-ink shadow-lift backdrop-blur-md transition-all duration-300 hover:scale-110 lg:grid ${atStart ? "pointer-events-none opacity-0" : "opacity-100"}`}
        >
          <Glyph
            name="arrowRight"
            strokeWidth={3.2}
            className="h-5 w-5 rotate-180"
          />
        </button>
        <button
          type="button"
          aria-label="→"
          onClick={() => nudge(1)}
          className={`absolute top-[42%] right-5 z-20 hidden h-14 w-14 place-items-center rounded-full border border-white bg-white/92 text-ink shadow-lift backdrop-blur-md transition-all duration-300 hover:scale-110 lg:grid ${atEnd ? "pointer-events-none opacity-0" : "opacity-100"}`}
        >
          <Glyph name="arrowRight" strokeWidth={3.2} className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {active && activeMeta && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
          >
            <button
              type="button"
              aria-label={labels.close}
              onClick={close}
              className="absolute inset-0 cursor-default bg-[rgba(58,43,63,.46)] backdrop-blur-md"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="team-modal-name"
              initial={
                reduce ? { opacity: 0 } : { opacity: 0, y: 26, scale: 0.96 }
              }
              animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              exit={
                reduce ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.97 }
              }
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="shape-squircle relative z-10 max-h-[92svh] w-full max-w-[62rem] overflow-y-auto border-[5px] border-white bg-white shadow-float"
            >
              <div className="grid lg:grid-cols-[20.5rem_1fr]">
                {/* portrait: a banner on phones, a full-height column on desktop */}
                <div className="relative h-[15rem] sm:h-[19rem] lg:h-auto lg:min-h-[34rem]">
                  <MediaFrame
                    src={activeMeta.image}
                    alt={active.name}
                    shape="squircle"
                    position="cover"
                    className="rounded-none shadow-none"
                    sizes="(max-width:1024px) 100vw, 340px"
                    ring={false}
                    imgClassName="saturate-[.94]"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(58,43,63,.34)_0%,transparent_38%)] lg:bg-[linear-gradient(110deg,transparent_52%,rgba(255,255,255,.9)_100%)]"
                  />
                  <span className="absolute bottom-6 left-6 hidden lg:block">
                    <IconOrb
                      icon={activeMeta.icon}
                      tone={activeMeta.tone}
                      size="lg"
                      halo
                    />
                  </span>
                </div>

                <div className="relative p-6 sm:p-9 lg:p-11">
                  <div className="lg:pr-44">
                    <p
                      className="text-eyebrow flex items-center gap-2"
                      style={{ color: TONE_INK[activeMeta.tone] }}
                    >
                      <Glyph
                        name={activeMeta.icon}
                        className="h-4 w-4"
                        strokeWidth={3.2}
                      />
                      {active.role}
                    </p>
                    <h3
                      id="team-modal-name"
                      className="font-display mt-3 text-[clamp(1.8rem,3.4vw,2.5rem)] leading-[1.06] font-extrabold tracking-tight"
                    >
                      {active.name}
                    </h3>
                  </div>

                  <p className="mt-6 text-[1.1rem] leading-relaxed text-inksoft">
                    {active.bio}
                  </p>

                  <div className="mt-8 grid gap-7 sm:grid-cols-2">
                    <div>
                      <p className="text-eyebrow text-inksoft/70">
                        {labels.focus}
                      </p>
                      <p className="mt-3 flex items-start gap-2.5 text-[1.02rem] leading-snug font-bold">
                        <Glyph
                          name="check"
                          strokeWidth={4}
                          className="mt-1 h-4 w-4 shrink-0 text-mint-400"
                        />
                        {active.focus}
                      </p>
                      <p className="text-eyebrow mt-7 text-inksoft/70">
                        {labels.languages}
                      </p>
                      <p className="mt-3 flex items-center gap-2.5 text-[1.02rem] font-bold">
                        <Glyph
                          name="translate"
                          strokeWidth={3.2}
                          className="h-4 w-4 shrink-0 text-sky-400"
                        />
                        {active.languages}
                      </p>
                    </div>

                    <div>
                      <p className="text-eyebrow text-inksoft/70">
                        {labels.credentials}
                      </p>
                      <ul className="mt-3 flex flex-col gap-2.5">
                        {active.credentials.map((c) => (
                          <li
                            key={c}
                            className="flex items-start gap-2.5 text-[1.02rem] leading-snug text-inksoft"
                          >
                            <Glyph
                              name="star"
                              strokeWidth={3}
                              className="mt-1 h-4 w-4 shrink-0 text-amber-400"
                            />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-9">
                    <Button href={bookHref} size="lg" icon="calendar">
                      {labels.book}
                    </Button>
                  </div>
                </div>
              </div>

              {/* anchored to the panel, not the text column: on a phone the
                    controls float over the portrait banner instead of landing
                    on top of the role line */}
              <div className="absolute top-4 right-4 z-30 flex items-center gap-2 lg:top-7 lg:right-7">
                <button
                  type="button"
                  aria-label="←"
                  onClick={() => step(-1)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white bg-white/90 text-ink shadow-soft backdrop-blur-md transition-colors duration-300 hover:border-coral-300 hover:text-coral-600"
                >
                  <Glyph
                    name="arrowRight"
                    className="h-4 w-4 rotate-180"
                    strokeWidth={3.2}
                  />
                </button>
                <button
                  type="button"
                  aria-label="→"
                  onClick={() => step(1)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white bg-white/90 text-ink shadow-soft backdrop-blur-md transition-colors duration-300 hover:border-coral-300 hover:text-coral-600"
                >
                  <Glyph
                    name="arrowRight"
                    className="h-4 w-4"
                    strokeWidth={3.2}
                  />
                </button>
                <button
                  ref={closeRef}
                  type="button"
                  aria-label={labels.close}
                  onClick={close}
                  className="grid h-11 w-11 place-items-center rounded-full bg-ink text-white transition-transform duration-300 hover:scale-105"
                >
                  <Glyph name="close" className="h-4 w-4" strokeWidth={3.2} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default TeamRail;
