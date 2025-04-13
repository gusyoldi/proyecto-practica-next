import Films from './films/Films';

export default async function Page() {
  return (
    <div>
      <h1 className="text-red-500">Home</h1>
      <Films />
    </div>
  );
}
