import { defineCollection, z } from "astro:content";
const activities = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    type: z.string(),
    cover: z.string(),

    description: z.string().optional(),
    duration: z.string().optional(),
    modality: z.string().optional(),

    // nuevo
    status: z.enum(["proximamente", "abierto", "cerrado"]).optional(),
    date: z.string().optional(), // "2026-03-10" o "Marzo 2026"

    // lo dejamos optional
    formUrl: z.string().url().optional(),

    // si los estás usando en el MD actual, también deberían existir aquí:
    objectives: z.array(z.string()).optional(),
    requirements: z.array(z.string()).optional(),
    structure: z
      .array(
        z.object({
          phase: z.string(),
          details: z.array(z.string()).optional(),
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
