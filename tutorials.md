---
layout: page
weight: 1
title: Hacking Tutorials
menu-title: Tutorials
permalink: /tutorials/
summary: These tutorials are the best place to start. It almost took me two years to get to where I am and become known as an elite hacker. I wrote these tutorials so you can read them and become a hacker within months.
---
<div class="pure-g">
  {% assign tutorials = site.tutorials | where: 'published', 1 | sort:"weight" %}
  {% for tutorial in tutorials %}
    <div class="pure-u-1">
      <h2><a href="{{ tutorial.url }}" title="{{ tutorial.title }}">{{ tutorial.title }}</a></h2>
      <p>{{ tutorial.summary }}</p>
      <a class="pure-button" title="Read {{ tutorial.title }}" href="{{ tutorial.url }}">Read Tutorial <i class="fa fa-caret-right"></i></a>
    </div>
  {% endfor %}
    <div class="pure-u-1">
      <h2><a href="/tutorials/viruses">Viruses</a></h2>
      <p>Viruses, viruses, viruses. Need I say more? Probably the most important facet to hacking, my viruses page will cover viruses in full detail. By reading through this page, you'll learn what viruses do, and even how to make them.</p>
      <a class="pure-button" title="Read Viruses" href="/tutorials/viruses">Read Tutorial <i class="fa fa-caret-right"></i></a>
    </div>
</div>
