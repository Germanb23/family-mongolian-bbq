# Source research — URLs analyzed Sept 17, 2026

## Access log

| Source | Method | Result |
|---|---|---|
| Yelp business page | Fetch tool | HTTP 403 |
| Yelp business page | curl with browser UA | HTTP 403 (776-byte block page) |
| Yelp business page | In-app browser (twice) | Redirected to yelp.com, empty body — bot challenge |
| Yelp (search index only) | Web search | Title: "FAMILY MONGOLIAN BBQ – Updated August 2026 – 195 Photos & 356 Reviews – 2321 Tapo St, Simi Valley" |
| DoorDash store | Fetch tool | HTTP 403 |
| DoorDash store | In-app browser | **Loaded.** Store header + full menu payload extracted from the page's script data (72 items, 11 categories) |
| Toast online ordering | Fetch tool | HTTP 403 |
| Toast online ordering | In-app browser | **Loaded.** Full pickup menu read from page text (below) |
| familymongolian.com | curl | Home: "Internal Server Error"; /about/, /menu/, /faq/, /location/, /contact/, /popular-dishes/, /takeout-and-delivery/ returned thin auto-generated pages |
| Grubhub / Seamless / Tripadvisor | Fetch tool | Blocked or empty; not needed |

## DoorDash store — verified facts
- Name "Family Mongolian BBQ", id 25203837, "East Asian", tags Mongolian / Barbecue / Chicken, "$$", DashPass partner.
- Address "2321 Tapo St G, Simi Valley, CA 93063, USA"; lat 34.277487, lng -118.710301.
- Offers delivery, pickup ("25 min ready for pickup"), group order, scheduling. No catering.
- Menu hours shown: 11:00 am – 8:40 pm. "Prices on this menu are set directly by the Merchant."
- Rating 4.5 · "100+ ratings • 10+ public reviews".
- Header images: 4 (`img.cdn4dd.com/u/media/…`) and item images from `…/media/yelp/…` → third-party (Yelp) photos; **not used**.
- Public reviews captured (name · date · excerpt used?):
  - Heather K · 10/17/23 · "The food was fast, fresh, and delicious." ✔ used
  - Matan B · 3/27/26 · praises C9 Green Beans Chicken, C5, RN19 Chicken Chow Fun; "portions are big enough to feed 2–3 people"
  - Pilar S · 8/3/25 · "Food always taste hot and fresh. Portions are more than enough for 2 people." ✔ used
  - Pilar S · 11/13/25 · likes Beef Chow Fun + Salt and Pepper Shrimp; unimpressed by Mushroom Chicken
  - Leti M · 3/11/26 · "…Family Mongolian BBQ has the best wor wonton soup ever." ✔ used

### DoorDash menu (raw, category | code+name | Good Meal price | description)
Category notes: Appetizers "One Order (Serves 1-2) * Party Order (Serves 8-10)"; entrées "Good Meal comes with 1 cup of Steamed Rice (Serves 1-2) * Party Meal comes with 4 cups of Steamed Rice (Serves 8-10)"; Soup "For 2 * For 4".

- Appetizers: A1+ Chicken Wings (7 Pcs) $15.99 · A2+ Fried Shrimp (7 Pcs) $15.99 · A3+ Pot Stickers (7 Pcs) $15.99 · A4+ Vegetable Spring Rolls $2.99 · A5+ Pocket Bread $2.99 ("Soft, fluffy bread pockets topped with sesame seeds")
- Vegetable: V1+ Eggplant with Tofu $18.99 · V2+ Hot Braised Green Beans $18.99 · V3+ Mapo Tofu $18.99 · V4+ Sauteed Garden Vegetables $18.99 · V5+ Sauteed Green Beans $18.99 · V8+ Vegetables Specials $20.99
- Chicken: C1+ Cashew Chicken $20.99 ("Diced chicken stir-fried with celery, mushrooms, and cashew nuts in a brown sauce") · C2+ Kung Pao Chicken $20.99 · C3+ Mongolian Chicken $20.99 ("Sliced chicken sautéed with green onions and scallions in a sweet soy marinade") · C4+ Orange Chicken $20.99 · C5+ Sweet & Sour Chicken $20.99 · C6+ Chicken Special $21.99
- Beef: B1+ Beef Broccoli $21.99 · B2+ Beef in Hot Garlic Sauce $21.99 · B3+ Beef with Mixed Vegetables $21.99 · B4+ Mongolian Beef $21.99 ("Sliced beef stir-fried with onions and scallions in a savory Mongolian sauce") · B5+ Orange Beef $21.99 · B6+ HS Beef $22.99 · B7+ Beef Specials $22.99
- Pork: P1+ BBQ Pork $20.99 · P2+ BBQ Pork with Broccoli $20.99 · P3+ Pork in Hot Garlic Sauce $20.99 · P4+ Shredded Pork with Scallion $20.99 · P5+ HS Pork $21.99 · P6+ Pork Specials $21.99
- Seafood: S01+ Kung Pao Combination $23.99 · S02+ Fish Fillet in Black Bean Sauce $23.99 · S03+ Shrimp in Hot Garlic Sauce $23.99 · S04+ Shrimp with Lobster Sauce $23.99 · S05+ Walnut Shrimp $23.99 · S06+ Seafood Specials $24.99 · S07+ HS Seafood $24.99
- Egg Foo Young: EF1 BBQ Pork $21.99 · EF2 Chicken $21.99 · EF3 Beef $21.99 · EF4 Shrimp $21.99 · EF5 Vegetable $21.99 · EF6 HS $22.99
- Rice & Noodles: N1–N5 (BBQ Pork / Chicken / Beef / Shrimp / Vegetable) Noodles $17.99 (choice chow mein / chow fun / mei fun) · R1–R5 Fried Rice $16.99 · R6 HS Fried Rice $17.99 · R7 Plain Rice $2.99 · R8 Plain Fried Rice $5.99 · R9 Fried Rice Special $17.99 · RN04 House Special Mei Fun $16.77+ · RN6+ HS Noodles $18.99 · RN7+ Plain Noodles $14.99
- Soup: SO1 Chicken Corn · SO2 Egg Flower · SO3 Hot and Sour · SO4 Vegetable and Tofu Combination (prices not in payload) · SO5 Wor Wonton Soup $9.97+
- Beverages: Bottle Water $1.99 · Bottled Coke $4.99 · Coke $2.97 · Fountain Soda $2.97 · Hot Tea $3.99 · Iced Tea $2.99 · Juice (Bottle) $2.45

## Toast online ordering — verified facts
- "Family Mongolian BBQ – Simi Valley @ Tapo St." · Pickup · "Chinese" · "Pickup from 2321 Tapo Street, Suite G, Simi Valley, CA" · pickup in 10–15 min · loyalty "1 point per $1".
- All hours: Sun–Thu 11:00 am – 8:45 pm; Fri–Sat 11:00 am – 9:15 pm (online ordering).
- Restaurant info: **"Serving authentic Asian cuisine since 2013"**.
- Categories: Appetizers, Chef's Special, Vegetables Cuisine, Chicken Cuisine, Beef Cuisine, Pork Cuisine, Seafood Cuisine, Egg Foo Young, Soup, Rice & Noodles. Items and "from" prices are reproduced in `src/data/menu.ts` (descriptions condensed). Spicy markers ("***Spicy***") mapped to the `spicy` tag. S16 Tuna Adobo was "OUT OF STOCK".

## What was used on the site
- Menu: Toast item list, codes and starting prices; DoorDash price stored alongside where the dish exists there.
- Proof: DoorDash 4.5 (100+) + three attributed excerpts.
- Images: **owner-supplied only**.
