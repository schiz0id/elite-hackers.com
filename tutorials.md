---
layout: page
weight: 1
title: Hacking Tutorials
menu-title: Tutorials
permalink: /tutorials/
summary: These tutorials are the best place to start. It almost took me two years to get to where I am and become known as an elite hacker. I wrote these tutorials so you can read them and become a hacker within months.
---
<div class="pure-g">
  {% for tutorial in site.tutorials %}
    <div class="pure-u-1 pure-u-sm-1-1 pure-u-md-1-2 pure-u-lg-1-3 pure-u-xl-1-4">
      <h2><a href="{{ tutorial.url }}">{{ tutorial.title }}</a></h2>
      {{ tutorial.summary }}
    </div>
  {% endfor %}
</div>
