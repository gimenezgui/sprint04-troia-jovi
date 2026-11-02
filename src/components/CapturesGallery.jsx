import useCaptures from '../hooks/useCaptures';

export default function CapturesGallery() {
  const { captures, loading, error } = useCaptures();

  if (loading) {
    return <p role="status" className="text-gray-400">Carregando registros...</p>;
  }

  if (error) {
    return <p role="alert" className="text-red-400">{error}</p>;
  }

  return (
    <section className="mt-10">
      <h2 className="mb-2 text-2xl font-semibold">
        Galeria demonstrativa
      </h2>

      <p className="mb-6 text-gray-400">
        Dados de exemplo obtidos da API JSONPlaceholder.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {captures.map((capture) => (
          <article
            key={capture.id}
            className="rounded-xl border border-white/10 bg-white/5 p-5"
          >
            <span className="text-xs font-bold text-lime-300">
              REGISTRO #{capture.id}
            </span>

            <h3 className="mt-3 line-clamp-2 font-semibold">
              {capture.title}
            </h3>

            <p className="mt-4 text-sm text-gray-400">
              Álbum: {capture.albumId}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}