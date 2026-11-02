import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import CapturesGallery from '../components/CapturesGallery';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/login', { replace: true });
  }

  return (
    <main className="min-h-screen bg-[#0b0d0c] p-8 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-bold tracking-widest text-lime-300">
            JOVI SCENE / DASHBOARD
          </p>

          <button
            onClick={handleLogout}
            className="rounded-lg border border-white/20 px-5 py-2 hover:border-lime-300"
          >
            Sair da conta
          </button>
        </div>

        <h1 className="mt-16 text-4xl font-bold">
          Olá, {user.name}!
        </h1>

        <p className="mt-4 text-gray-400">
          Bem-vindo à sua área de gerenciamento de capturas.
        </p>

        <CapturesGallery />

        <Link to="/" className="mt-8 inline-block text-lime-300">
          ← Voltar ao início
        </Link>
      </div>
    </main>
  );
}