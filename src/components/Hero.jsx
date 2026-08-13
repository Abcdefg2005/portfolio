import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import ParticleBackground from './ParticleBackground';
import { personalInfo } from '../utils/placeholderData';
import './Hero.css';

const roles = [
  'BSIT Student',
  'Front-End Developer',
  'UI/UX Enthusiast',
  'Aspiring Full-Stack Dev'
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const charIndexRef = useRef(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (charIndexRef.current < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, charIndexRef.current + 1));
          charIndexRef.current++;
        }, 80);
      } else {
        setIsTypingComplete(true);
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (charIndexRef.current > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, charIndexRef.current - 1));
          charIndexRef.current--;
        }, 40);
      } else {
        setIsDeleting(false);
        setIsTypingComplete(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FiGithub, url: personalInfo.social.github, label: 'GitHub' },
    { icon: FiLinkedin, url: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: FiTwitter, url: personalInfo.social.twitter, label: 'Twitter' },
    { icon: FiMail, url: `mailto:${personalInfo.social.email}`, label: 'Email' }
  ];

  return (
    <section id="hero" className="hero">
      <ParticleBackground />

      <div className="hero__content container">
        <motion.div
          className="hero__avatar-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero__avatar-glow" />
          <img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="hero__avatar"
            width={160}
            height={160}
          />
        </motion.div>

        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero__badge-dot" />
          Available for projects
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hi, I'm{' '}
          <span className="hero__name">{personalInfo.name.split(' ')[0]}</span>
        </motion.h1>

        <motion.div
          className="hero__typewriter"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="hero__typewriter-label">I'm a </span>
          <span className="hero__typewriter-text">
            {displayText}
            <span className={`hero__cursor ${isTypingComplete ? 'hero__cursor--blink' : ''}`}>|</span>
          </span>
        </motion.div>

        <motion.p
          className="hero__description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          I build exceptional digital experiences that live at the intersection of design and technology.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="btn-primary hero__cta" onClick={scrollToAbout}>
            View My Work
            <FiArrowDown size={18} />
          </button>
          {personalInfo.resume !== '#' && (
            <a href={personalInfo.resume} className="btn-outline hero__resume" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          )}
        </motion.div>

        <motion.div
          className="hero__social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {socialLinks.map(({ icon: Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToAbout}
      >
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line" />
      </motion.div>
    </section>
  );
}

