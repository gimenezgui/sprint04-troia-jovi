import { audiences } from '../data/audiences';
import AudienceCard from './AudienceCard';
import SectionTitle from './SectionTitle';

export default function Audience() {
  return (
    <section
      id="publico"
      className="section audience light-section"
      aria-labelledby="audience-title"
    >
      <SectionTitle
        number="04"
        eyebrow="Público"
        title="Tecnologia que acompanha diferentes momentos."
        description="A Scene AI foi pensada para jovens que estudam, se conectam e transformam ideias em conteúdo."
        titleId="audience-title"
        light
      />

      <div className="audience-grid">
        {audiences.map((audience) => (
          <AudienceCard
            key={audience.id}
            audience={audience}
          />
        ))}
      </div>
    </section>
  );
}