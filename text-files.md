---
layout: page
title: Hacking Text Files
icon: text-files.svg

featured: true
featured-title: Text Files
featured-weight: 7
teaser: Browse through hundreds of text files full of hacking information.

hide-nav: true
slug: text-files
category: learn
category-title: Text Files
category-weight: 4
summary: Ever since the beginning of hacking in the early 1990's, hackers were writing articles and documenting their findings. Because the internet wasn't invented yet and they didn't have blogs, they would write them using Microsoft Windows Notepad. When I read a hacking text file I find useful, I post it here.
---
{% assign textfiles = site.textfiles %}
<table class="table table-striped">
  <thead>
    <tr>
      <th>File</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  {% for textfile in textfiles %}
    <tr>
      <td><a class="no-barba" href="/assets/textfiles/{{ textfile.title }}">{{ textfile.title }}</a></td>
      <td>{{ textfile.description }}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>
