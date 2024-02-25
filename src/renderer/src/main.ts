import './assets/main.css';
import { createTRPCProxyClient } from '@trpc/client';
import { ipcLink } from 'electron-trpc/renderer';
import App from './App.svelte';

export const client = createTRPCProxyClient({
  links: [ipcLink()],
});

const app = new App({
  target: document.getElementById('app'),
});

export default app;
