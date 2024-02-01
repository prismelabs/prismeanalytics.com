# HTTP API reference

This page document the HTTP APIs. These APIs are used
by [client script](../02-set-up/01-configuration/02-configure-client-script.md)
and potentially your server or mobile application to produce events.

## Events API

Request to events API are rate limited by IP address and [standard `429 Too Many Requests`
responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) are
returned if limit is exceeded.

### Page View Events

You can create page view events using the following operation:
`POST /api/v1/events/pageviews`.

* `X-Prisme-Referrer` or [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer)
(with single `r` typo) header **MUST** contain URL of viewed page.

* `X-Prisme-Document-Referrer` header **MUST** contain client referrer, URL from
which viewer comes from, if present.

* `User-Agent` header **MUST** contain client [User-Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent).
This is used to determine its browser and device.

* [`X-Forwarded-For`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For)
or [value of PRISME_PROXY_HEADER option](../02-set-up/01-configuration/01-configure-server/03-ingestion-mode.md#proxy-header)
header (if [PRISME_TRUST_PROXY](../02-set-up/01-configuration/01-configure-server/02-default-mode.md#trust-proxy) is true) to determine
client IP address. This is used to determine client location.

Server return `400 Bad Request` if URLs from headers are invalid or contains a
domain that is not [registered](../02-set-up/01-configuration/01-configure-server/03-ingestion-mode.md#sources)

## Health Check

You can check that your instance is running with the following operation:
`GET /api/v1/healthcheck`.
