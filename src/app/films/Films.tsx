'use client';

import { FilmCard } from '@/components/ui/Card/FilmCard';
import { useFilms } from '@/lib/hooks/useFilms';

const Films = () => {
  const { films, isLoading, error } = useFilms();

  if (isLoading) return <p>Cargando películas...</p>;
  if (error) return <p className="text-red-500">Error al cargar películas</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {films.map(film => (
        <FilmCard key={film.episode_id} film={film} />
      ))}
    </div>
  );
};

export default Films;
