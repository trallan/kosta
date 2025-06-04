// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://trallan.github.io/kosta',
  base: '/kosta',

  vite: {
    plugins: [tailwindcss()],
  },
});