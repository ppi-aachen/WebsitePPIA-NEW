# Component Reference Guide
## PPI Aachen Website Components

This document provides detailed component specifications for cloning the website.

---

## Navigation Components

### SideNavigation
**Purpose:** Main site navigation sidebar

**Props/Configuration:**
```typescript
interface SideNavigationProps {
  items: NavItem[];
  isOpen: boolean;
  onToggle: () => void;
  activePath: string;
}
```

**Structure:**
```tsx
<nav className="JzO0Vc" role="navigation">
  <NavGroup title="Main" items={mainItems} />
  <NavGroup title="Organization" items={orgItems} />
</nav>
```

**Styling:**
- Width: 250px (desktop)
- Background: `rgba(33,33,33,1)` (dark gray)
- Font: Lato, 15pt
- Padding: 48.5px top (desktop)

**States:**
- Default: Visible on desktop, hidden on mobile
- Mobile: Overlay/drawer pattern
- Active item: Blue color `rgba(0,97,191,1)`

---

### NavItem
**Purpose:** Individual navigation link

**Props:**
```typescript
interface NavItemProps {
  label: string;
  href: string;
  isActive: boolean;
  children?: NavItem[]; // For nested items
  level?: number; // Indentation level
}
```

**Styling:**
- Font: Lato, 15pt (main), 12pt (sub)
- Padding: 11.5px vertical
- Hover: Color change to white/blue
- Active: Blue color `rgba(0,97,191,1)`

**Indentation Levels:**
- Level 0: 0px
- Level 1: 20px
- Level 2: 40px
- Level 3: 60px
- (Continues in 20px increments)

---

## Header Components

### HeroHeader
**Purpose:** Main page hero section

**Props:**
```typescript
interface HeroHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  height?: 'small' | 'medium' | 'large';
}
```

**Variants:**
- `.O13XJf` - Standard hero (340px height)
- `.gk8rDe` - Compact hero (180px height)
- `.SBrW1` - Large hero (520px height)

**Styling:**
- Background: Blue `rgba(0,97,191,1)` with optional image
- Overlay: Dark overlay with 0.4 opacity
- Text: White, Lato font
- Padding: 60px top/bottom (desktop)

**Responsive:**
- Desktop: 340px height
- Tablet: 280px height
- Mobile: 250px height

---

## Button Components

### Button (Primary)
**Class:** `.QmpIrf`

**Props:**
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'text';
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}
```

**Primary Button:**
- Background: `rgba(0,97,191,1)` (blue)
- Text: White
- Border: White, 1px
- Font: Lato, 11pt
- Hover: Slight opacity change

**Secondary Button:**
- Background: Transparent
- Border: Blue, 1px
- Text: Blue
- Hover: Light blue background `rgba(0,97,191,0.1)`

**Text Button:**
- Background: Transparent
- Text: Blue
- Hover: Light blue background

---

## Typography Components

### Heading1
**Class:** `.duRjpb`

**Styles:**
- Font: Lato, 300 weight
- Size: 34pt (desktop), 29pt (tablet), 24pt (mobile)
- Color: Blue `rgba(0,97,191,1)`
- Line-height: 1.2
- Letter-spacing: 0.5px
- Margin-top: 30px

### Heading2
**Class:** `.JYVBee`

**Styles:**
- Font: Lato, 400 weight
- Size: 19pt (desktop), 17pt (tablet), 15pt (mobile)
- Color: Blue `rgba(0,97,191,1)`
- Line-height: 1.4
- Margin-top: 20px

### Heading3
**Class:** `.OmQG5e`

**Styles:**
- Font: Lato, 400 weight
- Size: 15pt (desktop), 14pt (tablet), 13pt (mobile)
- Color: Dark gray `rgba(33,33,33,1)`
- Line-height: 1.25
- Margin-top: 16px

### Body Text
**Class:** `.zfr3Q`

**Styles:**
- Font: Lato, 400 weight
- Size: 11pt
- Color: Dark gray `rgba(33,33,33,1)`
- Line-height: 1.6667
- Margin-top: 12px

---

## Layout Components

### Container
**Purpose:** Main content wrapper

**Structure:**
```tsx
<div className="container">
  <div className="content-wrapper">
    {children}
  </div>
</div>
```

**Styling:**
- Max-width: Not set (fluid)
- Margin-left: 250px on desktop (to account for sidebar)
- Padding: Responsive padding

### Grid
**Purpose:** Content grid layout

**Class:** `h.INITIAL_GRID.b5jtso9qucv8`

**Structure:**
- CSS Grid-based
- Responsive columns
- Gap: Based on padding system

---

## Form Components

### Input
**Purpose:** Text input fields

**Styling:**
- Border: 1px solid
- Focus: Blue border `rgba(0,97,191,1)`
- Font: Lato, 11pt
- Padding: Standard form padding

### Search
**Purpose:** Site search component

**Features:**
- Embedded search enabled
- Scope: Site-wide
- Results: Inline display

---

## Theme Variants

### Light Theme (Default)
**Class:** `.qeLZfd`

- Background: White
- Text: Dark gray
- Accent: Blue

### Dark Theme
**Class:** `.lQAHbd`

- Background: Dark `rgba(33,33,33,1)`
- Text: White
- Accent: Light blue

### Hero Theme
**Class:** `.cJgDec`

- Background: Blue with overlay
- Text: White
- Used in hero sections

### Content Theme
**Class:** `.tpmmCb`

- Background: White
- Text: Dark gray
- Used in content sections

---

## Interactive States

### Hover
```css
.element:hover {
  /* Color transition */
  color: rgba(0,97,191,1);
  /* Background transition */
  background-color: rgba(0,97,191,0.1);
}
```

### Focus
```css
.element:focus {
  outline: 2px solid rgba(0,97,191,1);
  outline-offset: 2px;
}
```

**Class:** `.chg4Jd` (focus state class)

### Active
```css
.element:active {
  transform: scale(0.98);
}
```

### Visited
```css
a:visited {
  color: rgba(0,78,153,1); /* Darker blue */
}
```

---

## Responsive Utilities

### Mobile (< 480px)
- Smaller font sizes
- Reduced padding
- Stacked layouts
- Hamburger menu

### Tablet (480px - 767px)
- Medium font sizes
- Moderate padding
- 2-column layouts
- Collapsible sidebar

### Desktop (≥ 1280px)
- Full font sizes
- Full padding
- Multi-column layouts
- Fixed sidebar

---

## Component Composition Examples

### Page Layout
```tsx
<Layout>
  <SideNavigation items={navItems} />
  <MainContent>
    <HeroHeader 
      title="Welcome"
      subtitle="PPI Aachen"
    />
    <ContentSection>
      {pageContent}
    </ContentSection>
  </MainContent>
</Layout>
```

### Navigation Group
```tsx
<NavGroup title="Organization">
  <NavItem href="/sejarah" label="Sejarah" />
  <NavItem href="/kepengurusan" label="Kepengurusan" />
  <NavItem href="/ad-art" label="AD/ART PPI Aachen" />
</NavGroup>
```

### Button Group
```tsx
<ButtonGroup>
  <Button variant="primary">Primary Action</Button>
  <Button variant="secondary">Secondary Action</Button>
  <Button variant="text">Text Link</Button>
</ButtonGroup>
```

---

## Accessibility Features

### ARIA Attributes
- `role="navigation"` on nav elements
- `role="banner"` on header
- `aria-label` for icon buttons
- `aria-expanded` for collapsible sections

### Keyboard Navigation
- Tab order: Logical flow
- Enter/Space: Activate buttons/links
- Arrow keys: Navigate menus
- Escape: Close modals/menus

### Focus Management
- Visible focus indicators
- Focus trap in modals
- Focus return after modal close

---

## Performance Considerations

### Image Optimization
- Lazy loading for below-fold images
- Responsive images (srcset)
- WebP format where supported

### Code Splitting
- Route-based code splitting
- Component lazy loading
- Dynamic imports for heavy components

### Font Loading
- Font-display: swap
- Preload critical fonts
- Subset fonts if possible

---

## Testing Checklist

### Component Tests
- [ ] Rendering with props
- [ ] State changes
- [ ] Event handlers
- [ ] Accessibility attributes
- [ ] Responsive behavior

### Integration Tests
- [ ] Navigation flow
- [ ] Route changes
- [ ] Form submissions
- [ ] Search functionality

### Visual Tests
- [ ] Cross-browser compatibility
- [ ] Responsive breakpoints
- [ ] Dark mode (if implemented)
- [ ] Print styles

