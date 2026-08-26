"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
  animate,
} from "motion/react";

/* ------------------------------------------------------------- counter */

export function Counter({
  to,
  duration = 2,
  className = "",
}: {
  to: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const numeric = Number(to.replace(/[^\d.]/g, ""));
  const isNumeric = !Number.isNaN(numeric) && to.trim() !== "";
  const mv = useMotionValue(0);
  const [text, setText] = useState(isNumeric ? "0" : to);

  useEffect(() => {
    if (!isNumeric) return;
    if (reduce) {
      setText(to);
      return;
    }
    if (!inView) return;
    const controls = animate(mv, numeric, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setText(String(Math.round(v))),
    });
    return () => controls.stop();
  }, [inView, isNumeric, numeric, duration, mv, reduce, to]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}

/* ------------------------------------------------------- scroll progress */

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 26, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[90] h-[3px] origin-left bg-[linear-gradient(90deg,#ff9060,#f2769c_45%,#a78bfa_75%,#46c6ab)]"
    />
  );
}

/* -------------------------------------------------------------- parallax */

export function Parallax({
  children,
  distance = 70,
  className = "",
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const smooth = useSpring(y, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? undefined : { y: smooth }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}

/* --------------------------------------------------------------- marquee */

export function Marquee({
  children,
  reverse = false,
  speed = 42,
  className = "",
  gap = "2.5rem",
}: {
  children: ReactNode;
  reverse?: boolean;
  speed?: number;
  className?: string;
  gap?: string;
}) {
  return (
    <div className={`group relative flex overflow-hidden ${className}`}>
      <div
        className="flex w-max shrink-0 items-center group-hover:[animation-play-state:paused]"
        style={{
          gap,
          paddingRight: gap,
          animation: `${reverse ? "marquee-rev" : "marquee"} ${speed}s linear infinite`,
        }}
      >
        <div className="flex shrink-0 items-center" style={{ gap, paddingRight: gap }}>
          {children}
        </div>
        <div className="flex shrink-0 items-center" style={{ gap, paddingRight: gap }} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------- magnetic wrapper */

export function Magnetic({
  children,
  strength = 0.28,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y }}
      onPointerMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
