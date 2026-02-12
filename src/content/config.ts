import { defineCollection, z } from "astro:content";

const activities = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    type: z.string(),
    cover: z.string(),
    formUrl: z.string().url(),
    slug: z.string().optional(),
  }),
});

const courses = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    cover: z.string(),
    slug: z.string().optional(),

    // opcionales (para el detalle bonito)
    description: z.string().optional(),
    level: z.string().optional(),
    duration: z.string().optional(),

    objectives: z.array(z.string()).optional(),
    prerequisites: z.array(z.string()).optional(),

    syllabus: z
      .array(
        z.object({
          module: z.string(),
          topics: z.array(z.string()).optional(),
        })
      )
      .optional(),

    resources: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
          note: z.string().optional(),
        })
      )
      .optional(),
  }),
});


export const collections = { activities, courses };
