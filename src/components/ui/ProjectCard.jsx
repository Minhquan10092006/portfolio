import { useNavigate } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { useLanguage } from '../../context/LanguageContext';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <article className="project-card">
      {/* Thumbnail */}
      {project.thumbnail && (
        <div className="project-card__thumb">
          <img src={project.thumbnail} alt={project.title} />
        </div>
      )}

      {/* Content */}
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.shortDescription}</p>

        <div className="project-card__tags">
          {project.tags.slice(0, 5).map((tag) => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>

        <div className="project-card__actions">
          <button
            className="project-card__case-btn"
            onClick={() => navigate(`/project/${project.id}`)}
          >
            {t('projects.viewCase')} <ArrowRight size={14} />
          </button>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__link" title="GitHub">
              <GithubIcon size={16} />
            </a>
          )}
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-card__link" title="Live Demo">
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
