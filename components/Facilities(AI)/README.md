# Facilities Carousel — Setup

## Files
```
components/Facilities/
  ├─ FacilitiesCarousel.jsx   ← main component (client component, drop it anywhere)
  ├─ FacilityCard.jsx         ← single card UI
  └─ facilitiesData.js        ← YOUR DATA — add 20-50 facilities here, nothing else changes
app/page-example.jsx          ← shows how to import + use it
```

Copy the `components/Facilities` folder into your project (adjust the import
alias `@/components/...` to match your `jsconfig.json` / `tsconfig.json`
paths, or use a relative import instead).

## Images
Put your facility images in:
```
public/facilities/pool.jpg
public/facilities/gym.jpg
public/facilities/library.jpg
... etc
```
Reference them in `facilitiesData.js` as `/facilities/your-image.jpg`
(no `public` in the path — Next.js serves everything under `public/` from `/`).

Recommended: 16:9 or 4:3 images, at least 800px wide, compressed
(WebP/AVIF or optimized JPG) — `next/image` will further optimize and
lazy-load them automatically.

## Adding more facilities
Just add objects to the array in `facilitiesData.js`:
```js
{
  id: "new-facility",
  title: "New Facility Name",
  description: "One or two lines describing it.",
  image: "/facilities/new-facility.jpg",
},
```
No changes are ever needed in `FacilitiesCarousel.jsx` or `FacilityCard.jsx`.

## How the animation works (no external library used)
- The track is rendered 3× in a row (`[...facilities, ...facilities, ...facilities]`),
  so there's always a full screen of cards ready off-canvas in both directions.
- A single `requestAnimationFrame` loop shifts the track via
  `transform: translate3d(x, 0, 0)` every frame — this is GPU-accelerated and
  stays smooth at 60 FPS, and it's what lets us "pause" and "resume from the
  exact same position": pausing just stops incrementing `x`, so there is no
  restart/jump when it resumes.
- **Hover (desktop):** `onMouseEnter` / `onMouseLeave` pause and resume
  instantly.
- **Touch / drag (mobile & desktop):** Pointer events (`onPointerDown/Move/Up`)
  let the user grab and drag the track directly. While dragging, the
  auto-scroll increment is skipped and `x` is driven by finger/pointer
  position instead. On release, auto-scroll resumes automatically after
  2.5s (`RESUME_DELAY` in `FacilitiesCarousel.jsx`).
- Offsets wrap with simple modulo-style math once they pass one full set's
  width, which is invisible to the eye since the three sets are identical —
  this is what makes the scroll feel infinite instead of "jumping card by
  card" at a boundary.

You can tune the speed via the `SPEED` constant (pixels/second) and the
resume delay via `RESUME_DELAY` (milliseconds) at the top of
`FacilitiesCarousel.jsx`.

## Tailwind requirements
- Tailwind CSS v3.3+ is required (for the built-in `line-clamp-3` utility
  used in the card description — no plugin needed on v3.3+).
- No `tailwind.config` changes needed beyond your existing setup.

## No paid library was used
Everything here is plain React + Tailwind + the native Pointer Events API,
so there's nothing to install. If you'd ever prefer to hand off the
drag/swipe/snap mechanics to a maintained library instead of the custom
`requestAnimationFrame` logic above, the best lightweight, free option is:

```bash
npm install embla-carousel-react
```

Embla is ~6kb gzipped, has no paid tier, and supports autoplay + free-drag
plugins if you want to swap the engine later — but for the "infinite,
continuously-scrolling, resumes-from-exact-position" behavior you asked
for, the custom implementation above gives you more precise control than
Embla's autoplay plugin does out of the box.
