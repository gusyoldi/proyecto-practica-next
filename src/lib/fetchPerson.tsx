export async function fetchPerson() {
  const res = await fetch('https://swapi.dev/api/people/1');
  return await res.json();
}
