import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useNavigationDirection } from '../App';
import './AppPage.css';

const AppPage = () => {
  const direction = useNavigationDirection();

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <motion.main
      className="page"
      initial={{ x: direction === 'back' ? '-50%' : '50%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: direction === 'back' ? '50%' : '-50%', opacity: 0 }}
      transition={{
        type: 'tween',
        duration: 0.35,
        ease: [0.32, 0.72, 0, 1]
      }}
    >
      <nav className="page__nav">
        <Link to="/" className="page__brand">Active : Archive</Link>
        <div className="page__links">
          <Link to="/app" className="page__link page__link--active">App</Link>
          <Link to="/product" className="page__link">Product</Link>
          <Link to="/production" className="page__link">Production</Link>
        </div>
      </nav>

      <motion.section
        className="app-page"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <div className="app-page__hero">
          <motion.span className="app-page__label" {...fadeUp}>Digital Companion</motion.span>
          <motion.h1 className="app-page__title" {...fadeUp}>
            Your Garment's<br />Story, Continued
          </motion.h1>
          <motion.p className="app-page__intro" {...fadeUp}>
            Each Active Archive piece comes with a unique identifier linking to its complete history—from the original design archive to the deadstock fabric source to your wardrobe.
          </motion.p>
        </div>

        <motion.div className="app-page__features" {...fadeUp}>
          <div className="app-page__feature">
            <span className="app-page__feature-number">01</span>
            <h3 className="app-page__feature-title">Provenance</h3>
            <p className="app-page__feature-desc">
              Trace your garment's journey from archival pattern to finished piece. Every material, every maker, documented.
            </p>
          </div>

          <div className="app-page__feature">
            <span className="app-page__feature-number">02</span>
            <h3 className="app-page__feature-title">Care</h3>
            <p className="app-page__feature-desc">
              Fabric-specific care instructions and repair guidance to ensure your piece lasts for generations.
            </p>
          </div>

          <div className="app-page__feature">
            <span className="app-page__feature-number">03</span>
            <h3 className="app-page__feature-title">Community</h3>
            <p className="app-page__feature-desc">
              Connect with other owners of the same edition. Share styling, stories, and stewardship.
            </p>
          </div>
        </motion.div>

        <motion.div className="app-page__cta" {...fadeUp}>
          <p className="app-page__cta-text">Coming Q3 2026</p>
          <p className="app-page__cta-subtext">iOS & Android</p>
        </motion.div>
      </motion.section>
    </motion.main>
  );
};

export default AppPage;
