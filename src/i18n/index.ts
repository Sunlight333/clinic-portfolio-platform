import en, { type Dictionary } from "./dictionaries/en";
import pt from "./dictionaries/pt";
import es from "./dictionaries/es";
import { DEFAULT_LOCALE, type Locale } from "./config";

const DICTIONARIES: Record<Locale, Dictionary> = { en, pt, es };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale] ?? DICTIONARIES[DEFAULT_LOCALE];
}

export type { Dictionary };
export * from "./config";
