'use client';

import { Film } from '@/lib/schemas';
import Link from 'next/link';

const FilmDetail = ({ film }: { film: Film }) => {
  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">Star Wars: {film.title}</h1>
        <p className="text-sm text-muted-foreground">
          <strong>Director:</strong> {film.director}
        </p>
        <p className="text-sm text-muted-foreground">
          <strong>Productores:</strong> {film.producer}
        </p>
        <p className="text-sm text-muted-foreground">
          <strong>Fecha de estreno:</strong> {film.release_date}
        </p>
        <div className="mt-4 whitespace-pre-line">{film.opening_crawl}</div>
      </div>
      <Link href="/films" className="hover:underline text-blue-600" style={{ color: 'red' }}>
        Atrás
      </Link>
    </>
  );
};

export default FilmDetail;
