import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#0b0d0c] p-8 text-white">
      <h1 className="text-4xl font-bold">Dashboard JOVI Scene</h1>
      <p className="mt-4 text-gray-400">
        Área de gerenciamento das capturas.
      </p>
      <Link to="/" className="mt-8 inline-block text-lime-300">
        Voltar ao início
      </Link>
    </main>
  );
}