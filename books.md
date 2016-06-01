---
layout: page
title: "Hacking Books"
summary: "Summary"
hide-nav: true
---
{% assign books = site.books %}
{% for book in books %}
  <h3>{{ book.title }}</h3>

  {{ book.description }}
{% endfor %}
