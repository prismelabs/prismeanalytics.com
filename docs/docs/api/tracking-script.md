---
sidebar_position: 1
---

# Tracking Script

Prisme expose all of it's public API functions under `window.prisme`. If you're
using tracking script provided

## Page Views

Page view events are automatically send on page load and when a new entry is
pushed to [`window.history`](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState).
This should cover static websites and SPA (Single Page Application) using client router.

## Custom Events

Custom events can be send via the `window.prisme.trigger` function. This 
function takes two argument:
* a string: the name of the event
* an object: key-value pairs or attributes attached to the event.

:::note
You don't need to include the date, domain or the path of the page in the object
as it automatically added by Prisme server.
:::

### Examples

Send an empty custom event:

```js
window.prisme.trigger('sign_up')
```

Send a simple custom event:

```js
window.prisme.trigger('checkout', {
    plan: 'growth',
    frequency: 'monthly'
})
```
