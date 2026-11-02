
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

const navigationLinks = [
  { label: 'Solução', href: '#solucao' },
  { label: 'Público', href: '#publico' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Demo', href: '#demo' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="topbar">
      <div className="topbar__inner topbar__inner--balanced">

        <a
          className="topbar__brand"
          href="#inicio"
          onClick={closeMenu}
          aria-label="Grupo Tróia — início"
        >
          <img
            src="/troia-logo.png"
            alt=""
            aria-hidden="true"
          />

          <div className="topbar__brand-text">
            <strong>TRÓIA</strong>
            <span>JOVI SCENE</span>
          </div>
        </a>

        <button
          type="button"
          className={
            menuOpen
              ? 'topbar__toggle active'
              : 'topbar__toggle'
          }
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={
            menuOpen
              ? 'Fechar menu de navegação'
              : 'Abrir menu de navegação'
          }
        >
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={
            menuOpen
              ? 'topbar__nav open'
              : 'topbar__nav'
          }
          aria-label="Navegação principal"
        >
          <div className="topbar__links">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="topbar__actions">
            <Link
              to={user ? '/dashboard' : '/login'}
              className="topbar__account"
              onClick={closeMenu}
            >
              {user ? 'Meu Dashboard' : 'Minha conta'}
            </Link>

            <a
              className="topbar__cta"
              href="#demo"
              onClick={closeMenu}
            >
              Testar agora
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
