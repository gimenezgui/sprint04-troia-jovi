import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#0b0d0c] p-6 text-white">
      <h1 className="text-4xl font-bold">JOVI Scene</h1>
      <p className="text-gray-400">Acesso à área do usuário</p>
      <p className="text-lime-300">Autenticação em desenvolvimento</p>
      <Link to="/" className="underline">Voltar ao início</Link>
    </main>
  );
}