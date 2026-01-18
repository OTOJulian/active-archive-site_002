# Product Section Plan & Outline

> Brand Book Website — active-archive.com

---

## Overview

The Product section of the Active Archive brand book site showcases the garment collection and communicates the unique value proposition: **archival designs made-to-measure in deadstock fabric**. This page bridges the conceptual brand story (Homepage) with the practical production process (Production page).

---

## Key Messaging Pillars

Based on Notion research, the Product section should communicate:

1. **Archival Heritage** — Vintage reference garments reinterpreted for modern wear
2. **Deadstock Sustainability** — Unused surplus fabrics given new life, zero-waste approach
3. **Made-to-Measure Option** — Choose between matched sizing (ships immediately) or MTM (custom fit)
4. **Provenance & Transparency** — Each piece has a documented journey (connects to App section)

---

## Launch Collection (Phase ONE)

### Initial Assortment
Starting with **Men's Collection**, expanding to Women's:

| Garment | Status | Notes |
|---------|--------|-------|
| Men's Buttondown Shirt | First priority | Starting piece for beta |
| Men's Trouser | In development | Requires new pants block |
| Men's Jacket | Planned | Structured garment |
| Women's Buttondown Shirt | Phase 1.5 | After men's launch |
| Women's Trouser | Phase 1.5 | |
| Women's Jacket | Phase 1.5 | |

### Size Run
- Beta: 5 sizes (XS–XL)
- 10 units per size per garment
- Both standard sizing AND made-to-measure available at same price

---

## Page Structure & Content Sections

### Section 1: Hero / Collection Introduction
**Purpose:** Introduce the collection philosophy

- Large headline: "The Collection" or "Archive Editions"
- Subhead explaining the concept: vintage designs + deadstock fabric
- Full-width or split-screen imagery of garments
- Label: "Edition 001" or similar to establish collectibility

**Visual Treatment:**
- High-contrast, editorial photography style
- Could feature flat-lay or styled shots
- Maintain brand's monochromatic aesthetic with garments providing warmth

---

### Section 2: The Garments
**Purpose:** Showcase individual pieces with detail

For each garment, display:
- Product name and edition number
- Hero image (styled or flat-lay)
- Detail shots (fabric, construction, finishing)
- Brief description of design origin/inspiration
- Fabric story (what deadstock, where sourced)
- Price point
- CTA: "Try On" button (connects to VTON experience)

**Content per Garment:**
```
[Garment Name]
Edition [XXX] — [Season/Year]

[1-2 sentence design origin story]

Fabric: [Deadstock source description]
Origin: [Vintage reference era/brand if applicable]
Construction: [Key details — e.g., "Single-needle stitching"]

[Price] — Ships in [X] days (Sized) / [X] weeks (Made-to-Measure)
```

**Layout Options:**
- Grid layout for collection overview
- Individual product deep-dives on scroll
- Click/tap to expand for full details

---

### Section 3: The Fabric Story
**Purpose:** Communicate sustainability through material narrative

- Explain deadstock concept for uninitiated visitors
- Specific fabric details for current collection
- Environmental impact messaging (without greenwashing)
- Visual: close-up textile photography, material swatches

**Key Points to Cover:**
- What is deadstock fabric?
- Why it matters (waste reduction, unique materials)
- Limited quantities = exclusivity
- Quality of vintage/surplus materials

---

### Section 4: Sizing & Fit
**Purpose:** Explain the dual offering (standard vs MTM)

**Two Paths:**
1. **Standard Sizing** — Ships immediately
   - Traditional size chart
   - "Best match" algorithm recommendation

2. **Made-to-Measure** — Same price, custom fit
   - Brief explanation of process
   - Timeline expectation (X weeks)
   - What measurements needed

**Visual:** Side-by-side comparison or toggle between options

---

### Section 5: Care & Longevity
**Purpose:** Reinforce quality and sustainability through care guidance

- General care philosophy (buy less, care more)
- Garment-specific care instructions
- Repair services or guidance
- Connection to App (digital care companion)

---

### Section 6: Collection Navigation / CTA
**Purpose:** Drive to purchase or exploration

- Link to full product pages (e-commerce)
- "Try On" experience preview
- Newsletter signup for new editions
- Link to Production page for deeper story

---

## Visual & Design Direction

### Photography Style
Per CATEGORY 7 from Notion:
- Flat lays and styled shots
- Garment detail shots (stitching, buttons, fabric texture)
- Lifestyle imagery if budget allows
- Consistent aesthetic across all pieces
- High contrast, editorial quality

### Layout Principles
Following ONE to ONE brand guidelines:
- Century Schoolbook typography
- Monochromatic palette (charcoal, cream, white)
- Generous white space
- Corner dots graphic element
- Registration marks for tailoring reference aesthetic

### Animation Considerations
- Scroll-triggered reveals (consistent with other pages)
- Smooth image transitions
- Subtle parallax on product imagery
- Horizontal slide page transition (matching site pattern)

---

## Technical Requirements

### Dependencies
- Product photography assets (blocked by physical samples — CATEGORY 5.1)
- Final garment specifications from pattern development (CATEGORY 1)
- VTON integration for "Try On" button (CATEGORY 3 & 4)

### Components Needed
- Product card component
- Image gallery/carousel
- Size chart component
- Fabric detail modal
- CTA button styles

### Data Structure
Each product needs:
```typescript
interface Product {
  id: string;
  name: string;
  edition: string;
  description: string;
  fabricStory: string;
  origin: string;
  construction: string[];
  price: number;
  images: {
    hero: string;
    details: string[];
    fabric: string;
  };
  sizes: string[];
  mtmAvailable: boolean;
  shippingTime: {
    standard: string;
    mtm: string;
  };
}
```

---

## Content Needs

### Copywriting
- [ ] Collection introduction (50-100 words)
- [ ] Individual garment descriptions (3 garments × 50-75 words each)
- [ ] Fabric/deadstock story (100-150 words)
- [ ] Sizing explanation copy
- [ ] Care instructions

### Photography
- [ ] Hero shots per garment (3)
- [ ] Detail shots per garment (2-3 each)
- [ ] Fabric close-ups
- [ ] Lifestyle/styled shots (optional)

### Assets from Brand Guidelines
- Typography: Century Schoolbook (already implemented)
- Colors: Charcoal (#333), Cream (#F5F5F0), White (#FFF)
- Graphic elements: Corner dots, registration marks

---

## Implementation Phases

### Phase 1: Structure & Placeholder
- Build page layout and components
- Implement with placeholder content/images
- Establish scroll animations and transitions

### Phase 2: Content Integration
- Add final photography when available
- Integrate approved copy
- Connect to product data

### Phase 3: Interactive Features
- "Try On" button integration (VTON plugin)
- Size recommendation flow
- E-commerce connection

---

## Open Questions

1. **Pricing display** — Show price on brand book or only on e-commerce checkout?
2. **Product depth** — How much detail on brand book vs. dedicated product pages?
3. **VTON integration** — Embed in page or popup/modal experience?
4. **Edition numbering** — How to communicate limited runs without inventory anxiety?

---

## Related Notion Pages

- [CATEGORY 1: Garment Design & Pattern Development](https://www.notion.so/29656a5436dc8039b549feee172908e9)
- [CATEGORY 5: Production & Inventory](https://www.notion.so/29656a5436dc8034b738d0ea8f07a362)
- [CATEGORY 6: Active-Archive.com](https://www.notion.so/29656a5436dc80c28d48da1a34855af8)
- [CATEGORY 7: Visual Assets & Marketing](https://www.notion.so/29656a5436dc80f9ae91d1d2ab25ea90)
- [Phase ONE Launch Overview](https://www.notion.so/29456a5436dc80d299b1c74be3ccda1e)

---

*Document created: January 17, 2026*
*Status: Planning*
