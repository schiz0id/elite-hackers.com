---
layout: page
weight: 1
title: Hacking Tutorials
icon: tutorials.svg

featured: true
featured-title: Tutorials
featured-weight: 1
teaser: Read my articles and learn how to become an elite hacker!

type: article-list

menu-title: Tutorials
slug: tutorials
category: learn
category-title: Tutorials
category-weight: 1
summary: These tutorials are the best place to start. It almost took me two years to get to where I am and become known as an elite hacker. I wrote these tutorials so you can read them and become a hacker within months.
---
{% assign tutorials = site.tutorials | where: 'published', 1 | sort:"weight" %}
{% for tutorial in tutorials %}
  {% include article-list-item.html url=tutorial.url title=tutorial.title summary=tutorial.summary %}
{% endfor %}

{% include article-list-item.html url='tutorials/viruses' title='Viruses' summary="Viruses, viruses, viruses. Need I say more? Probably the most important facet to hacking, my viruses page will cover viruses in full detail. By reading through this page, you'll learn what viruses do, and even how to make them." %}
