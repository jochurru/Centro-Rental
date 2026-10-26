<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Centro Rental 2.0 — Design Engineering & Motion Framing

When applying design engineering skills (such as `emil-design-eng`), the agent MUST enforce these non-negotiable project boundaries:

## 1. Identity & Brand Integrity (Non-Negotiable)
The design skill does NOT have authority to alter:
- Brand identity, official logos, or brand marks.
- Color palette: Primary background `#09090B`, Corporate Green `#B5D448`, White, and neutral zinc/grays.
- Typography, navigation structure, or content architecture.
- Commercial claims, copy, or business hierarchy.
- The approved `GlowButton` component and its subtle RGB ambient glow.
- The historical identity and verified physical assets of Centro Rental.

The skill is strictly a technical reference for: interaction, motion, visual clarity, timing, easing, microinteractions, and component behavior.

## 2. Aesthetics & Motion Constraints
- **Color Discipline**: Avoid dominant purple, gamer aesthetics, or excessive neon.
- **Motion Philosophy**: Premium, technical, sober, brief, and functional. Animations must help users understand interface transitions and spatial state, never call attention to themselves.
- **Performance**: Avoid theatrical animations, unnecessary autoplay, long or distracting movements, and any effect that hurts 60fps performance or increases CPU/GPU overhead.

## 3. Accessibility & Controls
- Must strictly respect `prefers-reduced-motion` (instant state changes or subtle opacity fades when active).
- Keyboard navigation: visible focus rings (`focus-visible:ring-*`), real `<button>` and `<Link>` elements.
- Equivalent mobile experience: touch targets minimum 44px, immediate tap feedback, zero reliance on hover-only interactions.

