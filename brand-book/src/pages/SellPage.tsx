import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useNavigationDirection } from '../App';
import PageNav from '../components/PageNav';
import './SellPage.css';
import woolImage from '../assets/images/wool_002.png';

const SellPage = () => {
  const direction = useNavigationDirection();

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  };

  const products = [
    {
      id: 'shirt-001',
      name: "The Buttondown",
      edition: "Edition 001",
      description: "Reinterpreted from a 1960s American workwear pattern, refined for modern proportions.",
      fabric: "Italian cotton oxford, Biella mill surplus, 2019",
      price: 285,
      shippingStandard: "3-5 days",
      shippingMTM: "3-4 weeks"
    },
    {
      id: 'trouser-001',
      name: "The Trouser",
      edition: "Edition 001",
      description: "High-waisted silhouette drawn from 1940s British tailoring, updated with modern ease.",
      fabric: "Japanese cotton twill, Okayama deadstock, 2021",
      price: 345,
      shippingStandard: "3-5 days",
      shippingMTM: "4-5 weeks"
    },
    {
      id: 'jacket-001',
      name: "The Jacket",
      edition: "Edition 001",
      description: "Unstructured three-button inspired by 1970s Italian tailoring, soft construction.",
      fabric: "Portuguese linen blend, Porto mill end, 2020",
      price: 485,
      shippingStandard: "3-5 days",
      shippingMTM: "5-6 weeks"
    }
  ];

  return (
    <motion.main
      id="main-content"
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
      <PageNav activePage="sell" />

      {/* Section 1: Hero */}
      <section className="product-hero">
        <motion.div className="product-hero__content" {...fadeUp}>
          <span className="product-hero__label">Edition 001 — 2026</span>
          <h1 className="product-hero__title">The Collection</h1>
          <p className="product-hero__intro">
            Archival designs from the 20th century, reinterpreted for the modern wardrobe.
            Each piece crafted in limited quantities from deadstock fabrics—materials too
            good to waste, now given new purpose.
          </p>
        </motion.div>
      </section>

      {/* Section 2: The Garments */}
      <section className="product-garments">
        <motion.div className="product-garments__header" {...fadeUp}>
          <span className="product-garments__label">The Garments</span>
          <h2 className="product-garments__title">Three Pieces, Infinite Combinations</h2>
        </motion.div>

        <div className="product-garments__grid">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
            >
              <div className="product-card__image">
                <div className="product-card__placeholder">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
              </div>
              <div className="product-card__content">
                <span className="product-card__edition">{product.edition}</span>
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__description">{product.description}</p>
                <p className="product-card__fabric">{product.fabric}</p>
                <div className="product-card__footer">
                  <span className="product-card__price">${product.price}</span>
                  <button className="btn btn--secondary">Try On</button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Section 3: The Fabric Story */}
      <section className="product-fabric">
        <motion.div className="product-fabric__content" {...fadeUp}>
          <span className="product-fabric__label">Materials</span>
          <h2 className="product-fabric__title">The Fabric Story</h2>
          <div className="product-fabric__text">
            <p>
              <strong>Deadstock fabric</strong> refers to unused surplus materials from mills and
              manufacturers—overruns, end-of-roll pieces, and canceled order remnants that would
              otherwise be discarded or destroyed.
            </p>
            <p>
              These aren't seconds or defects. They're premium materials from renowned mills,
              available in limited quantities because the original production run has ended.
              When they're gone, they're gone.
            </p>
            <p>
              By building our collection around deadstock, we reduce textile waste while offering
              fabrics you won't find anywhere else—each edition truly unique.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="product-fabric__visual"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="product-fabric__swatch">
            <img src={woolImage} alt="Wool fabric swatch" width={400} height={600} />
          </div>
          <div className="product-fabric__swatch" aria-hidden="true"></div>
          <div className="product-fabric__swatch" aria-hidden="true"></div>
        </motion.div>
      </section>

      {/* Section 4: Sizing & Fit */}
      <section className="product-sizing">
        <motion.div className="product-sizing__header" {...fadeUp}>
          <span className="product-sizing__label">Fit</span>
          <h2 className="product-sizing__title">Two Paths, One Price</h2>
        </motion.div>

        <div className="product-sizing__options">
          <motion.div
            className="sizing-option"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="sizing-option__number">01</span>
            <h3 className="sizing-option__title">Standard Sizing</h3>
            <p className="sizing-option__desc">
              Select from our curated size range (XS–XL). We'll help you find your best match
              with detailed measurements and fit guidance.
            </p>
            <p className="sizing-option__shipping">Ships in 3–5&nbsp;days</p>
          </motion.div>

          <motion.div
            className="sizing-option"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <span className="sizing-option__number">02</span>
            <h3 className="sizing-option__title">Made-to-Measure</h3>
            <p className="sizing-option__desc">
              Submit your measurements for a custom fit. Same price as standard—we believe
              great fit shouldn't cost extra.
            </p>
            <p className="sizing-option__shipping">Ships in 3–6&nbsp;weeks</p>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Care & Longevity */}
      <section className="product-care">
        <motion.div className="product-care__content" {...fadeUp}>
          <span className="product-care__label">Longevity</span>
          <h2 className="product-care__title">Made to Last,<br />Meant to Be Kept</h2>
          <p className="product-care__text">
            Every garment comes with detailed care instructions specific to its fabric.
            Our companion app provides ongoing guidance, repair resources, and connects
            you with our restoration services when needed.
          </p>
          <Link to="/shop" className="product-care__link">
            Learn about the Shop →
          </Link>
        </motion.div>
      </section>

      {/* Section 6: CTA */}
      <section className="product-cta">
        <motion.div className="product-cta__content" {...fadeUp}>
          <h2 className="product-cta__title">Edition 001 Opens Spring 2026</h2>
          <p className="product-cta__text">
            Join the waitlist for early access and sizing consultation.
          </p>
          <button className="btn btn--primary">Join Waitlist</button>
        </motion.div>
      </section>
    </motion.main>
  );
};

export default SellPage;
