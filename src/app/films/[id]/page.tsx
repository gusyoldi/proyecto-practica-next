import { fetchFilmById } from '@/lib/services/fetchFilmById';
import { notFound } from 'next/navigation';
import FilmDetail from '../components/FilmDetails';

interface Props {
  params: { id: string };
}

export default async function Page({ params }: Props) {
  const film = await fetchFilmById(params.id);
  if (!film) return notFound();

  return <FilmDetail film={film} />;
}
