---
layout: page
title: Hacker's Dictionary
hide-nav: true
permalink: /dictionary/
summary: This dictionary is the first place to turn if you come across a hacking-related word you don't understand and want to learn exactly what it means.
---
{% assign terms = site.dictionary_terms | sort: 'title' %}
<div class="dictionary">
  <dl>
  {% for term in terms %}
    <dt>{{ term.title }}</dt>
    <dd>{{ term.content }}</dd>
  {% endfor %}
  </dl>
</div>
