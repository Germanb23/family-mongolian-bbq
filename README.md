# Family Mongolian BBQ — website

Static, conversion-focused website for **Family Mongolian BBQ**, 2321 Tapo St Suite G, Simi Valley, CA 93063. Built with [Astro](https://astro.build) (no client framework, no tracking, no third-party scripts).

> **Live (free public subdomain, owner-authorized Sept 17, 2026):** https://germanb23.github.io/family-mongolian-bbq/ — GitHub Pages, served from the `gh-pages` branch of `Germanb23/family-mongolian-bbq` (HTTPS enforced). No custom domain is connected. Open owner items remain in `docs/business-intake-and-facts.md` §5.

## Quick start

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # static output in dist/
npm run preview      # serve dist/
npm run check        # Astro/TypeScript diagnostics
npm run check:links  # verify internal + external links in dist/ (after build)
```

Node 20+ (built with Node 26).

## Where things live

| Path | Purpose |
|---|---|
| `src/data/business.ts` | **Single source of business facts**: name, address, phone, hours, ordering URLs, directions link, rating proof, unconfirmed items. |
| `src/data/menu.ts` | **Menu**: categories, codes, items, condensed descriptions, Toast pickup price + DoorDash price, tags, photo links, pricing disclosure. |
| `src/data/photos.ts` | Landscape/place photo registry (alt text, master file, identification confidence). |
| `src/data/portraits.ts` | Portrait photo registry: which menu item each portrait was matched to, or why it is unresolved. |
| `src/pages/` | `index` (home: hero, grill, highlights, experience, proof, visit, CTA), `menu`, `404`. |
| `src/layouts/BaseLayout.astro` | HTML shell, SEO meta, schema.org Restaurant JSON-LD, header/footer, sticky mobile bar, reveal + open-status scripts. |
| `src/components/` | `Hero` (poster-first, silent autoplay loop), `Gallery` (drag/swipe track + viewer), `PhotoViewer` (shared expanded-image dialog), `DishDialog`, `MenuList` (sticky category nav, scroll-spy, portrait thumbnails), `StickyOrderBar`, `HoursTable`, `FoodPhoto`, `Wordmark`, `Header`, `Footer`, `Icons`. |
| `public/media/` | Hero derivatives: `hero-loop-1080.mp4`, `hero-loop-720.mp4` (muted, seamless loop via a 0.7 s dissolve to the first frame), `hero-poster.jpg`, `hero-poster-960.jpg`. |
| `public/img/food/`, `public/img/place/`, `public/img/portrait/` | WebP derivatives of owner photography: landscape food (1600/900/480 w), place photos, and the portrait set (941/600 w full frame + 480/240 square thumbnails). |
| `assets-master/` | Full-resolution masters (git-ignored, ~360 MB). Owner folder + food shoot. |
| `docs/` | `business-intake-and-facts.md`, `asset-manifest.md`, `creative-direction.md`, `source-research.md`. |

## Editing content
- **Hours or phone changed?** Edit `src/data/business.ts` only.
- **Menu or prices changed?** Edit `src/data/menu.ts`. `price` is the Toast pickup starting price; `doordash` the DoorDash Good Meal price.
- **New photo?** Put the master in `assets-master/food/`, regenerate derivatives (below), register it in `src/data/photos.ts` with real alt text, and link it from a menu item via `photo`.

## Regenerating media derivatives
Images (Pillow) and video (ffmpeg from `imageio-ffmpeg`) were generated with one-off Python/ffmpeg commands recorded in `docs/asset-manifest.md`. Equivalent commands:

```bash
python -m pip install --user Pillow imageio-ffmpeg
# video (from the project root)
FF=$(python -c "import imageio_ffmpeg;print(imageio_ffmpeg.get_ffmpeg_exe())")
# 1) first frame at full resolution; 2) clip + 0.7 s dissolve back to that frame (offset = duration − 0.7), scaled to 1080p (repeat with scale=1280:-2 / crf 26 for 720p). Posters: first.jpg scaled to 1920 and 960 wide.
"$FF" -ss 0 -i "assets-master/owner/FMB Hero 2.0.mp4" -frames:v 1 -q:v 2 first.jpg
"$FF" -i "assets-master/owner/FMB Hero 2.0.mp4" -loop 1 -t 0.8 -i first.jpg -filter_complex "[1:v]scale=3832:2160,format=yuv420p,setsar=1,fps=30[b];[0:v]format=yuv420p,setsar=1[a];[a][b]xfade=transition=fade:duration=0.7:offset=11.05[v];[v]scale=1920:-2[v1]" -map "[v1]" -an -c:v libx264 -preset slow -crf 24 -pix_fmt yuv420p -movflags +faststart public/media/hero-loop-1080.mp4
```

## Deploying (GitHub Pages)
Source lives on `main`; the built site is force-pushed to the orphan `gh-pages` branch. The site is served from the sub-path `/family-mongolian-bbq/`, so builds must set the base path (Windows Git Bash needs `MSYS_NO_PATHCONV=1`).

```bash
MSYS_NO_PATHCONV=1 BASE_PATH=/family-mongolian-bbq SITE_URL=https://germanb23.github.io npm run build
```

```bash
cd dist && touch .nojekyll && git init -b gh-pages && git add -A && git commit -m "Deploy site build" && git push --force https://github.com/Germanb23/family-mongolian-bbq.git gh-pages && cd .. && rm -rf dist/.git
```

GitHub Pages rebuilds within about a minute. To attach a custom domain later: add a `CNAME` file to `public/`, set the domain under the repo's Settings → Pages, point DNS at GitHub Pages, enable "Enforce HTTPS", and rebuild with `BASE_PATH` unset and `SITE_URL` set to the domain.
