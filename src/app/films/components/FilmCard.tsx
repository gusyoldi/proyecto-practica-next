import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Film } from '@/lib/schemas';
import Image from 'next/image';
import Link from 'next/link';

interface FilmCardProps {
  film: Film;
  imageUrl?: string;
}

export const FilmCard = ({ film }: FilmCardProps) => {
  const imageUrl = `/images/films/film-${film.episode_id}.webp`;

  return (
    <Card className="w-full max-w-sm pt-0">
      <Link href={`/films/${film.episode_id}`} className="flex flex-col gap-4 ">
        {imageUrl && (
          <CardContent className="px-0">
            <div className="relative h-[400px] w-full overflow-hidden rounded-t-xl cursor-pointer">
              <Image src={imageUrl} alt={film.title} fill className="object-cover rounded" />
            </div>
          </CardContent>
        )}
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            <h3 className="text-primary hover:underline">Star Wars: {film.title}</h3>
          </CardTitle>
        </CardHeader>
      </Link>
    </Card>
  );
};
