export default function AudienceCard({ audience }) {
  return (
    <article className="audience-card">
      <header>
        <span>{audience.number}</span>
        <small>{audience.label}</small>
      </header>

      <div>
        <h3>{audience.title}</h3>
        <p>{audience.description}</p>
      </div>

      <ul>
        {audience.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </article>
  );
}