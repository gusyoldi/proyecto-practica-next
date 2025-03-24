export async function GET() {
  try {
    const response = await fetch('https://swapi.dev/api/people/1');
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error: 'Error fetching data' }, { status: 500 });
  }
}
