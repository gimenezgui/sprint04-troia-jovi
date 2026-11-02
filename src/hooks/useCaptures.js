import { useEffect, useState } from 'react';
import { getCaptures } from '../services/capturesApi';

export default function useCaptures() {
  const [captures, setCaptures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadCaptures() {
      try {
        setLoading(true);
        const data = await getCaptures();
        if (!controller.signal.aborted) {
          setCaptures(data);
        }
      } catch {
        if (!controller.signal.aborted) {
          setError('Erro ao carregar os dados da API.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadCaptures();

    return () => controller.abort();
  }, []);

  return { captures, loading, error };
}