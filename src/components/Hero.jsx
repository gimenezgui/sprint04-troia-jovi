export default function Hero() {
  return (
    <section
      id="inicio"
      className="hero"
      aria-labelledby="hero-title"
    >
      <div className="hero-content">
        <p className="eyebrow">
          Challenge JOVI 2026 · Grupo Tróia
        </p>

        <h1 id="hero-title">
          A câmera que entende <em>o seu momento.</em>
        </h1>

        <p className="hero-description">
          JOVI Scene reconhece o contexto e oferece apenas
          o que importa para estudantes registrarem,
          aprenderem e se expressarem.
        </p>

        <div className="hero-actions">
          <a
            className="primary-button"
            href="#solucao"
          >
            Conhecer a solução ↗
          </a>

          <a
            className="secondary-button"
            href="#demo"
          >
            Abrir demonstração
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <img
          className="hero-visual-image"
          src="/jovi-study.png"
          alt="Estudante utilizando a câmera no modo Estudo"
        />

        <div
          className="hero-visual-shade"
          aria-hidden="true"
        />

        <div
          className="hero-focus-frame"
          aria-hidden="true"
        >
          <span className="hero-focus-corner hero-focus-top-left" />
          <span className="hero-focus-corner hero-focus-top-right" />
          <span className="hero-focus-corner hero-focus-bottom-left" />
          <span className="hero-focus-corner hero-focus-bottom-right" />
        </div>

        <div className="hero-visual-copy">
          <span>SCENE AI</span>
          <strong>Modo Estudo</strong>
          <small>Contexto detectado</small>
        </div>
      </div>
    </section>
  );
}