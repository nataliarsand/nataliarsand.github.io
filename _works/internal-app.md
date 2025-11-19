---
layout: work
title: "Booking partnerside App Store"
subtitle: "Improving access to third-party tools through a unified platform"
description: >
  A cross-functional effort to create a consolidated marketplace of third-party tools within the Booking.com Extranet. 
  The platform helped accommodation partners discover, evaluate, and access external solutions directly from the Extranet. 
  A shared API and single sign-on flow enabled partners to use these tools with their Booking credentials, improving 
  discoverability, consistency, and integration across partner-facing teams.

image: "/assets/images/app-store-hero.png"

deliverables:
  - label: App marketplace design
    description: End-to-end interface for browsing and accessing third-party tools on the Extranet
  - label: UI framework
    description: Shared components and structural patterns used across marketplace pages
  - label: Discovery flows
    description: Search, filter, and navigation models helping partners find relevant solutions quickly
  - label: Role
    description: UX designer responsible for research, experience strategy, and design execution
  - label: Scope
    description: Collaboration across platform tooling, API integration teams, and partner-facing product groups

team:
  - UX designers
  - Engineers
  - Product owners
  - Third-party solution managers
  - Researchers

process:
  - User research and persona development
  - Information architecture and categorisation models
  - Wireframes and UI prototyping
  - Usability testing with accommodation partners
  - Co-design workshops with integration and solution teams
  - Design–engineering handoff and implementation support

credits:
  - Booking.com

---
### Project details

The **partnerside App Store** was created to provide accommodation partners with a clear, structured way to discover and access the third-party tools integrated with Booking.com. These external solutions support areas such as guest messaging, operations, automation, pricing, and check-in flows. Before this work, partners had limited visibility into which solutions existed, how they worked, or how to connect them through the Extranet.

My contribution focused on defining a **coherent end-to-end experience** for discovering, evaluating, and connecting to third-party tools. This involved research with accommodation partners, workshops with internal integration teams, and translating insights into clear navigation, information architecture, and consistent SSO/connection patterns.

A new API and single sign-on flow enabled partners to connect external tools using their Booking credentials, creating a consistent activation journey across providers.

---

<div class="work-image-container large">
  <img src="/assets/images/works/internal-app/app-store-before.png" alt="Original App Store homepage on Booking Extranet" class="work-image">
  <p class="work-image-caption">
    The original App Store homepage surfaced all third-party tools in one long, undifferentiated list, with limited context to help partners understand relevance.
  </p>
</div>

---

### Research foundations

To address discoverability and comprehension challenges, I ran user interviews, heuristic evaluations, and multple cross-team workshops. These insights led to a full journey map outlining how partners currently discover, assess, and attempt to activate external solutions.

This map guided the redesign, highlighting:

- points of confusion (e.g., unclear categories, duplicate tools)  
- moments where partners needed context or examples  
- inconsistencies in onboarding and activation flows  
- differences in how providers presented value and required data access  

<div class="work-image-container large">
  <img src="/assets/images/works/internal-app/customer-journey.png" alt="Partner journey map for third-party tools" class="work-image">
  <p class="work-image-caption">
    Journey map created after research and a team workshop with accommodation partners. 
    Printed and used by multiple teams as a shared artefact for decisions around categories, entry points, and activation flows.
  </p>
</div>

---

### challenges & solutions

#### 1. limited visibility and lack of structure  
**Challenge:** Partners struggled to understand which tools were relevant to their property type or needs. The previous interface did not support filtering, categories, or meaningful entry points.

**Solution:** Designed a structured marketplace experience, including clearer categorisation, featured use cases, and improved detail pages that helped partners assess value before connecting.

<div class="work-image-container large">
  <img src="/assets/images/works/internal-app/app-store-front.png" alt="Example tool detail page on Booking Extranet (Vikey)" class="work-image">
  <p class="work-image-caption">
    Improved tool detail pages provided clearer value propositions, structured information, use cases, and a consistent connection entry point.
  </p>
</div>

---

#### 2. inconsistent access and activation flows  
**Challenge:** Third-party tools had different login, onboarding, and data-sharing flows, causing confusion and breakpoints during activation.

**Solution:** Designed and supported the rollout of a **standard SSO flow**, allowing partners to connect to external tools using their Booking.com credentials.  
This reduced friction and created a more predictable integration layer for providers.

<div class="work-image-container large">
  <img src="/assets/images/works/internal-app/trial-flow.png" alt="Partner-facing connection and trial setup flow" class="work-image">
  <p class="work-image-caption">
    Example of a partner-facing connection flow using the standardised SSO model. This ensured predictable permissions, clear steps, and consistent expectations across providers.
  </p>
</div>

---

#### 3. fragmented provider integration experience  
**Challenge:** Providers integrated with the App Store through different patterns and UI elements, which created inconsistency and additional support overhead.

**Solution:** Designed the developer-facing interface for configuring the **“Connect with Booking.com”** button, ensuring providers used the correct SSO pathway and visual standards.

<div class="work-image-container large">
  <img src="/assets/images/works/internal-app/sso-screen.png" alt="Provider interface for generating Connect with Booking.com button" class="work-image">
  <p class="work-image-caption">
    Provider-facing interface for generating the standardised “Connect with Booking.com” button. 
    This ensured consistent authentication flows and reduced fragmentation across third-party integrations.
  </p>
</div>

---

### outcome

- A clear, structured **entry point** to third-party tools within the Extranet, improving comprehension and reducing time spent searching for relevant solutions.
- A consistent **connection and onboarding experience**, supported by the new Booking SSO flow.
- Shared design patterns and categorisation models used across teams integrating external tools.
- Research artefacts, including the journey map, became long-term references for cross-team decisions around integration strategy and partner needs.
- A more predictable experience for accommodation partners, regardless of which provider they chose.

---

### key results

- Accommodation partners gained a stronger understanding of available third-party tools and how they integrate into their workflows.
- Internal teams had a unified, research-backed view of partner behaviours, improving prioritisation.
- Providers benefited from clearer guidance and a standardised integration model, reducing development and support complexity.
- The redesigned App Store and SSO patterns provided a foundation for future integrations and expansions of partner-facing tooling.

