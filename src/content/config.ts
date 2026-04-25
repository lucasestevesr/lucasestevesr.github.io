import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    lang: z.enum(["pt", "en"]),
    draft: z.boolean().default(false)
  })
});

export const collections = {
  blog
};
