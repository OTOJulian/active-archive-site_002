# Production Section Plan & Outline

> Brand Book Website — active-archive.com

---

## Overview

The Production section tells the story of **how** Active Archive garments are made — from archival pattern to finished piece. This page completes the brand narrative by showcasing the technology, craftsmanship, and philosophy behind the production process. It positions ONE to ONE's approach as a solution to fashion's overproduction crisis.

---

## Key Messaging Pillars

Based on Notion research, the Production section should communicate:

1. **The Problem with Fashion** — 150 billion garments/year, 40% unsold, standardized sizing from the 1860s applied at impossible scale
2. **Algorithmic Pattern Making** — 1:Fit technology that tailors patterns to individual bodies in seconds
3. **Made-to-Order Model** — Producing only what's ordered, eliminating overproduction
4. **Artisan Partnership** — Working with skilled ateliers (Porto, Portugal focus) not anonymous factories
5. **Transparent Supply Chain** — Every step documented and traceable via the App

---

## The ONE to ONE Difference

### Traditional Fashion Model
- Standardized sizes graded from fit models (invented 1860s for home sewing)
- Mass production optimized for volume, not fit
- Brands guess demand months ahead → 40% overproduction
- 30% of sold garments returned, 77% due to poor fit
- Linear take-make-dispose system

### Active Archive Model
- Algorithmic patterns customized to individual measurements
- Made-to-order production (no excess inventory)
- Same price for standard sizing OR made-to-measure
- On-demand manufacturing with atelier partners
- Circular, sustainable approach

---

## Page Structure & Content Sections

### Section 1: Hero / Philosophy Statement
**Purpose:** Establish the "why" behind the production approach

- Large headline: "How It's Made" or "From Pattern to Piece"
- Subhead: Philosophy statement about production
- Suggested copy direction: *"The clothes you buy should adapt to fit your body, not the other way around."*

**Visual Treatment:**
- Could feature process imagery (cutting, sewing, finishing)
- Atelier/workshop photography
- Maintain editorial, documentary feel

---

### Section 2: The Problem (Industry Context)
**Purpose:** Educate visitors on why a new approach matters

**Key Statistics to Feature:**
- 150 billion garments produced annually
- 40% of production goes unsold
- 30% of sold garments are returned
- 77% of returns caused by fit issues
- Standardized sizing invented in 1860s — never meant for this scale

**Narrative Arc:**
1. Mass production methods from early 1900s (parallels to Ford's Model T)
2. System scaled beyond its design limits
3. Result: unprecedented waste and poor fit
4. Need for a fundamentally different approach

**Visual Treatment:**
- Infographic-style data visualization
- Could use timeline or comparison format
- Keep on-brand (monochromatic, typographic focus)

---

### Section 3: The Technology — 1:Fit Algorithm
**Purpose:** Explain the proprietary pattern-making technology

**Key Concepts to Cover:**

1. **Algorithmic Patterns**
   - Patterns created through equations, not static scaling
   - Input: your body measurements
   - Output: pattern customized to your exact dimensions
   - Preserves design intent while ensuring fit

2. **How It Works (Simplified)**
   - Customer creates body profile (measurements)
   - Algorithm calculates custom pattern OR matches to best size
   - Pattern sent directly to production partner
   - Garment made specifically for you

3. **Dynamic Action Lists**
   - Patterns encoded as sequences of operations
   - Can be recalculated for any body in seconds
   - Technical innovation that makes MTM scalable

**Visual Treatment:**
- Abstract visualization of pattern → body → garment
- Could show measurement inputs transforming into pattern
- Avoid overly technical/engineering aesthetic — keep it elegant

**Copy Direction:**
*"Our 1:Fit algorithm converts garment patterns into mathematical operations that can be recalculated for any body, preserving design intent while ensuring fit."*

---

### Section 4: The Makers — Atelier Partnership
**Purpose:** Humanize production, showcase craftsmanship

**Key Points:**
- Partnership with ateliers in Porto, Portugal
- Skilled craftspeople, not anonymous factories
- Capable of both structured garments and MTM production
- Quality control at every step
- Automated cutting machines + skilled assembly

**Content Elements:**
- Introduction to production partner philosophy
- What makes Porto a center for quality garment production
- Emphasis on skill and craftsmanship
- Fair labor practices and working conditions

**Visual Treatment:**
- Workshop/atelier photography
- Craftspeople at work (if available)
- Detail shots of machines, tools, workspace
- Human element is key

---

### Section 5: The Process — From Order to Delivery
**Purpose:** Walk through the journey of a garment

**Timeline/Steps:**

```
01  ORDER
    Customer places order, choosing size match or MTM

02  PATTERN
    1:Fit generates custom pattern (MTM) or selects static size

03  CUT
    Pattern sent to atelier, fabric cut by automated machine

04  SEW
    Skilled craftspeople assemble the garment

05  FINISH
    Quality control, pressing, final details

06  SHIP
    Garment ships directly to customer

07  REGISTER
    Scan to register in App, access care & provenance
```

**Visual Treatment:**
- Step-by-step visual journey
- Could be scroll-triggered animation
- Photography or illustration at each stage
- Timeline aesthetic (connects to brand's archival feel)

---

### Section 6: The Materials — Deadstock Sourcing
**Purpose:** Connect production to sustainability

**Key Points:**
- What is deadstock fabric (unused surplus from other productions)
- Why it matters (no new resources consumed for materials)
- Sourcing strategy and supplier relationships
- Limited quantities = unique pieces
- Quality of surplus luxury fabrics

**Connection to Product Section:**
- Each garment's fabric has a story
- Documented in the App for provenance

---

### Section 7: Sustainability Impact
**Purpose:** Quantify the difference this approach makes

**Potential Metrics:**
- Zero overproduction (made-to-order only)
- Deadstock materials = no new fabric production
- Reduced returns due to better fit
- Longer garment lifespan (quality + care guidance)
- Local production (reduced shipping footprint)

**Visual Treatment:**
- Data points with impact numbers
- Comparison to traditional model
- Avoid greenwashing — be specific and honest

---

### Section 8: CTA / Connection Points
**Purpose:** Drive to other sections and actions

- Link to Product section (see the garments)
- Link to App section (provenance tracking)
- Newsletter signup for production updates
- "Our Story" or About content

---

## Visual & Design Direction

### Photography Needs
- Atelier/workshop environment shots
- Craftspeople working (hands, tools, machines)
- Fabric cutting and handling
- Sewing and assembly details
- Quality control and finishing
- Packaging and shipping

### Layout Principles
Following ONE to ONE brand guidelines:
- Century Schoolbook typography
- Monochromatic palette with warmth from photography
- Generous white space
- Corner dots and registration marks (especially appropriate here — tailoring reference)
- Documentary/editorial photography style

### Animation Considerations
- Scroll-triggered reveals for process steps
- Parallax on workshop imagery
- Data/statistics could animate in
- Horizontal slide page transition (matching site pattern)

---

## Technical Requirements

### Dependencies
- Atelier partnership finalized (CATEGORY 5)
- Production photography (requires Porto visit)
- 1:Fit algorithm documentation for simplified explanation
- Sustainability metrics calculated

### Components Needed
- Process timeline/stepper component
- Statistics/data display component
- Before/after or comparison component
- Image gallery for workshop shots

### Data Structure
```typescript
interface ProductionStep {
  number: string;
  title: string;
  description: string;
  image?: string;
  duration?: string;
}

interface SustainabilityMetric {
  label: string;
  value: string;
  comparison?: string;
  source?: string;
}
```

---

## Content Needs

### Copywriting
- [ ] Philosophy statement / hero copy (50-75 words)
- [ ] Industry problem narrative (150-200 words)
- [ ] 1:Fit technology explanation (100-150 words, accessible language)
- [ ] Atelier partnership story (100-150 words)
- [ ] Process step descriptions (7 steps × 25-50 words each)
- [ ] Sustainability impact copy (100 words)

### Photography
- [ ] Atelier exterior/environment
- [ ] Craftspeople at work (5-10 shots)
- [ ] Process documentation (cutting, sewing, finishing)
- [ ] Detail shots (stitching, fabric, tools)
- [ ] Finished garment quality control

### Data/Research
- [ ] Verify industry statistics (overproduction, returns, waste)
- [ ] Calculate Active Archive sustainability metrics
- [ ] Document 1:Fit algorithm in accessible terms

---

## Implementation Phases

### Phase 1: Structure & Placeholder
- Build page layout and components
- Implement process timeline component
- Establish scroll animations and transitions
- Use placeholder content/images

### Phase 2: Content Integration
- Add approved copy
- Integrate photography (when available from Porto)
- Add data visualizations
- Connect statistics

### Phase 3: Interactive Features
- Animated process timeline
- Interactive sustainability comparison
- Connection to App provenance features

---

## Open Questions

1. **Depth of technical explanation** — How much detail on 1:Fit algorithm? (Balance accessibility vs. credibility)
2. **Atelier identity** — Name the specific partner or keep abstract? (May depend on partnership status)
3. **Sustainability claims** — What can we verify and substantiate? (Avoid greenwashing)
4. **Photography timeline** — When is Porto visit happening for production photography?
5. **Process timing** — What are actual lead times for sized vs. MTM orders?

---

## Related Notion Pages

- [CATEGORY 5: Production & Inventory](https://www.notion.so/29656a5436dc8034b738d0ea8f07a362)
- [JD Statement of Work](https://www.notion.so/2df56a5436dc80dcaa8bcb35af0b6373)
- [Initial Factory Questions](https://www.notion.so/2e056a5436dc807dab89dad753c97323)
- [1:Fit](https://www.notion.so/f63757cfe6484f0a8deb1e816f3576b8)
- [CATEGORY 2: Size System & Matching Algorithm](https://www.notion.so/29656a5436dc80e6becfe36b9926ab71)
- [On Algorithmic Patterns](https://www.notion.so/bcb48d0018e6470796d6cb92d6909ebf)
- [Critical Mass Manufacturing](https://www.notion.so/6de167746b9b4bab8a2ec1630b339b0d)
- [Phase ONE Launch Overview](https://www.notion.so/29456a5436dc80d299b1c74be3ccda1e)

---

## Narrative Summary

The Production page tells a story in three acts:

**Act 1: The Problem**
Fashion's mass production model, borrowed from Ford's assembly line, was designed for millions of garments — not billions. Standardized sizing invented in the 1860s for home sewing patterns was never meant to clothe the world. The result: 40% of garments unsold, 30% returned, unprecedented waste.

**Act 2: The Solution**
Active Archive takes a different approach. Our 1:Fit algorithm treats each garment pattern as a set of mathematical operations that can be recalculated for any body in seconds. Instead of guessing what sizes to produce, we make garments when they're ordered — sized or made-to-measure, same price.

**Act 3: The Craft**
Technology alone isn't enough. We partner with skilled ateliers in Porto, Portugal — craftspeople who combine automated precision cutting with human expertise in assembly and finishing. Every garment is made with intention, not just efficiency.

---

*Document created: January 17, 2026*
*Status: Planning*
