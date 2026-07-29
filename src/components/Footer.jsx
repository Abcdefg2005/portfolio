import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';
import { personalInfo } from '../utils/placeholderData';
import './Footer.css';

export default function Footer() {
  const socialLinks = [
    { icon: FiGithub, url: personalInfo.social.github, label: 'GitHub' },
    { icon: FiLinkedin, url: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: FiTwitter, url: personalInfo.social.twitter, label: 'Twitter' },
    { icon: FiMail, url: `mailto:${personalInfo.social.email}`, label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__content">
          <div className="footer__brand">
            <button className="footer__logo" onClick={scrollToTop}>
              Kevin<span className="footer__logo-dot">.</span>
            </button>
            <p className="footer__tagline">
              Building digital experiences that make a difference.
            </p>
          </div>

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
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="footer__made-with">
            Made with <FiHeart size={14} className="footer__heart" /> using React &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
