// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://leosm-07.github.io',
  base: 'mindlin-xyz-2025',
  integrations: [tailwind()],
});
