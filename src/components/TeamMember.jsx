export default function TeamMember({ member }) {
  return (
    <article className="team-member">
      <header>
        <span>{member.number}</span>
        <span>RM {member.rm}</span>
      </header>

      <div className="member-content">
        <small>{member.role}</small>
        <h3>{member.name}</h3>
        <p>{member.description}</p>
      </div>
    </article>
  );
}