"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";

type Props = {
  children: ReactNode;
  className?: string;
  /** max rotation in degrees */
  intensity?: number;
  /** px the content lifts toward the viewer on hover */
  lift?: number;
  /** show the moving specular sheen */
  sheen?: boolean;
};

/**
 * Pointer-tracking 3D tilt. Real perspective transforms — the card leans
 * toward the cursor and a light sheen tracks across the surface.
 */
export function TiltCard({ children, className = "", intensity = 9, lift = 26, sheen = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const spring = { stiffness: 170, damping: 20, mass: 0.5 };
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);

  const rotateY = useTransform(sx, [0, 1], [-intensity, intensity]);
  const rotateX = useTransform(sy, [0, 1], [intensity, -intensity]);
  const sheenX = useTransform(sx, [0, 1], [18, 82]);
  const sheenY = useTransform(sy, [0, 1], [12, 88]);
  const sheenBg = useTransform(
    [sheenX, sheenY],
    ([x, y]: number[]) =>
      `radial-gradient(42% 42% at ${x}% ${y}%, rgba(255,255,255,.75), rgba(255,255,255,0) 70%)`,
  );

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }

  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <div ref={ref} className="perspective-far" onPointerMove={onMove} onPointerLeave={onLeave}>
      <motion.div
        className={`preserve-3d relative ${className}`}
        style={{ rotateX, rotateY }}
        whileHover={{ z: lift }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
      >
        {children}
        {sheen && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ borderRadius: "inherit", background: sheenBg }}
          />
        )}
      </motion.div>
    </div>
  );
}

export default TiltCard;
