import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="p-4 text-center text-gray-600">
      <h2 className="text-xl font-semibold">Película no encontrada</h2>
      <p>La película que estás buscando no existe o fue eliminada.</p>
      <Link href="/films" className="hover:underline text-blue-600" style={{ color: 'red' }}>
        Atrás
      </Link>
    </div>
  );
}
