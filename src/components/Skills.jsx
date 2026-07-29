import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillsData, filterCategories } from '../utils/placeholderData';
import './Skills.css';

const SkillBar = ({ skill, index, isVisible }) => {
  return (
    <div
      className={`skill-bar ${isVisible ? 'skill-bar--visible' : ''}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="skill-bar__header">
        <span className="skill-bar__icon">{skill.icon}</span>
        <span className="skill-bar__name">{skill.name}</span>
        <span className="skill-bar__level">{skill.level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 50}ms`
          }}
        />
      </div>
    </div>
  );
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [gridRef, gridInView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const filteredSkills = activeFilter === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === activeFilter);

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-divider" />
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I work with on a daily basis
          </p>
        </motion.div>

        <div className="skills__filters">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              className={`skills__filter-btn ${activeFilter === cat.id ? 'skills__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="skills__grid">
          {filteredSkills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} isVisible={gridInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
