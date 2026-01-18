import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useNavigationDirection } from '../App';
import './ProductionPage.css';

const ProductionPage = () => {
  const direction = useNavigationDirection();

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  };

  const processSteps = [
    { number: '01', title: 'Order', description: 'Customer places order, choosing size match or made-to-measure' },
    { number: '02', title: 'Pattern', description: '1:Fit generates custom pattern or selects optimal standard size' },
    { number: '03', title: 'Cut', description: 'Pattern sent to atelier, fabric precision-cut by automated machine' },
    { number: '04', title: 'Sew', description: 'Skilled craftspeople assemble the garment by hand' },
    { number: '05', title: 'Finish', description: 'Quality control, pressing, and final details' },
    { number: '06', title: 'Ship', description: 'Garment ships directly to customer' },
    { number: '07', title: 'Register', description: 'Scan to register in App, access care & provenance' },
  ];

  const stats = [
    { value: '150B', label: 'garments produced annually' },
    { value: '40%', label: 'of production goes unsold' },
    { value: '30%', label: 'of sold garments returned' },
    { value: '77%', label: 'of returns due to fit' },
  ];

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
          <Link to="/shop" className="page__link">Shop</Link>
          <Link to="/sell" className="page__link">Sell</Link>
          <Link to="/production" className="page__link page__link--active">Production</Link>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section className="production-hero">
        <motion.div className="production-hero__content" {...fadeUp}>
          <span className="production-hero__label">Production</span>
          <h1 className="production-hero__title">From Pattern<br />to Piece</h1>
          <p className="production-hero__intro">
            The clothes you buy should adapt to fit your body—not the other way around.
            We've rebuilt the production process from first principles.
          </p>
        </motion.div>
      </section>

      {/* Section 2: The Problem */}
      <section className="production-problem">
        <motion.div className="production-problem__header" {...fadeUp}>
          <span className="production-problem__label">The Problem</span>
          <h2 className="production-problem__title">Fashion at the Breaking Point</h2>
          <p className="production-problem__intro">
            Mass production methods from the early 1900s—designed for millions of garments—now
            produce billions. Standardized sizing, invented in the 1860s for home sewing patterns,
            was never meant to clothe the world.
          </p>
        </motion.div>

        <div className="production-problem__stats">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
            >
              <span className="stat__value">{stat.value}</span>
              <span className="stat__label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3: The Technology */}
      <section className="production-tech">
        <motion.div className="production-tech__content" {...fadeUp}>
          <span className="production-tech__label">The Technology</span>
          <h2 className="production-tech__title">1:Fit Algorithm</h2>
          <div className="production-tech__text">
            <p>
              Traditional pattern grading scales a single fit model up and down—a blunt
              instrument that rarely matches real bodies. Our approach is fundamentally different.
            </p>
            <p>
              <strong>1:Fit converts garment patterns into mathematical operations</strong> that
              can be recalculated for any body in seconds. Input your measurements; receive a
              pattern engineered specifically for you—preserving the design intent while
              ensuring fit.
            </p>
            <p>
              The result: made-to-measure at the same price as standard sizing. Because
              better fit shouldn't be a luxury.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="production-tech__visual"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="production-tech__diagram">
            <div className="diagram-step">
              <span className="diagram-step__label">Measurements</span>
              <div className="diagram-step__box"></div>
            </div>
            <div className="diagram-arrow">→</div>
            <div className="diagram-step">
              <span className="diagram-step__label">Algorithm</span>
              <div className="diagram-step__box"></div>
            </div>
            <div className="diagram-arrow">→</div>
            <div className="diagram-step">
              <span className="diagram-step__label">Pattern</span>
              <div className="diagram-step__box"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 4: The Makers */}
      <section className="production-makers">
        <motion.div className="production-makers__content" {...fadeUp}>
          <span className="production-makers__label">The Makers</span>
          <h2 className="production-makers__title">Atelier Partnership</h2>
          <p className="production-makers__location">Porto, Portugal</p>
          <div className="production-makers__text">
            <p>
              Technology alone isn't enough. We partner with skilled ateliers—craftspeople
              who combine automated precision cutting with human expertise in assembly and finishing.
            </p>
            <p>
              Porto has a century-long tradition of quality garment production. Our partners
              are capable of both structured tailoring and made-to-measure work, with quality
              control at every step.
            </p>
            <p>
              Every garment is made with intention, not just efficiency. Fair wages, safe
              conditions, and pride in craft—these aren't optional.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="production-makers__image"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="production-makers__placeholder"></div>
        </motion.div>
      </section>

      {/* Section 5: The Process */}
      <section className="production-process">
        <motion.div className="production-process__header" {...fadeUp}>
          <span className="production-process__label">The Process</span>
          <h2 className="production-process__title">From Order to Delivery</h2>
        </motion.div>

        <div className="production-process__timeline">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              className="process-step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
            >
              <span className="process-step__number">{step.number}</span>
              <div className="process-step__content">
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__description">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 6: Sustainability */}
      <section className="production-sustainability">
        <motion.div className="production-sustainability__content" {...fadeUp}>
          <span className="production-sustainability__label">Impact</span>
          <h2 className="production-sustainability__title">A Different Equation</h2>
          <div className="production-sustainability__grid">
            <div className="impact-item">
              <h3 className="impact-item__title">Zero Overproduction</h3>
              <p className="impact-item__desc">Made-to-order only. We produce what's purchased.</p>
            </div>
            <div className="impact-item">
              <h3 className="impact-item__title">Deadstock Materials</h3>
              <p className="impact-item__desc">No new fabric production. Existing materials given new life.</p>
            </div>
            <div className="impact-item">
              <h3 className="impact-item__title">Reduced Returns</h3>
              <p className="impact-item__desc">Better fit means fewer returns. Less shipping, less waste.</p>
            </div>
            <div className="impact-item">
              <h3 className="impact-item__title">Built to Last</h3>
              <p className="impact-item__desc">Quality construction and care guidance extend garment life.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 7: CTA */}
      <section className="production-cta">
        <motion.div className="production-cta__content" {...fadeUp}>
          <h2 className="production-cta__title">See the Results</h2>
          <p className="production-cta__text">
            Explore the collection built with this approach.
          </p>
          <div className="production-cta__links">
            <Link to="/sell" className="production-cta__button">View Products</Link>
            <Link to="/shop" className="production-cta__link">Learn about the Shop →</Link>
          </div>
        </motion.div>
      </section>
    </motion.main>
  );
};

export default ProductionPage;
