---
layout: work
title: "Start Ashtanga"
subtitle: "An open-source guide to Ashtanga Yoga for beginners"
description: >
  A free, community-driven resource for anyone curious about Ashtanga Yoga (Mysore style).
  The goal is to make traditional yoga accessible to everyone, everywhere, with no gatekeeping and no paywalls.

image: "/assets/images/works/startashtanga/start-ashtanga-top-image.png"

deliverables:
  - label: Getting Started Guide
    description: Comprehensive beginner's guide covering fundamentals, class types, and what to expect
  - label: Primary Series
    description: Full pose sequence with Sanskrit names, breath counts, and vinyasa details
  - label: Glossary
    description: 40+ Sanskrit terms and yoga vocabulary explained in plain language
  - label: Shala Finder (WIP)
    description: Interactive map with 100+ Mysore-style programs worldwide
  - label: Multi-language Support
    description: Built with i18next for community-driven translations
  - label: Contribution Guide
    description: Easy paths for non-developers to contribute content, translations, and shalas
  - label: Open Source
    description: MIT licensed, welcoming contributions from the yoga community

collaboration:
  - Community-driven project with AI assistance and contributor support
---

---

### Situation

Information about Ashtanga Yoga is fragmented across the internet. Every teacher says something slightly different, YouTube videos contradict each other, and commercial interests often muddy the waters. Yet beneath all this noise, there is a traditional method, a specific sequence passed down through a lineage, with clear foundations that have remained consistent for decades.

For beginners, this creates a frustrating paradox: a practice that should be accessible feels gatekept by jargon, conflicting advice, and expensive teacher trainings.

---

### Task

Consolidate what is foundational and set in stone about Ashtanga Yoga into a single, reliable resource. A neutral, community-vetted reference that brings the traditional method to light, giving beginners a solid foundation before they step into a shala.

---

### Action

I designed and built **Start Ashtanga**, a free, open-source web application with the following principles:

- **For the community, by the community**: No sponsorships, no product sales, no teacher promotion. Content is crowd-sourced and peer-reviewed.
- **Traditional compliance**: All information aligns with the Mysore tradition as taught by the source lineage.
- **Beginner-first design**: No assumed knowledge, clear language, welcoming tone.

<div class="device-showcase">
  <div class="device-frame desktop">
    <img src="/assets/images/works/startashtanga/homepage-desktop.webp" alt="Start Ashtanga homepage on desktop" class="work-image">
  </div>
  <div class="device-frame mobile">
    <img src="/assets/images/works/startashtanga/homepage-mobile.webp" alt="Start Ashtanga mobile view" class="work-image">
  </div>
</div>
<p class="work-image-caption">Homepage - welcoming beginners to the practice</p>

#### Features built

**Getting Started Guide**
A comprehensive introduction covering: What is Ashtanga Yoga, the Eight Limbs, Led vs Mysore class styles, what to expect in your first class, what to bring, and frequently asked questions.

**Primary Series Reference**
The complete Primary Series (Yoga Chikitsa) with every pose documented: Sanskrit names with Devanagari script, English translations, vinyasa counts, breath counts, bilateral markers, and special notations for gatekeeper poses.

<div class="device-showcase">
  <div class="device-frame desktop">
    <img src="/assets/images/works/startashtanga/getting-started-desktop.webp" alt="Getting started guide desktop" class="work-image">
  </div>
  <div class="device-frame mobile">
    <img src="/assets/images/works/startashtanga/getting-started-mobile.webp" alt="Getting started guide mobile" class="work-image">
  </div>
</div>
<p class="work-image-caption">Getting Started guide with section navigation</p>

**Searchable Glossary**
40+ yoga terms explained in plain language, with Sanskrit text, Devanagari script, and contextual definitions. Full-text search across terms and meanings.

**Global Shala Directory (WIP)**
An interactive map with 100+ Mysore-style yoga programs worldwide. Search by location, teacher name, or studio. Includes teacher authorization levels, practice types offered (Mysore, Led, Pranayama, Online), and geolocation to find shalas near you.

**Multi-language Architecture**
Built with i18next, ready for community translations. The entire content structure supports localization, with English as the foundation and infrastructure for adding new languages.

**Contribution Paths**
Multiple ways for non-developers to contribute: submit content corrections, add translations, register new shalas via forms, or contribute code on GitHub. MIT licensed and fully open source.

---

### Result

**Start Ashtanga** is live at <a href="https://www.startashtanga.org" target="_blank" rel="noopener">startashtanga.org</a>, offering:

- A single source of truth for Ashtanga fundamentals
- Zero commercial influence or teacher bias
- A growing directory helping practitioners find authentic Mysore programs globally
- An open platform where the yoga community can contribute and improve the resource together

Built with React, TypeScript, Vite, and Tailwind CSS. This project is my way of giving back to a practice that has given me so much, making it easier for others to begin their journey.
