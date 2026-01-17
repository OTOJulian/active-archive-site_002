import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useNavigationDirection } from '../App';

const ProductionPage = () => {
  const direction = useNavigationDirection();

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
          <Link to="/app" className="page__link">App</Link>
          <Link to="/product" className="page__link">Product</Link>
          <Link to="/production" className="page__link page__link--active">Production</Link>
        </div>
      </nav>
      <section className="page__content">
        <h1>Production</h1>
      </section>
    </motion.main>
  );
};

export default ProductionPage;
