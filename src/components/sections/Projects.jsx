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
        <span className="section-label">{t('projects.label')}</span>
        <h2 className="section-title">{t('projects.title')}</h2>
        <p className="section-subtitle">{t('projects.subtitle')}</p>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
