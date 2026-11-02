
export default function ModeCard({ mode, featured = false }) {
  // Ajusta o enquadramento apenas do Modo Estudo.
  const isStudyMode = mode.label?.toLowerCase() === 'study';

  const imagePosition = isStudyMode
    ? '80% center'
    : mode.previewPosition || 'center center';

  return (
    <article
      className={`mode-card ${featured ? 'featured' : ''}`}
      style={{ '--mode-color': mode.accent }}
    >
      <header>
        <span>{mode.number}</span>
        <small>{mode.label}</small>
      </header>

      <figure>
        <img
          src={mode.image}
          alt={`Demonstração visual do ${mode.name}`}
          style={{
            objectFit: 'cover',
            objectPosition: imagePosition,
          }}
        />

        <figcaption>
          <span>SCENE AI</span>
          <strong>{mode.name}</strong>
        </figcaption>
      </figure>

      <h3>{mode.name}</h3>

      <p>{mode.description}</p>

      <strong className="mode-benefit">
        {mode.benefit}
      </strong>
    </article>
  );
}
