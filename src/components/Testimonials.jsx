import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { testimonialsData } from '../utils/placeholderData';
import './Testimonials.css';

const StarRating = ({ rating }) => (
  <div className="testimonial__stars" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`testimonial__star ${i < rating ? 'testimonial__star--filled' : ''}`}>
        ★
      </span>
    ))}
  </div>
);

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const intervalRef = useRef(null);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setActive(prev => (prev + 1) % testimonialsData.length);
    }, 5000);
  };

  const stopAutoPlay = () => clearInterval(intervalRef.current);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const goTo = (index) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
    stopAutoPlay();
    startAutoPlay();
  };

  const goPrev = () => {
    setDirection(-1);
    setActive(prev => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    stopAutoPlay();
    startAutoPlay();
  };

  const goNext = () => {
    setDirection(1);
    setActive(prev => (prev + 1) % testimonialsData.length);
    stopAutoPlay();
    startAutoPlay();
  };

  const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 })
  };

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-divider" />
          <h2 className="section-title">What People Say</h2>
          <p className="section-subtitle">
            Testimonials from instructors, classmates, and collaborators
          </p>
        </motion.div>

        <motion.div
          className="testimonials__carousel"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Decorative quote mark */}
          <div className="testimonials__quote-mark" aria-hidden="true">&ldquo;</div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              className="testimonial glass-card"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <StarRating rating={testimonialsData[active].rating} />
              <blockquote className="testimonial__quote">
                {testimonialsData[active].quote}
              </blockquote>
              <div className="testimonial__author">
                <div className="testimonial__avatar">
                  {testimonialsData[active].avatar}
                </div>
                <div className="testimonial__author-info">
                  <span className="testimonial__name">{testimonialsData[active].name}</span>
                  <span className="testimonial__role">
                    {testimonialsData[active].role} · {testimonialsData[active].institution}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="testimonials__nav">
            <button
              className="testimonials__nav-btn"
              onClick={goPrev}
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={20} />
            </button>

            <div className="testimonials__dots">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${i === active ? 'testimonials__dot--active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="testimonials__nav-btn"
              onClick={goNext}
              aria-label="Next testimonial"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
