import type { ReactNode } from "react";
import { Glyph, type GlyphName } from "@/components/icons/Glyph";

/* ---------------------------------------------------------------- eyebrow */

export function Eyebrow({
  children,
  tone = "coral",
  icon,
  className = "",
}: {
  children: ReactNode;
  tone?: "coral" | "mint" | "lilac" | "rose" | "sky" | "amber";
  icon?: GlyphName;
  className?: string;
}) {
  const map = {
    coral: "text-coral-600 bg-coral-50 border-coral-200",
    mint: "text-mint-500 bg-mint-50 border-mint-200",
    lilac: "text-lilac-500 bg-lilac-50 border-lilac-200",
    rose: "text-rose-500 bg-rose-50 border-rose-200",
    sky: "text-sky-400 bg-sky-50 border-sky-200",
    amber: "text-amber-400 bg-amber-100/60 border-amber-200",
  } as const;

  return (
    <span
      className={`text-eyebrow inline-flex items-center gap-2 rounded-full border px-4 py-2 ${map[tone]} ${className}`}
    >
      {icon && <Glyph name={icon} className="h-3.5 w-3.5" strokeWidth={3.4} />}
      {children}
    </span>
  );
}

/* -------------------------------------------------------------- chip/pill */

export function Chip({
  children,
  icon,
  className = "",
}: {
  children: ReactNode;
  icon?: GlyphName;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-white bg-white/70 px-4 py-2 text-[0.9rem] font-bold text-ink shadow-soft backdrop-blur-md ${className}`}
    >
      {icon && <Glyph name={icon} className="h-4 w-4 text-coral-500" strokeWidth={3} />}
      {children}
    </span>
  );
}

/* ------------------------------------------------------------ section head */

export function SectionHeading({
  eyebrow,
  eyebrowTone = "coral",
  eyebrowIcon,
  title,
  lead,
  align = "left",
  className = "",
  titleClass = "text-h2",
  accent,
}: {
  eyebrow?: string;
  eyebrowTone?: "coral" | "mint" | "lilac" | "rose" | "sky" | "amber";
  eyebrowIcon?: GlyphName;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
  className?: string;
  titleClass?: string;
  accent?: ReactNode;
}) {
  const isCenter = align === "center";
  return (
    <div
      className={`flex flex-col gap-6 ${isCenter ? "items-center text-center" : "items-start"} ${className}`}
    >
      {eyebrow && (
        <Eyebrow tone={eyebrowTone} icon={eyebrowIcon}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2 className={`${titleClass} max-w-[20ch]`}>{title}</h2>
      {lead && (
        <p className={`text-lead text-inksoft ${isCenter ? "max-w-[62ch]" : "max-w-[56ch]"}`}>{lead}</p>
      )}
      {accent && <div className="w-full">{accent}</div>}
    </div>
  );
}

/* ------------------------------------------------------------------ blobs */

export function Blobs({
  className = "",
  variant = "warm",
}: {
  className?: string;
  variant?: "warm" | "mint" | "rose" | "lilac";
}) {
  const sets = {
    warm: ["#ffd0b8", "#ffd9e8", "#dbcffd"],
    mint: ["#c7f1e5", "#d9ecff", "#ffe6cf"],
    rose: ["#ffd7e6", "#ffe4cd", "#e4d8ff"],
    lilac: ["#e2d7ff", "#ffd8e6", "#cdefe6"],
  } as const;
  const c = sets[variant];

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="animate-drift absolute -top-24 -left-24 h-[34rem] w-[34rem] rounded-full opacity-60 blur-[90px]"
        style={{ background: `radial-gradient(circle at 30% 30%, ${c[0]}, transparent 68%)` }}
      />
      <div
        className="animate-float-slower absolute -right-32 top-1/4 h-[30rem] w-[30rem] rounded-full opacity-55 blur-[100px]"
        style={{ background: `radial-gradient(circle at 60% 40%, ${c[1]}, transparent 68%)` }}
      />
      <div
        className="animate-drift absolute bottom-[-12rem] left-1/3 h-[32rem] w-[32rem] rounded-full opacity-50 blur-[110px]"
        style={{ background: `radial-gradient(circle at 40% 60%, ${c[2]}, transparent 70%)` }}
      />
    </div>
  );
}

/* ----------------------------------------------------------- section seam */

/** Soft optical transition between two sections — no hard edges anywhere. */
export function Seam({
  position = "bottom",
  from = "transparent",
  to = "var(--color-cream)",
  height = 160,
}: {
  position?: "top" | "bottom";
  from?: string;
  to?: string;
  height?: number;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 z-[1] ${position === "top" ? "top-0" : "bottom-0"}`}
      style={{
        height,
        background: `linear-gradient(${position === "top" ? "180deg" : "0deg"}, ${to}, ${from})`,
      }}
    />
  );
}

/* ------------------------------------------------------------------ stars */

export function Stars({ count = 5, className = "" }: { count?: number; className?: string }) {
  return (
    <span className={`inline-flex gap-1 ${className}`} aria-label={`${count} / 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <Glyph
          key={i}
          name="star"
          className="h-4 w-4 text-amber-300"
          strokeWidth={2}
          style={{ fill: "currentColor" }}
        />
      ))}
    </span>
  );
}

/* ------------------------------------------------------------ number badge */

export function StepBadge({ n, tone = "coral" }: { n: string; tone?: "coral" | "mint" | "lilac" | "rose" }) {
  const map = {
    coral: "from-coral-400 to-rose-300",
    mint: "from-mint-400 to-sky-300",
    lilac: "from-lilac-400 to-rose-300",
    rose: "from-rose-400 to-coral-300",
  } as const;
  return (
    <span
      className={`font-display grid h-16 w-16 shrink-0 place-items-center rounded-full bg-gradient-to-br ${map[tone]} text-[1.35rem] font-extrabold text-white shadow-[0_14px_30px_-14px_rgba(228,86,47,.8)] ring-4 ring-white/70`}
    >
      {n}
    </span>
  );
}
