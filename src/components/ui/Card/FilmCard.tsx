import useNavigateWithParams from '@/lib/hooks/useNavigateWithParams';
import { Film } from '@/lib/schemas';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '.';

interface FilmCardProps {
  film: Film;
  imageUrl?: string;
}

export const FilmCard = ({ film, imageUrl }: FilmCardProps) => {
  const { push } = useNavigateWithParams();
  return (
    <Card>
      <CardHeader>
        {imageUrl && (
          <div className="relative h-48 w-full mb-4">
            <Image src={imageUrl} alt={film.title} fill className="object-cover rounded" />
          </div>
        )}
        <button
          style={{ color: 'red' }}
          onClick={() => push(['FilmDetail'], `/${film.opening_crawl}`, film.opening_crawl)}
        >
          {film.title}
        </button>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Dirigida por {film.director}, estrenada el {film.release_date}
        </p>
      </CardContent>
    </Card>
  );
};
