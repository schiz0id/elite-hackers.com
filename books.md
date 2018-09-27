---
layout: page
weight: 3
title: "Hacking Books"
icon: book.svg

featured: true
featured-title: Books
featured-weight: 3
teaser: Find books on hacking web sites, phones, and wireless networks.

type: article-list

menu-title: "Books"
slug: books
category: learn
category-title: Books
category-weight: 2
summary: "<strong>Warning: The books listed here are hard to find in bookstores because of the methods and techniques they cover.</strong> I have read these books to grow my skills and I recommend that you read them as well. Each book talks about a different way of hacking the servers, networks, or computers of your victims."
---
{% assign books = site.books %}
{% for book in books %}

  {% capture url %}http://www.amazon.com/dp/{{ book.asin }}/?tag={{ site.amazon_tracking_id }}{% endcapture %}

  <article class="mb-5">
    <div class="media">
      <div class="mr-3"><a target="_blank" href="{{ url }}"><img src="{{ book.imgur-sm }}"></a></div>
      <div class="media-body">
      <h2 class="mt-0"><a href="{{ url }}" title="{{ book.title }}">{{ book.title }}</a></h2>
        <p>{{ book.description }}</p>
        <p><a class="btn btn-primary" title="Get {{ book.title }}" href="{{ url }}">Get it <i class="fa fa-caret-right"></i></a></p>
      </div>
    </div>
  </article>
{% endfor %}

