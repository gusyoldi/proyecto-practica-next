import { Film } from '../schemas';
import { fetchFilms } from './fetchFilms';

export const fetchFilmById = async (id: string): Promise<Film | null> => {
  const films = await fetchFilms();
  return films.find(f => f.episode_id === Number(id)) ?? null;
};
