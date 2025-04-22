import { createTRPCRouter, publicProcedure } from "../trpc";

const storedDocument: Record<string, unknown> = {};

export const documentRouter = createTRPCRouter({
  getDocument: publicProcedure.query(() => {
    console.log("📤 Sending snapshot:", storedDocument);
    return storedDocument;
  }),
});
