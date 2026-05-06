// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://SAL84.github.io',
  base: '/AI-Cybersecurity',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
