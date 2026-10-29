// @ts-check
import { defineConfig } from 'astro/config';

// Static build. Cloudflare Pages serves ./dist and runs ./functions (the lead form endpoint).
export default defineConfig({
  site: 'https://correctivechiropractic.com',
  output: 'static',
  build: { inlineStylesheets: 'auto' },
  image: { responsiveStyles: false },
});
