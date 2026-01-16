# Styling Architecture Documentation

## Overview

This React application uses a **hybrid styling approach** combining multiple CSS methodologies. The primary styling system is **SCSS/SASS**, with **styled-components** used extensively for component-level styling. Bootstrap and DaisyUI are installed but appear to be minimally or not actively used.

---

## Styling Technologies

### 1. SCSS/SASS (Primary Approach)

**Status:** ✅ **Actively Used**

SCSS is the primary styling methodology for the application. The project uses SASS (Syntactically Awesome Style Sheets) with the `.scss` file extension.

**Key Files:**
- `src/index.scss` - Main entry point for global styles
- `src/styles/_variables.scss` - Global SCSS variables
- `src/styles/_mixins.scss` - Reusable SCSS mixins
- `src/styles/_global.scss` - Global base styles
- Component-specific `.scss` files (e.g., `Button.scss`, `PageLayout.scss`)

**Configuration:**
- SASS is installed as a dev dependency (`sass: ^1.83.4`)
- Processed through `react-scripts` build system

#### Global Variables (`src/styles/_variables.scss`)

The application defines a centralized color palette and design tokens:

```scss
// Color Palette
$color-pink: #C278CE;
$color-purple: #6C3ECF;
$color-orange: #F07F23;
$color-light: #FDE5C0;
$color-grey: #AEC1CC;
$color-grey-deep: #404C62;
$color-grey-light: #CED8DF;

// Semantic Color Variables
$primary-color: $color-light;
$primary-accent-color: $color-orange;
$secondary-color: $color-purple;
$secondary-accent-color: $color-pink;

// Typography
$font-family: 'Ubuntu';

// Breakpoints
$breakpoints: (
  small: 600px,
  medium: 1024px,
  large: 1440px
);
```

#### Global Mixins (`src/styles/_mixins.scss`)

Reusable mixins for common styling patterns:

```scss
@mixin border-radius($radius) {
  border-radius: $radius;
}

@mixin respond-to($breakpoint) {
  @if $breakpoint == small {
    @media (max-width: 600px) { @content; }
  } @else if $breakpoint == medium {
    @media (min-width: 601px) and (max-width: 1024px) { @content; }
  } @else if $breakpoint == large {
    @media (min-width: 1025px) { @content; }
  }
}
```

#### Usage Pattern

Components import SCSS files and use class-based styling:

```jsx
// Component example
import './Button.scss';

const Button = ({ styleType, size }) => {
  return (
    <button className={`btn ${styleType} ${size}`}>
      Click me
    </button>
  );
};
```

**Example Component SCSS:**
```scss
@use '../../styles/variables' as *;
@use '../../styles/mixins' as *;

.btn {
  padding: 10px 20px;
  border-radius: 256px;
  
  &.primary {
    background-color: $primary-color;
    color: $primary-accent-color;
  }
  
  &.secondary {
    background-color: $secondary-color;
  }
}
```

---

### 2. Styled Components

**Status:** ✅ **Actively Used**

Styled-components is used extensively throughout the application, particularly in page components and complex UI elements.

**Configuration:**
- Installed: `styled-components: ^6.1.13`
- Uses CSS-in-JS approach for component-scoped styling

#### Usage Pattern

Styled components are defined at the bottom of component files:

```jsx
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f6f6f6;
  max-width: 400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  color: #6C3ECF;
  font-size: 20px;
  font-weight: 500;
`;

// Usage in component
const MyComponent = () => {
  return (
    <Container>
      <Title>Hello World</Title>
    </Container>
  );
};
```

#### Global Style Component

There's a `GlobalStyle` component using styled-components (`src/GlobalStyle.jsx`):

```jsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #cca300;
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;
  }

  #root {
    min-height: 100vh;
  }
`;
```

**Note:** This appears to conflict with the SCSS global styles in `_global.scss`, which sets a different background color (`#f5f5f5`). Only one should be active.

---

### 3. Bootstrap

**Status:** ⚠️ **Installed but Not Actively Used**

Bootstrap 5.3.3 is installed in `package.json`, but there's no evidence of it being imported or used in the codebase.

**Recommendation:** Either remove it if unused, or integrate it properly if needed for specific components.

---

### 4. DaisyUI

**Status:** ⚠️ **Installed but Not Configured**

DaisyUI 4.12.23 is installed, but:
- No `tailwind.config.js` file found in the project root
- No Tailwind CSS configuration detected
- DaisyUI requires Tailwind CSS to function

**Recommendation:** Either configure Tailwind + DaisyUI properly, or remove DaisyUI if not needed.

---

## File Structure

```
src/
├── index.scss                    # Main SCSS entry point
├── GlobalStyle.jsx              # Styled-components global styles
├── styles/
│   ├── _variables.scss          # Global SCSS variables
│   ├── _mixins.scss             # Global SCSS mixins
│   ├── _global.scss             # Global base styles
│   ├── _variables.css           # (Legacy/duplicate?)
│   ├── _mixins.css              # (Legacy/duplicate?)
│   └── _global.css              # (Legacy/duplicate?)
├── components/
│   └── [ComponentName]/
│       ├── ComponentName.jsx
│       ├── ComponentName.scss   # Component-specific SCSS
│       └── ComponentName.css    # (Some components have both)
└── pages/
    └── [PageName]/
        └── PageName.jsx         # Uses styled-components inline
```

---

## Styling Patterns

### Pattern 1: SCSS Component Styling
**Used in:** Reusable components (Button, InputField, PageLayout, etc.)

```jsx
// Component
import './Button.scss';

const Button = ({ styleType }) => (
  <button className={`btn ${styleType}`}>Click</button>
);
```

### Pattern 2: Styled Components
**Used in:** Page components, complex layouts, dynamic styling

```jsx
import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${props => props.primary ? '#6C3ECF' : '#fff'};
  color: ${props => props.primary ? '#fff' : '#6C3ECF'};
`;
```

### Pattern 3: Inline Styles
**Status:** Minimal usage (not recommended for maintainability)

---

## Design System

### Color Palette

| Variable | Hex Code | Usage |
|----------|----------|-------|
| `$color-pink` | `#C278CE` | Secondary accent |
| `$color-purple` | `#6C3ECF` | Secondary color, primary brand |
| `$color-orange` | `#F07F23` | Primary accent |
| `$color-light` | `#FDE5C0` | Primary color |
| `$color-grey` | `#AEC1CC` | Neutral |
| `$color-grey-deep` | `#404C62` | Dark text |
| `$color-grey-light` | `#CED8DF` | Light borders |

### Typography

- **Font Family:** Ubuntu (sans-serif)
- Applied globally via SCSS variables and styled-components

### Breakpoints

- **Small:** 600px and below
- **Medium:** 601px - 1024px
- **Large:** 1025px and above

---

## Current Issues & Recommendations

### 1. **Conflicting Global Styles**
- `GlobalStyle.jsx` sets `body { background-color: #cca300; }`
- `_global.scss` sets `body { background-color: #f5f5f5; }`
- **Recommendation:** Consolidate to one global styling approach

### 2. **Unused Dependencies**
- Bootstrap and DaisyUI are installed but not used
- **Recommendation:** Remove unused dependencies or properly integrate them

### 3. **Duplicate CSS/SCSS Files**
- Some components have both `.css` and `.scss` files
- **Recommendation:** Standardize on SCSS and remove duplicate CSS files

### 4. **Inconsistent Styling Approach**
- Mix of SCSS classes and styled-components
- **Recommendation:** Establish clear guidelines:
  - Use SCSS for reusable components
  - Use styled-components for page-specific layouts and dynamic styling

### 5. **No CSS Modules**
- No CSS Modules pattern detected
- **Recommendation:** Consider CSS Modules for better style encapsulation if needed

---

## Best Practices

### ✅ Do:
- Use SCSS variables from `_variables.scss` for colors and design tokens
- Use SCSS mixins for reusable patterns (border-radius, media queries)
- Use styled-components for dynamic, prop-based styling
- Keep component styles co-located with components
- Use semantic class names

### ❌ Don't:
- Hardcode color values (use variables)
- Duplicate styles across components
- Mix inline styles with external stylesheets unnecessarily
- Create conflicting global styles

---

## Migration Considerations

If consolidating the styling approach:

1. **Option A: SCSS-First**
   - Convert styled-components to SCSS classes
   - Remove styled-components dependency
   - Use CSS custom properties for dynamic values

2. **Option B: Styled-Components-First**
   - Convert SCSS to styled-components
   - Remove SASS dependency
   - Use a theme provider for design tokens

3. **Option C: Hybrid (Current)**
   - Keep both but establish clear guidelines
   - SCSS for static, reusable components
   - Styled-components for dynamic, page-specific layouts
   - Consolidate global styles

---

## Build Configuration

- **Build Tool:** `react-scripts` (Create React App)
- **SASS Processing:** Handled automatically by `react-scripts`
- **Styled Components:** Runtime CSS-in-JS (no build-time processing needed)

---

## Summary

The application currently uses a **hybrid SCSS + styled-components** approach:

- **SCSS** for reusable components with static styling
- **Styled-components** for page layouts and dynamic styling
- **Global variables** defined in SCSS for design consistency
- **Bootstrap/DaisyUI** installed but not actively used

The styling system is functional but could benefit from consolidation and clearer guidelines on when to use each approach.
