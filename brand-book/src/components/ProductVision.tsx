import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './ProductVision.css';
import eclipseHorizontal from '../assets/images/OTO_Eclipse_1.5_ho.jpg';

const journeySteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Browse archival designs reimagined for the modern wardrobe. Each piece draws from fashion history while embracing contemporary silhouettes.'
  },
  {
    number: '02',
    title: 'Measure',
    description: 'Our technology captures your unique measurements through a simple process. No appointments, no guesswork—just precision fit.'
  },
  {
    number: '03',
    title: 'Craft',
    description: 'Your garment is cut from carefully sourced deadstock fabric. Made-to-measure means zero waste — every piece is made for you.'
  },
  {
    number: '04',
    title: 'Wear',
    description: 'Experience clothing that truly fits. A wardrobe that reflects who you are, made to last and designed to be worn.'
  }
];

const ProductVision = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  return (
    <section ref={sectionRef} className="product-vision section-light">
      {/* Header */}
      <div className="product-vision__header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="label">03 — Experience</span>
            <h2>Product Vision</h2>
          </motion.div>
        </div>
      </div>

      {/* Statement */}
      <div className="product-vision__statement">
        <div className="container container-narrow">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Active:Archive garments are not just clothes — they're a statement
            about how fashion should work. Archival inspiration meets modern
            technology, creating pieces that fit perfectly and waste nothing.
          </motion.p>
        </div>
      </div>

      {/* Full-width Image */}
      <div className="product-vision__image" ref={imageRef}>
        <motion.div
          className="product-vision__image-inner"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <motion.img
            src={eclipseHorizontal}
            alt="Eclipse pattern visualization representing the intersection of archival design and modern technology"
            width={1920}
            height={800}
            style={{ y: imageY }}
          />
          <div className="product-vision__image-overlay">
            <span className="product-vision__image-text">In Pursuit of the Total</span>
          </div>
        </motion.div>
      </div>

      {/* Customer Journey */}
      <div className="product-vision__journey">
        <div className="container">
          <motion.h3
            className="product-vision__journey-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The Journey
          </motion.h3>

          <div className="product-vision__journey-grid">
            {journeySteps.map((step, index) => (
              <motion.article
                key={step.number}
                className="product-vision__step"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="product-vision__step-header">
                  <span className="product-vision__step-number">{step.number}</span>
                  <div className="product-vision__step-line" aria-hidden="true" />
                </div>
                <h4 className="product-vision__step-title">{step.title}</h4>
                <p className="product-vision__step-desc">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="product-vision__tech">
        <div className="container">
          <motion.div
            className="product-vision__tech-inner"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="product-vision__tech-content">
              <span className="label label-light">Technology</span>
              <h3>Made-to-Measure at Scale</h3>
              <p>
                Our proprietary technology enables true made-to-measure production
                at scale. By combining advanced body measurement capture with
                automated pattern adjustment, we eliminate the waste inherent in
                standardized sizing while maintaining the efficiency needed for
                modern retail.
              </p>
              <p>
                Active:Archive is the proving ground for this technology — every
                garment we produce helps refine our systems before we bring them
                to partner brands.
              </p>
            </div>

            <div className="product-vision__tech-stats">
              <div className="product-vision__stat">
                <span className="product-vision__stat-value">0</span>
                <span className="product-vision__stat-label">Fabric Waste</span>
              </div>
              <div className="product-vision__stat">
                <span className="product-vision__stat-value">100%</span>
                <span className="product-vision__stat-label">Deadstock Sourced</span>
              </div>
              <div className="product-vision__stat">
                <span className="product-vision__stat-value">1:1</span>
                <span className="product-vision__stat-label">Perfect Fit</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductVision;
