---
layout: page
title: Hacker's Dictionary
icon: dictionary.svg

featured: true
featured-title: Dictionary
featured-weight: 5
teaser: Familiarize yourself with must-know hacker vocabulary.

type: definition-list

hide-nav: true
slug: dictionary
category: resources
category-title: Hacker's Dictionary
summary: This dictionary is the first place to turn if you come across a hacking-related word you don't understand and want to learn exactly what it means.
---
{% assign terms = site.dictionary_terms | sort: 'title' %}
<dl>
{% for term in terms %}
  <dt>{{ term.title }}</dt>
  <dd>{{ term.content }}</dd>
{% endfor %}
</dl>
