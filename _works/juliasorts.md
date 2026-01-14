---
layout: work
title: "Julia Sorts"
subtitle: "A playful decision maker for the chronically indecisive"
description: >
  Can't decide what to eat, watch, or do? Julia Sorts is a fun, arcade-style random picker that makes decisions for you.
  No ads, no accounts, no complexity. Just add your options and let fate decide.

image: "/assets/images/works/juliasorts/logo@2x.png"

deliverables:
  - label: Random Picker
    description: Add up to 5 options and let fate decide with a slot-machine spin
  - label: Spinning Animation
    description: Dramatic slowdown effect that builds suspense before the reveal
  - label: Quick Picks
    description: Pre-loaded categories for food, activities, and board games
  - label: 90s Arcade Aesthetic
    description: Neon colors, CRT scanlines, pixel art, and chunky buttons
  - label: Fully Responsive
    description: Works on mobile, tablet, and desktop
  - label: Accessible
    description: Keyboard navigation, screen reader support, reduced motion

collaboration:
  - Personal project with AI assistance
---

---

### Situation

Decision paralysis is real. Whether it's what to eat for dinner, which movie to watch, or what board game to play, small choices can turn into endless debates. My friend Julia is famously indecisive, and I've watched her spend longer deciding on a restaurant than it would take to eat there.

The tools that exist are either bloated with features, riddled with ads, or take themselves too seriously. Sometimes you just need something to say "tacos" and move on with your life.

---

### Task

Build a simple, fun random picker that makes decisions instantly. No accounts, no ads, no unnecessary features. Just a tool that adds a bit of joy to the mundane act of choosing.

---

### Action

I designed and built **Julia Sorts**, a gloriously over-engineered random decision maker with a 90s arcade aesthetic:

- **Dramatic by design**: A slot-machine style spinner that builds suspense, cycling through options before landing on the winner.
- **Retro gaming vibe**: Neon pinks and cyans, CRT scanline effects, pixel-art corners, and chunky arcade buttons.
- **Zero friction**: Add options, hit SORT IT!, get a result. Done.

<div class="device-showcase">
  <div class="device-frame mobile">
    <img src="/assets/images/works/juliasorts/homepage-mobile.png" alt="Julia Sorts homepage" class="work-image">
  </div>
  <div class="device-frame mobile">
    <img src="/assets/images/works/juliasorts/pick-sort-food.png" alt="Quick pick food options" class="work-image">
  </div>
  <div class="device-frame mobile">
    <img src="/assets/images/works/juliasorts/success-pizza-sort.png" alt="Result reveal - Pizza wins" class="work-image">
  </div>
</div>
<p class="work-image-caption">The full flow: home → pick options → result</p>

#### Features built

**Random Picker**
Add up to 5 custom options (defaults to Yes/No for quick decisions). Pure randomness, no algorithms, 100% chaos.

**Spinning Animation**
The spinner cycles through options at high speed, gradually slowing down over 20-30 spins before landing on the winner. Glitch effects and color changes add to the drama.

**Quick Pick Categories**
Pre-loaded option sets for common decisions: Food (Pizza, Sushi, Tacos, Burger), Activity (Movie, Board game, Go outside, Video game), Board Game (Catan, Carcassonne, Ticket to Ride, Codenames), and Dinner (Cook, Takeaway).

**Design System**
A full arcade-inspired design system with neon color tokens, CRT-style typography (Press Start 2P, VT323), layered glow effects, and 3D button shadows.

**Accessibility**
Keyboard navigation throughout, ESC to close modals, Enter to submit, proper ARIA labels, and respects prefers-reduced-motion for users sensitive to animations.

---

### Result

**Julia Sorts** is live at <a href="https://juliasorts.com" target="_blank" rel="noopener">juliasorts.com</a>:

- A delightfully unnecessary solution to a universal problem
- Zero ads, zero accounts, zero data collection
- Proof that even the smallest tools deserve craft and attention

Built with React and Vite. Named after Julia, who still can't decide what to have for dinner.
