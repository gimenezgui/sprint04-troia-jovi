export default function ModeCard({ mode, featured = false }) {
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