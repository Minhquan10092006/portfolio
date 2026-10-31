import { BadgeCheck, ShieldCheck, Lock, Network, Cpu, MapPin, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './About.css';

const FOCUS_ICONS = [ShieldCheck, Lock, Network, Cpu];

export default function About() {
  const { t } = useLanguage();
  const stats = t('about.stats');
  const focus = t('about.focus');

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__grid">
          <aside className="about__portrait" data-reveal>
            <div className="about__portrait-glow" aria-hidden="true" />
            <div className="about__portrait-frame">
              <img
                src="/avatar.jpg"
                alt="Nguyễn Minh Quân"
                className="about__avatar"
                onError={(e) => {
                  e.target.style.display = 'none';
                  if (e.target.nextElementSibling) e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="about__avatar-fallback" style={{ display: 'none' }}>MQ</div>
            </div>

            <div className="about__portrait-meta">
              <span className="about__portrait-name">{t('hero.name')}</span>
              <span className="about__portrait-role">Former ML Intern @ FlyRank AI</span>
            </div>

            <div className="about__portrait-tags">
              <span className="about__portrait-badge">
                <BadgeCheck size={14} />
                AWS Certified ×2
              </span>
              <span className="about__portrait-loc">
                <MapPin size={13} />
                Hanoi, Vietnam
              </span>
            </div>
          </aside>

          <div className="about__content" data-reveal>
            <span className="section-label">{t('about.label')}</span>
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="about__bio">{t('about.description')}</p>

            {Array.isArray(focus) && (
              <div className="about__focus">
                {focus.map((item, i) => {
                  const Icon = FOCUS_ICONS[i % FOCUS_ICONS.length];
                  return (
                    <span key={item} className="about__focus-item">
                      <Icon size={14} />
                      {item}
                    </span>
                  );
                })}
              </div>
            )}

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

            <button
              className="about__link"
              onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('certs.label')}
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
