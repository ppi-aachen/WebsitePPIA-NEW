# Styling Guide
## PPI Aachen Website Design System

Complete styling reference for cloning the website's visual design.

---

## Color System

### Primary Colors
```css
:root {
  /* Primary Blue */
  --color-primary: #0061BF;        /* rgba(0,97,191,1) */
  --color-primary-dark: #004E99;   /* rgba(0,78,153,1) */
  --color-primary-light: #3482CC;  /* rgba(52,130,204,1) */
  
  /* Neutrals */
  --color-dark: #212121;           /* rgba(33,33,33,1) */
  --color-light-gray: #EDEDED;     /* rgba(237,237,237,1) */
  --color-white: #FFFFFF;          /* rgba(255,255,255,1) */
  
  /* Text Colors */
  --color-text-primary: #212121;   /* rgba(33,33,33,1) */
  --color-text-secondary: rgba(0,0,0,0.8);
  --color-text-muted: rgba(0,0,0,0.64);
  --color-text-white: #FFFFFF;
  
  /* Interactive Colors */
  --color-link: #0061BF;
  --color-link-hover: #0061BF;
  --color-link-visited: #004E99;
  --color-link-active: #0061BF;
  
  /* Background Colors */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #EDEDED;
  --color-bg-dark: #212121;
  --color-bg-hero: #0061BF;
}
```

### Usage Examples
```css
/* Primary button */
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-white);
}

/* Link */
a {
  color: var(--color-link);
}

a:hover {
  color: var(--color-link-hover);
}

a:visited {
  color: var(--color-link-visited);
}
```

---

## Typography

### Font Families
```css
:root {
  --font-primary: 'Lato', sans-serif;
  --font-secondary: 'Google Sans', sans-serif;
  --font-mono: 'Source Code Pro', monospace;
}
```

### Font Loading
```html
<link href="https://fonts.googleapis.com/css?family=Lato%3A300%2C300italic%2C400%2C400italic%2C700%2C700italic&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Google+Sans:400,500|Roboto:300,400,500,700|Source+Code+Pro:400,700&display=swap" rel="stylesheet">
```

### Type Scale
```css
/* Heading 1 */
h1, .heading-1 {
  font-family: var(--font-primary);
  font-size: 34pt;        /* Desktop */
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: 0.5px;
  color: var(--color-primary);
  margin-top: 30px;
}

@media (max-width: 767px) {
  h1, .heading-1 {
    font-size: 29pt;       /* Tablet */
  }
}

@media (max-width: 479px) {
  h1, .heading-1 {
    font-size: 24pt;       /* Mobile */
  }
}

/* Heading 2 */
h2, .heading-2 {
  font-family: var(--font-primary);
  font-size: 19pt;         /* Desktop */
  font-weight: 400;
  line-height: 1.4;
  color: var(--color-primary);
  margin-top: 20px;
}

@media (max-width: 767px) {
  h2, .heading-2 {
    font-size: 17pt;       /* Tablet */
  }
}

@media (max-width: 479px) {
  h2, .heading-2 {
    font-size: 15pt;       /* Mobile */
  }
}

/* Heading 3 */
h3, .heading-3 {
  font-family: var(--font-primary);
  font-size: 15pt;         /* Desktop */
  font-weight: 400;
  line-height: 1.25;
  color: var(--color-dark);
  margin-top: 16px;
}

@media (max-width: 767px) {
  h3, .heading-3 {
    font-size: 14pt;       /* Tablet */
  }
}

@media (max-width: 479px) {
  h3, .heading-3 {
    font-size: 13pt;       /* Mobile */
  }
}

/* Body Text */
p, .body-text {
  font-family: var(--font-primary);
  font-size: 11pt;
  font-weight: 400;
  line-height: 1.6667;
  color: var(--color-text-primary);
  margin-top: 12px;
}

/* Navigation Text */
.nav-text {
  font-family: var(--font-primary);
  font-size: 15pt;
  font-weight: 300;
  line-height: 1.333;
}

@media (max-width: 767px) {
  .nav-text {
    font-size: 14pt;
  }
}

@media (max-width: 479px) {
  .nav-text {
    font-size: 13pt;
  }
}

/* Small Text */
.small-text {
  font-family: var(--font-primary);
  font-size: 9pt;
  line-height: 1.2;
  margin-top: 0;
}
```

---

## Spacing System

### Padding Scale
```css
:root {
  --spacing-xs: 8px;
  --spacing-sm: 12px;
  --spacing-md: 20px;
  --spacing-lg: 24px;
  --spacing-xl: 30px;
  --spacing-2xl: 40px;
  --spacing-3xl: 48px;
  --spacing-4xl: 60px;
  --spacing-5xl: 80px;
  --spacing-6xl: 100px;
  --spacing-7xl: 120px;
  --spacing-8xl: 140px;
  --spacing-9xl: 160px;
  --spacing-10xl: 180px;
  --spacing-11xl: 200px;
}
```

### Margin Scale
```css
:root {
  --margin-xs: 12px;
  --margin-sm: 16px;
  --margin-md: 20px;
  --margin-lg: 24px;
  --margin-xl: 30px;
  --margin-2xl: 40px;
}
```

### Usage
```css
.container {
  padding: var(--spacing-3xl) var(--spacing-md);
}

.section {
  margin-top: var(--margin-xl);
  margin-bottom: var(--margin-xl);
}
```

---

## Layout System

### Container
```css
.container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding-left: var(--spacing-md);
  padding-right: var(--spacing-md);
}

@media (min-width: 1280px) {
  .container {
    margin-left: 250px; /* Account for sidebar */
  }
}
```

### Grid System
```css
.grid {
  display: grid;
  gap: var(--spacing-lg);
}

.grid-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 767px) {
  .grid-2,
  .grid-3 {
    grid-template-columns: 1fr;
  }
}
```

### Sidebar Layout
```css
.layout-with-sidebar {
  display: flex;
}

.sidebar {
  width: 250px;
  flex-shrink: 0;
  background-color: var(--color-bg-dark);
}

.main-content {
  flex: 1;
  min-width: 0;
}

@media (max-width: 1279px) {
  .sidebar {
    position: fixed;
    left: -250px;
    transition: left 0.3s ease;
    z-index: 1000;
  }
  
  .sidebar.open {
    left: 0;
  }
}
```

---

## Component Styles

### Buttons
```css
/* Primary Button */
.btn-primary {
  background-color: var(--color-primary);
  border: 1px solid var(--color-white);
  color: var(--color-white);
  font-family: var(--font-primary);
  font-size: 11pt;
  line-height: normal;
  padding: var(--spacing-sm) var(--spacing-md);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  opacity: 0.9;
}

.btn-primary:active {
  transform: scale(0.98);
}

.btn-primary:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Secondary Button */
.btn-secondary {
  background-color: transparent;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  font-family: var(--font-primary);
  font-size: 11pt;
  line-height: normal;
  padding: var(--spacing-sm) var(--spacing-md);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background-color: rgba(0, 97, 191, 0.1);
}

/* Text Button */
.btn-text {
  background-color: transparent;
  border: none;
  color: var(--color-primary);
  font-family: var(--font-primary);
  font-size: 11pt;
  line-height: normal;
  padding: var(--spacing-sm) var(--spacing-md);
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: underline;
}

.btn-text:hover {
  background-color: rgba(0, 97, 191, 0.1);
}
```

### Navigation
```css
/* Side Navigation */
.side-nav {
  width: 250px;
  background-color: var(--color-bg-dark);
  font-family: var(--font-primary);
  padding-top: 48.5px;
}

@media (min-width: 1280px) {
  .side-nav {
    padding-top: 48.5px;
  }
}

/* Navigation Item */
.nav-item {
  padding: 11.5px 0;
  color: var(--color-text-white);
  font-size: 15pt;
  font-weight: 300;
  line-height: 1.333;
  cursor: pointer;
  transition: color 0.2s ease;
}

.nav-item:hover {
  color: var(--color-white);
}

.nav-item.active {
  color: var(--color-primary-light);
}

/* Navigation Group */
.nav-group {
  padding-left: 8px;
}

.nav-group-title {
  color: var(--color-text-white);
  opacity: 0.6;
  font-size: 12pt;
  font-weight: 300;
  padding: 11.5px 0;
}

/* Nested Navigation */
.nav-item-nested {
  padding-left: 20px; /* Level 1 */
}

.nav-item-nested.level-2 {
  padding-left: 40px; /* Level 2 */
}

.nav-item-nested.level-3 {
  padding-left: 60px; /* Level 3 */
}
```

### Hero Header
```css
.hero-header {
  height: 340px;
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: var(--color-bg-hero);
  background-image: url('path/to/image.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  color: var(--color-text-white);
}

.hero-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-dark);
  opacity: 0.4;
}

.hero-header-content {
  position: relative;
  z-index: 1;
}

@media (max-width: 767px) {
  .hero-header {
    height: 280px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
}

@media (max-width: 479px) {
  .hero-header {
    height: 250px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
}
```

---

## Responsive Breakpoints

```css
/* Mobile First Approach */

/* Mobile */
@media (max-width: 479px) {
  /* Mobile styles */
}

/* Tablet */
@media (min-width: 480px) and (max-width: 767px) {
  /* Tablet styles */
}

/* Desktop */
@media (min-width: 1280px) {
  /* Desktop styles */
}
```

### Breakpoint Variables
```css
:root {
  --breakpoint-mobile: 479px;
  --breakpoint-tablet: 767px;
  --breakpoint-desktop: 1280px;
}
```

---

## Transitions & Animations

### Standard Transitions
```css
:root {
  --transition-fast: 0.15s ease;
  --transition-base: 0.2s ease;
  --transition-slow: 0.3s ease;
}
```

### Common Transitions
```css
/* Color transitions */
.transition-color {
  transition: color var(--transition-base);
}

/* Background transitions */
.transition-bg {
  transition: background-color var(--transition-base);
}

/* Transform transitions */
.transition-transform {
  transition: transform var(--transition-base);
}

/* All transitions */
.transition-all {
  transition: all var(--transition-base);
}
```

### Hover Effects
```css
.hover-lift {
  transition: transform var(--transition-base);
}

.hover-lift:hover {
  transform: translateY(-2px);
}

.hover-scale {
  transition: transform var(--transition-base);
}

.hover-scale:hover {
  transform: scale(1.05);
}
```

---

## Utility Classes

### Text Utilities
```css
.text-primary { color: var(--color-primary); }
.text-dark { color: var(--color-dark); }
.text-white { color: var(--color-white); }
.text-muted { color: var(--color-text-muted); }

.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-bold { font-weight: 700; }
```

### Spacing Utilities
```css
.p-0 { padding: 0; }
.p-sm { padding: var(--spacing-sm); }
.p-md { padding: var(--spacing-md); }
.p-lg { padding: var(--spacing-lg); }

.m-0 { margin: 0; }
.m-sm { margin: var(--margin-sm); }
.m-md { margin: var(--margin-md); }
.m-lg { margin: var(--margin-lg); }
```

### Display Utilities
```css
.hidden { display: none; }
.block { display: block; }
.flex { display: flex; }
.grid { display: grid; }

@media (max-width: 767px) {
  .hidden-mobile { display: none; }
}

@media (min-width: 768px) {
  .hidden-desktop { display: none; }
}
```

---

## Focus States

### Accessible Focus
```css
.focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Remove default outline, add custom */
*:focus {
  outline: none;
}

*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

---

## Print Styles

```css
@media print {
  .sidebar,
  .nav,
  .btn {
    display: none;
  }
  
  .main-content {
    margin-left: 0;
    width: 100%;
  }
  
  a {
    text-decoration: underline;
  }
  
  a[href]:after {
    content: " (" attr(href) ")";
  }
}
```

---

## Dark Mode Support (Optional)

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-primary: #1a1a1a;
    --color-text-primary: #ffffff;
    --color-text-secondary: rgba(255, 255, 255, 0.8);
  }
}

/* Or with class toggle */
.dark-mode {
  --color-bg-primary: #1a1a1a;
  --color-text-primary: #ffffff;
}
```

---

## CSS Variables Summary

```css
:root {
  /* Colors */
  --color-primary: #0061BF;
  --color-primary-dark: #004E99;
  --color-dark: #212121;
  --color-light-gray: #EDEDED;
  --color-white: #FFFFFF;
  
  /* Typography */
  --font-primary: 'Lato', sans-serif;
  --font-size-h1: 34pt;
  --font-size-h2: 19pt;
  --font-size-h3: 15pt;
  --font-size-body: 11pt;
  
  /* Spacing */
  --spacing-xs: 8px;
  --spacing-sm: 12px;
  --spacing-md: 20px;
  --spacing-lg: 24px;
  
  /* Transitions */
  --transition-base: 0.2s ease;
  
  /* Breakpoints */
  --breakpoint-mobile: 479px;
  --breakpoint-tablet: 767px;
  --breakpoint-desktop: 1280px;
}
```

---

## Implementation Tips

1. **Use CSS Variables:** Makes theming and updates easier
2. **Mobile First:** Start with mobile styles, enhance for larger screens
3. **Consistent Spacing:** Use the spacing scale for uniformity
4. **Accessible Focus:** Always provide visible focus states
5. **Smooth Transitions:** Add transitions for interactive elements
6. **Print Styles:** Consider print stylesheet for better printing

