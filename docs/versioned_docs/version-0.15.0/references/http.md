---
sidebar_position: 3
---

# HTTP API

This page document the HTTP APIs. These APIs are used
by websites, servers or mobiles application to produce events.

You may want to take a look at the [tracking script](./tracking-script.md) to
add analytics to your website instead of directly interacting with the HTTP API.

## Events API

Request to events API are rate limited by IP address (max 60 events per minute)
and [standard `429 Too Many Requests`
responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) are
returned if limit is exceeded.

### Page View Events

You can create page view events using the following operation:
`POST /api/v1/events/pageviews`.

* [`Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) 
header **MUST** contain [origin](https://developer.mozilla.org/en-US/docs/Web/API/URL/origin)
of request. This is automatically added by browsers.

* `X-Prisme-Referrer` or [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer)
(with single `r` typo) header **MUST** contains URL of viewed page.

* `X-Prisme-Document-Referrer` header **MUST** contains client referrer, URL from
which viewer comes from, if present.

* `User-Agent` header **MUST** contains client [User-Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent).
This is used to determine browser and device.

* [`X-Forwarded-For`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For)
or [value of PRISME_PROXY_HEADER option](../references/server/default-mode.md#proxy-header)
header (if [PRISME_TRUST_PROXY](../references/server/default-mode.md#trust-proxy) is true) to determine
client IP address. This is used to determine clients location. Typically, reverse
proxies (such as Envoy used by Prisme Cloud) adds this header.

Server return `400 Bad Request` if URLs from headers are invalid or origin is 
not registered.

### Custom Events

Since v0.14.0, Prisme supports custom events. You can create custom events using
the following operation: `POST /api/v1/events/custom/:name` 
(`:name` corresponding to the name of your event such as `click`, `sign_up`, etc)

* [`Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) 
header **MUST** contain [origin](https://developer.mozilla.org/en-US/docs/Web/API/URL/origin)
of request. This is automatically added by browsers.

* `X-Prisme-Referrer` or [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer)
(with single `r` typo) header **MUST** contains URL of page that triggered the event.

* `Content-Type` **MUST** be `application/json`

* Request body **MUST** contains a valid, *preferably* flat for better query
performance, JSON **object**. This is where you should put you're custom data.

## Health Check

You can check that your instance is running with the following operation:
`GET /api/v1/healthcheck`.

