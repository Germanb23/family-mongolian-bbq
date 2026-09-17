/**
 * Owner-supplied PORTRAIT set (941×1672 PNGs attached Sept 17, 2026; masters copied to assets-master/portrait/).
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
};

export const portraitFull = (id: string, width: 941 | 600 = 941) => `/img/portrait/${id}-${width}.webp`;
export const portraitSquare = (id: string, width: 480 | 240 = 240) => `/img/portrait/${id}-sq-${width}.webp`;
