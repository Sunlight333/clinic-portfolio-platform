import type { SVGProps } from "react";

/**
 * Aurélia glyph set — one 48×48 grid, 2.6 stroke, round joins.
 * Duotone accents use `currentColor` at low alpha so a single colour
 * prop tints the whole icon inside its orb.
 */
export type GlyphName =
  | "tooth"
  | "aligner"
  | "implant"
  | "smileDesign"
  | "child"
  | "skin"
  | "syringe"
  | "laser"
  | "droplet"
  | "leaf"
  | "stethoscope"
  | "heartPulse"
  | "flask"
  | "vaccine"
  | "scan"
  | "shield"
  | "calendar"
  | "clock"
  | "message"
  | "phone"
  | "mail"
  | "pin"
  | "globe"
  | "star"
  | "quote"
  | "arrowRight"
  | "arrowUpRight"
  | "chevronDown"
  | "plus"
  | "minus"
  | "check"
  | "play"
  | "pause"
  | "sparkle"
  | "sun"
  | "users"
  | "user"
  | "accessibility"
  | "gauge"
  | "layers"
  | "waves"
  | "code"
  | "translate"
  | "lock"
  | "search"
  | "parking"
  | "wheelchair"
  | "menu"
  | "close"
  | "cube";

type Props = SVGProps<SVGSVGElement> & { name: GlyphName; strokeWidth?: number };

const P: Record<GlyphName, React.ReactNode> = {
  tooth: (
    <>
      <path d="M16.5 7.5c-4 0-6.5 3-6.5 7.4 0 4 1.2 6.2 2.2 10.2.7 2.8.6 5.3 1.3 9.1.5 2.7 1.3 5.3 3 5.3 2.1 0 2.4-2.7 3-6.2.5-2.9.7-5.6 2.5-5.6s2 2.7 2.5 5.6c.6 3.5.9 6.2 3 6.2 1.7 0 2.5-2.6 3-5.3.7-3.8.6-6.3 1.3-9.1 1-4 2.2-6.2 2.2-10.2 0-4.4-2.5-7.4-6.5-7.4-2.6 0-3.9 1.3-5.5 1.3s-2.9-1.3-5.5-1.3Z" />
      <path d="M17.5 14.2c1.6-1 3.3-1.2 4.6-1.2" opacity={0.55} />
    </>
  ),
  aligner: (
    <>
      <path d="M9 17c0-4.4 6-7 15-7s15 2.6 15 7c0 3.4-2.2 4.6-3.6 8.2-1 2.6-1.1 5.6-2.6 8.2-1.4 2.5-4.6 4.1-8.8 4.1s-7.4-1.6-8.8-4.1c-1.5-2.6-1.6-5.6-2.6-8.2C11.2 21.6 9 20.4 9 17Z" />
      <path d="M14.5 18.5h19M18 25h12" opacity={0.5} />
    </>
  ),
  implant: (
    <>
      {/* crown */}
      <path d="M14.5 16.5v-3.2c0-3 2.5-5.3 5.6-5.3h7.8c3.1 0 5.6 2.3 5.6 5.3v3.2Z" />
      {/* fixture */}
      <path d="M17.2 16.5 20 35.5c.3 2.4 1.8 4 4 4s3.7-1.6 4-4l2.8-19" />
      {/* threads */}
      <path d="M18.2 22.5h11.6M19 28h10M20 33.5h8" opacity={0.6} />
    </>
  ),
  smileDesign: (
    <>
      <path d="M6 24c0-9.9 8.1-18 18-18s18 8.1 18 18-8.1 18-18 18" />
      <path d="M6 24c0 5 2 9.5 5.3 12.7" opacity={0.45} />
      <path d="M15 26.5c1.8 3.4 5 5.5 9 5.5s7.2-2.1 9-5.5c-2.6-1.3-5.6-2-9-2s-6.4.7-9 2Z" />
      <path d="M17 19.5h.02M31 19.5h.02" strokeWidth={4} />
    </>
  ),
  child: (
    <>
      <circle cx="24" cy="15" r="7" />
      <path d="M11 40c0-6.6 5.8-11.5 13-11.5S37 33.4 37 40" />
      <path d="M20.5 14.5h.02M27.5 14.5h.02" strokeWidth={3.4} />
      <path d="M21 18.5c1.6 1.4 4.4 1.4 6 0" opacity={0.6} />
    </>
  ),
  skin: (
    <>
      <path d="M24 5c8.3 0 15 6.5 15 14.6 0 10.6-6.7 17.2-15 23.4C15.7 36.8 9 30.2 9 19.6 9 11.5 15.7 5 24 5Z" />
      <path d="M17.5 20.5c2.5-2.4 5.4-2.4 7.9 0M22 28c2.6-2.4 5.4-2.4 8 0" opacity={0.55} />
      <circle cx="30" cy="17" r="2.2" opacity={0.8} />
    </>
  ),
  syringe: (
    <>
      <path d="M31 8l9 9" />
      <path d="M36.5 12.5 25 24l-1.5 8.5L15 41l-8-8 8.5-8.5L24 23 35.5 11.5" />
      <path d="M12 30l6 6M17 25l6 6" opacity={0.55} />
    </>
  ),
  laser: (
    <>
      <path d="M24 5v9M24 34v9M43 24h-9M14 24H5" opacity={0.55} />
      <circle cx="24" cy="24" r="8" />
      <path d="M24 17.5v13M17.5 24h13" opacity={0.5} />
      <path d="M35.5 12.5 32 16M12.5 35.5 16 32M35.5 35.5 32 32M12.5 12.5 16 16" opacity={0.4} />
    </>
  ),
  droplet: (
    <>
      <path d="M24 6s12 12.6 12 20a12 12 0 1 1-24 0c0-7.4 12-20 12-20Z" />
      <path d="M18.5 27.5c0 4 2.6 6.6 6 7.2" opacity={0.55} />
    </>
  ),
  leaf: (
    <>
      <path d="M39 9C22 9 10 15.5 10 28.5c0 5.8 3.6 10.5 9 10.5C33 39 39 25 39 9Z" />
      <path d="M9 42C15 30 24 20 34 14" opacity={0.6} />
    </>
  ),
  stethoscope: (
    <>
      <path d="M13 6v10a8 8 0 0 0 16 0V6" />
      <path d="M10 6h6M26 6h6" />
      <path d="M21 24v6c0 6 4.6 10 10.5 10S42 36 42 30v-3" />
      <circle cx="42" cy="23" r="4" />
    </>
  ),
  heartPulse: (
    <>
      <path d="M24 41S7 30.5 7 18.9C7 12.9 11.7 8.5 17.4 8.5c3.5 0 6.1 1.9 6.6 3.7.5-1.8 3.1-3.7 6.6-3.7C36.3 8.5 41 12.9 41 18.9 41 30.5 24 41 24 41Z" />
      <path d="M9 24h8l3-5 4 10 3-5h12" />
    </>
  ),
  flask: (
    <>
      <path d="M19 6v13L9.6 34.4C8 37 9.9 40.5 13 40.5h22c3.1 0 5-3.5 3.4-6.1L29 19V6" />
      <path d="M16 6h16" />
      <path d="M13.6 30h20.8" opacity={0.55} />
      <circle cx="21" cy="34" r="1.8" opacity={0.7} />
      <circle cx="28" cy="36" r="1.4" opacity={0.7} />
    </>
  ),
  vaccine: (
    <>
      <path d="M17 6h14M24 6v9" />
      <path d="M15 15h18v18a9 9 0 0 1-9 9 9 9 0 0 1-9-9V15Z" />
      <path d="M15 27h18" opacity={0.55} />
      <path d="M20 21h.02M27 33h.02" strokeWidth={3.4} opacity={0.8} />
    </>
  ),
  scan: (
    <>
      <path d="M6 17V9a3 3 0 0 1 3-3h8M42 17V9a3 3 0 0 0-3-3h-8M6 31v8a3 3 0 0 0 3 3h8M42 31v8a3 3 0 0 1-3 3h-8" />
      <path d="M11 24h26" />
      <path d="M17 18h14M17 30h14" opacity={0.45} />
    </>
  ),
  shield: (
    <>
      <path d="M24 5l14 5v11c0 10-6 17.6-14 22-8-4.4-14-12-14-22V10l14-5Z" />
      <path d="M17.5 24.5 22 29l9-9.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="6" y="10" width="36" height="32" rx="6" />
      <path d="M6 20h36M16 5v9M32 5v9" />
      <path d="M15 29h5M28 29h5M15 36h5M28 36h5" opacity={0.6} />
    </>
  ),
  clock: (
    <>
      <circle cx="24" cy="24" r="18" />
      <path d="M24 13v11l7 5" />
    </>
  ),
  message: (
    <>
      <path d="M42 22.5c0 8.6-8.1 15.5-18 15.5-1.9 0-3.7-.2-5.4-.7L8 42l2.6-7.7C7.7 31.3 6 27.1 6 22.5 6 13.9 14.1 7 24 7s18 6.9 18 15.5Z" />
      <path d="M17 21h.02M24 21h.02M31 21h.02" strokeWidth={3.6} opacity={0.75} />
    </>
  ),
  phone: (
    <>
      <path d="M16.5 7.5 21 16l-4 4c1.8 4.4 6.6 9.2 11 11l4-4 8.5 4.5c1 3.5-1.4 8.5-5.5 9.5C24 43 5 24 7 12.5 8 8.4 13 6.5 16.5 7.5Z" />
    </>
  ),
  mail: (
    <>
      <rect x="5" y="10" width="38" height="28" rx="6" />
      <path d="M7 15l14.6 10.4a4 4 0 0 0 4.8 0L41 15" />
    </>
  ),
  pin: (
    <>
      <path d="M24 43s14-12.4 14-22A14 14 0 1 0 10 21c0 9.6 14 22 14 22Z" />
      <circle cx="24" cy="20" r="5.4" />
    </>
  ),
  globe: (
    <>
      <circle cx="24" cy="24" r="18" />
      <path d="M6 24h36" />
      <path d="M24 6c4.8 5 7.2 11 7.2 18S28.8 37 24 42c-4.8-5-7.2-11-7.2-18S19.2 11 24 6Z" />
    </>
  ),
  star: (
    <>
      <path d="M24 6.5l5.3 10.8 11.9 1.7-8.6 8.4 2 11.9L24 33.7l-10.6 5.6 2-11.9-8.6-8.4 11.9-1.7L24 6.5Z" />
    </>
  ),
  quote: (
    <>
      <path d="M19 12c-6.1 2.5-10 8-10 15 0 5.5 3.4 9 8 9 3.9 0 6.8-2.8 6.8-6.6 0-3.6-2.6-6.3-6.1-6.3-.6 0-1.3.1-1.7.2.6-3.4 3-6.2 6.4-7.8L19 12Z" />
      <path d="M38 12c-6.1 2.5-10 8-10 15 0 5.5 3.4 9 8 9 3.9 0 6.8-2.8 6.8-6.6 0-3.6-2.6-6.3-6.1-6.3-.6 0-1.3.1-1.7.2.6-3.4 3-6.2 6.4-7.8L38 12Z" opacity={0.55} />
    </>
  ),
  arrowRight: (
    <>
      <path d="M8 24h32M28 12l12 12-12 12" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M13 35 35 13M17 13h18v18" />
    </>
  ),
  chevronDown: <path d="M11 18l13 13 13-13" />,
  plus: <path d="M24 10v28M10 24h28" />,
  minus: <path d="M10 24h28" />,
  check: <path d="M9 25.5 19 35l20-22" />,
  play: <path d="M17 10.5 38 24 17 37.5v-27Z" />,
  pause: <path d="M17 10v28M31 10v28" />,
  sparkle: (
    <>
      <path d="M24 5c1.6 8.8 5.6 12.8 14.4 14.4C29.6 21 25.6 25 24 33.8 22.4 25 18.4 21 9.6 19.4 18.4 17.8 22.4 13.8 24 5Z" />
      <path d="M36.5 30c.7 4 2.5 5.8 6.5 6.5-4 .7-5.8 2.5-6.5 6.5-.7-4-2.5-5.8-6.5-6.5 4-.7 5.8-2.5 6.5-6.5Z" opacity={0.6} />
    </>
  ),
  sun: (
    <>
      <circle cx="24" cy="24" r="9" />
      <path d="M24 4v5M24 39v5M44 24h-5M9 24H4M38.1 9.9l-3.5 3.5M13.4 34.6l-3.5 3.5M38.1 38.1l-3.5-3.5M13.4 13.4 9.9 9.9" />
    </>
  ),
  users: (
    <>
      <circle cx="18" cy="16" r="7" />
      <path d="M6 40c0-6.1 5.4-10.5 12-10.5S30 33.9 30 40" />
      <path d="M31 10.5A7 7 0 0 1 34 24" opacity={0.6} />
      <path d="M34 30.5c4.7 1.3 8 4.8 8 9.5" opacity={0.6} />
    </>
  ),
  user: (
    <>
      <circle cx="24" cy="16" r="8" />
      <path d="M9 41c0-7.2 6.7-13 15-13s15 5.8 15 13" />
    </>
  ),
  accessibility: (
    <>
      <circle cx="24" cy="9" r="4.5" />
      <path d="M11 18c4.2 1.8 8.5 2.7 13 2.7S32.8 19.8 37 18" />
      <path d="M24 20.7V30M24 30l-6 12M24 30l6 12" />
    </>
  ),
  gauge: (
    <>
      <path d="M8 36a18 18 0 1 1 32 0" />
      <path d="M24 36 33 20" />
      <circle cx="24" cy="36" r="3" />
    </>
  ),
  layers: (
    <>
      <path d="M24 6 6 15l18 9 18-9-18-9Z" />
      <path d="M6 24l18 9 18-9" opacity={0.75} />
      <path d="M6 33l18 9 18-9" opacity={0.5} />
    </>
  ),
  waves: (
    <>
      <path d="M5 17c4.5-5 9.5-5 14 0s9.5 5 14 0M5 26c4.5-5 9.5-5 14 0s9.5 5 14 0" />
      <path d="M5 35c4.5-5 9.5-5 14 0s9.5 5 14 0" opacity={0.55} />
      <path d="M42 12v24" opacity={0.4} />
    </>
  ),
  code: (
    <>
      <path d="M16 13 5 24l11 11M32 13l11 11-11 11" />
      <path d="M27 8 21 40" opacity={0.6} />
    </>
  ),
  translate: (
    <>
      <path d="M5 12h18M12.5 7v5M18 12c-1.2 8-6 13.5-13 16" />
      <path d="M9 20c2.5 4.5 6.5 7.5 11 8.5" opacity={0.65} />
      <path d="M24 42l8.5-20 8.5 20M27.5 35h10" />
    </>
  ),
  lock: (
    <>
      <rect x="9" y="20" width="30" height="22" rx="7" />
      <path d="M16 20v-5a8 8 0 0 1 16 0v5" />
      <path d="M24 29v5" />
    </>
  ),
  search: (
    <>
      <circle cx="21" cy="21" r="13" />
      <path d="M31 31l11 11" />
    </>
  ),
  parking: (
    <>
      <rect x="7" y="7" width="34" height="34" rx="10" />
      <path d="M19 34V15h6.5a6 6 0 0 1 0 12H19" />
    </>
  ),
  wheelchair: (
    <>
      <circle cx="20" cy="8" r="4" />
      <path d="M18 14v10h9" />
      <circle cx="21" cy="32" r="10" />
      <path d="M31 25l5 10h6" />
    </>
  ),
  menu: <path d="M7 15h34M7 24h34M7 33h22" />,
  close: <path d="M12 12l24 24M36 12 12 36" />,
  cube: (
    <>
      <path d="M24 5 41 14.5v19L24 43 7 33.5v-19L24 5Z" />
      <path d="M7 14.5 24 24l17-9.5M24 24v19" opacity={0.65} />
    </>
  ),
};

export function Glyph({ name, strokeWidth = 2.6, ...rest }: Props) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {P[name]}
    </svg>
  );
}

export default Glyph;
