import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './BrandStory.css';

const philosophyItems = [
  {
    quote: "Luxury is when the world fits you.",
    annotation: "We're scaling the luxury experience, not scarcity."
  },
  {
    quote: "Clothes should adapt to fit your body, not the other way around.",
    annotation: "Made-to-measure technology that honors individual form."
  },
  {
    quote: "A good fitting, quality wardrobe is a human right.",
    annotation: "Democratizing access to personalized fashion."
  },
  {
    quote: "Waste in fashion is caused by scale outpacing efficiency.",
    annotation: "Automation is the only way to achieve efficiency at scale."
  },
  {
    quote: "Fashion lets you align how you see yourself with how others see you.",
    annotation: "Personal expression through intentional design."
  }
];

const BrandStory = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 0.3], ['0%', '100%']);

  return (
    <section ref={sectionRef} className="brand-story section-light">
      {/* Section Header */}
      <div className="brand-story__header">
        <div className="container">
          <motion.div
            className="brand-story__header-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="label">01 — Philosophy</span>
            <h2>The Why</h2>
          </motion.div>
          <motion.div className="brand-story__header-line" style={{ width: lineWidth }} />
        </div>
      </div>

      {/* Introduction */}
      <div className="brand-story__intro">
        <div className="container container-narrow">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Active:Archive is the flagship initiative of ONE to ONE, a fashion-tech
            company reimagining how clothes are made and sold. We exist to prove
            that made-to-measure fashion can be accessible, sustainable, and
            beautiful at scale.
          </motion.p>
        </div>
      </div>

      {/* Philosophy Quotes */}
      <div className="brand-story__quotes">
        {philosophyItems.map((item, index) => (
          <motion.article
            key={index}
            className="brand-story__quote-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="container">
              <div className="brand-story__quote-inner">
                <motion.span
                  className="brand-story__quote-number"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.span>
                <div className="brand-story__quote-content">
                  <motion.blockquote
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {item.quote}
                  </motion.blockquote>
                  <motion.p
                    className="brand-story__quote-annotation"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {item.annotation}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Closing Statement */}
      <div className="brand-story__closing">
        <div className="container">
          <motion.div
            className="brand-story__closing-box"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="label">The Mission</span>
            <p>
              Active:Archive serves as our pilot initiative — a proving ground where
              we validate our made-to-measure technology before scaling to
              partner brands worldwide.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
