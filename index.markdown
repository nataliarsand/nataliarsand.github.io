---
layout: default
title: Home
---

<section id="main-intro">
  <div class="container">
    <div id="intro-text">
      <div class="intro-greeting">
        <img src="{{ '/assets/images/natalia-profile.png' | relative_url }}"
             srcset="{{ '/assets/images/natalia-profile.png' | relative_url }} 1x, {{ '/assets/images/natalia-profile@2x.png' | relative_url }} 2x"
             class="intro-image anim-on-load fade-in load-delay-1" alt="Natalia Arsand profile image"/>
        <h2><span class="typing-text">Hi, I'm Natalia.</span></h2>
      </div>
      <p class="intro-p anim-timed">I'm a <strong>UX Design Lead</strong> with 18+ years of experience working across strategy, systems, and delivery. I love making sense of complex, real-world problems and guiding the work from early insight through to implementation. These days I do that mostly one to one with designers and product people, and on my own projects.</p>
      <p class="intro-p anim-timed">This is where I document my practice and how I approach design problems and decision-making. Part playground, part portfolio, it brings together some of my favourite case studies and reflections.</p>
    </div>
    <div id="works-section">
      {% include components/folder-link.html url="/works" title="Selected Works" %}
      {% include components/about-mac-icon.html %}
    </div>
    
  </div>

  {% include components/nav.html context="desktop" %}
    
</section>


<section id="about">
  <h2 tabindex="0" data-animate="fade-up">Design approach</h2>
  <p class="section-intro" data-animate="fade-up" data-delay="1">I approach design as a practice of systems thinking, collaboration, and continuous refinement. Here are the principles I follow to ensure impact through my work.
</p>


  <div class="grid-cards" data-stagger="0.1">
    <div class="card">
        <img loading="lazy" src="{{ '/assets/images/icons/feedback.svg' | relative_url }}" alt="Feedback icon" />
        <h3>Design is Dialog</h3>
        <p>No designer gets it right the first time. I share early and often to invite critique that surfaces ideas I wouldn't reach alone. Even unused feedback reveals assumptions worth seeing.</p>
    </div>
    <div class="card">
      <img loading="lazy" src="{{ '/assets/images/icons/roadmap.svg' | relative_url }}" alt="Systems thinking icon" />
      <h3>Systems Over Screens</h3>
      <p>Every design decision ripples through a system. I look at things holistically, zooming out to understand connections, zooming in to account for details. Surfaces might change, but good foundations remain.</p>
    </div>
    <div class="card">
      <img loading="lazy" src="{{ '/assets/images/icons/empathy.svg' | relative_url }}" alt="Human-centered icon" />
      <h3>Design Serves People</h3>
      <p>Products exist to solve real problems for real people. As designers, we're gatekeepers of change, and I'll ask the uncomfortable questions about access, ethics, and impact.</p>

    </div>
  </div>

  <div class="section-cta">
    <a href="mailto:{{ site.contact_email }}" class="cta-button">Get in touch</a>
  </div>
</section>

<section id="my-craft">
  <h2 tabindex="0" data-animate="fade-up">Core skills</h2>
  <p class="section-intro" data-animate="fade-up" data-delay="1">
    I bridge strategy and execution through skills that span problem framing, hands-on design, prototyping, and delivery. These are the core tools I rely on:
  </p>

  <div class="grid-cards" data-stagger="0.08">
    <div class="card">
      <h3>Design Craft & Quality</h3>
      <p>Flows, states, the empty and error screens nobody asks for, and the interface details that decide whether something feels considered. Handoff is one of my favorite parts: engineers get the what and the why, and can build with ownership instead of chasing changing requirements. Design is only done when it’s in the customer’s hands, not when it looks right in a Figma frame.</p>
      <ul class="pills">
        <li class="pill">Interaction design</li>
        <li class="pill">Design Systems</li>
        <li class="pill">Figma</li>
        <li class="pill">Prototypes</li>
        <li class="pill">States & edge cases</li>
        <li class="pill">Usability testing</li>
        <li class="pill">Accessibility</li>
        <li class="pill">Mobile-first</li>
        <li class="pill">Design critique</li>
        <li class="pill">Handoff</li>
        <li class="pill">UX/Dev pairing</li>
        <li class="pill">Quality Assurance</li>
      </ul>
    </div>
    <div class="card">
      <h3>Designing & Building with AI</h3>
      <p>I’ve designed and shipped live products end to end with AI as a build partner. I go back and forth between exploring what the technology can do and folding what holds up into how I work, layered onto the fundamentals rather than replacing them. Nobody has this figured out yet: we’re building the future of design right now, and that takes as much responsibility as excitement.</p>
      <ul class="pills">
        <li class="pill">Claude Code</li>
        <li class="pill">ChatGPT/Codex</li>
        <li class="pill">Gemini CLI</li>
        <li class="pill">MCP servers</li>
        <li class="pill">Agents & subagents</li>
        <li class="pill">Context engineering</li>
        <li class="pill">Prompt Design</li>
        <li class="pill">Output Review</li>
        <li class="pill">Ethical AI usage</li>
      </ul>
    </div>
    <div class="card">
      <h3>Facilitation & Collaboration</h3>
      <p>I bring people together, across roles and perspectives, to frame problems and align on direction. I've got my ways of making even the busiest execs show up and engage. From workshops to MVP planning, I surface open questions and connect user needs to business priorities.</p>
      <ul class="pills">
        <li class="pill">Miro</li>
        <li class="pill">FigJam</li>
        <li class="pill">Design Sprints</li>
        <li class="pill">Product Inception</li>
        <li class="pill">Lean UX</li>
        <li class="pill">Facilitation</li>
        <li class="pill">Workshops</li>
        <li class="pill">Strategy</li>
        <li class="pill">Alignment</li>
      </ul>
    </div>
    <div class="card">
      <h3>Fluency in Code & Tech Conversations</h3>
      <p>My background in software development helps me prototype fast, understand engineering constraints, and avoid design-theoretical dead ends. These days I ship too: products designed and built end to end, deployed and maintained, which keeps me honest about what a design decision really costs to build.</p>
      <ul class="pills">
        <li class="pill">HTML</li>
        <li class="pill">CSS/SCSS</li>
        <li class="pill">JavaScript</li>
        <li class="pill">TypeScript</li>
        <li class="pill">React/Vue</li>
        <li class="pill">Astro</li>
        <li class="pill">SwiftUI</li>
        <li class="pill">Cloudflare Workers</li>
        <li class="pill">Railway</li>
        <li class="pill">Git</li>
        <li class="pill">Github</li>
        <li class="pill">VS Code</li>
      </ul>
    </div>
    <div class="card">
      <h3>Cross-Disciplinary Bridging</h3>
      <p>I often find myself translating between product strategy, business logic, and technical delivery. That means clarifying vague requirements or turning fuzzy goals into concrete artifacts, I bring structure that helps teams align across silos. I love connecting the dots and keeping things moving.</p>
      <ul class="pills">
        <li class="pill">Trello</li>
        <li class="pill">Jira</li>
        <li class="pill">Miro</li>
        <li class="pill">Spreadsheets!</li>
        <li class="pill">Product Management</li>
        <li class="pill">Stakeholder Alignment</li>
        <li class="pill">Design Reviews</li>
        <li class="pill">Team ceremonies (code reviews/demos/retros)</li>
      </ul>
    </div>
    <div class="card">
      <h3>Information Architecture & Semantics</h3>
      <p>I’m obsessed with context and coherence, both in how information is structured and how it's presented. That means caring about navigation, labeling, hierarchy, and even code semantics. Good IA is invisible but powerful, it enables conversations to flow within teams, in code, and with customers.</p>
      <ul class="pills">
        <li class="pill">Sitemaps</li>
        <li class="pill">Usability testing</li>
        <li class="pill">Diagrams</li>
        <li class="pill">Accessibility</li>
        <li class="pill">Component Libraries</li>
        <li class="pill">Software architecture</li>
      </ul>
    </div>
  </div>

  <div class="section-cta">
    <a href="{{ '/works' | relative_url }}" class="cta-button" target="_blank" rel="noopener">See it in practice</a>
  </div>
</section>

<section id="not-my-zone">
  <div class="nmz-content">
    <h2 tabindex="0" data-animate="fade-up">Out of scope</h2>
    <p class="section-intro" data-animate="fade-up" data-delay="1">
      Gotta tell you the truth: I'm not a unicorn, unfortunatelly. Here are a few things I probably won't help you with, and that's okay:
    </p>

    <ul class="pills" data-animate="fade-up" data-delay="2">
      <li class="pill">Branding from scratch</li>
      <li class="pill">Polished motion design</li>
      <li class="pill">Pixel-perfect Dribbble shots</li>
      <li class="pill">Design by consensus</li>
      <li class="pill">Aesthetics-first</li>
      <li class="pill">Greenwashing</li>
      <li class="pill">Skipping research</li>
      <li class="pill">Print production</li>
      <li class="pill">Video production</li>
      <li class="pill">Illustrations</li>
      <li class="pill">Marketing assets</li>
      <li class="pill">Social media content</li>
      <li class="pill">Logo design</li>
      <li class="pill">Stunning visual design</li>
      <li class="pill">Full-time developer</li>
    </ul>
  </div>
</section>


<section id="more-about">
  <h2 tabindex="0" data-animate="fade-up">Career Journey</h2>
  <div class="career-layout">
    <div class="about-content" data-animate="fade-right" data-delay="1">
      <p>I've always been drawn to design:  not just how things look, but how they work and why. I studied both Graphic Design and Systems Analysis, but most of what I know I learned through experience: building, breaking, iterating.</p>

      <p>I started at 16, working as a Webmaster in a small countryside tech company. I spent my teenage years immersed in the internet, fascinated by its creative and connective power. By 18, I joined Dell, working on the US platform and helping migrate a massive CMS using HTML, CSS, XML, JavaScript, and C#.</p>

      <p>Later, as I joined tech communities and got in touch with the boom of start-ups, I took on a UX role at a startup called Engage, where I worked with research, design, and front-end. That experience opened the door to ThoughtWorks, where I deepened my skills in strategy, facilitation, and cross-cultural consulting across India, the US, and Europe.</p>

      <p>I spent 10 years at Booking.com, where I led design for both B2B and B2C products, founded the Design Operations team, and scaled Booking's Design System to support the global design community.</p>

      <p>Along the way, my early practice work at ThoughtWorks was featured in <a href="https://www.amazon.com/Lean-Inception-Align-People-Product/dp/8594377134" target="_blank" rel="noopener">Paulo Caroli's Lean Inception book</a> and a ThoughtWorks anthology. My recorded classes for <a href="https://pm3.com.br/" target="_blank" rel="noopener">PM3</a>, Brazil's largest product management school, are still sold as part of its curriculum today. I've spoken at Product Camp, AgileTrends, UXConfBR and IxDF, and in 2026 I completed a BSc (Honours) in Design and Innovation with <a href="https://www.open.ac.uk/" target="_blank" rel="noopener">The Open University</a>.</p>

      <p>Today I work through <a href="https://eixo.design" target="_blank" rel="noopener">Eixo</a>, my own design practice: one to one with designers and product people, client work where I can help, a few products of my own built with AI as a partner, and balancing motherhood with creative work.</p>
    </div>

    <aside class="career-timeline" data-animate="fade-left" data-delay="2">
      <h3 class="timeline-header">Work Experience</h3>
      <div class="timeline-item">
        <span class="timeline-date">2026 – now</span>
        <h4 class="timeline-company"><a href="https://eixo.design" target="_blank" rel="noopener">Eixo</a></h4>
        <p class="timeline-roles">Founder · Product Strategy · UX Design · Mentorship</p>
      </div>
      <div class="timeline-item">
        <span class="timeline-date">Oct 2015 – 2026</span>
        <h4 class="timeline-company"><a href="https://www.booking.com" target="_blank" rel="noopener">Booking.com</a></h4>
        <p class="timeline-roles">Senior/Lead UX · Design Manager · Design Operations</p>
      </div>
      <div class="timeline-item">
        <span class="timeline-date">Oct 2012 – Aug 2015</span>
        <h4 class="timeline-company"><a href="https://www.thoughtworks.com" target="_blank" rel="noopener">ThoughtWorks</a></h4>
        <p class="timeline-roles">UX Designer · Agile Consultant · Frontend Developer</p>
      </div>
      <div class="timeline-item">
        <span class="timeline-date">Jun 2011 – Oct 2012</span>
        <h4 class="timeline-company">Engage</h4>
        <p class="timeline-roles">Frontend Developer · UX Designer</p>
      </div>
      <div class="timeline-item">
        <span class="timeline-date">Mar 2009 – Jun 2011</span>
        <h4 class="timeline-company"><a href="https://www.dell.com" target="_blank" rel="noopener">Dell Inc.</a></h4>
        <p class="timeline-roles">Frontend Developer</p>
      </div>
      <div class="timeline-item">
        <span class="timeline-date">Feb 2008 – Feb 2009</span>
        <h4 class="timeline-company">TCA Informática</h4>
        <p class="timeline-roles">Webmaster</p>
      </div>
    </aside>
  </div>
</section>

<section id="hire-me">
  <h2 tabindex="0" data-animate="fade-up">Let's Work Together</h2>
  <p class="section-intro" data-animate="fade-up" data-delay="1">I'm open to good work with good people, shaping new ideas, mentoring a fellow designer, or joining a mission-driven team that cares about what they're building.</p>

  <div class="grid-cards" data-stagger="0.1">
    <div class="card">
      <img loading="lazy" src="{{ '/assets/images/icons/freelance.svg' | relative_url }}" alt="Freelance work icon" />
      <h3>Freelance work</h3>
      <p>Need a thoughtful UX designer to make sense of complexity, run a workshop, or help move things forward? Let’s talk and see how I can help you.</p>
    </div>
    <div class="card">
      <img loading="lazy" src="{{ '/assets/images/icons/mentorship.svg' | relative_url }}" alt="Mentorship icon" />
      <h3>Mentorship & Coaching</h3>
      <p>Looking for honest feedback, support with a career transition, or navigating the messier parts of design work? I offer 1:1 sessions and long-term mentorship through Eixo.</p>
      <a class="card-link" href="https://calendly.com/nataliarsand/intro-call-mentorship" target="_blank" rel="noopener">Book a first chat</a>
    </div>
    <div class="card">
      <img loading="lazy" src="{{ '/assets/images/icons/job.svg' | relative_url }}" alt="Job opportunities icon" />
      <h3>Job Opportunities</h3>
      <p>Looking for a lead designer who can work across systems, strategy, and team alignment? I’d love to hear what you’re building.</p>
    </div>
  </div>

  <div class="section-cta">
    <a href="mailto:{{ site.contact_email }}" class="cta-button">Get in touch</a>
  </div>
</section>
