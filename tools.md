---
layout: page
weight: 2
title: Hacking Tools
icon: tools.svg

featured: true
featured-title: Tools
featured-weight: 2
teaser: Get a password cracker, keylogger, or anything else you need.

menu-title: Tools
permalink: /tools/
category: resources
category-title: Tools
category-weight: 3
summary: A skilled hacker always keeps a wide variety of tools so he can complete any task. Here you will find all the tools you will need to get the job done.
---
{% assign tools = site.tools | sort:"weight" %}

{% for tool in tools %}

  {% capture url %}http://www.amazon.com/dp/{{ tool.asin }}/?tag={{ site.amazon_tracking_id }}{% endcapture %}

  <div class="content-row">
        <h2><a href="{{ url }}" target="_blank" title="{{ tool.title}}">{{ tool.title }}</a></h2>
        <p>{{ tool.description }}</p>
        <a title="Get {{ tool.title }}" class="pure-button" href="{{ url }}" target="_blank">Get it <i class="fa fa-caret-right"></i></a>
  </div>

{% endfor %}

<div class="content-row">
  <h2>E-Mail Hacking Tool</h2>
  <p>You can completely own your victim once you have access to their e-mail account. This tool will hack their e-mail account so you can read their e-mail, pretend to be them, and even get access to their password reset e-mails for social media or dating web site accounts.</p>
  <p>The e-mail hacking tool is currently being updated. Check back for an updated version.</p>
</div>

<div class="content-row">
  <h2>Facebook Hacking Tool</h2>
  <p>Facebook has billions of users, and your victim is probably one of them. Use this tool to hack into their Facebook account.</p>
  <p>I'm still building the Facebook hacking tool and will release it soon.</p>
</div>
