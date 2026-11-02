import { useState } from 'react';

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

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="topbar">
      <div className="topbar__inner">
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

          <strong>TRÓIA</strong>
          <span>/ JOVI</span>
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

          <a
            className="topbar__cta"
            href="#demo"
            onClick={closeMenu}
          >
            Testar agora
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}