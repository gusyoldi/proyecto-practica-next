import { GET } from './api/route';

export default async function Page() {
  const data = await GET();
  console.log(data);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
