"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Dictionary } from "@/i18n";
import { Glyph } from "@/components/icons/Glyph";
import { IconOrb } from "@/components/ui/IconOrb";

type Field = "name" | "email" | "phone" | "message";

export function ContactForm({ dict }: { dict: Dictionary }) {
  const t = dict.pages.contact;
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Partial<Record<Field, string>> = {};

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name) next.name = t.required;
    if (!email) next.email = t.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) next.email = t.invalidEmail;
    if (!message) next.message = t.required;

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    // Front-end demo: no back end is wired up in this portfolio build.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("done");
  }

  const field =
    "h-14 w-full rounded-[1.2rem] border-[1.6px] border-white bg-white px-5 text-[1rem] font-semibold text-ink shadow-soft outline-none transition-colors placeholder:font-medium placeholder:text-inkmute focus:border-coral-300";
  const label = "mb-2 block text-[0.86rem] font-extrabold tracking-tight text-inksoft";

  return (
    <div className="ring-grad shape-ticket relative overflow-hidden bg-white/80 p-7 shadow-float backdrop-blur-xl sm:p-9">
      <span aria-hidden className="ring-grad-line shape-ticket" />

      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center py-14 text-center"
          >
            <IconOrb icon="check" tone="mint" size="2xl" halo pulse />
            <h3 className="font-display mt-7 text-[1.6rem] font-extrabold tracking-tight">
              {t.success}
            </h3>
            <p className="mt-3 max-w-[42ch] text-[1rem] text-inksoft">{t.successBody}</p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="font-display mt-7 rounded-full border-[1.6px] border-ink/12 px-6 py-3 text-[0.98rem] font-extrabold transition-colors hover:border-coral-300 hover:text-coral-600"
            >
              {t.again}
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative"
          >
            <div className="flex items-start gap-4">
              <IconOrb icon="calendar" tone="coral" size="lg" />
              <div>
                <h2 className="font-display text-[1.5rem] font-extrabold tracking-tight">
                  {t.formTitle}
                </h2>
                <p className="mt-1.5 text-[0.98rem] text-inksoft">{t.formLead}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="cf-name">
                  {t.name}
                </label>
                <input id="cf-name" name="name" className={field} placeholder={t.namePlaceholder} />
                {errors.name && <FieldError text={errors.name} />}
              </div>

              <div>
                <label className={label} htmlFor="cf-email">
                  {t.email}
                </label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  className={field}
                  placeholder={t.emailPlaceholder}
                />
                {errors.email && <FieldError text={errors.email} />}
              </div>

              <div>
                <label className={label} htmlFor="cf-phone">
                  {t.phone}
                </label>
                <input id="cf-phone" name="phone" className={field} placeholder={t.phonePlaceholder} />
              </div>

              <div>
                <label className={label} htmlFor="cf-service">
                  {t.service}
                </label>
                <select id="cf-service" name="service" className={`${field} appearance-none pr-12`}>
                  {t.serviceOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <span className={label}>{t.preferred}</span>
                <div className="flex flex-wrap gap-2.5">
                  {t.preferredOptions.map((o, i) => (
                    <label
                      key={o}
                      className="group relative cursor-pointer rounded-full border-[1.6px] border-white bg-white px-5 py-2.5 text-[0.92rem] font-bold shadow-soft transition-colors has-[:checked]:border-coral-300 has-[:checked]:bg-coral-50 has-[:checked]:text-coral-600"
                    >
                      <input
                        type="radio"
                        name="preferred"
                        value={o}
                        defaultChecked={i === 0}
                        className="sr-only"
                      />
                      {o}
                    </label>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className={label} htmlFor="cf-message">
                  {t.message}
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  rows={4}
                  placeholder={t.messagePlaceholder}
                  className="w-full rounded-[1.2rem] border-[1.6px] border-white bg-white px-5 py-4 text-[1rem] font-semibold text-ink shadow-soft outline-none transition-colors placeholder:font-medium placeholder:text-inkmute focus:border-coral-300"
                />
                {errors.message && <FieldError text={errors.message} />}
              </div>
            </div>

            <label className="mt-6 flex cursor-pointer items-start gap-3 text-[0.92rem] font-semibold text-inksoft">
              <input
                type="checkbox"
                required
                defaultChecked
                className="mt-1 h-5 w-5 shrink-0 accent-coral-500"
              />
              {t.consent}
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="font-display group/btn relative mt-7 inline-flex h-16 w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[linear-gradient(120deg,#ff9060,#f9704a_45%,#f2769c)] text-[1.06rem] font-extrabold text-white shadow-[0_14px_32px_-14px_rgba(228,86,47,.95)] transition-transform duration-300 hover:scale-[1.01] active:scale-[.99] disabled:opacity-70"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(100deg,transparent_20%,rgba(255,255,255,.5)_50%,transparent_80%)] transition-transform duration-[900ms] group-hover/btn:translate-x-full"
              />
              {status === "sending" ? t.sending : t.submit}
              <Glyph name="arrowRight" strokeWidth={3.2} className="h-5 w-5" />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function FieldError({ text }: { text: string }) {
  return (
    <p className="mt-2 flex items-center gap-1.5 pl-1 text-[0.84rem] font-bold text-coral-600">
      <Glyph name="minus" strokeWidth={4} className="h-3 w-3" />
      {text}
    </p>
  );
}

export default ContactForm;
