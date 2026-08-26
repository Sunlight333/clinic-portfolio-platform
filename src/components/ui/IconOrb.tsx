import { Glyph, type GlyphName } from "@/components/icons/Glyph";

export type Tone = "coral" | "rose" | "lilac" | "mint" | "sky" | "amber";

type Size = "sm" | "md" | "lg" | "xl" | "2xl";

const SIZES: Record<Size, { box: number; pad: number }> = {
  sm: { box: 58, pad: 15 },
  md: { box: 82, pad: 21 },
  lg: { box: 108, pad: 27 },
  xl: { box: 136, pad: 34 },
  "2xl": { box: 168, pad: 42 },
};

const TONES: Record<Tone, { bg: string; ink: string; glow: string; ring: string }> = {
  coral: {
    bg: "linear-gradient(145deg,#fff3ec 0%,#ffd9c6 46%,#ffb495 100%)",
    ink: "#d1481f",
    glow: "0 18px 40px -18px rgba(249,112,74,.75)",
    ring: "rgba(255,138,99,.42)",
  },
  rose: {
    bg: "linear-gradient(145deg,#fff1f6 0%,#ffd7e5 46%,#ffb2ce 100%)",
    ink: "#c93f6d",
    glow: "0 18px 40px -18px rgba(242,118,156,.7)",
    ring: "rgba(242,118,156,.4)",
  },
  lilac: {
    bg: "linear-gradient(145deg,#f7f3ff 0%,#e4daff 46%,#cbb8fd 100%)",
    ink: "#6e4fd6",
    glow: "0 18px 40px -18px rgba(167,139,250,.72)",
    ring: "rgba(167,139,250,.42)",
  },
  mint: {
    bg: "linear-gradient(145deg,#effcf8 0%,#cdf3e8 46%,#9de6d1 100%)",
    ink: "#1e8a76",
    glow: "0 18px 40px -18px rgba(70,198,171,.7)",
    ring: "rgba(70,198,171,.4)",
  },
  sky: {
    bg: "linear-gradient(145deg,#eff8ff 0%,#d3e9ff 46%,#a9d2fb 100%)",
    ink: "#2a72c4",
    glow: "0 18px 40px -18px rgba(98,170,242,.7)",
    ring: "rgba(98,170,242,.4)",
  },
  amber: {
    bg: "linear-gradient(145deg,#fff8e9 0%,#ffe7bd 46%,#ffd18d 100%)",
    ink: "#b9741a",
    glow: "0 18px 40px -18px rgba(247,178,63,.7)",
    ring: "rgba(247,178,63,.42)",
  },
};

type Props = {
  icon: GlyphName;
  tone?: Tone;
  size?: Size;
  /** slowly rotating conic ring behind the orb */
  halo?: boolean;
  /** soft pulsing ring, for hero / primary spots */
  pulse?: boolean;
  className?: string;
  strokeWidth?: number;
};

export function IconOrb({
  icon,
  tone = "coral",
  size = "lg",
  halo = false,
  pulse = false,
  className = "",
  strokeWidth = 2.6,
}: Props) {
  const s = SIZES[size];
  const t = TONES[tone];

  return (
    <span
      className={`relative inline-grid shrink-0 place-items-center ${className}`}
      style={{ width: s.box, height: s.box }}
    >
      {halo && (
        <span
          aria-hidden
          className="animate-spin-slower absolute -inset-[14%] rounded-full opacity-70"
          style={{
            background: `conic-gradient(from 0deg, transparent 0deg, ${t.ring} 90deg, transparent 200deg, ${t.ring} 320deg, transparent 360deg)`,
            maskImage: "radial-gradient(circle, transparent 58%, #000 60%)",
            WebkitMaskImage: "radial-gradient(circle, transparent 58%, #000 60%)",
          }}
        />
      )}
      {pulse && (
        <span
          aria-hidden
          className="animate-pulse-ring absolute inset-0 rounded-full"
          style={{ boxShadow: `0 0 0 2px ${t.ring}` }}
        />
      )}

      <span
        className="relative grid h-full w-full place-items-center rounded-full"
        style={{
          background: t.bg,
          boxShadow: `${t.glow}, inset 0 2px 0 rgba(255,255,255,.9), inset 0 -10px 24px rgba(255,255,255,.55)`,
          border: "1.5px solid rgba(255,255,255,.85)",
        }}
      >
        {/* specular highlight — gives the orb its 3D read */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(60% 45% at 30% 18%, rgba(255,255,255,.95), rgba(255,255,255,0) 70%)",
          }}
        />
        <Glyph
          name={icon}
          strokeWidth={strokeWidth}
          style={{ width: s.box - s.pad * 2, height: s.box - s.pad * 2, color: t.ink }}
          className="relative"
        />
      </span>
    </span>
  );
}

export default IconOrb;
