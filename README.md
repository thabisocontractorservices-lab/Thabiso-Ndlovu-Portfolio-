# Thabiso Gift Ndlovu — AI Systems (Framer-style)

Personal site for **Thabiso Gift Ndlovu** — AI systems strategist & startup builder.

Dark, premium aesthetic inspired by Framer's visual language. Positioning: **"When the AI hype fades, systems and fundamentals remain."**

Built with **Next.js 14 (App Router)**, **Tailwind CSS**, **Framer Motion**, and **lucide-react**. Font: **Inter**.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in your values (optional — sensible defaults baked in)
npm run dev                  # http://localhost:3000
```

---

## Structure

```
app/
  layout.tsx        — Inter font, SEO metadata
  page.tsx          — composes all sections
  globals.css       — dark theme tokens + helpers
  sitemap.ts / robots.ts

components/
  Navbar.tsx        — sticky glass nav + mobile menu
  Announce.tsx      — top announcement pill
  Hero.tsx          — headline, CTAs, floating "systems dashboard" mockup, grid + glow bg
  Trust.tsx         — principle chips strip
  Philosophy.tsx    — problem vs approach cards
  Showcase.tsx      — TOOLS CHANGE → SYSTEMS REMAIN gradient panel
  Projects.tsx      — KZNPlumbers, Smart83, AI Systems Research
  About.tsx         — concise bio
  Booking.tsx       — Cal.com scheduler embed (dark iframe)
  CtaBanner.tsx     — closing gradient CTA
  Footer.tsx        — links, socials, mission
  Reveal.tsx        — Framer Motion scroll reveal
  Icon.tsx          — lucide icon registry

lib/
  data.ts           — ALL copy & content lives here
  cn.ts             — clsx helper

public/favicon.svg
```

---

## Customizing

- **Copy & content** → `lib/data.ts`
- **Colors / theme** → `tailwind.config.ts` (the `bg`, `fg`, `blue`, etc. tokens) and `app/globals.css`
- **Booking link** → set `NEXT_PUBLIC_BOOKING_URL` (defaults to your Cal.com 30-min link); the iframe auto-applies the dark theme
- **Socials** → `NEXT_PUBLIC_LINKEDIN_URL`, `NEXT_PUBLIC_GITHUB_URL`

### Environment variables

| Variable | Example |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://thabisondlovu.co.za` |
| `NEXT_PUBLIC_BOOKING_URL` | `https://cal.com/thabiso-ndlovu/30min?overlayCalendar=true` |
| `NEXT_PUBLIC_LINKEDIN_URL` | `https://www.linkedin.com/in/thabisogiftndlovu` |
| `NEXT_PUBLIC_GITHUB_URL` | `https://github.com/thabisocontractorservices-lab` |

---

## Replace your existing live site (GitHub → Vercel)

This is built to drop straight into your existing repo and auto-deploy to `thabisondlovu.co.za`.

```bash
# 1. unzip this project somewhere
unzip thabiso-ndlovu-framer-nextjs.zip
cd portfolio-framer-nextjs

# 2. copy the files OVER your existing local repo clone
#    (replace the old project files with these). If starting fresh:
#    git clone https://github.com/thabisocontractorservices-lab/Thabisou-Ndlovu-Portfolio-.git
#    then copy these files in, overwriting the old ones.

# 3. commit & push
git add .
git commit -m "Relaunch: Framer-style AI systems site"
git push
```

Vercel auto-deploys on push (~90s). Your env vars in Vercel already carry over; the defaults in the code mean it works even without them.

> Tip: delete the old project's stale files that aren't part of this one (old components, etc.) so the repo stays clean — or just replace the whole working tree with this project's contents, keeping your existing `.git` folder.

### Or ship as a brand-new project
Create a new repo, push, import in Vercel, add the env vars, point a domain.

---

## Scripts

```bash
npm run dev          # development
npm run build        # production build
npm run start        # run production build
npm run lint         # lint
npm run type-check   # tsc --noEmit
```

---

_clarity > hype · systems > tools · Johannesburg, South Africa._
