/**
 * Base-path helper. When deployed under a sub-path (e.g. GitHub Pages project site
 * https://<user>.github.io/family-mongolian-bbq/), every internal link and public asset must be
 * prefixed with Astro's BASE_URL. On a root domain, build with BASE_PATH unset and nothing changes.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a root-relative path ("/menu/", "/img/x.webp") with the configured base. */
export const withBase = (path: string): string => `${base}${path.startsWith('/') ? path : `/${path}`}`;

/** Compare a base-prefixed pathname (Astro.url.pathname) with a root-relative route. */
export const isCurrentPath = (pathname: string, route: string): boolean =>
  pathname.replace(/\/?$/, '/') === withBase(route).replace(/\/?$/, '/');
