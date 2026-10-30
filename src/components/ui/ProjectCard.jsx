import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { useLanguage } from '../../context/LanguageContext';
import './ProjectCard.css';

export default function ProjectCard({ project, index = 1 }) {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const openCase = () => navigate(`/project/${project.id}`);

  return (
    <article className="project-card" data-reveal>
      <div className="project-card__media">
        {project.thumbnail ? (
          <img src={project.thumbnail} alt={project.title} loading="lazy" />
        ) : (
          <div className="project-card__placeholder" />
        )}

        <div className="project-card__media-top">
          <span className="project-card__index">{String(index).padStart(2, '0')}</span>
          {project.featured && (
            <span className="project-card__featured">{t('projects.featured')}</span>
          )}
        </div>

        <div className="project-card__media-actions">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__icon-btn" title="GitHub">
              <GithubIcon size={15} />
            </a>
          )}
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-card__icon-btn" title="Live Demo">
              <ExternalLink size={15} />
            </a>
          )}
        </div>

        <button className="project-card__open" onClick={openCase} aria-label={t('projects.viewCase')}>
          <ArrowUpRight size={18} />
        </button>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.shortDescription}</p>

        <div className="project-card__tags">
          {project.tags.slice(0, 5).map((tag) => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>

        <div className="project-card__foot">
          <button className="project-card__case-btn" onClick={openCase}>
            {t('projects.viewCase')}
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </article>
  );
}
