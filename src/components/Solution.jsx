import SectionTitle from './SectionTitle';

const steps = [
  {
    number: '01',
    title: 'Entende',
    description:
      'Reconhece automaticamente se o usuário está estudando, socializando ou criando conteúdo.',
  },
  {
    number: '02',
    title: 'Sugere',
    description:
      'Apresenta somente os ajustes relevantes para aquele momento.',
  },
  {
    number: '03',
    title: 'Organiza',
    description:
      'Salva a captura com contexto para facilitar o uso posterior.',
  },
];

export default function Solution() {
  return (
    <section
      id="solucao"
      className="section solution light-section"
      aria-labelledby="solution-title"
    >
      <SectionTitle
        number="01"
        eyebrow="A solução"
        title="Menos menus. Mais intenção."
        description="Uma interface de câmera contextual que reduz a complexidade sem remover o controle do usuário."
        titleId="solution-title"
        light
      />

      <div className="solution-grid">
        <article className="problem-card">
          <span>O PROBLEMA</span>

          <blockquote>
            “A câmera tem recursos demais, mas ainda me faz perder o momento.”
          </blockquote>

          <p>
            Modos escondidos e termos técnicos fazem muitos usuários
            permanecerem apenas no automático.
          </p>
        </article>

        <div className="steps">
          {steps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}