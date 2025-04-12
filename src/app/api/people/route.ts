import { fetchPerson } from '@/lib/fetchPerson';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = await fetchPerson();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}
