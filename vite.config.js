import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';
import dotenv from 'dotenv';

dotenv.config();

const baseURL = process.env.VITE_APP_BASE_URL;

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      '/devapi': {
        target: baseURL,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/devapi/, ''),
      },
    },
  },
});