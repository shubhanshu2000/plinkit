import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import type { InlineConfig } from 'vitest';
import type { UserConfig } from 'vite';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}


export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup"
  }
} as VitestConfigExport)
