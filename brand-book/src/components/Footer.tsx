import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer__main"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="footer__brand">
            <span className="footer__logotype">Active<span className="footer__colon">:</span>Archive</span>
            <p className="footer__tagline">Archival Designs Made-to-Measure in Deadstock Fabric</p>
          </div>

          <div className="footer__info">
            <div className="footer__col">
              <span className="label">Initiative</span>
              <p>A ONE to ONE pilot initiative validating made-to-measure technology at scale.</p>
            </div>
            <div className="footer__col">
              <span className="label">Contact</span>
              <p>For partnership inquiries and collaborations.</p>
            </div>
          </div>
        </motion.div>

        <div className="footer__bottom">
          <span className="footer__copyright">
            &copy; {currentYear} ONE to ONE
          </span>
        </div>
      </div>

      {/* Registration marks */}
      <div className="footer__marks">
        <div className="footer__mark footer__mark--left" />
        <div className="footer__mark footer__mark--right" />
      </div>
    </footer>
  );
};

export default Footer;
