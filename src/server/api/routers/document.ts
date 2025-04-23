import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import type { TLEditorSnapshot } from "tldraw";

let storedSnapshot: TLEditorSnapshot | null = null;

export const documentRouter = createTRPCRouter({
  getDocument: publicProcedure.query(() => {
    return storedSnapshot;
  }),

  updateDocument: publicProcedure.input(z.any()).mutation(({ input }) => {
    // console.log("Saving snapshot to memory store:", input);
    storedSnapshot = input as TLEditorSnapshot;
    return { success: true };
  }),
});
