import { Film } from '../schemas';
import { fetchFilms } from './fetchFilms';

export const fetchFilmById = async (id: number): Promise<Film | null> => {
  const films = await fetchFilms();
  return films.find(f => f.episode_id === id) ?? null;
};
