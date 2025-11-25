import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Output mode: static site generation (default)
  output: 'static',
  
  // Base URL for the site (root path)
  base: '/',
  
  // Trailing slash behavior - 'always' adds trailing slashes to URLs
  trailingSlash: 'always',
  
  // Build configuration
  build: {
    format: 'directory', // Creates /path/index.html instead of /path.html
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
