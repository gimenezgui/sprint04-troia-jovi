import { cameraModes } from '../data/modes';
import ModeCard from './ModeCard';
import SectionTitle from './SectionTitle';

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="section gallery light-section"
      aria-labelledby="gallery-title"
    >
      <SectionTitle
        number="02"
        eyebrow="Galeria"
        title="Três contextos. Uma câmera."
        description="Cada modo reorganiza a experiência para entregar somente os recursos relevantes para aquele momento."
        titleId="gallery-title"
        light
      />

      <div className="mode-grid">
        {cameraModes.map((mode, index) => (
          <ModeCard
            key={mode.id}
            mode={mode}
            featured={index === 1}
          />
        ))}
      </div>
    </section>
  );
}