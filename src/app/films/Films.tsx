'use client';

interface Film {
  title: string;
  director: string;
  release_date: string;
}

interface FilmsProps {
  films: Film[];
}

const Films = ({ films }: FilmsProps) => {
  console.log(films);
  return (
    <div>
      {films.map((film, index) => (
        <div key={index} className="mb-4 p-4 border rounded shadow">
          <h2 className="text-xl font-bold">{film.title}</h2>
          <p>Director: {film.director}</p>
          <p>Fecha de estreno: {film.release_date}</p>
        </div>
      ))}
    </div>
  );
};

export default Films;
