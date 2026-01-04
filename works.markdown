---
layout: default
title: Selected Works
main_id: selected-works
---

<section id="works-index">
  <div class="container">
    <h1>Selected Works</h1>
    <div class="works-grid">
      {% assign sorted_works = site.works | sort: 'title' %}
      {% for work in sorted_works %}
        {% include components/folder-link.html url=work.url image="/assets/images/folder.png" alt="folder-icon" title=work.title protected=work.protected %}
      {% endfor %}
    </div>
  </div>
</section>
