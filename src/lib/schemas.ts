import { z } from 'zod';

export const filmSchema = z.object({
  title: z.string(),
  episode_id: z.number(),
  director: z.string(),
  producer: z.string(),
  release_date: z.string(),
});

export const filmsResponseSchema = z.object({
  count: z.number(),
  results: z.array(filmSchema),
});

export type Film = z.infer<typeof filmSchema>;
