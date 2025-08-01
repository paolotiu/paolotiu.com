import { defineCollection, defineConfig } from '@content-collections/core';
import { z } from 'zod';

const posts = defineCollection({
  name: 'posts',
  directory: 'content/posts',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.string(),
    tags: z.string(),
  }),
});

export default defineConfig({
  collections: [posts],
});
