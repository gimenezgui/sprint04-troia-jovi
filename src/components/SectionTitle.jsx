export default function SectionTitle({
  number,
  eyebrow,
  title,
  description,
  titleId,
  light = false,
}) {
  return (
    <header className={`section-title ${light ? 'light' : ''}`}>
      <div className="section-index">
        <span>{number}</span>
        <p>{eyebrow}</p>
      </div>

      <h2 id={titleId}>{title}</h2>

      <p className="section-description">{description}</p>
    </header>
  );
}