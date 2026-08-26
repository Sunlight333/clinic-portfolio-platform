import type { Locale } from "@/i18n/config";

/** Circular, simplified flag discs — recognisable at 22px, clean at 64px. */
export function FlagDisc({ locale, size = 26 }: { locale: Locale; size?: number }) {
  const id = `flag-clip-${locale}`;
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true" className="shrink-0">
      <defs>
        <clipPath id={id}>
          <circle cx="16" cy="16" r="16" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id})`}>
        {locale === "en" && (
          <>
            <rect width="32" height="32" fill="#3f5bb0" />
            <path d="M0 0l32 32M32 0L0 32" stroke="#fff" strokeWidth="7" />
            <path d="M0 0l32 32M32 0L0 32" stroke="#e8536b" strokeWidth="3.4" />
            <path d="M16 0v32M0 16h32" stroke="#fff" strokeWidth="10" />
            <path d="M16 0v32M0 16h32" stroke="#e8536b" strokeWidth="5.6" />
          </>
        )}
        {locale === "pt" && (
          <>
            <rect width="32" height="32" fill="#2fa96a" />
            <path d="M16 3.6 29.4 16 16 28.4 2.6 16Z" fill="#ffd34d" />
            <circle cx="16" cy="16" r="6" fill="#3f5bb0" />
            <path d="M10.4 13.6c3.8-1.1 8-.5 11.4 1.7" stroke="#fff" strokeWidth="1.7" fill="none" />
          </>
        )}
        {locale === "es" && (
          <>
            <rect width="32" height="32" fill="#e8536b" />
            <rect y="8.5" width="32" height="15" fill="#ffd34d" />
            <circle cx="11" cy="16" r="2.6" fill="none" stroke="#e8536b" strokeWidth="1.5" />
          </>
        )}
      </g>
      <circle cx="16" cy="16" r="15.2" fill="none" stroke="#fff" strokeOpacity="0.85" strokeWidth="1.6" />
    </svg>
  );
}

export default FlagDisc;
