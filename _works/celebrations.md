---
layout: work
title: "Celebrations"
subtitle: "A production, design-system-driven product for beautiful event pages — designed and built end-to-end, with AI"
description: >
  Celebrations is a live product for creating beautiful event pages with RSVPs and collaborative gift lists.
  I designed and built it end-to-end on my own, from the theming system and templates through the React frontend to the backend and deployment, using AI as a build partner throughout.

image: "/assets/images/works/celebrations/celebrations-top-image.webp"

deliverables:
  - label: Design system
    description: Tokenised theming engine — colour, typography, and background presets generating 72 coherent templates
  - label: Product design
    description: Five-step creation wizard, RSVP management, and collaborative gift lists, designed end-to-end
  - label: Front-end build
    description: React 19 + TypeScript monorepo with a shared component library, responsive and accessible
  - label: AI-assisted delivery
    description: AI used across design exploration, build, and QA, with craft and architecture decisions owned throughout

collaboration:
  - Self-initiated project, designed and built end-to-end with AI
---

---

### Situation

Planning a celebration means stitching together separate tools — one app for the invitation, a spreadsheet or chat thread for RSVPs, a third site for a gift registry. The event page itself usually looks generic, or takes real design effort to make beautiful. For most people organising a wedding, a baby shower, or a housewarming, that effort is out of reach.

---

### Task

Build one product where anyone can create a beautiful, themed event page with RSVPs and a collaborative gift list — elegant by default, with no design skill required from the host.

---

### Action

I designed and built **Celebrations** end-to-end on my own: a React 19 and TypeScript monorepo with a shared component library, and a Fastify and PostgreSQL backend, deployed to production.

<div class="device-showcase">
  <div class="device-frame desktop">
    <img loading="lazy" src="/assets/images/works/celebrations/editor.webp" alt="Celebrations live editor with theming controls and a live preview of the event page" class="work-image">
  </div>
</div>
<p class="work-image-caption">The live editor: edit on the left, watch the themed page update on the right, then publish.</p>

**A tokenised design system**
Twelve colour presets, ten typography options, and a set of backgrounds and borders combine into 72 templates from one theming engine. The hard part was making the system produce tasteful defaults, so a host with no design background still ends up with an elegant page.

<div class="device-showcase">
  <div class="device-frame desktop">
    <img loading="lazy" src="/assets/images/works/celebrations/templates-grid.webp" alt="A grid of Celebrations templates, each themed differently from the same system" class="work-image">
  </div>
</div>
<p class="work-image-caption">One system, seventy-two templates: every invite shares the same tokens and components, with its own colour, typography, and imagery.</p>

<div class="device-showcase">
  <div class="device-frame desktop">
    <img loading="lazy" src="/assets/images/works/celebrations/dinner-party.webp" alt="Celebrations dinner party event page on desktop" class="work-image">
  </div>
  <div class="device-frame mobile">
    <img loading="lazy" src="/assets/images/works/celebrations/housewarming-mobile.webp" alt="Celebrations housewarming event page on mobile" class="work-image">
  </div>
</div>
<p class="work-image-caption">A finished page, from desktop down to mobile.</p>

**End-to-end, on my own**
I did the whole thing myself, from the first idea through design, build, and deployment. Doing both the design and the engineering meant nothing got lost in a handoff.

**AI as a build partner**
I worked with AI the way I always do: as a creative partner, never blindly. It helped with exploration, writing code, and testing, while I stayed accountable for everything it produced.

**Still hard, even with AI**
AI helps, but it doesn't make this easy. I have to understand the code well enough to debug and reason about it, decide the architecture and which third-party tools and services to depend on, and hold the whole thing to proper software standards, not just design ones: reliability, security and privacy, testing, maintainability, and a deployment pipeline I can trust. AI speeds up the writing; the judgment about what's correct and what will hold up over time stays with me.

**The details**
I put the time into the parts that are easy to skip: a creation wizard that doesn't overwhelm despite all the options, password protection for private events, proper mobile layouts, accessibility, multiple languages, and the small states that often get left out, like gift reservations, calendar adds, and empty views.

<div class="device-showcase">
  <div class="device-frame desktop">
    <img loading="lazy" src="/assets/images/works/celebrations/rsvp-dashboard.webp" alt="Celebrations RSVP dashboard showing responses, headcount, statuses, and guest management" class="work-image">
  </div>
</div>
<p class="work-image-caption">The host's RSVP dashboard: responses, headcount, statuses, and inline guest management.</p>

---

### Result

**Celebrations** is live at <a href="https://joincelebrations.com" target="_blank" rel="noopener">joincelebrations.com</a>, in user validation ahead of paid tiers.

- A tokenised design system producing 72 coherent templates from structured colour and typography presets
- The full design-to-delivery arc, built solo with AI and deployed to production
- Mobile-first, accessible, and internationalised from the start

Built with React, TypeScript, Fastify, and PostgreSQL.
