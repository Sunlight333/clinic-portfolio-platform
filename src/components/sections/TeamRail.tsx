"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Dictionary } from "@/i18n";
import { MediaFrame } from "@/components/ui/Media";
import { IconOrb, type Tone } from "@/components/ui/IconOrb";
import { Button } from "@/components/ui/Button";
import { Glyph, type GlyphName } from "@/components/icons/Glyph";
import type { ImageKey } from "@/lib/images";

export type MemberMeta = {
  image: ImageKey;
  icon: GlyphName;
  tone: Tone;
  shape: "arch" | "arch-soft";
};

type Member = Dictionary["team"]["members"][number];

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

/* Each card carries its own right margin rather than sitting in a flex gap:
   the loop travels exactly half the track, and with a gap the halfway point
   lands half a gap short of the matching card, which shows as a stutter. */
const CARD_W = "w-[78vw] max-w-[20rem] sm:w-[17.5rem] lg:w-[18.5rem]";

function DoctorCard({
  member,
  m,
  label,
  onOpen,
  tabbable,
}: {
  member: Member;
  m: MemberMeta;
  label: string;
  onOpen: (el: HTMLButtonElement) => void;
  tabbable: boolean;
}) {
  return (
    <div className={`group relative mr-6 shrink-0 ${CARD_W}`}>
      <button
        type="button"
        aria-haspopup="dialog"
        tabIndex={tabbable ? 0 : -1}
        onClick={(e) => onOpen(e.currentTarget)}
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
              {label}
              <Glyph name="arrowUpRight" className="h-3.5 w-3.5" strokeWidth={3.4} />
            </span>
          </span>
        </MediaFrame>
      </button>

      <span className="pointer-events-none absolute top-[14%] -right-3 transition-transform duration-500 group-hover:-translate-y-2.5">
        <IconOrb icon={m.icon} tone={m.tone} size="md" halo />
      </span>
    </div>
  );
}

export function TeamRail({ members, meta, labels, bookHref }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const [hovering, setHovering] = useState(false);
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => {
    setOpen(null);
    openerRef.current?.focus();
  }, []);

  const step = useCallback(
    (delta: number) =>
      setOpen((i) => (i === null ? i : (i + delta + members.length) % members.length)),
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

  const openFrom = (i: number) => (el: HTMLButtonElement) => {
    openerRef.current = el;
    setOpen(i);
  };

  /* One pass per specialist, so the speed stays even however many the
     dictionary carries. It idles the moment a pointer or the keyboard is on
     the row, which is what makes the cards clickable. */
  const running = !hovering && open === null;

  return (
    <>
      <div
        className="rail-fade relative mt-14 overflow-hidden py-2"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onFocusCapture={() => setHovering(true)}
        onBlurCapture={() => setHovering(false)}
      >
        {reduce ? (
          /* No animation wanted: a row the reader moves themselves. */
          <div className="rail-x flex snap-x snap-mandatory overflow-x-auto pb-4">
            {members.map((member, i) => (
              <DoctorCard
                key={member.name}
                member={member}
                m={meta[i]}
                label={labels.open}
                onOpen={openFrom(i)}
                tabbable
              />
            ))}
          </div>
        ) : (
          <div
            className="animate-marquee flex w-max pb-4"
            style={{
              animationDuration: `${members.length * 9}s`,
              animationPlayState: running ? "running" : "paused",
            }}
          >
            {[0, 1].map((copy) => (
              <div key={copy} className="flex" aria-hidden={copy === 1}>
                {members.map((member, i) => (
                  <DoctorCard
                    key={`${copy}-${member.name}`}
                    member={member}
                    m={meta[i]}
                    label={labels.open}
                    onOpen={openFrom(i)}
                    tabbable={copy === 0}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
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
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 26, scale: 0.96 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.97 }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="shape-squircle relative z-10 max-h-[95svh] w-full max-w-[62rem] overflow-hidden border-[5px] border-white bg-white shadow-float"
            >
              <div className="grid lg:grid-cols-[20.5rem_1fr]">
                {/* Full-height portrait beside the copy. Below lg a banner would
                    push the panel past the bottom of the screen, so there the
                    portrait shrinks into the header instead — the dialog has to
                    fit without scrolling. */}
                <div className="relative hidden lg:block lg:min-h-[32rem]">
                  <MediaFrame
                    src={activeMeta.image}
                    alt={active.name}
                    shape="squircle"
                    position="cover"
                    className="rounded-none shadow-none"
                    sizes="340px"
                    ring={false}
                    imgClassName="saturate-[.94]"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_52%,rgba(255,255,255,.9)_100%)]"
                  />
                  <span className="absolute bottom-6 left-6">
                    <IconOrb icon={activeMeta.icon} tone={activeMeta.tone} size="lg" halo />
                  </span>
                </div>

                {/* Below lg the controls sit in their own band at the top: a
                    right padding instead would squeeze the header past its
                    min-content width and the whole column would overflow. */}
                <div className="min-w-0 p-5 pt-[4.6rem] sm:p-8 sm:pt-[5rem] lg:p-11">
                  <div className="flex items-center gap-4 lg:block lg:pr-44">
                    <span className="shrink-0 lg:hidden">
                      <MediaFrame
                        src={activeMeta.image}
                        alt={active.name}
                        shape="squircle"
                        className="h-[5.5rem] w-[5.5rem] border-[3px] border-white"
                        sizes="120px"
                      />
                    </span>
                    <span className="block min-w-0">
                      <span
                        className="text-eyebrow flex flex-wrap items-center gap-x-2"
                        style={{ color: TONE_INK[activeMeta.tone] }}
                      >
                        <Glyph name={activeMeta.icon} className="h-4 w-4" strokeWidth={3.2} />
                        {active.role}
                      </span>
                      <h3
                        id="team-modal-name"
                        className="font-display mt-2 text-[clamp(1.5rem,3.4vw,2.5rem)] leading-[1.08] font-extrabold tracking-tight lg:mt-3"
                      >
                        {active.name}
                      </h3>
                    </span>
                  </div>

                  {/* The dialog never scrolls, so on a short screen the bio
                      gives up lines rather than pushing the booking button off
                      the bottom. */}
                  <p className="mt-5 text-[1.04rem] leading-relaxed text-inksoft [@media(max-height:800px)]:line-clamp-5 [@media(max-height:700px)]:line-clamp-3 lg:mt-6 lg:text-[1.1rem]">
                    {active.bio}
                  </p>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2 sm:gap-7 lg:mt-8">
                    <div>
                      <p className="text-eyebrow text-inksoft/70">{labels.focus}</p>
                      <p className="mt-2.5 flex items-start gap-2.5 text-[1.02rem] leading-snug font-bold">
                        <Glyph
                          name="check"
                          strokeWidth={4}
                          className="mt-1 h-4 w-4 shrink-0 text-mint-400"
                        />
                        {active.focus}
                      </p>
                      <p className="text-eyebrow mt-5 text-inksoft/70 lg:mt-7">
                        {labels.languages}
                      </p>
                      <p className="mt-2.5 flex items-center gap-2.5 text-[1.02rem] font-bold">
                        <Glyph
                          name="translate"
                          strokeWidth={3.2}
                          className="h-4 w-4 shrink-0 text-sky-400"
                        />
                        {active.languages}
                      </p>
                    </div>

                    <div>
                      <p className="text-eyebrow text-inksoft/70">{labels.credentials}</p>
                      <ul className="mt-2.5 flex flex-col gap-2">
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

                  <div className="mt-7 lg:mt-9">
                    <Button href={bookHref} size="lg" icon="calendar">
                      {labels.book}
                    </Button>
                  </div>
                </div>
              </div>

              {/* anchored to the panel, not the text column, so the controls
                  never land on the role line */}
              <div className="absolute top-4 right-4 z-30 flex items-center gap-2 lg:top-7 lg:right-7">
                <button
                  type="button"
                  aria-label="←"
                  onClick={() => step(-1)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white bg-white/90 text-ink shadow-soft backdrop-blur-md transition-colors duration-300 hover:border-coral-300 hover:text-coral-600"
                >
                  <Glyph name="arrowRight" className="h-4 w-4 rotate-180" strokeWidth={3.2} />
                </button>
                <button
                  type="button"
                  aria-label="→"
                  onClick={() => step(1)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white bg-white/90 text-ink shadow-soft backdrop-blur-md transition-colors duration-300 hover:border-coral-300 hover:text-coral-600"
                >
                  <Glyph name="arrowRight" className="h-4 w-4" strokeWidth={3.2} />
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
