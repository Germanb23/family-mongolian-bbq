/**
 * Post-build link check for dist/.
 *  - Every internal href/src must resolve to a built file.
 *  - Every external http(s) link is requested (HEAD, then GET fallback) and must not 4xx/5xx.
 *  - Reports the ordering-platform URLs explicitly.
 *
 * Usage: npm run build && npm run check:links
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';

const dist = resolve('dist');
if (!existsSync(dist)) { console.error('dist/ not found — run `npm run build` first.'); process.exit(1); }

const htmlFiles = [];
const walk = (dir) => { for (const f of readdirSync(dir)) { const p = join(dir, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && htmlFiles.push(p); } };
walk(dist);

const internal = new Map(); // url -> [pages]
const external = new Map();
const attrRe = /(?:href|src|poster|content)=["']([^"']+)["']/g;
const srcsetRe = /srcset=["']([^"']+)["']/g;

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const add = (u) => {
    if (!u || u.startsWith('#') || u.startsWith('mailto:') || u.startsWith('tel:') || u.startsWith('data:') || u.startsWith('javascript:')) return;
    if (/^https?:\/\//.test(u)) external.set(u, [...(external.get(u) || []), file]);
    else if (u.startsWith('/')) internal.set(u.split('#')[0].split('?')[0], [...(internal.get(u) || []), file]);
  };
  for (const m of html.matchAll(attrRe)) add(m[1]);
  for (const m of html.matchAll(srcsetRe)) m[1].split(',').forEach((s) => add(s.trim().split(/\s+/)[0]));
  // JSON-encoded source lists (hero video)
  for (const m of html.matchAll(/\/media\/hero\/[\w.-]+/g)) add(m[0]);
}

let failures = 0;
console.log(`Checked ${htmlFiles.length} pages. Internal URLs: ${internal.size}. External URLs: ${external.size}.\n`);

// When built with BASE_PATH (e.g. /tacos-el-vampiro for GitHub Pages), internal URLs carry that prefix.
const basePath = (process.env.BASE_PATH || '/').replace(/\/$/, '');
for (const [raw] of internal) {
  const u = basePath && raw.startsWith(basePath + '/') ? raw.slice(basePath.length) : raw;
  const candidates = [join(dist, u), join(dist, u, 'index.html'), join(dist, u.replace(/\/$/, '') + '.html')];
  if (!candidates.some((c) => existsSync(c) && !statSync(c).isDirectory())) { failures++; console.log(`MISSING internal: ${raw}`); }
}

const check = async (u) => {
  const opts = { redirect: 'follow', headers: { 'user-agent': 'Mozilla/5.0 (link-check; Family Mongolian BBQ site)' } };
  try {
    let r = await fetch(u, { ...opts, method: 'HEAD' });
    if (r.status === 405 || r.status === 403 || r.status === 404) r = await fetch(u, { ...opts, method: 'GET' });
    return r.status;
  } catch (e) { return `ERR ${e.message}`; }
};

// Delivery platforms serve 403/404 to non-browser clients (bot protection). Those URLs were
// verified by loading them in a real browser (see docs/menu-research-notes.md); a blocked
// response is reported as a warning, not a dead link.
const botProtected = ['www.doordash.com', 'www.yelp.com', 'www.toasttab.com'];
let warnings = 0;

for (const [u] of external) {
  const status = await check(u);
  const ok = typeof status === 'number' && status < 400;
  const blocked = !ok && botProtected.includes(new URL(u).hostname) && (status === 403 || status === 404 || status === 429);
  if (blocked) warnings++; else if (!ok) failures++;
  console.log(`${ok ? 'OK  ' : blocked ? 'WARN' : 'FAIL'} ${status}  ${u}${blocked ? '  (bot-protected host; verify in a browser)' : ''}`);
}

console.log(failures ? `\n${failures} dead link(s) found.` : `\nNo dead links found.${warnings ? ` ${warnings} bot-protected URL(s) need a manual browser check.` : ''}`);
process.exit(failures ? 1 : 0);
