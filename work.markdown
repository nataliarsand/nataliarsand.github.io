---
layout: default
title: Selected Works
main_id: selected-works
---

<section id="selected-works" class="container">
  <h1>Selected Works</h1>
  <p>Case studies and impactful UX work that reflect my approach to design systems, collaboration, and human-centered delivery.</p>

  <div class="works-grid">
    {% for work in site.works %}
      <article class="work-tile">
        <a href="{{ work.url }}">
          {% if work.image %}
            <img loading="lazy" src="{{ work.image }}" alt="{{ work.title }} thumbnail">
          {% endif %}
          <h2>{{ work.title }}</h2>
          <p>{{ work.description | truncate: 120 }}</p>
        </a>
      </article>
    {% endfor %}
  </div>
</section>
