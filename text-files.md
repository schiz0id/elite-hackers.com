---
layout: page
title: Hacking Text Files
hide-nav: true
permalink: /text-files/
summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et mauris auctor, tincidunt orci lacinia, eleifend massa. Sed tristique ultricies eros id vulputate. Donec ultricies ac purus quis porta. Nam ante augue, efficitur et nibh quis, venenatis porttitor nulla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.
---
{% assign textfiles = site.textfiles %}
<div class="textfiles">
  <table class="pure-table">
    <thead>
      <tr>
        <th>File</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
    {% for textfile in textfiles %}
      <tr>
        <td><a href="/assets/textfiles/{{ textfile.title }}">{{ textfile.title }}</a></td>
        <td>{{ textfile.description }}</td>
      </tr>
    {% endfor %}
    </tbody>
  </table>
</div>
