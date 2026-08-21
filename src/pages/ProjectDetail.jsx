import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, AlertTriangle, Lightbulb, Target } from 'lucide-react';
import { GithubIcon } from '../components/ui/BrandIcons';
import { useLanguage } from '../context/LanguageContext';
import projectsData from '../data/projects';
import Button from '../components/ui/Button';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang, t } = useLanguage();

  const projects = projectsData[lang] || projectsData.en;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="detail-not-found">
        <h2>Project not found</h2>
        <Button variant="secondary" onClick={() => navigate('/')}>
          {t('detail.back')}
        </Button>
      </div>
    );
  }

  return (
    <div className="project-detail">
      {/* Background accents */}
      <div className="detail__orb detail__orb--1" />
      <div className="detail__orb detail__orb--2" />

      <div className="detail__container">
        {/* Back button */}
        <button className="detail__back" onClick={() => navigate('/')}>
          <ArrowLeft size={18} />
          {t('detail.back')}
        </button>

        {/* Header */}
        <header className="detail__header">
          <h1 className="detail__title gradient-text">{project.title}</h1>

          <div className="detail__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="detail__tag">{tag}</span>
            ))}
          </div>

          <div className="detail__links">
            {project.github && (
              <Button variant="secondary" size="sm" icon={GithubIcon} href={project.github} external>
                {t('projects.viewCode')}
              </Button>
            )}
            {project.liveDemo && (
              <Button variant="primary" size="sm" icon={ExternalLink} href={project.liveDemo} external>
                {t('projects.liveDemo')}
              </Button>
            )}
          </div>
        </header>

        {/* Case Study Sections */}
        <div className="detail__body">
          {/* Problem */}
          <section className="detail__section">
            <div className="detail__section-header">
              <div className="detail__section-icon detail__section-icon--red">
                <AlertTriangle size={22} />
              </div>
              <h2>{t('detail.problem')}</h2>
            </div>
            <div className="detail__section-content">
              <p>{project.problem}</p>
            </div>
          </section>

          {/* Solution */}
          <section className="detail__section">
            <div className="detail__section-header">
              <div className="detail__section-icon detail__section-icon--cyan">
                <Lightbulb size={22} />
              </div>
              <h2>{t('detail.solution')}</h2>
            </div>
            <div className="detail__section-content detail__formatted">
              {project.solution.split('\n\n').map((paragraph, i) => (
                <p key={i} dangerouslySetInnerHTML={{
                  __html: paragraph
                    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                    .replace(/• /g, '<span class="detail__bullet">›</span> ')
                }} />
              ))}
            </div>
          </section>

          {/* Architecture */}
          {project.architecture && (
            <section className="detail__section">
              <div className="detail__section-header">
                <div className="detail__section-icon detail__section-icon--purple">
                  <Target size={22} />
                </div>
                <h2>{t('detail.architecture')}</h2>
              </div>
              <div className="detail__section-content detail__formatted">
                {project.architecture.split('\n\n').map((paragraph, i) => (
                  <p key={i} dangerouslySetInnerHTML={{
                    __html: paragraph
                      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                  }} />
                ))}
              </div>
            </section>
          )}

          {/* Challenges */}
          <section className="detail__section">
            <div className="detail__section-header">
              <div className="detail__section-icon detail__section-icon--amber">
                <AlertTriangle size={22} />
              </div>
              <h2>{t('detail.challenges')}</h2>
            </div>
            <div className="detail__challenges">
              {project.challenges.map((challenge, i) => (
                <div key={i} className="detail__challenge glass-card">
                  <h4 className="detail__challenge-title">
                    <span className="detail__challenge-num">{String(i + 1).padStart(2, '0')}</span>
                    {challenge.title}
                  </h4>
                  <p className="detail__challenge-desc">{challenge.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Results */}
          <section className="detail__section">
            <div className="detail__section-header">
              <div className="detail__section-icon detail__section-icon--green">
                <Target size={22} />
              </div>
              <h2>{t('detail.results')}</h2>
            </div>
            <div className="detail__results">
              {project.results.map((result, i) => (
                <div key={i} className="detail__result">
                  <span className="detail__result-check">✓</span>
                  <span>{result}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section className="detail__section">
            <div className="detail__section-header">
              <div className="detail__section-icon detail__section-icon--cyan">
                <Target size={22} />
              </div>
              <h2>{t('detail.techStack')}</h2>
            </div>
            <div className="detail__tech-grid">
              {project.tags.map((tag) => (
                <div key={tag} className="detail__tech-item glass-card">
                  <span className="detail__tech-name">{tag}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="detail__footer">
          <Button variant="secondary" icon={ArrowLeft} onClick={() => navigate('/')}>
            {t('detail.back')}
          </Button>
        </div>
      </div>
    </div>
  );
}
