import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useNavigationDirection } from '../App';
import './DesignPage.css';

const DesignPage = () => {
  const direction = useNavigationDirection();

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
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
          <Link to="/shop" className="page__link">Shop</Link>
          <Link to="/sell" className="page__link">Sell</Link>
          <Link to="/design" className="page__link page__link--active">Design</Link>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section className="design-hero">
        <div className="design-hero__dots">
          <div className="design-hero__dot" />
          <div className="design-hero__dot" />
          <div className="design-hero__dot" />
          <div className="design-hero__dot" />
        </div>
        <motion.div className="design-hero__content" {...fadeUp}>
          <h1 className="design-hero__headline">Your Archive, Working</h1>
          <p className="design-hero__subhead">
            Patterns digitized as action lists don't just sit in storage.<br />
            They become tools — editable, composable, compounding.
          </p>
        </motion.div>
        <motion.div
          className="design-hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <span>How it works</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3L8 13M8 13L3 8M8 13L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </section>

      {/* Section 2: The Problem */}
      <section className="design-problem">
        <motion.div className="design-problem__content" {...fadeUp}>
          <div className="design-problem__copy">
            <span className="section-label">The Problem</span>
            <h2 className="design-problem__headline">Patterns are shapes. That's the problem.</h2>
            <div className="design-problem__text">
              <p>
                Whether your archive lives in flat files or CAD software, the limitation is the same:
                patterns are stored as outlines. Shapes. Static geometry.
              </p>
              <p>
                To iterate on a shape, you redraft it. Want to see how a '94 trouser looks with a
                wider leg? Redraw it. Want to test a sleeve from one pattern on a body from another?
                Start over.
              </p>
              <p>
                And when everyone started talking about AI in design — you probably noticed it couldn't
                actually help. AI doesn't understand shapes. It can't read a DXF and know what the
                armhole is doing.
              </p>
            </div>
          </div>
          <div className="design-problem__visual">
            <div className="design-problem__shape">
              <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 20 L160 20 L160 40 L180 60 L180 120 L160 140 L160 260 L40 260 L40 140 L20 120 L20 60 L40 40 Z"
                  stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
              </svg>
              <span className="design-problem__shape-label">Static. Inert.</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 3: The Shift */}
      <section className="design-shift">
        <motion.div className="design-shift__content" {...fadeUp}>
          <span className="section-label">The Shift</span>
          <h2 className="design-shift__headline">What if a pattern remembered how it was made?</h2>
          <div className="design-shift__explanation">
            <p>
              An action list isn't a shape — it's the sequence of decisions that created the shape.
            </p>
            <motion.div
              className="design-shift__example"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <code className="action-list-preview">
                <span>Start at shoulder point →</span>
                <span>Body length: 42cm →</span>
                <span>Chest width: bust + 8cm ease →</span>
                <span>Side seam angle: 2°</span>
              </code>
            </motion.div>
            <p>
              Every pattern in your archive was made this way. The instructions existed — they just
              weren't recorded. We record them.
            </p>
          </div>
          <blockquote className="design-shift__callout">
            A pattern becomes a small program.<br />
            It can be read. Edited. Run with different inputs.
          </blockquote>
        </motion.div>
      </section>

      {/* Section 4: Capability — Iterate */}
      <section className="design-capability">
        <motion.div className="design-capability__content" {...fadeUp}>
          <span className="section-label">01 — Iterate</span>
          <h2 className="design-capability__headline">Adjust. Don't redraft.</h2>
          <p className="design-capability__body">
            Change the body length. The armhole recalculates. The sleeve cap adjusts to match.
            The side seam stays balanced.
          </p>
          <p className="design-capability__body">
            Because the pattern knows how its pieces relate, changing one parameter propagates
            intelligently through the whole garment. What took hours now takes seconds.
          </p>
          <motion.div
            className="design-capability__comparison"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div className="comparison__before" variants={staggerItem}>
              <span className="comparison__label">Before</span>
              <p>Pull the pattern. Redraft the front panel. Adjust the facing. Re-grade.</p>
            </motion.div>
            <motion.div className="comparison__after" variants={staggerItem}>
              <span className="comparison__label">Now</span>
              <p>Change two numbers. Export.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 5: Capability — Combine */}
      <section className="design-capability design-capability--alt">
        <motion.div className="design-capability__content" {...fadeUp}>
          <span className="section-label">02 — Combine</span>
          <h2 className="design-capability__headline">The sleeve from '92. The body from '78.</h2>
          <p className="design-capability__body">
            When patterns are logic, not shapes, they can talk to each other.
          </p>
          <p className="design-capability__body">
            Pull a sleeve from one garment, a collar from another, a pocket detail from a third.
            The system handles the joins — matching seam lengths, aligning grain lines, preserving
            construction logic.
          </p>
          <motion.div
            className="design-capability__assembly"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="assembly__source">
              <span className="assembly__year">1992</span>
              <span className="assembly__element">Sleeve</span>
            </div>
            <div className="assembly__connector">+</div>
            <div className="assembly__source">
              <span className="assembly__year">1978</span>
              <span className="assembly__element">Body</span>
            </div>
            <div className="assembly__connector">+</div>
            <div className="assembly__source">
              <span className="assembly__year">2003</span>
              <span className="assembly__element">Collar</span>
            </div>
            <div className="assembly__connector">=</div>
            <div className="assembly__result">
              <span className="assembly__new">New Design</span>
            </div>
          </motion.div>
          <p className="design-capability__closing">
            Your archive stops being a collection of isolated garments. It becomes a library of components.
          </p>
        </motion.div>
      </section>

      {/* Section 6: Capability — AI Assist */}
      <section className="design-capability">
        <motion.div className="design-capability__content" {...fadeUp}>
          <span className="section-label">03 — Assist</span>
          <h2 className="design-capability__headline">AI understands sequences. Not shapes.</h2>
          <p className="design-capability__body">
            You've probably tried AI tools for design. They can generate images. They can write copy.
            But ask them to modify a pattern and they're useless — because shapes are just coordinates.
            There's no meaning to parse.
          </p>
          <p className="design-capability__body">
            Action lists are different. They're sequential logic — steps that build on each other,
            parameters that have names and relationships. This is exactly what language models
            understand natively.
          </p>
          <p className="design-capability__body">
            Which means AI can actually read your patterns, suggest modifications, learn your house
            style, help you iterate. Not replace you — assist you.
          </p>
          <motion.div
            className="design-capability__ai-demo"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="ai-interaction">
              <div className="ai-interaction__query">
                <span className="ai-interaction__label">Query</span>
                <p>Show me all blazers with notch lapels wider than 8cm</p>
              </div>
              <div className="ai-interaction__response">
                <span className="ai-interaction__label">Response</span>
                <p>Found 12 patterns matching criteria across 1987-2019...</p>
              </div>
            </div>
          </motion.div>
          <p className="design-capability__clarification">
            We're not selling you an AI design tool. We're giving your patterns a format that AI
            can work with. What you do with that is up to you.
          </p>
        </motion.div>
      </section>

      {/* Section 7: The Compound Effect */}
      <section className="design-compound">
        <motion.div className="design-compound__content" {...fadeUp}>
          <span className="section-label">Compound</span>
          <h2 className="design-compound__headline">Every design adds to your toolkit.</h2>
          <p className="design-compound__body">
            Most platforms extract value from your work. We're building the opposite.
          </p>
          <p className="design-compound__body">
            Every pattern you digitize becomes a tool you can use again. Every new design you create
            with the system gets added to your library — its components available for future work.
          </p>
          <p className="design-compound__body">
            A sleeve you develop for Spring '27 becomes part of your permanent toolkit. The specific
            way you draft a trouser rise becomes a reusable element. Your archive doesn't just grow —
            it compounds.
          </p>
          <motion.div
            className="design-compound__timeline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="timeline__point timeline__point--sparse">
              <span className="timeline__year">Year 1</span>
              <div className="timeline__density">
                <span /><span /><span />
              </div>
            </div>
            <div className="timeline__connector" />
            <div className="timeline__point timeline__point--moderate">
              <span className="timeline__year">Year 3</span>
              <div className="timeline__density">
                <span /><span /><span /><span /><span /><span />
              </div>
            </div>
            <div className="timeline__connector" />
            <div className="timeline__point timeline__point--rich">
              <span className="timeline__year">Year 5</span>
              <div className="timeline__density">
                <span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span />
              </div>
            </div>
          </motion.div>
          <p className="design-compound__closing">
            In five years, you won't just have a bigger archive. You'll have a design system built
            from your own body of work.
          </p>
        </motion.div>
      </section>

      {/* Section 8: CTA */}
      <section className="design-cta">
        <div className="design-cta__dots">
          <div className="design-cta__dot" />
          <div className="design-cta__dot" />
          <div className="design-cta__dot" />
          <div className="design-cta__dot" />
        </div>
        <motion.div className="design-cta__content" {...fadeUp}>
          <h2 className="design-cta__headline">Start with what's sitting dormant.</h2>
          <p className="design-cta__body">
            You don't need to digitize your entire archive to start. Pick a few patterns — maybe
            something from the archive that's been sitting untouched, or a sample that never made
            it to production.
          </p>
          <p className="design-cta__body">
            We'll convert them to action lists. You'll see how they work as tools. And if you want
            to monetize them through Active:Archive while you're at it — that's built in.
          </p>
          <div className="design-cta__actions">
            <Link to="/contact" className="design-cta__button">
              Talk to us about your archive
            </Link>
            <Link to="/sell" className="design-cta__secondary">
              Or see how brands sell through Active:Archive →
            </Link>
          </div>
        </motion.div>
      </section>
    </motion.main>
  );
};

export default DesignPage;
