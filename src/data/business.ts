/**
 * Centralized business data for Family Mongolian BBQ.
 *
 * SOURCE OF TRUTH (Sept 17, 2026):
 *  1. Owner instructions (master blueprint) + owner-supplied Yelp screenshot (address, phone, hours).
 *  2. Owner-approved storefront photo: the printed HOURS sign in the window reads
 *     "SUN.–THURS. 11:00am–9:00pm / FRI.–SAT. 11:00am–9:30pm" — matches the Yelp screenshot exactly.
 *  3. DoorDash store page (loaded in a real browser Sept 17, 2026): name, address, geo, rating.
 *  4. Toast online-ordering page (loaded Sept 17, 2026): address line "2321 Tapo Street, Suite G",
 *     "Serving authentic Asian cuisine since 2013" (merchant-entered restaurant info).
 *
 * Anything that could not be verified is marked NEEDS OWNER CONFIRMATION and is NOT rendered publicly.
 * See docs/business-intake-and-facts.md for the full fact & conflict report.
 */

export interface DayHours {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  /** ISO weekday: 1 = Monday … 7 = Sunday */
  iso: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  /** 24h "HH:MM" or null when closed */
  opens: string | null;
  closes: string | null;
  display: string;
}

export const business = {
  name: 'Family Mongolian BBQ',
  /** Two-line wordmark as it appears on the storefront sign (red FAMILY / black MONGOLIAN BBQ). */
  wordmark: { top: 'Family', bottom: 'Mongolian BBQ' },
  category: 'Mongolian BBQ restaurant',
  cuisine: ['Mongolian', 'Chinese', 'Asian'],
  serviceStyle: 'Dine-in · Takeout · Delivery',
  /** Sourced from Toast merchant info ("Serving authentic Asian cuisine since 2013"). */
  since: 2013,
  description:
    'Family Mongolian BBQ in Simi Valley, CA: build-your-own Mongolian BBQ bowls grilled fresh for dine-in, plus a full Chinese menu of wok-fried chicken, beef, pork, seafood, noodles and soups for pickup and delivery on Tapo Street.',

  address: {
    street: '2321 Tapo St',
    unit: 'Suite G',
    city: 'Simi Valley',
    region: 'CA',
    postalCode: '93063',
    country: 'US',
    get line(): string {
      return `${this.street} ${this.unit}, ${this.city}, ${this.region} ${this.postalCode}`;
    },
  },

  /** Coordinates as published on the DoorDash store header (schema + map links only). */
  geo: { latitude: 34.277487, longitude: -118.710301 },

  phone: { display: '(805) 527-1966', e164: '+18055271966' },

  timezone: 'America/Los_Angeles',

  /**
   * Dining-room hours. Source: owner-supplied Yelp screenshot, confirmed by the printed hours sign
   * visible in the approved storefront photo. (Online-ordering cutoffs are earlier — see below.)
   */
  hours: [
    { day: 'Monday', iso: 1, opens: '11:00', closes: '21:00', display: '11 AM – 9 PM' },
    { day: 'Tuesday', iso: 2, opens: '11:00', closes: '21:00', display: '11 AM – 9 PM' },
    { day: 'Wednesday', iso: 3, opens: '11:00', closes: '21:00', display: '11 AM – 9 PM' },
    { day: 'Thursday', iso: 4, opens: '11:00', closes: '21:00', display: '11 AM – 9 PM' },
    { day: 'Friday', iso: 5, opens: '11:00', closes: '21:30', display: '11 AM – 9:30 PM' },
    { day: 'Saturday', iso: 6, opens: '11:00', closes: '21:30', display: '11 AM – 9:30 PM' },
    { day: 'Sunday', iso: 7, opens: '11:00', closes: '21:00', display: '11 AM – 9 PM' },
  ] as DayHours[],

  hoursSummary: [
    { label: 'Sun – Thu', value: '11 AM – 9 PM' },
    { label: 'Fri – Sat', value: '11 AM – 9:30 PM' },
  ],

  /** Verified Sept 17, 2026: DoorDash last order 8:40 PM; Toast pickup closes 8:45 PM (Sun–Thu) / 9:15 PM (Fri–Sat). */
  orderingCutoffNote: 'Online ordering closes a little before the dining room does. Holiday hours may differ — call ahead.',

  /**
   * Primary ordering destination (owner-supplied; loaded and confirmed as the correct store on
   * Sept 17, 2026 — "Family Mongolian BBQ", 2321 Tapo St G, store id 25203837).
   */
  order: {
    doordash: {
      name: 'DoorDash',
      url: 'https://www.doordash.com/store/family-mongolian-bbq-simi-valley-25203837/',
      blurb: 'Delivery or pickup',
    },
    /**
     * Restaurant's own Toast online-ordering page (pickup only). Discovered during research and loaded
     * successfully; not in the owner's original instructions — NEEDS OWNER CONFIRMATION to keep.
     */
    toast: {
      name: 'Toast',
      url: 'https://www.toasttab.com/local/order/family-mongolian-bbq-simi-valley-2321-tapo-street-g',
      blurb: 'Pickup, ordered direct',
    },
  },

  /** Google Maps search deep link built from the verified street address (Maps URL API). */
  directionsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Family Mongolian BBQ, 2321 Tapo St Suite G, Simi Valley, CA 93063'),

  /**
   * Public proof. Only the DoorDash rating was directly observed on the live store page
   * (Sept 17, 2026). Yelp blocks automated access; its public search listing showed
   * "356 reviews · 195 photos" (Aug 2026) but no star value could be verified, so no Yelp rating is shown.
   */
  proof: {
    doordash: { rating: '4.5', ratingsLabel: '100+ ratings', source: 'DoorDash', observed: '2026-09-17' },
  },

  /** NEEDS OWNER CONFIRMATION — not rendered anywhere public. */
  unconfirmed: {
    email: null,
    socialLinks: null,
    domain: null,
    logoMaster: null,
    dineInPrices: null,
    mongolianBbqBowlPricing: null,
    reservations: null,
    catering: null,
  },
} as const;
