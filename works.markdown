---
layout: default
title: Selected Works
---

<section id="works-index">
  <div class="container">
    <h1>Selected Works</h1>
    <div class="works-grid">
      {% assign sorted_works = site.works | sort: 'title' %}
      {% for work in sorted_works %}
        <a href="{{ work.url }}" class="folder-link">
          <img src="/assets/images/folder.png" alt="folder-icon" class="folder-icon">
          <p class="folder-title">{{ work.title }}</p>
        </a>
      {% endfor %}
    </div>
  </div>
</section>
