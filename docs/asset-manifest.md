# Asset Inventory & Missing Asset Plan

Masters live in two places (not in git — `assets-master/` is git-ignored):
- Owner folder: `C:\Users\becer\OneDrive\Pictures\Screenshots\FMB website pic\` (copied unchanged to `assets-master/owner/`).
- Food shoot: 32 JPGs attached to the brief, recovered from the app's temp folder and copied to `assets-master/food/` (plus `walnut shrimp.jpg` / `wonton.png` from the owner's `food pics` subfolder).

Web derivatives are generated with Pillow (WebP q82, widths 1600/900/480, 4:3 center crop for food) into `public/img/`, and with ffmpeg (bundled via imageio-ffmpeg) into `public/media/`. Re-run instructions are in the README.

Classes: **A** hero/primary story · **B** section support · **C** detail/proof · **D** mobile-specific · **E** poster/static fallback · **F** replace or exclude.

## 1. Locked / official owner assets

| File (owner name) | Type · dims · size | Content | Status | Class | Used as | Notes |
|---|---|---|---|---|---|---|
| `FMB Hero 2.0.mp4` (replaces `FMB hero vid.mp4`, Sept 22, 2026) | MP4 H.264 · **3832×2160 · 30 fps · 11.75 s** · 37.1 MB · AAC stereo audio | Single shot, slower: parking lot → arched entrance → open door → dining room (booths, pendants) | **Locked** | A | Hero video | Not 4K UHD (3832 wide, DAR 479:270) and not 20 s. Last frame ≠ first frame, so a raw loop would cut. Derivatives (see "Hero loop derivative" below): `hero-loop-1080.mp4` 8.2 MB (≥900 px), `hero-loop-720.mp4` 3.4 MB (phones), both **muted**, each ending in a 0.7 s dissolve to the first frame so `loop` is seamless; `hero-poster.jpg` (frame 0, 1920 w) + `hero-poster-960.jpg`. |
| `official skydrone .png` | PNG · 1295×729 | Wide evening exterior, tile roof, arches, lit lanterns, tinted windows, current sign | **Locked** (owner's "sky drone image") | A/E | Experience section (full width); Open Graph image | On disk this is a 1295×729 screenshot-size export, not the 1672×941 `fmb-exterior-evening-tinted-v2.png` the blueprint names. Fine for section use; the hero uses the video's own 4K first frame (same scene) as poster. AI-edited: sign lettering/QR not readable — nothing factual taken from it. |
| `official store front.png` | PNG · 1297×731 | Evening entrance, open door, warm interior glow, printed HOURS sign, "805" and Corona Light window signs | **Locked** | B | Experience section | The hours sign (Sun–Thu 11–9, Fri–Sat 11–9:30) corroborates the Yelp screenshot. |
| `FMB interior official` (no extension, JPEG) | JPEG · **1672×941** | Dining room, **plain white ceiling**, center aisle, navy booths, amber pendants, grill station right | Designated official by owner | A | Experience section (largest image) | ⚠ Blueprint describes `fmb-interior-official.jpg` as "the originally supplied interior file, copied unchanged" and the plain-ceiling/aisle version as a *later commercial edit*. On disk the file the owner named "official" is the plain-ceiling/aisle edit. Used as-is; **owner to confirm**. |
| `Official interior image.png` | PNG · 1299×726 | Same scene as above, smaller export | Duplicate | F | — | Not used (lower resolution duplicate). |
| `interior` (no extension, PNG) | PNG · 1672×941 | Same room with **cloud-pattern ceiling** (= `fmb-interior-commercial.png`) | Candidate | F | — | Not used: the owner's "official" file has the plain ceiling; mixing ceilings is prohibited. |
| `fmb-exterior-premium.png` | PNG · 1672×941 | Daytime exterior with the **old oval "Family Mongolian BBQ" sign** | Superseded | F | — | Shows outdated signage (see `updated signs.png`). Excluded. |
| `fmb exterior.png` | PNG · 1488×814 | Daytime exterior, old sign (listing screenshot with UI chrome) | Reference | F | — | Excluded (old sign, UI chrome). |
| `updated signs.png` | PNG · 578×122 | Photo of the two current sign panels (red FAMILY / MONGOLIAN BBQ + cartoon family mark) | Reference | C | Wordmark reference only | Too small to publish; defines the wordmark colors/lockup. |
| `FMB yelp.png` | PNG · 1232×672 | Yelp listing screenshot: phone, address, hours | Internal reference | F | — | Never used as artwork. |
| `fmd exterior drone.jpg`, `fmd exterior door.jpg` | JPEG · 5712×4284 | Real daytime phone photos: exterior wide; a staff member holding the door | Real source photos | C (held) | — | Not used (daytime, person visible without release, evening set is the approved look). Retained. |
| `center/left/right interior*.jpg` (6 files) | JPEG · 5712×4284 | Real daytime interior phone photos (grill station, sauce bar, booths, exit) | Real source photos | C (held) | — | Not used; the approved edited interior covers the room. Could support a future "behind the counter" gallery. |
| `fmb interior center/left/right.png` | PNG · ~1109×834 / 628×831 | Listing screenshots of interior photos (cloud ceiling, UI chrome) | Reference | F | — | Excluded. |

## 2. Owner food photography (professional shoot, Sony ILCE-6700, Lightroom, marble surface)

All 6192×4128 (a few slightly cropped), 7–17 MB each. Class **B/C** unless noted. "Confidence" = how surely the dish name was established from the owner's file code + a visual check against the verified menus.

| Master | Web id | Identified as | Confidence | Used |
|---|---|---|---|---|
| A2.jpg | wings | A2 Fried Chicken Wings | High | Menu highlight-ready |
| A3.jpg | fried-shrimp | A3 Fried Shrimp | High | — |
| A4.jpg | pot-stickers | A4 Pot Stickers | High | **Home highlight** |
| A5.jpg | spring-rolls | A5 Vegetable Spring Rolls | High | — |
| A6.jpg | pocket-bread | Pocket Bread (DoorDash A5+) | High | — |
| B1-2.jpg | beef-broccoli | B1 Beef Broccoli | High | — |
| B4.jpg | mongolian-beef | B7 Mongolian Beef (DoorDash B4+) | High (visual: onions + scallions) | **Home highlight** |
| C1.jpg | cashew-chicken | C1 Cashew Chicken | High | — |
| C2.jpg | mongolian-chicken | Mongolian Chicken? | **Medium** — file code C2 = Chicken Broccoli on Toast; visual = onion/scallion stir-fry | Not captioned |
| C3.jpg, C3-2.jpg | kung-pao-chicken(-alt) | C11 Kung Pao Chicken (DoorDash C2+) | High (peanuts, dried chilies) | **Home highlight** |
| C4.jpg | orange-chicken | C14 Orange Chicken | High | **Home highlight** |
| CS3.jpg | cumin-beef | CS1 Cumin Beef | High (cumin, jalapeño, cilantro) | **Home highlight** |
| S3.jpg | hot-chili-garlic-fillet | S3 Fish Fillet in Hot Chili Bean Sauce? | **Medium** | Not captioned |
| EF1.jpg | egg-foo-young | Egg Foo Young (plate shows chicken + mixed veg) | **Medium** (which variant) | Not captioned |
| P2.jpg | moo-shu | P3 Moo Shu Pork? (pancakes + hoisin) | **Medium** | Not captioned |
| RN2.jpg | house-pan-fried-noodles | RN2 House Special Pan Fried Noodles | High | **Home highlight** |
| RN4.jpg | house-mei-fun | RN5 House Special Mei Fun? (thin vermicelli, not chow fun) | **Medium** | Not captioned |
| S1.jpg | kung-pao-combination | S1 Kung Pao Combination | High | — |
| S5-2.jpg, walnut shrimp.jpg | walnut-shrimp(-alt) | S15 Walnut Shrimp | High | **Home highlight** |
| SO4.jpg | vegetable-tofu-soup | SO4 Vegetable and Tofu Combination Soup | High | — |
| SoupsArray.jpg | soups-trio | Three soups overhead | High (generic) | — |
| V2.jpg | hot-braised-green-beans | V2 Hot Braised Green Beans | High | **Home highlight** |
| V3.jpg | mapo-tofu | V3 Mapo Tofu | High | — |
| V5.jpg | sauteed-green-beans | V7 Sautéed Green Beans (DoorDash V5+) | High | — |
| MongolianBBQ All Ingridients&Sauces.jpg (+ …Sauce2s) | bbq-bar-ingredients(-alt) | Mongolian BBQ bar overhead flat-lay | High | **Grill section (hero of section)** |
| MonglianBBQIngridientsBowl_PriorToCooking.jpg | bbq-bowl-raw | Raw bowl before the grill | High | **Grill section** |
| NoodlesPic.jpg | bbq-bowl-noodles | Bowl of fresh noodles | High | — |
| CookedFoodArray.jpg, FoodArray2.jpg, FoodArray3.jpg | spread-* | Multi-plate spreads | High (generic) | — (available for social/OG) |
| wonton.png | — | Pot stickers with dipping sauce (1107×738 PNG, listing-style) | Duplicate of A4 subject, low-res | F | Excluded |

Provenance: supplied by the owner as their own commissioned shoot (EXIF: camera + Lightroom, Aug 26 2025). Owner approval establishes project use, not independently documented copyright — **owner to confirm they hold the rights**.

## 2b. Owner PORTRAIT set (attached Sept 17, 2026 as "33 individual portrait PNGs")

The attachment arrived as two packed temp files (the app's attachment cache). Scanning them yielded **52 embedded 941×1672 images**: 27 unique Family Mongolian BBQ portraits, 19 exact/near duplicates of those (PNG vs WebP re-encodes), and 6 unrelated Tacos El Vampiro images from the same cache. So **27 unique FMB portraits were recovered, not 33**. If six further portraits exist, please attach them again as files. Masters: `assets-master/portrait/<id>.png`; extraction originals: `assets-master/portrait-attachments/extracted/p##.png`.

Derivatives (Pillow, WebP q80): `public/img/portrait/<id>-941.webp` and `-600.webp` (full frame: viewer, menu-page title art, grill bowl, gallery), plus `<id>-sq-480.webp` / `-sq-240.webp` (square crop centred on the plate for the menu-page thumbnails, displayed at 88–104 px, lazy-loaded). 100 files, 5.4 MB total.

### Matching to verified menu items (by photo CONTENT against the Toast/DoorDash menus)

| Portrait id | Extracted | Content seen | Result |
|---|---|---|---|
| pot-stickers | p01 | 7 pan-fried dumplings + dipping sauce | **A4 Pot Stickers** |
| orange-chicken | p02 | orange-glazed crispy chicken, cilantro | **C14 Orange Chicken** |
| bbq-bowl-noodles | p03 | bowl of raw noodles | grill base (no menu line) |
| house-mei-fun | p04 | thin rice vermicelli, shrimp, chicken, cabbage | **UNRESOLVED**: looks like RN5 House Special Mei Fun; owner code said RN4 (Chow Fun = wide noodle) |
| mongolian-beef | p08 | sliced beef, onions, scallions | **B7 Mongolian Beef** |
| moo-shu | p09 | 4 rolled pancakes + hoisin | **UNRESOLVED**: P3 Moo Shu Pork or C12 Moo Shu Chicken (filling hidden) |
| hot-braised-green-beans | p10 | green beans + dried red chili | **V2 Hot Braised Green Beans** |
| cumin-beef | p11 | beef, cumin, chili flakes, jalapeño, cilantro | **CS1 Cumin Beef** |
| spread-overhead | p13 | 9-dish overhead spread | gallery only |
| egg-foo-young | p14 | 2 egg foo young patties + chicken/veg stir-fry | **UNRESOLVED**: EF1–EF5 variant not visible |
| spring-rolls | p15 | crispy rolls + sweet & sour | **A5 Vegetable Spring Rolls** |
| hot-chili-garlic-fillet | p17 | sliced pieces in red chili-garlic sauce, scallion | **UNRESOLVED**: S3 fish fillet / C4 chicken / S11 shrimp / CS7 |
| wings | p18 | fried wings, jalapeño | **A2 Fried Chicken Wings** |
| mongolian-chicken | p19 | sliced chicken, onions, scallions | **C7 Mongolian Chicken** (visual match to the DoorDash description; owner code C2 matched nothing) |
| sauteed-green-beans | p20 | green beans + carrot, no chili | **V7 Sautéed Green Beans** |
| mapo-tofu | p22 | cubed tofu in red minced-meat sauce | **V3 Mapo Tofu** |
| pocket-bread | p23 | 3 sesame breads in red basket | **A6 Pocket Bread** (DoorDash A5+) |
| bbq-bar-ingredients / -alt | p24 / p26 | grill bar flat-lay | grill section + gallery |
| spread-cooked | p25 | finished-dish spread | gallery only |
| house-noodles | p28 | soft egg noodles, shrimp, beef, chicken | **UNRESOLVED**: looks like RN3 House Special Chow Mein; owner code said RN2 Pan Fried Noodles (crisp cake) |
| kung-pao-combination | p29 (= p41) | shrimp + beef + chicken, peanuts, chili | **S1 Kung Pao Combination** |
| vegetable-tofu-soup | p30 | clear broth, tofu, broccoli, snow peas | **SO4 Vegetable and Tofu Combination Soup** |
| bbq-bowl-raw | p31 | raw bowl before the grill | grill section + gallery |
| fried-shrimp | p32 | battered shrimp + sweet chili | **A3 Fried Shrimp** |
| beef-broccoli | p33 | beef + broccoli + carrot | **B1 Beef Broccoli** |
| walnut-shrimp | p34 | glazed shrimp + candied walnuts + broccoli | **S15 Walnut Shrimp** |

**16 menu items carry a confirmed thumbnail. 5 portraits are unresolved** (shown only in the gallery, captioned generically). Menu items with no portrait at all (C1 Cashew Chicken, C11 Kung Pao Chicken, all lamb, pork, most seafood, all rice/noodle lines, and others) simply have no photo.

### Hero loop derivative (re-cut from `FMB Hero 2.0.mp4` on Sept 22, 2026)
`public/media/hero-loop-1080.mp4` (8.2 MB) and `hero-loop-720.mp4` (3.4 MB): the full approved clip, muted, plus a 0.7 s dissolve from its last frames to its own first frame (ffmpeg `xfade`, offset 11.05 s), total 11.83 s. Measured mean pixel difference between the derivative's last and first frame: 2.5 / 255 (identical to the eye) versus 60 / 255 for the raw clip, so `loop` restarts without a cut. Posters `hero-poster.jpg` (1920 w) and `hero-poster-960.jpg` were regenerated from the new first frame (same exterior scene). The Sept 17 derivatives from the 6.73 s clip were overwritten. No frames were regenerated. The earlier play-once files were removed.

## 3. Missing or unverified inputs

| Item | Status | Plan |
|---|---|---|
| Logo master (vector) | **Missing** | Site uses a typographic wordmark matching the sign's lockup (red FAMILY / MONGOLIAN BBQ). The cartoon family mark is not reproduced. Request an SVG/AI file. |
| Final interior selection | Ambiguous (see §1) | Plain-ceiling/aisle file used; confirm. |
| Hero mobile treatment | Done | 720p muted MP4 + 960 px poster; poster only under reduced-motion/data-saver. |
| Verified listing imagery / media permissions | Resolved | No third-party images used at all. |
| Current dine-in menu & prices | **Unverified** | Site shows pickup "from" prices with disclosure. Ask for the printed menu. |
| Mongolian BBQ bowl pricing / AYCE | **Unverified** | Not claimed. |
| Email, social links, domain, hosting, repo | **Missing** | No email/social rendered; footer has phone/address only. |
| Language requirements, legal pages | **Unknown** | English only; no privacy/terms pages (no tracking, no forms, so none required yet). |
| Analytics | Not authorized | None installed. |
| Map destination | Built from the verified address via Google Maps URL API | Verify it resolves to the right pin before launch. |
