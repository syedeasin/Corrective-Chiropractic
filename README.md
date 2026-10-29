# Corrective Chiropractic — landing site

Astro 5 static site, deploys to Cloudflare Pages. Built from the Figma file (Landing, Thank you, Style Guide, Components).

## Run it

Needs Node 18.20+ (20 or 22 recommended).

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in ./dist
npm run preview    # serve ./dist
npm run preview:cf # build + run with the Cloudflare form function (wrangler)
```

In WebStorm: open the folder, let it run `npm install`, then use the `dev` script from the npm tool window.

## Fonts

Kiona (headings, buttons) and Helvetica Neue (body) are licensed files, so they are not included.
Drop them into `public/fonts/` with these names (convert to .woff2 if needed):

- `Kiona-Regular.woff2`, `Kiona-SemiBold.woff2`
- `HelveticaNeue-Regular.woff2`, `HelveticaNeue-Italic.woff2`, `HelveticaNeue-Medium.woff2`, `HelveticaNeue-Bold.woff2`, `HelveticaNeue-BoldItalic.woff2`

Until then the site uses locally installed copies if your machine has them, otherwise Josefin Sans and Inter.
Once Kiona is in place, uncomment the preload in `src/layouts/BaseLayout.astro`.

## Where things live

- `src/data/site.ts` — phone, email, address, hours, rating, map links. Edit once, updates everywhere.
- `src/styles/global.css` — colour tokens, type scale, breakpoints (mobile < 768, tablet 768–1023, laptop 1024–1679 / 1280 max, desktop ≥ 1680 / 1600 max).
- `src/components/sections/` — one file per landing section, in page order in `src/pages/index.astro`.
- `src/components/ui/` — Button, CallCta, Icon, Rating, Stars, VideoModal.
- `src/assets/images/` — source images, all WebP (Astro makes responsive sizes at build time).
- `src/data/media.ts` — hero, thank-you and session video URLs (currently placeholders from the South Charlotte page).
- `src/components/ui/VideoPlayer.astro` — inline autoplay video with play/pause, replay and sound buttons.
- `functions/api/lead.ts` — Cloudflare Pages Function that receives the coverage form.

## Form / leads

The form posts to `/api/lead`. The function validates it and forwards JSON to `LEAD_WEBHOOK_URL`
(Zapier, Make, GoHighLevel, etc.), then sends the visitor to `/thank-you`.
Set `LEAD_WEBHOOK_URL` in Cloudflare → Pages → project → Settings → Variables (for local `preview:cf`, put it in `.dev.vars`).
In `npm run dev` the function doesn't exist, so the form just goes straight to `/thank-you`.

## Deploy (Cloudflare Pages)

Connect the repo in Cloudflare Pages with build command `npm run build` and output `dist`, or run `npm run deploy`.
The `functions/` folder is picked up automatically.

## Content TODOs

- Videos: swap the placeholder URLs in `src/data/media.ts` for the Newberry clips (session names/dates in `Sessions.astro` are design placeholders).
- Privacy policy and terms pages are placeholders.
- High-res Figma sources live on the `figma-raw-assets` branch (`design/`).
