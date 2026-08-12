import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';
import { personalInfo } from '../utils/placeholderData';
import './Footer.css';

const quickLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' }
];

export default function Footer() {
  const socialLinks = [
    { icon: FiGithub, url: personalInfo.social.github, label: 'GitHub' },
    { icon: FiLinkedin, url: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: FiTwitter, url: personalInfo.social.twitter, label: 'Twitter' },
    { icon: FiMail, url: `mailto:${personalInfo.social.email}`, label: 'Email' }
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__container container">
        {/* Top row */}
        <div className="footer__content">
          {/* Brand */}
          <div className="footer__brand">
            <button className="footer__logo" onClick={scrollToTop} aria-label="Scroll to top">
              Kevin<span className="footer__logo-dot">.</span>
            </button>
            <p className="footer__tagline">
              Building digital experiences that make a difference.
            </p>
            <div className="footer__social">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={label}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="footer__nav">
            <h4 className="footer__nav-title">Quick Links</h4>
            <ul className="footer__nav-list">
              {quickLinks.map(link => (
                <li key={link.id}>
                  <button
                    className="footer__nav-link"
                    onClick={() => scrollToSection(link.id)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snippet */}
          <div className="footer__contact">
            <h4 className="footer__nav-title">Get In Touch</h4>
            <p className="footer__contact-text">
              Open for freelance projects, collaborations, and opportunities.
            </p>
            <a
              href={`mailto:${personalInfo.social.email}`}
              className="footer__email"
            >
              {personalInfo.social.email}
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider" />

        {/* Bottom row */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="footer__made-with">
            Made with <FiHeart size={13} className="footer__heart" aria-hidden="true" /> using React &amp; Framer Motion
          </p>

          {/* Scroll to top FAB */}
          <button
            className="footer__scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            title="Back to top"
          >
            <FiArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
