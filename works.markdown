---
layout: default
title: Selected Works
main_id: selected-works
description: "Case studies and projects in UX design, design systems, and product strategy. Explore work from healthcare, fintech, and consumer products."
---

<section id="works-index">
  <div class="container">
    <h1 class="anim-on-load fade-in-up">Selected Works</h1>
    <div class="works-grid">
      {% assign sorted_works = site.works | sort: 'title' %}
      {% for work in sorted_works %}
        {% include components/folder-link.html url=work.url image="/assets/images/folder.png" alt="folder-icon" title=work.title protected=work.protected %}
      {% endfor %}
    </div>
  </div>
</section>
