import { Film, filmsResponseSchema } from '../schemas';

export const fetchFilms = async (): Promise<Film[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/films`);
  const data: Film[] = await response.json();

  const parsedData = filmsResponseSchema.safeParse(data);

  if (!parsedData.success) {
    console.error('Error de validación con Zod:', parsedData.error);
    throw new Error('Datos inválidos de la API');
  }

  return parsedData.data.results;
};
