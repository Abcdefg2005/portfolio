# Implementation Plan

## Overview
Create a sleek, modern personal portfolio website using Vite + React with advanced animations (Framer Motion, GSAP, tsParticles), featuring a dark tech-inspired theme with glassmorphism, 3D card flips, particle backgrounds, animated skill dashboards, and a fully responsive design across all sections: Hero, About, Skills, Projects, Contact, and Footer.

## Scope & Approach
This is a greenfield project — no existing codebase. The build environment requires Node.js installation first (user chose Vite + React over CDN). The approach uses a component-based architecture with one library per animation concern: Framer Motion for scroll-triggered and UI transitions, GSAP for 3D card flips, and tsParticles for the hero particle background. CSS-in-JS is avoided in favor of module-scoped CSS and global variables for the dark theme. All content will use placeholder data (lorem ipsum, stock project names) that the user can easily swap out. The portfolio will be deployable to GitHub Pages via `vite build`.

## Type System
No TypeScript — plain JavaScript with PropTypes for component documentation.

**Data Structures (placeholder objects):**
```js
// Project data shape
{
  id: number,
  title: string,
  description: string,
  tech: string[],
  image: string,        // placeholder gradient or emoji
  github: string,       // "#" placeholder
  live: string          // "#" placeholder
}

// Skill data shape
{
  name: string,
  level: number,        // 0–100
  category: "frontend" | "backend" | "design" | "tools"
}

// Timeline/About data shape
{
  year: string,
  title: string,
  description: string
}
```

## Files

### New Files (all under `C:/Users/kevin/Desktop/portfolio/`)

| File | Purpose |
|------|---------|
| `package.json` | Project manifest with dependencies |
| `vite.config.js` | Vite build configuration |
| `index.html` | Entry HTML |
| `src/main.jsx` | React entry point |
| `src/App.jsx` | Root component — composes all sections |
| `src/App.css` | Global styles, CSS variables, dark theme |
| `src/index.css` | Base reset and body styles |
| `src/components/Hero.jsx` | Hero section with tsParticles, typewriter, CTA |
| `src/components/Hero.css` | Hero styles |
| `src/components/About.jsx` | About Me — timeline with scroll animations |
| `src/components/About.css` | About styles |
| `src/components/Skills.jsx` | Animated skills dashboard with circular progress |
| `src/components/Skills.css` | Skills styles |
| `src/components/Projects.jsx` | 3D card flip project showcase |
| `src/components/Projects.css` | Projects styles |
| `src/components/Contact.jsx` | Glassmorphism contact form |
| `src/components/Contact.css` | Contact styles |
| `src/components/Footer.jsx` | Footer with social links |
| `src/components/Footer.css` | Footer styles |
| `src/components/Navbar.jsx` | Fixed top navigation bar |
| `src/components/Navbar.css` | Navbar styles |
| `src/components/ParticleBackground.jsx` | tsParticles wrapper component |
| `src/utils/placeholderData.js` | Placeholder data arrays for projects, skills, timeline |

## Dependencies

### Install via npm
- `react` + `react-dom` (core)
- `framer-motion` (scroll/animation library)
- `gsap` (3D card flip animations)
- `@react-spring/gsap` (GSAP + React bridge — optional, may use refs instead)
- `tsparticles` + `@tsparticles/react` (particle background)
- `react-icons` (icon library for tech stack badges and social links)
- `react-intersection-observer` (trigger animations on scroll)

### Dev Dependencies
- `vite` (bundler/dev server)
- `@vitejs/plugin-react` (JSX transform)

## Classes/Components

### New Components

| Component | File | Key Methods/Props |
|-----------|------|-------------------|
| `App` | `src/App.jsx` | Renders Navbar + all sections |
| `Navbar` | `src/components/Navbar.jsx` | State: `activeSection`, scroll-linked active state |
| `Hero` | `src/components/Hero.jsx` | typewriter effect via `useEffect`, particle config |
| `ParticleBackground` | `src/components/ParticleBackground.jsx` | Wraps tsParticles with config |
| `About` | `src/components/About.jsx` | Timeline cards using Framer Motion `useInView` |
| `Skills` | `src/components/Skills.jsx` | Circular progress SVG + intersection observer |
| `Projects` | `src/components/Projects.jsx` | 3D flip via GSAP on hover/click |
| `Contact` | `src/components/Contact.jsx` | Glassmorphism form + Hook Form logic (manual) |
| `Footer` | `src/components/Footer.jsx` | Static social links with hover glow |

## Functions

### New Functions

| Function | File | Signature | Purpose |
|----------|------|-----------|---------|
| `typewriterEffect` | `Hero.jsx` | `(text, speed, callback)` | Types out text character by character |
| `animateProgress` | `Skills.jsx` | `(element, targetPercent)` | Animates SVG circle stroke-dashoffset |
| `flipCard` | `Projects.jsx` | `(cardElement, isFlipped)` | GSAP 3D rotateY animation |
| `handleSubmit` | `Contact.jsx` | `(e)` | Form submission with feedback animation |
| `scrollToSection` | `Navbar.jsx` | `(sectionId)` | Smooth scroll to target section |

## Testing
No formal testing framework. Manual validation checklist:
- [ ] All sections render correctly on desktop (1920×1080)
- [ ] Responsive on mobile (375×667) via Chrome DevTools
- [ ] Scroll-triggered animations fire correctly
- [ ] Skill bars animate on visibility
- [ ] Project cards flip on hover
- [ ] Particle background renders without performance issues
- [ ] Contact form shows success/error feedback
- [ ] Navbar highlights active section on scroll
- [ ] Build succeeds with `npm run build`
- [ ] No console errors

## Implementation Order

1. **Install Node.js + initialize Vite project** — Download Node.js, scaffold with `npm create vite@latest`
2. **Configure project** — Set up `vite.config.js`, install all dependencies
3. **Create data layer** — Build `placeholderData.js` with project, skill, timeline data
4. **Build global styles** — `index.css`, `App.css` with CSS variables, dark theme, fonts
5. **Build Navbar** — Fixed nav with scroll-aware active link highlighting
6. **Build Hero section** — Particle background, typewriter text, CTA button with ripple
7. **Build About section** — Timeline cards with scroll-triggered Framer Motion animations
8. **Build Skills section** — Circular progress bars with intersection-observer animations + category filtering
9. **Build Projects section** — 3D card flip grid with GSAP animations
10. **Build Contact section** — Glassmorphism form with floating labels, neon glow, animated submit
11. **Build Footer** — Social links with hover effects
12. **Wire App.jsx** — Compose all sections, ensure smooth scroll navigation works
13. **Responsive polish** — Media queries for tablet and mobile
14. **Build + verify** — `npm run build`, test output, fix any issues

