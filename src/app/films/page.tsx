import Films from './Films';

export default async function Page() {
  return (
    <div>
      <h1 className="text-red-500">Estas son las peliculas de Star Wars</h1>
      <Films />
    </div>
  );
}
