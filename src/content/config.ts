import { defineCollection, z } from "astro:content";

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    wixDetailsUrl: z.string().optional(),
    summary: z.string().optional(),
    startText: z.string().optional(),
  }),
});

export const collections = { events };
