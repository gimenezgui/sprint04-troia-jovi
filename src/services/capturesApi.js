
const API_URL = 'https://jsonplaceholder.typicode.com/photos';

export async function getCaptures(signal) {
  const response = await fetch(`${API_URL}?_limit=12`, {
    signal,
  });

  if (!response.ok) {
    throw new Error('Não foi possível carregar os registros.');
  }

  const data = await response.json();

  return data.map((item) => ({
    id: item.id,
    title: item.title,
    albumId: item.albumId,
  }));
}
