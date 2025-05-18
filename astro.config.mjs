// @ts-check
import { defineConfig } from 'astro/config';

import htmx from 'astro-htmx';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [htmx()],
  output: "server",

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: node({
    mode: 'standalone'
  })
});