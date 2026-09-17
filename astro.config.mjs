// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Family Mongolian BBQ — static site configuration.
 *
 * `site` comes from SITE_URL at build time. No public domain has been confirmed by the owner, so no
 * canonical origin is baked in; absolute OG/canonical URLs are only emitted when SITE_URL exists.
 * For a GitHub Pages project site set BASE_PATH=/<repo-name>; leave unset for a root domain.
 * All internal links and public asset paths go through src/lib/paths.ts.
 */
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
  image: { responsiveStyles: true },
  devToolbar: { enabled: false },
});
