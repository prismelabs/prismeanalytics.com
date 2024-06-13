---
title: "Prisme 0.15 release"
date: "2024-06-11"
tags: ["prisme", "release"]
metas:
  title: "Prisme 0.15 release: sessions tracking, bot filtering and admin metrics!"
  description: "Prisme 0.15 release post about privacy-friendly session tracking, bot filtering and admin metrics!"
  image: "/images/blog/prisme-0.15-release.jpg"
  keywords:
    - Prisme Analytics
    - Session tracking
    - Unique visitors
    - Bounce rate
    - Views per session
    - Average session duration
    - Entry pages
    - Exit pages
    - Pageviews per session
    - Bot filtering
    - AhrefsBot
    - Prometheus format
    - Admin metrics
    - Instance monitoring
    - Alerts
    - Go dependencies
    - IP geolocation database
    - Built-in dashboard
    - Nix flake
    - Docker repository
    - Prisme Cloud
    - Free trial
    - Community contributions
    - Pull requests
    - Feedback
    - Innovation
    - Web analytics
---

Changelog is available [here](https://github.com/prismelabs/analytics/releases/tag/v0.15.0),
please make sure to read it before upgrading.

## Session tracking

The most important new feature of this release is **session tracking**. Previous
versions of Prisme are able to track unique visitors across pages but there was
no such thing as [sessions](/docs/reference/analytics-metrics#total-sessions-or-visits).

Sessions tracking enables the addition of few metrics such as [bounce rate](/docs/reference/analytics-metrics#bounce-rate),
[views per sessions](/docs/reference/analytics-metrics#views-per-session) and
[average session duration](/docs/reference/analytics-metrics#session-duration).

It is now possible to filter on [entry pages](/docs/reference/analytics-metrics#entry-pages),
[exit pages](/docs/reference/analytics-metrics#exit-pages),
[pageviews per session](/docs/reference/analytics-metrics#views-per-session) and
more.

## Bot filtering

If you've used previous versions of Prisme Analytics, you may have noticed
`AhrefsBot` or other bots appearing in your [browsers pie chart](/docs/reference/web-analytics-dashboard#browsers-1).
These bots don't represent real users and can impact your metrics. To provide a
more accurate picture of your website's performance, we're introducing a light
bot filter in this release.

This initial filter won't eliminate all bots, as it is a prototype. However, our
aim is to continually improve the filter over time, ensuring that only genuine
user activity is reflected in your analytics data.

## Admin metrics

This releases also adds admin metrics in prometheus format. With these metrics,
you can now monitor the health and performance of your instance, receive timely
alerts in case of issues.

If you're hosting Prisme instances be sure to read our [metrics reference](/docs/reference/admin-metrics).

## Minor changes and maintenance

Other few minor changes comes with this release:
* go dependencies got updated
* update of embedded IP geolocation database
* built-in dashboard got updated
* update of nix flake

## Upgrade to Prisme 0.15

Download [Prisme 0.15](https://hub.docker.com/r/prismelabs/analytics) from our
Docker repository today or experience all new features by signing up for
[Prisme Cloud](https://app.prismeanalytics.com/) which has a free trial of 30
days.

## Special thanks to our community

We extend our heartfelt gratitude to the Prisme community!

Your contributions, ranging from pull requests to valuable feedback, are crucial
in continually enhancing Prisme. And your enthusiasm and dedication inspire us
at Prisme Labs to persistently innovate and elevate the Prisme platform.

*[Prisme Cloud](https://app.prismeanalytics.com) is the easiest way to get
started with web analytics. Sign up for a free trial now!*

