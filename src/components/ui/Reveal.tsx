"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "blur";

const OFFSET: Record<Direction, { x?: number; y?: number; scale?: number; filter?: string }> = {
  up: { y: 34 },
  down: { y: -34 },
  left: { x: 42 },
  right: { x: -42 },
  scale: { scale: 0.94 },
  blur: { y: 20, filter: "blur(14px)" },
};

type Props = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
  as?: "div" | "section" | "li" | "article" | "span" | "header" | "figure";
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.85,
  className = "",
  once = true,
  amount = 0.25,
  as = "div",
}: Props) {
  const reduce = useReducedMotion();
  const from = OFFSET[direction];
  const MotionTag = motion[as] as typeof motion.div;

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/** Staggered container: direct children fade up one after another. */
export function RevealGroup({
  children,
  className = "",
  stagger = 0.09,
  delay = 0,
  amount = 0.18,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
}) {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default Reveal;
