
import { useState } from 'react';
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useAuth } from '../context/useAuth';

export default function Login() {
  const [name, setName] = useState('');
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const destination = location.state?.from?.pathname || '/dashboard';

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) return;

    login(trimmedName);
    navigate(destination, { replace: true });
  }

  if (user) {
    return <Navigate to={destination} replace />;
  }

  return (
    <main className="min-h-screen bg-[#090c0a] text-white lg:flex">

      {/* PAINEL ESQUERDO */}
      <section className="relative hidden min-h-screen w-1/2 overflow-hidden lg:flex">

        <img
          src="/jovi-study.png"
          alt="Estudante utilizando a tecnologia JOVI Scene"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: '80% center' }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#090c0a] via-[#090c0a]/65 to-[#090c0a]/20" />

        <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">

          <Link
            to="/"
            className="flex w-fit items-center gap-4 !text-white no-underline"
          >
            <img
              src="/troia-logo.png"
              alt="Logotipo Grupo Tróia"
              className="h-14 w-14 rounded-xl border border-white/20 bg-black/40 object-contain p-2"
            />

            <div className="flex flex-col">
              <strong className="text-xl font-extrabold tracking-[0.15em]">
                TRÓIA
              </strong>

              <span className="text-xs tracking-[0.2em] text-gray-300">
                JOVI SCENE
              </span>
            </div>
          </Link>

          <div className="max-w-xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-lime-300">
              Challenge JOVI 2026
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight xl:text-6xl">
              Capture momentos.
              <span className="block text-lime-300">
                Explore possibilidades.
              </span>
            </h1>

            <p className="max-w-md text-lg leading-relaxed text-gray-300">
              Uma nova forma de registrar, aprender e se expressar.
              Experimente o conceito JOVI Scene e descubra
              como cada contexto transforma sua experiência.
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-300">
            <span className="h-2 w-2 rounded-full bg-lime-300" />
            SCENE AI · GRUPO TRÓIA
          </div>
        </div>
      </section>

      {/* PAINEL DIREITO */}
      <section className="flex min-h-screen w-full flex-col lg:w-1/2">

        {/* LOGO MOBILE */}
        <div className="p-6 lg:hidden">
          <Link
            to="/"
            className="flex w-fit items-center gap-3 !text-white no-underline"
          >
            <img
              src="/troia-logo.png"
              alt=""
              className="h-12 w-12 rounded-lg border border-white/20 object-contain p-1"
            />

            <span className="font-bold tracking-widest">
              TRÓIA / JOVI
            </span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center px-6 py-12 sm:px-10">

          <div className="w-full max-w-md">

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-lime-300">
              Área do usuário
            </p>

            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Bem-vindo ao
              <span className="block text-lime-300">
                JOVI Scene.
              </span>
            </h2>

            <p className="mb-10 text-base leading-relaxed text-gray-400">
              Informe seu nome para acessar o ambiente
              demonstrativo e visualizar suas capturas simuladas.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block text-sm font-medium text-gray-200"
                >
                  Como podemos chamar você?
                </label>

                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  maxLength={60}
                  autoComplete="name"
                  placeholder="Digite seu nome"
                  className="w-full rounded-xl border border-white/20 bg-white/5 px-5 py-4 !text-white outline-none transition placeholder:text-gray-500 focus:border-lime-300 focus:ring-2 focus:ring-lime-300/20"
                />
              </div>

              <button
                type="submit"
                disabled={!name.trim()}
                className="flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-lime-300 px-6 py-4 font-bold !text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-lime-200 hover:!text-black disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
              >
                Entrar no JOVI Scene
                <span aria-hidden="true">↗</span>
              </button>

            </form>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="mb-5 text-sm leading-relaxed text-gray-500">
                Este é um ambiente demonstrativo.
                Não é necessário criar uma conta ou informar senha.
              </p>

              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm !text-gray-300 no-underline transition hover:!text-lime-300"
              >
                <span aria-hidden="true">←</span>
                Voltar ao início
              </Link>
            </div>

          </div>
        </div>

        <footer className="px-6 pb-8 text-center text-xs text-gray-600">
          © 2026 Grupo Tróia · Challenge JOVI
        </footer>

      </section>
    </main>
  );
}
