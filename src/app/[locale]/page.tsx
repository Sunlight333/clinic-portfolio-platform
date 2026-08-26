import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n";
import { isLocale } from "@/i18n/config";

import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Services } from "@/components/sections/Services";
import { Signature } from "@/components/sections/Signature";
import { Approach } from "@/components/sections/Approach";
import { Impact } from "@/components/sections/Impact";
import { TechStack } from "@/components/sections/TechStack";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Facility } from "@/components/sections/Facility";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <TrustStrip dict={dict} />
      <Services locale={locale} dict={dict} />
      <Signature locale={locale} dict={dict} />
      <Approach dict={dict} />
      <Impact dict={dict} />
      <TechStack dict={dict} />
      <Team locale={locale} dict={dict} />
      <Testimonials dict={dict} />
      <Facility dict={dict} />
      <FaqSection dict={dict} />
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
