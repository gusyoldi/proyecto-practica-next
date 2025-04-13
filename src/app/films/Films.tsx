'use client';

import { FilmCard } from '@/components/ui/Card/Card';
import { Film } from '@/lib/schemas';

interface FilmsProps {
  films: Film[];
}

const Films = ({ films }: FilmsProps) => {
  console.log(films);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {films.map(film => (
        <FilmCard key={film.episode_id} film={film} />
      ))}
    </div>
  );
};

export default Films;
