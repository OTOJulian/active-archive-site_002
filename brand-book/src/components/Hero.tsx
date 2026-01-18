import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import landingImage from '../assets/images/landing_001.png';

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-10%']);

  return (
    <section ref={ref} className="hero">
      {/* Background */}
      <motion.div className="hero__background" style={{ y: imageY }}>
        <motion.img
          src={landingImage}
          alt=""
          style={{ scale: imageScale }}
        />
        <div className="hero__background-overlay" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="hero__content"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Brand Name */}
        <motion.div
          className="hero__brand"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <Link to="/" className="hero__brand-link">
            <span>Active</span>
            <span className="hero__brand-colon">:</span>
            <span>Archive</span>
          </Link>
        </motion.div>

        {/* Initiative tagline - spread across width */}
        <motion.div
          className="hero__initiative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span>a</span>
          <span className="hero__initiative-name">ONE to ONE</span>
          <span>initiative</span>
        </motion.div>

        {/* Large statement */}
        <motion.div
          className="hero__statement"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
        >
          <div>Vintage Designs</div>
          <div>in Deadstock Fabric</div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <span className="hero__scroll-label">Overview</span>
          <div className="hero__scroll-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5L12 19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Corner Dots */}
      <div className="hero__marks">
        <div className="hero__dot" style={{ top: 'var(--space-md)', left: 'var(--space-md)' }} />
        <div className="hero__dot" style={{ top: 'var(--space-md)', right: 'var(--space-md)' }} />
        <div className="hero__dot" style={{ bottom: 'var(--space-md)', left: 'var(--space-md)' }} />
        <div className="hero__dot" style={{ bottom: 'var(--space-md)', right: 'var(--space-md)' }} />
      </div>

      {/* Top Navigation */}
      <nav className="hero__nav">
        <Link to="/shop" className="hero__nav-link">Shop</Link>
        <Link to="/sell" className="hero__nav-link">Sell</Link>
        <Link to="/design" className="hero__nav-link">Design</Link>
      </nav>
    </section>
  );
};

export default Hero;
