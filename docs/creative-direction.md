# Creative Direction — Family Mongolian BBQ

## Creative World Statement
A neighborhood grill house on Tapo Street that has fed Simi Valley since 2013. The world is the actual room: long rows of **navy tufted booths**, **amber stained-glass pendants** hanging from brass rods, cream floor tile, wood-trimmed partitions, and the stainless **grill station and sauce bar** along the back wall — reached through a **Spanish-tile arched storefront** that glows at dusk. The food is photographed on white marble under clean light, so the plates read as honest and generous rather than styled. Nothing on the site should feel like a franchise template; every color and material comes from a photo the owner supplied.

**In the first three seconds a visitor should understand:** this is a real Mongolian BBQ restaurant in Simi Valley, the video is the actual entrance and dining room, and there is one obvious red button to order.

**The memorable first moment:** the hero video's approach — parking lot → lanterns and sign → open door → the room of blue booths under amber lamps — with the big red FAMILY wordmark sitting on it exactly like the sign.

**The real experience the design anchors on:** the grill. A visitor builds a bowl at the bar (the overhead ingredient flat-lay shows it exactly) and the kitchen fires it. That is the signature; the Chinese menu is the everyday reason to order online.

**How the page supports confidence and ordering:** verified hours with a live "open now" line, the true address and phone, real photographs of the room and the food, one primary CTA repeated at the moments of intent (hero, after highlights, final band, sticky on mobile), and a menu with honest, contextualized prices.

**What stays calm so the signature moments land:** everything after the hero. Flat marble-white surfaces, one navy section (the grill), cream sections (gallery/visit), staggered reveals, a few pixels of desktop-only parallax on the arrival photos, and a gallery that only moves when the visitor moves it.

## Visual DNA
- **Palette (from the room/sign):** sign red `#c4161c` (primary CTA only), booth navy `#1c3563` / deep `#13264a` (depth sections, header text accents), pendant amber `#f0b040` (small accents on navy; darkened to `#8a5300` when used as text on light), tile cream `#f5efe3`, marble `#faf8f4` (base), wood `#7a4a22` (unused so far, reserved for rules), ink `#1b1a19`.
- **Typography:** Archivo Variable (display; width axis pushed to 112% for the wordmark so it echoes the heavy sign letters) + Inter Variable (body). Headlines are sentence-case and tight; only the wordmark and eyebrows are uppercase.
- **Wordmark:** red FAMILY over tracked MONGOLIAN BBQ — the sign's lockup — as live text (no logo master exists). The cartoon family mark is not reproduced.
- **Materials & depth:** paper-flat surfaces, hairline lines in `#dcd5c9`, one soft shadow for cards, radius 6 / 14 px. No glass, no gradients except the hero scrim.
- **Photography treatment:** food kept on its native marble, cropped 4:3, never color-shifted; place photos uncropped 16:9 with small pill captions. Approved assets are never mirrored, stretched or regenerated.
- **Spacing:** 78 rem container, section padding clamp(4–7.5 rem), 16–40 px gutters.

## Motion DNA
- Speeds: 160 ms (buttons), 220 ms (dialog), 360–520 ms (reveals), 600 ms (video crossfade). Easing `cubic-bezier(0.2, 0.7, 0.2, 1)`.
- Only `opacity` and `transform` animate. Everything honors `prefers-reduced-motion` (reveals instant, video stays a still, transitions off).
- The hero video autoplays silently and loops; the derivative dissolves back to its own first frame so the loop has no cut. No scroll-jacking, no auto-rotating carousels.

## Transition DNA
- Page-to-page (home ↔ menu): 140 ms fade-out, 320 ms fade-and-rise in (Astro view transitions; reverse rise on Back), header persists, disabled under reduced motion.
- In-page: anchor scroll with `scroll-padding-top` for the sticky header; smooth only when motion is allowed.

## Effects DNA
- Hero scrim: navy gradient from the bottom-left so the wordmark and CTA always clear WCAG AA over the video.
- Sticky, blurred header and menu-category bar (backdrop-filter, with opaque fallback color).
- That is the complete list — no particles, no cursors, no WebGL.

## Adaptive architecture (home = single scroll; menu = own page)
1. **Hero** — looping video, wordmark, promise, Order Online + View Menu, open-now line.
2. **Arrival** (`#experience`) — exterior at dusk → open door → dining room, layered under the headline; the scroll story's first chapter.
3. **The Grill** (`#grill`, navy) — build-your-bowl in four steps + bar flat-lay + raw bowl portrait. Dine-in note.
4. **Menu highlights** (`#menu`) — 8 photographed dishes → dish spotlight dialog → full menu / order.
5. **Gallery** (`#gallery`, cream) — drag/swipe track of place and food photographs with the expanded viewer.
6. **What guests say** — DoorDash 4.5 (100+) + three attributed excerpts.
7. **Visit** (`#visit`, cream) — address, directions, phone, hours table with today highlighted.
8. **Final CTA** + footer (address, hours, order, menu).
- **/menu/** — editorial title with two overlapping portraits, sticky category nav, codes, descriptions, confirmed portrait thumbnails, spicy/vegetable tags, pricing disclosure, Menu JSON-LD.
- Navigation: Menu · Experience · The Grill · Gallery · Visit · phone · **Order Online**.

## Interaction Map
| # | Interaction | Trigger / location | Behavior & purpose | Mobile / reduced motion | Fallback & perf | Pass test |
|---|---|---|---|---|---|---|
| 1 | Hero video (silent autoplay loop) | Hero; starts on load | `autoplay muted loop playsinline`, no controls. The derivative dissolves back to its first frame so the loop has no cut. | Phones get 720p (3.4 MB). Reduced-motion/data-saver: poster only. Pauses offscreen / tab hidden. | Poster JPEG under the video; page reads fully with no JS/video. | Video never blocks the CTA; loop seam invisible (last frame ≈ first frame). |
| 2 | Dish spotlight | Click/Enter on a highlight card (`button`, `aria-haspopup="dialog"`) | Native `<dialog>` with big photo, category, description, "from" price and Order button. Helps choose before leaving to DoorDash. | Full-width sheet on phones; 220 ms fade, none under reduced motion. | Without JS the cards are static (no dead click state — the whole grid is still readable); image loads only on open. | Esc/backdrop/Close all close; focus returns to the card. |
| 2b | Menu photo thumbnails | Square thumbnail on each confirmed item (menu page) | Opens the full 941×1672 portrait in the shared viewer. | 88 px thumbs, lazy-loaded; viewer is full-screen on phones. | No JS: thumbnail is a static image. | Only content-verified matches carry a thumbnail. |
| 2c | Gallery | Home `#gallery` | Scroll-snap track: drag (mouse) / swipe (touch) / Prev-Next buttons / arrow keys; every card opens the viewer with Prev/Next and a counter. No auto-rotation. | Cards keep native proportions (fixed height). | No JS: plain horizontal scroll row. | Focus rings on cards and controls; Escape returns focus to the opener. |
| 3 | Menu category navigation | Sticky pill bar on /menu/ | Anchor links + scroll-spy highlight; the bar auto-scrolls the current pill into view. Makes a 100-item menu scannable. | Horizontal scroll with snap on phones. | Plain anchors work without JS. | Every pill lands on its heading below the sticky bars; current pill has `aria-current`. |
| 4 | Sticky mobile order bar | After the hero leaves the viewport (< 60 rem wide) | Order Online + Call always one thumb away; body padding reserved so nothing is covered. | Mobile only; slide-in disabled under reduced motion. | Header button remains on desktop; footer CTA without JS. | Never overlaps content; hidden when the header button is visible. |
| 5 | Open-now status | Hero, Visit hours table | Computes "Open now · closes 9 PM" / "opens tomorrow at 11 AM" in America/Los_Angeles and marks today's row. Text, never color alone. | Same everywhere. | Static hours line shown when JS is absent. | Correct across day boundaries and the Fri/Sat 9:30 close. |
| — | Reveal-on-scroll | Sections | Single 14 px rise + fade; 2.5 s safety so nothing stays hidden. | Off under reduced motion. | CSS only when no JS. | No content ever hidden. |

## Editorial titles & layering
- Home hero: the sign wordmark. Arrival: "Park out front. Walk into the glow." with a ghost TAPO ST outline beside the exterior photo (text and photos in separate columns, no overlap). Grill: "You build the bowl. We fire the grill." with a ghost GRILL and the raw-bowl portrait stacked below the bar flat-lay. Menu page: "Wok-fired on Tapo Street since 2013." with two portraits overlapping the headline. Ghost words are aria-hidden outlines; real headings are plain HTML text above everything.
- Page transitions: 140 ms fade-out, 320 ms fade-in + 12 px rise (reverse direction on Back); header persists; instant under reduced motion.
- Scroll story: staggered reveals (--i × 70 ms), desktop-only parallax on the three arrival photos and menu title art (≤ 26 px, paused offscreen), none under reduced motion.

## Mobile strategy & performance risks
- Hero: `min-height: min(90svh, 58rem)`, video object-position 42% so the sign stays framed in portrait; 720p file on phones; poster 960 px.
- Cards 1 → 2 → 4 columns; menu items 1 → 2 columns; hours table full width; 48 px touch targets; 16 px gutters.
- Risks: the 1080p hero is 8.2 MB for 11.8 s (desktop only, `preload=auto` after load; poster covers the wait); food WebPs ~100–200 KB at 1600 w (served 480/900 on phones via `sizes`). Fonts are self-hosted (Fontsource). No third-party scripts.
