---
layout: work
title: "Booking App Store"
protected: true
subtitle: "Improving access to third-party tools through a unified platform"
description: >
  The partnerside App Store gave accommodation partners a structured way to discover and access third-party tools integrated with Booking.com.
  Before this, partners had limited visibility into available solutions or how to connect them.
  A new API and single sign-on flow enabled partners to connect external tools using their Booking credentials, creating a consistent activation journey across providers.

image: "/assets/images/works/internal-app/app-store-front.png"

deliverables:
  - label: App marketplace design
    description: End-to-end interface for browsing and accessing third-party tools on the Extranet
  - label: Discovery flows
    description: Search, filter, and navigation models helping partners find relevant solutions quickly
  - label: SSO integration design
    description: Standardised authentication flow and provider onboarding interface

team:
  - UX designers
  - Engineers
  - Product owners
  - Third-party solution managers
  - Researchers

credits:
  - Booking.com
---

---

### Research foundations

User interviews and cross-team workshops revealed how partners currently discovered, assessed, and activated external solutions. The resulting journey map guided the redesign, highlighting confusion around categories, unclear value propositions, and inconsistent onboarding flows.

<div class="paper-showcase">
  <div class="paper-frame">
    <img src="/assets/images/works/internal-app/customer-journey.png" alt="Partner journey map for third-party tools" class="work-image">
  </div>
</div>
<p class="work-image-caption">Journey map created with accommodation partners. Used by multiple teams to guide decisions around categories, entry points, and activation flows.</p>

---

### Key improvements

#### 1. Structured marketplace experience

Partners struggled to understand which tools were relevant. The previous interface showed all tools in one undifferentiated list with no filtering or context.

<div class="paper-showcase">
  <div class="paper-frame">
    <img src="/assets/images/works/internal-app/app-store-before.png" alt="Original App Store homepage on Booking Extranet" class="work-image">
  </div>
</div>
<p class="work-image-caption">Original App Store: all tools in one long list, limited context.</p>

**Solution:** Clearer categorisation, featured use cases, and improved detail pages that helped partners assess value before connecting.

<div class="paper-showcase">
  <div class="paper-frame">
    <img src="/assets/images/works/internal-app/app-store-front.png" alt="Example tool detail page on Booking Extranet (Vikey)" class="work-image">
  </div>
</div>
<p class="work-image-caption">Improved tool detail pages with clearer value propositions and structured information.</p>

---

#### 2. Standardised SSO and onboarding

Third-party tools had different login and data-sharing flows, causing confusion during activation.

**Solution:** Designed a standard SSO flow allowing partners to connect using Booking.com credentials, reducing friction and creating predictable integration for providers.

<div class="paper-showcase">
  <div class="paper-frame">
    <img src="/assets/images/works/internal-app/trial-flow.png" alt="Partner-facing connection and trial setup flow" class="work-image">
  </div>
</div>
<p class="work-image-caption">Connection flow using standardised SSO: predictable permissions and clear steps.</p>

Providers integrated through a consistent interface for generating the "Connect with Booking.com" button, reducing fragmentation and support overhead.

<div class="paper-showcase">
  <div class="paper-frame">
    <img src="/assets/images/works/internal-app/sso-screen.png" alt="Provider interface for generating Connect with Booking.com button" class="work-image">
  </div>
</div>
<p class="work-image-caption">Provider-facing interface ensuring consistent authentication flows across third-party integrations.</p>

---

### Outcome

- Clear entry point to third-party tools, reducing time spent searching for relevant solutions
- Consistent connection experience supported by the new Booking SSO flow
- Shared design patterns and categorisation models used across teams integrating external tools
- Research artefacts became long-term references for cross-team integration strategy
- More predictable experience for partners regardless of which provider they chose
