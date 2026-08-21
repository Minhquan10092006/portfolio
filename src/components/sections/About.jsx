import { useLanguage } from '../../context/LanguageContext';
import './About.css';

export default function About() {
  const { t } = useLanguage();
  const stats = t('about.stats');

  return (
    <section className="section about" id="about">
      <div className="container">
        <span className="section-label">{t('about.label')}</span>
        <div className="about__grid">
          {/* Avatar */}
          <div className="about__avatar-wrap">
            <img
              src="/avatar.jpg"
              alt="Nguyễn Minh Quân"
              className="about__avatar"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling && (e.target.nextElementSibling.style.display = 'flex');
              }}
            />
            <div className="about__avatar-fallback" style={{ display: 'none' }}>MQ</div>
          </div>

          {/* Content */}
          <div className="about__content">
            <h2 className="about__name">{t('hero.name')}</h2>
            <p className="about__bio">{t('about.description')}</p>

            {Array.isArray(stats) && (
              <div className="about__stats">
                {stats.map((stat, i) => (
                  <div key={i} className="about__stat">
                    <span className="about__stat-value">{stat.value}</span>
                    <span className="about__stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
