# Directory Structure

```
brand-book/
├── .planning/              # Project planning docs
│   ├── codebase/
│   │   ├── STACK.md
│   │   └── STRUCTURE.md
│   ├── ISSUES.md
│   ├── PROJECT.md
│   ├── ROADMAP.md
│   └── STATE.md
├── public/                 # Static assets
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── wool_001.png
│   │       └── wool_002.png
│   ├── components/         # Reusable components (Hero page sections)
│   │   ├── BrandStory.tsx/.css
│   │   ├── Footer.tsx/.css
│   │   ├── Hero.tsx/.css
│   │   ├── ProductVision.tsx/.css
│   │   └── VisualIdentity.tsx/.css
│   ├── pages/              # Route pages
│   │   ├── AppPage.tsx/.css
│   │   ├── HomePage.tsx
│   │   ├── Page.css
│   │   ├── ProductionPage.tsx/.css
│   │   └── ProductPage.tsx/.css
│   ├── App.tsx             # Main app with routing & transitions
│   ├── App.css
│   ├── index.css           # Global styles & CSS variables
│   └── main.tsx            # Entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Key Files

### Entry Point
- `src/main.tsx` - React DOM render, wraps App in BrowserRouter

### Routing & Layout
- `src/App.tsx` - Routes, AnimatePresence for page transitions, direction context

### Pages
- `src/pages/HomePage.tsx` - Renders Hero + sections (landing page)
- `src/pages/AppPage.tsx` - Digital companion features
- `src/pages/ProductPage.tsx` - Collection & garments showcase
- `src/pages/ProductionPage.tsx` - Manufacturing & technology story

### Hero Components
- `src/components/Hero.tsx` - Main landing hero with brand name, initiative band, nav
- `src/components/BrandStory.tsx` - Philosophy section
- `src/components/VisualIdentity.tsx` - Design system showcase
- `src/components/ProductVision.tsx` - Product direction
- `src/components/Footer.tsx` - Site footer

### Styles
- `src/index.css` - CSS custom properties (colors, typography, spacing)
- `src/App.css` - Layout utilities
- `src/pages/Page.css` - Shared page styles (nav, transitions)
