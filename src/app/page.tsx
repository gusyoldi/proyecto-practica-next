export default async function Page() {
  return (
    <section className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">
          Explora la Galaxia: Datos del Universo Star Wars
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Bienvenido al archivo galáctico. Aquí puedes explorar personajes, naves, planetas y mucho
          más del universo Star Wars, directamente desde la base de datos oficial.
        </p>
      </div>
    </section>
  );
}
