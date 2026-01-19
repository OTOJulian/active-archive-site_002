import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { createContext, useContext, useRef, useMemo } from 'react';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SellPage from './pages/SellPage';
import DesignPage from './pages/DesignPage';
import './pages/Page.css';

// Page order for determining transition direction
const PAGE_ORDER: Record<string, number> = {
  '/': 0,
  '/shop': 1,
  '/sell': 2,
  '/design': 3,
};

// Context to share navigation direction
const NavigationContext = createContext<'forward' | 'back'>('forward');
export const useNavigationDirection = () => useContext(NavigationContext);

function AnimatedRoutes() {
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  // Compute direction based on page indices
  const direction = useMemo(() => {
    const prevIndex = PAGE_ORDER[prevPathRef.current] ?? 0;
    const currentIndex = PAGE_ORDER[location.pathname] ?? 0;
    const dir = currentIndex > prevIndex ? 'forward' : 'back';

    // Schedule ref update for next tick to avoid issues during render
    setTimeout(() => {
      prevPathRef.current = location.pathname;
    }, 0);

    return dir;
  }, [location.pathname]);

  return (
    <NavigationContext.Provider value={direction}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/design" element={<DesignPage />} />
        </Routes>
      </AnimatePresence>
    </NavigationContext.Provider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
