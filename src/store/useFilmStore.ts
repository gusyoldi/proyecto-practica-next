import { Film } from '@/lib/schemas';
import { create } from 'zustand';

interface FilmStore {
  films: Film[];
  setFilms: (films: Film[]) => void;
}

export const useFilmStore = create<FilmStore>(set => ({
  films: [],
  setFilms: films => set({ films }),
}));
