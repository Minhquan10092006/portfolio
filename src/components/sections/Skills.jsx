import { useLanguage } from '../../context/LanguageContext';
import skillsData from '../../data/skills';
import './Skills.css';

export default function Skills() {
  const { lang, t } = useLanguage();

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <span className="section-label">{t('skills.label')}</span>
        <h2 className="section-title">{t('skills.title')}</h2>

        <div className="skills__groups">
          {skillsData.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.category.en} className="skills__group">
                <div className="skills__group-header">
                  <Icon size={16} />
                  <h3 className="skills__group-name">{group.category[lang]}</h3>
                </div>
                <div className="skills__tags">
                  {group.items.map((skill) => (
                    <span key={skill.name} className="skills__tag">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
