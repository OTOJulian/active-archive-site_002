import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { createContext, useContext, useRef, useMemo } from 'react';
import HomePage from './pages/HomePage';
import AppPage from './pages/AppPage';
import ProductPage from './pages/ProductPage';
import ProductionPage from './pages/ProductionPage';
import './pages/Page.css';

// Page order for determining transition direction
const PAGE_ORDER: Record<string, number> = {
  '/': 0,
  '/app': 1,
  '/product': 2,
  '/production': 3,
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
          <Route path="/app" element={<AppPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/production" element={<ProductionPage />} />
        </Routes>
      </AnimatePresence>
    </NavigationContext.Provider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
