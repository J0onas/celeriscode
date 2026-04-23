import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number().default(0),
    ctaText: z.string().default('Más información'),
    highlight: z.string().optional(),
    deliverables: z.array(z.string()).default([]),
    idealFor: z.array(z.string()).default([]),
    scopeBase: z.array(z.string()).default([]),
    notIncluded: z.array(z.string()).default([]),
    notIdealFor: z.array(z.string()).default([]),
    ctaOffer: z.string().optional(),
    pricingHint: z.string().optional(),
    duration: z.string().optional(),
  }),
});

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    projectType: z.enum(['landing-page', 'multipage', 'ecommerce', 'saas']),
    date: z.date(),
    image: z.string(),
    url: z.string().url(),
    tags: z.array(z.string()),
    summary: z.string(),
    isFeatured: z.boolean().default(false),
    results: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    challenge: z.string().optional(),
    solution: z.string().optional(),
    impactMetrics: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        })
      )
      .default([]),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    description: z.string().optional(),
    date: z.date(),
    author: z.string().default('Equipo Celeris Code'),
    tags: z.array(z.string()).default([]),
    cover: z.string(),
    isFeatured: z.boolean().default(false),
    readingTime: z.string().default('5 min'),
  }),
});

export const collections = {
  services: services,
  cases: cases,
  blog: blog,
};
