import { fetchFilms } from '@/lib/fetchFilms';
import Films from './films/Films';

export default async function Page() {
  const data = await fetchFilms();

  return (
    <div>
      <h1 className="text-red-500">Home</h1>
      <Films films={data} />
    </div>
  );
}
