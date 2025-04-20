'use client';

import { Film } from '@/lib/schemas';
import Link from 'next/link';

const FilmDetail = ({ film }: { film: Film }) => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10 space-y-6 text-foreground">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-primary">Star Wars: {film.title}</h1>

        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">🎬 Director:</span> {film.director}
        </p>
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">🎥 Productores:</span> {film.producer}
        </p>
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">📅 Fecha de estreno:</span>{' '}
          {film.release_date}
        </p>

        <div className="mt-6 whitespace-pre-line leading-relaxed text-base">
          {film.opening_crawl}
        </div>
      </div>

      <Link
        href="/films"
        className="inline-block text-sm font-medium text-primary hover:underline transition-colors"
      >
        ← Volver a la lista de películas
      </Link>
    </section>
  );
};

export default FilmDetail;
