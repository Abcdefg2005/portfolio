import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSend, FiCheck, FiAlertCircle, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { personalInfo } from '../utils/placeholderData';
import { validateContactForm, submitContactForm } from '../utils/contactForm';
import './Contact.css';

const INITIAL_FORM = { name: '', email: '', message: '', botcheck: '' };

export default function Contact() {
  const [formState, setFormState] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const btnRef = useRef(null);

  const handleChange = (e) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'error') {
      setStatus('idle');
      setFeedback('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback('');

    const validation = validateContactForm(formState);
    if (!validation.valid) {
      setStatus('error');
      setFeedback(validation.error);
      setTimeout(() => {
        setStatus('idle');
        setFeedback('');
      }, 5000);
      return;
    }

    setStatus('sending');

    try {
      await submitContactForm(validation.data);
      setStatus('success');
      setFormState(INITIAL_FORM);
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      setStatus('error');
      setFeedback(err.message || 'Something went wrong. Please try again.');
      setTimeout(() => {
        setStatus('idle');
        setFeedback('');
      }, 5000);
    }
  };

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: personalInfo.social.email },
    { icon: FiMapPin, label: 'Location', value: personalInfo.location },
    { icon: FiPhone, label: 'Phone', value: personalInfo.phone },
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-divider" />
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's build something amazing together
          </p>
        </motion.div>

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="contact__info-title">Contact Information</h3>
            <p className="contact__info-text">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="contact__info-list">
              {contactInfo.map((item, i) => (
                <div key={i} className="contact__info-item">
                  <div className="contact__info-icon">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <span className="contact__info-label">{item.label}</span>
                    <span className="contact__info-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact__form glass-card"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Honeypot — hidden from users, traps bots */}
            <input
              type="text"
              name="botcheck"
              className="contact__honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={formState.botcheck}
              onChange={handleChange}
              aria-hidden="true"
            />

            <div className="contact__form-group">
              <div className="contact__field">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="contact__input"
                  placeholder=" "
                  value={formState.name}
                  onChange={handleChange}
                  maxLength={100}
                  required
                />
                <label htmlFor="name" className="contact__label">Your Name</label>
              </div>
              <div className="contact__field">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="contact__input"
                  placeholder=" "
                  value={formState.email}
                  onChange={handleChange}
                  maxLength={254}
                  required
                />
                <label htmlFor="email" className="contact__label">Your Email</label>
              </div>
            </div>

            <div className="contact__field">
              <textarea
                name="message"
                id="message"
                className="contact__input contact__textarea"
                placeholder=" "
                rows={5}
                value={formState.message}
                onChange={handleChange}
                maxLength={2000}
                required
              />
              <label htmlFor="message" className="contact__label">Your Message</label>
            </div>

            <button
              type="submit"
              className={`contact__submit btn-primary ${
                status === 'sending' ? 'contact__submit--sending' : ''
              } ${status === 'error' ? 'contact__submit--error' : ''}`}
              ref={btnRef}
              disabled={status === 'sending'}
            >
              {status === 'idle' && (<>Send Message<FiSend size={16} /></>)}
              {status === 'sending' && (<>Sending...<span className="contact__spinner" /></>)}
              {status === 'success' && (<>Message Sent!<FiCheck size={16} /></>)}
              {status === 'error' && (<>Something went wrong<FiAlertCircle size={16} /></>)}
            </button>

            {status === 'success' && (
              <motion.div
                className="contact__feedback contact__feedback--success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
              >
                <FiCheck size={18} />
                Thanks for reaching out! I'll get back to you soon.
              </motion.div>
            )}

            {status === 'error' && feedback && (
              <motion.div
                className="contact__feedback contact__feedback--error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
              >
                <FiAlertCircle size={18} />
                {feedback}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
