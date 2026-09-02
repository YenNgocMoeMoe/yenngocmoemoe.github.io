import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    category: z.enum(['Công việc', 'Cộng đồng', 'Cá nhân']),
    role: z.string(),
    cover: z.string(),
    color: z.string().default('#d94c36'),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    client: z.string().optional(),
    duration: z.string().optional(),
    impact: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    topic: z.string(),
    cover: z.string(),
    facebookUrl: z.url().optional(),
  }),
});

export const collections = { projects, writing };
