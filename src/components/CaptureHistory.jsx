import { useEffect, useState } from 'react';

const STORAGE_KEY = 'troia-capture-history';

export default function CaptureHistory() {
  const [captures, setCaptures] = useState([]);

  useEffect(() => {
    function loadCaptures() {
      try {
        const saved = JSON.parse(
          localStorage.getItem(STORAGE_KEY) || '[]'
        );

        setCaptures(Array.isArray(saved) ? saved : []);
      } catch {
        setCaptures([]);
      }
    }

    loadCaptures();

    window.addEventListener('storage', loadCaptures);

    return () => {
      window.removeEventListener('storage', loadCaptures);
    };
  }, []);

  function clearHistory() {
    localStorage.setItem(STORAGE_KEY, '[]');
    setCaptures([]);
  }

  return (
    <section className="mt-12">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold tracking-widest text-lime-300">
            JOVI SCENE / HISTÓRICO
          </p>

          <h2 className="mt-2 text-2xl font-semibold">
            Minhas capturas simuladas
          </h2>
        </div>

        {captures.length > 0 && (
          <button
            type="button"
            onClick={clearHistory}
            className="rounded-lg border border-red-400/40 px-4 py-2 text-sm text-red-300 hover:bg-red-400/10"
          >
            Limpar histórico
          </button>
        )}
      </div>

      {captures.length === 0 ? (
        <div className="rounded-xl border border-white/10 bg-white/5 p-8">
          <p className="text-gray-400">
            Você ainda não realizou nenhuma captura simulada.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {captures.map((capture) => (
            <article
              key={capture.id}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-xs font-bold tracking-widest text-lime-300">
                SCENE AI
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                {capture.modeName}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {capture.createdAt}
              </p>

              <div className="mt-5 flex justify-between border-t border-white/10 pt-4 text-sm">
                <span>Confiança</span>
                <strong className="text-lime-300">
                  {capture.confidence}%
                </strong>
              </div>

              <div className="mt-3 flex justify-between text-sm">
                <span>Tamanho estimado</span>
                <strong>{capture.fileSize} MB</strong>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}