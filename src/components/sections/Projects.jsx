import { useLanguage } from '../../context/LanguageContext';
import ProjectCard from '../ui/ProjectCard';
import projectsData from '../../data/projects';
import './Projects.css';

export default function Projects() {
  const { lang, t } = useLanguage();
  const projects = projectsData[lang] || projectsData.en;

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="projects__head">
          <div>
            <span className="section-label">{t('projects.label')}</span>
            <h2 className="section-title">{t('projects.title')}</h2>
            <p className="section-subtitle">{t('projects.subtitle')}</p>
          </div>
          <span className="projects__count">
            {String(projects.length).padStart(2, '0')} — {t('projects.count')}
          </span>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
