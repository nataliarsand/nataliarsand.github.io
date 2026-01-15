---
layout: work
title: "Booking App Store"
protected: true
subtitle: "A marketplace for accommodation partners to discover and connect third-party tools"
description: >
  An MVP App Store for accommodation partners existed but was stuck—leadership saw potential but lacked direction. I started from scratch with user research, helping the team prioritise and fully redesign the marketplace and how third-party products connected through a standardised "Connect with Booking" SSO flow.

image: "/assets/images/works/internal-app/app-store-front.png"

deliverables:
  - label: App marketplace
    description: End-to-end interface for browsing and accessing third-party tools
  - label: Discovery flows
    description: Search, filter, and categorisation helping partners find relevant solutions
  - label: SSO integration
    description: Standardised authentication flow for partners and providers
  - label: Research artefacts
    description: Journey maps and workshops that guided cross-team decisions

team:
  - UX designers
  - Engineers
  - Product owners
  - Third-party solution managers
  - Researchers

credits:
  - Booking.com

year: 2018
---

---

### Situation

The existing App Store showed all tools in one long list. There were a few filters, but all manually preselected and, as the product grew, they became outdated and hard to maintain. Partners didn't know which apps to choose or why. The experience felt broken and incomplete, with edge cases and dead ends throughout the flow. And once partners found something, each tool had its own login and data-sharing flow, causing confusion and drop-off during activation.

<div class="device-showcase">
  <div class="device-frame desktop">
    <img loading="lazy" src="/assets/images/works/internal-app/app-store-before.png" alt="Original App Store homepage on Booking Extranet" class="work-image">
  </div>
</div>
<p class="work-image-caption">Original App Store: all tools in one long list, limited context.</p>

---

### Task

Start from scratch with research to understand what was working and what wasn't. Use findings to help the team prioritise and redesign both the marketplace experience and the integration flow for each third-party product. Coordinate between business partners, other Extranet teams, API and integrations teams, product, leadership, and engineers to align on direction.

---

### Action

**Research & Discovery**<br>
Planned and ran user interviews and usability tests with accommodation partners to understand their needs and pain points. Ran multiple cross-functional, technical, and business workshops to align on goals and co-create solutions. Research uncovered critical pain points: wildly varying trial periods, unclear billing terms, forms and phone calls required to start trials, and automatic charges without explicit consent. These findings shaped three design principles—*Be in control*, *Be informed*, *Be confident*—that guided all decisions.

<div class="paper-showcase">
  <div class="paper-frame">
    <img loading="lazy" src="/assets/images/works/internal-app/customer-journey.png" alt="Partner journey map for third-party tools" class="work-image">
  </div>
</div>
<p class="work-image-caption">Journey map for a persona, created based on interviews and research.</p>

**Marketplace Experience**<br>
Redesigned the browsing experience with meaningful categories, featured use cases, and detail pages showing transparent pricing, trial terms, and what data would be shared. Partners could now assess value and understand commitments before connecting.

<div class="device-showcase">
  <div class="device-frame desktop">
    <img loading="lazy" src="/assets/images/works/internal-app/app-store-front.png" alt="Example tool detail page on Booking Extranet" class="work-image">
  </div>
</div>
<p class="work-image-caption">Improved tool detail pages with clearer value propositions and structured information.</p>

**Standardised Connection Flow**<br>
Designed a single sign-on flow with predictable permissions, clear trial terms, and explicit consent before any charges. Created a provider-facing interface for generating the "Connect with Booking.com" button. To validate the approach before full integration, we used a Wizard of Oz method for Phase I, manually processing billings while the technical infrastructure was built.

<div class="device-showcase">
  <div class="device-frame desktop">
    <img loading="lazy" src="/assets/images/works/internal-app/trial-flow.png" alt="Partner-facing connection and trial setup flow" class="work-image">
  </div>
</div>
<p class="work-image-caption">Connection flow using standardised SSO: predictable permissions and clear steps.</p>

<div class="device-showcase">
  <div class="device-frame desktop">
    <img loading="lazy" src="/assets/images/works/internal-app/sso-screen.png" alt="Provider interface for generating Connect with Booking.com button" class="work-image">
  </div>
</div>
<p class="work-image-caption">Provider-facing interface for consistent authentication flows.</p>

---

### Result

- Successfully launched at ITB Berlin (World's Leading Travel Trade Show)
- Significant increase in trials started, with 100% of purchases made with intent
- Decrease in customer support tickets about billing errors
- Partners could discover and connect tools faster with transparent information and a predictable flow
- Providers had a consistent integration path, reducing fragmentation and support overhead
- Research artefacts became long-term references across the track. From business to engineers, teams would gather around journey maps to discuss flows, ideas, and improvements
