import { filmsResponseSchema } from './schemas';

export const fetchFilms = async () => {
  const response = await fetch('https://swapi.dev/api/films');
  const data = await response.json();

  const parsedData = filmsResponseSchema.safeParse(data);

  if (!parsedData.success) {
    console.error('Error de validación con Zod:', parsedData.error);
    throw new Error('Datos inválidos de la API');
  }

  return parsedData.data.results;
};
