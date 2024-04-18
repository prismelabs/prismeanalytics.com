---
title: "Prisme 0.14 release: custom events, improved performances and clean shutdown!"
lang: "en"
date: "2024-04-17"
tags: ["prisme", "release"]
metas:
  title: "Prisme 0.14 release"
  description: "The Prisme 0.14 release includes support for custom events, clean shutdown and better performance!"
  image: "/images/blog/prisme-0.14-release.jpg"
  keywords:
    - Prisme Analytics
    - v0.14.0
    - Release
    - Web Analytics
    - Custom Events
    - Non-blocking Ring Buffers
    - Teardown Service
    - Primary Index
    - Embedded IP Geolocation Database
    - Built-in Dashboard
    - Data Management
    - Performance Optimization
    - User Insights
    - Data Integrity
    - Scalability
    - Migration
    - Analytics Workflow
    - Decision-making
    - Strategy Refinement
    - Geographic Insights
---

Last week, April 11, 2024, 9:41 AM GMT+2, Prisme Analytics v0.14.0 was released.

Changelog is available [here](https://github.com/prismelabs/analytics/releases/tag/v0.14.0),
please make sure to read it before upgrading.

## Custom events

The most important new feature of this release is **custom events**. Previous
versions of Prisme only allowed you to send structured page view events.
This was a quite limiting factor for a solution that claims to be customizable.

Release of v0.14.0 adds support for custom, unstructured events.
Combined with [Grafana](https://grafana.com) customizable dashboards, you can
now create a custom dashboard based on tailored, custom metrics for your
specific business.

Tracking script now exposes an javascript API under `window.prisme` so you can
send custom events, documentation and examples available [here](https://www.prismeanalytics.com/docs/api/tracking-script#custom-events).

If you want to directly use the HTTP API, documentation is available [here](https://www.prismeanalytics.com/docs/api/http#custom-events).

Finally, to build custom dashboards, you will need the table schema of the new
`events_custom` table. It is available [here](https://www.prismeanalytics.com/docs/api/clickhouse#custom-events)

Before starting to send custom events, please read all documentation so you
can get the most out of it.

## Teardown service

Another improvement part of this release is the add of an internal teardown
service. Before v0.14.0, when a Prisme instance received a shutdown signal, it
would exit immediately. This could result in the loss of analytics data as
events are send to the database in batch to improve performances.

Prisme instance >=v0.14 can, now, cleanly terminate their jobs before exiting.

## Minor changes and maintenance

Other few minor changes comes with this release:
* better resilience
* update of embedded IP geolocation database
* built-in dashboard got updated
* update of nix flake

Resilience was improved by replacing channels with [non blocking
ring buffers](https://github.com/negrel/ringo). Due to this change, Prisme
instances will drop events instead of saturing go channel if events consumer is
slower than events produces. This could happen if, for example, the network is
unstable and Prisme can't send events to the database.

## Upgrade to Prisme 0.14

Download [Prisme 0.14](https://hub.docker.com/r/prismelabs/analytics) from our
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

