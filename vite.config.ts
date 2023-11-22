import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

const resolvePath = (path: string) => resolve(__dirname, path);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/app': resolvePath('./src/app'),
      '@/pages': resolvePath('./src/pages'),
      '@/shared': resolvePath('./src/shared'),
    },
  },
});
