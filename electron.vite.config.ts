import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin(), tsconfigPaths()],
  },
  preload: {
    plugins: [externalizeDepsPlugin(), tsconfigPaths()],
  },
  renderer: {
    plugins: [svelte(), tsconfigPaths()],
  },
});
