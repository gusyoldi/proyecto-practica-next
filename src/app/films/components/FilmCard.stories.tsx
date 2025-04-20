import film1Img from '@/../public/images/films/film-4.webp';
import type { Film } from '@/lib/schemas';
import type { Meta, StoryObj } from '@storybook/react';
import { FilmCard } from './FilmCard';

const meta: Meta<typeof FilmCard> = {
  title: 'Components/Molecules/FilmCard',
  component: FilmCard,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ maxWidth: '360px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FilmCard>;

const mockFilm: Film = {
  title: 'A New Hope',
  episode_id: 4,
  opening_crawl:
    'It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire...',
  director: 'George Lucas',
  producer: 'Gary Kurtz, Rick McCallum',
  release_date: '1977-05-25',
  characters: [],
  planets: [],
  starships: [],
  vehicles: [],
  species: [],
  created: '2014-12-10T14:23:31.880000Z',
  edited: '2014-12-20T19:49:45.256000Z',
  url: 'https://swapi.dev/api/films/1/',
};

export const Default: Story = {
  args: {
    film: mockFilm,
    imageUrl: film1Img.src,
  },
};
