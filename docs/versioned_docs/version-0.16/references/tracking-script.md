---
sidebar_position: 1
---

# Tracking script

This page document Prisme Analytics tracking script configuration options and
JavaScript API.

## Configuration options

User tracking is done via an ultra light script (< 1kb) tag added to pages of
your website. This script is served by Prisme Analytics instances at
`/static/wa.js`. You can consult its content
[here](https://github.com/prismelabs/analytics/blob/master/tracker).

This script is statically served (e.g. no templating) so configuration is done
via
[data-attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).

### Prisme URL (`data-prisme-url`)

[URL](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)
used to send event to a Prisme Analytics instance.

Example:
`data-prisme-url="https://my-prisme-instance.example.com/custom/subpath"`

Default to [origin](https://developer.mozilla.org/en-US/docs/Web/API/URL/origin)
of URL used to load the script:

```html
<!-- Events will be send to https://my-prisme-instance.example.com -->
<script src="https://my-prisme-instance.example.com/static/wa.js" defer></script>
```

### Domain (`data-domain`)

Domain from which events originate. This is mainly useful if you have multiple
domains pointing to the same site.

Default is website host (e.g. `location.host` in javascript).

See https://developer.mozilla.org/en-US/docs/Web/API/Location/host

Example: `data-domain="www.example.com"`

### Path (`data-path`)

Path of the viewed page. This is useful if you have a lot of dynamic pages with
path parameters and you don't want to track them individually.

```html
<script src="https://my-prisme-instance.example.com/static/wa.js" data-path="/products/:product-id" defer></script>
```

This options is **ignored** when [manual tracking](#manual-data-manual) is
enabled or a pageview event was already sent using `data-path` (e.g. second
pageview on websites with client side routing).

### Manual (`data-manual`)

Enable manual tracking if value isn't `false`. When enabled, a `pageview` method
is added to global `prisme` object.

## JavaScript API

Prisme expose all of it's public API functions under `window.prisme`. If you're
using tracking script provided

### Page views

Page view events are automatically send on page load and when a new entry is
pushed to
[`window.history`](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState).
This should cover static websites and SPA (Single Page Application) using client
side routing.

If you enabled **manual tracking**, you **MUST** send pageview event manually
using `window.prisme.pageview`.

This function takes a single parameter, an object with the following optional
properties:

- `domain`: Viewed page domain name. Default to
  [`location.host`](https://developer.mozilla.org/en-US/docs/Web/API/Location/host)
- `path`: Viewed page path. Default to
  [`location.pathname`](https://developer.mozilla.org/en-US/docs/Web/API/Location/pathname)
- `visitorId`: Unique identifier associated with the session.

> **NOTE**: If you specify a visitor id that allows you to track your visitor
> over days, you must ask for their consent.

> **NOTE**: Avoid using Personal Identifiable Information (PII) such as an email
> address as visitors id.

#### Examples

Send an simple pageview event:

```js
window.prisme.pageview();
```

Send a pageview event with custom path:

```js
window.prisme.pageview({ path: "/products/:product-id" });
```

### Custom events

Custom events can be send via the `window.prisme.trigger` function. This
function takes two argument:

- a string: the name of the event
- an object: key-value pairs or attributes attached to the event.

:::note

You don't need to include the date, domain or the path of the page in the object
as it is automatically added by Prisme server.

:::

:::tip

It is recommended to avoid nested JSON objects as it may impact performance at
query time.

:::

#### Examples

Send an empty custom event:

```js
window.prisme.trigger("sign_up");
```

Send a simple custom event:

```js
window.prisme.trigger("checkout", {
  plan: "growth",
  frequency: "monthly",
});
```
