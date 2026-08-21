import './SkillBadge.css';

export default function SkillBadge({ name, icon: Icon, color }) {
  return (
    <div className="skill-badge" style={{ '--badge-color': color }}>
      {Icon && <Icon size={16} className="skill-badge__icon" />}
      <span className="skill-badge__name">{name}</span>
    </div>
  );
}
