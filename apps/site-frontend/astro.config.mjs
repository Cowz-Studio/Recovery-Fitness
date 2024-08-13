import react from "@astrojs/react";
import { defineConfig } from "astro/config";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://recovery-fitness.club/',
  integrations: [react(), robotsTxt()],
  prefetch: {
    prefetchAll: true
  }
});