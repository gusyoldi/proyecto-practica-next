import { fetchFilms } from '@/lib/services/fetchFilms';
import { useFilmStore } from '@/store/useFilmStore';
import useSWR from 'swr';

export const useFilms = () => {
  const { setFilms } = useFilmStore();

  const { data, error, isLoading } = useSWR('films', fetchFilms, {
    onSuccess: data => {
      setFilms(data);
    },
  });

  return {
    films: data || [],
    isLoading,
    error,
  };
};
