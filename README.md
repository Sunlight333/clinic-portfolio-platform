# Aurélia Clinic — trilingual clinic portfolio

A production-grade portfolio site for a multi-specialty clinic (dental · aesthetic ·
general medicine), built with **Next.js 16 (App Router) + React 19 + Tailwind CSS v4**.

Bright, warm, daylight palette — no black backgrounds, no neon. Every section uses a
different card silhouette (arch, leaf, ticket, blob, petal, hexagon, circle), oversized
circular icons, layered warm shadows, glass panels, 3D tilt and scroll choreography.

```bash
npm install
npm run dev      # http://localhost:3000  → redirects to /en, /pt or /es
npm run build
npm start
```

---

## Routes

| Route | Page |
| --- | --- |
| `/[locale]` | Landing: hero (video), trust marquee, services, signature bento, journey, impact, tech stack, team, testimonials, facility gallery, FAQ, CTA |
| `/[locale]/dental` | Dental Studio |
| `/[locale]/aesthetics` | Aesthetic Lab |
| `/[locale]/medical` | Medical Care |
| `/[locale]/about` | Story, values, credentials, team, in-house engineering |
| `/[locale]/contact` | Booking form, hours, map card, gallery |

`locale` ∈ `en` · `pt` (Brazilian Portuguese) · `es`.
`src/proxy.ts` (Next 16's renamed middleware) negotiates `Accept-Language`, honours a
`NEXT_LOCALE` cookie and redirects unprefixed paths.

## Internationalisation

- `src/i18n/dictionaries/en.ts` is the source of truth; `pt.ts` and `es.ts` are typed
  against it (`const pt: Dictionary`), so a missing or renamed key fails the build.
- Every page ships localised `<title>`, description, `hreflang` alternates and
  `MedicalClinic` JSON-LD (`src/components/site/StructuredData.tsx`).
- The switcher (`LanguageSwitcher.tsx`) swaps only the first path segment, so you stay
  on the same page when changing language. Circular flag discs are hand-drawn SVG.

## Design system

`src/app/globals.css` holds the whole system as Tailwind v4 `@theme` tokens and
`@utility` classes:

- **Palette** — warm ivory surfaces, warm-plum ink (`#3a2b3f`, never black), coral /
  rose / lilac / mint / sky / amber ramps.
- **Type** — Bricolage Grotesque (display), Fraunces (serif italic accents), Plus Jakarta
  Sans (body). Fluid `text-display / h1 / h2 / h3 / lead` scales; the hero scale is
  additionally capped by `svh` so the hero always fits one screen.
- **Shapes** — `shape-arch`, `shape-arch-soft`, `shape-leaf`, `shape-leaf-alt`,
  `shape-blob`, `shape-ticket`, `shape-petal`, `shape-hex`, `shape-squircle`.
- **Elevation** — warm-tinted `shadow-soft / lift / float / halo` plus glass utilities.
- **Motion** — float, drift, spin, pulse-ring, marquee keyframes; everything collapses
  under `prefers-reduced-motion`.

## Components worth knowing

| File | What it does |
| --- | --- |
| `components/icons/Glyph.tsx` | 50-icon custom set drawn on one 48×48 grid |
| `components/ui/IconOrb.tsx` | The circular icon container: gradient disc, specular highlight, conic halo, pulse ring — sizes up to 168px |
| `components/ui/Media.tsx` | `next/image` frame with shaped silhouettes, LQIP blur, colour wash; `position="cover"` fills a positioned parent |
| `components/ui/TiltCard.tsx` | Pointer-tracked 3D tilt with a sheen that follows the cursor |
| `components/ui/Motion.tsx` | Counter, scroll progress, parallax, marquee, magnetic wrapper |
| `components/site/Header.tsx` | 144px-tall header: utility strip, glass card bar, card mega-menu, full-screen mobile sheet |
| `components/site/Logo.tsx` | Petal "A" cut by a developer slash — feminine, dynamic, legible at 20px |

## Media pipeline

- `public/images/*` — 39 photographs, downloaded and curated for a bright, warm read.
- `src/lib/images.ts` — generated manifest with each asset's intrinsic size and a base64
  LQIP placeholder, so every `<Image>` blurs up without layout shift.
- `public/video/hero-loop.mp4` — 18s Ken Burns cross-dissolve built from four clinic
  stills (ffmpeg), plus `hero-poster.jpg`.
- `public/video/aurora-loop.mp4` — generated pastel light loop, blended over the lounge
  photo with `mix-blend-soft-light` in the "Why Aurélia" section.
- `src/lib/techIcons.ts` — brand glyphs extracted from `simple-icons`; near-black brands
  are re-tinted warm so nothing on the page reads as pure black.

## Accessibility & performance notes

- WCAG-minded contrast on warm ink, visible focus rings, skip link, `aria-expanded`
  menus, keyboard-closable overlays, `prefers-reduced-motion` short-circuits in
  `Reveal`, `TiltCard`, `Parallax`, `SmoothScroll` and the hero video.
- Server components everywhere except the interactive islands; images are sized with
  explicit `sizes`; the hero photo/poster is preloaded.
- `sitemap.ts` and `robots.ts` cover all 18 localized routes.

## Notes

The contact form is front-end only — validation and the success state are real, but
there is no backend endpoint wired up in this portfolio build. Photography is from
Unsplash; clinic name, team and reviews are fictional.
