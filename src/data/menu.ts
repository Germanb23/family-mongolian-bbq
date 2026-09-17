/**
 * Menu for Family Mongolian BBQ — consolidated from the two verified online-ordering channels.
 *
 * SOURCES (both loaded in a real browser on Sept 17, 2026; see docs/source-research.md):
 *  - TOAST pickup ordering (restaurant-run): full menu, item codes, descriptions, "from" prices.
 *    https://www.toasttab.com/local/order/family-mongolian-bbq-simi-valley-2321-tapo-street-g
 *  - DOORDASH delivery store (owner's designated Order Online destination): shorter "OLO" menu with
 *    Good Meal (serves 1–2) / Party Meal (serves 8–10) sizes and higher prices.
 *    https://www.doordash.com/store/family-mongolian-bbq-simi-valley-25203837/
 *
 * RULES
 *  - Descriptions are condensed from the platform text; no ingredient was added that a source did not list.
 *  - `price` = Toast pickup starting price (the restaurant's own channel). `doordash` = DoorDash Good Meal
 *    price where the same dish exists there. Dine-in prices are NOT verified and are never implied.
 *  - The Mongolian BBQ grill (build-your-own bowl) is not sold on either platform and has no verified price.
 *  - `photo` links an owner-supplied photo (see src/data/photos.ts) only where the dish is confidently identified.
 */

export type Tag = 'spicy' | 'vegetarian-friendly';

export interface MenuItem {
  code: string;
  name: string;
  description?: string;
  /** Toast pickup starting price, USD (string to preserve cents exactly). */
  price: string;
  /** DoorDash "Good Meal" price when the same dish is listed there. */
  doordash?: string;
  tags?: Tag[];
  /** Landscape photo id (photos.ts `photos`) — used for home highlights. */
  photo?: string;
  /** Portrait photo id (photos.ts `portraits`) — used for menu-page thumbnails; only confirmed matches. */
  portrait?: string;
  /** e.g. "Out of stock" as shown on Toast at research time. */
  note?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  intro?: string;
  items: MenuItem[];
}

export const pricingDisclosure =
  'Prices shown are starting pickup prices from the restaurant’s online ordering (Toast) as of Sept 2026. ' +
  'Delivery prices on DoorDash are higher and include Good Meal (serves 1–2) and Party Meal (serves 8–10) sizes. ' +
  'Dine-in pricing may differ. Menu and prices can change without notice.';

export const menu: MenuCategory[] = [
  {
    id: 'appetizers',
    name: 'Appetizers',
    items: [
      { code: 'A1', name: 'Barbecue Pork', description: 'Char siu — sweet-savory marinated pork, caramelized.', price: '12.97', doordash: '20.99' },
      { code: 'A2', name: 'Fried Chicken Wings', description: 'Crispy wings marinated in Chinese spices.', price: '11.97', portrait: 'wings', doordash: '15.99' },
      { code: 'A3', name: 'Fried Shrimp', description: 'Plump shrimp in a light, crispy batter.', price: '11.97', portrait: 'fried-shrimp', doordash: '15.99' },
      { code: 'A4', name: 'Pot Stickers', description: 'Pan-fried dumplings, crispy bottoms, juicy filling.', price: '11.97', photo: 'pot-stickers', portrait: 'pot-stickers', doordash: '15.99' },
      { code: 'A5', name: 'Vegetable Spring Rolls', description: 'Golden-fried vegetable rolls.', price: '11.97', portrait: 'spring-rolls', doordash: '2.99', tags: ['vegetarian-friendly'] },
      { code: 'A6', name: 'Pocket Bread', description: 'Soft sesame-topped bread pockets.', price: '2.99', portrait: 'pocket-bread', doordash: '2.99', note: 'DoorDash price' },
    ],
  },
  {
    id: 'chefs-special',
    name: "Chef's Special",
    items: [
      { code: 'CS1', name: 'Cumin Beef', description: 'Tender beef with cumin and spices.', price: '21.97', photo: 'cumin-beef', portrait: 'cumin-beef', tags: ['spicy'] },
      { code: 'CS2', name: 'Cumin Lamb', description: 'Tender lamb with cumin and spices.', price: '21.97', tags: ['spicy'] },
      { code: 'CS4', name: 'House Special Lamb', description: 'Lamb stir-fried with aromatic spices and vegetables.', price: '21.97' },
      { code: 'CS5', name: 'Mongolian Lamb', description: 'Lamb with green onions in savory Mongolian sauce.', price: '21.97' },
      { code: 'CS6', name: 'Shredded Chicken with Cilantro', description: 'Light shredded chicken tossed with fresh cilantro.', price: '19.97' },
      { code: 'CS7', name: 'Diced Chicken with Szechuan Garlic Sauce', price: '19.97', tags: ['spicy'] },
    ],
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    items: [
      { code: 'V1', name: 'Eggplant with Tofu', description: 'Eggplant and silky tofu in savory sauce.', price: '16.97', doordash: '18.99', tags: ['spicy', 'vegetarian-friendly'] },
      { code: 'V2', name: 'Hot Braised Green Beans', description: 'Crisp green beans in a spicy, savory sauce.', price: '16.97', photo: 'hot-braised-green-beans', portrait: 'hot-braised-green-beans', doordash: '18.99', tags: ['spicy', 'vegetarian-friendly'] },
      { code: 'V3', name: 'Mapo Tofu', description: 'Soft tofu in fiery Sichuan-pepper sauce.', price: '16.97', portrait: 'mapo-tofu', doordash: '18.99', tags: ['spicy'] },
      { code: 'V4', name: 'Sautéed Broccoli', description: 'Broccoli florets stir-fried with garlic.', price: '16.97', tags: ['vegetarian-friendly'] },
      { code: 'V5', name: 'Sautéed Garden Vegetables', description: 'Fresh seasonal vegetables, quickly stir-fried.', price: '16.97', doordash: '18.99', tags: ['vegetarian-friendly'] },
      { code: 'V6', name: 'Sautéed Snow Peas', description: 'Crisp snow peas with garlic.', price: '18.97', tags: ['vegetarian-friendly'] },
      { code: 'V7', name: 'Sautéed Green Beans', description: 'Green beans with garlic and soy.', price: '16.97', portrait: 'sauteed-green-beans', doordash: '18.99', tags: ['vegetarian-friendly'] },
      { code: 'V8', name: 'Tofu and Vegetables', description: 'Silky tofu and fresh vegetables in savory sauce.', price: '16.97', tags: ['vegetarian-friendly'] },
    ],
  },
  {
    id: 'chicken',
    name: 'Chicken',
    items: [
      { code: 'C1', name: 'Cashew Chicken', description: 'Chicken, crunchy cashews and vegetables in savory sauce.', price: '18.97', photo: 'cashew-chicken', doordash: '20.99' },
      { code: 'C2', name: 'Chicken Broccoli', description: 'Chicken and broccoli in savory sauce.', price: '18.97' },
      { code: 'C3', name: 'Chicken Chop Suey', description: 'Chicken with a colorful array of vegetables.', price: '18.97' },
      { code: 'C4', name: 'Chicken in Hot Garlic Sauce', description: 'Chicken in a fiery garlic sauce.', price: '18.97', tags: ['spicy'] },
      { code: 'C5', name: 'Chicken with Mixed Vegetables', description: 'Chicken with a medley of fresh vegetables.', price: '18.97' },
      { code: 'C6', name: 'Chicken with Snow Peas', description: 'Chicken and crisp snow peas in savory sauce.', price: '18.97' },
      { code: 'C7', name: 'Mongolian Chicken', description: 'Chicken in savory, slightly sweet Mongolian sauce with green onions.', price: '18.97', portrait: 'mongolian-chicken', doordash: '20.99' },
      { code: 'C8', name: 'Curry Chicken', description: 'Chicken in a fragrant, mildly spiced curry.', price: '18.97' },
      { code: 'C9', name: 'Green Beans Chicken', description: 'Chicken and crisp green beans in savory sauce.', price: '18.97' },
      { code: 'C10', name: 'House Special Chicken', description: 'Crispy chicken in a special seasoning blend.', price: '18.97', tags: ['spicy'] },
      { code: 'C11', name: 'Kung Pao Chicken', description: 'Chicken, peanuts and vegetables in spicy sauce.', price: '18.97', photo: 'kung-pao-chicken', doordash: '20.99', tags: ['spicy'] },
      { code: 'C12', name: 'Moo Shu Chicken', description: 'Chicken and vegetables with thin pancakes and hoisin.', price: '18.97' },
      { code: 'C13', name: 'Mushroom Chicken', description: 'Chicken with earthy mushrooms.', price: '18.97' },
      { code: 'C14', name: 'Orange Chicken', description: 'Crispy chicken in tangy-sweet orange sauce.', price: '18.97', photo: 'orange-chicken', portrait: 'orange-chicken', doordash: '20.99', tags: ['spicy'] },
      { code: 'C15', name: 'Spicy Honey Chicken', description: 'Crispy chicken in a sweet-and-spicy honey glaze.', price: '18.97', tags: ['spicy'] },
      { code: 'C16', name: 'Sweet & Sour Chicken', description: 'Chicken in a vibrant sweet and tangy sauce.', price: '18.97', doordash: '20.99' },
    ],
  },
  {
    id: 'beef',
    name: 'Beef',
    items: [
      { code: 'B1', name: 'Beef Broccoli', description: 'Tender beef and broccoli in savory sauce.', price: '19.97', photo: 'beef-broccoli', portrait: 'beef-broccoli', doordash: '21.99' },
      { code: 'B2', name: 'Beef in Hot Garlic Sauce', description: 'Beef strips in spicy garlic sauce.', price: '19.97', doordash: '21.99', tags: ['spicy'] },
      { code: 'B3', name: 'Beef with Bell Pepper', description: 'Beef slices with vibrant bell peppers.', price: '19.97' },
      { code: 'B4', name: 'Beef with Mixed Vegetables', description: 'Beef with crisp, colorful vegetables.', price: '19.97', doordash: '21.99' },
      { code: 'B5', name: 'Beef with Oyster Sauce', description: 'Beef slices in rich oyster sauce.', price: '19.97' },
      { code: 'B6', name: 'Kung Pao Beef', description: 'Beef, peanuts and vegetables in spicy sauce.', price: '19.97', tags: ['spicy'] },
      { code: 'B7', name: 'Mongolian Beef', description: 'Beef in savory, slightly sweet sauce with onions and scallions.', price: '19.97', photo: 'mongolian-beef', portrait: 'mongolian-beef', doordash: '21.99' },
      { code: 'B8', name: 'Orange Beef', description: 'Crispy beef in tangy-sweet orange sauce.', price: '19.97', doordash: '21.99', tags: ['spicy'] },
    ],
  },
  {
    id: 'pork',
    name: 'Pork',
    items: [
      { code: 'P1', name: 'BBQ Pork with Broccoli', description: 'Barbecue pork and broccoli in savory sauce.', price: '18.97', doordash: '20.99' },
      { code: 'P2', name: 'BBQ Pork with Snow Peas', description: 'Barbecue pork with crisp, sweet snow peas.', price: '19.97' },
      { code: 'P3', name: 'Moo Shu Pork', description: 'Pork, vegetables, wood ear mushroom and egg with thin pancakes and hoisin.', price: '18.97' },
      { code: 'P4', name: 'Pork in Hot Garlic Sauce', description: 'Pork strips in fiery garlic sauce.', price: '18.97', doordash: '20.99', tags: ['spicy'] },
      { code: 'P6', name: 'Shredded Pork with Peking Sauce', description: 'Shredded pork in savory, slightly sweet Peking sauce.', price: '18.97' },
      { code: 'P7', name: 'Shredded Pork with Scallion', description: 'Thinly sliced pork with fresh scallions.', price: '18.97', doordash: '20.99' },
    ],
  },
  {
    id: 'seafood',
    name: 'Seafood',
    items: [
      { code: 'S1', name: 'Kung Pao Combination', description: 'Chicken, shrimp and beef with peanuts in spicy Kung Pao sauce.', price: '23.97', portrait: 'kung-pao-combination', doordash: '23.99', tags: ['spicy'] },
      { code: 'S2', name: 'Fish Fillet in Black Bean Sauce', description: 'Tender fish fillets in savory black bean sauce.', price: '22.97', doordash: '23.99' },
      { code: 'S3', name: 'Fish Fillet in Hot Chili Bean Sauce', description: 'Fish fillets in spicy chili bean sauce.', price: '22.97', tags: ['spicy'] },
      { code: 'S4', name: 'Braised Fish Fillet', description: 'Fish fillets slow-cooked in savory, aromatic sauce.', price: '22.97' },
      { code: 'S5', name: 'Braised Shrimp', description: 'Shrimp simmered in savory, aromatic sauce.', price: '22.97' },
      { code: 'S6', name: 'Cashew Shrimp', description: 'Shrimp, crunchy cashews and vegetables in savory sauce.', price: '22.97' },
      { code: 'S7', name: 'Eggplant and Shrimp in Hot Garlic Sauce', description: 'Eggplant and shrimp in fiery garlic sauce.', price: '22.97', tags: ['spicy'] },
      { code: 'S8', name: 'Green Bean Shrimp', description: 'Shrimp and crisp green beans in savory sauce.', price: '22.97' },
      { code: 'S9', name: 'Kung Pao Shrimp', description: 'Shrimp, peanuts and vegetables in spicy sauce.', price: '22.97', tags: ['spicy'] },
      { code: 'S10', name: 'Salt and Pepper Shrimp', description: 'Crispy shrimp with salt, pepper and aromatic spices.', price: '23.97', tags: ['spicy'] },
      { code: 'S11', name: 'Shrimp in Hot Garlic Sauce', description: 'Shrimp in zesty, spicy garlic sauce.', price: '22.97', doordash: '23.99', tags: ['spicy'] },
      { code: 'S12', name: 'Shrimp Vegetable', description: 'Shrimp with a medley of fresh vegetables.', price: '22.97' },
      { code: 'S13', name: 'Shrimp with Curry Sauce', price: '22.97', tags: ['spicy'] },
      { code: 'S14', name: 'Shrimp with Lobster Sauce', description: 'Shrimp in savory egg sauce with minced pork.', price: '23.97', doordash: '23.99' },
      { code: 'S15', name: 'Walnut Shrimp', description: 'Shrimp in creamy honey sauce with candied walnuts.', price: '25.97', photo: 'walnut-shrimp', portrait: 'walnut-shrimp', doordash: '23.99' },
      { code: 'S16', name: 'Tuna Adobo with Sweet Potatoes', description: 'Filipino-style adobo — vinegar, soy, garlic and spices.', price: '22.97', note: 'Out of stock (Toast, Sept 2026)' },
    ],
  },
  {
    id: 'egg-foo-young',
    name: 'Egg Foo Young',
    intro: 'Fluffy pan-fried omelettes with savory gravy.',
    items: [
      { code: 'EF1', name: 'Vegetable Egg Foo Young', price: '18.97', doordash: '21.99', tags: ['vegetarian-friendly'] },
      { code: 'EF2', name: 'Chicken Egg Foo Young', price: '18.97', doordash: '21.99' },
      { code: 'EF3', name: 'Beef Egg Foo Young', price: '19.97', doordash: '21.99' },
      { code: 'EF4', name: 'BBQ Pork Egg Foo Young', price: '19.97', doordash: '21.99' },
      { code: 'EF5', name: 'Shrimp Egg Foo Young', price: '21.97', doordash: '21.99' },
    ],
  },
  {
    id: 'soup',
    name: 'Soup',
    items: [
      { code: 'SO1', name: 'Chicken Corn Soup', description: 'Tender chicken and sweet corn in silky broth.', price: '10.97' },
      { code: 'SO2', name: 'Egg Flower Soup', description: 'Velvety broth with wisps of beaten egg.', price: '10.97' },
      { code: 'SO3', name: 'Hot and Sour Soup', description: 'Tangy, spicy broth with mushrooms, tofu and bamboo shoots.', price: '10.97', tags: ['spicy'] },
      { code: 'SO4', name: 'Vegetable and Tofu Combination Soup', description: 'Light broth with fresh vegetables and silky tofu.', price: '10.97', portrait: 'vegetable-tofu-soup', tags: ['vegetarian-friendly'] },
      { code: 'SO5', name: 'Wor Wonton Soup', description: 'House wonton soup.', price: '11.97', doordash: '9.97' },
    ],
  },
  {
    id: 'rice-noodles',
    name: 'Rice & Noodles',
    items: [
      { code: 'RN1', name: 'House Special Fried Rice', description: 'Shrimp, chicken and Chinese sausage with egg and vegetables.', price: '16.77' },
      { code: 'RN2', name: 'House Special Pan Fried Noodles', description: 'Crispy pan-fried noodles topped with shrimp, chicken and vegetables.', price: '19.77' },
      { code: 'RN3', name: 'House Special Chow Mein', description: 'Egg noodles with shrimp, chicken and vegetables.', price: '16.77' },
      { code: 'RN4', name: 'House Special Chow Fun', description: 'Wide rice noodles with shrimp, chicken and vegetables.', price: '16.77' },
      { code: 'RN5', name: 'House Special Mei Fun', description: 'Rice vermicelli with shrimp, chicken and vegetables.', price: '16.77', doordash: '16.77' },
      { code: 'RN6', name: 'Vegetable Fried Rice', price: '15.77', doordash: '16.99', tags: ['vegetarian-friendly'] },
      { code: 'RN7', name: 'Chicken Fried Rice', price: '15.77', doordash: '16.99' },
      { code: 'RN8', name: 'Beef Fried Rice', price: '16.77', doordash: '16.99' },
      { code: 'RN9', name: 'BBQ Pork Fried Rice', price: '15.77', doordash: '16.99' },
      { code: 'RN10', name: 'Shrimp Fried Rice', price: '16.77', doordash: '16.99' },
      { code: 'RN11', name: 'Vegetable Chow Mein', price: '15.77', tags: ['vegetarian-friendly'] },
      { code: 'RN12', name: 'Chicken Chow Mein', price: '15.77' },
      { code: 'RN13', name: 'Beef Chow Mein', price: '16.77' },
      { code: 'RN14', name: 'BBQ Pork Chow Mein', price: '15.77' },
      { code: 'RN15', name: 'Shrimp Chow Mein', price: '16.77' },
      { code: 'RN16', name: 'Chicken Mei Fun', price: '15.77' },
      { code: 'RN17', name: 'Beef Mei Fun', price: '16.77' },
      { code: 'RN18', name: 'Shrimp Mei Fun', price: '16.77' },
      { code: 'RN19', name: 'Chicken Chow Fun', price: '15.77' },
      { code: 'RN20', name: 'Beef Chow Fun', price: '15.77' },
      { code: 'RN21', name: 'Shrimp Chow Fun', price: '16.77' },
    ],
  },
];

/** Dishes featured on the home page (all have owner-supplied photos and verified listings). */
export const featuredCodes = ['B7', 'S15', 'C11', 'A4', 'V2', 'B1', 'C14', 'CS1'];

export const findItem = (code: string): { item: MenuItem; category: MenuCategory } | undefined => {
  for (const category of menu) {
    const item = category.items.find((i) => i.code === code);
    if (item) return { item, category };
  }
  return undefined;
};
