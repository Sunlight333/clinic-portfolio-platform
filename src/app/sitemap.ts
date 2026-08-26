import type { MetadataRoute } from "next";
import { LOCALES } from "@/i18n/config";

const BASE = "https://aurelia-clinic.example";
const ROUTES = ["", "/dental", "/aesthetics", "/medical", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((locale) =>
    ROUTES.map((route) => ({
      url: `${BASE}/${locale}${route}`,
      lastModified: new Date("2026-08-26"),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(LOCALES.map((l) => [l, `${BASE}/${l}${route}`])),
      },
    })),
  );
}
