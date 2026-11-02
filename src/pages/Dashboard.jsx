import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

import CapturesGallery from '../components/CapturesGallery';

import CaptureHistory from '../components/CaptureHistory';

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

        <CaptureHistory />

            <div className="my-12 border-t border-white/10" />

        <CapturesGallery />

        <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-white/10 pt-8 pb-12">

        <Link
            to="/demo"
            className="
                inline-flex min-h-12 items-center justify-center gap-2
                rounded-lg bg-lime-300 px-6 py-3
                font-semibold !text-black
                transition-all duration-200
                hover:-translate-y-0.5
                hover:bg-lime-200
                hover:!text-black
            "
        >
            <span>＋</span>
            Nova captura
        </Link>

        <Link
            to="/"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition-all duration-200 hover:border-lime-300 hover:text-lime-300"
        >
            <span>←</span>
            Voltar ao início
        </Link>

        </div>
      </div>
    </main>
  );
}