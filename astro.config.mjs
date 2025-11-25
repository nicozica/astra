import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Otras configuraciones aquí
  buildOptions: {
    baseUrl: '/', // Ruta base personalizada
  },
  vite: {
    preview: {
      allowedHosts: [
        'uxipsos-astra-84a1bc8bfda0.herokuapp.com',
        '.herokuapp.com',
        'localhost',
      ],
    },
  },
});
