import type { Dictionary } from "@/i18n";
import { LOCALE_META, type Locale } from "@/i18n/config";

const BASE = "https://aurelia-clinic.example";

/** MedicalClinic + Organization JSON-LD, localised per route. */
export function StructuredData({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: `${dict.brand.name} ${dict.brand.suffix}`,
    description: dict.meta.home.description,
    url: `${BASE}/${locale}`,
    inLanguage: LOCALE_META[locale].htmlLang,
    image: `${BASE}/video/hero-poster.jpg`,
    telephone: dict.footer.phone,
    email: dict.footer.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Paulista 1600",
      addressLocality: "São Paulo",
      addressCountry: "BR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "15:00",
      },
    ],
    medicalSpecialty: ["Dentistry", "Dermatology", "PrimaryCare"],
    availableService: [
      dict.pages.dental,
      dict.pages.aesthetics,
      dict.pages.medical,
    ].flatMap((page) =>
      page.treatments.map((t) => ({
        "@type": "MedicalProcedure",
        name: t.title,
        description: t.desc,
      })),
    ),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1284",
      bestRating: "5",
    },
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD is generated from our own dictionary — no user input involved.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default StructuredData;
