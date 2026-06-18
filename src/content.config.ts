import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro:schema";

// Research reports — see site-pack 17 (content engine spec).
// Each report is produced by the research pack, evidence-sealed, peer-reviewed,
// and human-checked before draft:false. Drafts are excluded from production builds.
const research = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    locale: z.enum(["en", "zh"]),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default("DeTars Research"),
    generatedBy: z.string().default("pack:research"),
    reviewed: z
      .object({
        receipt: z.boolean().default(false),
        sealedCitations: z.boolean().default(false),
        peerReview: z.boolean().default(false),
        humanCheck: z.string().optional()
      })
      .optional(),
    sources: z
      .array(z.object({ title: z.string(), url: z.string().url(), hash: z.string().optional() }))
      .default([]),
    tldr: z.string().optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = { research };
