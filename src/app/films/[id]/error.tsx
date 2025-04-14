'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error('Error en FilmDetail:', error);
  }, [error]);

  return (
    <div className="p-4 text-center text-red-600">
      <h2 className="text-xl font-bold">Hubo un problema al cargar la película.</h2>
      <button
        onClick={() => reset()}
        className="mt-4 bg-red-100 hover:bg-red-200 text-red-800 px-4 py-2 rounded "
        style={{ color: 'red' }}
      >
        Reintentar
      </button>
      <Link href="/films" className="hover:underline text-blue-600" style={{ color: 'red' }}>
        Atrás
      </Link>
    </div>
  );
}
