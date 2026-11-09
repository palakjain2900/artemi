import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://artemi.in',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  integrations: [
    sitemap({ filter: (page) => !page.includes('/thank-you') }),
  ],
});
