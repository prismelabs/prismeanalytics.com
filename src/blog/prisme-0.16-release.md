---
title: "Prisme 0.16 release"
date: "2024-08-08"
tags: ["prisme", "release"]
author: '[Alexandre Negrel](https://www.negrel.dev)'
metas:
  title: "Prisme 0.16 release: Marketing campaigns, recurring visitors and javascript less tracking!"
  description: "Prisme 0.16 release post about marketing campaigns, recurring visitors and javascript less tracking!"
  image: "/images/blog/prisme-0.16-release.png"
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

Changelog is available
[here](https://github.com/prismelabs/analytics/releases/tag/v0.16.0), please
make sure to read it before upgrading.

## Marketing campaigns

This release adds support for
[UTM parameters](/blog/understanding-utm-parameters), de-facto standard to track
effectiveness of online marketing campaigns across traffic sources and
publishing media.

New filters should appear on "Web Analytics" dashboard allowing you to visualize
traffic from specific campaigns.

![screenshot of new dashboard filters](/images/blog/utm_filters_dashboard.png)

## Recurring visitors

Starting from this release, Prisme supports manually specifying visitor ID on
pageview events. This is a foundational feature that will help adding product
analytics features later. Specifying a visitor ID allows tracking recurring
visitors across days, weeks and months.

Note that specifying non-anonymized data has legal implications and may not be
GDPR compliant. Be sure to know what you're doing before using this feature, a
guide will be published later.

## JavaScript less tracking

Prisme is often described as a **progressive** analytics service in the sense
that it can quickly be adopted for simple web analytics while also being
adaptable to meet your specific requirements.

However, we're working hard to make Prisme progressive in the sense of PWA
(Progressive Web Apps) capabilities, supporting tracking without JavaScript,
with JavaScript, and even embracing new standards like
[`Sec-CH-UA-Platform`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Platform)
as they emerge and standardize.

[New API endpoints](/docs/references/http/#noscript-events-api) serving
ultra-lightweight (35 bytes) transparent single pixel GIF image were added for
all events. You can now send events using plain HTML:

```html
<!-- Set position to absolute to not disrupt document layout flow -->
<img src="https://<prisme-instance-hostname>/api/v1/noscript/events/<event>" style="position:absolute;top:-100px;">
```

If you want to use it as a fallback, be sure to wrap your `<img>` tags in a
`<noscript>` tag. This way, browsers will load (and thus send events) images
only when JavaScript is not supported/disabled.

## Grafana 11.0

Grafana 11.0 was released and break its API, starting from this version Grafana
10 is no longer supported.

## Minor changes and maintenance

Other few minor changes comes with this release:

- go dependencies got updated
- update of embedded IP geolocation database
- Web Analytics dashboard got updated
- update of nix flake

## Upgrade to Prisme 0.16

Download [Prisme 0.16](https://hub.docker.com/r/prismelabs/analytics) from our
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
