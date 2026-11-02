import { teamMembers } from '../data/team';
import SectionTitle from './SectionTitle';
import TeamMember from './TeamMember';

export default function Team() {
  return (
    <section
      id="equipe"
      className="section team"
      aria-labelledby="team-title"
    >
      <SectionTitle
        number="05"
        eyebrow="Equipe"
        title="Cinco perspectivas. Uma direção."
        description="O Grupo Tróia reúne diferentes competências para transformar uma ideia em uma experiência completa."
        titleId="team-title"
      />

      <div className="team-grid">
        {teamMembers.map((member) => (
          <TeamMember
            key={member.id}
            member={member}
          />
        ))}
      </div>
    </section>
  );
}