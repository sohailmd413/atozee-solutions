# AI Rules & Guidelines

This file contains rules and guidelines for AI agents working on the AtoZee Solutions project.

## Project Overview

**AtoZee Solutions Website Redesign**
- Modern, premium B2B technology website
- Inspired by modal.com design language
- Next.js 16, Tailwind CSS 4, shadcn/ui, Framer Motion
- Dark theme with glassmorphism effects

## Design System

### Visual Language
- **Premium dark theme** - Deep dark backgrounds (#0c0c0c, #080808)
- **Off-white text** - Opacity variants of white for hierarchy
- **Muted secondary text** - Low opacity for supporting content
- **Soft borders** - rgba(255,255,255,0.1) and below
- **Subtle glow effects** - Inner/outer shadows with white transparency
- **Glassmorphism** - Backdrop blur with gradient overlays
- **Modern typography** - Inter (UI), JetBrains Mono (code)
- **Rounded elements** - Cards, buttons, containers
- **Minimal motion** - Subtle, controlled animations

### Color Palette
- Backgrounds: #0c0c0c, #080808, rgba(0,0,0,0.x)
- Text: rgba(255,255,255,0.9), rgba(255,255,255,0.6), rgba(255,255,255,0.4)
- Borders: rgba(255,255,255,0.1), rgba(255,255,255,0.06)
- Glows: rgba(255,255,255,0.15), rgba(255,255,255,0.08)
- Accents: Solid white for primary actions

## Component Architecture

### Layout Components (`/components/layout`)
- **Container** - Reusable wrapper with max-width and padding
- **Navbar** - Sticky nav with 3-column grid layout
- **Footer** - Site footer component

### Section Components (`/sections`)
- **HeroSection** - Homepage hero with animated background
- **TrustStrip** - Logo strip with "Trusted by" text
- **ServicesGrid** - Service offerings grid
- **WhyAtozeeSection** - Value proposition
- **HowWeWorkSection** - Process/steps
- **FeaturedCaseStudies** - Project showcase
- **TechnologyCapabilities** - Tech stack display
- **FaqSection** - Accordion FAQ
- **FinalCta** - Closing call-to-action

### UI Components (`/ui`)
- shadcn/ui primitives (Button, Card, Accordion)
- Maintain consistent styling with design system
- Use `cn()` utility for conditional classes

## Animation Guidelines

### Framer Motion Usage
- **Subtle entrance animations** - fadeUp with blur
- **Staggered reveals** - staggerChildren: 0.1s
- **Premium easing** - cubic-bezier(0.23, 1, 0.36, 1)
- **Infinite loops** - rotation, floating, glow pulses
- **Performance first** - will-change, transform-only

### Animation Patterns
```typescript
// Entrance animation
const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

// Infinite subtle motion
animate={{
  y: [-15, 15, -15],
  rotate: [0, 360],
  opacity: [0.4, 0.6, 0.4]
}}
transition={{
  duration: 6,
  repeat: Infinity,
  ease: "easeInOut"
}}
```

## Code Standards

### TypeScript
- Strict mode enabled
- Explicit types for props and state
- No `any` types - use `unknown` or generics

### React/Next.js
- "use client" for interactive components
- Server components where possible
- Proper loading/error states
- Semantic HTML structure

### Styling (Tailwind CSS)
- Mobile-first responsive design
- Arbitrary values for precise control (e.g., `h-[2.875rem]`)
- Consistent spacing scale
- Use CSS variables for theme values
- Layered shadows for depth

### Performance
- Lazy load heavy components
- Optimize images (WebP, AVIF)
- Minimize bundle size
- Use Next.js Image component
- Implement proper caching

## Content Guidelines

### Voice & Tone
- Professional but approachable
- Confidence without arrogance
- Clear, concise technical language
- Focus on outcomes and value

### Headline Structure
- Main headline: Bold, 2-3 lines max
- Gradient emphasis on key phrase
- Supporting text: 1-2 sentences
- Clear call-to-action hierarchy

### Content Sections
1. **Hero** - Value proposition + CTA
2. **Social Proof** - Logos/testimonials
3. **Services** - What we offer
4. **Process** - How we work
5. **Case Studies** - Proof of results
6. **Technology** - Capabilities
7. **FAQ** - Address objections
8. **Final CTA** - Convert visitors

## File Organization

```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── layout/      # Layout components
│   ├── sections/    # Page sections
│   └── ui/          # UI primitives
├── lib/             # Utilities  
└── styles/          # Global styles
```

## Git Workflow

- **Never** commit with `--no-verify`
- **Never** skip pre-commit hooks
- Create descriptive commit messages
- Push to feature branches, not main
- Use PRs for code review
- Update AGENTS.md when changing architecture

## Common Pitfalls to Avoid

❌ **Don't**:
- Use bright colors or high saturation
- Add noisy/flashy animations
- Break the dark theme consistency
- Use low-contrast text
- Ignore mobile responsiveness
- Overcomplicate component logic
- Use inline styles excessively
- Skip accessibility considerations

✅ **Do**:
- Test on multiple screen sizes
- Check color contrast ratios
- Maintain visual hierarchy
- Keep animations subtle
- Use semantic HTML
- Write clear comments
- Follow existing patterns
- Document new components

## Troubleshooting

### Animation Performance
- Use `transform` instead of `top/left`
- Add `will-change` for heavy animators
- Limit simultaneous animations
- Use `pointer-events-none` for decorative layers

### Build Issues
- Clear `.next` cache if styling bugs appear
- Check TypeScript errors before building
- Verify all dependencies are installed

### Design QA
- Check spacing consistency
- Verify hover states
- Test dark mode (only mode)
- Verify mobile layout
- Check animation performance

---

**Last Updated**: 2026-04-06  
**Maintainer**: AI Agent  
**Status**: Active Development