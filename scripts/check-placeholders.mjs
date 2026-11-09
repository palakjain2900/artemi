#!/usr/bin/env node
// Lists every placeholder left on the site and blocks production builds while any exist.
//
// Runs automatically after `astro build`. On Vercel:
//   • Preview deployments: prints the list as a warning, build continues.
//   • Production deployments (VERCEL_ENV=production): build FAILS if anything is listed,
//     so placeholder content can never reach artemi.in.
// Run locally with:  npm run check:placeholders   (add --strict to fail like production)

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const dist = join(root, 'dist');
const strict = process.env.VERCEL_ENV === 'production' || process.argv.includes('--strict');

if (!existsSync(dist)) { console.error('No dist/ folder. Run `npm run build` first.'); process.exit(1); }

const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
});

const findings = [];

// 1. Placeholder markers rendered on pages
for (const file of walk(dist)) {
  const html = readFileSync(file, 'utf8');
  const page = '/' + relative(dist, file).replace(/\.html$/, '').replace(/(^|\/)index$/, '');
  for (const m of html.matchAll(/data-placeholder="([^"]*)"/g)) findings.push({ where: page || '/', what: m[1] });
}

// 2. Integration IDs and links still unset in the config
const config = readFileSync(join(root, 'src/config/site.ts'), 'utf8');
for (const m of config.matchAll(/^\s*(\w+):\s*'(PLACEHOLDER[^']*)'/gm)) findings.push({ where: 'src/config/site.ts', what: `${m[1]} = ${m[2]}` });

// 3. Founder photo still the placeholder image
const photo = join(root, 'public/images/palak.jpg');
if (existsSync(photo) && readFileSync(photo).includes('ARTEMI-PLACEHOLDER-IMAGE')) findings.push({ where: 'public/images/palak.jpg', what: 'founder photo is the placeholder image' });

// Report
const byWhere = findings.reduce((acc, f) => ((acc[f.where] ||= []).push(f.what), acc), {});
const line = '─'.repeat(64);
if (!findings.length) { console.log(`\n${line}\n✓ No placeholders left. Safe to deploy to production.\n${line}\n`); process.exit(0); }

console.log(`\n${line}\nPLACEHOLDER CHECK: ${findings.length} item(s) still need real content\n${line}`);
for (const [where, items] of Object.entries(byWhere).sort()) {
  console.log(`\n${where}`);
  const counts = items.reduce((a, i) => ((a[i] = (a[i] || 0) + 1), a), {});
  for (const [what, n] of Object.entries(counts)) console.log(`  • ${what}${n > 1 ? `  (×${n})` : ''}`);
}
console.log(`\n${line}`);
if (strict) {
  console.error('✗ Production build blocked: replace the placeholders above first.\n');
  process.exit(1);
}
console.log('Preview build: allowed. Production builds will be blocked until this list is empty.\n');
