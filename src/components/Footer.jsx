export default function Footer() {
  return (
    <footer className="pro-footer">
      <div className="pro-footer__inner">
        <div className="pro-footer__top">
          <div className="pro-footer__brand">
            <img
              src="/troia-logo.png"
              alt="Símbolo do Grupo Tróia"
            />

            <span>
              TRÓIA <small>/</small> JOVI
            </span>
          </div>

          <div className="pro-footer__headline">
            <h2>
              Uma câmera que entende
              <br />
              o seu momento.
            </h2>

            <a href="#demo">
              Experimentar agora
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="pro-footer__content">
          <div className="pro-footer__about">
            <span>PROJETO</span>

            <strong>JOVI Scene</strong>

            <p>
              Experiência de câmera contextual criada pelo
              Grupo Tróia para o Challenge JOVI 2026.
            </p>
          </div>

          <nav
            className="pro-footer__nav"
            aria-label="Navegação do rodapé"
          >
            <span>NAVEGAÇÃO</span>

            <div>
              <a href="#solucao">Solução</a>
              <a href="#publico">Público</a>
              <a href="#galeria">Galeria</a>
              <a href="#demo">Demonstração</a>
              <a href="#equipe">Equipe</a>
              <a href="#contato">Contato</a>
            </div>
          </nav>

          <div className="pro-footer__tech">
            <span>DESENVOLVIMENTO</span>

            <strong>React + Vite</strong>

            <p>
              Interface responsiva, componentizada e com
              armazenamento local.
            </p>
          </div>
        </div>

        <div className="pro-footer__bottom">
          <span>© 2026 GRUPO TRÓIA</span>

          <p>
            Projeto acadêmico independente · FIAP Challenge
          </p>

          <a href="#inicio">
            Voltar ao topo
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}