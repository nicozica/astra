import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server', 
  adapter: node({
    mode: 'standalone', 
  }),
  site: process.env.SITE_URL || 'https://uxipsos-astra.herokuapp.com',  // Usar variable de entorno si está disponible
});