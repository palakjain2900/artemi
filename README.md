# Artemi (artemi.in), redesign

B2B SaaS content agency site: expert-led content and AI search visibility.
Built with [Astro](https://astro.build) as a static site and hosted on Vercel.

## Where things live

| What | File |
|---|---|
| Integration IDs (Tally, Calendly, GA4, Clarity), LinkedIn, service details | `src/config/site.ts` |
| Colours, fonts, grid ("Redline" design system) | `src/styles/global.css` |
| Shared header, footer and components | `src/components/` |
| Pages | `src/pages/` (one file per page; the four service pages share `src/pages/services/[slug].astro`) |
| SEO tags, structured data, analytics, event tracking | `src/layouts/Base.astro` |
| robots.txt, favicon, share image, founder photo | `public/` |
| Redirects (`/portfolio.html` → `/work`) and Vercel build settings | `vercel.json` |

## Placeholders

Anything not final is wrapped in `<Placeholder>` and shows on the page with a pink
**[PLACEHOLDER]** highlight. After every build, `scripts/check-placeholders.mjs` lists
every remaining placeholder, including unset IDs in `src/config/site.ts` and the
placeholder founder photo.

- **Preview deployments:** the list is printed and the build continues.
- **Production deployments:** the build **fails** while anything is on the list, so
  placeholder content cannot reach artemi.in.

## Tracked events (GA4 + Clarity)

| Event | When |
|---|---|
| `cta_click` | Any primary CTA click (label and location included) |
| `book_call_click` | Any "Book a call" click |
| `report_form_submit` | Tally form submitted on `/ai-visibility-report` |
| `book_call_scheduled` | A meeting is booked in the Calendly embed |

## Commands

```bash
npm install          # first time only
npm run dev          # local preview at http://localhost:4321
npm run build        # build + placeholder check
npm run check:placeholders -- --strict   # fail like production would
```
