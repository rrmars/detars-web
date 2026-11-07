import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro:schema";
import { scenarioLocales } from "./lib/site";

const scenarioLocaleEnum = z.enum(scenarioLocales);

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

// Scenarios are general Cowork outputs, not research-pack reports.
const scenarios = defineCollection({
  // The default loader uses frontmatter.slug as the ID; that would overwrite
  // en/zh siblings sharing the required translation slug. Keep the locale path.
  loader: glob({
    pattern: "**/*.md", base: "./src/content/scenarios",
    generateId: ({ entry }) => entry.replace(/\.md$/, "")
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    locale: scenarioLocaleEnum,
    slug: z.string(),
    translationKey: z.string(),
    domain: z.string(),
    publishedAt: z.coerce.date().nullable(),
    updatedAt: z.coerce.date().nullable(),
    researchDates: z.array(z.string()),
    locales: z.array(scenarioLocaleEnum),
    producerDisplayLabel: z.string(),
    sources: z.array(z.object({ title: z.string(), url: z.string().url(), accessDate: z.string() })),
    headlineFigures: z.record(z.string(), z.unknown()),
    audience: z.union([z.string(), z.record(z.string(), z.string())]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = { research, scenarios };
