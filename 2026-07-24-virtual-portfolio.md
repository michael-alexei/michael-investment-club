---
layout: base.njk
---
<div class="container">
  <section class="post-page">
    <a href="/insights/" style="text-decoration:none;color:var(--blue)">← Market Insights</a>
    <div class="post-meta" style="margin-top:22px">{{ date | readableDate }}</div>
    <h1 style="font-size:clamp(2.4rem,5vw,4rem);color:var(--navy)">{{ title }}</h1>
    {% if summary %}<p class="lead">{{ summary }}</p>{% endif %}
    {% if image %}<img src="{{ image }}" alt="{{ title }}" style="width:100%;margin:22px 0">{% endif %}
    <div class="post-body">{{ content | safe }}</div>
    <div class="callout" style="margin-top:34px">
      <strong>Educational Disclaimer</strong>
      <p style="margin-bottom:0">This post is for educational purposes only and is not financial, investment, tax, or legal advice.</p>
    </div>
  </section>
</div>
