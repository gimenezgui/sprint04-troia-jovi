import { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [name, setName] = useState('');
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const destination = location.state?.from?.pathname || '/dashboard';

  if (user) {
    return <Navigate to={destination} replace />;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) return;

    login(name.trim());
    navigate(destination, { replace: true });
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0d0c] px-6 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8">
        <p className="mb-3 text-sm font-semibold tracking-widest text-lime-300">
          JOVI SCENE
        </p>

        <h1 className="mb-3 text-4xl font-bold">Bem-vindo!</h1>
        <p className="mb-8 text-gray-400">
          Entre para acessar suas capturas simuladas.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm">
              Seu nome
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              maxLength={60}
              placeholder="Digite seu nome"
              className="w-full rounded-lg border border-white/20 bg-black/40 px-4 py-3 text-white outline-none focus:border-lime-300"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-lime-300 px-5 py-3 font-bold text-black transition hover:bg-lime-200"
          >
            Entrar no JOVI Scene
          </button>
        </form>

        <Link to="/" className="mt-6 inline-block text-sm text-gray-400 hover:text-white">
          ← Voltar ao início
        </Link>
      </div>
    </main>
  );
}