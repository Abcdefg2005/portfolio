import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projectsData } from '../utils/placeholderData';
import './Projects.css';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleMouseEnter = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateY(-10deg) scale(1.02)';
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateY(0deg) scale(1)';
    }
  };

  return (
    <motion.div
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div
        className="project-card__inner glass-card"
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ borderTop: '3px solid ' + project.color }}
      >
        {index === 0 && (
          <div className="project-card__featured-badge">⭐ Featured</div>
        )}
        <div className="project-card__header">
          <div className="project-card__icon" style={{ background: project.color + '20', color: project.color }}>
            {project.title.charAt(0)}
          </div>
          <div className="project-card__links">
            <a href={project.github} className="project-card__link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub size={18} />
            </a>
            <a href={project.live} className="project-card__link" target="_blank" rel="noopener noreferrer" aria-label="Live demo">
              <FiExternalLink size={18} />
            </a>
          </div>
        </div>

        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>

        <div className="project-card__tech">
          {project.tech.map((tech) => (
            <span key={tech} className="project-card__tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-divider" />
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects that showcase my skills and passion for building great software
          </p>
        </motion.div>

        <div className="projects__grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
