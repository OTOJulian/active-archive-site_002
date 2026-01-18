# Design Section Outline

> Active:Archive — Brand Book Website
> **Audience:** Fashion brands (creative directors, design leads, archive managers)

---

## Page Purpose

Show brands how their digitized archive becomes a **design tool**, not just storage. The value isn't just monetization (that's Sell) — it's that action-list patterns fundamentally change how design iteration works.

---

## Section 1: Hero

### Message/Intent
Reframe the archive from passive storage to active design infrastructure. No hype — just the core shift.

### Copy Direction
**Headline:**
```
Your Archive, Working
```

**Subhead:**
```
Patterns digitized as action lists don't just sit in storage.
They become tools — editable, composable, compounding.
```

### UI/Visual Notes
- Full viewport hero, minimal
- Typography-forward (Century Schoolbook headline, mono subhead)
- Corner dots at all four corners
- No imagery — let the words land
- Scroll indicator: "How it works"

### Component Structure
```tsx
<section className="design-hero">
  <h1 className="design-hero__headline">Your Archive, Working</h1>
  <p className="design-hero__subhead">
    Patterns digitized as action lists don't just sit in storage.<br />
    They become tools — editable, composable, compounding.
  </p>
  <ScrollIndicator label="How it works" />
</section>
```

---

## Section 2: The Problem — Shapes Don't Scale

### Message/Intent
Validate their frustration. Physical patterns AND CAD patterns share the same limitation: they're shapes, not logic. This isn't about physical vs. digital — it's about what kind of digital.

### Copy Direction
**Section Label:** `THE PROBLEM`

**Headline:**
```
Patterns are shapes. That's the problem.
```

**Body Copy (3 short paragraphs):**

```
Whether your archive lives in flat files or CAD software, the limitation is the same: patterns are stored as outlines. Shapes. Static geometry.

To iterate on a shape, you redraft it. Want to see how a '94 trouser looks with a wider leg? Redraw it. Want to test a sleeve from one pattern on a body from another? Start over.

And when everyone started talking about AI in design — you probably noticed it couldn't actually help. AI doesn't understand shapes. It can't read a DXF and know what the armhole is doing.
```

### UI/Visual Notes
- Two-column layout on desktop: copy left, visual right
- Visual: Abstract representation of a pattern as just outlines — flat, inert
- Could animate subtly on scroll (shapes that don't respond/connect)
- Muted palette — this is the "before" state

### Component Structure
```tsx
<section className="design-problem">
  <span className="section-label">THE PROBLEM</span>
  <div className="design-problem__content">
    <div className="design-problem__copy">
      <h2>Patterns are shapes. That's the problem.</h2>
      <p>Whether your archive lives in flat files or CAD software...</p>
      <p>To iterate on a shape, you redraft it...</p>
      <p>And when everyone started talking about AI in design...</p>
    </div>
    <div className="design-problem__visual">
      {/* Static shape illustration */}
    </div>
  </div>
</section>
```

---

## Section 3: The Shift — Patterns as Logic

### Message/Intent
Introduce action lists without jargon. The key insight: patterns can be stored as the *instructions* that create them, not just the result. This is the technical unlock that makes everything else possible.

### Copy Direction
**Section Label:** `THE SHIFT`

**Headline:**
```
What if a pattern remembered how it was made?
```

**Body Copy:**

```
An action list isn't a shape — it's the sequence of decisions that created the shape.

"Start at the shoulder point. Move down 42cm for the body length. Calculate the chest width from the bust measurement plus 8cm ease. Draw the side seam at a 2° angle..."

Every pattern in your archive was made this way. The instructions existed — they just weren't recorded. We record them.
```

**Callout/Highlight:**
```
A pattern becomes a small program.
It can be read. Edited. Run with different inputs.
```

### UI/Visual Notes
- Transition from Section 2's static shapes to animated/responsive logic
- Visual: Same pattern, but now shown as a sequence — steps that build on each other
- Could use a code-like aesthetic but keep it elegant (not IDE-looking)
- Animation: Show parameters changing and pattern responding

### Component Structure
```tsx
<section className="design-shift">
  <span className="section-label">THE SHIFT</span>
  <h2>What if a pattern remembered how it was made?</h2>
  <div className="design-shift__explanation">
    <p>An action list isn't a shape — it's the sequence of decisions...</p>
    <div className="design-shift__example">
      {/* Animated sequence visualization */}
      <code className="action-list-preview">
        Start at shoulder point →
        Body length: 42cm →
        Chest width: bust + 8cm ease →
        Side seam angle: 2°
      </code>
    </div>
    <p>Every pattern in your archive was made this way...</p>
  </div>
  <blockquote className="design-shift__callout">
    A pattern becomes a small program.<br />
    It can be read. Edited. Run with different inputs.
  </blockquote>
</section>
```

---

## Section 4: Capability — Iterate Without Redrafting

### Message/Intent
First practical benefit: iteration is no longer labor. Adjust parameters, see results. This is the "aha" for anyone who's spent hours redrafting.

### Copy Direction
**Section Label:** `01 — ITERATE`

**Headline:**
```
Adjust. Don't redraft.
```

**Body Copy:**
```
Change the body length. The armhole recalculates. The sleeve cap adjusts to match. The side seam stays balanced.

Because the pattern knows how its pieces relate, changing one parameter propagates intelligently through the whole garment. What took hours now takes seconds.
```

**Example/Scenario:**
```
You want to see your '98 blazer with a longer body and narrower lapel.

Before: Pull the pattern. Redraft the front panel. Adjust the facing. Re-grade.
Now: Change two numbers. Export.
```

### UI/Visual Notes
- Interactive demo potential (slider that adjusts a parameter, pattern updates live)
- If not interactive, animation showing parameter change → cascading updates
- Split view: "Before" workflow vs. "Now" workflow

### Component Structure
```tsx
<section className="design-capability design-capability--iterate">
  <span className="section-label">01 — ITERATE</span>
  <h2>Adjust. Don't redraft.</h2>
  <p>Change the body length. The armhole recalculates...</p>

  <div className="design-capability__demo">
    {/* Interactive or animated parameter adjustment */}
    <ParameterSlider
      label="Body length"
      min={38}
      max={48}
      unit="cm"
      onChange={updatePattern}
    />
    <PatternPreview pattern={currentPattern} />
  </div>

  <div className="design-capability__comparison">
    <div className="comparison__before">
      <span>Before</span>
      <p>Pull the pattern. Redraft the front panel...</p>
    </div>
    <div className="comparison__after">
      <span>Now</span>
      <p>Change two numbers. Export.</p>
    </div>
  </div>
</section>
```

---

## Section 5: Capability — Combine Across Your Archive

### Message/Intent
Second benefit: composability. Patterns become modular — pull elements from different garments, different eras. Your archive becomes a parts library.

### Copy Direction
**Section Label:** `02 — COMBINE`

**Headline:**
```
The sleeve from '92. The body from '78.
```

**Body Copy:**
```
When patterns are logic, not shapes, they can talk to each other.

Pull a sleeve from one garment, a collar from another, a pocket detail from a third. The system handles the joins — matching seam lengths, aligning grain lines, preserving construction logic.

Your archive stops being a collection of isolated garments. It becomes a library of components.
```

### UI/Visual Notes
- Visual: Multiple garment "sources" contributing elements to one new garment
- Could use a drag-and-drop metaphor or assembly animation
- Show the parts coming together, seams aligning
- Timeline or era indicators to emphasize mixing across decades

### Component Structure
```tsx
<section className="design-capability design-capability--combine">
  <span className="section-label">02 — COMBINE</span>
  <h2>The sleeve from '92. The body from '78.</h2>
  <p>When patterns are logic, not shapes, they can talk to each other...</p>

  <div className="design-capability__assembly">
    {/* Visual showing components from different sources combining */}
    <ArchiveSource year="1992" element="Sleeve" />
    <ArchiveSource year="1978" element="Body" />
    <ArchiveSource year="2003" element="Collar" />
    <AssembledGarment />
  </div>

  <p>Your archive stops being a collection of isolated garments...</p>
</section>
```

---

## Section 6: Capability — AI That Actually Helps

### Message/Intent
Third benefit: AI integration — but positioned carefully. Not "AI does design for you" but "AI can finally understand what you're working with." Sequential logic is native to how LLMs work.

### Copy Direction
**Section Label:** `03 — ASSIST`

**Headline:**
```
AI understands sequences. Not shapes.
```

**Body Copy:**
```
You've probably tried AI tools for design. They can generate images. They can write copy. But ask them to modify a pattern and they're useless — because shapes are just coordinates. There's no meaning to parse.

Action lists are different. They're sequential logic — steps that build on each other, parameters that have names and relationships. This is exactly what language models understand natively.

Which means AI can actually read your patterns, suggest modifications, learn your house style, help you iterate. Not replace you — assist you.
```

**Clarification (handles skepticism):**
```
We're not selling you an AI design tool. We're giving your patterns a format that AI can work with. What you do with that is up to you.
```

### UI/Visual Notes
- Avoid typical AI imagery (no glowing brains, no robots)
- Could show a conversation-style interface: designer asks a question, gets a useful answer
- Or show AI "reading" a pattern and highlighting what it understands
- Keep it grounded, practical

### Component Structure
```tsx
<section className="design-capability design-capability--assist">
  <span className="section-label">03 — ASSIST</span>
  <h2>AI understands sequences. Not shapes.</h2>
  <p>You've probably tried AI tools for design...</p>
  <p>Action lists are different...</p>
  <p>Which means AI can actually read your patterns...</p>

  <div className="design-capability__ai-demo">
    {/* Conversational or analytical AI interface mockup */}
    <AIInteraction>
      <UserQuery>Show me all blazers with notch lapels wider than 8cm</UserQuery>
      <AIResponse>Found 12 patterns matching criteria...</AIResponse>
    </AIInteraction>
  </div>

  <p className="design-capability__clarification">
    We're not selling you an AI design tool...
  </p>
</section>
```

---

## Section 7: The Compound Effect

### Message/Intent
Long-term value: your archive grows with use. Every new design adds to the toolkit. This positions Active:Archive as infrastructure, not extraction.

### Copy Direction
**Section Label:** `COMPOUND`

**Headline:**
```
Every design adds to your toolkit.
```

**Body Copy:**
```
Most platforms extract value from your work. We're building the opposite.

Every pattern you digitize becomes a tool you can use again. Every new design you create with the system gets added to your library — its components available for future work.

A sleeve you develop for Spring '27 becomes part of your permanent toolkit. The specific way you draft a trouser rise becomes a reusable element. Your archive doesn't just grow — it compounds.
```

**Closing thought:**
```
In five years, you won't just have a bigger archive. You'll have a design system built from your own body of work.
```

### UI/Visual Notes
- Growth visualization — archive expanding over time
- Could show a timeline: Year 1 → Year 3 → Year 5, library density increasing
- Emphasize ownership — this stays yours
- Warm, optimistic tone after the practical sections

### Component Structure
```tsx
<section className="design-compound">
  <span className="section-label">COMPOUND</span>
  <h2>Every design adds to your toolkit.</h2>
  <p>Most platforms extract value from your work...</p>
  <p>Every pattern you digitize becomes a tool you can use again...</p>

  <div className="design-compound__timeline">
    {/* Archive growth visualization */}
    <TimelinePoint year="Year 1" density="sparse" />
    <TimelinePoint year="Year 3" density="moderate" />
    <TimelinePoint year="Year 5" density="rich" />
  </div>

  <p className="design-compound__closing">
    In five years, you won't just have a bigger archive...
  </p>
</section>
```

---

## Section 8: CTA — Start With What You Have

### Message/Intent
Bridge to onboarding/Sell section. Keep it low-pressure — they can start small, with patterns they're not using anyway. Connect to the monetization angle as a bonus, not the pitch.

### Copy Direction
**Headline:**
```
Start with what's sitting dormant.
```

**Body Copy:**
```
You don't need to digitize your entire archive to start. Pick a few patterns — maybe something from the archive that's been sitting untouched, or a sample that never made it to production.

We'll convert them to action lists. You'll see how they work as tools. And if you want to monetize them through Active:Archive while you're at it — that's built in.
```

**CTA Button:**
```
Talk to us about your archive →
```

**Secondary link:**
```
Or see how brands sell through Active:Archive →
```

### UI/Visual Notes
- Clean, minimal CTA section
- Single primary button, one text link
- Corner dots framing the section
- No heavy imagery — typography and whitespace

### Component Structure
```tsx
<section className="design-cta">
  <h2>Start with what's sitting dormant.</h2>
  <p>You don't need to digitize your entire archive to start...</p>

  <div className="design-cta__actions">
    <Link to="/contact" className="btn btn--primary">
      Talk to us about your archive
    </Link>
    <Link to="/sell" className="design-cta__secondary">
      Or see how brands sell through Active:Archive →
    </Link>
  </div>
</section>
```

---

## Page-Level Notes

### Navigation
- Nav links: Shop, Sell, Design (current), with Overview as logo home
- Design should be marked active
- Same nav pattern as other interior pages (AppPage style)

### Transitions
- Horizontal slide transition from other pages (matches existing pattern)
- Scroll-triggered animations for each section
- Stagger content reveals within sections

### Typography Hierarchy
- Section labels: `Century Schoolbook Mono`, uppercase, small, gray
- Headlines: `Century Schoolbook`, large, tight leading
- Body: `Century Schoolbook`, comfortable reading size
- Code/examples: `Century Schoolbook Mono`, subtle background

### Color
- Cream background (`--cream`)
- Charcoal text (`--charcoal`, `--dark`)
- Minimal accent — let photography/visuals provide warmth when added

### Responsive
- Stack two-column layouts on mobile
- Reduce headline sizes with fluid typography (already in CSS vars)
- Touch-friendly CTA sizing

---

## File Structure

```
src/pages/
  DesignPage.tsx        # Main page component
  DesignPage.css        # Page-specific styles

src/components/
  (existing components can be reused)
  (new components as needed for interactive demos)
```

---

## Implementation Priority

1. **Structure first** — All sections with placeholder copy
2. **Typography and spacing** — Get the rhythm right
3. **Static visuals** — Placeholder illustrations/diagrams
4. **Animations** — Scroll-triggered reveals
5. **Interactive demos** — If time allows (parameter slider, etc.)

---

*Document created: January 17, 2026*
*Status: Ready for implementation*
