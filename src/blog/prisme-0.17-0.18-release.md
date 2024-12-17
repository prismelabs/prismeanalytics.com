---
title: "Prisme 0.17 & 0.18 release"
date: "2024-12-17"
tags: ["prisme", "release"]
author: '[Alexandre Negrel](https://www.negrel.dev)'
metas:
  title: "Prisme 0.17 & 0.18 release: File downloads, outbound links and exclude your own visits"
  description: "Prisme 0.17 & 0.18 release post about file downloads events, outbound links and exclude your own visits"
  image: "/images/blog/prisme-0.17-0.18-release.png"
  keywords:
    - Prisme Analytics
    - Web analytics
    - Prisme 0.16 release
    - JavaScript less tracking
    - Recurring visitors
    - Marketing campaigns
    - Analytics tools
    - Website optimization
    - User engagement metrics
    - Conversion rate improvement
    - Data-driven decision making
    - Web development updates
    - Prisme software
    - Digital marketing strategies
    - Tracking and analysis
    - Visitor behavior insights
    - How to improve recurring visitors with Prisme 0.16 release
    - Marketing campaign optimization using JavaScript less tracking
    - Boosting website engagement with Prisme's latest features
    - Understanding visitor behavior with Prisme's analytics tools
    - Improving conversion rates with data-driven decision making
---

Make sure to read
[v0.17](https://github.com/prismelabs/analytics/releases/tag/v0.17.0) and
[v0.18](https://github.com/prismelabs/analytics/releases/tag/v0.18.0) changelog
before upgrading.

## HTTP errors tracking

Prisme v0.18 introduces HTTP status code tracking for page view events, enabling
you to monitor and analyze 404 errors, server errors, and other HTTP status
codes. To implement this feature, check out our
[updated tracking script setup guide](/docs/guides/setup-tracking-script/).

## File downloads events

We're excited to introduce comprehensive file download tracking. Your dashboard
now includes a new panel showcasing your top 10 downloaded files.

<img src="/images/blog/top-file-downloads.png" alt="screenshot of file downloads panel" style="max-height: 30rem"/>

The system automatically tracks any link with a
[`download`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download)
attribute. For those
preferring JavaScript-free tracking, we support the
[`ping`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#ping)
attribute. You can easily
[disable](/docs/references/tracking-script/#file-downloads-data-file-downloads)
this tracking if desired.

## Outbound link click events

Track visitor engagement with external links through our new outbound link
analytics feature.

<img src="/images/blog/top-outbound-links.png" alt="screenshot of top outbound links panel" style="max-height: 30rem"/>

The system automatically tracks clicks on links pointing to external domains.
We offer JavaScript-free tracking via the
[`ping`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#ping)
attribute and a dedicated
[`GET /api/v1/noscript/event/outbound-links` endpoint](/docs/references/http/#outbound-link-clicks-1).
endpoint. This feature can be
[configured](/docs/references/tracking-script/#outbound-links-data-outbound-links)
to suit your needs.

## Exclude your own visits

Starting from version 0.18, you can exclude your own visits by following
[our exclusion guide](/docs/guides/exclude-your-own-visits/).

## Data accuracy improvements

Data accuracy has been greatly improved with:
- multi session support
- duplicate tab detection
- duplicate consecutive page view detection

## Minor changes and maintenance

Other few minor changes comes with this release:

- go dependencies got updated
- update of embedded IP geolocation database
- Web Analytics dashboard got updated

## Upgrade to Prisme 0.18

Download [Prisme 0.18](https://hub.docker.com/r/prismelabs/analytics) from our
Docker repository today or experience all new features by signing up for
[Prisme Cloud](https://app.prismeanalytics.com/authn/sign_up) which has a free
trial of 30 days.

## Special thanks to our community

We extend our heartfelt gratitude to the Prisme community!

Your contributions, ranging from pull requests to valuable feedback, are crucial
in continually enhancing Prisme. And your enthusiasm and dedication inspire us
at Prisme Labs to persistently innovate and elevate the Prisme platform.

_[Prisme Cloud](https://app.prismeanalytics.com/authn/sign_up) is the easiest
way to get started with web analytics. Sign up for a free trial now!_
