/**
 * Owner-supplied photography (professional shoot, Sony ILCE-6700, Lightroom-edited, marble surface).
 * Masters: assets-master/food/*.jpg (6192×4128). Web derivatives: public/img/food/<id>-{1600,900,480}.webp
 * (center-cropped to 4:3, generated with Pillow — see docs/asset-manifest.md).
 *
 * `confidence` records how the dish name was established (owner file code + visual match against the
 * verified menu). Only "high" photos are captioned with a dish name on the site; "medium" photos are used
 * without a dish-name claim or are held back. Full reasoning is in docs/asset-manifest.md.
 */
export interface Photo {
  id: string;
  alt: string;
  /** Owner's original file name (master). */
  master: string;
  confidence: 'high' | 'medium';
  /** Natural crop aspect of the derivative. */
  aspect: '4/3';
}

export const photos: Record<string, Photo> = {
  'wings': { id: 'wings', alt: 'Crispy fried chicken wings garnished with sliced jalapeño and green onion', master: 'A2.jpg', confidence: 'high', aspect: '4/3' },
  'fried-shrimp': { id: 'fried-shrimp', alt: 'Golden battered fried shrimp with a dish of sweet chili dipping sauce', master: 'A3.jpg', confidence: 'high', aspect: '4/3' },
  'pot-stickers': { id: 'pot-stickers', alt: 'Seven pan-fried pot stickers with a dish of soy dipping sauce', master: 'A4.jpg', confidence: 'high', aspect: '4/3' },
  'spring-rolls': { id: 'spring-rolls', alt: 'Crispy vegetable spring rolls stacked beside sweet and sour sauce', master: 'A5.jpg', confidence: 'high', aspect: '4/3' },
  'pocket-bread': { id: 'pocket-bread', alt: 'Three sesame-topped pocket breads in a paper-lined red basket', master: 'A6.jpg', confidence: 'high', aspect: '4/3' },
  'beef-broccoli': { id: 'beef-broccoli', alt: 'Beef broccoli with carrots in glossy brown sauce on an oval plate', master: 'B1-2.jpg', confidence: 'high', aspect: '4/3' },
  'mongolian-beef': { id: 'mongolian-beef', alt: 'Mongolian beef with sliced onions and green onions', master: 'B4.jpg', confidence: 'high', aspect: '4/3' },
  'cashew-chicken': { id: 'cashew-chicken', alt: 'Cashew chicken with zucchini and carrot in brown sauce', master: 'C1.jpg', confidence: 'high', aspect: '4/3' },
  'mongolian-chicken': { id: 'mongolian-chicken', alt: 'Sliced chicken stir-fried with onions and green onions', master: 'C2.jpg', confidence: 'medium', aspect: '4/3' },
  'kung-pao-chicken': { id: 'kung-pao-chicken', alt: 'Kung Pao chicken with peanuts, dried chilies, zucchini and carrot', master: 'C3.jpg', confidence: 'high', aspect: '4/3' },
  'orange-chicken': { id: 'orange-chicken', alt: 'Glossy orange chicken with a sprig of cilantro', master: 'C4.jpg', confidence: 'high', aspect: '4/3' },
  'cumin-beef': { id: 'cumin-beef', alt: 'Cumin beef with onions, jalapeño, cilantro and chili flakes', master: 'CS3.jpg', confidence: 'high', aspect: '4/3' },
  'hot-chili-garlic-fillet': { id: 'hot-chili-garlic-fillet', alt: 'Sliced fillets in red chili garlic sauce topped with green onion', master: 'S3.jpg', confidence: 'medium', aspect: '4/3' },
  'egg-foo-young': { id: 'egg-foo-young', alt: 'Two egg foo young patties beside stir-fried chicken and mixed vegetables', master: 'EF1.jpg', confidence: 'medium', aspect: '4/3' },
  'moo-shu': { id: 'moo-shu', alt: 'Four rolled moo shu pancakes with a dish of hoisin sauce', master: 'P2.jpg', confidence: 'medium', aspect: '4/3' },
  'house-pan-fried-noodles': { id: 'house-pan-fried-noodles', alt: 'House special pan-fried noodles with shrimp, beef, chicken and cabbage', master: 'RN2.jpg', confidence: 'high', aspect: '4/3' },
  'house-mei-fun': { id: 'house-mei-fun', alt: 'Thin rice noodles stir-fried with shrimp, meat and vegetables', master: 'RN4.jpg', confidence: 'medium', aspect: '4/3' },
  'kung-pao-combination': { id: 'kung-pao-combination', alt: 'Kung Pao combination with shrimp, beef, chicken, peanuts, zucchini and carrot', master: 'S1.jpg', confidence: 'high', aspect: '4/3' },
  'walnut-shrimp': { id: 'walnut-shrimp', alt: 'Honey walnut shrimp with candied walnuts and steamed broccoli', master: 'walnut shrimp.jpg', confidence: 'high', aspect: '4/3' },
  'vegetable-tofu-soup': { id: 'vegetable-tofu-soup', alt: 'Bowl of clear broth with tofu, broccoli, snow peas, carrot and mushroom', master: 'SO4.jpg', confidence: 'high', aspect: '4/3' },
  'soups-trio': { id: 'soups-trio', alt: 'Three bowls of soup viewed from above: vegetable tofu, wonton and egg flower', master: 'SoupsArray.jpg', confidence: 'medium', aspect: '4/3' },
  'hot-braised-green-beans': { id: 'hot-braised-green-beans', alt: 'Hot braised green beans with a dried red chili', master: 'V2.jpg', confidence: 'high', aspect: '4/3' },
  'mapo-tofu': { id: 'mapo-tofu', alt: 'Mapo tofu in red Sichuan sauce topped with green onion', master: 'V3.jpg', confidence: 'high', aspect: '4/3' },
  'sauteed-green-beans': { id: 'sauteed-green-beans', alt: 'Sautéed green beans with carrot slices', master: 'V5.jpg', confidence: 'high', aspect: '4/3' },
  'bbq-bowl-raw': { id: 'bbq-bowl-raw', alt: 'A Mongolian BBQ bowl before grilling: noodles piled with sliced beef, shrimp, mushrooms, cabbage and green onion, seen from above', master: 'MonglianBBQIngridientsBowl_PriorToCooking.jpg', confidence: 'high', aspect: '4/3' },
  'bbq-bowl-noodles': { id: 'bbq-bowl-noodles', alt: 'Bowl of fresh noodles for the Mongolian BBQ grill', master: 'NoodlesPic.jpg', confidence: 'high', aspect: '4/3' },
  'bbq-bar-ingredients': { id: 'bbq-bar-ingredients', alt: 'Overhead spread of Mongolian BBQ bar ingredients: sliced beef and pork, shrimp, tofu, rice, noodles, vegetables, peanuts and house sauces', master: 'MongolianBBQ All Ingridients&Sauces.jpg', confidence: 'high', aspect: '4/3' },
  'spread-cooked': { id: 'spread-cooked', alt: 'Overhead spread of finished dishes: pot stickers, green beans, walnut shrimp, orange chicken, noodles and soups', master: 'CookedFoodArray.jpg', confidence: 'high', aspect: '4/3' },
  'spread-four-plates': { id: 'spread-four-plates', alt: 'Four plates in a row: beef, walnut shrimp, kung pao chicken and pot stickers', master: 'FoodArray2.jpg', confidence: 'high', aspect: '4/3' },
};

export const photoSrc = (id: string, width: 1600 | 900 | 480 = 900) => `/img/food/${id}-${width}.webp`;
export const photoSrcset = (id: string) => `${photoSrc(id, 480)} 480w, ${photoSrc(id, 900)} 900w, ${photoSrc(id, 1600)} 1600w`;

/** Approved place photography (public/img/place). */
export const place = {
  exteriorEvening: { id: 'exterior-evening', alt: 'Family Mongolian BBQ storefront at dusk: tile roof, arched columns, lit wall lanterns and the red FAMILY MONGOLIAN BBQ sign', w: 1295, h: 729 },
  entranceEvening: { id: 'entrance-evening', alt: 'The open front door at evening with warm pendant lights glowing inside and the hours sign in the window', w: 1297, h: 731 },
  interiorOfficial: { id: 'interior-official', alt: 'Dining room with rows of navy tufted booths, amber stained-glass pendant lights and the stainless grill station at the back', w: 1672, h: 941 },
};
export const placeSrc = (id: string, width: 1600 | 900 | 480 = 900) => `/img/place/${id}-${width}.webp`;
export const placeSrcset = (id: string) => `${placeSrc(id, 480)} 480w, ${placeSrc(id, 900)} 900w, ${placeSrc(id, 1600)} 1600w`;
