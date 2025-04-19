import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Film } from '@/lib/schemas';
import Image from 'next/image';
import Link from 'next/link';

interface FilmCardProps {
  film: Film;
  imageUrl?: string;
}

export const FilmCard = ({ film, imageUrl }: FilmCardProps) => {
  return (
    <Card>
      <CardContent>
        {imageUrl && (
          <div className="relative h-48 w-full mb-4">
            <Image src={imageUrl} alt={film.title} fill className="object-cover rounded" />
          </div>
        )}
      </CardContent>
      <CardFooter>
        <CardTitle>
          <Link href={`/films/${film.episode_id}`} style={{ color: 'red' }}>
            <span className="text-red-600 hover:underline cursor-pointer">
              Star Wars: {film.title}
            </span>
          </Link>
        </CardTitle>
      </CardFooter>
    </Card>
  );
};
