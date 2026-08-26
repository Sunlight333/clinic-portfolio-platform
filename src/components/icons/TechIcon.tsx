import { TECH_ICONS } from "@/lib/techIcons";

/** Brand glyph in a circular chip. Very dark brand colours are warmed so
 *  nothing on the page reads as pure black. */
const WARM_OVERRIDE: Record<string, string> = {
  nextdotjs: "#4a3a52",
  vercel: "#4a3a52",
  threedotjs: "#4a3a52",
  sanity: "#e4562f",
  prisma: "#5b4a63",
  github: "#4a3a52",
  javascript: "#c9a300",
  jest: "#c2456a",
  webgl: "#b8482f",
};

export function TechIcon({
  slug,
  size = 30,
  className = "",
}: {
  slug: string;
  size?: number;
  className?: string;
}) {
  const icon = TECH_ICONS[slug];
  if (!icon) return null;
  const color = WARM_OVERRIDE[slug] ?? icon.hex;

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={icon.title}
      className={className}
      style={{ fill: color }}
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}

export function techTitle(slug: string) {
  return TECH_ICONS[slug]?.title ?? slug;
}

export default TechIcon;
