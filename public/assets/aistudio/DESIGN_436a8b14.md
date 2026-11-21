---
name: Dark Obsidian & Crimson Editorial
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#e5bdba'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#ac8885'
  outline-variant: '#5c403d'
  surface-tint: '#ffb3ad'
  primary: '#ffb3ad'
  on-primary: '#680009'
  primary-container: '#c81d25'
  on-primary-container: '#ffddda'
  inverse-primary: '#bc111e'
  secondary: '#ffb3b0'
  on-secondary: '#5a1a1b'
  secondary-container: '#782f2f'
  on-secondary-container: '#fd9a97'
  tertiary: '#ffb3ad'
  on-tertiary: '#680009'
  tertiary-container: '#cd0b20'
  on-tertiary-container: '#ffddda'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb3ad'
  on-primary-fixed: '#410003'
  on-primary-fixed-variant: '#930011'
  secondary-fixed: '#ffdad8'
  secondary-fixed-dim: '#ffb3b0'
  on-secondary-fixed: '#3e0408'
  on-secondary-fixed-variant: '#782f2f'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#930012'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
  bg-base: '#0A0A0B'
  bg-elevated: '#111113'
  bg-card: '#151518'
  bg-crimson-dark: '#4A0D10'
  bg-crimson-deep: '#1C0708'
  accent-bright: '#E5252E'
  accent-glow: rgba(200, 29, 37, 0.28)
  accent-soft: rgba(200, 29, 37, 0.12)
  text-main: '#F4F4F5'
  text-muted: '#9A9AA2'
  text-subtle: '#686870'
  border-hairline: rgba(255, 255, 255, 0.08)
  border-accent: rgba(200, 29, 37, 0.45)
  border-accent-bright: '#E5252E'
typography:
  display-hero:
    fontFamily: Anton
    fontSize: 5.5rem
    fontWeight: '400'
    lineHeight: '0.88'
    letterSpacing: 0.01em
  display-hero-mobile:
    fontFamily: Anton
    fontSize: 3.5rem
    fontWeight: '400'
    lineHeight: '0.92'
    letterSpacing: 0.01em
  headline-lg:
    fontFamily: Anton
    fontSize: 3.75rem
    fontWeight: '400'
    lineHeight: '0.9'
    letterSpacing: 0.01em
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 2.5rem
    fontWeight: '400'
    lineHeight: '0.95'
    letterSpacing: 0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.5'
  label-kicker:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.6875rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.16em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 5vw
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.25rem
  space-2xl: 5.25rem
---

# Design System: Dark Obsidian & Crimson Editorial

## Brand & Aesthetic Overview
- **Aesthetic**: Dark Obsidian & Crimson Editorial UI with high contrast, crisp hairline borders, and atmospheric radial illumination.
- **Identity**: Naufal Nadhif Arkaan — Informatics Engineering Student at Institut Teknologi PLN (ITPLN), Aspiring Technology Enthusiast focusing on web, programming, and game development.
- **Tone**: Technical, sleek, focused, editorial, and commanding yet approachable.

## Color Tokens
```css
:root {
  /* Surfaces */
  --bg-base: #0A0A0B;
  --bg-elevated: #111113;
  --bg-card: #151518;
  --bg-crimson-dark: #4A0D10;
  --bg-crimson-deep: #1C0708;

  /* Accents & Highlights */
  --accent: #C81D25;
  --accent-bright: #E5252E;
  --accent-glow: rgba(200, 29, 37, 0.28);
  --accent-soft: rgba(200, 29, 37, 0.12);

  /* Typography */
  --text-main: #F4F4F5;
  --text-muted: #9A9AA2;
  --text-subtle: #686870;

  /* Borders & Dividers */
  --border-hairline: rgba(255, 255, 255, 0.08);
  --border-accent: rgba(200, 29, 37, 0.45);
  --border-accent-bright: #E5252E;

  /* Gradients & Lighting */
  --grad-crimson-hero: linear-gradient(180deg, #D92027 0%, #5E0B0E 100%);
  --grad-quote-card: linear-gradient(155deg, #520E12 0%, #1C0708 65%, #111113 100%);
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
}
```

## Typography System
1. **Display & Massive Titles**:
   - Font Family: `'Anton', sans-serif`
   - Weight: `400`
   - Style: Ultra-condensed, tall uppercase, tight line-height (0.84 - 0.92), letter-spacing 0.01em.
   - Applications: Giant backdrop "PORTFOLIO" wordmark, hero headline name ("NAUFAL NADHIF ARKAAN"), stat metrics, section numbers ("01", "02").

2. **Interface & Editorial Body**:
   - Font Family: `'Plus Jakarta Sans', sans-serif`
   - Weights: `400` (Regular), `500` (Medium), `600` (Semi-Bold), `700` (Bold), `800` (Extra-Bold).
   - Applications: Section titles, subheadings, bento cards, descriptions, status tags.
   - Kicker Micro-labels: 10px - 11px, `font-weight: 700`, `letter-spacing: 0.16em`, uppercase.

3. **Handwritten Script Accent**:
   - Font Family: `'Caveat', cursive`
   - Weights: `500`, `600`
   - Applications: Greeting accents ("Hello, I'm"), signature stamps, personal quotes.

## Layout & Spacing Principles
- **Grid Layout**: Bento-box architecture, crisp structural containers separated by `1px solid var(--border-hairline)`.
- **Max Width**: `1280px` centered with fluid horizontal padding (`5vw`).
- **Whitespace Rhythm**: Generous vertical rhythm (`84px` section gaps), balanced micro-spacing inside cards (`24px` to `36px`).
- **Atmospheric Glow**: Radial gradient spots in crimson behind focal elements (hero cutout, CTAs, right footer column).

## Component Patterns
1. **Status Badges & Pills**:
   - Rounded-full micro badges with hairline borders and subtle red tints for statuses (`ACTIVE BUILD`, `LEARNING TRACK`, `IN PROGRESS`).
   - Interactive skill capsules with dark backgrounds and crimson hover borders.
2. **Project Cards**:
   - 16:10 preview frames with terminal/code/wireframe aesthetics.
   - Distinctive footer row pairing large crimson index numbers, title, metadata category, and directional hover arrow (`⟶`).
3. **Timeline & Process Steps**:
   - Vertical ordered pipeline linked by continuous crimson lines and numbered or icon circles.
4. **Primary CTAs**:
   - Pill-shaped solid crimson buttons with hover scale and brightness lift.
   - Hairline-outlined dark glass pill buttons for secondary interactions.
5. **Editorial Quote & Accentuation**:
   - Deep crimson gradient spotlight card with large quotation marks and stylized signature.
   - Four-point star glyph (`✦`) in bright crimson for editorial bullet punctuation.
