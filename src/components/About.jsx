import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo, timelineData } from '../utils/placeholderData';
import './About.css';

const TimelineItem = ({ item, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      className={`timeline__item ${index % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="timeline__card glass-card">
        <div className="timeline__year">{item.year}</div>
        <h3 className="timeline__title">{item.title}</h3>
        <p className="timeline__description">{item.description}</p>
      </div>
    </motion.div>
  );
};

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-divider" />
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">My journey through the world of software development</p>
        </motion.div>
        <div className="about__intro">
          <motion.div
            className="about__avatar-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about__avatar-glow" />
            <img src={personalInfo.avatar} alt={personalInfo.name} className="about__avatar" />
          </motion.div>
          <motion.div
            className="about__text"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {personalInfo.bio.map((paragraph, i) => (
              <p key={i} className="about__paragraph">{paragraph}</p>
            ))}
          </motion.div>
        </div>
        <div className="timeline">
          <div className="timeline__line" />
          <div className="timeline__grid">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
