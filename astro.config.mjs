import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import keystatic from '@keystatic/astro';

export default defineConfig({
  // Output 'server' o 'hybrid' è necessario per Keystatic e Vercel
  output: 'hybrid', 
  adapter: vercel(),
  integrations: [
    react(), 
    keystatic()
  ],
});