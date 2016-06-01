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
      <h2><a href="{{ tutorial.url }}">{{ tutorial.title }}</a></h2>
      {{ tutorial.summary }}
    </div>
  {% endfor %}
</div>
