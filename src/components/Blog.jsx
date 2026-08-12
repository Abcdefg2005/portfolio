import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowUpRight, FiClock, FiCalendar } from 'react-icons/fi';
import { blogData } from '../utils/placeholderData';
import './Blog.css';

const BlogCard = ({ post, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.a
      href={post.link}
      ref={ref}
      className="blog-card glass-card"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Read article: ${post.title}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      whileHover={{ y: -6 }}
    >
      <div className="blog-card__emoji" aria-hidden="true">
        {post.emoji}
      </div>

      <div className="blog-card__meta">
        <span className="blog-card__meta-item">
          <FiCalendar size={13} />
          {post.date}
        </span>
        <span className="blog-card__meta-divider">·</span>
        <span className="blog-card__meta-item">
          <FiClock size={13} />
          {post.readTime}
        </span>
      </div>

      <h3 className="blog-card__title">{post.title}</h3>
      <p className="blog-card__excerpt">{post.excerpt}</p>

      <div className="blog-card__footer">
        <div className="blog-card__tags">
          {post.tags.map(tag => (
            <span key={tag} className="blog-card__tag">{tag}</span>
          ))}
        </div>
        <span className="blog-card__read-more">
          Read <FiArrowUpRight size={15} />
        </span>
      </div>
    </motion.a>
  );
};

export default function Blog() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="blog" className="blog section">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-divider" />
          <h2 className="section-title">Articles & Insights</h2>
          <p className="section-subtitle">
            Thoughts on web development, design, and the things I'm learning
          </p>
        </motion.div>

        <div className="blog__grid">
          {blogData.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
