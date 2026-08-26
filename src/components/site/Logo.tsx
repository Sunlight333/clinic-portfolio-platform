type Props = {
  /** rendered size of the circular mark in px */
  size?: number;
  withWordmark?: boolean;
  /** light = for warm/ivory backgrounds, invert = for photo/gradient backgrounds */
  variant?: "light" | "invert";
  className?: string;
  idSuffix?: string;
};

/**
 * Aurélia mark — two petals form the "A" (feminine, organic), a forward
 * slash cuts through it (the developer's signature + a sense of motion).
 * Deliberately simple: it survives 20px and 200px equally well.
 */
export function Logo({
  size = 46,
  withWordmark = true,
  variant = "light",
  className = "",
  idSuffix = "a",
}: Props) {
  const gid = `logo-grad-${idSuffix}`;
  const sid = `logo-shine-${idSuffix}`;
  const invert = variant === "invert";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className="relative grid shrink-0 place-items-center rounded-full transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover/logo:scale-105"
        style={{ width: size, height: size }}
      >
        <svg viewBox="0 0 48 48" width={size} height={size} role="img" aria-label="Aurélia">
          <defs>
            <linearGradient id={gid} x1="6%" y1="0%" x2="94%" y2="100%">
              <stop offset="0%" stopColor="#ffb08d" />
              <stop offset="42%" stopColor="#f9704a" />
              <stop offset="72%" stopColor="#f2769c" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
            <radialGradient id={sid} cx="30%" cy="18%" r="62%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="24" cy="24" r="23" fill={`url(#${gid})`} />
          <circle cx="24" cy="24" r="23" fill={`url(#${sid})`} />
          <circle cx="24" cy="24" r="22" fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="1.2" />

          {/* petal "A" */}
          <g
            fill="none"
            stroke="#fff"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.6 35.5C14.6 24.4 18.2 15.6 24 11" />
            <path d="M33.4 35.5C33.4 24.4 29.8 15.6 24 11" />
            <path d="M17.6 28.4h12.8" strokeOpacity="0.75" />
          </g>

          {/* developer slash — the dynamic cut */}
          <path
            d="M30.6 38.4 36.6 18.6"
            stroke="#fff"
            strokeOpacity="0.95"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <circle cx="13.2" cy="15.6" r="2.1" fill="#fff" fillOpacity="0.9" />
        </svg>
      </span>

      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className="font-display text-[1.42rem] font-extrabold tracking-[-0.045em]"
            style={{ color: invert ? "#fff" : "var(--color-ink)" }}
          >
            Aurélia
          </span>
          <span
            className="mt-[3px] text-[0.62rem] font-bold tracking-[0.34em] uppercase"
            style={{ color: invert ? "rgba(255,255,255,.82)" : "var(--color-inkmute)" }}
          >
            Clinic
          </span>
        </span>
      )}
    </span>
  );
}

export default Logo;
