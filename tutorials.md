---
layout: page
title: Tutorials
permalink: /tutorials/
---
<div class="pure-g">
  {% for tutorial in site.tutorials %}
    <div class="pure-u-1 pure-u-sm-1-1 pure-u-md-1-2 pure-u-lg-1-3 pure-u-xl-1-4">
      <h2><a href="{{ tutorial.url }}">{{ tutorial.title }}</a></h2>
      {{ tutorial.excerpt }}
    </div>
  {% endfor %}
</div>
