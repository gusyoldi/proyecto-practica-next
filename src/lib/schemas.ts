import { z } from 'zod';

export const filmSchema = z.object({
  title: z.string(),
  episode_id: z.number(),
  opening_crawl: z.string(),
  director: z.string(),
  producer: z.string(),
  release_date: z.string(),
  species: z.array(z.string()),
  starships: z.array(z.string()),
  vehicles: z.array(z.string()),
  characters: z.array(z.string()),
  planets: z.array(z.string()),
  url: z.string().url(),
  created: z.string(),
  edited: z.string(),
});

export const filmsResponseSchema = z.object({
  count: z.number(),
  results: z.array(filmSchema),
});

export type Film = z.infer<typeof filmSchema>;
