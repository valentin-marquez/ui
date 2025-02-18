import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const componentCategoryTypes = z.enum([
  'primitives',
  'ui',
  'utilities'
]);


const docs = defineCollection({
  loader: glob({
    pattern: '**/*.mdx',
    base: './src/content/docs'
  }),
  schema: z.object({
    // Basic document properties
    title: z.string(),
    description: z.string(),
    i18nReady: z.boolean().default(false),

    // Component metadata
    status: z.enum(['experimental', 'stable', 'deprecated']).default('stable'),
    category: componentCategoryTypes,
    version: z.string().optional(),

    // Technical documentation
    props: z.array(z.object({
      name: z.string(),
      type: z.string(),
      description: z.string(),
      required: z.boolean().default(false),
      default: z.string().optional(),
    })).optional(),

    // Content metadata
    authors: z.array(z.string()).optional(),
    lastUpdated: z.coerce.date().optional(),
    publishDate: z.coerce.date(),
    draft: z.boolean().default(false),

    // SEO and additional metadata
    ogImage: z.string().optional(),
    canonicalURL: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    slug: z.string().optional(),

  }),
});

// Define author collection schema
const authors = defineCollection({
  loader: glob({
    pattern: '**/*.json',
    base: 'src/content/authors'
  }),
  schema: z.object({
    name: z.string(),
    avatar: z.string().optional(),
    bio: z.string(),
    twitter: z.string().optional(),
    github: z.string().optional(),
  })
});

// Export collections
export const collections = {
  docs,
  authors
};