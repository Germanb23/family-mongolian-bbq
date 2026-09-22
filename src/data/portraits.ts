/**
 * Owner-supplied PORTRAIT set: batch 1 (941×1672 PNGs attached Sept 17, 2026; masters in assets-master/portrait/) and
 * batch 2 (20 × 1125×2000 WebPs attached Sept 22, 2026; masters in assets-master/portrait-batch2/, source 'b2-NN').
 * Web derivatives: public/img/portrait/<id>-{941,600}.webp (full frame) and <id>-sq-{480,240}.webp
 * (square crop centred on the plate, used for menu-page thumbnails).
 *
 * `match` records how each dish was identified from its CONTENT against the verified Toast/DoorDash menus.
 * Only `confirmed` portraits are attached to a menu item (menu.ts `portrait`). `unresolved` portraits are
 * listed for the owner to confirm; they appear in the gallery without a dish-name claim, never on a menu row.
 */
export interface Portrait {
  id: string;
  alt: string;
  /** Extracted file name in assets-master/portrait-attachments/extracted (p##.png). */
  source: string;
  match: 'confirmed' | 'unresolved' | 'not-a-menu-item';
  /** Menu code when confirmed; candidate codes when unresolved. */
  menuCode?: string;
  candidates?: string[];
  /** Why it could or could not be matched. */
  note: string;
  /** Square thumbnail available (single plates only). */
  square: boolean;
}

export const portraits: Record<string, Portrait> = {
  'pot-stickers': { id: 'pot-stickers', alt: 'Pot stickers with soy dipping sauce', source: 'p01', match: 'confirmed', menuCode: 'A4', note: 'Seven pan-fried dumplings with dipping sauce = A4 Pot Stickers.', square: true },
  'orange-chicken': { id: 'orange-chicken', alt: 'Orange chicken with a sprig of cilantro', source: 'p02', match: 'confirmed', menuCode: 'C14', note: 'Glossy orange-glazed crispy chicken = C14 Orange Chicken.', square: true },
  'bbq-bowl-noodles': { id: 'bbq-bowl-noodles', alt: 'Bowl of fresh noodles for the Mongolian BBQ grill', source: 'p03', match: 'not-a-menu-item', note: 'Grill base, not a menu line.', square: true },
  'house-mei-fun': { id: 'house-mei-fun', alt: 'Thin rice noodles stir-fried with shrimp, meat and vegetables', source: 'p04', match: 'unresolved', candidates: ['RN5', 'RN18', 'RN16'], note: 'Thin vermicelli with shrimp and chicken suggests RN5 House Special Mei Fun, but the owner file code was RN4 (Chow Fun, a wide noodle). Owner to confirm.', square: true },
  'mongolian-beef': { id: 'mongolian-beef', alt: 'Mongolian beef with onions and green onions', source: 'p08', match: 'confirmed', menuCode: 'B7', note: 'Sliced beef with onions and scallions matches the Mongolian Beef description on both platforms.', square: true },
  'moo-shu': { id: 'moo-shu', alt: 'Four rolled moo shu pancakes with hoisin sauce', source: 'p09', match: 'unresolved', candidates: ['P3', 'C12'], note: 'Pancakes are rolled, so pork vs chicken filling cannot be seen. Owner to confirm.', square: true },
  'hot-braised-green-beans': { id: 'hot-braised-green-beans', alt: 'Hot braised green beans with a dried red chili', source: 'p10', match: 'confirmed', menuCode: 'V2', note: 'Green beans with dried chili (spicy) = V2 Hot Braised Green Beans; V7 has no chili.', square: true },
  'cumin-beef': { id: 'cumin-beef', alt: 'Cumin beef with onions, jalapeño and cilantro', source: 'p11', match: 'confirmed', menuCode: 'CS1', note: 'Beef with visible cumin, chili flakes, jalapeño and cilantro = CS1 Cumin Beef (the only cumin beef on the menu).', square: true },
  'spread-overhead': { id: 'spread-overhead', alt: 'Overhead spread of dishes: pot stickers, green beans, walnut shrimp, orange chicken, mapo tofu, noodles and soups', source: 'p13', match: 'not-a-menu-item', note: 'Multi-dish spread; gallery only.', square: false },
  'egg-foo-young': { id: 'egg-foo-young', alt: 'Egg foo young patties beside stir-fried chicken and mixed vegetables', source: 'p14', match: 'unresolved', candidates: ['EF1', 'EF2', 'EF3', 'EF4', 'EF5'], note: 'Patties are egg foo young but the filling variant is not visible; plated with a chicken stir-fry. Owner to confirm.', square: true },
  'spring-rolls': { id: 'spring-rolls', alt: 'Vegetable spring rolls with sweet and sour sauce', source: 'p15', match: 'confirmed', menuCode: 'A5', note: 'Crispy rolls with red dipping sauce = A5 Vegetable Spring Rolls (the only spring roll on the menu).', square: true },
  'hot-chili-garlic-fillet': { id: 'hot-chili-garlic-fillet', alt: 'Sliced fillets in red chili garlic sauce topped with green onion', source: 'p17', match: 'unresolved', candidates: ['S3', 'C4', 'S11', 'CS7'], note: 'Red chili-garlic sauce over sliced pieces; fish fillet, chicken or shrimp cannot be told apart with confidence. Owner to confirm.', square: true },
  'wings': { id: 'wings', alt: 'Fried chicken wings with jalapeño and green onion', source: 'p18', match: 'confirmed', menuCode: 'A2', note: 'Fried wings = A2 Fried Chicken Wings (the only wings on the menu).', square: true },
  'mongolian-chicken': { id: 'mongolian-chicken', alt: 'Sliced chicken stir-fried with onions and green onions', source: 'p19', match: 'confirmed', menuCode: 'C7', note: 'Sliced chicken with onions and scallions in brown sauce matches the DoorDash Mongolian Chicken description (sautéed with green onions and scallions). No other chicken dish lists onions or scallions. Visual match; the owner file code (C2) matched no platform.', square: true },
  'sauteed-green-beans': { id: 'sauteed-green-beans', alt: 'Sautéed green beans with carrot', source: 'p20', match: 'confirmed', menuCode: 'V7', note: 'Green beans without chili, with carrot = V7 Sautéed Green Beans.', square: true },
  'mapo-tofu': { id: 'mapo-tofu', alt: 'Mapo tofu in red Sichuan sauce with green onion', source: 'p22', match: 'confirmed', menuCode: 'V3', note: 'Cubed tofu in red minced-meat sauce = V3 Mapo Tofu.', square: true },
  'pocket-bread': { id: 'pocket-bread', alt: 'Three sesame pocket breads in a red basket', source: 'p23', match: 'confirmed', menuCode: 'A6', note: 'Sesame-topped bread pockets = Pocket Bread (DoorDash A5+).', square: true },
  'bbq-bar-ingredients': { id: 'bbq-bar-ingredients', alt: 'Overhead spread of Mongolian BBQ bar ingredients: sliced meats, shrimp, tofu, rice, noodles, vegetables and sauces', source: 'p24', match: 'not-a-menu-item', note: 'Grill bar flat-lay.', square: false },
  'spread-cooked': { id: 'spread-cooked', alt: 'Overhead spread of finished dishes', source: 'p25', match: 'not-a-menu-item', note: 'Multi-dish spread; gallery only.', square: false },
  'bbq-bar-ingredients-alt': { id: 'bbq-bar-ingredients-alt', alt: 'Overhead spread of Mongolian BBQ bar ingredients, alternate arrangement', source: 'p26', match: 'not-a-menu-item', note: 'Grill bar flat-lay (alternate).', square: false },
  'house-noodles': { id: 'house-noodles', alt: 'Stir-fried egg noodles with shrimp, beef, chicken and cabbage', source: 'p28', match: 'unresolved', candidates: ['RN3', 'RN2'], note: 'Soft tossed egg noodles with shrimp, beef and chicken look like RN3 House Special Chow Mein; the owner file code was RN2 (Pan Fried Noodles, normally a crisp noodle cake). Owner to confirm.', square: true },
  'kung-pao-combination': { id: 'kung-pao-combination', alt: 'Kung Pao combination with shrimp, beef, chicken, peanuts, zucchini and carrot', source: 'p29', match: 'confirmed', menuCode: 'S1', note: 'Shrimp, beef and chicken with peanuts and dried chili = S1 Kung Pao Combination (the only kung pao with all three proteins).', square: true },
  'vegetable-tofu-soup': { id: 'vegetable-tofu-soup', alt: 'Clear broth with tofu, broccoli, snow peas, carrot and mushroom', source: 'p30', match: 'confirmed', menuCode: 'SO4', note: 'Clear vegetable broth with tofu = SO4 Vegetable and Tofu Combination Soup.', square: true },
  'bbq-bowl-raw': { id: 'bbq-bowl-raw', alt: 'A Mongolian BBQ bowl before grilling: noodles with sliced beef, shrimp, mushrooms and cabbage', source: 'p31', match: 'not-a-menu-item', note: 'Grill bowl, dine-in.', square: true },
  'fried-shrimp': { id: 'fried-shrimp', alt: 'Battered fried shrimp with sweet chili sauce', source: 'p32', match: 'confirmed', menuCode: 'A3', note: 'Battered shrimp with tails and sweet chili dip = A3 Fried Shrimp.', square: true },
  'beef-broccoli': { id: 'beef-broccoli', alt: 'Beef broccoli with carrots in brown sauce', source: 'p33', match: 'confirmed', menuCode: 'B1', note: 'Beef slices with broccoli florets = B1 Beef Broccoli.', square: true },
  'walnut-shrimp': { id: 'walnut-shrimp', alt: 'Walnut shrimp with candied walnuts and broccoli', source: 'p34', match: 'confirmed', menuCode: 'S15', note: 'Creamy-glazed shrimp with candied walnuts = S15 Walnut Shrimp.', square: true },
  // ---- Batch 2: 20 portrait WebPs (1125×2000) attached Sept 22, 2026; masters in assets-master/portrait-batch2/ ----
  'bbq-pork': { id: 'bbq-pork', alt: 'Sliced barbecue pork (char siu) with sesame seeds and a sprig of celery leaf', source: 'b2-01', match: 'confirmed', menuCode: 'A1', note: 'Red-glazed sliced char siu with sesame = A1 Barbecue Pork.', square: true },
  'bbq-pork-broccoli': { id: 'bbq-pork-broccoli', alt: 'Barbecue pork slices stir-fried with broccoli', source: 'b2-02', match: 'confirmed', menuCode: 'P1', note: 'Char siu slices with broccoli florets = P1 BBQ Pork with Broccoli.', square: true },
  'beef-bell-pepper': { id: 'beef-bell-pepper', alt: 'Beef with green bell pepper, mushrooms, onion and water chestnuts in brown sauce', source: 'b2-03', match: 'confirmed', menuCode: 'B3', note: 'Beef slices with large green bell-pepper pieces = B3 Beef with Bell Pepper (bell pepper is the defining ingredient; also mushroom, onion, water chestnut). Best match; owner may confirm vs B5.', square: true },
  'beef-mixed-vegetables': { id: 'beef-mixed-vegetables', alt: 'Beef with mixed vegetables: broccoli, cabbage, zucchini, snow peas, carrot and bell pepper', source: 'b2-04', match: 'confirmed', menuCode: 'B4', note: 'Beef with a broad vegetable mix = B4 Beef with Mixed Vegetables.', square: true },
  'pork-hot-garlic': { id: 'pork-hot-garlic', alt: 'Shredded pork with green pepper, carrot and mushrooms in hot garlic sauce', source: 'b2-05', match: 'confirmed', menuCode: 'P4', note: 'Pale meat strips with green pepper, carrot and mushroom in a red-tinted sauce match the Toast text "pork strips in fiery garlic sauce" = P4. Best match; owner may confirm vs C4 (chicken).', square: true },
  'egg-flower-soup': { id: 'egg-flower-soup', alt: 'Egg flower soup with carrot and peas', source: 'b2-06', match: 'confirmed', menuCode: 'SO2', note: 'Egg ribbons in clear yellow broth = SO2 Egg Flower Soup.', square: true },
  'chicken-egg-foo-young': { id: 'chicken-egg-foo-young', alt: 'Two egg foo young patties beside stir-fried chicken and vegetables', source: 'b2-07', match: 'confirmed', menuCode: 'EF2', note: 'Egg foo young plated with a chicken stir-fry = EF2 Chicken Egg Foo Young. Best match; the patty filling itself is not visible.', square: true },
  'eggplant-tofu': { id: 'eggplant-tofu', alt: 'Eggplant and fried tofu in spicy garlic sauce with green onion', source: 'b2-08', match: 'confirmed', menuCode: 'V1', note: 'Purple eggplant wedges with fried tofu triangles in red chili-garlic sauce = V1 Eggplant with Tofu.', square: true },
  'chicken-onion-scallion': { id: 'chicken-onion-scallion', alt: 'Sliced white meat stir-fried with onion, leek and green onion', source: 'b2-09', match: 'unresolved', candidates: ['C7', 'P7'], note: 'Same subject as the Sept 17 Mongolian Chicken portrait (onion + scallion + leek, light sauce). Could equally be P7 Shredded Pork with Scallion; the meat cannot be told apart. Not attached. Owner to confirm.', square: true },
  'hot-sour-soup': { id: 'hot-sour-soup', alt: 'Hot and sour soup with mushrooms, tofu, egg and green onion', source: 'b2-10', match: 'confirmed', menuCode: 'SO3', note: 'Thick brown soup with mushroom, tofu, egg ribbon and chili = SO3 Hot and Sour Soup.', square: true },
  'house-chow-fun': { id: 'house-chow-fun', alt: 'House special chow fun: wide rice noodles with shrimp, chicken, beef and bean sprouts', source: 'b2-11', match: 'confirmed', menuCode: 'RN4', note: 'Wide flat rice noodles with shrimp, chicken and beef = RN4 House Special Chow Fun.', square: true },
  'house-chow-mein': { id: 'house-chow-mein', alt: 'House special chow mein: egg noodles with shrimp, beef, chicken and cabbage', source: 'b2-12', match: 'confirmed', menuCode: 'RN3', note: 'Soft egg noodles with shrimp, beef, chicken and cabbage = RN3 House Special Chow Mein. Supersedes the unresolved p28 for menu display.', square: true },
  'house-fried-rice': { id: 'house-fried-rice', alt: 'House special fried rice with shrimp, beef, chicken and green onion', source: 'b2-13', match: 'confirmed', menuCode: 'RN1', note: 'Fried rice with shrimp, beef and chicken = RN1 House Special Fried Rice.', square: true },
  'house-special-mei-fun': { id: 'house-special-mei-fun', alt: 'House special mei fun: thin rice noodles with shrimp, beef, chicken and cabbage', source: 'b2-14', match: 'confirmed', menuCode: 'RN5', note: 'Thin rice vermicelli with shrimp, beef and chicken = RN5 House Special Mei Fun. Supersedes the unresolved p04 for menu display.', square: true },
  'kung-pao-chicken': { id: 'kung-pao-chicken', alt: 'Kung pao chicken with peanuts, zucchini, carrot and dried chili', source: 'b2-15', match: 'confirmed', menuCode: 'C11', note: 'Diced chicken with peanuts, zucchini, carrot and dried red chili = C11 Kung Pao Chicken (matches the landscape C3.jpg already used on the home page).', square: true },
  'garden-vegetables': { id: 'garden-vegetables', alt: 'Sautéed garden vegetables: cabbage, zucchini, snow peas, carrot, mushroom and broccoli in light sauce', source: 'b2-16', match: 'confirmed', menuCode: 'V5', note: 'Mixed vegetables only, light sauce = V5 Sautéed Garden Vegetables.', square: true },
  'cashew-shrimp': { id: 'cashew-shrimp', alt: 'Cashew shrimp with zucchini and carrot in brown sauce', source: 'b2-17', match: 'confirmed', menuCode: 'S6', note: 'Curled, segmented pieces are shrimp, with cashews, zucchini and carrot = S6 Cashew Shrimp. C1 Cashew Chicken already has its own confirmed photo (C1.jpg).', square: true },
  'sweet-sour-chicken': { id: 'sweet-sour-chicken', alt: 'Sweet and sour chicken with onion, pineapple and green pepper', source: 'b2-18', match: 'confirmed', menuCode: 'C16', note: 'Battered pieces in red sweet-and-sour sauce with onion and pineapple = C16 Sweet & Sour Chicken (the only sweet-and-sour dish on the menu).', square: true },
  'vegetable-tofu-soup-2': { id: 'vegetable-tofu-soup-2', alt: 'Clear broth with tofu, broccoli, snow peas, carrot, cabbage and mushroom', source: 'b2-19', match: 'confirmed', menuCode: 'SO4', note: 'Second photo of SO4 Vegetable and Tofu Combination Soup (owner re-sent Sept 22); now used on the menu row. The Sept 17 p30 remains registered.', square: true },
  'wor-wonton-soup': { id: 'wor-wonton-soup', alt: 'Wor wonton soup with wontons, barbecue pork, chicken, broccoli, snow peas and cabbage', source: 'b2-20', match: 'confirmed', menuCode: 'SO5', note: 'Wontons with sliced meats and vegetables in brown broth = SO5 Wor Wonton Soup.', square: true },
};

export const portraitFull = (id: string, width: 941 | 600 = 941) => `/img/portrait/${id}-${width}.webp`;
export const portraitSquare = (id: string, width: 480 | 240 = 240) => `/img/portrait/${id}-sq-${width}.webp`;
