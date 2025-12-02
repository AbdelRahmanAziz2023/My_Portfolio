# 🎨 Portfolio Color Palette & Design Guide

## Dark Theme Color System

### Primary Colors
```
Dark Background (Main):    #0f172a
  └─ Used for: Body background, main sections

Dark Card (Surfaces):      #1e293b
  └─ Used for: Cards, sections, overlays

Dark Border (Dividers):    #334155
  └─ Used for: Borders, dividers, subtle lines
```

### Text Colors
```
Text Primary (Light):      #e2e8f0
  └─ Used for: Main text, headings

Text Muted (Gray):         #94a3b8
  └─ Used for: Secondary text, descriptions, captions
```

### Accent Colors (Highlight & Interaction)
```
Accent Primary (Cyan):     #0ea5e9
  └─ Used for: Primary buttons, links, highlights

Accent Secondary (Purple): #8b5cf6
  └─ Used for: Secondary buttons, hover states

Accent Tertiary (Pink):    #ec4899
  └─ Used for: Gradients, special highlights
```

## Visual Component Guide

### Header Component
```
┌─────────────────────────────────────────────┐
│ [A] Your Name    [Home] [About] [Projects]  │ ← Dark Background
│                               [Download CV] │ ← Button Primary
└─────────────────────────────────────────────┘
   Color: Dark BG with Primary Accent for CTA
```

### Hero Section
```
┌──────────────────────────────────────────────┐
│  Hi, I'm [Abdelrahman Aziz]  ← Gradient Text│
│         (Primary + Secondary + Tertiary)     │
│                                              │
│  [View My Work]  [Get In Touch]              │ ← Buttons
│   (Primary)        (Outline)                 │
│                                              │
│  5+ Years │ 30+ Projects │ 20+ Clients      │ ← Stats
└──────────────────────────────────────────────┘
   Colors: Dark BG, Gradient text, Accent buttons
```

### Card Component
```
┌─────────────────────────────────────┐
│  Card Title                          │ ← Dark Card BG
│  ─────────────────────────────────   │ ← Dark Border
│                                      │
│  Card content here...                │ ← Text (muted)
│                                      │
│  [Technology Tags]                   │ ← Accent badges
└─────────────────────────────────────┘
   Hover: Border changes to Accent Primary + subtle shadow
```

### Button Variants

#### Primary Button
```
┌──────────────────┐
│ Primary Button   │ ← Accent Primary background
└──────────────────┘
  Text: Dark BG
  Hover: Darker accent primary
```

#### Secondary Button
```
┌──────────────────┐
│ Secondary Button │ ← Accent Secondary background
└──────────────────┘
  Text: White
  Hover: Darker accent secondary
```

#### Outline Button
```
┌──────────────────┐
│ Outline Button   │ ← Border: Accent Primary
└──────────────────┘
  Text: Accent Primary
  Hover: Fill with Accent Primary
```

### Skill Badges
```
[React]  [TypeScript]  [Node.js]  [PostgreSQL]
  └─────────────────────────────────────────┘
  Background: Accent Primary with 10% opacity
  Border: Accent Primary with 30% opacity
  Text: Accent Primary
```

### Project Card (Featured)
```
┌─────────────────────────────────────┐
│  ┌───────────────────────────────┐  │
│  │  📱 Project Placeholder Image │  │ ← Gradient BG
│  └───────────────────────────────┘  │ ← Hover: Scale up
│                                      │
│  E-Commerce Platform                 │ ← Title
│  Full-stack solution...              │ ← Description
│                                      │
│  [React] [Node.js] [PostgreSQL]     │ ← Tech badges
│                                      │
│  [Live Demo]  [GitHub]               │ ← Buttons
└─────────────────────────────────────┘
   Card: Dark Card BG, Dark Border
   Hover: Border becomes Primary Accent
```

## Typography System

### Headings
```
Page Title (H1)     → 5xl font, Gradient text, bold
Section Title (H2)  → 3xl-4xl font, Gradient text, bold  
Card Title (H3)     → xl-2xl font, Light text, bold
Subtitle (H4)       → lg font, Muted text, medium
```

### Body Text
```
Regular Text        → base font, Light text, normal
Secondary Text      → sm font, Muted text, normal
Caption Text        → xs font, Muted text, normal
```

## Spacing System

All spacing uses Tailwind's spacing scale:
```
Extra Small  → 4px (gap-1, p-1)
Small        → 8px (gap-2, p-2)
Medium       → 16px (gap-4, p-4)
Large        → 24px (gap-6, p-6)
Extra Large  → 32px (gap-8, p-8)

Section Padding  → py-16 sm:py-20 lg:py-24
Container Margin → max-w-7xl with responsive px
```

## Interactive Elements

### Buttons
```
Default State:
  Appearance: Full background with text color
  Opacity: 100%

Hover State:
  Background: Slightly darker shade
  Shadow: Subtle glow (accent-primary/20)
  Transition: 200ms

Active State:
  Scale: 95%
  Opacity: 95%
```

### Cards
```
Default State:
  Border: Dark border (334155)
  Shadow: None

Hover State:
  Border: Accent Primary (0ea5e9)
  Shadow: accent-primary/20 with 8px blur
  Scale: No change
  Transition: 300ms
```

### Links
```
Default State:
  Color: Accent Primary (0ea5e9)
  Underline: None

Hover State:
  Color: Accent Secondary (8b5cf6)
  Underline: None
  Transition: 200ms
```

## Responsive Design

### Mobile First Approach
```
Base (Mobile)      → Full width, single column
sm: 640px          → Small adjustments
md: 768px          → 2-column layout
lg: 1024px         → Full multi-column layout

Header:
  Mobile: Hamburger menu, stacked nav
  Desktop: Full horizontal nav

Grid Layouts:
  Mobile: 1 column
  md:    2 columns
  lg:    3 columns
```

## Animation & Transitions

### Global Transitions
```
All elements: transition-colors duration-200
  └─ Smooth color changes on hover/state change
```

### Component Specific
```
Cards:        transition-all duration-300 (border, shadow, etc.)
Buttons:      transition-all duration-200 (color, shadow)
Links:        transition-colors duration-200
Gradients:    No transition (instant)
```

## Accessible Color Contrast

### Text on Dark Backgrounds
```
Light Text (#e2e8f0)     on Dark BG (#0f172a)     → WCAG AAA ✓
Muted Text (#94a3b8)     on Dark BG (#0f172a)     → WCAG AA ✓
Accent Primary (#0ea5e9) on Dark BG (#0f172a)     → WCAG AAA ✓
Accent Primary (#0ea5e9) on Dark Card (#1e293b)   → WCAG AA ✓
```

## Component Color Quick Reference

| Component | Background | Border | Text | Accent |
|-----------|-----------|--------|------|--------|
| Header | Dark BG | Dark Border | Light Text | Primary |
| Card | Dark Card | Dark Border (hover: Primary) | Light Text | Primary |
| Button Primary | Primary | N/A | Dark BG | N/A |
| Button Secondary | Secondary | N/A | White | N/A |
| Button Outline | Transparent | Primary | Primary | Primary |
| Badge | Primary 10% | Primary 30% | Primary | N/A |
| Link | N/A | None | Primary | Secondary on hover |
| Input | Dark BG | Dark Border (focus: Primary) | Light | Primary |

## Using Colors in Components

### In Tailwind Classes
```typescript
// Background colors
className="bg-dark-bg"
className="bg-dark-card"
className="bg-accent-primary"

// Text colors
className="text-dark-text"
className="text-dark-text-muted"
className="text-accent-primary"

// Border colors
className="border-dark-border"
className="border-accent-primary"

// Gradient
className="bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary"
```

---

**All colors are defined in `tailwind.config.js` for easy customization!**
