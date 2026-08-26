import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Bricolage_Grotesque, Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";

import { getDictionary } from "@/i18n";
import { LOCALES, LOCALE_META, isLocale } from "@/i18n/config";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { StructuredData } from "@/components/site/StructuredData";
import { ScrollProgress } from "@/components/ui/Motion";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const viewport: Viewport = {
  themeColor: "#fffaf5",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL("https://aurelia-clinic.example"),
    title: {
      default: dict.meta.home.title,
      template: `%s · ${dict.brand.name} ${dict.brand.suffix}`,
    },
    description: dict.meta.home.description,
    applicationName: `${dict.brand.name} ${dict.brand.suffix}`,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(LOCALES.map((l) => [LOCALE_META[l].htmlLang, `/${l}`])),
    },
    openGraph: {
      type: "website",
      locale: LOCALE_META[locale].htmlLang,
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      siteName: `${dict.brand.name} ${dict.brand.suffix}`,
      images: [{ url: "/video/hero-poster.jpg", width: 1920, height: 1080, alt: dict.brand.claim }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      images: ["/video/hero-poster.jpg"],
    },
    icons: { icon: "/favicon.svg" },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <html
      lang={LOCALE_META[locale].htmlLang}
      className={`${bricolage.variable} ${fraunces.variable} ${jakarta.variable}`}
    >
      <body className="relative min-h-screen antialiased">
        <SmoothScroll />
        <ScrollProgress />

        <a
          href="#main"
          className="font-display sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-full focus:bg-white focus:px-6 focus:py-3 focus:font-extrabold focus:shadow-float"
        >
          {dict.common.backHome}
        </a>

        <StructuredData locale={locale} dict={dict} />
        <Header locale={locale} dict={dict} />

        <main id="main" className="relative">
          {children}
        </main>

        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
