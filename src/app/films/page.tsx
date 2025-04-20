import Films from './Films';

export default async function Page() {
  return (
    <section className="min-h-screen bg-background text-foreground px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
          Estas son las películas de Star Wars
        </h1>
        <Films />
      </div>
    </section>
  );
}
