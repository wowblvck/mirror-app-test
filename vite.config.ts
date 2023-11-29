import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, splitVendorChunkPlugin } from 'vite';

const resolvePath = (path: string) => resolve(__dirname, path);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      '@/app': resolvePath('./src/app'),
      '@/pages': resolvePath('./src/pages'),
      '@/shared': resolvePath('./src/shared'),
      '@/widgets': resolvePath('./src/widgets'),
      '@/entities': resolvePath('./src/entities'),
      '@/features': resolvePath('./src/features'),
    },
  },
});
