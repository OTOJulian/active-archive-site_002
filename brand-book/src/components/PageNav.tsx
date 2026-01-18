import { Link } from 'react-router-dom';
import './PageNav.css';

interface PageNavProps {
  activePage: 'shop' | 'sell' | 'design';
}

const PageNav = ({ activePage }: PageNavProps) => {
  return (
    <nav className="page-nav">
      <Link to="/" className="page-nav__brand">Active : Archive</Link>
      <div className="page-nav__links">
        <Link
          to="/shop"
          className={`page-nav__link ${activePage === 'shop' ? 'page-nav__link--active' : ''}`}
        >
          Shop
        </Link>
        <Link
          to="/sell"
          className={`page-nav__link ${activePage === 'sell' ? 'page-nav__link--active' : ''}`}
        >
          Sell
        </Link>
        <Link
          to="/design"
          className={`page-nav__link ${activePage === 'design' ? 'page-nav__link--active' : ''}`}
        >
          Design
        </Link>
      </div>
    </nav>
  );
};

export default PageNav;
