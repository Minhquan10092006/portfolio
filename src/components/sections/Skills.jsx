import { BadgeCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import skillsData from '../../data/skills';
import './Skills.css';

export default function Skills() {
  const { lang, t } = useLanguage();

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="skills__head">
          <div>
            <span className="section-label">{t('skills.label')}</span>
            <h2 className="section-title">{t('skills.title')}</h2>
          </div>
          <p className="section-subtitle">{t('skills.subtitle')}</p>
        </div>

        <div className="skills__grid">
          {skillsData.map((group, gi) => {
            const Icon = group.icon;
            return (
              <article key={group.category.en} className="skill-card" data-reveal>
                <div className="skill-card__head">
                  <span className="skill-card__icon">
                    <Icon size={18} />
                  </span>
                  <span className="skill-card__num">/{String(gi + 1).padStart(2, '0')}</span>
                </div>

                <div className="skill-card__title-row">
                  <h3 className="skill-card__title">{group.category[lang]}</h3>
                  {group.badge && (
                    <span className="skill-card__badge">
                      <BadgeCheck size={12} />
                      {group.badge}
                    </span>
                  )}
                </div>

                <div className="skill-card__tags">
                  {group.items.map((skill) => (
                    <span key={skill.name} className="skill-card__tag">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
