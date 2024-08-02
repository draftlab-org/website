import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'
import yaml from '@rollup/plugin-yaml'

// https://astro.build/config
export default defineConfig({
  site: 'https://draftlab.org',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false, nesting: true }),
    partytown(),
    mdx(),
    sitemap(),
    icon(),
  ],
  vite: {
    plugins: [yaml()],
  },
})
