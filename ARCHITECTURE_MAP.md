# PPI Aachen Website Architecture Map
## Technical Analysis for Cloning

**Source:** https://ppiaachen.de  
**Platform:** Google Sites (Atari Framework)  
**Analysis Date:** 2025-01-15

---

## 1. NAVIGATION ARCHITECTURE

### Structure
```
Primary Navigation:
├── Home
├── Lapor Diri (Registration)
├── Events
├── Communities
├── Merchandise
└── Organization
    ├── Sejarah (History)
    ├── Kepengurusan (Management)
    ├── AD/ART PPI Aachen
    └── [Additional sub-pages]
```

### Technical Implementation
- **Navigation Type:** Side Navigation (Left sidebar)
- **Pattern:** Hierarchical menu with collapsible sections
- **CSS Classes:**
  - `.JzO0Vc` - Side navigation container (250px width, dark background)
  - `.hDrhEe` - Navigation item
  - `.TlfmSc` - Navigation text (15pt, Lato font)
  - `.PsKE7e` - Sub-navigation text (12pt)
  - `.zDUgLc` - Navigation divider/separator

### Responsive Behavior
- Desktop (≥1280px): Fixed left sidebar (250px)
- Tablet (480-767px): Collapsible/hamburger menu
- Mobile (<480px): Overlay menu

### State Management
- Uses `jscontroller` attributes for component control
- Navigation state managed via `jsmodel` and `jsaction` attributes
- Active state: `.duRjpb` class for active navigation items

---

## 2. COMPONENT ARCHITECTURE

### Core Component System
**Framework:** Google's Atari/Wiz Framework (Internal)

### Component Hierarchy
```
App Root
├── Header/Banner (role="banner")
│   ├── Site Title
│   ├── Search Component
│   └── Navigation Toggle
├── Side Navigation
│   ├── Navigation Items
│   └── Sub-navigation Groups
├── Main Content Area
│   ├── Hero Section (.O13XJf)
│   ├── Content Sections
│   └── Footer
└── Embedded Components
    ├── Google Calendar
    ├── Forms
    └── Media Embeds
```

### Key Components

#### 1. Header Component
- **Class:** `.O13XJf` (Hero header)
- **Height:** 340px (desktop), 280px (tablet), 250px (mobile)
- **Background:** Blue gradient with overlay (`rgba(0,97,191,1)`)
- **Features:**
  - Background image support
  - Overlay opacity control
  - Responsive typography

#### 2. Navigation Component
- **Controller:** `jscontroller="RrXLpc"`
- **Model:** `jsmodel="fNFZH"`
- **Actions:** `jsaction` handlers for:
  - Keyboard navigation
  - Click events
  - Focus management
  - Search integration

#### 3. Content Sections
- **Grid System:** CSS Grid-based layout
- **Section IDs:** `h.INITIAL_GRID.b5jtso9qucv8`
- **Responsive Breakpoints:**
  - Mobile: < 480px
  - Tablet: 480px - 767px
  - Desktop: ≥ 1280px

#### 4. Button Components
- **Primary:** `.QmpIrf` (Blue background, white text)
- **Secondary:** `.xkUom` (Outlined, blue border)
- **Text Link:** `.KjwKmc` (Blue text, hover effect)
- **States:** Hover, Focus, Active, Visited

---

## 3. ROUTING ARCHITECTURE

### Routing Pattern
**Type:** Client-side routing with URL-based navigation

### Route Structure
```
/ (Home)
├── /site/home
├── /lapor-diri
├── /events
├── /communities
├── /merchandise
└── /organization/*
```

### Technical Implementation
- **Router:** Google Sites internal routing
- **URL Normalization:** `normalizedPath: "ppiaachen.de/site/home"`
- **Page Title Management:** `pageTitle: "Home"`
- **Navigation:** Uses `jsaction` handlers for route changes
- **No Full Page Reload:** SPA-like behavior

### Route Configuration
```javascript
// Inferred from globals
window.globals = {
  normalizedPath: "ppiaachen.de/site/home",
  pageTitle: "Home",
  hashedSiteId: "71dbae90c3d3a63368269c1917e2abd75d7b45ad23ed65c8092ce0ac3a74b2ea"
}
```

### Dynamic Routing
- Supports nested routes
- Query parameter handling
- Hash-based navigation for anchors

---

## 4. STATE MANAGEMENT

### State Architecture
**Pattern:** Component-level state with global configuration

### Global State
```javascript
// Global Configuration
window.globals = {
  enableAnalytics: true,
  webPropertyId: "G-9TVTNYNRW1",
  hashedSiteId: "...",
  normalizedPath: "...",
  pageTitle: "..."
}

// Feature Flags
_docs_flag_initialData = {
  atari-emtpr: false,
  docs-text-usc: true,
  // ... many feature flags
}
```

### Component State
- **Controllers:** `jscontroller` attributes define component scope
- **Models:** `jsmodel` attributes for data binding
- **Actions:** `jsaction` for event handling and state updates

### State Management Pattern
1. **Local State:** Component-specific state via controllers
2. **Shared State:** Global configuration objects
3. **Server State:** Fetched via Google APIs (`gapiLoaded`)

### Data Flow
```
User Action → jsaction handler → Controller → Model Update → View Re-render
```

---

## 5. STYLING ARCHITECTURE

### CSS Architecture
**Approach:** Inline styles + External stylesheet + Component-scoped styles

### Typography System
**Primary Font:** Lato (Google Fonts)
- Weights: 300, 300italic, 400, 400italic, 700, 700italic
- Fallback: sans-serif

**Secondary Fonts:**
- Google Sans: 400, 500
- Roboto: 300, 400, 500, 700
- Source Code Pro: 400, 700

### Color Palette
```css
/* Primary Colors */
Primary Blue: rgba(0,97,191,1)      /* #0061BF */
Dark Blue: rgba(0,78,153,1)          /* #004E99 */
Light Blue: rgba(52,130,204,1)       /* #3482CC */

/* Neutral Colors */
Dark Gray: rgba(33,33,33,1)          /* #212121 */
Light Gray: rgba(237,237,237,1)      /* #EDEDED */
White: rgba(255,255,255,1)           /* #FFFFFF */

/* Text Colors */
Primary Text: rgba(33,33,33,1)
Secondary Text: rgba(0,0,0,0.8)
Muted Text: rgba(0,0,0,0.64)
```

### Typography Scale
```css
/* Headings */
H1 (.duRjpb): 34pt (desktop), 29pt (tablet), 24pt (mobile)
H2 (.JYVBee): 19pt (desktop), 17pt (tablet), 15pt (mobile)
H3 (.OmQG5e): 15pt (desktop), 14pt (tablet), 13pt (mobile)

/* Body Text */
Body (.zfr3Q): 11pt
Navigation (.TlfmSc): 15pt
Sub-navigation (.PsKE7e): 12pt
Small (.TMjjoe): 9pt
```

### Layout System
**Container Widths:**
- Side Navigation: 250px (fixed)
- Main Content: `calc(100% - 250px)` on desktop
- Max Content Width: Not explicitly set (fluid)

**Spacing System:**
- Padding increments: 20px, 40px, 60px, 80px, 100px, 120px, 140px, 160px, 180px, 200px
- Margin system: 12px, 16px, 20px, 24px, 30px

### Responsive Breakpoints
```css
/* Mobile */
@media only screen and (max-width: 479px) { ... }

/* Tablet */
@media only screen and (min-width: 480px) and (max-width: 767px) { ... }

/* Desktop */
@media only screen and (min-width: 1280px) { ... }
```

### Component Styles
- **Scoped Styles:** Inline `<style>` blocks with `jsname` attributes
- **Theme Variants:** `.qeLZfd`, `.lQAHbd`, `.cJgDec`, `.tpmmCb`
- **State Classes:** `.chg4Jd` (focus), hover states, active states

### CSS Organization
1. **Base Styles:** Typography, colors, reset
2. **Component Styles:** Scoped to specific components
3. **Layout Styles:** Grid, flexbox, positioning
4. **Theme Styles:** Color variants, dark mode support
5. **Responsive Styles:** Media queries

---

## 6. INTERACTIONS & ANIMATIONS

### Interaction Patterns

#### 1. Navigation Interactions
- **Hover Effects:** Color transitions on navigation items
- **Focus States:** `.chg4Jd` class for keyboard navigation
- **Active States:** Visual feedback on click
- **Accordion:** Expandable sub-navigation sections

#### 2. Button Interactions
```css
/* Hover */
.xkUom:hover { background-color: rgba(0,97,191,0.1); }

/* Focus */
.chg4Jd:focus:before { border-color: rgba(255,255,255,0.36); }

/* Active */
.dhtgD:active { color: rgba(0,97,191,1); }
```

#### 3. Page Transitions
- **Type:** Native-like animations (CSS transitions)
- **Implementation:** Transition groups for route changes
- **Performance:** Hardware-accelerated transforms

#### 4. Search Interactions
- **Embedded Search:** `data-is-embedded-search-enabled="true"`
- **Scope:** Site-wide search
- **Results:** Inline display with highlighting

### Animation Patterns
1. **Fade Transitions:** Opacity changes for overlays
2. **Slide Transitions:** Navigation drawer animations
3. **Color Transitions:** Hover and focus states
4. **Scale Transitions:** Button press effects

### Event Handling
**Pattern:** Declarative event handling via `jsaction`
```html
<div jsaction="rcuQ6b:WYd;zuqEgd:ufqpf;JIbuQc:XfTnxb">
```

**Event Types:**
- `rcuQ6b:WYd` - Click events
- `keydown:uiKYid` - Keyboard events
- `zuqEgd` - Focus events
- `JIbuQc` - Custom component events

---

## 7. TECHNICAL STACK

### Core Technologies
- **Framework:** Google Atari/Wiz Framework (Internal)
- **JavaScript:** ES6+ with polyfills
- **CSS:** Custom framework with component-scoped styles
- **Fonts:** Google Fonts (Lato, Google Sans, Roboto)

### External Dependencies
- **Google APIs:** `apis.google.com/js/client.js`
- **Analytics:** Google Tag Manager (`gtag`)
- **Fonts:** `fonts.googleapis.com`
- **CDN:** `gstatic.com` for assets

### Build System
- **Minification:** JavaScript and CSS minified
- **Bundling:** Single-page application bundle
- **Versioning:** Build labels in config (`editors.sites-viewer-frontend_20251215.02_p0`)

### Security
- **CSP:** Content Security Policy with nonces
- **XSS Protection:** Safe value handling
- **CORS:** Configured for Google domains

---

## 8. CLONING RECOMMENDATIONS

### Recommended Tech Stack for Clone

#### Frontend Framework
- **React** or **Next.js** (for SSR/SSG)
- **Vue.js** (alternative)
- **TypeScript** (for type safety)

#### Routing
- **React Router** (if using React)
- **Next.js Router** (if using Next.js)
- **Vue Router** (if using Vue)

#### State Management
- **Zustand** or **Jotai** (lightweight)
- **Redux Toolkit** (if complex state needed)
- **Context API** (for simple global state)

#### Styling
- **Tailwind CSS** (utility-first, matches responsive approach)
- **CSS Modules** (component-scoped styles)
- **Styled Components** (if using React)

#### Component Library
- Build custom components matching the design system
- Consider **Headless UI** or **Radix UI** for accessible primitives

### Project Structure
```
src/
├── components/
│   ├── Navigation/
│   │   ├── SideNav.tsx
│   │   ├── NavItem.tsx
│   │   └── NavGroup.tsx
│   ├── Header/
│   │   └── HeroHeader.tsx
│   ├── Content/
│   │   └── ContentSection.tsx
│   └── Button/
│       └── Button.tsx
├── pages/
│   ├── Home.tsx
│   ├── Events.tsx
│   ├── Communities.tsx
│   └── Organization/
│       └── index.tsx
├── styles/
│   ├── globals.css
│   ├── typography.css
│   └── colors.css
├── hooks/
│   ├── useNavigation.ts
│   └── useResponsive.ts
├── utils/
│   └── constants.ts
└── types/
    └── index.ts
```

### Key Implementation Notes

1. **Navigation:**
   - Implement collapsible sidebar
   - Support keyboard navigation
   - Maintain active state based on route

2. **Responsive Design:**
   - Mobile-first approach
   - Breakpoints: 480px, 768px, 1280px
   - Hamburger menu for mobile

3. **Typography:**
   - Use Lato font family
   - Implement responsive font sizes
   - Maintain line-height ratios

4. **Color System:**
   - Create CSS variables for colors
   - Support theme variants
   - Implement dark mode if needed

5. **Interactions:**
   - Smooth transitions (200-300ms)
   - Focus-visible states for accessibility
   - Hover effects on interactive elements

6. **Performance:**
   - Lazy load images
   - Code splitting for routes
   - Optimize font loading

---

## 9. ADDITIONAL OBSERVATIONS

### SEO Considerations
- Meta tags present (og:title, og:description, og:image)
- Schema.org markup
- Semantic HTML structure

### Accessibility
- ARIA roles (`role="banner"`)
- Keyboard navigation support
- Focus management
- Screen reader considerations

### Analytics
- Google Analytics 4 (G-9TVTNYNRW1)
- Event tracking configured
- Page view tracking

### Content Management
- Google Sites backend (not accessible for cloning)
- Consider headless CMS (Contentful, Strapi, Sanity)
- Or static content with MDX

---

## 10. SUMMARY

### Core Architecture Patterns
1. **Component-Based:** Modular, reusable components
2. **Declarative:** Event handling via attributes
3. **Responsive:** Mobile-first, breakpoint-based
4. **Themeable:** Color and style variants
5. **Accessible:** ARIA support, keyboard navigation

### Key Technical Decisions for Clone
- Use modern React/Vue framework
- Implement component library matching design system
- Use utility-first CSS (Tailwind) or CSS Modules
- Implement client-side routing
- Use lightweight state management
- Optimize for performance and accessibility

### Priority Features
1. ✅ Navigation system (sidebar + mobile menu)
2. ✅ Responsive layout
3. ✅ Typography system
4. ✅ Color palette
5. ✅ Button components
6. ✅ Page routing
7. ✅ Interactive states (hover, focus, active)

---

**Note:** This architecture map is based on static HTML analysis. For dynamic features, additional analysis of JavaScript behavior would be needed through browser inspection tools.

