---
layout: work
title: "BodyMap"
subtitle: "Designing a better way to understand your dosha"
description: >
  A playful yet grounded quiz experience inspired by traditional Ayurvedic wisdom.
  Discover your constitution and current state of balance through themed questions that feel like a conversation, not a medical form.

image: "/assets/images/works/bodymap/bodymap-logo.png"

deliverables:
  - label: Dual Assessment
    description: Separate quizzes for constitution (Prakriti) and current state (Vikriti)
  - label: Themed Questions
    description: 40 questions organized by Body, Digestion, Mind, and Lifestyle
  - label: Smart Results Engine
    description: 8 possible dosha outcomes with personalized insights
  - label: Daily Routines
    description: Morning, midday, and evening recommendations for each type
  - label: Downloadable Certificate
    description: Save results as shareable images
  - label: Progress Saving
    description: Resume mid-quiz with localStorage persistence

collaboration:
  - Self-initiated project with feedback from wellness peers and AI assistance
---

---

### Situation

Most dosha quizzes online fall into two extremes: either they're oversimplified ("Answer 5 questions to find your type!") or they're overwhelming walls of text filled with Sanskrit jargon. Neither approach serves someone genuinely curious about Ayurveda.

There's also a common confusion between your constitution (who you naturally are) and your current state (how you're feeling now due to stress, diet, or lifestyle). Most tools conflate the two, leading to misleading results.

---

### Task

Create a dosha assessment that's comprehensive but approachable. One that respects Ayurvedic tradition while feeling modern and inviting. And crucially, one that distinguishes between your natural constitution and your current imbalances, because understanding both is key to finding balance.

---

### Action

I designed and built **BodyMap**, a dual-assessment tool that guides users through their Ayurvedic self-discovery:

- **Two distinct assessments**: Prakriti (constitution) reveals your lifelong nature; Vikriti (current state) shows what's out of balance right now.
- **Themed question groups**: Instead of random questions, they're organized by Body & Appearance, Digestion & Metabolism, Mind & Emotions, and Lifestyle & Energy.
- **Conversational tone**: Questions feel like a thoughtful friend asking how you've been, not a clinical form.

<div class="device-showcase">
  <div class="device-frame desktop">
    <img src="/assets/images/works/bodymap/homepage-desktop.webp" alt="BodyMap homepage on desktop" class="work-image">
  </div>
  <div class="device-frame mobile">
    <img src="/assets/images/works/bodymap/homepage-mobile.webp" alt="BodyMap mobile view" class="work-image">
  </div>
</div>
<p class="work-image-caption">BodyMap - dual assessment for constitution and current state</p>

#### Features built

**Dual Assessment System**
The constitution quiz (40 questions) explores long-term patterns and natural tendencies. The current state quiz unlocks after, focusing on recent symptoms and how you've been feeling lately. This distinction is fundamental to Ayurveda but rarely implemented well.

**8 Possible Outcomes**
Results can be single dosha (Vata, Pitta, Kapha), dual combinations (Vata-Pitta, Pitta-Kapha, Vata-Kapha), Tridoshic (all three balanced), or a Balanced state for current assessments.

**Personalized Results**
Each result includes: a summary of the dosha archetype, core traits with descriptions, what balance and imbalance look like, actionable tips for restoration, and a daily routine guide (morning, midday, evening).

**Save & Share**
Results can be downloaded as certificate images or copied as text summaries. Progress auto-saves to localStorage, so users can close the browser and resume later.

**Gated Flow**
The current state assessment only unlocks after completing the constitution quiz, teaching users the proper sequence for understanding their Ayurvedic profile.

---

### Result

**BodyMap** is live at <a href="https://bodymap.wearenebula.cc/" target="_blank" rel="noopener">bodymap.wearenebula.cc</a>:

- Praised as "the easiest dosha assessment I've ever done"
- Helps practitioners and curious beginners alike understand their patterns
- Useful for Ayurveda professionals as a starting tool for patient analysis
- Brings design thinking to wellness without dumbing down the tradition

<div class="sticky-note centered rotate-right">
  <p>"The easiest dosha assessment I've ever done"</p>
</div>

Built with React, Tailwind CSS, and Framer Motion. BodyMap is my invitation for others to explore the fascinating world of Ayurveda.
