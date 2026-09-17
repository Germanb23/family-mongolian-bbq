# Business Intake Report + Fact & Conflict Report

Project: Family Mongolian BBQ website · Prepared Sept 17, 2026 · Status: **local preview only, not deployed**

## 1. Business intake

| Field | Value | Source(s) | Status |
|---|---|---|---|
| Business name | Family Mongolian BBQ | Owner blueprint; storefront sign (approved photos); DoorDash; Toast | Verified |
| Category | Mongolian BBQ restaurant (DoorDash tags: Mongolian, Barbecue, Chicken; Toast: Chinese) | Blueprint; DoorDash; Toast | Verified |
| Address | 2321 Tapo St, Suite G, Simi Valley, CA 93063 | Owner Yelp screenshot; DoorDash header ("2321 Tapo St G"); Toast ("2321 Tapo Street, Suite G") | Verified (3 sources agree) |
| Phone | (805) 527-1966 · tel:+18055271966 | Owner Yelp screenshot; familymongolian.com | Verified |
| Coordinates | 34.277487, -118.710301 | DoorDash store header | Verified (used for schema/geo meta only) |
| Dining-room hours | Sun–Thu 11 AM–9 PM · Fri–Sat 11 AM–9:30 PM | Owner Yelp screenshot; **printed hours sign in the approved storefront photo matches exactly** | Verified |
| Online-ordering cutoffs | DoorDash: 11 AM–8:40 PM · Toast pickup: 8:45 PM Sun–Thu / 9:15 PM Fri–Sat | DoorDash page; Toast page | Verified (shown as "online ordering closes a little earlier") |
| Primary CTA | Order Online → DoorDash store 25203837 | Owner blueprint; page loaded and confirmed as correct store | Verified |
| Since | 2013 ("Serving authentic Asian cuisine since 2013") | Toast merchant "Restaurant info" | Merchant-entered; used as "Since 2013" — **owner should confirm** |
| Service options | Dine-in, takeout, delivery, pickup | DoorDash (delivery + pickup), Toast (pickup), dining room in approved photos | Verified |
| Rating | 4.5 / 5, "100+ ratings" | DoorDash store page, observed live | Verified, attributed on site |
| Yelp | "356 reviews · 195 photos" (Aug 2026) in Yelp's public search title; star rating **not** retrievable | Search index | Not shown on site |
| Google | "4.5 stars, 351 reviews" | familymongolian.com (third-party directory-style site), not Google directly | **Not verified** — not shown |

## 2. What was verified from the two supplied URLs

### Yelp — https://www.yelp.com/biz/family-mongolian-bbq-simi-valley
- **Access limitation:** Yelp returned HTTP 403 to the fetch tool and to curl, and redirected the in-app browser to yelp.com's home page with an empty body (bot protection). No page content, photos, menu, or review text could be retrieved.
- What could be confirmed: the business exists on Yelp at this URL (search-index title: "FAMILY MONGOLIAN BBQ – Updated August 2026 – 195 Photos & 356 Reviews – 2321 Tapo St, Simi Valley").
- The owner's Yelp screenshot (Sept 11, 2026) supplied phone, address and hours; the temporary "Closed now" label was ignored as instructed.
- Consequence: no Yelp photos were gathered (none were needed — the owner supplied 33 professional dish photos), and no Yelp rating or review is shown on the site.

### DoorDash — https://www.doordash.com/store/family-mongolian-bbq-simi-valley-25203837/
- Loaded in the in-app browser (the fetch tool got 403). Confirmed store: "Family Mongolian BBQ", 2321 Tapo St G, Simi Valley, CA 93063, store id 25203837, DashPass partner, "$$", delivery + pickup, "11:00 am – 8:40 pm".
- Full menu extracted from the page payload: 11 categories, 72 items (names, descriptions, prices, sizes). Saved in `docs/source-research.md`.
- Rating 4.5 (100+ ratings), 5 public reviews with names/dates captured; three short excerpts are used with attribution.
- **Images:** DoorDash's dish photos are served from `…/media/yelp/…` — they are Yelp reviewer photos re-hosted by DoorDash, i.e. third-party media with no usage rights. **None were downloaded or used.** The four DoorDash header images were likewise not used.

### Additional verified channel found during research
- **Toast online ordering** (restaurant-run pickup): https://www.toasttab.com/local/order/family-mongolian-bbq-simi-valley-2321-tapo-street-g — loaded successfully; full pickup menu (10 categories, ~100 items) with codes that match the owner's photo file names (A2, A3, A4, A5, B1, C1, RN2, S1, SO4, V2, V3…). This is the most complete and restaurant-controlled menu source, so it is the basis of the on-site menu. Its link is stored in `business.ts` but **not shown on the site until the owner confirms** it is the channel they want promoted.
- **familymongolian.com** exists but is a thin auto-generated directory-style site (home page returned "Internal Server Error"; other pages only list "Chicken Stir-Fry $12.99 / Steamed Noodles $12.99"). Treated as low-trust; nothing from it is published.

## 3. Conflicts and how they were resolved

| Topic | Conflict | Resolution on site |
|---|---|---|
| Hours | Sign/Yelp (close 9 / 9:30) vs Toast (8:45 / 9:15) vs DoorDash (8:40) | Dining-room hours from sign + Yelp; note that online ordering closes earlier. |
| Menu prices | Toast pickup (e.g. Cashew Chicken $18.97+) vs DoorDash Good Meal ($20.99) | Site shows Toast pickup "from" price with an explicit disclosure; DoorDash price stored per item in `menu.ts`; dine-in prices never claimed. |
| Item codes | Toast and DoorDash number dishes differently (Toast C11 Kung Pao vs DoorDash C2+) | Site uses Toast codes (they match the owner's photo file names best). |
| Spring rolls | Toast A5 $11.97 (order) vs DoorDash A4+ $2.99 (likely single) | Toast price shown; DoorDash value stored. |
| Wor Wonton Soup description | DoorDash/Toast text describes a *sauce*, not the soup (listing error) | Replaced with "House wonton soup". |
| Address unit | "Suite G" vs "Ste g" vs "G" | "Suite G". |
| Interior asset | Blueprint: `fmb-interior-official.jpg` (original) vs aisle/plain-ceiling edit | The file the owner named "FMB interior official" on disk *is* the plain-ceiling, center-aisle edit (1672×941 JPEG). It is used. See asset manifest. **Owner to confirm.** |

## 4. Claims deliberately NOT made
- All-you-can-eat / buffet / unlimited (appears only in third-party snippets — unverified).
- Any Mongolian BBQ bowl price, kids price, lunch special.
- Reservations, catering, private events, gluten-free/vegan guarantees.
- Yelp or Google star ratings.
- Staff names, ownership, history beyond "since 2013".

## 5. Open items for the owner (NEEDS OWNER CONFIRMATION)
1. Confirm "since 2013" (from Toast merchant info).
2. Confirm the Mongolian BBQ grill is **dine-in only** and whether it is all-you-can-eat / how it is priced — the section currently says only "a dine-in experience".
3. Confirm whether the Toast pickup link should appear next to DoorDash as "Order pickup direct".
4. Confirm which interior edit is the official one (see asset manifest §3).
5. Supply: logo master (vector), email, social links, domain/hosting, analytics preference, any legal pages.
6. Confirm dish names for the five unresolved portrait photos (asset manifest §2b): thin-noodle plate (RN5?), moo shu (P3 or C12?), egg foo young variant (EF1–EF5?), red chili-garlic plate (S3 / C4 / S11 / CS7?), house noodles (RN3 or RN2?).
7. Six of the "33" portrait PNGs did not arrive (27 unique were recovered). Re-attach them if they exist.
