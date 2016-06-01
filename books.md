---
layout: page
title: "Hacking Books"
summary: "Summary"
hide-nav: true
---
{% assign books = site.books %}

<div class="pure-g">
{% for book in books %}
  <div class="pure-u-1-3">
    <img src="{{ book.imgur-sm }}">
  </div>
  <div class="pure-u-2-3">
    <h3>{{ book.title }}</h3>
    {{ book.description }}
  </div>
{% endfor %}
</div>
