import { fetchFilms } from '@/lib/services/fetchFilms';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = await fetchFilms();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}
