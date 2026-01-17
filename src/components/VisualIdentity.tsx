import { motion } from 'framer-motion';
import { useRef } from 'react';
import './VisualIdentity.css';
import iconLogo from '../assets/logos/OTO_Icon-Logo-01.png';
import graphicElement1 from '../assets/images/OTO_Graphic-Element-01.svg';
import graphicElement2 from '../assets/images/OTO_Graphic-Element-02.svg';

const colors = [
  { name: 'Charcoal', hex: '#1A1A1A', variable: '--charcoal' },
  { name: 'Dark', hex: '#2D2D2D', variable: '--dark' },
  { name: 'Gray', hex: '#6B6B6B', variable: '--gray' },
  { name: 'Silver', hex: '#C4C4C4', variable: '--silver' },
  { name: 'Off White', hex: '#F5F5F3', variable: '--off-white' },
  { name: 'Cream', hex: '#FAF9F7', variable: '--cream' },
];

const VisualIdentity = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="visual-identity section-dark">
      {/* Section Header */}
      <div className="visual-identity__header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="label label-light">02 — Visual System</span>
            <h2>Identity</h2>
          </motion.div>
        </div>
      </div>

      {/* Logo System */}
      <div className="visual-identity__logos">
        <div className="container">
          <motion.h3
            className="visual-identity__section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Logo System
          </motion.h3>

          <div className="visual-identity__logo-grid">
            {/* Primary Logotype */}
            <motion.div
              className="visual-identity__logo-item visual-identity__logo-item--primary"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="visual-identity__logo-display">
                <span className="visual-identity__logotype">
                  Active<span className="visual-identity__colon">:</span>Archive
                </span>
              </div>
              <div className="visual-identity__logo-meta">
                <span className="label">Primary Logotype</span>
                <p>The primary wordmark for all communications</p>
              </div>
            </motion.div>

            {/* Monogram */}
            <motion.div
              className="visual-identity__logo-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="visual-identity__logo-display">
                <span className="visual-identity__monogram">
                  A<span className="visual-identity__colon">:</span>A
                </span>
              </div>
              <div className="visual-identity__logo-meta">
                <span className="label">Monogram</span>
                <p>Compact identity for limited spaces</p>
              </div>
            </motion.div>

            {/* Icon */}
            <motion.div
              className="visual-identity__logo-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="visual-identity__logo-display">
                <img
                  src={iconLogo}
                  alt="Active:Archive Icon"
                  className="visual-identity__icon"
                />
              </div>
              <div className="visual-identity__logo-meta">
                <span className="label">Icon</span>
                <p>Mark for avatars and favicons</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Color Palette */}
      <div className="visual-identity__colors">
        <div className="container">
          <motion.h3
            className="visual-identity__section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Color Palette
          </motion.h3>

          <div className="visual-identity__color-grid">
            {colors.map((color, index) => (
              <motion.div
                key={color.name}
                className="visual-identity__color-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div
                  className="visual-identity__color-swatch"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="visual-identity__color-info">
                  <span className="visual-identity__color-name">{color.name}</span>
                  <span className="visual-identity__color-hex">{color.hex}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="visual-identity__typography">
        <div className="container">
          <motion.h3
            className="visual-identity__section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Typography
          </motion.h3>

          <div className="visual-identity__type-grid">
            <motion.div
              className="visual-identity__type-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="label label-light">Primary Typeface</span>
              <div className="visual-identity__type-specimen">
                <span className="visual-identity__type-display">Century Schoolbook</span>
                <p className="visual-identity__type-sample">
                  AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
                </p>
                <p className="visual-identity__type-numbers">0123456789</p>
              </div>
              <p className="visual-identity__type-usage">
                Used for headlines, body copy, and all communications.
                Classic serif with archival character.
              </p>
            </motion.div>

            <motion.div
              className="visual-identity__type-item visual-identity__type-item--mono"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="label label-light">Secondary Typeface</span>
              <div className="visual-identity__type-specimen">
                <span className="visual-identity__type-display visual-identity__type-display--mono">
                  CENTURY SCHOOLBOOK MONO
                </span>
                <p className="visual-identity__type-sample visual-identity__type-sample--mono">
                  AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ
                </p>
                <p className="visual-identity__type-numbers visual-identity__type-numbers--mono">
                  0123456789
                </p>
              </div>
              <p className="visual-identity__type-usage">
                Labels, captions, and technical information.
                All caps with wide letter-spacing.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Graphic Elements */}
      <div className="visual-identity__graphics">
        <div className="container">
          <motion.h3
            className="visual-identity__section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Graphic Elements
          </motion.h3>

          <div className="visual-identity__graphics-grid">
            <motion.div
              className="visual-identity__graphic-item"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="visual-identity__graphic-display">
                <img src={graphicElement1} alt="Registration marks - square orientation" />
              </div>
              <div className="visual-identity__graphic-meta">
                <span className="label label-light">Registration Marks</span>
                <p>Corner markers referencing tailoring patterns and print registration</p>
              </div>
            </motion.div>

            <motion.div
              className="visual-identity__graphic-item"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="visual-identity__graphic-display">
                <img src={graphicElement2} alt="Registration marks - diamond orientation" />
              </div>
              <div className="visual-identity__graphic-meta">
                <span className="label label-light">Diamond Orientation</span>
                <p>Alternative positioning for dynamic compositions</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualIdentity;
