---
layout: page
title: Contact
summary: <a href="/faq" title="Frequently Asked Questions">Read the FAQ</a> before e-mailing me. If you ask a question that's already answered there, I will hack you!!1
published: 1
permalink: /contact/
hide-nav: true
---
<div class="contact">

  <p>I don't have my e-mail address listed because I don't want to get tracked by the F.B.I. This form is 100% encrypted and will send messages to me on an untraceable server in Russia, so it is safe for you to use.</p>

  <form class="pure-form" id="callus" target="_self" onsubmit="" action="javascript:postContactToGoogle()">

    <fieldset>
      <label for="name">Name:</label>
      <input id="name" type="text" name="name">
    </fieldset>

    <fieldset>
      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email">
    </fieldset>

    <fieldset>
      <label for="feed">Message:</label>
      <textarea rows="5" cols="30" id="feed" name="feed"></textarea>
    </fieldset>

    <div style="width: 100%; display: block; float: right;">
      <button class="pure-button pure-button-primary" id="send" type="submit">Send encrypted message <i class="fa fa-caret-right"></i></button>
    </div>

    <div style="width: 100%; display: block; float: right; padding-top: 15px;">
      <div class="requestSubmited" style="display:none; text-align: center;">Your request has been sent!</div>
    </div>

  </form>
</div>
