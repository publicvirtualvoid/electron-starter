import { initTRPC } from '@trpc/server';

const t = initTRPC.create({ isServer: true });

export const router = t.router({
  marco: t.procedure.query(() => ({ text: 'Polo' })),
});

export type AppRouter = typeof router;
