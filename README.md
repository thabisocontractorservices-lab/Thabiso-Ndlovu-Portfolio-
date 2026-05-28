# Thabiso Gift Ndlovu — Portfolio

Personal portfolio site for **Thabiso Gift Ndlovu** — marketer, AI builder, and SaaS founder.

Built with **Next.js 14 App Router**, **Tailwind CSS**, **Framer Motion**, **next-themes**, and **lucide-react**.

---

## Quick start

```bash
# 1. install deps
npm install
# or pnpm install / yarn / bun install

# 2. copy env template and customize
cp .env.example .env.local

# 3. run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## What's inside

```
app/
  layout.tsx        — root layout, fonts, theme provider, SEO metadata
  page.tsx          — composes all sections into the home page
  globals.css       — design tokens (CSS variables) for light & dark themes
  sitemap.ts        — auto-generated sitemap.xml
  robots.ts         — auto-generated robots.txt

components/
  Navbar.tsx        — sticky glass navbar with mobile menu + theme toggle
  Hero.tsx          — headline, CTAs, floating UI mockup cards, animated grid bg
  About.tsx         — bio, tags, animated counters, status visual card
  Projects.tsx      — filterable project grid
  ProjectCard.tsx   — single project card with status badge + progress bar
  Services.tsx      — six service cards with lucide icons
  Booking.tsx       — Calendly placeholder + mock day/slot picker
  Now.tsx           — founder status journal with timeline + weekly checklist
  Insights.tsx      — content card grid for future blog posts
  Testimonials.tsx  — placeholder testimonial cards
  Contact.tsx       — contact form with info rows + newsletter side panel
  Newsletter.tsx    — newsletter signup card
  Footer.tsx        — 4-column footer with socials, sitemap, studio links
  ThemeToggle.tsx   — sun/moon theme toggle
  ThemeProvider.tsx — next-themes wrapper
  SectionReveal.tsx — Framer Motion section reveal wrapper
  AnimatedCounter.tsx — counts up to a target when scrolled into view

lib/
  data.ts           — ALL site copy & content (edit here to update the site)
  cn.ts             — clsx wrapper helper

public/
  favicon.svg       — placeholder favicon

.env.example        — env var template (copy to .env.local)
tailwind.config.ts  — Tailwind config with custom color/shadow/animation tokens
```

---

## Customizing the site

### 1. Update copy & content
**All site copy lives in [`lib/data.ts`](./lib/data.ts).** Edit that file to:
- Change project descriptions / status / progress
- Update services
- Edit the /now timeline
- Add or remove insight cards
- Swap testimonials

### 2. Set environment variables
Copy `.env.example` to `.env.local` and fill in real values:

```bash
NEXT_PUBLIC_SITE_URL=https://thabisogiftndlovu.com
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-handle/intro
NEXT_PUBLIC_CONTACT_EMAIL=hello@thabisogiftndlovu.com
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/your-handle
NEXT_PUBLIC_X_URL=https://x.com/your-handle
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-handle
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/your-handle
```

These flow into `lib/data.ts` (with sane fallbacks).

### 3. Wire the contact form
The form in `components/Contact.tsx` currently just shows a "Sent — placeholder" state.
To make it real, add a handler in the `onSubmit`. Recommended options:
- **Resend** (their `resend.emails.send` is one fetch call)
- **Formspree** (drop-in `action=` URL)
- **Buttondown / Beehiiv** for the newsletter
- A Next.js Route Handler at `app/api/contact/route.ts` for full control

### 4. Wire the newsletter
Same drill in `components/Newsletter.tsx` — replace the placeholder `onSubmit`.

### 5. Embed Calendly (for real)
You have two options:
- **Set `NEXT_PUBLIC_CALENDLY_URL`** — the "Open scheduler" button will open it in a new tab.
- **Inline embed** — install `react-calendly` and replace the mock day/slot grid in `components/Booking.tsx`:
  ```tsx
  import { InlineWidget } from "react-calendly";
  // …
  <InlineWidget url={process.env.NEXT_PUBLIC_CALENDLY_URL!} />
  ```

### 6. Replace the favicon & open graph image
- Swap `public/favicon.svg` with your own mark
- Add `public/og.png` (1200×630) and reference it in `app/layout.tsx` metadata.openGraph.images

---

## Design system

Tokens live in `app/globals.css` as CSS variables — both light and dark themes are defined there. Tailwind config (`tailwind.config.ts`) maps them to utility classes like `bg-bg`, `text-fg`, `border-border`, `text-accent`, etc.

Typography is set with `next/font/google`:
- **Geist** — body & UI
- **Geist Mono** — labels, eyebrows, technical bits
- **Instrument Serif (italic)** — accent flourishes in headlines

Motion vocabulary:
- Section reveals: opacity + 24px Y, cubic-bezier(0.16, 1, 0.3, 1), 0.9s
- Hover lifts: translateY(-1 to -4px), 0.25-0.3s ease
- Progress bars: width animates from 0 on intersection, 1.4s
- Subtle floats (hero mockups): 6s ease-in-out infinite

---

## Deploy to Vercel

```bash
# install Vercel CLI if needed
npm i -g vercel

# from the project root:
vercel
```

Or connect this repo to Vercel via the dashboard — Vercel auto-detects Next.js and ships it on push.

Don't forget to add the `NEXT_PUBLIC_*` env vars to your Vercel project settings.

---

## Scripts

```bash
npm run dev          # next dev (development)
npm run build        # next build (production build)
npm run start        # next start (run production server)
npm run lint         # next lint
npm run type-check   # tsc --noEmit
```

---

## License

All copy, branding, and visual design are © Thabiso Gift Ndlovu. The code structure is yours to use, modify, and deploy.

---

_Built with intent — Johannesburg, South Africa._
