import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // Blog posts in content/blog/*.md
    blog: defineCollection({
      source: 'blog/*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string(),
        category: z.string().optional(),
        image: z.string().optional(),
        author: z.object({
          name: z.string(),
          role: z.string().optional(),
          avatar: z.string().optional(),
          bio: z.string().optional(),
        }),
      })
    }),

    // Branch coin pages in content/coins/*.md
    coins: defineCollection({
      source: 'coins/*.md',
      type: 'page',
    }),

    // Top-level marketing pages in content/*.md
    pages: defineCollection({
      source: '*.md',
      type: 'page',
    })
  }
})


