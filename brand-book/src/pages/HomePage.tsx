import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import BrandStory from '../components/BrandStory';
import VisualIdentity from '../components/VisualIdentity';
import ProductVision from '../components/ProductVision';
import Footer from '../components/Footer';
import { useNavigationDirection } from '../App';

const HomePage = () => {
  const direction = useNavigationDirection();

  return (
    <motion.main
      id="main-content"
      initial={{ x: direction === 'back' ? '-50%' : '50%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: direction === 'back' ? '50%' : '-50%', opacity: 0 }}
      transition={{
        type: 'tween',
        duration: 0.35,
        ease: [0.32, 0.72, 0, 1]
      }}
    >
      <Hero />
      <BrandStory />
      <VisualIdentity />
      <ProductVision />
      <Footer />
    </motion.main>
  );
};

export default HomePage;
