import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
// https://astro.build/config
export default defineConfig({
    site: 'https://yeehawlerz101.github.io',
    base: '/ao-profile',
    vite: {
        plugins: [tailwindcss()]
    },

    integrations: [svelte()]
});