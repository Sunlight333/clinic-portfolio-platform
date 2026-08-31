import Link from "next/link";
import type { Dictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Glyph } from "@/components/icons/Glyph";
import { IconOrb } from "@/components/ui/IconOrb";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const p = (path: string) => localePath(locale, path);
  const year = 2026;

  const serviceLinks = [
    { href: "/dental", label: dict.nav.dental },
    { href: "/aesthetics", label: dict.nav.aesthetics },
    { href: "/medical", label: dict.nav.medical },
  ];
  const clinicLinks = [
    { href: "/about", label: dict.nav.about },
    { href: "/contact", label: dict.nav.contact },
    { href: "/#team", label: dict.team.eyebrow },
    { href: "/#faq", label: dict.faq.eyebrow },
  ];

  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#fff7f1,#ffeee4_55%,#f8f1ff)] pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-50 blur-[110px]"
        style={{ background: "radial-gradient(circle,#ffd0bb,transparent 68%)" }}
      />

      <div className="container-x relative">
        {/* newsletter card */}
        <div className="ring-grad shape-ticket relative overflow-hidden bg-white/75 p-8 shadow-float backdrop-blur-xl sm:p-11">
          <span aria-hidden className="ring-grad-line shape-ticket" />
          <div className="relative grid gap-9 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div className="flex items-start gap-5">
              <IconOrb icon="mail" tone="coral" size="lg" />
              <div>
                <h2 className="text-h3">{dict.footer.newsletterTitle}</h2>
                <p className="mt-2.5 max-w-[46ch] text-[1.08rem] text-inksoft">
                  {dict.footer.newsletterDesc}
                </p>
              </div>
            </div>

            <form className="flex flex-col gap-3" action="#" aria-label={dict.footer.newsletterTitle}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <label className="sr-only" htmlFor="newsletter-email">
                  {dict.footer.newsletterPlaceholder}
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder={dict.footer.newsletterPlaceholder}
                  className="h-14 flex-1 rounded-full border-[1.6px] border-white bg-white px-6 text-[1.06rem] font-semibold shadow-soft outline-none transition-colors placeholder:text-inkmute focus:border-coral-300"
                />
                <button
                  type="submit"
                  className="font-display h-14 shrink-0 rounded-full bg-[linear-gradient(120deg,#ff9060,#f9704a_45%,#f2769c)] px-8 text-[1.06rem] font-extrabold text-white shadow-[0_12px_28px_-12px_rgba(228,86,47,.9)] transition-transform duration-300 hover:scale-[1.03] active:scale-95"
                >
                  {dict.footer.newsletterCta}
                </button>
              </div>
              <p className="pl-2 text-[0.92rem] text-inkmute">{dict.footer.newsletterNote}</p>
            </form>
          </div>
        </div>

        {/* columns */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-6">
            <Logo size={54} />
            <p className="max-w-[38ch] text-[1.06rem] leading-relaxed text-inksoft">{dict.footer.blurb}</p>
            <LanguageSwitcher
              locale={locale}
              label={dict.nav.language}
              hint={dict.nav.languageHint}
              variant="stack"
            />
          </div>

          <div>
            <h3 className="text-eyebrow text-inkmute">{dict.footer.servicesTitle}</h3>
            <ul className="mt-5 flex flex-col gap-3.5">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={p(l.href)}
                    className="font-display group inline-flex items-center gap-2 text-[1.14rem] font-extrabold tracking-tight transition-colors hover:text-coral-600"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-coral-300 transition-transform duration-300 group-hover:scale-150" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-eyebrow text-inkmute">{dict.footer.clinicTitle}</h3>
            <ul className="mt-5 flex flex-col gap-3.5">
              {clinicLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={p(l.href)}
                    className="font-display group inline-flex items-center gap-2 text-[1.14rem] font-extrabold tracking-tight transition-colors hover:text-coral-600"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-lilac-300 transition-transform duration-300 group-hover:scale-150" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-eyebrow text-inkmute">{dict.footer.contactTitle}</h3>
            <ul className="mt-5 flex flex-col gap-4 text-[1.06rem] font-semibold text-inksoft">
              <li className="flex items-start gap-3">
                <Glyph name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-coral-500" strokeWidth={2.8} />
                {dict.footer.address}
              </li>
              <li className="flex items-start gap-3">
                <Glyph name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-coral-500" strokeWidth={2.8} />
                <a href={`tel:${dict.footer.phone.replace(/\s/g, "")}`} className="hover:text-coral-600">
                  {dict.footer.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Glyph name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-coral-500" strokeWidth={2.8} />
                <a href={`mailto:${dict.footer.email}`} className="hover:text-coral-600">
                  {dict.footer.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Glyph name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-coral-500" strokeWidth={2.8} />
                {dict.footer.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* oversized wordmark */}
        <div aria-hidden className="relative select-none pb-4">
          <p className="font-display stroke-text text-center text-[clamp(3.4rem,15vw,13rem)] leading-[0.8] font-extrabold tracking-[-0.05em]">
            AURÉLIA
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-ink/10 py-8 text-[0.96rem] text-inkmute sm:flex-row">
          <p>
            © {year} Aurélia Clinic. {dict.footer.rights}
          </p>
          <ul className="flex items-center gap-5">
            {dict.footer.legal.map((l) => (
              <li key={l}>
                <span className="cursor-default transition-colors hover:text-coral-600">{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
