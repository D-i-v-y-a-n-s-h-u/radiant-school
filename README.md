# Radiant International School — Website

A premium marketing site for a CBSE international school, built with:

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v4** (CSS-first `@theme` config, no `tailwind.config.js` needed)
- Plain **JavaScript** (no TypeScript)
- **next-themes** for light/dark mode
- Zero external UI/animation libraries — all motion is CSS + `IntersectionObserver`

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

> Note: the first run needs internet access once so Next.js can fetch the
> Fraunces & Inter font files from Google Fonts (`next/font/google`). After
> that they're cached locally and self-hosted by Next.js — no runtime
> requests to Google are made in the browser.

## Project structure

```
app/
  layout.js         Root layout, fonts, metadata
  page.js            Composes every section for the homepage
  providers.js        next-themes ThemeProvider wrapper
  globals.css         Design tokens (@theme), keyframes, utility classes
components/
  Navbar.jsx           Sticky glass navbar, mobile drawer, ERP login
  Hero.jsx             Full-bleed hero, floating gradients, wave divider
  TrustBar.jsx         Animated stat counters + accreditation marquee
  About.jsx            School narrative + highlight list
  WhyChooseUs.jsx      6 premium feature cards
  Academics.jsx        Tabbed curriculum stages (Early Years → Senior)
  Facilities.jsx       Image grid of campus facilities
  Gallery.jsx          Masonry gallery with lightbox preview
  Testimonials.jsx     Rotating parent/student/alumni quotes
  Admissions.jsx       4-step process + enquiry form
  Contact.jsx          Contact details + stylised map card
  Footer.jsx           Links, newsletter signup, socials
  ThemeToggle.jsx      Light/dark switch (sun/moon slider)
hooks/
  useReveal.js         IntersectionObserver-driven scroll-reveal hook
public/images/
  *.svg                Locally generated placeholder artwork
                        (hero, about, gallery, facilities) — swap these
                        for real photography whenever it's ready.
```

## Design system

- **Color:** amber `#d97706` primary on a pure white light mode; a
  purpose-built dark mode (`#09090B` background, `#18181B` cards) — not an
  inverted palette.
- **Type:** Fraunces (display/serif, used sparingly for headings and the
  crest wordmark) paired with Inter (body/UI).
- **Motion:** CSS keyframes (`fade-up`, `slide-left/right`, `scale-in`,
  `float`, `glow`) triggered by the `useReveal` hook watching
  `data-reveal` attributes — no Framer Motion / GSAP.
- **Signature element:** the shield "RIS" crest monogram, reused across the
  navbar and footer as the brand's heritage mark.

## Swapping in real photography

All imagery lives in `public/images/` as lightweight SVG placeholders so the
project needs zero external image hosts. To use real photos, drop JPG/PNG/WebP
files into `public/images/` and update the `src` paths in `Hero.jsx`,
`About.jsx`, `Facilities.jsx`, and `Gallery.jsx`.
