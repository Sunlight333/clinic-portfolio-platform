export const LOCALES = ["en", "pt", "es"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_META: Record<
  Locale,
  { code: string; label: string; native: string; region: string; htmlLang: string }
> = {
  en: { code: "EN", label: "English", native: "English", region: "International", htmlLang: "en" },
  pt: { code: "PT", label: "Portuguese (Brazil)", native: "Português", region: "Brasil", htmlLang: "pt-BR" },
  es: { code: "ES", label: "Spanish", native: "Español", region: "Latinoamérica", htmlLang: "es" },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Build a locale-aware href: localePath("pt", "/dental") -> "/pt/dental" */
export function localePath(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}
