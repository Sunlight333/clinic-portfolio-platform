# Bringing the website up to the standard of the clinic

**Requirements · Website replacement**

What the new site has to be, written from our side of the desk: why the old one had to go,
what replaces it, and how we will know it is right.

Prepared by Aurélia Clinic, for the studio.
Version 1.0, 28 August 2026.
Replaces aureliaclinic.com, built 2016. Scope: the public website.

3 languages · 6 pages each · 18 addresses · 70 requirements

---

## 1. Why the old site has to go

It was built in 2016 for a two-room dental practice. We are now three studios and twelve
clinicians in a restored building on Avenida Paulista, and roughly a third of the people who
call us do so in English or Spanish. The site does not describe us, and it does not carry its
share of the work — it is a business card that has been out of date for six years.

Four outcomes, in the order we care about them:

- Reception should stop being the first step. Enquiries should arrive in writing, with enough
  detail that we can propose two times in one reply instead of playing telephone tag.
- An English- or Spanish-speaking patient should be able to read every page — treatments,
  prices, hours, directions — without a translation tool.
- A nervous patient should be able to see the rooms, the team and what a first appointment
  involves before committing to walking in.
- Someone searching for a dentist near Trianon-Masp should find us, with our hours and address
  correct in the result.

---

## 2. Where we are starting from

The old site is the baseline, not the model. Nothing in it needs preserving except the address,
the phone number and the inbound links.

**Languages.** Portuguese only, plus an English page three years out of date.
Replaced by three languages at full parity, chosen automatically and remembered.

**Structure.** Home, "Serviços" as one long list, Contato.
Replaced by a page per studio, with its own treatments, prices, path and questions.

**Booking.** A phone number and a mailto: link.
Replaced by a structured request that reaches reception and acknowledges the patient.

**Prices.** "Consulte-nos".
Replaced by published duration and price for every treatment we offer.

**Mobile.** Desktop layout, pinch to zoom.
Replaced by a site designed for the phone first — two thirds of our traffic is mobile.

**Look.** Stock clip-art, blue gradients, a stethoscope on a keyboard.
Replaced by our own daylight palette, our building, our people.

**Search.** One title tag for the whole site, no address markup.
Replaced by per-page, per-language metadata and clinic structured data.

**Maintenance.** A plugin stack nobody dared update.
Replaced by a current, supported stack with a documented design system.

---

## 3. Languages

Non-negotiable, and the single reason we are doing this now. A half-translated site is worse
than a Portuguese one.

**LNG-01 · Three languages, equal weight** — *Must*
English, Brazilian Portuguese and Spanish. Every page, every section, every button.
*Accepted when:* a reviewer can walk the whole site in Spanish without meeting an English word.

**LNG-02 · Guess correctly, then remember** — *Must*
A visitor lands in their own language, taken from their browser. If they choose differently,
that choice survives to the next visit.
*Accepted when:* a Spanish browser opens the Spanish site unprompted, and a switch to
Portuguese still holds a week later.

**LNG-03 · Switching language keeps my place** — *Must*
Changing language on the Aesthetics page shows the Aesthetics page, not the home page.

**LNG-04 · Untranslated copy cannot reach the public site** — *Must*
We do not want to learn about a missing translation from a patient.
*Accepted when:* deleting one line of Spanish copy stops the site from publishing at all.

**LNG-05 · Search engines are told the three versions are one clinic** — *Must*
Language alternates and a canonical address on every page, so we are not competing with
ourselves.

**LNG-06 · Spanish and Portuguese read as native, not translated** — *Should*
Reviewed by a native speaker who works in a clinic. Prices, dates and phone formats local to
each reader.

**LNG-07 · Correspondence follows the site** — *Must*
Whatever language a patient enquires in, the acknowledgement and every message after it arrive
in that language.

---

## 4. Pages and content

**STR-01 · Six pages per language** — *Must*
Home, Dental, Aesthetics, Medical, About, Contact — eighteen addresses, each linkable and
shareable on its own.

**STR-02 · The home page tells the whole story in one scroll** — *Must*
Most people never click past it. It carries the three studios, how a visit works, who we are,
what patients say, the building, the common questions, and a way to book.
*Accepted when:* someone who reads only the home page can name our three specialties, our hours
and what a first appointment costs.

**STR-03 · Each studio gets a real page** — *Must*
Not a paragraph on a shared services page.
*Accepted when:* each studio page carries its own treatment list with duration and price, what
makes that studio different, the four steps of a course of treatment, and the questions that
studio is actually asked.

**STR-04 · About must answer "can I trust these people"** — *Must*
Our history, what we hold to, our registrations and accreditations, and the team with faces and
specialisms.

**STR-05 · Contact must answer "how do I reach you, now"** — *Must*
The form, opening hours including the morning urgent-care window, reception, WhatsApp, email and
the emergency line, and how to find the door.

**STR-06 · Prices published for every treatment** — *Must*
Duration and price, in the local currency, with a date they are valid from. "Consulte-nos" is
what drove people to phone competitors instead.

**STR-07 · The questions we answer on the phone every week, answered on the page** — *Must*
Languages, waiting time, first-consultation cost, insurance, dental anxiety, how to book. On the
home page, and again per studio where the answer differs.

**STR-08 · The location resolves to our actual entrance** — *Must*
With the parking note and the metro exit, and a directions link that works from a phone on the
street.

**STR-09 · Privacy, terms and cookie pages** — *Must*
Real pages in three languages, reachable from the footer of every page.

**STR-10 · A dead link should not feel like a dead clinic** — *Should*
A missing page appears in the visitor's language and points them back into the site.

**STR-11 · Insurance and payment information** — *Should*
Which insurers we work with and how reimbursement works — our second most common phone question.

---

## 5. Booking and enquiries

This is the part of the project that has to earn its cost. Everything else is presentation.

**BOOK-01 · Ask for exactly what reception needs** — *Must*
Name, email, phone or WhatsApp, which studio it concerns, preferred time of day, and a free-text
description. Nothing more — every extra field costs us enquiries.

**BOOK-02 · Errors explained in the patient's language, without losing what they typed** — *Must*

**BOOK-03 · Enquiries reach reception** — *Must*
Into the shared inbox within a minute, with the language and the studio in the subject line, and
an automatic acknowledgement to the patient.
*Accepted when:* a request sent from a phone on mobile data appears in the inbox before the
patient has put the phone down.

**BOOK-04 · Nothing is lost if the inbox fails** — *Must*
Enquiries stored as well as emailed, so a bounced message is not a patient we never hear from
again.

**BOOK-05 · Consent recorded, not merely displayed** — *Must*
The wording, the timestamp and the version stored against the enquiry — that is what we would
have to produce if asked.

**BOOK-06 · Spam does not reach reception** — *Must*
Rate limiting and a silent trap, not a puzzle for the patient to solve.

**BOOK-07 · The page promises only what the form does** — *Must*
If it is a request answered within one working day, it says that. We would rather under-promise
than have reception apologising for the website.

**BOOK-08 · One tap to call or message from a phone** — *Must*
Reception, WhatsApp and the emergency line as live links throughout.

**BOOK-09 · Reception sees enquiries in one place** — *Should*
A simple list with status, so two people do not answer the same patient and none is missed on a
Monday.

**BOOK-10 · The newsletter box subscribes someone** — *Should*
Double opt-in, one email a month, unsubscribe in one click. If it cannot be built now, it does
not appear now.

**BOOK-11 · Real slot booking against the clinic diary** — *Could*
Wanted, but later. We would rather have a request form that works than a calendar showing slots
we cannot honour.

---

## 6. Look, feel and media

The brief in one line: the site should feel like the waiting room.

**DSN-01 · Daylight, never clinical dark** — *Must*
Warm ivory surfaces and a plum-toned ink. No black backgrounds, no neon, none of the
blue-gradient hospital look of the old site.

**DSN-02 · A documented system, so page ten still looks like page one** — *Must*
Colour, type, spacing and shapes defined once and reused. We will add pages over the years and
we do not want a patchwork.

**DSN-03 · Sections distinguishable at a glance** — *Should*
Scrolling our home page should not feel like scrolling a template of identical rounded
rectangles.

**DSN-04 · No third-party logos anywhere** — *Must*
A clinic site carries our name and no one else's. No vendor or technology marks, and no implied
endorsements we do not have.

**DSN-05 · Motion is calm, and skippable** — *Must*
Anyone whose device asks for reduced motion gets a still page. Any film is pausable.

**DSN-06 · Phone first** — *Must*
Two thirds of our visitors are on a phone, often one-handed in a waiting room. Nothing breaks
down to a 360 px screen.

**DSN-07 · The identity works off-screen too** — *Should*
The mark holds at signage size and at 20 px, and the palette survives print for our referral
cards.

**MED-01 · One consistent photographic register** — *Must*
Bright, warm, daylight. No mixed colour grades, no dark stock photography.

**MED-02 · Our building, our rooms, our team** — *Must*
Commissioned photography, not stock. A clinic that shows someone else's waiting room is telling
patients something about itself.

**MED-03 · No face appears twice** — *Must*
One portrait must not serve as two clinicians, or as a clinician and a patient. It undermines
everything else on the page.

**MED-04 · Nobody is pictured without a signed release** — *Must*
Staff and patients alike. No patient is identifiable — in photography, in before-and-after
imagery, or in a review that names a treatment — without written consent.

**MED-05 · Pictures do not make the page jump** — *Must*
Images hold their space and fade in, on hotel wifi as much as on fibre.

**MED-06 · Licences held in the clinic's name** — *Should*
Every photograph, film and typeface, with the paperwork handed to us.

---

## 7. Access, speed and being found

**ACC-01 · WCAG 2.2 AA, verified by someone who did not build it** — *Must*
If we are going to claim the standard on our own About page, an audit report has to sit behind
it.

**ACC-02 · Everything operable by keyboard** — *Must*
Menus, the language list, the questions, the form — with a focus outline you can actually see.

**ACC-03 · Skip past the navigation** — *Must*
A screen-reader user should not hear the whole menu on every page before reaching the content.

**ACC-04 · Every icon-only control announces itself** — *Must*

**ACC-05 · Readable at 200 % zoom** — *Should*
A substantial share of our medical patients are over sixty.

**ACC-06 · An accessibility statement and a way to report a barrier** — *Should*
Required by the standard we claim, and the right thing besides.

**PRF-01 · Usable on a phone on mobile data** — *Must*
Core Web Vitals in the green on a mid-range Android over 4G, measured on the live site rather
than a developer's laptop.

**PRF-02 · Any score we publish is a real score** — *Must*
If a performance or accessibility number appears on the site, the report behind it is produced
each release.

**SEO-01 · Every page and language has its own title and description** — *Must*

**SEO-02 · A sitemap covering all eighteen addresses** — *Must*

**SEO-03 · Our address, phone and hours readable by search engines** — *Must*
Including the Saturday hours, which the old site had wrong for two years.

**SEO-04 · Star ratings only from verified reviews** — *Must*
If a rating appears in search results it comes from our review source, live. We will not publish
a number we cannot trace to real patients.

**SEO-05 · Redirects from the old addresses** — *Must*
The old Portuguese URLs have inbound links and appear on printed cards. They land on the
matching new page, not the 404.

**SEO-06 · A sensible preview when a page is shared** — *Should*
The studio pages deserve their own image, not the same one for the whole site.

---

## 8. Truthfulness, data and the law

Our exposure sits here, not in the design. Brazilian medical and dental advertising rules, and
the LGPD, apply to every sentence and every form field.

**LEG-01 · Every factual claim is substantiable** — *Must*
Team, reviews, waiting times, recommendation rates, turnaround times, accreditations. If we
cannot produce the document behind a number, the number does not go up.

**LEG-02 · Published prices match our current table** — *Must*
With one place to update them, so a price change is not a website project.

**LEG-03 · Clinical and legal sign-off on treatment copy** — *Must*
Our clinical director and our lawyer read every treatment description, price and outcome claim
against CFM and CFO advertising rules before it goes live.

**LEG-04 · A privacy notice covering the enquiry form** — *Must*
What we collect, why, how long we keep it, who sees it, and how to have it deleted. Three
languages, linked from every page.

**LEG-05 · Consent before any tracking** — *Must*
No analytics, no embedded map, no third-party script runs before the visitor agrees, and
refusing must actually work.

**LEG-06 · Enquiry data in one place, with a retention period** — *Must*
Encrypted in transit and at rest, access limited to reception and the clinical director, deleted
on a defined schedule.

**LEG-07 · The site describes only services we actually run** — *Must*
No portal, no permanent record, no messaging thread on the page until it exists behind the page.

---

## 9. Running it afterwards

**OPS-01 · A stack we can still update in three years** — *Must*
The last site died of plugins. Few dependencies, all current, all maintained.

**OPS-02 · Reception can change hours, prices, team and questions without a developer** — *Must*
Correcting a Saturday closing time must not be a development task and a deployment.

**OPS-03 · A preview address we review before anything is public** — *Must*

**OPS-04 · We own everything** — *Must*
Domain, hosting account, repository, photography licences and fonts in the clinic's name, with a
written handover. Backups restorable within a day.

**OPS-05 · Someone to call when it breaks** — *Must*
A named contact, a response time, and what is covered — agreed in writing before launch.

**OPS-06 · Automatic checks on every change** — *Should*
At minimum the build and the translation-completeness check, run before publishing rather than
after.

**OPS-07 · A monthly figure for whether this worked** — *Should*
Enquiries by language, by studio and by page, so we can judge the investment. Subject to LEG-05.

---

## 10. What we are not asking for

- Patient records, prescriptions, or anything that touches clinical systems.
- Online payment or deposits — we take payment at reception.
- Teleconsultation or video appointments.
- A shop, or a blog with a publishing schedule we cannot keep.
- A second location. If that changes, we will come back to you.
- An app. If the site works properly on a phone, we do not need one.

---

## 11. What "done" means to us

- A member of reception, given only a phone, can find the Spanish Aesthetics page, read the
  price of a treatment, send an enquiry, and watch it arrive in the shared inbox.
- Every claim on the public site can be traced to a document we hold.
- An accessibility report and a Core Web Vitals report exist, both taken from the live site.
- The three language versions are complete, and publishing fails if that stops being true.
- The clinical director has read and approved every treatment description and price.
- The old addresses redirect, and nothing that was findable before is lost.
- We hold the domain, the hosting, the repository and the photography licences, and we know who
  to call if the site goes down.

---

Requirements are written in the clinic's voice and numbered for reference in review.
**Must** — the site does not launch without it. **Should** — expected, negotiable on timing.
**Could** — wanted, later.

Version 1.0, 28 August 2026. The description of the old site in section 2 is background, not a
requirement.
